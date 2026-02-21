'use client';

import Image from 'next/image';
import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';

interface LoginFormProps {
    /** Override the title text */
    title?: string;
    /** Override the subtitle text */
    subtitle?: string;
    /** Called when user clicks "Înregistrează-te" to switch to register */
    onSwitchToRegister?: () => void;
    /** Called when user clicks "Ai uitat parola?" */
    onForgotPassword?: () => void;
    /** Additional className on the outer wrapper */
    className?: string;
}

export default function LoginForm({
    title = 'Bun venit',
    subtitle = 'Conectează-te la contul tău',
    onSwitchToRegister,
    onForgotPassword,
    className = '',
}: LoginFormProps) {
    const [authMode, setAuthMode] = useState<'password' | 'magic_link'>('password');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const supabase = createClient();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        if (authMode === 'magic_link') {
            const { error } = await supabase.auth.signInWithOtp({
                email,
                options: {
                    emailRedirectTo: `${window.location.origin}/patient`,
                },
            });

            if (error) {
                setStatus('error');
                setErrorMessage(error.message);
            } else {
                setStatus('success');
            }
        } else {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                setStatus('error');
                setErrorMessage(error.message);
            } else {
                // Succes login cu parola, redirect sau refresh in functie de Next.js router
                // De regula middleware-ul sau layout-ul se ocupa dupa ce Sesiunea exista in cookie.
                window.location.href = '/patient';
            }
        }
    };

    const handleProviderLogin = async (provider: 'google' | 'apple') => {
        setStatus('loading');
        await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${window.location.origin}/patient`,
            },
        });
    };

    return (
        <>
            <div className={`login-form-panel ${className}`}>
                <div className="login-form-inner">
                    {/* Header */}
                    <div className="login-header">
                        <h1 className="login-title">{title}</h1>
                        <p className="login-subtitle">{subtitle}</p>
                    </div>

                    {status === 'success' ? (
                        <div className="px-4 py-8 text-center bg-green-50 rounded-2xl border border-green-100 mb-6">
                            <p className="text-xl font-semibold text-green-800 mb-2">Verifică-ți adresa de email!</p>
                            <p className="text-sm text-green-700 font-medium">
                                Ți-am trimis un link securizat de conectare la adresa:<br />
                                <strong className="text-green-900">{email}</strong>
                            </p>
                            <p className="mt-4 text-xs text-green-600">Nu uita să verifici și folderul Spam.</p>
                        </div>
                    ) : (
                        <>


                            {/* Form Fields */}
                            <form className="login-fields" onSubmit={handleSubmit}>
                                {/* Email */}
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
                                </div>

                                {/* Password (only if authMode is 'password') */}
                                {authMode === 'password' && (
                                    <div className="login-field-group">
                                        <div className="flex justify-between items-center w-full">
                                            <label className="login-label">Parolă</label>
                                            <button
                                                type="button"
                                                onClick={onForgotPassword}
                                                className="text-sm font-medium text-emerald-600 hover:text-emerald-700 hover:underline transition-colors"
                                            >
                                                Ai uitat parola?
                                            </button>
                                        </div>
                                        <div className="login-input-wrapper">
                                            <input
                                                type="password"
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="••••••••"
                                                className="login-input"
                                                disabled={status === 'loading'}
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Error message */}
                                {status === 'error' && (
                                    <p className="text-sm text-red-500 font-medium">{errorMessage}</p>
                                )}

                                {/* Login Actions */}
                                <div className="login-actions">
                                    <button
                                        type="submit"
                                        className="login-submit-btn"
                                        disabled={status === 'loading' || !email || (authMode === 'password' && !password)}
                                    >
                                        {status === 'loading'
                                            ? 'Se procesează...'
                                            : (authMode === 'password' ? 'Conectare securizată' : 'Trimite Magic Link')}
                                    </button>

                                    {/* Toggle Auth Mode Button */}
                                    <button
                                        type="button"
                                        className="toggle-auth-mode-btn"
                                        onClick={() => {
                                            setAuthMode(prev => prev === 'password' ? 'magic_link' : 'password');
                                            setStatus('idle');
                                            setErrorMessage('');
                                        }}
                                        disabled={status === 'loading'}
                                    >
                                        {authMode === 'password'
                                            ? 'Autentificare fără parolă (Email OTP)'
                                            : 'Autentificare clasică (Parolă)'}
                                    </button>
                                </div>

                                {/* Sign Up */}
                                <div className="login-signup-row">
                                    <span className="login-signup-text">
                                        Nu ai cont?
                                    </span>
                                    <button
                                        type="button"
                                        className="login-signup-link"
                                        onClick={onSwitchToRegister}
                                    >
                                        Înregistrează-te
                                    </button>
                                </div>
                            </form>
                        </>
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

                /* Social Buttons */
                .login-social-row {
                    display: flex;
                    gap: 12px;
                    align-self: stretch;
                }

                .login-social-btn {
                    flex: 1;
                    height: 48px;
                    padding: 12px 16px;
                    background: var(--color-surface);
                    border-radius: var(--radius-pill);
                    border: 1px solid var(--color-border-form);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 12px;
                    cursor: pointer;
                    box-shadow: var(--shadow-sm);
                    transition: background 0.2s;
                }

                .login-social-btn:hover:not(:disabled) {
                    background: var(--color-surface-card);
                }

                .login-social-btn:disabled {
                    cursor: not-allowed;
                }

                .login-social-btn span {
                    color: var(--color-primary);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 25.6px;
                }

                /* Divider */
                .login-divider {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    align-self: stretch;
                }

                .login-divider-line {
                    flex: 1;
                    height: 1px;
                    background: var(--color-border-light);
                }

                .login-divider-text {
                    color: var(--color-text-muted);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 18.6px;
                    white-space: nowrap;
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

                .toggle-auth-mode-btn {
                    width: 100%;
                    padding: 14px 24px;
                    background: transparent;
                    border-radius: var(--radius-pill);
                    border: 1px solid var(--color-border-form);
                    color: var(--color-text-muted);
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: color 0.2s, border-color 0.2s;
                    text-align: center;
                }

                .toggle-auth-mode-btn:hover:not(:disabled) {
                    color: var(--color-primary);
                    border-color: var(--color-primary-hover);
                }

                .toggle-auth-mode-btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                /* Sign Up */
                .login-signup-row {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    justify-content: center;
                    padding: 8px 0;
                }

                .login-signup-text {
                    color: var(--color-text-light);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 21.7px;
                }

                .login-signup-link {
                    color: var(--color-primary);
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 25.6px;
                    text-decoration: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                }

                .login-signup-link:hover {
                    text-decoration: underline;
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

                    .login-social-row {
                        flex-direction: column;
                    }
                }
            `}</style>
        </>
    );
}
