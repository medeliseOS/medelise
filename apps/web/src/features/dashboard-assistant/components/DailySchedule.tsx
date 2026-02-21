export function DailySchedule() {
    return (
        <div className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
            <div className="border-b border-neutral-200 bg-neutral-50/50 px-6 py-4">
                <h3 className="font-semibold text-neutral-900">Programări Rețea (12.10.2026)</h3>
            </div>
            <div className="divide-y divide-neutral-100">
                <div className="flex items-center justify-between px-6 py-4 hover:bg-neutral-50 transition-colors cursor-pointer">
                    <div>
                        <p className="font-medium text-neutral-900">Ion Popescu</p>
                        <p className="text-sm text-neutral-500">Tratament IV Super Immune</p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-primary-600">09:00</p>
                        <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20">În Așteptare</span>
                    </div>
                </div>
                <div className="flex items-center justify-between px-6 py-4 hover:bg-neutral-50 transition-colors cursor-pointer">
                    <div>
                        <p className="font-medium text-neutral-900">Maria Voinescu</p>
                        <p className="text-sm text-neutral-500">Kinetoterapie Recuperare</p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-primary-600">10:30</p>
                        <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Confirmat</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
