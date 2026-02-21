'use client';

import Image from 'next/image';
import { IMAGES } from '@shared/constants/images';
import FeatureCard from '@ui/FeatureCard';

/* ── Why Choose Us Section ─────────────────────────────────────── */

const ALL_CARDS = [
    {
        title: 'Profesionalism Garantat',
        description:
            'Medicii noștri sunt atent selecționați, cu experiență dovedită în îngrijirea medicală la domiciliu.\nCalitate fără compromis.',
        elevated: true,
    },
    {
        title: 'Servicii medicale acasă',
        description:
            'Consultații, investigații și tratamente – direct la tine acasă. Eliminăm timpul pierdut și stresul deplasărilor.',
        elevated: true,
    },
    {
        title: 'Prețuri accesibile și clare',
        description:
            'Costuri transparente, fără taxe ascunse. Ai mereu control asupra bugetului tău pentru sănătate.',
        elevated: false,
    },
    {
        title: 'Programări Flexibile',
        description:
            'Ne adaptăm programului tău. Poți alege ziua și ora convenabilă pentru vizita medicală.',
        elevated: false,
    },
    {
        title: 'Acces Digital la Date Medicale',
        description:
            'Tot istoricul medical, recomandările și programările tale – disponibile online prin platforma careOS.',
        elevated: false,
    },
    {
        title: 'Transparență Completă',
        description:
            'Știi din start ce servicii primești și cât costă. Comunicăm deschis și profesionist la fiecare pas.',
        elevated: false,
    },
] as const;

/* Split for the 3-col desktop layout */
const LEFT_CARDS = ALL_CARDS.slice(0, 3);
const RIGHT_CARDS = ALL_CARDS.slice(3);

