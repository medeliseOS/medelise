'use client';

import { useState, useMemo, useRef, useCallback } from 'react';
import Button from '@/components/ui/Button';
import {
    type MedicalRole,
    type DocumentRequirement,
    getRequirementsForRole,
    getMalpraxisTooltip,
    ROLE_LABELS,
} from './documentRequirements';

/* ═══════════════════════════════════════════════════════════════════════════
 * TYPES
 * ═══════════════════════════════════════════════════════════════════════════ */

interface DocumentCheckerProps {
    /** The currently selected medical role */
    selectedRole: MedicalRole;
    /** Optional B2B documents to show instead of personal documents */
    b2bDocuments?: DocumentRequirement[];
}

/* ═══════════════════════════════════════════════════════════════════════════
 * INLINE SVG ICONS (no external deps)
 * ═══════════════════════════════════════════════════════════════════════════ */

function PdfIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="7" y="18" fontSize="7" fontWeight="700" fill="currentColor" fontFamily="sans-serif">PDF</text>
        </svg>
    );
}

function ImageIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
            <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function InfoIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function UploadIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 3V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function FileDocIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
 * HELPERS
 * ═══════════════════════════════════════════════════════════════════════════ */

function getFileTypeIcons(fileTypes: string[]) {
    const hasPdf = fileTypes.includes('pdf');
    const hasImage = fileTypes.some((t) => ['jpg', 'jpeg', 'png'].includes(t));
    return { hasPdf, hasImage };
}

function groupBySections(docs: DocumentRequirement[]) {
    const general = docs.filter((d) => d.section === 'general');
    const specific = docs.filter((d) => d.section === 'specific');
    const malpraxis = docs.filter((d) => d.section === 'malpraxis');
    return { general, specific, malpraxis };
}

function formatFileSize(bytes: number) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function buildAcceptString(fileTypes: string[]): string {
    const map: Record<string, string> = {
        pdf: '.pdf',
        jpg: '.jpg,.jpeg',
        jpeg: '.jpeg',
        png: '.png',
    };
    return fileTypes.map((t) => map[t] || `.${t}`).join(',');
}

/* ═══════════════════════════════════════════════════════════════════════════
 * COMPONENT
 * ═══════════════════════════════════════════════════════════════════════════ */

