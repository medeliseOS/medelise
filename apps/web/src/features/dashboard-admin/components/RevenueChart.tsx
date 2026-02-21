export function RevenueChart() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-medium text-neutral-500">Venituri Luna Curentă</h3>
                <p className="mt-2 text-2xl font-bold text-neutral-900">€ 42,500</p>
                <p className="mt-1 text-sm font-medium text-green-600 flex items-center gap-1">
                    ↑ 12.5% <span className="text-neutral-400 font-normal">vs luna trecută</span>
                </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-medium text-neutral-500">Pacienți Noi</h3>
                <p className="mt-2 text-2xl font-bold text-neutral-900">124</p>
                <p className="mt-1 text-sm font-medium text-green-600 flex items-center gap-1">
                    ↑ 4.2% <span className="text-neutral-400 font-normal">vs luna trecută</span>
                </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-medium text-neutral-500">Rată Conversie (Lead to Patient)</h3>
                <p className="mt-2 text-2xl font-bold text-neutral-900">18.5%</p>
                <p className="mt-1 text-sm font-medium text-rose-600 flex items-center gap-1">
                    ↓ 1.2% <span className="text-neutral-400 font-normal">vs luna trecută</span>
                </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-medium text-neutral-500">Asistenți Activi</h3>
                <p className="mt-2 text-2xl font-bold text-neutral-900">24 / 28</p>
                <p className="mt-1 text-sm text-neutral-500">Rată de retenție 98%</p>
            </div>
        </div>
    );
}
