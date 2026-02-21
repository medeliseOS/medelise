// Acest middleware va rula la marginea rețelei (Vercel Edge sau Node.js Proxy)
// pentru a decripta ultra-rapid ( < 2ms ) JWT-ul pacienților/medicilor 
// și a valida ce au voie să acceseze (Sistemul RBAC - Role Based Access Control)

export interface JWTPayload {
    sub: string;
    email: string;
    role: string;
    permissions: string[];
    exp: number;
}

/**
 * Validează dacă utilizatorul deține permisiunea necesară pentru a accesa un microserviciu.
 * Folosit pentru a bloca request-urile neautorizate (403 Forbidden) direct la Gateway, 
 * înainte ca ele să consume resurse de CPU din microserviciile specifice.
 */
export const checkPermission = (tokenPayload: JWTPayload, requiredPermission: string): boolean => {
    if (!tokenPayload) return false;

    // Admin-ul suprem are acces la orice
    if (tokenPayload.permissions.includes('*')) return true;

    // Verifică prezența permisiunii explicite (ex: 'billing.view')
    return tokenPayload.permissions.includes(requiredPermission);
};

export const verifyEdgeToken = async (req: Request) => {
    // Aici va veni implementarea propriu-zisă a decriptării cu Jose sau jsonwebtoken
    // pe Vercel Edge.
    // 1. Extragere cookie
    // 2. Verificare semnătură criptografică
    // 3. Returnare JWTPayload
    return null;
};
