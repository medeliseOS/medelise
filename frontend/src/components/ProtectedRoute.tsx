'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { useAppDispatch } from '@/store/hooks';
import { setAuth, clearAuth } from '@/store/slices/authSlice';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        dispatch(clearAuth());
        router.replace('/login');
        return;
      }

      dispatch(
        setAuth({
          user: {
            id: data.session.user.id,
            email: data.session.user.email || '',
          },
          token: data.session.access_token,
        })
      );

      setLoading(false);
    };

    checkSession();
  }, [dispatch, router]);

  if (loading) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        Checking authentication...
      </div>
    );
  }

  return <>{children}</>;
}