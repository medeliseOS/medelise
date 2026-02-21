import { RevenueChart } from '@features/dashboard-admin';

export const metadata = {
    title: 'Panou Admin | Medelise',
    description: 'Statistici financiare și management operațional.',
};

export default function AdminDashboardPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header>
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Control & Analytics</h1>
                <p className="mt-2 text-neutral-500">Oglinda financiară și operațională a întregii rețele Medelise.</p>
            </header>

            {/* Componenta FSD izolată */}
            <RevenueChart />
        </div>
    );
}
