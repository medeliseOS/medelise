'use client';

import Image from 'next/image';

const STEPS = [
    {
        step: 'STEP 1',
        icon: '/icons-medelise/md-business/md-ico-calendar-check.webp',
        title: 'Evaluare și Solicitare',
        description: 'Începe prin a selecta pachetul de hidratare din portalul Medelise. Un medic va analiza rapid solicitarea ta pentru a se asigura că terapia IV este soluția optimă pentru starea ta actuală (oboseală, mahmureală sau epuizare).',
    },
    {
        step: 'STEP 2',
        icon: '/icons-medelise/md-medical/md-ico-stethoscope.webp',
        title: 'Programare Instantă',
        description: 'Alegi ora și locația care îți convin. În orașele mari, echipa noastră medicală ajunge la ușa ta în maximum 90 de minute. Fără drumuri la clinică atunci când te simți deshidratat sau fără energie.',
    },
    {
        step: 'STEP 3',
        icon: '/icons-medelise/md-document/md-ico-clipboard.webp',
        title: 'Administrare Profesională',
        description: 'Un asistent medical calificat administrează perfuzia cu mixul de electroliți și vitamine în confortul casei tale. Procedura durează aproximativ 30-45 de minute, timp în care te poți relaxa complet.',
    },
    {
        step: 'STEP 4',
        icon: '/icons-medelise/md-system/md-ico-dashboard.webp',
        title: 'Revigorare și Monitorizare',
        description: 'Efectele se simt aproape instantaneu. După vizită, istoricul medical și recomandările post-hidratare sunt actualizate în dashboard-ul tău, oferindu-ți o evidență clară a tratamentelor efectuate.',
    },
];

const WHY_ITEMS = [
    {
        label: 'Eficiență:',
        text: 'Absorbție de 100% a nutrienților direct în fluxul sanguin, spre deosebire de hidratarea orală.',
    },
    {
        label: 'Siguranță:',
        text: 'Personal medical autorizat și monitorizare digitală a întregului proces de recuperare.',
    },
    {
        label: 'Confort:',
        text: 'Combate migrenele, durerile musculare și stresul cronic fără a părăsi patul sau biroul.',
    },
];

