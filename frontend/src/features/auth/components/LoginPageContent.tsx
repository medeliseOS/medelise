'use client'

import { useState } from 'react'
import CardScanner from './CardScanner'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import OtpVerification from './OtpVerification'
import { login } from '@/services/auth.service'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'


export default function LoginPageContent() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [showOtp, setShowOtp] = useState(false)
  const [otpEmail, setOtpEmail] = useState('')
  const [userId, setUserId] = useState('')
  const router = useRouter()
const [step, setStep] = useState<'login' | 'otp'>('login')


  // ✅ IF showOtp is true → render OTP screen
  if (showOtp) {
    return (
      <OtpVerification
        email={otpEmail}
        onBack={() => setShowOtp(false)}
        onSuccess={() => {
          console.log('OTP verified successfully')
        }}
      />
    )
  }

  

  return (
    <>
      <style jsx global>{`
        /* Hide navbar + footer on the login route */
        body > nav,
        body > .navbar-wrapper,
        header,
        .navbar {
          display: none !important;
        }
      `}</style>

      <div className="login-page">
        {/* ── Left Panel: Flip Card ── */}
        <div className="card-flip-container">
          <div className={`card-flip-inner ${isFlipped ? 'flipped' : ''}`}>
            {/* Front: Login */}
            <div className="card-face card-front">
              <LoginForm
              onSwitchToRegister={() => setIsFlipped(true)}
                onSubmit={async (email, password) => {
                  if (!email || !password) {
                    toast.error('Email și parola sunt obligatorii')
                    return
                  }

                  const res = await login({ email, password })

                  if (!res.success) {
                    toast.error('Email sau parolă greșită')
                    return
                  }

                  toast.success('Autentificare reușită!')
                  router.push('/dashboard')
                }}
              />
            </div>
            {/* Back: Register */}
            <div className="card-face card-back">
              <RegisterForm
                onSwitchToLogin={() => setIsFlipped(false)}
                onSubmit={(data) => {
                  setOtpEmail(data.email) // store email
                  setShowOtp(true) // show OTP screen
                  setUserId(String(data.userId))
                  console.log('Registration data:', data) // log registration data
                }}
              />
            </div>
          </div>
        </div>

        {/* ── Right Panel: Card Scanner Animation ── */}
        <div className="login-preview-panel">
          <CardScanner />
        </div>
      </div>

      <style jsx>{`
        .login-page {
          display: flex;
          min-height: 100vh;
          background: white;
          padding: 64px 32px;
        }

        /* ── FLIP CARD CONTAINER ── */
        .card-flip-container {
          flex: 0 0 50%;
          perspective: 1200px;
        }

        .card-flip-inner {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .card-flip-inner.flipped {
          transform: rotateY(180deg);
        }

        .card-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card-front {
          z-index: 2;
        }

        .card-back {
          transform: rotateY(180deg);
        }

        /* ── RIGHT PANEL ── */
        .login-preview-panel {
          flex: 0 0 50%;
          position: relative;
          background: transparent;
          border-radius: 30px;
          margin: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          padding: 0;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .login-preview-panel {
            display: none;
          }

          .card-flip-container {
            flex: 1;
          }
        }

        @media (max-width: 480px) {
          .login-page {
            padding: 24px 16px;
          }
        }
      `}</style>
    </>
  )
}
