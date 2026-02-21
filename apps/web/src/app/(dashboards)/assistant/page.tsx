import { DailySchedule } from '@features/dashboard-assistant';

export const metadata = {
    title: 'Panou Asistent | Medelise',
    description: 'Gestionează preluările și tratamentele zilnice.',
};

export default function AssistantDashboardPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header>
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Panou Asistent Medical</h1>
                <p className="mt-2 text-neutral-500">Programul de astăzi și pacienții alocați pentru tratamente.</p>
            </header>

            {/* Componenta FSD izolată */}
            <DailySchedule />
        </div>
    );
}
