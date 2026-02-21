'use client';

import Image from 'next/image';
import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';

interface ForgotPasswordFormProps {
    onBackToLogin?: () => void;
    className?: string;
}

export default function ForgotPasswordForm({
    onBackToLogin,
    className = '',
}: ForgotPasswordFormProps) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const supabase = createClient();

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/reset-password`,
        });

        if (error) {
            setStatus('error');
            setErrorMessage(error.message);
        } else {
            setStatus('success');
        }
    };

    return (
        <>
            <div className={`login-form-panel ${className}`}>
                <div className="login-form-inner">
                    <div className="login-header">
                        <button
                            type="button"
                            className="back-btn"
                            onClick={onBackToLogin}
                            aria-label="Înapoi la login"
                        >
                            &larr; Înapoi
                        </button>
                        <h1 className="login-title">Resetare parolă</h1>
                        <p className="login-subtitle">
                            Îți vom trimite un link securizat pe email pentru a-ți reseta parola.
                        </p>
                    </div>

                    {status === 'success' ? (
                        <div className="px-4 py-8 text-center bg-green-50 rounded-2xl border border-green-100 mb-6">
                            <p className="text-xl font-semibold text-green-800 mb-2">Verifică-ți adresa de email!</p>
                            <p className="text-sm text-green-700 font-medium">
                                Ți-am trimis un link securizat pentru resetarea parolei la adresa:<br />
                                <strong className="text-green-900">{email}</strong>
                            </p>
                            <p className="mt-4 text-xs text-green-600">Nu uita să verifici și folderul Spam.</p>
                            <button
                                type="button"
                                className="login-submit-btn mt-6"
                                onClick={onBackToLogin}
                            >
                                Înapoi la autentificare
                            </button>
                        </div>
                    ) : (
                        <form className="login-fields" onSubmit={handleResetPassword}>
                            <div className="login-field-group">
                                <label className="login-label">Email</label>
                                <div className="login-input-wrapper">
                                    <Image
                                        src="/images-medelise/md-login/md-img-login-ico-mail.webp"
                                        alt=""
                                        width={24}
                                        height={24}
                                        className="login-input-icon"
                                    />
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="nume@exemplu.ro"
                                        className="login-input"
                                        disabled={status === 'loading'}
                                    />
                                </div>
                                {status === 'error' && (
                                    <p className="text-sm text-red-500 font-medium mt-1">{errorMessage}</p>
                                )}
                            </div>

                            <div className="login-actions">
                                <button
                                    type="submit"
                                    className="login-submit-btn"
                                    disabled={status === 'loading' || !email}
                                >
                                    {status === 'loading' ? 'Se procesează...' : 'Trimite link-ul de resetare'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>

            <style jsx>{`
                .login-form-panel {
                    min-width: 480px;
                    padding: 40px;
                    background: var(--color-white);
                    border-radius: 40px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin: auto;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.05); /* Added slight shadow to pop */
                }

                .login-form-inner {
                    width: 100%;
                    max-width: 400px;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                /* Header */
                .login-header {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    align-items: flex-start;
                }

                .back-btn {
                    background: none;
                    border: none;
                    color: var(--color-text-light);
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    padding: 0;
                    margin-bottom: 8px;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    transition: color 0.2s;
                }

                .back-btn:hover {
                    color: var(--color-primary);
                }

                .login-title {
                    color: var(--color-primary);
                    font-size: 40px;
                    font-weight: 500;
                    line-height: 48px;
                    margin: 0;
                }

                .login-subtitle {
                    color: var(--color-text-light);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 25.6px;
                    margin: 0;
                }

                /* Form Fields */
                .login-fields {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    align-self: stretch;
                }

                .login-field-group {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .login-label {
                    color: var(--color-primary);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 21.7px;
                }

                .login-input-wrapper {
                    height: 48px;
                    padding: 8px 16px;
                    background: var(--color-surface);
                    border-radius: var(--radius-pill);
                    border: 1px solid var(--color-border-form);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .login-input-wrapper:focus-within {
                    border-color: var(--color-primary-hover);
                    box-shadow: var(--shadow-focus);
                }

                .login-input {
                    flex: 1;
                    border: none;
                    background: transparent;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 25.6px;
                    color: var(--color-primary);
                    outline: none;
                }

                .login-input::placeholder {
                    color: var(--color-text-light);
                }

                .login-input:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                /* Login Actions */
                .login-actions {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    margin-top: 8px;
                }

                .login-submit-btn {
                    width: 100%;
                    padding: 14px 24px;
                    background: var(--color-primary);
                    border-radius: var(--radius-pill);
                    border: none;
                    color: var(--color-white);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 25.6px;
                    cursor: pointer;
                    transition: background 0.2s, transform 0.15s;
                    text-align: center;
                }

                .login-submit-btn:hover:not(:disabled) {
                    background: var(--color-primary-hover);
                    transform: translateY(-1px);
                }

                .login-submit-btn:active:not(:disabled) {
                    transform: translateY(0);
                }

                .login-submit-btn:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                /* ── RESPONSIVE ── */
                @media (max-width: 480px) {
                    .login-form-panel {
                        min-width: unset;
                        width: 100%;
                        padding: 24px 16px;
                    }

                    .login-title {
                        font-size: 32px;
                        line-height: 40px;
                    }
                }
            `}</style>
        </>
    );
}
