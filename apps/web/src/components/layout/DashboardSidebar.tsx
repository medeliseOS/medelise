import Link from 'next/link';

export default function DashboardSidebar() {
    return (
        <aside className="w-64 flex-col border-r border-neutral-200 bg-white hidden lg:flex">
            <div className="flex h-16 shrink-0 items-center px-6">
                <span className="text-xl font-bold tracking-tight text-primary-900">Medelise</span>
                <span className="ml-2 rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-semibold text-primary-700">OS</span>
            </div>

            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Platformă</div>

                {/* Aceste link-uri vor fi filtrate dinamic pe baza Rolului (RBAC) */}
                <Link
                    href="/patient"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-primary-600 transition-colors"
                >
                    Portal Pacient
                </Link>
                <Link
                    href="/assistant"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-primary-600 transition-colors"
                >
                    Panou Asistent
                </Link>
                <Link
                    href="/admin"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-primary-600 transition-colors"
                >
                    Control Admin
                </Link>
            </nav>

            <div className="border-t border-neutral-200 p-4">
                <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 transition-colors">
                    Deconectare
                </button>
            </div>
        </aside>
    );
}
