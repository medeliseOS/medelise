'use client';

import { useCallback, useRef } from 'react';
import type { StepProps } from './Step1_DatePersonale';

/* ═══════════════════════════════════════════════════════════════════════════
 * Step 4 — Încărcare CV + Scrisoare de Intenție
 * ═══════════════════════════════════════════════════════════════════════════ */

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export default function Step4_IncarcareCV({ data, onChange }: StepProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const validateFile = useCallback((file: File): boolean => {
        if (!ACCEPTED_TYPES.includes(file.type)) {
            onChange('cvError', 'Format invalid. Acceptăm doar PDF, DOC sau DOCX.');
            return false;
        }
        if (file.size > MAX_FILE_SIZE) {
            onChange('cvError', 'Fișierul depășește limita de 5 MB.');
            return false;
        }
        onChange('cvError', '');
        return true;
    }, [onChange]);

    const handleFileChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file && validateFile(file)) {
                onChange('cvFile', file);
            }
        },
        [validateFile, onChange]
    );

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            onChange('isDragOver', false);
            const file = e.dataTransfer.files?.[0];
            if (file && validateFile(file)) {
                onChange('cvFile', file);
            }
        },
        [validateFile, onChange]
    );

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        onChange('isDragOver', true);
    }, [onChange]);

    const handleDragLeave = useCallback(() => {
        onChange('isDragOver', false);
    }, [onChange]);

    const removeCv = useCallback(() => {
        onChange('cvFile', null);
        onChange('cvError', '');
        if (fileInputRef.current) fileInputRef.current.value = '';
    }, [onChange]);

    const formatSize = (bytes: number) => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    const cvFile = data.cvFile as File | null;
    const cvError = (data.cvError as string) ?? '';
    const isDragOver = (data.isDragOver as boolean) ?? false;

    return (
        <fieldset className="aj-step-card">
            <legend className="aj-step-card-title">Documente</legend>

            {/* CV Upload */}
            <div className="aj-field">
                <label className="aj-label">
                    CV <span className="aj-req">*</span>
                </label>

                {!cvFile ? (
                    <div
                        role="button"
                        tabIndex={0}
                        className={`aj-upload-zone ${isDragOver ? 'aj-upload-zone--active' : ''}`}
                        onClick={() => fileInputRef.current?.click()}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click(); }}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                    >
                        <div className="aj-upload-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 3V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="aj-upload-text">
                            Trage fișierul aici sau <strong>alege de pe dispozitiv</strong>
                        </p>
                        <span className="aj-upload-hint">PDF, DOC sau DOCX · Maxim 5 MB</span>
                    </div>
                ) : (
                    <div className="aj-file-preview">
                        <div className="aj-file-info">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div>
                                <p className="aj-file-name">{cvFile.name}</p>
                                <span className="aj-file-size">{formatSize(cvFile.size)}</span>
                            </div>
                        </div>
                        <button type="button" className="aj-file-remove" onClick={removeCv} aria-label="Șterge CV">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                )}

                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    style={{ display: 'none' }}
                    aria-label="Încarcă CV"
                    onChange={handleFileChange}
                />

                {cvError && <p className="aj-error">{cvError}</p>}
            </div>

            {/* Letter of intent */}
            <div className="aj-field">
                <label className="aj-label" htmlFor="aj-scrisoare">
                    Scrisoare de intenție
                </label>
                <textarea
                    id="aj-scrisoare"
                    placeholder="Scrie câteva rânduri despre motivația ta și de ce dorești să faci parte din echipa Medelise..."
                    maxLength={1000}
                    rows={5}
                    className="aj-textarea"
                    value={data.scrIsoareIntentie ?? ''}
                    onChange={(e) => onChange('scrIsoareIntentie', e.target.value)}
                />
            </div>
        </fieldset>
    );
}

export function validateStep4(data: Record<string, any>): boolean {
    return !!data.cvFile;
}
