'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useMemo } from 'react';
import AnimatedEyeToggle from './AnimatedEyeToggle';

interface RegisterFormProps {
    onSwitchToLogin?: () => void;
    onSubmit?: (data: {
        nume: string;
        prenume: string;
        username: string;
        birthDay: string;
        birthMonth: string;
        birthYear: string;
        email: string;
        password: string;
    }) => void;
    className?: string;
}

/** Strip diacritics and lowercase */
function toUsername(prenume: string, nume: string): string {
    const strip = (s: string) =>
        s
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-zA-Z]/g, '')
            .toLowerCase();
    const p = strip(prenume);
    const n = strip(nume);
    return p || n ? `@${p}${n}` : '';
}

/** Password strength: 0–4 */
function getPasswordStrength(pw: string): { score: number; label: string; color: string } {
    if (!pw) return { score: 0, label: '', color: 'transparent' };
    let s = 0;
    if (pw.length >= 8) s++;
    if (/[A-Z]/.test(pw)) s++;
    if (/[0-9]/.test(pw)) s++;
    if (/[^A-Za-z0-9]/.test(pw)) s++;
    const map: Record<number, { label: string; color: string }> = {
        0: { label: 'Foarte slabă', color: 'var(--color-error)' },
        1: { label: 'Slabă', color: 'var(--color-error)' },
        2: { label: 'Medie', color: 'var(--color-warning)' },
        3: { label: 'Bună', color: 'var(--color-success)' },
        4: { label: 'Puternică', color: 'var(--color-success)' },
    };
    return { score: s, ...map[s] };
}

const MONTHS = [
    'Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie',
    'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie',
];
const DAYS = Array.from({ length: 31 }, (_, i) => String(i + 1));
const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: 100 }, (_, i) => String(currentYear - i));

