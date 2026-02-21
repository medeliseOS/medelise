import { ReactNode } from 'react';
import DashboardSidebar from '@/components/layout/DashboardSidebar';

// Acesta este layout-ul principal protejat pentru toate cele 3 tipuri de dashboard-uri.
// În viitor, aici vom injecta validarea token-ului JWT din Middleware.
export default function DashboardsLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen bg-neutral-50 font-sans text-neutral-900">
            {/* Sidebar comun, conținutul dinamic (link-uri) va fi gestionat pe baza rolului */}
            <DashboardSidebar />

            {/* Zona principală de conținut */}
            <main className="flex-1 overflow-y-auto bg-neutral-50/50 p-6 lg:p-10">
                <div className="mx-auto max-w-7xl">
                    {children}
                </div>
            </main>
        </div>
    );
}
