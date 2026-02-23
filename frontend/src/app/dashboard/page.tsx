'use client'

import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import toast from 'react-hot-toast'
import ProtectedRoute from '@/components/ProtectedRoute'
import { getProfile } from '@/services/auth.service'
import { useQuery } from '@tanstack/react-query'

export const dynamic = 'force-dynamic'

export default function DashboardPage() {
  const router = useRouter()

  /* ===========================
     FETCH PROFILE (React Query)
  =========================== */
  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })

  const profile = data?.data ?? data

  /* ===========================
     LOGOUT
  =========================== */
  const handleLogout = async () => {
    await supabase.auth.signOut()
    toast.success('Logged out successfully')
    router.replace('/login')
  }

  /* ===========================
     INITIALS
  =========================== */
  const getInitials = () => {
    if (!profile) return ''
    const first = profile.first_name?.charAt(0).toUpperCase() || ''
    const last = profile.last_name?.charAt(0).toUpperCase() || ''
    return `${first}${last}`
  }

  /* ===========================
     STATES
  =========================== */
  if (isLoading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-gray-500">Loading profile...</div>
        </div>
      </ProtectedRoute>
    )
  }

  if (isError) {
    toast.error((error as any)?.message || 'Failed to load profile')
    return null
  }

  /* ===========================
     UI
  =========================== */
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl">

            {/* HEADER */}
            <div className="flex items-center justify-between p-8 border-b border-gray-200">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-full bg-gray-900 text-white flex items-center justify-center text-2xl font-semibold">
                  {getInitials()}
                </div>

                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">
                    {profile?.first_name} {profile?.last_name}
                  </h1>
                  <p className="text-gray-500 text-sm">
                    {profile?.email}
                  </p>
                </div>
              </div>

              <div className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                Demo Account
              </div>
            </div>

            {/* BODY */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="space-y-1">
                <p className="text-sm text-gray-500">Username</p>
                <p className="text-base font-medium text-gray-900">
                  {profile?.username}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-base font-medium text-gray-900">
                  {profile?.email}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-gray-500">First Name</p>
                <p className="text-base font-medium text-gray-900">
                  {profile?.first_name}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-gray-500">Last Name</p>
                <p className="text-base font-medium text-gray-900">
                  {profile?.last_name}
                </p>
              </div>

            </div>

            {/* FOOTER */}
            <div className="px-8 pb-8">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-gray-700">
                <h3 className="font-medium mb-2 text-gray-900">
                  🚀 Dashboard Coming Soon
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  This is a demo account preview. The full dashboard experience,
                  analytics, and account management features are currently under development.
                  More pages and advanced functionality will be available soon.
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleLogout}
                  className="px-5 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg hover:opacity-90 transition w-full md:w-auto cursor-pointer"
                >
                  Logout
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}