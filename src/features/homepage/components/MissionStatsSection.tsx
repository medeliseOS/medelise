'use client';

import StatCard from '@ui/StatCard';

/* ── Mission Stats Section ─────────────────────────────────────── */

const STATS = [
    { label: 'Ani de experienta', value: '10' },
    { label: 'Membri', value: '120+' },
    { label: 'Programari', value: '1000+' },
    { label: 'Pacienti multumiti', value: '98%' },
] as const;

export default function MissionStatsSection() {
    return (
        <>
            <style jsx>{`
                /* ═══════════════════════════════════════
                   Desktop-first base (≥1025px)
                   ═══════════════════════════════════════ */

                /* S1 · display: flex (standard) — nu inline-flex */
                .mission-section {
                    width: 100%;
                    background: var(--color-white);
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    display: flex;
                }

                .mission-inner {
                    align-self: stretch;
                    padding-top: var(--space-section-py);
                    padding-bottom: var(--space-section-py);
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    display: flex;
                }

                .mission-content {
                    align-self: stretch;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                }

                /* align-items: stretch → copiii umplu toată lățimea */
                .mission-text-block {
                    align-self: stretch;
                    padding-top: var(--space-4);
                    padding-bottom: var(--space-16);
                    background: var(--color-white);
                    flex-direction: column;
                    justify-content: center;
                    align-items: stretch;
                    display: flex;
                }

                /* gap: --space-2 (8px) per Figma · align-items: stretch */
                .mission-text-inner {
                    align-self: stretch;
                    flex-direction: column;
                    justify-content: center;
                    align-items: stretch;
                    gap: var(--space-2);
                    display: flex;
                }

                /* align-items: stretch → H2 + P full-width */
                .mission-text-group {
                    align-self: stretch;
                    flex-direction: column;
                    justify-content: center;
                    align-items: stretch;
                    gap: var(--space-3);
                    display: flex;
                }

                .mission-heading {
                    align-self: stretch;
                    text-align: center;
                    color: var(--color-primary);
                    font-size: var(--text-h2);
                    font-weight: 700;
                    line-height: var(--lh-heading);
                    word-wrap: break-word;
                    margin: 0;
                }

                /* width: 100% + max-width: none → override global p { max-width: 70ch } */
                .mission-description {
                    align-self: stretch;
                    width: 100%;
                    max-width: none;
                    text-align: center;
                    color: var(--color-primary);
                    font-size: var(--text-body);
                    font-weight: 500;
                    line-height: var(--lh-body);
                    word-wrap: break-word;
                    margin: 0;
                }

                /* T4 governance: max-width: 60ch (Figma width ≈ 984px) */
                .mission-description--narrow {
                    align-self: stretch;
                    width: 100%;
                    max-width: 60ch;
                    margin-left: auto;
                    margin-right: auto;
                    text-align: center;
                    color: var(--color-primary);
                    font-size: var(--text-body);
                    font-weight: 500;
                    line-height: var(--lh-body);
                    word-wrap: break-word;
                    margin-top: 0;
                    margin-bottom: 0;
                }

                /* display: flex (nu inline-flex) */
                .mission-stats-row {
                    align-self: stretch;
                    justify-content: center;
                    align-items: stretch;
                    gap: var(--space-8);
                    display: flex;
                }

                /* ═══════════════════════════════════════
                   Tablet (641px – 1024px)
                   ═══════════════════════════════════════ */

                @media (max-width: 1024px) {
                    .mission-content {
                        gap: var(--space-6);
                    }

                    .mission-text-block {
                        padding-bottom: var(--space-12);
                    }

                    .mission-text-group {
                        gap: var(--space-4);
                    }

                    .mission-heading {
                        font-weight: 600;
                    }

                    .mission-description,
                    .mission-description--narrow {
                        font-weight: 400;
                    }

                    .mission-stats-row {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: var(--space-8);
                    }
                }

                /* ═══════════════════════════════════════
                   Mobile (≤640px)
                   ═══════════════════════════════════════ */

                @media (max-width: 640px) {
                    .mission-content {
                        padding-top: var(--space-12);
                        padding-bottom: var(--space-12);
                        gap: var(--space-6);
                    }

                    .mission-text-block {
                        padding-top: var(--space-4);
                        padding-bottom: var(--space-8);
                    }

                    .mission-text-inner {
                        gap: var(--space-6);
                    }

                    .mission-text-group {
                        gap: var(--space-4);
                    }

                    .mission-heading {
                        font-weight: 600;
                    }

                    .mission-description,
                    .mission-description--narrow {
                        font-weight: 400;
                        text-align: left;
                    }

                    .mission-stats-row {
                        display: flex;
                        flex-direction: column;
                        gap: var(--space-4);
                    }
                }
            `}</style>

            <section className="mission-section section-padding" aria-labelledby="mission-heading">
                <div className="mission-inner">
                    <div className="mission-content">
                        {/* Text block */}
                        <div className="mission-text-block">
                            <div className="mission-text-inner">
                                <div className="mission-text-group">
                                    <h2 id="mission-heading" className="mission-heading">
                                        Vă doriți o viață sănătoasă și
                                        echilibrată?
                                    </h2>
                                    <p className="mission-description">
                                        La noi, sănătatea și bunăstarea ta
                                        sunt pe primul loc!
                                        <br />
                                        Oferim soluții personalizate de
                                        îngrijire medicală la domiciliu,
                                        adaptate nevoilor fiecărui pacient.
                                    </p>
                                    <p className="mission-description--narrow">
                                        Indiferent dacă ai nevoie de
                                        asistență pentru un membru al
                                        familiei, recuperare după o
                                        intervenție chirurgicală sau pur și
                                        simplu de sprijin pentru gestionarea
                                        unei afecțiuni cronice, echipa
                                        noastră de profesioniști calificați
                                        este aici pentru tine.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Stats row */}
                        <div className="mission-stats-row">
                            {STATS.map((stat) => (
                                <StatCard
                                    key={stat.label}
                                    label={stat.label}
                                    value={stat.value}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
