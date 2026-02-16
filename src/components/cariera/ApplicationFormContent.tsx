'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { JOBS } from '@/components/cariera/jobData';
import DocumentChecker from '@/components/cariera/DocumentChecker';
import { getRoleForSlug } from '@/components/cariera/documentRequirements';

/* ── Props ── */
interface ApplicationFormContentProps {
    slug: string;
}

/* ── Specialty options ── */
const SPECIALTIES = [
    'Medicină Generală',
    'Asistent Medical',
    'Kinetoterapeut',
    'Ambulanțier',
    'Medic de Familie',
    'Coordonator Medical',
    'Altă specialitate',
];

/* ── Experience ranges ── */
const EXPERIENCE_RANGES = [
    'Sub 1 an',
    '1 – 3 ani',
    '3 – 5 ani',
    '5 – 10 ani',
    'Peste 10 ani',
];

/* ── Professional grade ── */
const GRADES = ['Debutant', 'Rezident', 'Specialist', 'Principal'];

/* ── Availability ── */
const AVAILABILITY = ['Full-time', 'Part-time', 'Colaborare', 'Weekenduri'];

/* ── Max CV file size: 5 MB ── */
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export default function ApplicationFormContent({ slug }: ApplicationFormContentProps) {
    const job = JOBS[slug];
    const jobTitle = job?.title ?? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    /* ── State ── */
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [cvError, setCvError] = useState('');
    const [isDragOver, setIsDragOver] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    /* ── File validation ── */
    const validateFile = useCallback((file: File): boolean => {
        if (!ACCEPTED_TYPES.includes(file.type)) {
            setCvError('Format invalid. Acceptăm doar PDF, DOC sau DOCX.');
            return false;
        }
        if (file.size > MAX_FILE_SIZE) {
            setCvError('Fișierul depășește limita de 5 MB.');
            return false;
        }
        setCvError('');
        return true;
    }, []);

    /* ── File handlers ── */
    const handleFileChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file && validateFile(file)) {
                setCvFile(file);
            }
        },
        [validateFile]
    );

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            setIsDragOver(false);
            const file = e.dataTransfer.files?.[0];
            if (file && validateFile(file)) {
                setCvFile(file);
            }
        },
        [validateFile]
    );

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(true);
    }, []);

    const handleDragLeave = useCallback(() => {
        setIsDragOver(false);
    }, []);

    const removeCv = useCallback(() => {
        setCvFile(null);
        setCvError('');
        if (fileInputRef.current) fileInputRef.current.value = '';
    }, []);

    /* ── Submit ── */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Honeypot anti-spam
        if (formData.get('website')) return;

        // Validate CV is attached
        if (!cvFile) {
            setCvError('Te rugăm să atașezi CV-ul.');
            return;
        }

        setFormStatus('sending');

        try {
            // Append CV file
            formData.append('cv', cvFile);
            formData.append('pozitie', jobTitle);
            formData.append('slug', slug);

            // TODO: Replace with actual API endpoint
            // await fetch('/api/cariera/aplica', { method: 'POST', body: formData });
            await new Promise((r) => setTimeout(r, 1500));

            setFormStatus('sent');
            form.reset();
            setCvFile(null);
        } catch {
            setFormStatus('error');
        }
    };

    /* Format file size */
    const formatSize = (bytes: number) => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    return (
        <>
            <style jsx>{`
                /* ═══════════════════════════════════════
                 * APPLICATION FORM PAGE
                 * ═══════════════════════════════════════ */
                .apply-page {
                    width: 100%;
                    min-height: 100vh;
                    background: var(--color-surface);
                    font-family: var(--font-body);
                }

                /* ── Header ── */
                .apply-header {
                    width: 100%;
                    background: var(--color-primary);
                    padding: var(--space-16) var(--space-section-px-sm) var(--space-10);
                }

                /* ── Back button ── */
                .apply-back-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-2);
                    background: rgba(255, 255, 255, 0.12);
                    border: 1px solid rgba(255, 255, 255, 0.18);
                    border-radius: 8px;
                    padding: var(--space-2) var(--space-4);
                    color: var(--color-white);
                    font-size: 14px;
                    font-weight: 500;
                    text-decoration: none;
                    cursor: pointer;
                    transition: background 0.2s, border-color 0.2s;
                    margin-bottom: var(--space-5);
                }

                .apply-back-btn:hover {
                    background: rgba(255, 255, 255, 0.2);
                    border-color: rgba(255, 255, 255, 0.3);
                }

                .apply-back-btn svg {
                    flex-shrink: 0;
                }

                .apply-breadcrumb {
                    display: flex;
                    align-items: center;
                    gap: var(--space-2);
                    margin-bottom: var(--space-6);
                    font-size: 14px;
                    line-height: 20px;
                }

                .apply-breadcrumb-link {
                    color: var(--color-secondary);
                    text-decoration: none;
                    transition: opacity 0.2s;
                }

                .apply-breadcrumb-link:hover {
                    opacity: 0.8;
                }

                .apply-breadcrumb-sep {
                    color: rgba(255, 255, 255, 0.4);
                }

                .apply-breadcrumb-current {
                    color: rgba(255, 255, 255, 0.7);
                }

                .apply-header-title {
                    color: var(--color-white);
                    font-family: var(--font-heading);
                    font-size: 32px;
                    font-weight: 600;
                    line-height: 40px;
                    margin: 0 0 var(--space-2) 0;
                }

                .apply-header-subtitle {
                    color: var(--color-secondary);
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    margin: 0;
                }

                /* ── Form container ── */
                .apply-form-wrapper {
                    width: 100%;
                    padding: var(--space-10) var(--space-section-px-sm);
                }

                .apply-form {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-10);
                }

                /* ── Side-by-side section row ── */
                .apply-section-row {
                    display: flex;
                    gap: var(--space-6);
                    align-items: flex-start;
                    padding: 0 var(--space-16);
                }

                .apply-section-row > .apply-section {
                    flex: 1;
                    min-width: 0;
                }

                /* ── Section groups ── */
                .apply-section {
                    background: var(--color-white);
                    border-radius: 12px;
                    border: 1px solid var(--color-surface-border);
                    padding: var(--space-6);
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-5);
                }

                .apply-section-title {
                    font-family: var(--font-heading);
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 24px;
                    color: var(--color-primary);
                    margin: 0;
                    padding-bottom: var(--space-3);
                    border-bottom: 1px solid var(--color-surface-border);
                }

                /* ── Field groups ── */
                .apply-field-row {
                    display: flex;
                    gap: var(--space-4);
                }

                .apply-field {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-1);
                }

                .apply-field-label {
                    color: var(--color-text);
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 20px;
                }

                .apply-field-label .required {
                    color: var(--color-error);
                    margin-left: 2px;
                }

                .apply-field-input,
                .apply-field-select,
                .apply-field-textarea {
                    width: 100%;
                    padding: 10px 12px;
                    background: var(--color-white);
                    border-radius: 8px;
                    border: 1px solid var(--color-border-form);
                    font-size: 15px;
                    font-family: inherit;
                    font-weight: 400;
                    line-height: 22px;
                    color: var(--color-text);
                    outline: none;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }

                .apply-field-input:focus,
                .apply-field-select:focus,
                .apply-field-textarea:focus {
                    border-color: var(--color-primary);
                    box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 8%, transparent);
                }

                .apply-field-input::placeholder,
                .apply-field-textarea::placeholder {
                    color: var(--color-border-light);
                }

                .apply-field-input[readonly] {
                    background: var(--color-surface);
                    color: var(--color-text-muted);
                    cursor: default;
                }

                .apply-field-select {
                    appearance: none;
                    background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23637083' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-position: right 12px center;
                    padding-right: 36px;
                    cursor: pointer;
                }

                .apply-field-textarea {
                    resize: vertical;
                    min-height: 100px;
                }

                /* ── Checkbox rows ── */
                .apply-checkbox-row {
                    display: flex;
                    align-items: flex-start;
                    gap: var(--space-3);
                }

                .apply-checkbox {
                    width: 18px;
                    height: 18px;
                    margin-top: 2px;
                    accent-color: var(--color-primary);
                    cursor: pointer;
                    flex-shrink: 0;
                }

                .apply-checkbox-label {
                    font-size: 14px;
                    line-height: 20px;
                    color: var(--color-text);
                    cursor: pointer;
                }

                .apply-checkbox-label a {
                    color: var(--color-primary);
                    text-decoration: underline;
                }

                /* ── CV Upload Zone ── */
                .apply-upload-zone {
                    border: 2px dashed var(--color-border-form);
                    border-radius: 10px;
                    padding: var(--space-8) var(--space-6);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: var(--space-3);
                    cursor: pointer;
                    transition: border-color 0.2s, background 0.2s;
                    text-align: center;
                }

                .apply-upload-zone:hover {
                    border-color: var(--color-primary);
                    background: color-mix(in srgb, var(--color-primary) 2%, transparent);
                }

                .apply-upload-zone--drag {
                    border-color: var(--color-primary);
                    background: color-mix(in srgb, var(--color-primary) 5%, transparent);
                }

                .apply-upload-zone--error {
                    border-color: var(--color-error);
                }

                .apply-upload-icon {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: var(--color-surface);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-primary);
                }

                .apply-upload-text {
                    font-size: 14px;
                    color: var(--color-text-muted);
                    line-height: 20px;
                }

                .apply-upload-text strong {
                    color: var(--color-primary);
                    font-weight: 600;
                    cursor: pointer;
                }

                .apply-upload-hint {
                    font-size: 12px;
                    color: var(--color-text-light);
                    line-height: 16px;
                }

                /* ── CV File preview ── */
                .apply-cv-preview {
                    display: flex;
                    align-items: center;
                    gap: var(--space-3);
                    padding: var(--space-3) var(--space-4);
                    background: var(--color-surface);
                    border-radius: 8px;
                    border: 1px solid var(--color-surface-border);
                }

                .apply-cv-icon {
                    width: 36px;
                    height: 36px;
                    border-radius: 8px;
                    background: var(--color-primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .apply-cv-info {
                    flex: 1;
                    min-width: 0;
                }

                .apply-cv-name {
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--color-text);
                    line-height: 20px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .apply-cv-size {
                    font-size: 12px;
                    color: var(--color-text-muted);
                    line-height: 16px;
                }

                .apply-cv-remove {
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    border: none;
                    background: transparent;
                    color: var(--color-text-muted);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.2s, color 0.2s;
                    flex-shrink: 0;
                }

                .apply-cv-remove:hover {
                    background: color-mix(in srgb, var(--color-error) 8%, transparent);
                    color: var(--color-error);
                }

                .apply-error-text {
                    font-size: 13px;
                    color: var(--color-error);
                    margin: 0;
                    line-height: 18px;
                }

                /* ── Honeypot ── */
                .apply-honeypot {
                    position: absolute;
                    left: -9999px;
                    opacity: 0;
                    height: 0;
                    overflow: hidden;
                }

                /* Submit button — uses <Button /> component */

                /* ── Status messages ── */
                .apply-success {
                    text-align: center;
                    padding: var(--space-10) var(--space-6);
                    background: var(--color-white);
                    border-radius: 12px;
                    border: 1px solid var(--color-surface-border);
                }

                .apply-success-icon {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background: color-mix(in srgb, var(--color-success) 10%, transparent);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto var(--space-4);
                }

                .apply-success-title {
                    font-family: var(--font-heading);
                    font-size: 22px;
                    font-weight: 600;
                    color: var(--color-primary);
                    margin: 0 0 var(--space-2) 0;
                }

                .apply-success-text {
                    font-size: 15px;
                    color: var(--color-text-muted);
                    line-height: 22px;
                    margin: 0 0 var(--space-6) 0;
                }

                .apply-success-link {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-2);
                    color: var(--color-primary);
                    font-weight: 600;
                    font-size: 15px;
                    text-decoration: none;
                    transition: opacity 0.2s;
                }

                .apply-success-link:hover {
                    opacity: 0.8;
                }

                .apply-error-msg {
                    color: var(--color-error);
                    font-size: 14px;
                    font-weight: 500;
                    text-align: center;
                    margin: 0;
                    padding: var(--space-3) var(--space-4);
                    background: color-mix(in srgb, var(--color-error) 6%, transparent);
                    border-radius: 8px;
                }

                /* ═══════════════════════════════════════
                 * TABLET ≥641px
                 * ═══════════════════════════════════════ */
                @media (min-width: 641px) {
                    .apply-header {
                        padding: var(--space-20) var(--space-section-px-md) var(--space-12);
                    }

                    .apply-form-wrapper {
                        padding: var(--space-12) var(--space-section-px-md);
                    }

                    .apply-header-title {
                        font-size: 36px;
                        line-height: 44px;
                    }

                    .apply-section {
                        padding: var(--space-8);
                    }
                }

                /* ═══════════════════════════════════════
                 * DESKTOP ≥1025px
                 * ═══════════════════════════════════════ */
                @media (min-width: 1025px) {
                    .apply-header {
                        padding: var(--space-24) var(--space-section-px-lg) var(--space-12);
                    }

                    .apply-form-wrapper {
                        padding: var(--space-16) var(--space-section-px-lg);
                    }

                    .apply-header-title {
                        font-size: 40px;
                        line-height: 48px;
                    }

                    .apply-section {
                        padding: var(--space-8) var(--space-10);
                    }
                }

                /* ═══════════════════════════════════════
                 * MOBILE <480px
                 * ═══════════════════════════════════════ */
                @media (max-width: 480px) {
                    .apply-field-row,
                    .apply-section-row {
                        flex-direction: column;
                    }

                    .apply-header-title {
                        font-size: 26px;
                        line-height: 34px;
                    }
                }
            `}</style>

            <main className="apply-page">
                {/* ── Header ── */}
                <header className="apply-header">
                    <Link href={`/cariera/${slug}`} className="apply-back-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Înapoi la {jobTitle}
                    </Link>
                    <nav className="apply-breadcrumb">
                        <Link href="/cariera" className="apply-breadcrumb-link">Carieră</Link>
                        <span className="apply-breadcrumb-sep">›</span>
                        <Link href={`/cariera/${slug}`} className="apply-breadcrumb-link">{jobTitle}</Link>
                        <span className="apply-breadcrumb-sep">›</span>
                        <span className="apply-breadcrumb-current">Aplică</span>
                    </nav>
                    <h1 className="apply-header-title">Aplică pentru {jobTitle}</h1>
                    <p className="apply-header-subtitle">Completează formularul de mai jos pentru a te înscrie în procesul de selecție.</p>
                </header>

                {/* ── Form ── */}
                <div className="apply-form-wrapper">
                    {formStatus === 'sent' ? (
                        /* ── Success state ── */
                        <div className="apply-form" style={{ maxWidth: 720 }}>
                            <div className="apply-success">
                                <div className="apply-success-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="var(--color-success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h2 className="apply-success-title">Aplicația ta a fost trimisă!</h2>
                                <p className="apply-success-text">
                                    Mulțumim că ai aplicat pentru poziția de <strong>{jobTitle}</strong>. Echipa noastră de recrutare va analiza profilul tău și te va contacta în cel mai scurt timp.
                                </p>
                                <Link href="/cariera" className="apply-success-link">
                                    ← Înapoi la joburi
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <form className="apply-form" onSubmit={handleSubmit} noValidate>
                            {/* Honeypot */}
                            <div className="apply-honeypot" aria-hidden="true">
                                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                            </div>

                            {/* ═══ Secțiunile 1+2: Date Personale + Experiență (side-by-side) ═══ */}
                            <div className="apply-section-row">
                                <fieldset className="apply-section">
                                    <legend className="apply-section-title">Date personale</legend>

                                    <div className="apply-field-row">
                                        <div className="apply-field">
                                            <label className="apply-field-label" htmlFor="apply-nume">
                                                Nume <span className="required">*</span>
                                            </label>
                                            <input
                                                id="apply-nume"
                                                name="nume"
                                                type="text"
                                                required
                                                minLength={2}
                                                placeholder="Popescu"
                                                className="apply-field-input"
                                            />
                                        </div>
                                        <div className="apply-field">
                                            <label className="apply-field-label" htmlFor="apply-prenume">
                                                Prenume <span className="required">*</span>
                                            </label>
                                            <input
                                                id="apply-prenume"
                                                name="prenume"
                                                type="text"
                                                required
                                                minLength={2}
                                                placeholder="Maria"
                                                className="apply-field-input"
                                            />
                                        </div>
                                    </div>

                                    <div className="apply-field-row">
                                        <div className="apply-field">
                                            <label className="apply-field-label" htmlFor="apply-email">
                                                E-mail <span className="required">*</span>
                                            </label>
                                            <input
                                                id="apply-email"
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="maria.popescu@email.com"
                                                className="apply-field-input"
                                            />
                                        </div>
                                        <div className="apply-field">
                                            <label className="apply-field-label" htmlFor="apply-telefon">
                                                Telefon <span className="required">*</span>
                                            </label>
                                            <input
                                                id="apply-telefon"
                                                name="telefon"
                                                type="tel"
                                                required
                                                placeholder="+40 7XX XXX XXX"
                                                className="apply-field-input"
                                            />
                                        </div>
                                    </div>

                                    <div className="apply-field-row">
                                        <div className="apply-field">
                                            <label className="apply-field-label" htmlFor="apply-oras">
                                                Oraș / Localitate <span className="required">*</span>
                                            </label>
                                            <input
                                                id="apply-oras"
                                                name="oras"
                                                type="text"
                                                required
                                                placeholder="București"
                                                className="apply-field-input"
                                            />
                                        </div>
                                        <div className="apply-field">
                                            <label className="apply-field-label" htmlFor="apply-data-nastere">
                                                Data nașterii
                                            </label>
                                            <input
                                                id="apply-data-nastere"
                                                name="dataNasterii"
                                                type="date"
                                                className="apply-field-input"
                                            />
                                        </div>
                                    </div>
                                </fieldset>

                                {/* ═══ Secțiunea 2: Experiență Profesională ═══ */}
                                <fieldset className="apply-section">
                                    <legend className="apply-section-title">Experiență profesională</legend>

                                    <div className="apply-field">
                                        <label className="apply-field-label" htmlFor="apply-pozitie">
                                            Poziția aplicată
                                        </label>
                                        <input
                                            id="apply-pozitie"
                                            type="text"
                                            readOnly
                                            value={jobTitle}
                                            className="apply-field-input"
                                        />
                                    </div>

                                    <div className="apply-field-row">
                                        <div className="apply-field">
                                            <label className="apply-field-label" htmlFor="apply-specialitate">
                                                Specialitate medicală <span className="required">*</span>
                                            </label>
                                            <select
                                                id="apply-specialitate"
                                                name="specialitate"
                                                required
                                                className="apply-field-select"
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Selectează specialitatea</option>
                                                {SPECIALTIES.map((s) => (
                                                    <option key={s} value={s}>{s}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="apply-field">
                                            <label className="apply-field-label" htmlFor="apply-experienta">
                                                Ani de experiență <span className="required">*</span>
                                            </label>
                                            <select
                                                id="apply-experienta"
                                                name="experienta"
                                                required
                                                className="apply-field-select"
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Selectează experiența</option>
                                                {EXPERIENCE_RANGES.map((r) => (
                                                    <option key={r} value={r}>{r}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="apply-field-row">
                                        <div className="apply-field">
                                            <label className="apply-field-label" htmlFor="apply-grad">
                                                Grad profesional
                                            </label>
                                            <select
                                                id="apply-grad"
                                                name="gradProfesional"
                                                className="apply-field-select"
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Selectează gradul</option>
                                                {GRADES.map((g) => (
                                                    <option key={g} value={g}>{g}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="apply-field">
                                            {/* Spacer on desktop, or telemedicine checkbox */}
                                            <div className="apply-checkbox-row" style={{ paddingTop: 26 }}>
                                                <input
                                                    id="apply-telemedicina"
                                                    name="atestatTelemedicina"
                                                    type="checkbox"
                                                    className="apply-checkbox"
                                                />
                                                <label htmlFor="apply-telemedicina" className="apply-checkbox-label">
                                                    Dețin atestat telemedicină
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            {/* ═══ Secțiunile 3+4+5: Disponibilitate + Documente + Consimțământ (side-by-side) ═══ */}
                            <div className="apply-section-row">
                                <fieldset className="apply-section">
                                    <legend className="apply-section-title">Disponibilitate</legend>

                                    <div className="apply-field-row">
                                        <div className="apply-field">
                                            <label className="apply-field-label" htmlFor="apply-disponibilitate">
                                                Tip program <span className="required">*</span>
                                            </label>
                                            <select
                                                id="apply-disponibilitate"
                                                name="disponibilitate"
                                                required
                                                className="apply-field-select"
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Selectează disponibilitatea</option>
                                                {AVAILABILITY.map((a) => (
                                                    <option key={a} value={a}>{a}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="apply-field">
                                            <label className="apply-field-label" htmlFor="apply-start">
                                                Poate începe din
                                            </label>
                                            <input
                                                id="apply-start"
                                                name="dataStart"
                                                type="date"
                                                className="apply-field-input"
                                            />
                                        </div>
                                    </div>

                                    <div className="apply-checkbox-row">
                                        <input
                                            id="apply-permis"
                                            name="permisConducere"
                                            type="checkbox"
                                            className="apply-checkbox"
                                        />
                                        <label htmlFor="apply-permis" className="apply-checkbox-label">
                                            Dețin permis de conducere categoria B
                                        </label>
                                    </div>

                                    <div className="apply-checkbox-row">
                                        <input
                                            id="apply-auto"
                                            name="autovehiculPropriu"
                                            type="checkbox"
                                            className="apply-checkbox"
                                        />
                                        <label htmlFor="apply-auto" className="apply-checkbox-label">
                                            Dețin autovehicul propriu
                                        </label>
                                    </div>
                                </fieldset>
                                <fieldset className="apply-section">
                                    <legend className="apply-section-title">Documente</legend>

                                    <div className="apply-field">
                                        <label className="apply-field-label">
                                            CV <span className="required">*</span>
                                        </label>

                                        {!cvFile ? (
                                            <div
                                                className={`apply-upload-zone ${isDragOver ? 'apply-upload-zone--drag' : ''} ${cvError ? 'apply-upload-zone--error' : ''}`}
                                                onClick={() => fileInputRef.current?.click()}
                                                onDrop={handleDrop}
                                                onDragOver={handleDragOver}
                                                onDragLeave={handleDragLeave}
                                                role="button"
                                                tabIndex={0}
                                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click(); }}
                                            >
                                                <div className="apply-upload-icon">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 3V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <p className="apply-upload-text">
                                                    Trage fișierul aici sau <strong>alege de pe dispozitiv</strong>
                                                </p>
                                                <span className="apply-upload-hint">PDF, DOC sau DOCX · Maxim 5 MB</span>
                                            </div>
                                        ) : (
                                            <div className="apply-cv-preview">
                                                <div className="apply-cv-icon">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M14 2V8H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <div className="apply-cv-info">
                                                    <div className="apply-cv-name">{cvFile.name}</div>
                                                    <div className="apply-cv-size">{formatSize(cvFile.size)}</div>
                                                </div>
                                                <button type="button" className="apply-cv-remove" onClick={removeCv} title="Elimină fișierul">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                        )}

                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            style={{ display: 'none' }}
                                            aria-label="Încarcă CV"
                                        />

                                        {cvError && <p className="apply-error-text">{cvError}</p>}
                                    </div>

                                    <div className="apply-field">
                                        <label className="apply-field-label" htmlFor="apply-scrisoare">
                                            Scrisoare de intenție
                                        </label>
                                        <textarea
                                            id="apply-scrisoare"
                                            name="scrIsoareIntentie"
                                            placeholder="Scrie câteva rânduri despre motivația ta și de ce dorești să faci parte din echipa Medelise..."
                                            className="apply-field-textarea"
                                            maxLength={1000}
                                            rows={4}
                                        />
                                    </div>
                                </fieldset>
                            </div>

                            {/* ═══ Secțiunea 5: GDPR ═══ */}
                            <fieldset className="apply-section">
                                <legend className="apply-section-title">Consimțământ</legend>

                                <div className="apply-checkbox-row">
                                    <input
                                        id="apply-gdpr"
                                        name="acordGdpr"
                                        type="checkbox"
                                        required
                                        className="apply-checkbox"
                                    />
                                    <label htmlFor="apply-gdpr" className="apply-checkbox-label">
                                        Sunt de acord cu prelucrarea datelor personale în conformitate cu <a href="/politica-confidentialitate" target="_blank" rel="noopener noreferrer">Politica de Confidențialitate</a> și regulamentul GDPR. <span className="required">*</span>
                                    </label>
                                </div>

                                <div className="apply-checkbox-row">
                                    <input
                                        id="apply-newsletter"
                                        name="newsletter"
                                        type="checkbox"
                                        className="apply-checkbox"
                                    />
                                    <label htmlFor="apply-newsletter" className="apply-checkbox-label">
                                        Doresc să primesc notificări despre noi oportunități de angajare la Medelise.
                                    </label>
                                </div>
                            </fieldset>

                            {/* ═══ Secțiunea 6: Document Checker ═══ */}
                            <DocumentChecker selectedRole={getRoleForSlug(slug)} />

                            {/* ── Error message ── */}
                            {formStatus === 'error' && (
                                <p className="apply-error-msg">
                                    A apărut o eroare la trimiterea formularului. Te rugăm să încerci din nou.
                                </p>
                            )}

                            {/* ── Submit ── */}
                            <Button
                                type="submit"
                                variant="primary"
                                isFullWidth
                                isLoading={formStatus === 'sending'}
                            >
                                {formStatus === 'sending' ? 'Se trimite aplicația...' : 'Trimite aplicația'}
                            </Button>
                        </form>
                    )}
                </div>
            </main>
        </>
    );
}
