import { PatientOverview } from '@features/dashboard-patient';

export const metadata = {
    title: 'Portal Pacient | Medelise',
    description: 'Gestionează programările și dosarul medical.',
};

export default function PatientDashboardPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header>
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Bun venit, Pacient</h1>
                <p className="mt-2 text-neutral-500">Iată situația dosarului tău medical și programările viitoare.</p>
            </header>

            {/* Componenta FSD izolată */}
            <PatientOverview />
        </div>
    );
}