export default function IVWellnessRitualSection() {
    return (
        <section className="hiw" aria-labelledby="wellness-heading">
            <style jsx>{`
                /* ═══════════════════════════════════════
                 * §1 BASE — Global & Mobile (<768px)
                 * ═══════════════════════════════════════ */
                .hiw {
                    width: 100%;
                    background: var(--Color-White, white);
                    padding: 32px 0;
                    font-family: 'Montserrat', sans-serif;
                    overflow: hidden;
                }
                .hiw-inner {
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    max-width: 1288px;
                }
                .hiw-title {
                    color: var(--Indigo, #213170);
                    font-size: 24px;
                    font-weight: 500;
                    line-height: 1.5;
                    margin: 0;
                    padding: 0 16px;
                }
                .hiw-content {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                /* -- Step Components Base -- */
                .hiw-step {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    padding: 0 16px;
                }
                .hiw-step-header {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }
                .hiw-step-label {
                    color: var(--Indigo, #213170);
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 1.5;
                    margin: 0;
                    text-transform: uppercase;
                }
                .hiw-step-icon {
                    width: 32px;
                    height: 32px;
                    background: var(--Indigo, #213170);
                    border-radius: 100px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    padding: 8px;
                }
                .hiw-step-icon :global(img) {
                    filter: brightness(0) invert(1);
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                }
                .hiw-step-text-group {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .hiw-step-title {
                    color: var(--Indigo, #213170);
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 1.5;
                    margin: 0;
                }
                .hiw-step-desc {
                    color: var(--Indigo, #213170);
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 1.5;
                    margin: 0;
                }

                /* -- Why Section Backgrounds -- */
                .hiw-why { display: none; }
                .hiw-why-list {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .hiw-why-item {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
                .hiw-why-label {
                    color: var(--Indigo, #213170);
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 1.5;
                }
                .hiw-why-text {
                    color: var(--Indigo, #213170);
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 1.5;
                }

                /* -- Responsive Layout Classes -- */
                .hiw-steps-mobile {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .hiw-steps-tablet { display: none; }
                .hiw-steps-desktop { display: none; }

                /* Helpers */
                .desktop-only { display: none; }
                .tablet-only { display: none; }
                .mobile-only { display: flex; }
                .mobile-inline { display: inline; }

                /* ═══════════════════════════════════════
                 * §2 TABLET (768px - 1279px)
                 * ═══════════════════════════════════════ */
                @media (min-width: 768px) and (max-width: 1279px) {
                    .mobile-only { display: none !important; }
                    .mobile-inline { display: inline !important; }
                    .tablet-only { display: flex !important; }

                    .hiw { padding: 48px 24px; }
                    
                    .hiw-steps-tablet {
                        display: flex;
                        flex-direction: column;
                        gap: 0;
                        position: relative;
                        width: 100%;
                    }
                    
                    .tablet-row {
                        display: flex;
                        gap: 0;
                        width: 100%;
                        justify-content: flex-start;
                        align-items: flex-start;
                    }
                    
                    .tablet-row .hiw-step {
                        flex: 1;
                        padding: 32px;
                    }

                    /* Divider */
                    .hiw-separator-v {
                        position: absolute;
                        width: 1px;
                        height: 100%;
                        left: 50%;
                        top: 0;
                        background: var(--Indigo, #213170);
                        opacity: 0.2;
                    }
                    .hiw-separator-h {
                        width: 100%;
                        height: 1px;
                        background: var(--Indigo, #213170);
                        opacity: 0.2;
                    }

                    /* Tablet Specific Typography */
                    .hiw-steps-tablet .hiw-step-title { font-size: 16px; font-weight: 600; }
                    .hiw-steps-tablet .hiw-step-desc { font-size: 14px; }
                    .hiw-steps-tablet .hiw-step-icon { width: 32px; height: 32px; padding: 8px; margin-bottom: 8px; }
                }

                /* ═══════════════════════════════════════
                 * §3 DESKTOP (≥1280px)
                 * ═══════════════════════════════════════ */
                @media (min-width: 1280px) {
                    .desktop-only { display: flex !important; }
                    .mobile-only { display: none !important; }
                    .mobile-inline { display: none !important; }

                    .hiw { padding: 64px 4px; }
                    .hiw-inner { gap: 48px; max-width: 100%; }
                    .hiw-title {
                        font-size: 50px;
                        line-height: 1.5;
                        padding: 0;
                    }

                    .hiw-content {
                        flex-direction: row;
                        align-items: flex-end;
                        justify-content: space-between;
                        gap: 64px;
                    }

                    .hiw-why {
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                        width: 400px;
                        flex-shrink: 0;
                    }

                    .hiw-why-title {
                        color: var(--Indigo, #213170);
                        font-size: 28px;
                        font-weight: 600;
                        margin: 0 0 24px 0;
                    }
                    .hiw-why-item { flex-direction: row; gap: 8px; align-items: flex-start; }
                    .hiw-why-label { font-weight: 500; font-size: 16px; flex-shrink: 0; }
                    .hiw-why-text { font-size: 16px; flex: 1; }

                    .hiw-steps-desktop {
                        flex: 1;
                        display: flex;
                        gap: 0;
                        position: relative;
                    }

                    .desktop-col {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        gap: 0;
                    }

                    .desktop-col .hiw-step {
                        flex: 1;
                        padding: 32px;
                        gap: 24px;
                    }
                    .desktop-col .hiw-step-title { font-size: 24px; line-height: 1.4; }
                    .desktop-col .hiw-step-desc { font-size: 20px; }
                    .desktop-col .hiw-step-label { font-size: 16px; }

                    .hiw-separator-v-desktop {
                        position: absolute;
                        width: 1px;
                        height: 100%;
                        background: var(--Indigo, #213170);
                        opacity: 0.2;
                        left: 50%;
                        top: 0;
                        z-index: 1;
                    }
                    .hiw-separator-h-desktop {
                        position: absolute;
                        width: 100%;
                        height: 1px;
                        background: var(--Indigo, #213170);
                        opacity: 0.2;
                        top: 50%;
                        left: 0;
                        z-index: 1;
                    }
                }
            `}</style>

            <div className="hiw-inner">
                {/* ── Heading ── */}
                <h2 id="wellness-heading" className="hiw-title">
                    Cum funcționează serviciul Medelise<span className="mobile-inline">, </span><br className="desktop-only" />
                    În doar 4 pași simpli.
                </h2>

                <div className="hiw-content">
                    {/* ── Left Sidebar (Why items) ── */}
                    <aside className="hiw-why desktop-only">
                        <h3 className="hiw-why-title">De ce să alegi acest flux?</h3>
                        <div className="hiw-why-list">
                            {WHY_ITEMS.map((item) => (
                                <div key={item.label} className="hiw-why-item">
                                    <span className="hiw-why-label">{item.label}</span>
                                    <span className="hiw-why-text">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </aside>

                    {/* ── Steps Mobile View (Vertical List) ── */}
                    <div className="hiw-steps-mobile mobile-only">
                        {STEPS.map((s, i) => (
                            <article key={`m-${s.step}`} className="hiw-step">
                                <div className="hiw-step-header">
                                    <div className="hiw-step-icon">
                                        <Image src={s.icon} alt="" width={16} height={16} />
                                    </div>
                                    <p className="hiw-step-label">PASUL {i + 1}</p>
                                </div>
                                <div className="hiw-step-text-group">
                                    <h3 className="hiw-step-title">{s.title}</h3>
                                    <p className="hiw-step-desc">{s.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* ── Steps Tablet View (2x2 Grid) ── */}
                    <div className="hiw-steps-tablet tablet-only">
                        <div className="hiw-separator-v" aria-hidden="true" />

                        {/* Row 1 */}
                        <div className="tablet-row">
                            <article className="hiw-step">
                                <div className="hiw-step-header">
                                    <div className="hiw-step-icon">
                                        <Image src={STEPS[0].icon} alt="" width={16} height={16} />
                                    </div>
                                    <p className="hiw-step-label">PASUL 1</p>
                                </div>
                                <div className="hiw-step-text-group">
                                    <h3 className="hiw-step-title">{STEPS[0].title}</h3>
                                    <p className="hiw-step-desc">{STEPS[0].description}</p>
                                </div>
                            </article>
                            <article className="hiw-step">
                                <div className="hiw-step-header">
                                    <div className="hiw-step-icon">
                                        <Image src={STEPS[1].icon} alt="" width={16} height={16} />
                                    </div>
                                    <p className="hiw-step-label">PASUL 2</p>
                                </div>
                                <div className="hiw-step-text-group">
                                    <h3 className="hiw-step-title">{STEPS[1].title}</h3>
                                    <p className="hiw-step-desc">{STEPS[1].description}</p>
                                </div>
                            </article>
                        </div>

                        <div className="hiw-separator-h" aria-hidden="true" />

                        {/* Row 2 */}
                        <div className="tablet-row">
                            <article className="hiw-step">
                                <div className="hiw-step-header">
                                    <div className="hiw-step-icon">
                                        <Image src={STEPS[2].icon} alt="" width={16} height={16} />
                                    </div>
                                    <p className="hiw-step-label">PASUL 3</p>
                                </div>
                                <div className="hiw-step-text-group">
                                    <h3 className="hiw-step-title">{STEPS[2].title}</h3>
                                    <p className="hiw-step-desc">{STEPS[2].description}</p>
                                </div>
                            </article>
                            <article className="hiw-step">
                                <div className="hiw-step-header">
                                    <div className="hiw-step-icon">
                                        <Image src={STEPS[3].icon} alt="" width={16} height={16} />
                                    </div>
                                    <p className="hiw-step-label">PASUL 4</p>
                                </div>
                                <div className="hiw-step-text-group">
                                    <h3 className="hiw-step-title">{STEPS[3].title}</h3>
                                    <p className="hiw-step-desc">{STEPS[3].description}</p>
                                </div>
                            </article>
                        </div>
                    </div>

                    {/* ── Steps Desktop View (2 Columns) ── */}
                    <div className="hiw-steps-desktop desktop-only">
                        <div className="hiw-separator-v-desktop" aria-hidden="true" />
                        <div className="hiw-separator-h-desktop" aria-hidden="true" />

                        <div className="desktop-col">
                            <article className="hiw-step">
                                <div className="hiw-step-header">
                                    <div className="hiw-step-icon">
                                        <Image src={STEPS[0].icon} alt="" width={16} height={16} />
                                    </div>
                                    <p className="hiw-step-label">PASUL 1</p>
                                </div>
                                <div className="hiw-step-text-group">
                                    <h3 className="hiw-step-title">{STEPS[0].title}</h3>
                                    <p className="hiw-step-desc">{STEPS[0].description}</p>
                                </div>
                            </article>

                            <article className="hiw-step">
                                <div className="hiw-step-header">
                                    <div className="hiw-step-icon">
                                        <Image src={STEPS[2].icon} alt="" width={16} height={16} />
                                    </div>
                                    <p className="hiw-step-label">PASUL 3</p>
                                </div>
                                <div className="hiw-step-text-group">
                                    <h3 className="hiw-step-title">{STEPS[2].title}</h3>
                                    <p className="hiw-step-desc">{STEPS[2].description}</p>
                                </div>
                            </article>
                        </div>

                        <div className="desktop-col">
                            <article className="hiw-step">
                                <div className="hiw-step-header">
                                    <div className="hiw-step-icon">
                                        <Image src={STEPS[1].icon} alt="" width={16} height={16} />
                                    </div>
                                    <p className="hiw-step-label">PASUL 2</p>
                                </div>
                                <div className="hiw-step-text-group">
                                    <h3 className="hiw-step-title">{STEPS[1].title}</h3>
                                    <p className="hiw-step-desc">{STEPS[1].description}</p>
                                </div>
                            </article>

                            <article className="hiw-step">
                                <div className="hiw-step-header">
                                    <div className="hiw-step-icon">
                                        <Image src={STEPS[3].icon} alt="" width={16} height={16} />
                                    </div>
                                    <p className="hiw-step-label">PASUL 4</p>
                                </div>
                                <div className="hiw-step-text-group">
                                    <h3 className="hiw-step-title">{STEPS[3].title}</h3>
                                    <p className="hiw-step-desc">{STEPS[3].description}</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
