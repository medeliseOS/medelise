'use client';

import React from 'react';

/* ── Types ── */
export interface IVWhyFeature {
    title: string;
    description: string;
}

export interface IVWhySectionProps {
    /** Section heading */
    heading?: string;
    /** Introductory paragraph text */
    intro?: string;
    /** Product image for center column */
    imageSrc: string;
    imageAlt?: string;
    /** 4 feature cards: [topLeft, bottomLeft, topRight, bottomRight] */
    features?: IVWhyFeature[];
}

/* ── Defaults ── */
const DEFAULT_HEADING = 'De ce acest IV funcționează atât de rapid și eficient?';
const DEFAULT_INTRO =
    'Hidratarea intravenoasă livrează fluide și electroliți direct în fluxul sangvin, ocolind sistemul digestiv. Astfel, organismul absoarbe 100% din substanțele administrate, în doar câteva minute. Perfuzia restabilește rapid volumul de plasmă, echilibrul electrolitic și nivelul energetic general.';
const DEFAULT_FEATURES: IVWhyFeature[] = [
    {
        title: 'Absorbție instantanee',
        description:
            'Nutrienții și electroliții ajung direct în sânge, fără pierderi digestive, oferind efecte vizibile în 10–15 minute.',
    },
    {
        title: 'Rehidratare celulară profundă',
        description:
            'Fluidele sterile IV refac volumul plasmatic și rehidratează țesuturile, accelerând regenerarea celulară.',
    },
    {
        title: 'Echilibru electrolitic complet',
        description:
            'Sodiu, potasiu, calciu și magneziu restabilesc rapid funcțiile nervoase, musculare și cardiovasculare.',
    },
    {
        title: 'Recuperare accelerată',
        description:
            'Ideal după efort intens, boală, stres termic sau consum excesiv de alcool. Reduce oboseala și redă claritatea mentală.',
    },
];

