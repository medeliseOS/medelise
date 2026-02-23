'use client'

import { useRef, useState, useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { verifyOtp, resendSignupOtp} from '@/services/auth.service'
import toast from 'react-hot-toast'
import { useAppDispatch } from '@/store/hooks'
import { setAuth } from '@/store/slices/authSlice'
import './otp.css'
import { useRouter } from 'next/navigation'   


interface Props {
  email: string
  onBack: () => void
  onSuccess?: () => void
}

export default function OtpVerification({ email, onBack, onSuccess }: Props) {
  const dispatch = useAppDispatch()
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])
  const [countdown, setCountdown] = useState(30)
  const [otpValue, setOtpValue] = useState('')
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const router = useRouter()

  /* ===========================
     VERIFY OTP
  =========================== */
  const verifyMutation = useMutation({
  mutationFn: (otp: string) => verifyOtp(email, otp),

  onSuccess: (res) => {
    if (!res.success || !res.token || !res.user) {
      toast.error('Cod OTP invalid')
      return
    }

    dispatch(
      setAuth({
        user: res.user,
        token: res.token,
      })
    )

    setShowSuccessModal(true)

    setTimeout(() => {
      router.replace('/dashboard')
    }, 2000)
  },

  onError: () => {
    toast.error('Cod OTP invalid')
  },
})

  /* ===========================
     RESEND OTP
  =========================== */
  const resendMutation = useMutation({
  mutationFn: () => resendSignupOtp(email),

  onSuccess: (res) => {
  if (!res.success) {
    toast.error('Nu s-a putut retrimite codul')
    return
  }

  toast.success('Cod nou trimis')

  inputsRef.current.forEach((input) => {
    if (input) input.value = ''
  })

  setOtpValue('')
  setCountdown(30)
},

  onError: () => {
    toast.error('Eroare la retrimitere')
  },
})

  /* ===========================
     COUNTDOWN TIMER
  =========================== */
  useEffect(() => {
  if (countdown <= 0) return

  const interval = setInterval(() => {
    setCountdown((prev) => {
      if (prev <= 1) {
        clearInterval(interval)
        return 0
      }
      return prev - 1
    })
  }, 1000)

  return () => clearInterval(interval)
}, [countdown])

  /* ===========================
     HANDLE INPUT CHANGE
  =========================== */
  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return

    inputsRef.current[index]!.value = value

    const updated = inputsRef.current
      .map((input) => input?.value || '')
      .join('')

    setOtpValue(updated)

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus()
    }

    if (updated.length === 6) {
      verifyMutation.mutate(updated)
    }
  }

  /* ===========================
     HANDLE PASTE
  =========================== */
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()

    const pasted = e.clipboardData.getData('text').replace(/\D/g, '')

    if (pasted.length !== 6) return

    pasted.split('').forEach((digit, i) => {
      if (inputsRef.current[i]) {
        inputsRef.current[i]!.value = digit
      }
    })

    setOtpValue(pasted)
    verifyMutation.mutate(pasted)
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (
      e.key === 'Backspace' &&
      !inputsRef.current[index]?.value &&
      index > 0
    ) {
      inputsRef.current[index - 1]?.focus()
    }
  }

  return (
    <div className="otp-wrapper flex h-[70vh] items-center justify-center">
      <div className="otp-card">
        <button className="otp-back" onClick={onBack}>
          ← Înapoi
        </button>

        <h2 className="otp-title">Verificare OTP</h2>
        <p className="otp-subtitle">
          Introdu codul trimis la <strong>{email}</strong>
        </p>

        <div className="otp-inputs" onPaste={handlePaste}>
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="otp-input"
              ref={(el) => {
                inputsRef.current[i] = el
              }}
              onChange={(e) => handleChange(e.target.value, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
            />
          ))}
        </div>

        {verifyMutation.isPending && (
          <div className="otp-loading">Se verifică...</div>
        )}

        <div className="otp-resend">
          {countdown > 0 ? (
            <span>Retrimite în {countdown}s</span>
          ) : (
            <button
              onClick={() => resendMutation.mutate()}
              disabled={resendMutation.isPending}
            >
              Retrimite cod
            </button>
          )}
        </div>
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="animate-fadeIn w-100 rounded-2xl bg-white p-8 text-center shadow-2xl">
            <h2 className="mb-3 text-2xl font-semibold">🎉 Thank You!</h2>
            <p className="mb-4 text-gray-600">
              You have successfully registered with us.
            </p>
            <p className="text-sm text-gray-400">Redirecting to dashboard...</p>
          </div>
        </div>
      )}
    </div>
  )
}
