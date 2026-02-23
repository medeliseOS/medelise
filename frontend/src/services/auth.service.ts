/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — Auth Service Adapter (Supabase OTP Version)
 * ═══════════════════════════════════════════════════════════════
 */

import { supabase } from '../lib/supabase'
import { apiFetch } from '../lib/api'

export interface LoginCredentials {
  email: string
  password?: string // Optional for OTP login
}

export interface RegisterData {
  nume: string
  prenume: string
  email: string
  telefon?: string
}

export interface AuthResponse {
  success: boolean
  token?: string
  user?: {
    id: string
    email: string
    name?: string
  }
}

/**
 * REGISTER — Create user with email + password
 */
export async function register(payload: {
  username: string
  email: string
  password: string
  nume: string
  prenume: string
  birthDay: string
  birthMonth: string
  birthYear: string
}) {
  const { data, error } = await supabase.auth.signUp({
    email: payload.email,
    password: payload.password,
    options: {
      data: {
        username: payload.username,
        nume: payload.nume,
        prenume: payload.prenume,
        birthDay: payload.birthDay,
        birthMonth: payload.birthMonth,
        birthYear: payload.birthYear,
      },
    },
  })

  if (error) {
    return { success: false }
  }

  return {
    success: true,
  }
}

/**
 * STEP 1 — Send OTP to email
 */
export async function login(credentials: { email: string; password: string }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: credentials.email,
    password: credentials.password,
  })

  if (error || !data.session) {
    return { success: false }
  }

  return {
    success: true,
    token: data.session.access_token,
    user: {
      id: data.user.id,
      email: data.user.email!,
    },
  }
}

/**
 * STEP 2 — Verify OTP
 */
export async function verifyOtp(
  email: string,
  token: string
): Promise<AuthResponse> {
  const { data, error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: 'email',
  })

  if (error || !data.session) {
    return { success: false }
  }

  return {
    success: true,
    token: data.session.access_token,
    user: {
      id: data.session.user.id,
      email: data.session.user.email!,
    },
  }
}

/**
 * Get current session
 */
export async function verifySession(): Promise<AuthResponse> {
  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    return { success: false }
  }

  return {
    success: true,
    token: data.session.access_token,
    user: {
      id: data.session.user.id,
      email: data.session.user.email!,
    },
  }
}

export async function resendSignupOtp(email: string) {
  const { error } = await supabase.auth.resend({
    type: 'signup',
    email,
  })

  if (error) {
    console.error('Resend error:', error)
    return { success: false }
  }

  return { success: true }
}

/**
 * Logout
 */
export async function logout(): Promise<void> {
  await supabase.auth.signOut()
}

// get profile api

export async function getProfile() {
  try {
    return await apiFetch('/api/users/get-profile')
  } catch (error: any) {
    console.error('Error fetching profile:', error)
    throw new Error(error.message || 'Failed to fetch profile')
  }
}
