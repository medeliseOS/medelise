'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useMemo } from 'react'
import AnimatedEyeToggle from './AnimatedEyeToggle'
import './register-form.css'
import { Mutation, useMutation } from '@tanstack/react-query'

import { register } from '../../../services/auth.service'

import toast from 'react-hot-toast'

interface RegisterFormProps {
  onSwitchToLogin?: () => void
  onSubmit?: (data: {
    userId(userId: any): unknown
    nume: string
    prenume: string
    username: string
    birthDay: string
    birthMonth: string
    birthYear: string
    email: string
    password: string
    confirmPassword: string
  }) => void
  className?: string
}

/** Strip diacritics and lowercase */
function toUsername(prenume: string, nume: string): string {
  const strip = (s: string) =>
    s
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z]/g, '')
      .toLowerCase()
  const p = strip(prenume)
  const n = strip(nume)
  return p || n ? `@${p}${n}` : ''
}

/** Password strength: 0–4 */
function getPasswordStrength(pw: string): {
  score: number
  label: string
  color: string
} {
  if (!pw) return { score: 0, label: '', color: 'transparent' }
  let s = 0
  if (pw.length >= 8) s++
  if (/[A-Z]/.test(pw)) s++
  if (/[0-9]/.test(pw)) s++
  if (/[^A-Za-z0-9]/.test(pw)) s++
  const map: Record<number, { label: string; color: string }> = {
    0: { label: 'Foarte slabă', color: 'var(--color-error)' },
    1: { label: 'Slabă', color: 'var(--color-error)' },
    2: { label: 'Medie', color: 'var(--color-warning)' },
    3: { label: 'Bună', color: 'var(--color-success)' },
    4: { label: 'Puternică', color: 'var(--color-success)' },
  }
  return { score: s, ...map[s] }
}

const MONTHS = [
  'Ianuarie',
  'Februarie',
  'Martie',
  'Aprilie',
  'Mai',
  'Iunie',
  'Iulie',
  'August',
  'Septembrie',
  'Octombrie',
  'Noiembrie',
  'Decembrie',
]
const DAYS = Array.from({ length: 31 }, (_, i) => String(i + 1))
const currentYear = new Date().getFullYear()
const YEARS = Array.from({ length: 100 }, (_, i) => String(currentYear - i))

export default function RegisterForm({
  onSwitchToLogin,
  onSubmit,

  className = '',
}: RegisterFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [nume, setNume] = useState('')
  const [prenume, setPrenume] = useState('')

  const [birthDay, setBirthDay] = useState('')
  const [birthMonth, setBirthMonth] = useState('')
  const [birthYear, setBirthYear] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const passwordRef = useRef<HTMLInputElement>(null)
  const confirmRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  const username = useMemo(() => toUsername(prenume, nume), [prenume, nume])
  const strength = useMemo(() => getPasswordStrength(password), [password])
  const passwordsMatch =
    confirmPassword.length > 0 && password === confirmPassword
  const passwordsMismatch =
    confirmPassword.length > 0 && password !== confirmPassword

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: (res, variables) => {
      if (!res.success) {
        toast.error('Eroare la înregistrare')
        return
      }

      toast.success('Cont creat! Cod OTP trimis pe email.')

      onSubmit?.({
        nume,
        prenume,
        username,
        birthDay,
        birthMonth,
        birthYear,
        email: variables.email,
        password,
        confirmPassword,
        userId: undefined as any,
      })
    },
    onError: () => {
      toast.error('Registration failed')
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error('Parolele nu coincid')
      return
    }

    const email = emailRef.current?.value || ''

    if (!email) {
      toast.error('Email este obligatoriu')
      return
    }

    registerMutation.mutate({
      email,
      password,
      nume,
      prenume,
      username,
      birthDay,
      birthMonth,
      birthYear,
      confirmPassword,
    })
  }

  return (
    <>
      <div className={`register-form-panel ${className}`}>
        <div className="register-form-inner">
          {/* Header */}
          <div className="register-header">
            <h1 className="register-title">Creează cont</h1>
            <p className="register-subtitle">
              Înregistrează-te pentru acces la platforma angajaților
            </p>
          </div>

          {/* Social Sign-up */}
          <div className="register-social-row">
            <button className="register-social-btn" type="button">
              <Image
                src="/images-medelise/md-login/md-img-login-social-02.webp"
                alt="Google"
                width={24}
                height={24}
              />
              <span>Continuă cu Google</span>
            </button>
            <button className="register-social-btn" type="button">
              <Image
                src="/images-medelise/md-login/md-img-login-social-01.webp"
                alt="Apple"
                width={24}
                height={24}
              />
              <span>Continuă cu Apple</span>
            </button>
          </div>

          {/* Divider */}
          <div className="register-divider">
            <div className="register-divider-line" />
            <span className="register-divider-text">
              Sau înregistrează-te cu
            </span>
            <div className="register-divider-line" />
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
                    required
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
                    required
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
                    required
                  >
                    <option value="" disabled>
                      Zi
                    </option>
                    {DAYS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
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
                    required
                  >
                    <option value="" disabled>
                      Luna
                    </option>
                    {MONTHS.map((m, i) => (
                      <option key={m} value={String(i + 1)}>
                        {m}
                      </option>
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
                    required
                  >
                    <option value="" disabled>
                      Anul
                    </option>
                    {YEARS.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
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
                  required
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
                  required
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
                          background:
                            i < strength.score
                              ? strength.color
                              : 'var(--color-surface-border)',
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
              <div
                className={`register-input-wrapper ${passwordsMismatch ? 'register-input-error' : ''} ${passwordsMatch ? 'register-input-success' : ''}`}
              >
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
                  required
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
              <button
                type="submit"
                className="register-submit-btn"
                disabled={registerMutation.isPending}
              >
                {registerMutation.isPending
                  ? 'Se înregistrează...'
                  : 'Înregistrează-te'}
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
    </>
  )
}