export default function DocumentChecker({ selectedRole, b2bDocuments }: DocumentCheckerProps) {
    const [checkedDocs, setCheckedDocs] = useState<Set<string>>(new Set());
    const [uploadedFiles, setUploadedFiles] = useState<Record<string, File[]>>({});
    const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

    const requirements = useMemo(
        () => b2bDocuments ?? getRequirementsForRole(selectedRole),
        [selectedRole, b2bDocuments],
    );
    const sections = useMemo(() => groupBySections(requirements), [requirements]);
    const malpraxisTooltip = useMemo(() => getMalpraxisTooltip(selectedRole), [selectedRole]);

    const totalDocs = requirements.length;
    const checkedCount = [...checkedDocs].filter((id) =>
        requirements.some((r) => r.id === id),
    ).length;

    const toggleDoc = (id: string) => {
        setCheckedDocs((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    /* ── File upload handlers ── */
    const handleFileUpload = useCallback((docId: string, files: FileList | null) => {
        if (!files || files.length === 0) return;
        const newFiles = Array.from(files);
        setUploadedFiles((prev) => ({
            ...prev,
            [docId]: [...(prev[docId] || []), ...newFiles],
        }));
        // Auto-check the document when files are added
        setCheckedDocs((prev) => {
            const next = new Set(prev);
            next.add(docId);
            return next;
        });
    }, []);

    const removeFile = useCallback((docId: string, fileIndex: number) => {
        setUploadedFiles((prev) => {
            const current = prev[docId] || [];
            const updated = current.filter((_, i) => i !== fileIndex);
            const result = { ...prev };
            if (updated.length === 0) {
                delete result[docId];
                // Auto-uncheck when all files removed
                setCheckedDocs((p) => {
                    const next = new Set(p);
                    next.delete(docId);
                    return next;
                });
            } else {
                result[docId] = updated;
            }
            return result;
        });
    }, []);

    const triggerFileInput = useCallback((docId: string) => {
        fileInputRefs.current[docId]?.click();
    }, []);

    const roleLabel = ROLE_LABELS[selectedRole];

    /* ── Render a single document row ── */
    function renderDocRow(doc: DocumentRequirement) {
        const isChecked = checkedDocs.has(doc.id);
        const { hasPdf, hasImage } = getFileTypeIcons(doc.fileTypes);
        const tooltip = doc.id === 'malpraxis' ? malpraxisTooltip : doc.tooltip;
        const files = uploadedFiles[doc.id] || [];
        const acceptStr = buildAcceptString(doc.fileTypes);

        return (
            <div
                key={doc.id}
                className={`dc-row ${isChecked ? 'dc-row--checked' : ''}`}
                role="listitem"
            >
                {/* Checkbox */}
                <label className="dc-checkbox-label" htmlFor={`dc-${doc.id}`}>
                    <input
                        id={`dc-${doc.id}`}
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleDoc(doc.id)}
                        className="dc-checkbox-input"
                    />
                    <span className={`dc-checkbox-box ${isChecked ? 'dc-checkbox-box--checked' : ''}`}>
                        {isChecked && <CheckIcon />}
                    </span>
                </label>

                {/* Content */}
                <div className="dc-row-content">
                    <div className="dc-row-header">
                        <span className={`dc-row-label ${isChecked ? 'dc-row-label--checked' : ''}`}>
                            {doc.label}
                            {doc.required && <span className="dc-required">*</span>}
                        </span>
                        <div className="dc-row-meta">
                            <span className="dc-file-types">
                                {hasPdf && <span className="dc-file-badge"><PdfIcon /> PDF</span>}
                                {hasImage && <span className="dc-file-badge"><ImageIcon /> JPG</span>}
                            </span>
                            {tooltip && (
                                <span className="dc-tooltip-trigger" tabIndex={0} aria-label={tooltip}>
                                    <InfoIcon />
                                    <span className="dc-tooltip">{tooltip}</span>
                                </span>
                            )}
                        </div>
                    </div>
                    {doc.description && (
                        <p className="dc-row-desc">{doc.description}</p>
                    )}

                    {/* ── Upload Area ── */}
                    <div className="dc-upload-area">
                        {/* Hidden file input */}
                        <input
                            ref={(el) => { fileInputRefs.current[doc.id] = el; }}
                            type="file"
                            multiple
                            accept={acceptStr}
                            className="dc-file-input-hidden"
                            onChange={(e) => {
                                handleFileUpload(doc.id, e.target.files);
                                e.target.value = '';
                            }}
                        />

                        {/* Uploaded files list */}
                        {files.length > 0 && (
                            <div className="dc-uploaded-list">
                                {files.map((file, idx) => (
                                    <div key={`${file.name}-${idx}`} className="dc-uploaded-file">
                                        <div className="dc-uploaded-file-info">
                                            <FileDocIcon />
                                            <span className="dc-uploaded-file-name">{file.name}</span>
                                            <span className="dc-uploaded-file-size">{formatFileSize(file.size)}</span>
                                        </div>
                                        <button
                                            type="button"
                                            className="dc-uploaded-file-remove"
                                            onClick={() => removeFile(doc.id, idx)}
                                            aria-label={`Șterge ${file.name}`}
                                        >
                                            <CloseIcon />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Upload button */}
                        <button
                            type="button"
                            className="dc-upload-btn"
                            onClick={() => triggerFileInput(doc.id)}
                        >
                            <UploadIcon />
                            {files.length === 0 ? 'Încarcă document' : 'Adaugă alt fișier'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    /* ── Render section group ── */
    function renderSection(title: string, docs: DocumentRequirement[]) {
        if (docs.length === 0) return null;
        return (
            <div className="dc-section" role="list" aria-label={title}>
                <h4 className="dc-section-title">{title}</h4>
                {docs.map(renderDocRow)}
            </div>
        );
    }

    return (
        <>
            <div className="dc-container" key={selectedRole}>
                {/* Header */}
                <div className="dc-header">
                    <div className="dc-header-left">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5Z" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3 className="dc-title">Documente necesare</h3>
                    </div>
                    <div className="dc-progress">
                        <span className="dc-progress-text">
                            {checkedCount} / {totalDocs} pregătite
                        </span>
                        <div className="dc-progress-bar">
                            <div
                                className="dc-progress-fill"
                                style={{ width: totalDocs > 0 ? `${(checkedCount / totalDocs) * 100}%` : '0%' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Role badge */}
                <div className="dc-role-badge">
                    Rol selectat: <strong>{roleLabel}</strong>
                </div>

                {/* Sections */}
                {renderSection('Documente Generale', sections.general)}
                {renderSection(`Specific: ${roleLabel}`, sections.specific)}
                {renderSection('Asigurare Malpraxis', sections.malpraxis)}

                {/* Completion state */}
                {checkedCount === totalDocs && totalDocs > 0 && (
                    <div className="dc-complete">
                        <CheckIcon /> Toate documentele sunt pregătite!
                    </div>
                )}
            </div>

            <style jsx global>{`
                /* ═══════════════════════════════════════
                 * §1 CONTAINER
                 * ═══════════════════════════════════════ */
                .dc-container {
                    border: 1px solid var(--color-surface-border);
                    border-radius: var(--radius-main);
                    background: var(--color-white);
                    box-shadow: var(--shadow-sm);
                    padding: var(--space-6);
                    min-height: 400px;
                    animation: dc-fade-in 0.3s ease-out;
                }

                @keyframes dc-fade-in {
                    from { opacity: 0; transform: translateY(8px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                /* ═══════════════════════════════════════
                 * §2 HEADER
                 * ═══════════════════════════════════════ */
                .dc-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: var(--space-4);
                    margin-bottom: var(--space-4);
                    padding-bottom: var(--space-4);
                    border-bottom: 1px solid var(--color-surface-border);
                }

                .dc-header-left {
                    display: flex;
                    align-items: center;
                    gap: var(--space-2);
                    color: var(--color-primary);
                }

                .dc-title {
                    font-family: var(--font-heading);
                    font-size: var(--text-lg);
                    font-weight: 600;
                    color: var(--color-text);
                    margin: 0;
                    line-height: var(--lh-heading);
                }

                /* Progress */
                .dc-progress {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: var(--space-1);
                    min-width: 120px;
                }

                .dc-progress-text {
                    font-family: var(--font-body);
                    font-size: var(--text-sm);
                    color: var(--color-text-muted);
                    font-weight: 500;
                }

                .dc-progress-bar {
                    width: 100%;
                    height: var(--space-1);
                    background: var(--color-surface);
                    border-radius: var(--radius-full);
                    overflow: hidden;
                }

                .dc-progress-fill {
                    height: 100%;
                    background: var(--color-success);
                    border-radius: var(--radius-full);
                    transition: width 0.3s ease;
                }

                /* Role badge */
                .dc-role-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-1);
                    font-family: var(--font-body);
                    font-size: var(--text-sm);
                    color: var(--color-text-muted);
                    background: var(--color-surface);
                    padding: var(--space-1) var(--space-3);
                    border-radius: var(--radius-full);
                    margin-bottom: var(--space-6);
                }

                .dc-role-badge strong {
                    color: var(--color-primary);
                    font-weight: 600;
                }

                /* ═══════════════════════════════════════
                 * §3 SECTIONS
                 * ═══════════════════════════════════════ */
                .dc-section {
                    margin-bottom: var(--space-6);
                }

                .dc-section:last-of-type {
                    margin-bottom: 0;
                }

                .dc-section-title {
                    font-family: var(--font-heading);
                    font-size: var(--text-sm);
                    font-weight: 600;
                    color: var(--color-text-muted);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin: 0 0 var(--space-3) 0;
                    padding-bottom: var(--space-2);
                    border-bottom: 1px solid var(--color-surface-border);
                }

                /* ═══════════════════════════════════════
                 * §4 DOCUMENT ROW
                 * ═══════════════════════════════════════ */
                .dc-row {
                    display: flex;
                    align-items: flex-start;
                    gap: var(--space-3);
                    padding: var(--space-4);
                    border-radius: var(--radius-main);
                    transition: background 0.15s ease;
                    margin-bottom: var(--space-2);
                    border: 1px solid transparent;
                }

                .dc-row:last-child {
                    margin-bottom: 0;
                }

                .dc-row:hover {
                    background: var(--color-surface);
                }

                .dc-row--checked {
                    background: color-mix(in srgb, var(--color-success) 4%, transparent);
                    border-color: color-mix(in srgb, var(--color-success) 15%, transparent);
                }

                .dc-row--checked:hover {
                    background: color-mix(in srgb, var(--color-success) 8%, transparent);
                }

                /* Checkbox */
                .dc-checkbox-label {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    flex-shrink: 0;
                    padding-top: 2px;
                }

                .dc-checkbox-input {
                    position: absolute;
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                .dc-checkbox-box {
                    width: 20px;
                    height: 20px;
                    border: 2px solid var(--color-input-border);
                    border-radius: var(--radius-sm);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.15s ease;
                    color: var(--color-white);
                    background: var(--color-white);
                }

                .dc-checkbox-box--checked {
                    background: var(--color-success);
                    border-color: var(--color-success);
                }

                .dc-checkbox-input:focus-visible + .dc-checkbox-box {
                    box-shadow: var(--shadow-focus);
                }

                /* Row content */
                .dc-row-content {
                    flex: 1;
                    min-width: 0;
                }

                .dc-row-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: var(--space-3);
                    flex-wrap: wrap;
                }

                .dc-row-label {
                    font-family: var(--font-body);
                    font-size: var(--text-body);
                    font-weight: 500;
                    color: var(--color-text);
                    transition: color 0.15s ease;
                }

                .dc-row-label--checked {
                    color: var(--color-text-muted);
                    text-decoration: line-through;
                }

                .dc-required {
                    color: var(--color-error);
                    margin-left: var(--space-1);
                }

                .dc-row-desc {
                    font-family: var(--font-body);
                    font-size: var(--text-sm);
                    color: var(--color-text-muted);
                    margin: var(--space-1) 0 0 0;
                    line-height: var(--lh-body);
                }

                /* Meta: file badges + tooltip */
                .dc-row-meta {
                    display: flex;
                    align-items: center;
                    gap: var(--space-2);
                    flex-shrink: 0;
                }

                .dc-file-types {
                    display: flex;
                    gap: var(--space-1);
                }

                .dc-file-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 3px;
                    font-family: var(--font-body);
                    font-size: 11px;
                    font-weight: 500;
                    color: var(--color-text-muted);
                    background: var(--color-surface);
                    padding: 2px var(--space-2);
                    border-radius: var(--radius-sm);
                    text-transform: uppercase;
                    letter-spacing: 0.03em;
                }

                /* Tooltip */
                .dc-tooltip-trigger {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    color: var(--color-info);
                    cursor: help;
                    outline: none;
                }

                .dc-tooltip {
                    position: absolute;
                    bottom: calc(100% + var(--space-2));
                    right: 0;
                    width: max-content;
                    max-width: 280px;
                    padding: var(--space-2) var(--space-3);
                    background: var(--color-primary);
                    color: var(--color-white);
                    font-family: var(--font-body);
                    font-size: var(--text-sm);
                    font-weight: 400;
                    line-height: var(--lh-body);
                    border-radius: var(--radius-main);
                    box-shadow: var(--shadow-md);
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.2s ease, transform 0.2s ease;
                    transform: translateY(4px);
                    z-index: 10;
                }

                .dc-tooltip-trigger:hover .dc-tooltip,
                .dc-tooltip-trigger:focus .dc-tooltip {
                    opacity: 1;
                    pointer-events: auto;
                    transform: translateY(0);
                }

                /* ═══════════════════════════════════════
                 * §5 UPLOAD AREA (per row)
                 * ═══════════════════════════════════════ */
                .dc-upload-area {
                    margin-top: var(--space-3);
                }

                .dc-file-input-hidden {
                    position: absolute;
                    width: 0;
                    height: 0;
                    opacity: 0;
                    pointer-events: none;
                }

                .dc-upload-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-2);
                    padding: var(--space-2) var(--space-3);
                    font-family: var(--font-body);
                    font-size: var(--text-sm);
                    font-weight: 500;
                    color: var(--color-primary);
                    background: transparent;
                    border: 1px dashed var(--color-primary);
                    border-radius: var(--radius-main);
                    cursor: pointer;
                    transition: background 0.15s ease, border-color 0.15s ease;
                }

                .dc-upload-btn:hover {
                    background: color-mix(in srgb, var(--color-primary) 5%, transparent);
                    border-style: solid;
                }

                /* Uploaded files list */
                .dc-uploaded-list {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-2);
                    margin-bottom: var(--space-3);
                }

                .dc-uploaded-file {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: var(--space-3);
                    padding: var(--space-2) var(--space-3);
                    background: var(--color-surface);
                    border: 1px solid var(--color-surface-border);
                    border-radius: var(--radius-sm);
                    animation: dc-fade-in 0.2s ease-out;
                }

                .dc-uploaded-file-info {
                    display: flex;
                    align-items: center;
                    gap: var(--space-2);
                    color: var(--color-primary);
                    min-width: 0;
                }

                .dc-uploaded-file-name {
                    font-family: var(--font-body);
                    font-size: var(--text-sm);
                    font-weight: 500;
                    color: var(--color-text);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .dc-uploaded-file-size {
                    font-family: var(--font-body);
                    font-size: 11px;
                    color: var(--color-text-muted);
                    white-space: nowrap;
                    flex-shrink: 0;
                }

                .dc-uploaded-file-remove {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 24px;
                    height: 24px;
                    padding: 0;
                    border: none;
                    background: none;
                    color: var(--color-text-muted);
                    border-radius: var(--radius-sm);
                    cursor: pointer;
                    flex-shrink: 0;
                    transition: color 0.15s ease, background 0.15s ease;
                }

                .dc-uploaded-file-remove:hover {
                    color: var(--color-error);
                    background: color-mix(in srgb, var(--color-error) 8%, transparent);
                }

                /* ═══════════════════════════════════════
                 * §6 COMPLETE STATE
                 * ═══════════════════════════════════════ */
                .dc-complete {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: var(--space-2);
                    padding: var(--space-4);
                    margin-top: var(--space-6);
                    background: color-mix(in srgb, var(--color-success) 8%, transparent);
                    color: var(--color-success);
                    font-family: var(--font-body);
                    font-size: var(--text-body);
                    font-weight: 600;
                    border-radius: var(--radius-main);
                    animation: dc-fade-in 0.3s ease-out;
                }

                /* ═══════════════════════════════════════
                 * §7 RESPONSIVE
                 * ═══════════════════════════════════════ */
                @media (max-width: 640px) {
                    .dc-header {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .dc-progress {
                        width: 100%;
                        align-items: flex-start;
                    }

                    .dc-row-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: var(--space-2);
                    }

                    .dc-tooltip {
                        right: auto;
                        left: 0;
                    }

                    .dc-uploaded-file-info {
                        overflow: hidden;
                    }
                }
            `}</style>
        </>
    );
}
