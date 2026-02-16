'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/ui/Button';

interface ContactFormSectionProps {
    className?: string;
}

export default function ContactFormSection({ className = '' }: ContactFormSectionProps) {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Honeypot anti-spam: if filled, silently reject
        if (formData.get('website')) return;

        setFormStatus('sending');

        try {
            // TODO: Replace with actual API endpoint
            // await fetch('/api/contact', { method: 'POST', body: formData });
            await new Promise((r) => setTimeout(r, 1000)); // Simulate
            setFormStatus('sent');
            form.reset();
        } catch {
            setFormStatus('error');
        }
    };

    const isSubmitting = formStatus === 'sending';

    return (
        <>
            <section className={`contact-section ${className}`}>
                <div className="contact-section-inner">
                    <div className="contact-layout">
                        {/* Left — Info */}
                        <div className="contact-info">
                            <div className="contact-info-text">
                                <h2 className="contact-info-title">Suntem aici pentru tine</h2>
                                <p className="contact-info-desc">
                                    Ai întrebări sau vrei să afli mai multe despre abonamentele sau serviciile Medelise?
                                    <br />
                                    Echipa noastră este aici să te ajute cu informații clare, rapide și complete.
                                </p>
                            </div>

                            <div className="contact-info-cards">
                                <div className="contact-info-row">
                                    <div className="contact-info-card">
                                        <span className="contact-info-label">OFFICE HOURS</span>
                                        <span className="contact-info-value">Luni – Duminica<br />08:00 – 22:00</span>
                                    </div>
                                    <div className="contact-info-card">
                                        <span className="contact-info-label">Tara</span>
                                        <span className="contact-info-value">Romania</span>
                                    </div>
                                </div>
                                <div className="contact-info-row">
                                    <div className="contact-info-card">
                                        <span className="contact-info-label">CONTACTEAZĂ-NE</span>
                                        <span className="contact-info-value">+40 (784) 414 555</span>
                                    </div>
                                    <div className="contact-info-card">
                                        <span className="contact-info-label">E-mail</span>
                                        <span className="contact-info-value">office@medelise.ro</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right — Form Card */}
                        <div className="contact-form-card">
                            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                <div className="contact-form-fields">
                                    {/* Honeypot — hidden anti-spam field */}
                                    <div className="contact-honeypot" aria-hidden="true">
                                        <input
                                            type="text"
                                            name="website"
                                            tabIndex={-1}
                                            autoComplete="off"
                                        />
                                    </div>

                                    <div className="contact-field">
                                        <label className="contact-field-label" htmlFor="contact-nume">Nume</label>
                                        <div className="contact-field-wrapper">
                                            <input
                                                id="contact-nume"
                                                name="nume"
                                                type="text"
                                                required
                                                minLength={2}
                                                placeholder="Te rog să introduci numele"
                                                className="contact-field-input"
                                            />
                                        </div>
                                    </div>

                                    <div className="contact-field">
                                        <label className="contact-field-label" htmlFor="contact-prenume">Prenume</label>
                                        <div className="contact-field-wrapper">
                                            <input
                                                id="contact-prenume"
                                                name="prenume"
                                                type="text"
                                                required
                                                minLength={2}
                                                placeholder="Te rog să introduci prenumele"
                                                className="contact-field-input"
                                            />
                                        </div>
                                    </div>

                                    <div className="contact-field">
                                        <label className="contact-field-label" htmlFor="contact-email">Adresă de email</label>
                                        <div className="contact-field-wrapper">
                                            <input
                                                id="contact-email"
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="Te rog să introduci e-mailul"
                                                className="contact-field-input"
                                            />
                                        </div>
                                    </div>

                                    <div className="contact-field">
                                        <label className="contact-field-label" htmlFor="contact-mesaj">Mesaj</label>
                                        <div className="contact-field-wrapper contact-field-wrapper--textarea">
                                            <textarea
                                                id="contact-mesaj"
                                                name="mesaj"
                                                required
                                                minLength={10}
                                                placeholder="Te rog să introduci mesajul"
                                                className="contact-field-input contact-field-textarea"
                                                rows={4}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-actions">
                                    <Button
                                        type="submit"
                                        variant="accent"
                                        isFullWidth
                                        disabled={isSubmitting}
                                        isLoading={isSubmitting}
                                    >
                                        Trimite Mesajul
                                    </Button>
                                </div>
                                {formStatus === 'sent' && (
                                    <p className="contact-form-success">✓ Mesajul a fost trimis cu succes!</p>
                                )}
                                {formStatus === 'error' && (
                                    <p className="contact-form-error">A apărut o eroare. Încearcă din nou.</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .contact-section {
                    width: 100%;
                    padding: 0 64px;
                    background: var(--color-primary);
                    font-family: var(--font-heading);
                    --contact-border: var(--color-border-light);
                    --contact-placeholder: var(--color-border-light);
                }

                .contact-section-inner {
                    padding: 80px 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .contact-layout {
                    width: 100%;
                    padding: 32px 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 32px;
                }

                /* ── Left: Info ── */
                .contact-info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                .contact-info-text {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    gap: 24px;
                }

                .contact-info-title {
                    color: white;
                    font-size: var(--text-h2);
                    font-weight: 600;
                    line-height: 1.2;
                    margin: 0;
                }

                .contact-info-desc {
                    color: white;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                }

                .contact-info-cards {
                    max-width: 416px;
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }

                .contact-info-row {
                    display: flex;
                    gap: 32px;
                }

                .contact-info-card {
                    flex: 1;
                    padding: 16px;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .contact-info-label {
                    color: white;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                }

                .contact-info-value {
                    color: white;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                }

                /* ── Right: Form Card ── */
                .contact-form-card {
                    flex: 1;
                    padding: 24px;
                    background: white;
                    border-radius: 10px;
                }

                .contact-form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;
                }

                .contact-form-fields {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                /* Honeypot — invisible to users */
                .contact-honeypot {
                    position: absolute;
                    left: -9999px;
                    opacity: 0;
                    height: 0;
                    overflow: hidden;
                }

                .contact-field {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .contact-field-label {
                    color: var(--color-primary);
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 20px;
                }

                .contact-field-wrapper {
                    padding: 10px 12px;
                    background: white;
                    border-radius: 8px;
                    border: 1px solid var(--contact-border);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }

                .contact-field-wrapper--textarea {
                    padding: 8px 12px;
                    align-items: flex-start;
                }

                .contact-field-wrapper:focus-within {
                    border-color: var(--color-primary);
                    box-shadow: 0 0 0 2px rgba(33, 49, 112, 0.1);
                }

                .contact-field-input {
                    flex: 1;
                    border: none;
                    background: transparent;
                    font-size: 16px;
                    font-family: inherit;
                    font-weight: 400;
                    line-height: 24px;
                    color: var(--color-primary);
                    outline: none;
                    width: 100%;
                }

                .contact-field-input::placeholder {
                    color: var(--contact-placeholder);
                }

                .contact-field-textarea {
                    resize: vertical;
                    min-height: 100px;
                }

                .contact-actions {
                    margin-top: 24px;
                }

                .contact-form-success {
                    color: var(--color-success);
                    font-size: 14px;
                    font-weight: 500;
                    text-align: center;
                    margin: 0;
                }

                .contact-form-error {
                    color: var(--color-error);
                    font-size: 14px;
                    font-weight: 500;
                    text-align: center;
                    margin: 0;
                }

                /* ─── TABLET (max 1024px) ─── */
                @media (max-width: 1024px) {
                    .contact-section {
                        padding: 32px;
                        background: white;
                    }

                    .contact-section-inner {
                        padding: 0;
                    }

                    .contact-layout {
                        flex-direction: column;
                        align-items: stretch;
                        padding: 0;
                        gap: 40px;
                    }

                    .contact-info {
                        max-width: 592px;
                    }

                    .contact-info-title {
                        color: var(--color-primary);
                    }

                    .contact-info-desc {
                        color: var(--color-primary);
                    }

                    .contact-info-cards {
                        max-width: 488px;
                    }

                    .contact-info-label {
                        color: var(--color-primary);
                    }

                    .contact-info-value {
                        color: var(--color-primary-hover);
                    }

                    .contact-info-row {
                        gap: 16px;
                    }

                    .contact-info-card {
                        gap: 12px;
                    }
                }

                /* ─── MOBILE (max 480px) ─── */
                @media (max-width: 480px) {
                    .contact-section {
                        padding: 0;
                        background: var(--color-primary);
                    }

                    .contact-section-inner {
                        padding: 0;
                    }

                    .contact-layout {
                        padding: 16px;
                        gap: 40px;
                    }

                    .contact-info-title {
                        color: white;
                        font-size: 28px;
                        line-height: 36px;
                    }

                    .contact-info-desc {
                        color: white;
                        font-size: 16px;
                        line-height: 24px;
                    }

                    .contact-info-label {
                        color: white;
                        font-weight: 600;
                    }

                    .contact-info-value {
                        color: white;
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 24px;
                    }

                    .contact-info-row {
                        gap: 16px;
                    }

                    .contact-info-card {
                        gap: 12px;
                    }

                    .contact-form-card {
                        padding: 16px;
                    }
                }
            `}</style>
        </>
    );
}