/* ── Component ── */
export default function IVWhySection({
    heading = DEFAULT_HEADING,
    intro = DEFAULT_INTRO,
    imageSrc,
    imageAlt = 'IV Drip',
    features = DEFAULT_FEATURES,
}: IVWhySectionProps) {
    /* Split features into left / right columns for desktop */
    const leftFeatures = features.slice(0, 2);
    const rightFeatures = features.slice(2, 4);

    return (
        <section className="iv-why">
            {/* Header */}
            <div className="iv-why__header">
                <h2 className="iv-why__heading">{heading}</h2>
                <p className="iv-why__intro">{intro}</p>
            </div>

            {/* Desktop: 3-column layout */}
            <div className="iv-why__grid">
                {/* Left cards */}
                <div className="iv-why__col iv-why__col--cards">
                    {leftFeatures.map((f, i) => (
                        <div key={i} className="iv-why__card">
                            <h3 className="iv-why__card-title">{f.title}</h3>
                            <p className="iv-why__card-text">{f.description}</p>
                        </div>
                    ))}
                </div>

                {/* Center image */}
                <div className="iv-why__col iv-why__col--image">
                    <div className="iv-why__image-container">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="iv-why__image"
                        />
                    </div>
                </div>

                {/* Right cards */}
                <div className="iv-why__col iv-why__col--cards">
                    {rightFeatures.map((f, i) => (
                        <div key={i} className="iv-why__card">
                            <h3 className="iv-why__card-title">{f.title}</h3>
                            <p className="iv-why__card-text">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile/Tablet: stacked cards (hidden on desktop) */}
            <div className="iv-why__stack">
                <div className="iv-why__stack-image-container">
                    <img src={imageSrc} alt={imageAlt} className="iv-why__stack-image" />
                </div>
                {features.map((f, i) => (
                    <div key={i} className="iv-why__card">
                        <h3 className="iv-why__card-title">{f.title}</h3>
                        <p className="iv-why__card-text">{f.description}</p>
                    </div>
                ))}
            </div>

            <style jsx>{`
                /* ══ Section Container ══ */
                .iv-why {
                    width: 100%;
                    max-width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 64px;
                    padding: var(--space-16) 0;
                    font-family: 'Montserrat', sans-serif;
                }

                /* ── Header ── */
                .iv-why__header {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: stretch;
                    gap: 36px;
                    width: 100%;
                }
                .iv-why__heading {
                    color: var(--color-primary);
                    font-size: 36px;
                    font-weight: 700;
                    line-height: 44px;
                    margin: 0;
                    text-align: center;
                    width: 998px;
                    max-width: 100%;
                    align-self: center;
                }
                .iv-why__intro {
                    color: var(--color-primary);
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 28px;
                    margin: 0;
                    text-align: center;
                    align-self: stretch;
                    width: 100%;
                    max-width: none;
                }

                /* ── Desktop 3-Column Grid ── */
                .iv-why__grid {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 0;
                }
                .iv-why__col {
                    flex: 1 1 0;
                    display: flex;
                    flex-direction: column;
                }
                .iv-why__col--cards {
                    gap: 32px;
                }
                .iv-why__col--image {
                    position: relative;
                    align-items: center;
                    justify-content: center;
                    padding: 4px;
                }
                .iv-why__image-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .iv-why__image {
                    width: 384px;
                    height: auto;
                    max-height: 544px;
                    border-radius: 8px;
                    object-fit: contain;
                }

                /* ── Feature Cards ── */
                .iv-why__card {
                    padding: 24px;
                    background: var(--color-white);
                    border-radius: 20px;
                    border: 1px solid var(--color-border-light);
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .iv-why__card-title {
                    color: var(--color-primary);
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 28px;
                    margin: 0;
                }
                .iv-why__card-text {
                    color: var(--color-primary);
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                }

                /* ── Mobile/Tablet: Stacked (hidden on desktop) ── */
                .iv-why__stack {
                    display: none;
                }
                .iv-why__stack-image-container {
                    width: 100%;
                    background: var(--color-white);
                    border-radius: 20px;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 32px 0;
                }
                .iv-why__stack-image {
                    border-radius: 8px;
                    object-fit: contain;
                }

                /* ═══ Tablet ═══ */
                @media (max-width: 1024px) {
                    .iv-why {
                        max-width: 704px;
                        gap: 24px;
                        align-items: center;
                    }
                    .iv-why__header {
                        gap: 32px;
                        padding-top: 16px;
                        padding-bottom: 48px;
                        align-items: center;
                    }
                    .iv-why__heading {
                        font-size: 28px;
                        line-height: 36px;
                        text-align: center;
                    }
                    .iv-why__intro {
                        font-size: 16px;
                        line-height: 24px;
                        text-align: center;
                        max-width: 646px;
                    }
                    /* Hide desktop grid, show stacked */
                    .iv-why__grid {
                        display: none;
                    }
                    .iv-why__stack {
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                        width: 100%;
                    }
                    .iv-why__stack-image-container {
                        height: 664px;
                    }
                    .iv-why__stack-image {
                        width: 340px;
                        height: 620px;
                    }
                    .iv-why__card-title {
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 24px;
                    }
                    .iv-why__card-text {
                        font-size: 16px;
                        line-height: 24px;
                    }
                }

                /* ═══ Mobile ═══ */
                @media (max-width: 767px) {
                    .iv-why {
                        max-width: 100%;
                        gap: 0;
                    }
                    .iv-why__header {
                        gap: 16px;
                        padding-top: 0;
                        padding-bottom: 0;
                    }
                    .iv-why__heading {
                        font-size: 24px;
                        line-height: 32px;
                    }
                    .iv-why__intro {
                        font-size: 16px;
                        line-height: 24px;
                    }
                    .iv-why__stack {
                        gap: 16px;
                    }
                    .iv-why__stack-image-container {
                        height: 324px;
                    }
                    .iv-why__stack-image {
                        width: 179px;
                        height: 326px;
                    }
                    .iv-why__card {
                        border-radius: 8px;
                    }
                    .iv-why__card-title {
                        font-size: 14px;
                        font-weight: 600;
                        line-height: 20px;
                    }
                    .iv-why__card-text {
                        font-size: 14px;
                        line-height: 20px;
                    }
                }
            `}</style>
        </section>
    );
}
