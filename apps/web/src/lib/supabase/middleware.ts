import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
                    supabaseResponse = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    // refreshes the session implicitly if needed
    const {
        data: { user },
    } = await supabase.auth.getUser()

    // --- Route Protection ---
    const isProtectedPath = request.nextUrl.pathname.startsWith('/patient') ||
        request.nextUrl.pathname.startsWith('/assistant') ||
        request.nextUrl.pathname.startsWith('/admin')

    const isAuthPath = request.nextUrl.pathname.startsWith('/login')

    if (!user && isProtectedPath) {
        // Redirecționăm userii neautentificați spre login
        const url = request.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.redirect(url)
    }

    if (user && isAuthPath) {
        // Dacă utilizatorul este deja logat și merge pe /login, îl trimitem pe dashboard pe baza rolului său.
        // Presupunem momentan un redirect generic spre dashboardul său, rolul exact va veni din `user_role` claim mai târziu.
        const url = request.nextUrl.clone()
        // Aici se va implementa logică de routing în funcție de rol
        url.pathname = '/patient' // provizoriu
        return NextResponse.redirect(url)
    }

    return supabaseResponse
}
