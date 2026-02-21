export function PatientOverview() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Acestea vor fi extrase ca atomi în @ui/DashboardCard mai târziu */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-medium text-neutral-500">Programare Următoare</h3>
                <p className="mt-2 text-2xl font-bold text-neutral-900">Azi, 14:30</p>
                <p className="mt-1 text-sm text-primary-600">IV Drip - Imunitate (+)</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-medium text-neutral-500">Rezultate Analize</h3>
                <p className="mt-2 text-2xl font-bold text-neutral-900">2 Noi</p>
                <p className="mt-1 text-sm text-neutral-500">Vizualizează în dosar</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-medium text-neutral-500">Abonament Activ</h3>
                <p className="mt-2 text-2xl font-bold text-neutral-900">Prevention Plan</p>
                <p className="mt-1 text-sm text-green-600">Activ până pe 12.12.2026</p>
            </div>
        </div>
    );
}
