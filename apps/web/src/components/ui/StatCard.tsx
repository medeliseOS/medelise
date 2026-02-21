'use client';

/* ── Stat Card — Reusable stats display card ───────────────────── */

interface StatCardProps {
    /** Label shown above the number (e.g. "Ani de experienta") */
    label: string;
    /** The stat value (e.g. "10", "120+", "1000+", "98%") */
    value: string;
}

export default function StatCard({ label, value }: StatCardProps) {
    return (
        <>
            <style jsx>{`
                .stat-card {
                    flex: 1 1 0;
                    padding: var(--space-6);
                    background: var(--color-primary);
                    border-radius: var(--radius-main);
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    gap: var(--space-2);
                    display: inline-flex;
                }

                .stat-label {
                    align-self: stretch;
                    text-align: center;
                    color: var(--color-white);
                    font-size: var(--text-body-lg);
                    font-weight: 600;
                    line-height: var(--lh-body);
                }

                .stat-value {
                    color: var(--color-white);
                    font-size: var(--text-display);
                    font-weight: 600;
                    line-height: var(--lh-heading);
                }

                /* ─── Mobile ≤640px ────────── */
                @media (max-width: 640px) {
                    .stat-card {
                        flex: unset;
                        align-self: stretch;
                    }
                }
            `}</style>

            <div className="stat-card">
                <div className="stat-label">{label}</div>
                <div className="stat-value">{value}</div>
            </div>
        </>
    );
}
