import { supabase } from "../lib/supabase";

export async function apiFetch(
  path: string,
  options: RequestInit = {},
  skipAuth = false
) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  let token;

  if (!skipAuth) {
    const { data } = await supabase.auth.getSession();
    token = data.session?.access_token;
  }

  const res = await fetch(`${baseUrl}${path}`, {
    ...options,
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error("API Error");
  }

  return res.json();
}