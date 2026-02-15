import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Despre Noi',
    description:
        'Descoperă echipa Medvita Health Solutions — misiunea, valorile și angajamentul nostru față de sănătatea ta.',
    openGraph: {
        title: 'Despre Noi · Medvita',
        description:
            'Echipa Medvita — misiunea, valorile și angajamentul nostru față de sănătatea ta.',
    },
};

export default function DespreNoi() {
    return (
        <>
            <style jsx global>{`
                /* ═══════════════════════════════════════
                 * DESPRE NOI — HERO
                 * ═══════════════════════════════════════ */
                .dn-hero {
                    width: 100%;
                    padding: var(--space-8) var(--space-section-px-lg);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .dn-hero-inner {
                    width: 100%;
                    display: flex;
                    align-items: flex-start;
                    gap: 100px;
                }

                .dn-hero-title {
                    width: 396px;
                    flex-shrink: 0;
                    color: var(--color-primary, #213170);
                    font-family: var(--font-heading);
                    font-size: 72px;
                    font-weight: 500;
                    line-height: 80px;
                    word-wrap: break-word;
                    margin: 0;
                }

                .dn-hero-desc {
                    flex: 1;
                    color: var(--color-primary, #213170);
                    font-family: var(--font-heading);
                    font-size: 28px;
                    font-weight: 500;
                    line-height: 36px;
                    word-wrap: break-word;
                    margin: 0;
                    padding-bottom: var(--space-2);
                }

                /* ── Tablet ≤ 1024px ── */
                @media (max-width: 1024px) {
                    .dn-hero {
                        padding: var(--space-8) var(--space-section-px-md);
                    }

                    .dn-hero-inner {
                        gap: 48px;
                    }

                    .dn-hero-title {
                        width: 280px;
                        font-size: 48px;
                        line-height: 56px;
                    }

                    .dn-hero-desc {
                        font-size: 22px;
                        line-height: 30px;
                    }
                }

                /* ── Mobile ≤ 480px ── */
                @media (max-width: 480px) {
                    .dn-hero {
                        padding: var(--space-6) var(--space-section-px-sm);
                    }

                    .dn-hero-inner {
                        flex-direction: column;
                        gap: var(--space-6);
                    }

                    .dn-hero-title {
                        width: 100%;
                        font-size: 36px;
                        line-height: 44px;
                    }

                    .dn-hero-desc {
                        font-size: 18px;
                        line-height: 28px;
                    }
                }
            `}</style>

            <main className="min-h-screen">
                {/* ── Hero Section ── */}
                <section className="dn-hero">
                    <div className="dn-hero-inner">
                        <h1 className="dn-hero-title">Despre noi</h1>
                        <p className="dn-hero-desc">
                            Află mai multe despre cine suntem – misiunea noastră, valorile și modul în care te putem sprijini să-ți atingi obiectivele. Descoperă povestea noastră și ce ne diferențiază.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
