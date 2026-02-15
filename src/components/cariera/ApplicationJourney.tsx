'use client';

import React, { useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { JOBS } from '@/components/cariera/jobData';

/* ── Step Components ── */
import Step1_DatePersonale, { validateStep1 } from './steps/Step1_DatePersonale';
import Step2_ExperientaProfesionala, { validateStep2 } from './steps/Step2_ExperientaProfesionala';
import Step3_Disponibilitate, { validateStep3 } from './steps/Step3_Disponibilitate';
import Step4_IncarcareCV, { validateStep4 } from './steps/Step4_IncarcareCV';
import Step5_DocumenteNecesare, { validateStep5 } from './steps/Step5_DocumenteNecesare';
import Step6_Consimtamant, { validateStep6 } from './steps/Step6_Consimtamant';

/* ═══════════════════════════════════════════════════════════════════════════
 * CONSTANTS
 * ═══════════════════════════════════════════════════════════════════════════ */

const TOTAL_STEPS = 6;

const STEP_LABELS = [
    'Date Personale',
    'Experiență',
    'Disponibilitate',
    'CV & Documente',
    'Verificare',
    'Finalizare',
];

const VALIDATORS = [
    validateStep1,
    validateStep2,
    validateStep3,
    validateStep4,
    validateStep5,
    validateStep6,
];

/* ═══════════════════════════════════════════════════════════════════════════
 * PROPS
 * ═══════════════════════════════════════════════════════════════════════════ */

interface ApplicationJourneyProps {
    slug: string;
}

/* ═══════════════════════════════════════════════════════════════════════════
 * COMPONENT
 * ═══════════════════════════════════════════════════════════════════════════ */

export default function ApplicationJourney({ slug }: ApplicationJourneyProps) {
    const job = JOBS[slug];
    const jobTitle = job?.title ?? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    /* ── State ── */
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<Record<string, any>>({});
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
    const [slideDir, setSlideDir] = useState<'next' | 'prev'>('next');
    const formDataRef = useRef(formData);
    formDataRef.current = formData;

    /* ── Field change handler ── */
    const handleFieldChange = useCallback((field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    }, []);

    /* ── Step props (shared interface) ── */
    const stepProps = { data: formData, onChange: handleFieldChange, slug, jobTitle };

    /* ── Validation for current step ── */
    const isCurrentStepValid = VALIDATORS[currentStep - 1](formData);

    /* ── Navigation ── */
    const goNext = () => {
        if (currentStep < TOTAL_STEPS && isCurrentStepValid) {
            setSlideDir('next');
            setCurrentStep(s => s + 1);
        }
    };

    const goPrev = () => {
        if (currentStep > 1) {
            setSlideDir('prev');
            setCurrentStep(s => s - 1);
        }
    };

    /* ── Submit ── */
    const handleSubmit = async () => {
        if (!isCurrentStepValid) return;
        setFormStatus('sending');

        try {
            const fd = new FormData();
            Object.entries(formDataRef.current).forEach(([key, value]) => {
                if (value instanceof File) {
                    fd.append(key, value);
                } else if (typeof value === 'boolean') {
                    fd.append(key, value ? 'true' : 'false');
                } else if (value != null) {
                    fd.append(key, String(value));
                }
            });
            fd.append('pozitie', jobTitle);
            fd.append('slug', slug);

            // TODO: Replace with actual API endpoint
            // await fetch('/api/cariera/aplica', { method: 'POST', body: fd });
            await new Promise(r => setTimeout(r, 1500));

            setFormStatus('sent');
        } catch {
            setFormStatus('error');
        }
    };

    /* ── Render current step ── */
    const renderStep = () => {
        switch (currentStep) {
            case 1: return <Step1_DatePersonale {...stepProps} />;
            case 2: return <Step2_ExperientaProfesionala {...stepProps} />;
            case 3: return <Step3_Disponibilitate {...stepProps} />;
            case 4: return <Step4_IncarcareCV {...stepProps} />;
            case 5: return <Step5_DocumenteNecesare {...stepProps} />;
            case 6: return <Step6_Consimtamant {...stepProps} />;
            default: return null;
        }
    };

    return (
        <>
            <style jsx global>{`
                /* ═══════════════════════════════════════
                 * APPLICATION JOURNEY — BASE
                 * ═══════════════════════════════════════ */
                .aj-page {
                    width: 100%;
                    min-height: 100vh;
                    background: var(--color-surface);
                    font-family: var(--font-body);
                }

                /* ── Header ── */
                .aj-header {
                    width: 100%;
                    background: var(--color-primary);
                    padding: var(--space-16) var(--space-section-px-lg) var(--space-10);
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-8);
                }

                .aj-header-group {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-2);
                }

                .aj-back-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-2);
                    color: var(--color-secondary);
                    font-family: var(--font-body);
                    font-size: var(--text-sm);
                    text-decoration: none;
                    margin-bottom: var(--space-4);
                    transition: opacity 0.2s ease;
                }

                .aj-back-btn:hover { opacity: 0.8; }



                .aj-header-title {
                    font-family: var(--font-heading);
                    font-size: 32px;
                    font-weight: 700;
                    color: var(--color-white);
                    margin: 0 0 var(--space-2) 0;
                    line-height: 1.2;
                }

                .aj-header-subtitle {
                    color: var(--color-secondary);
                    font-size: var(--text-body);
                    margin: 0;
                    opacity: 0.85;
                }

                /* ═══════════════════════════════════════
                 * PROGRESS BAR
                 * ═══════════════════════════════════════ */
                .aj-progress {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    padding: var(--space-8) var(--space-section-px-lg);
                }

                .aj-progress-step {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: var(--space-2);
                    flex-shrink: 0;
                    position: relative;
                    z-index: 1;
                }

                .aj-progress-circle {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: var(--font-body);
                    font-size: 14px;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    border: 2px solid var(--color-surface-border);
                    background: var(--color-white);
                    color: var(--color-text-muted);
                }

                .aj-progress-circle--active {
                    background: var(--color-primary);
                    border-color: var(--color-primary);
                    color: var(--color-white);
                    box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-primary) 15%, transparent);
                }

                .aj-progress-circle--done {
                    background: var(--color-success);
                    border-color: var(--color-success);
                    color: var(--color-white);
                }

                .aj-progress-label {
                    font-family: var(--font-body);
                    font-size: 11px;
                    font-weight: 500;
                    color: var(--color-text-muted);
                    text-align: center;
                    max-width: 80px;
                    line-height: 1.3;
                    transition: color 0.3s ease;
                }

                .aj-progress-label--active {
                    color: var(--color-primary);
                    font-weight: 600;
                }

                .aj-progress-line {
                    flex: 1;
                    height: 2px;
                    background: var(--color-surface-border);
                    margin: 0 var(--space-1);
                    margin-bottom: 28px;
                    transition: background 0.3s ease;
                }

                .aj-progress-line--done {
                    background: var(--color-success);
                }

                /* ═══════════════════════════════════════
                 * STEP CONTENT AREA
                 * ═══════════════════════════════════════ */
                .aj-body {
                    width: 100%;
                    padding: 0 var(--space-section-px-lg) var(--space-16);
                }

                .aj-step-wrapper {
                    animation: aj-slide-in 0.35s ease-out;
                }

                @keyframes aj-slide-in {
                    from {
                        opacity: 0;
                        transform: translateX(var(--aj-slide-x, 30px));
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                /* ── Step Card (fieldset) ── */
                .aj-step-card {
                    border: 1px solid var(--color-surface-border);
                    border-radius: var(--radius-main);
                    background: var(--color-white);
                    padding: var(--space-8);
                    box-shadow: var(--shadow-sm);
                }

                .aj-step-card--no-legend {
                    padding: 0;
                    border: none;
                    background: none;
                    box-shadow: none;
                }

                .aj-step-card-title {
                    font-family: var(--font-heading);
                    font-size: var(--text-xl);
                    font-weight: 600;
                    color: var(--color-text);
                    padding: 0 var(--space-2);
                }

                /* ── Form Fields (shared across steps) ── */
                .aj-field {
                    margin-bottom: var(--space-5);
                }

                .aj-field:last-child {
                    margin-bottom: 0;
                }

                .aj-field-row {
                    display: flex;
                    gap: var(--space-4);
                    margin-bottom: var(--space-5);
                }

                .aj-field-row:last-child {
                    margin-bottom: 0;
                }

                .aj-field-row > .aj-field {
                    flex: 1;
                    margin-bottom: 0;
                }

                .aj-label {
                    display: block;
                    font-family: var(--font-body);
                    font-size: var(--text-sm);
                    font-weight: 500;
                    color: var(--color-text);
                    margin-bottom: var(--space-2);
                }

                .aj-req {
                    color: var(--color-error);
                }

                .aj-input,
                .aj-select,
                .aj-textarea {
                    width: 100%;
                    padding: var(--space-3) var(--space-4);
                    font-family: var(--font-body);
                    font-size: var(--text-body);
                    color: var(--color-text);
                    background: var(--color-white);
                    border: 1px solid var(--color-border-form);
                    border-radius: var(--radius-main);
                    outline: none;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease;
                    box-sizing: border-box;
                }

                .aj-input:focus,
                .aj-select:focus,
                .aj-textarea:focus {
                    border-color: var(--color-primary);
                    box-shadow: var(--shadow-focus);
                }

                .aj-input::placeholder,
                .aj-textarea::placeholder {
                    color: var(--color-text-muted);
                    opacity: 0.7;
                }

                .aj-textarea {
                    resize: vertical;
                    min-height: 100px;
                }

                .aj-select {
                    appearance: none;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23637083' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-position: right var(--space-3) center;
                    padding-right: var(--space-10);
                    cursor: pointer;
                }

                /* ── Checkbox ── */
                .aj-checkbox-row {
                    display: flex;
                    align-items: flex-start;
                    gap: var(--space-3);
                    margin-bottom: var(--space-4);
                }

                .aj-checkbox-row:last-child {
                    margin-bottom: 0;
                }

                .aj-checkbox {
                    width: 18px;
                    height: 18px;
                    margin-top: 2px;
                    accent-color: var(--color-primary);
                    flex-shrink: 0;
                    cursor: pointer;
                }

                .aj-checkbox-label {
                    font-family: var(--font-body);
                    font-size: var(--text-sm);
                    color: var(--color-text);
                    line-height: 1.5;
                    cursor: pointer;
                }

                .aj-checkbox-label a {
                    color: var(--color-primary);
                    text-decoration: underline;
                }

                /* ── File Upload ── */
                .aj-upload-zone {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: var(--space-10) var(--space-6);
                    border: 2px dashed var(--color-border-form);
                    border-radius: var(--radius-main);
                    cursor: pointer;
                    transition: border-color 0.2s ease, background 0.2s ease;
                    text-align: center;
                }

                .aj-upload-zone:hover {
                    border-color: var(--color-primary);
                    background: color-mix(in srgb, var(--color-primary) 3%, transparent);
                }

                .aj-upload-zone--active {
                    border-color: var(--color-primary);
                    background: color-mix(in srgb, var(--color-primary) 6%, transparent);
                }

                .aj-upload-icon {
                    color: var(--color-text-muted);
                    margin-bottom: var(--space-3);
                }

                .aj-upload-text {
                    font-size: var(--text-body);
                    color: var(--color-text-muted);
                    margin: 0 0 var(--space-1) 0;
                }

                .aj-upload-text strong {
                    color: var(--color-primary);
                }

                .aj-upload-hint {
                    font-size: var(--text-sm);
                    color: var(--color-text-muted);
                    opacity: 0.7;
                }

                .aj-file-preview {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: var(--space-3) var(--space-4);
                    border: 1px solid var(--color-surface-border);
                    border-radius: var(--radius-main);
                    background: var(--color-surface);
                }

                .aj-file-info {
                    display: flex;
                    align-items: center;
                    gap: var(--space-3);
                    color: var(--color-primary);
                }

                .aj-file-name {
                    font-size: var(--text-sm);
                    font-weight: 500;
                    color: var(--color-text);
                    margin: 0;
                }

                .aj-file-size {
                    font-size: 12px;
                    color: var(--color-text-muted);
                }

                .aj-file-remove {
                    background: none;
                    border: none;
                    color: var(--color-text-muted);
                    cursor: pointer;
                    padding: var(--space-1);
                    border-radius: var(--radius-sm);
                    transition: color 0.15s ease;
                }

                .aj-file-remove:hover {
                    color: var(--color-error);
                }

                .aj-error {
                    color: var(--color-error);
                    font-size: var(--text-sm);
                    margin: var(--space-2) 0 0 0;
                }

                /* ═══════════════════════════════════════
                 * NAVIGATION
                 * ═══════════════════════════════════════ */
                .aj-nav {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: var(--space-8);
                    gap: var(--space-4);
                }

                .aj-nav-step-info {
                    font-family: var(--font-body);
                    font-size: var(--text-sm);
                    color: var(--color-text-muted);
                }

                .aj-nav-buttons {
                    display: flex;
                    gap: var(--space-3);
                }

                /* ═══════════════════════════════════════
                 * SUCCESS STATE
                 * ═══════════════════════════════════════ */
                .aj-success {
                    text-align: center;
                    padding: var(--space-16) var(--space-8);
                }

                .aj-success-icon {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background: color-mix(in srgb, var(--color-success) 10%, transparent);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto var(--space-6);
                }

                .aj-success-title {
                    font-family: var(--font-heading);
                    font-size: var(--text-2xl);
                    font-weight: 700;
                    color: var(--color-text);
                    margin: 0 0 var(--space-4) 0;
                }

                .aj-success-text {
                    font-size: var(--text-body);
                    color: var(--color-text-muted);
                    max-width: 480px;
                    margin: 0 auto var(--space-8);
                    line-height: var(--lh-body);
                }

                .aj-success-link {
                    color: var(--color-primary);
                    font-weight: 500;
                    text-decoration: none;
                    transition: opacity 0.2s;
                }

                .aj-success-link:hover { opacity: 0.8; }

                .aj-error-msg {
                    padding: var(--space-4);
                    background: color-mix(in srgb, var(--color-error) 8%, transparent);
                    color: var(--color-error);
                    border-radius: var(--radius-main);
                    font-size: var(--text-sm);
                    text-align: center;
                    margin-top: var(--space-4);
                }

                /* ═══════════════════════════════════════
                 * RESPONSIVE
                 * ═══════════════════════════════════════ */

                /* Desktop ≥ 1025px */
                @media (min-width: 1025px) {
                    .aj-header {
                        padding: var(--space-24) var(--space-section-px-lg) var(--space-12);
                    }
                    .aj-header-title {
                        font-size: 40px;
                        line-height: 48px;
                    }
                }

                /* Tablet ≤ 1024px */
                @media (max-width: 1024px) {
                    .aj-header {
                        padding: var(--space-16) var(--space-section-px-md) var(--space-10);
                    }
                    .aj-header-title {
                        font-size: 32px;
                        line-height: 40px;
                    }
                    .aj-progress {
                        padding: var(--space-8) var(--space-section-px-md);
                    }
                    .aj-body {
                        padding: 0 var(--space-section-px-md) var(--space-16);
                    }
                    .aj-progress-label {
                        font-size: 11px;
                    }
                }

                /* Small tablet / large mobile ≤ 768px */
                @media (max-width: 768px) {
                    .aj-field-row {
                        flex-direction: column;
                    }

                    .aj-step-card {
                        padding: var(--space-6);
                    }

                    .aj-nav {
                        flex-direction: column-reverse;
                        align-items: stretch;
                    }

                    .aj-nav-step-info {
                        text-align: center;
                    }

                    .aj-nav-buttons {
                        justify-content: stretch;
                    }

                    .aj-nav-buttons > * {
                        flex: 1;
                    }

                    .aj-progress-label {
                        font-size: 10px;
                        max-width: 60px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }

                /* Mobile ≤ 480px */
                @media (max-width: 480px) {
                    .aj-header {
                        padding: var(--space-12) var(--space-section-px-sm) var(--space-8);
                    }
                    .aj-progress {
                        padding: var(--space-6) var(--space-section-px-sm);
                    }
                    .aj-body {
                        padding: 0 var(--space-section-px-sm) var(--space-12);
                    }

                    .aj-progress-label {
                        display: none;
                    }

                    .aj-progress-circle {
                        width: 32px;
                        height: 32px;
                        font-size: 12px;
                    }

                    .aj-header-title {
                        font-size: 26px;
                        line-height: 34px;
                    }
                }
            `}</style>

            <main className="aj-page">
                {/* ── Header ── */}
                <header className="aj-header">
                    <Link href={`/cariera/${slug}`} style={{ textDecoration: 'none' }}>
                        <Button
                            variant="secondary"
                            type="button"
                            style={{
                                '--btn-bg': '#ffffff',
                                '--btn-bg-hover': '#f0f0f0',
                                '--btn-text': 'var(--color-primary)',
                                '--btn-border': 'transparent',
                            } as React.CSSProperties}
                        >
                            ← Înapoi
                        </Button>
                    </Link>

                    <div className="aj-header-group">
                        <h1 className="aj-header-title">Aplică pentru {jobTitle}</h1>
                        <p className="aj-header-subtitle">
                            Completează formularul în {TOTAL_STEPS} pași simpli pentru a te înscrie în procesul de selecție.
                        </p>
                    </div>
                </header>

                {formStatus === 'sent' ? (
                    /* ── Success ── */
                    <div className="aj-body">
                        <div className="aj-success">
                            <div className="aj-success-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="var(--color-success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h2 className="aj-success-title">Aplicația ta a fost trimisă!</h2>
                            <p className="aj-success-text">
                                Mulțumim că ai aplicat pentru poziția de <strong>{jobTitle}</strong>. Echipa noastră de recrutare va analiza profilul tău și te va contacta în cel mai scurt timp.
                            </p>
                            <Link href="/cariera" className="aj-success-link">← Înapoi la joburi</Link>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* ── Progress Bar ── */}
                        <div className="aj-progress">
                            {STEP_LABELS.map((label, i) => {
                                const stepNum = i + 1;
                                const isActive = stepNum === currentStep;
                                const isDone = stepNum < currentStep;

                                return (
                                    <React.Fragment key={stepNum}>
                                        {i > 0 && (
                                            <div className={`aj-progress-line ${isDone ? 'aj-progress-line--done' : ''}`} />
                                        )}
                                        <div className="aj-progress-step">
                                            <div className={`aj-progress-circle ${isActive ? 'aj-progress-circle--active' : ''} ${isDone ? 'aj-progress-circle--done' : ''}`}>
                                                {isDone ? (
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                ) : stepNum}
                                            </div>
                                            <span className={`aj-progress-label ${isActive ? 'aj-progress-label--active' : ''}`}>
                                                {label}
                                            </span>
                                        </div>
                                    </React.Fragment>
                                );
                            })}
                        </div>

                        {/* ── Step Content ── */}
                        <div className="aj-body">
                            <div
                                className="aj-step-wrapper"
                                key={currentStep}
                                style={{ '--aj-slide-x': slideDir === 'next' ? '30px' : '-30px' } as React.CSSProperties}
                            >
                                {renderStep()}
                            </div>

                            {/* Error */}
                            {formStatus === 'error' && (
                                <p className="aj-error-msg">
                                    A apărut o eroare la trimiterea formularului. Te rugăm să încerci din nou.
                                </p>
                            )}

                            {/* ── Navigation ── */}
                            <div className="aj-nav">
                                <span className="aj-nav-step-info">
                                    Pasul {currentStep} din {TOTAL_STEPS}
                                </span>
                                <div className="aj-nav-buttons">
                                    {currentStep > 1 && (
                                        <Button
                                            variant="ghost"
                                            type="button"
                                            onClick={goPrev}
                                        >
                                            ← Înapoi
                                        </Button>
                                    )}
                                    {currentStep < TOTAL_STEPS ? (
                                        <Button
                                            variant="primary"
                                            type="button"
                                            onClick={goNext}
                                            disabled={!isCurrentStepValid}
                                        >
                                            Înainte →
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="accent"
                                            type="button"
                                            onClick={handleSubmit}
                                            disabled={!isCurrentStepValid}
                                            isLoading={formStatus === 'sending'}
                                        >
                                            Trimite Aplicația
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </main>
        </>
    );
}
