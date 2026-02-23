'use client';

import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useAppDispatch } from '@/store/hooks';
import { setAuth, clearAuth } from '@/store/slices/authSlice';

export default function AuthListener() {
  const dispatch = useAppDispatch();

  useEffect(() => {

    // 🔥 Restore session on first load
    const restoreSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (data.session && data.session.user.email) {
        dispatch(
          setAuth({
            user: {
              id: data.session.user.id,
              email: data.session.user.email,
            },
            token: data.session.access_token,
          })
        );
      }
    };

    restoreSession();

    // 🔥 Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!session || !session.user.email) {
          dispatch(clearAuth());
        } else {
          dispatch(
            setAuth({
              user: {
                id: session.user.id,
                email: session.user.email,
              },
              token: session.access_token,
            })
          );
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };

  }, [dispatch]);

  return null;
}