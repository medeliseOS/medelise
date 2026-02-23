'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import AnimatedEyeToggle from './AnimatedEyeToggle';

interface LoginFormProps {
    /** Override the title text */
    title?: string;
    /** Override the subtitle text */
    subtitle?: string;
    /** Called when the form is submitted with email & password */
    onSubmit?: (email: string, password: string) => Promise<void> | void;
    /** Called when user clicks "Înregistrează-te" to switch to register */
    onSwitchToRegister?: () => void;
    /** Link destination for "Ai uitat parola?" */
    forgotHref?: string;
    /** Additional className on the outer wrapper */
    className?: string;
}

export default function LoginForm({
    title = 'Bun venit',
    subtitle = 'Conectează-te la contul de angajat',
    onSubmit,
    onSwitchToRegister,
    forgotHref = '#',
    className = '',
}: LoginFormProps) {
    const [showPassword, setShowPassword] = useState(false);
    const passwordRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit?.(
  emailRef.current?.value || ''
, passwordRef.current?.value || ''
);
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

                    {/* Social Sign-in */}
                    <div className="login-social-row">
                        <button className="login-social-btn" type="button">
                            <Image
                                src="/images-medelise/md-login/md-img-login-social-02.webp"
                                alt="Google"
                                width={24}
                                height={24}
                            />
                            <span>Conectare cu Google</span>
                        </button>
                        <button className="login-social-btn" type="button">
                            <Image
                                src="/images-medelise/md-login/md-img-login-social-01.webp"
                                alt="Apple"
                                width={24}
                                height={24}
                            />
                            <span>Conectare cu Apple</span>
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="login-divider">
                        <div className="login-divider-line" />
                        <span className="login-divider-text">Sau conectează-te cu</span>
                        <div className="login-divider-line" />
                    </div>

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
                                    ref={emailRef}
                                    type="email"
                                    placeholder="Introdu adresa de email"
                                    className="login-input"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="login-field-group">
                            <label className="login-label">Parolă</label>
                            <div className="login-input-wrapper">
                                <Image
                                    src="/images-medelise/md-login/md-img-login-ico-lock.webp"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className="login-input-icon"
                                />
                                <input
                                    ref={passwordRef}
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Introdu parola"
                                    className="login-input"
                                />
                                <AnimatedEyeToggle
                                    isVisible={showPassword}
                                    onToggle={() => setShowPassword(!showPassword)}
                                    inputRef={passwordRef}
                                />
                            </div>
                        </div>

                        {/* Login Button */}
                        <div className="login-actions">
                            <button type="submit" className="login-submit-btn">
                                Conectare
                            </button>

                            <div className="login-meta-row">
                                <label className="login-remember">
                                    <input
                                        type="checkbox"
                                        className="login-checkbox"
                                        checked={remember}
                                        onChange={(e) => setRemember(e.target.checked)}
                                    />
                                    <span>Ține-mă minte</span>
                                </label>
                                <Link href={forgotHref} className="login-forgot">
                                    Ai uitat parola?
                                </Link>
                            </div>
                        </div>
                    </form>

                    {/* Sign Up Link */}
                    <div className="login-signup-row">
                        <span className="login-signup-text">Nu ai un cont?</span>
                        <button
                            type="button"
                            className="login-signup-link"
                            onClick={onSwitchToRegister}
                        >
                            Înregistrează-te
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                /* ── LEFT PANEL ── */
                .login-form-panel {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0 32px;
                    background: white;
                }

                .login-form-inner {
                    width: 100%;
                    max-width: 650px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;
                }

                /* Header */
                .login-header {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    align-self: stretch;
                    align-items: center;
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

                .login-social-btn:hover {
                    background: var(--color-surface-card);
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

                .login-eye-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    padding: 0;
                }

                /* Login Actions */
                .login-actions {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
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

                .login-submit-btn:hover {
                    background: var(--color-primary-hover);
                    transform: translateY(-1px);
                }

                .login-submit-btn:active {
                    transform: translateY(0);
                }

                .login-meta-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .login-remember {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                }

                .login-checkbox {
                    width: 20px;
                    height: 20px;
                    border-radius: 6px;
                    border: 1px solid var(--color-border-form);
                    background: var(--color-surface);
                    cursor: pointer;
                    accent-color: var(--color-primary);
                }

                .login-remember span {
                    color: var(--color-text-light);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 21.7px;
                }

                .login-forgot {
                    color: var(--color-text-muted);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 21.7px;
                    text-decoration: none;
                }

                .login-forgot:hover {
                    text-decoration: underline;
                }

                /* Sign Up */
                .login-signup-row {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 0;
                }

                .login-signup-text {
                    color: var(--color-primary);
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