export default function RegisterForm({
    onSwitchToLogin,
    onSubmit,
    className = '',
}: RegisterFormProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [nume, setNume] = useState('');
    const [prenume, setPrenume] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    const username = useMemo(() => toUsername(prenume, nume), [prenume, nume]);
    const strength = useMemo(() => getPasswordStrength(password), [password]);
    const passwordsMatch = confirmPassword.length > 0 && password === confirmPassword;
    const passwordsMismatch = confirmPassword.length > 0 && password !== confirmPassword;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) return;
        onSubmit?.({
            nume,
            prenume,
            username,
            birthDay,
            birthMonth,
            birthYear,
            email: emailRef.current?.value || '',
            password,
        });
    };

    return (
        <>
            <div className={`register-form-panel ${className}`}>
                <div className="register-form-inner">
                    {/* Header */}
                    <div className="register-header">
                        <h1 className="register-title">Creează cont</h1>
                        <p className="register-subtitle">Înregistrează-te pentru acces la platforma angajaților</p>
                    </div>



                    {/* Form Fields */}
                    <form className="register-fields" onSubmit={handleSubmit}>
                        {/* Nume + Prenume */}
                        <div className="register-name-row">
                            <div className="register-field-group">
                                <label className="register-label">Nume</label>
                                <div className="register-input-wrapper">
                                    <input
                                        type="text"
                                        placeholder="Introdu numele"
                                        className="register-input"
                                        value={nume}
                                        onChange={(e) => setNume(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="register-field-group">
                                <label className="register-label">Prenume</label>
                                <div className="register-input-wrapper">
                                    <input
                                        type="text"
                                        placeholder="Introdu prenumele"
                                        className="register-input"
                                        value={prenume}
                                        onChange={(e) => setPrenume(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Username */}
                        <div className="register-field-group">
                            <label className="register-label">Utilizator</label>
                            <div className="register-input-wrapper register-username-wrapper">
                                <span className="register-username-display">
                                    {username || '@'}
                                </span>
                            </div>
                        </div>

                        {/* Date of Birth — Day + Month + Year */}
                        <div className="register-dob-row">
                            <div className="register-field-group register-dob-day">
                                <label className="register-label">Ziua</label>
                                <div className="register-input-wrapper">
                                    <select
                                        className="register-select"
                                        value={birthDay}
                                        onChange={(e) => setBirthDay(e.target.value)}
                                    >
                                        <option value="" disabled>Zi</option>
                                        {DAYS.map((d) => (
                                            <option key={d} value={d}>{d}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="register-field-group register-dob-month">
                                <label className="register-label">Luna</label>
                                <div className="register-input-wrapper">
                                    <select
                                        className="register-select"
                                        value={birthMonth}
                                        onChange={(e) => setBirthMonth(e.target.value)}
                                    >
                                        <option value="" disabled>Luna</option>
                                        {MONTHS.map((m, i) => (
                                            <option key={m} value={String(i + 1)}>{m}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="register-field-group register-dob-year">
                                <label className="register-label">Anul</label>
                                <div className="register-input-wrapper">
                                    <select
                                        className="register-select"
                                        value={birthYear}
                                        onChange={(e) => setBirthYear(e.target.value)}
                                    >
                                        <option value="" disabled>Anul</option>
                                        {YEARS.map((y) => (
                                            <option key={y} value={y}>{y}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="register-field-group">
                            <label className="register-label">Email</label>
                            <div className="register-input-wrapper">
                                <Image
                                    src="/images-medelise/md-login/md-img-login-ico-mail.webp"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className="register-input-icon"
                                />
                                <input
                                    ref={emailRef}
                                    type="email"
                                    placeholder="Introdu adresa de email"
                                    className="register-input"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="register-field-group">
                            <label className="register-label">Parolă</label>
                            <div className="register-input-wrapper">
                                <Image
                                    src="/images-medelise/md-login/md-img-login-ico-lock.webp"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className="register-input-icon"
                                />
                                <input
                                    ref={passwordRef}
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Creează o parolă"
                                    className="register-input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <AnimatedEyeToggle
                                    isVisible={showPassword}
                                    onToggle={() => setShowPassword(!showPassword)}
                                    inputRef={passwordRef}
                                />
                            </div>
                            {/* Password strength bar */}
                            {password.length > 0 && (
                                <div className="register-strength">
                                    <div className="register-strength-track">
                                        {[0, 1, 2, 3].map((i) => (
                                            <div
                                                key={i}
                                                className="register-strength-segment"
                                                style={{
                                                    background: i < strength.score ? strength.color : 'var(--color-surface-border)',
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <span
                                        className="register-strength-label"
                                        style={{ color: strength.color }}
                                    >
                                        {strength.label}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div className="register-field-group">
                            <label className="register-label">Confirmă parola</label>
                            <div className={`register-input-wrapper ${passwordsMismatch ? 'register-input-error' : ''} ${passwordsMatch ? 'register-input-success' : ''}`}>
                                <Image
                                    src="/images-medelise/md-login/md-img-login-ico-lock.webp"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className="register-input-icon"
                                />
                                <input
                                    ref={confirmRef}
                                    type={showConfirm ? 'text' : 'password'}
                                    placeholder="Repetă parola"
                                    className="register-input"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <AnimatedEyeToggle
                                    isVisible={showConfirm}
                                    onToggle={() => setShowConfirm(!showConfirm)}
                                    inputRef={confirmRef}
                                />
                            </div>
                            {passwordsMismatch && (
                                <span className="register-error-text">Parolele nu coincid</span>
                            )}
                            {passwordsMatch && (
                                <span className="register-match-text">✓ Parolele coincid</span>
                            )}
                        </div>

                        {/* Register Button */}
                        <div className="register-actions">
                            <button type="submit" className="register-submit-btn">
                                Înregistrează-te
                            </button>
                        </div>
                    </form>

                    {/* Switch to Login */}
                    <div className="register-login-row">
                        <span className="register-login-text">Ai deja un cont?</span>
                        <button
                            type="button"
                            className="register-login-link"
                            onClick={onSwitchToLogin}
                        >
                            Conectează-te
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .register-form-panel {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0 32px;
                    background: white;
                }

                .register-form-inner {
                    width: 100%;
                    max-width: 650px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 18px;
                }

                .register-header {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    align-self: stretch;
                    align-items: center;
                }

                .register-title {
                    color: var(--color-primary);
                    font-size: 36px;
                    font-weight: 500;
                    line-height: 44px;
                    margin: 0;
                }

                .register-subtitle {
                    color: var(--color-text-light);
                    font-size: 15px;
                    font-weight: 500;
                    line-height: 24px;
                    margin: 0;
                }

                .register-social-row {
                    display: flex;
                    gap: 12px;
                    align-self: stretch;
                }

                .register-social-btn {
                    flex: 1;
                    height: 44px;
                    padding: 10px 16px;
                    background: var(--color-surface);
                    border-radius: var(--radius-pill);
                    border: 1px solid var(--color-border-form);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    cursor: pointer;
                    box-shadow: var(--shadow-sm);
                    transition: background 0.2s;
                }

                .register-social-btn:hover {
                    background: var(--color-surface-card);
                }

                .register-social-btn span {
                    color: var(--color-primary);
                    font-size: 15px;
                    font-weight: 500;
                    line-height: 24px;
                }

                .register-divider {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    align-self: stretch;
                }

                .register-divider-line {
                    flex: 1;
                    height: 1px;
                    background: var(--color-border-light);
                }

                .register-divider-text {
                    color: var(--color-text-muted);
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 18px;
                    white-space: nowrap;
                }

                .register-fields {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                    align-self: stretch;
                }

                .register-name-row {
                    display: flex;
                    gap: 12px;
                }

                .register-name-row .register-field-group {
                    flex: 1;
                }

                .register-dob-row {
                    display: flex;
                    gap: 12px;
                }

                .register-dob-day {
                    flex: 0 0 80px;
                }

                .register-dob-month {
                    flex: 1;
                }

                .register-dob-year {
                    flex: 0 0 100px;
                }

                .register-field-group {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .register-label {
                    color: var(--color-primary);
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 20px;
                }

                .register-input-wrapper {
                    height: 44px;
                    padding: 8px 16px;
                    background: var(--color-surface);
                    border-radius: var(--radius-pill);
                    border: 1px solid var(--color-border-form);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }

                .register-input-wrapper:focus-within {
                    border-color: var(--color-primary-hover);
                    box-shadow: var(--shadow-focus);
                }

                .register-input-error {
                    border-color: var(--color-error) !important;
                }

                .register-input-success {
                    border-color: var(--color-success) !important;
                }

                .register-username-wrapper {
                    background: var(--color-surface);
                    cursor: default;
                }

                .register-username-display {
                    color: var(--color-primary);
                    font-size: 15px;
                    font-weight: 600;
                    line-height: 24px;
                    letter-spacing: 0.02em;
                }

                .register-input {
                    flex: 1;
                    border: none;
                    background: transparent;
                    font-size: 15px;
                    font-weight: 400;
                    line-height: 24px;
                    color: var(--color-primary);
                    outline: none;
                    width: 100%;
                }

                .register-input::placeholder {
                    color: var(--color-text-light);
                }

                .register-select {
                    flex: 1;
                    border: none;
                    background: transparent;
                    font-size: 15px;
                    font-weight: 400;
                    line-height: 24px;
                    color: var(--color-primary);
                    outline: none;
                    cursor: pointer;
                    width: 100%;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                }

                .register-select:invalid,
                .register-select option[value=""] {
                    color: var(--color-text-light);
                }

                /* ── Password Strength Bar ── */
                .register-strength {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: 4px;
                }

                .register-strength-track {
                    display: flex;
                    gap: 4px;
                    flex: 1;
                }

                .register-strength-segment {
                    flex: 1;
                    height: 4px;
                    border-radius: 2px;
                    transition: background 0.3s;
                }

                .register-strength-label {
                    font-size: 12px;
                    font-weight: 600;
                    white-space: nowrap;
                    min-width: 70px;
                    text-align: right;
                }

                .register-error-text {
                    color: var(--color-error);
                    font-size: 12px;
                    font-weight: 500;
                    margin-top: 2px;
                }

                .register-match-text {
                    color: var(--color-success);
                    font-size: 12px;
                    font-weight: 500;
                    margin-top: 2px;
                }

                .register-actions {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .register-submit-btn {
                    width: 100%;
                    padding: 12px 24px;
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

                .register-submit-btn:hover {
                    background: var(--color-primary-hover);
                    transform: translateY(-1px);
                }

                .register-submit-btn:active {
                    transform: translateY(0);
                }

                .register-login-row {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 2px 0;
                }

                .register-login-text {
                    color: var(--color-primary);
                    font-size: 15px;
                    font-weight: 500;
                    line-height: 21px;
                }

                .register-login-link {
                    color: var(--color-primary);
                    font-size: 15px;
                    font-weight: 600;
                    line-height: 24px;
                    text-decoration: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                }

                .register-login-link:hover {
                    text-decoration: underline;
                }

                @media (max-width: 480px) {
                    .register-form-panel {
                        padding: 24px 16px;
                    }

                    .register-title {
                        font-size: 28px;
                        line-height: 36px;
                    }

                    .register-social-row,
                    .register-name-row,
                    .register-dob-row {
                        flex-direction: column;
                    }

                    .register-dob-day,
                    .register-dob-year {
                        flex: 1;
                    }
                }
            `}</style>
        </>
    );
}