export default function WhyChooseUsSection() {
    return (
        <>
            <style jsx>{`
                /* ═══════════════════════════════════════
                   Desktop base (>1024px)
                   ═══════════════════════════════════════ */

                .why-section {
                    width: 100%;
                    padding-top: 64px;
                    padding-bottom: 64px;
                    background: var(--color-white);
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    display: inline-flex;
                }

                .why-inner {
                    align-self: stretch;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    display: flex;
                }

                .why-content {
                    align-self: stretch;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: var(--space-6);
                    display: flex;
                }

                /* ─── Text block ──────────── */

                .why-text-block {
                    align-self: stretch;
                    padding-top: var(--space-4);
                    padding-bottom: var(--space-16);
                    background: var(--color-white);
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                }

                .why-text-inner {
                    width: 100%;
                    max-width: 1216px;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: var(--space-3);
                    display: flex;
                }

                .why-heading {
                    color: var(--color-primary);
                    font-size: var(--text-h2);
                    font-weight: 700;
                    line-height: var(--lh-heading);
                    word-wrap: break-word;
                    text-align: center;
                }

                .why-subtitle {
                    width: 100%;
                    max-width: 650px;
                    text-align: center;
                    color: var(--color-primary);
                    font-size: var(--text-h3);
                    font-weight: 600;
                    line-height: var(--lh-heading);
                    word-wrap: break-word;
                }

                /* ─── 3-col layout (desktop) ── */

                .why-cols {
                    align-self: stretch;
                    flex: 1 1 0;
                    justify-content: space-between;
                    align-items: stretch;
                    display: inline-flex;
                    gap: var(--space-8);
                }

                .why-card-col {
                    flex: 1 1 0;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: var(--space-8);
                    display: inline-flex;
                }

                /* Desktop: hide single-column layout */
                .why-cards-single {
                    display: none;
                }

                /* ─── Center image column (desktop) ─── */

                .why-image-col {
                    flex: 1 1 0;
                    align-self: stretch;
                    background: var(--color-white);
                    overflow: hidden;
                    border-radius: var(--radius-xl);
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    gap: var(--space-4);
                    display: inline-flex;
                }

                .why-image-wrapper {
                    align-self: stretch;
                    flex: 1 1 0;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    padding-top: var(--space-8);
                }

                .why-watch-image {
                    width: 341px;
                    height: 547px;
                    object-fit: contain;
                }

                .why-quote {
                    width: 354px;
                    padding: var(--space-6);
                    background: var(--color-white);
                    border-radius: var(--radius-lg);
                    text-align: center;
                    color: var(--color-primary);
                    font-size: var(--text-h4);
                    font-weight: 600;
                    line-height: var(--lh-heading);
                    word-wrap: break-word;
                    flex-shrink: 0;
                }

                /* ─── Watch banner (tablet/mobile) ─── */

                .why-watch-banner {
                    display: none;
                }

                /* ═══════════════════════════════════════
                   Tablet (641px – 1024px)
                   ═══════════════════════════════════════ */

                @media (max-width: 1024px) {
                    .why-text-block {
                        padding-bottom: var(--space-12);
                    }

                    .why-text-inner {
                        gap: var(--space-3);
                    }

                    .why-subtitle {
                        max-width: 384px;
                    }

                    /* Hide desktop 3-col layout */
                    .why-cols {
                        display: none;
                    }

                    /* Show single-column cards */
                    .why-cards-single {
                        align-self: stretch;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                        gap: var(--space-8);
                        display: flex;
                    }

                    .why-cards-list {
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: flex-start;
                        gap: var(--space-6);
                        display: flex;
                        width: 100%;
                    }

                    /* Watch banner — horizontal layout (no absolute!) */
                    .why-watch-banner {
                        align-self: stretch;
                        background: var(--color-white);
                        overflow: hidden;
                        border-radius: var(--radius-xl);
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        gap: var(--space-4);
                        padding: var(--space-4);
                    }

                    .why-watch-banner__image {
                        width: 198px;
                        height: auto;
                        object-fit: contain;
                        flex-shrink: 0;
                    }

                    .why-watch-banner__quote {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: var(--space-4);
                    }

                    .why-watch-banner__quote-text {
                        text-align: center;
                        color: var(--color-primary);
                        font-size: var(--text-h4);
                        font-weight: 600;
                        line-height: var(--lh-heading);
                        word-wrap: break-word;
                    }
                }

                /* ═══════════════════════════════════════
                   Mobile (≤640px)
                   ═══════════════════════════════════════ */

                @media (max-width: 640px) {
                    .why-text-block {
                        padding-bottom: var(--space-8);
                    }

                    .why-text-inner {
                        gap: var(--space-2);
                    }

                    .why-subtitle {
                        max-width: 100%;
                    }

                    .why-cards-list {
                        gap: var(--space-4);
                    }

                    /* Watch banner — vertical stacked on mobile */
                    .why-watch-banner {
                        flex-direction: column;
                        gap: 0;
                        padding: var(--space-4) var(--space-4) 0;
                    }

                    .why-watch-banner__image {
                        width: 180px;
                    }

                    .why-watch-banner__quote {
                        width: 100%;
                        padding: var(--space-4) var(--space-6);
                    }

                    .why-watch-banner__quote-text {
                        text-align: center;
                    }
                }
            `}</style>

            <section className="why-section section-padding">
                <div className="why-inner">
                    <div className="why-content">
                        {/* Heading */}
                        <div className="why-text-block">
                            <div className="why-text-inner">
                                <h2 className="why-heading">
                                    De ce să alegi serviciile noastre?
                                </h2>
                                <h3 className="why-subtitle">
                                    Mai simplu. Mai rapid. Mai sigur.
                                    <br />
                                    Totul pentru sănătatea ta.
                                </h3>
                            </div>
                        </div>

                        {/* ─── Desktop: 3-column layout ─── */}
                        <div className="why-cols">
                            <div className="why-card-col">
                                {LEFT_CARDS.map((card) => (
                                    <FeatureCard
                                        key={card.title}
                                        title={card.title}
                                        description={card.description}
                                        elevated={card.elevated}
                                    />
                                ))}
                            </div>

                            <div className="why-image-col">
                                <div className="why-image-wrapper">
                                    <Image
                                        className="why-watch-image"
                                        src={IMAGES.watch.iwatchNotifications}
                                        alt="Apple Watch Ultra cu aplicația MEDELISE"
                                        width={300}
                                        height={400}
                                    />
                                </div>
                                <h4 className="why-quote">
                                    {'„Smart alerts. Real care."'}
                                </h4>
                            </div>

                            <div className="why-card-col">
                                {RIGHT_CARDS.map((card) => (
                                    <FeatureCard
                                        key={card.title}
                                        title={card.title}
                                        description={card.description}
                                        elevated={card.elevated}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* ─── Tablet/Mobile: single-column layout ─── */}
                        <div className="why-cards-single">
                            <div className="why-cards-list">
                                {/* Watch banner */}
                                <div className="why-watch-banner">
                                    <Image
                                        className="why-watch-banner__image"
                                        src={IMAGES.watch.iwatchNotifications}
                                        alt="Apple Watch Ultra cu aplicația MEDELISE"
                                        width={200}
                                        height={270}
                                    />
                                    <div className="why-watch-banner__quote">
                                        <h4 className="why-watch-banner__quote-text">
                                            {'„Smart alerts. Real care."'}
                                        </h4>
                                    </div>
                                </div>

                                {/* All 6 cards stacked */}
                                {ALL_CARDS.map((card) => (
                                    <FeatureCard
                                        key={card.title}
                                        title={card.title}
                                        description={card.description}
                                        elevated={card.elevated}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
