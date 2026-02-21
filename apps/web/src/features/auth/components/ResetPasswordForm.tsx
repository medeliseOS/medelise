'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function ResetPasswordForm() {
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const supabase = createClient();

    // The user lands here after clicking the recovery link from their email
    useEffect(() => {
        // Optional: Check if we actually have a valid session/recovery token
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                // If there's no session, the link might be invalid or expired.
                // Depending on supabase config, the URL fragment contains the access_token
                // which supabase client parses automatically. So if session is null after a beat,
                // it means the recovery link was invalid.
            }
        };
        checkSession();
    }, [supabase.auth]);

    const handleUpdatePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        if (password.length < 6) {
            setStatus('error');
            setErrorMessage('Parola trebuie să conțină minim 6 caractere.');
            return;
        }

        const { error } = await supabase.auth.updateUser({
            password: password
        });

        if (error) {
            setStatus('error');
            setErrorMessage(error.message);
        } else {
            setStatus('success');
            // Give them a moment to see the success message before redirecting
            setTimeout(() => {
                router.push('/login');
            }, 3000);
        }
    };

    return (
        <div className="login-page">
            <div className="reset-container">
                <div className="login-form-panel">
                    <div className="login-form-inner">
                        <div className="login-header text-center w-full items-center">
                            <h1 className="login-title">Setare Parolă Nouă</h1>
                            <p className="login-subtitle text-center mt-2">
                                Introdu noua parolă pentru contul tău.
                            </p>
                        </div>

                        {status === 'success' ? (
                            <div className="px-4 py-8 text-center bg-green-50 rounded-2xl border border-green-100 mb-6 w-full">
                                <p className="text-xl font-semibold text-green-800 mb-2">Parolă actualizată!</p>
                                <p className="text-sm text-green-700 font-medium">
                                    Vei fi redirecționat către pagina de autentificare în câteva secunde.
                                </p>
                            </div>
                        ) : (
                            <form className="login-fields w-full mt-6" onSubmit={handleUpdatePassword}>
                                <div className="login-field-group">
                                    <label className="login-label">Noua Parolă</label>
                                    <div className="login-input-wrapper">
                                        <input
                                            type="password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="••••••••"
                                            className="login-input"
                                            disabled={status === 'loading'}
                                            minLength={6}
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
                                        disabled={status === 'loading' || !password}
                                    >
                                        {status === 'loading' ? 'Se actualizează...' : 'Salvează Parola'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .login-page {
                    display: flex;
                    min-height: 100vh;
                    background: white;
                    padding: 64px 32px;
                    justify-content: center;
                    align-items: center;
                }

                .reset-container {
                    width: 100%;
                    max-width: 480px;
                }

                .login-form-panel {
                    width: 100%;
                    padding: 40px;
                    background: var(--color-white);
                    border-radius: 40px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
                }

                .login-form-inner {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .login-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .login-title {
                    color: var(--color-primary);
                    font-size: 32px;
                    font-weight: 500;
                    margin: 0;
                    text-align: center;
                }

                .login-subtitle {
                    color: var(--color-text-light);
                    font-size: 16px;
                    font-weight: 500;
                    margin: 0;
                }

                .login-fields {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
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
                }

                .login-input-wrapper {
                    height: 48px;
                    padding: 8px 16px;
                    background: var(--color-surface);
                    border-radius: var(--radius-pill);
                    border: 1px solid var(--color-border-form);
                    display: flex;
                    align-items: center;
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
                    color: var(--color-primary);
                    outline: none;
                }

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
                    cursor: pointer;
                    transition: background 0.2s, transform 0.15s;
                }

                .login-submit-btn:hover:not(:disabled) {
                    background: var(--color-primary-hover);
                    transform: translateY(-1px);
                }
            `}</style>
            <style jsx global>{`
                body > nav,
                body > .navbar-wrapper,
                header,
                .navbar {
                    display: none !important;
                }
            `}</style>
        </div>
    );
}
