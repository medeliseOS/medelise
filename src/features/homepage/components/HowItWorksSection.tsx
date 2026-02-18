'use client';

import Image from 'next/image';

/* ── Step Data ──────────────────────────────────────────────── */
const STEPS = [
    {
        step: 'STEP 1',
        icon: '/icons-medelise/md-business/md-ico-calendar-check.webp',
        title: 'Creezi Contul și Alegi Serviciul',
        description:
            'Începe prin a-ți crea un cont gratuit în Portalul Pacientului Medvita. Odată autentificat, ai acces la întreaga gamă de servicii: de la analize de laborator și kinetoterapie, până la medicină de prevenție sau consulturi de specialitate. Totul este digital, rapid și sigur.',
    },
    {
        step: 'STEP 2',
        icon: '/icons-medelise/md-medical/md-ico-stethoscope.webp',
        title: 'Programezi Vizita la Domiciliu',
        description:
            'Selectezi tipul de consultație sau investigație necesară, alegi data și ora care îți convin, iar echipa noastră confirmă programarea în mai puțin de 60 de secunde. În orașele mari, echipa medicală poate ajunge la ușa ta în maximum 90 de minute pentru solicitările urgente.',
    },
    {
        step: 'STEP 3',
        icon: '/icons-medelise/md-document/md-ico-clipboard.webp',
        title: 'Realizarea Vizitei Medicale',
        description:
            'Personalul medical calificat (medici, asistenți sau kinetoterapeuți) se deplasează la adresa ta cu toate echipamentele necesare. Beneficiezi de îngrijire profesională în confortul casei tale, eliminând stresul deplasării sau al timpului pierdut în sălile de așteptare.',
    },
    {
        step: 'STEP 4',
        icon: '/icons-medelise/md-system/md-ico-dashboard.webp',
        title: 'Dashboard Complet',
        description:
            'Istoric și Facturare Imediat după vizită, experiența ta se mută în plan digital. În dashboard-ul tău personal vei regăsi factura aferentă serviciului, rezultatele analizelor și recomandările medicale. Astfel, îți construiești un istoric medical digital complet, accesibil 24/7, pentru o monitorizare simplă și eficientă a sănătății tale.',
    },
];

const WHY_ITEMS = [
    {
        label: 'Transparență:',
        text: 'Factura și costurile sunt mereu vizibile în cont.',
    },
    {
        label: 'Accesibilitate:',
        text: 'Istoricul tău medical este mereu la un click distanță.',
    },
    {
        label: 'Eficiență:',
        text: 'Fără hârtii pierdute; totul este centralizat în portalul tău.',
    },
];

/* ── Component ──────────────────────────────────────────────── */
export default function HowItWorksSection() {
    return (
        <>
            <style jsx>{`
                /* ═══════════════════════════════════════
                 * §1 BASE — Mobile-first (<768px)
                 * ═══════════════════════════════════════ */
                .hiw {
                    width: 100%;
                    background: var(--color-white);
                    padding: 32px var(--space-section-px);
                    overflow: hidden;
                }

                .hiw-inner {
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                /* ── Title ── */
                .hiw-title {
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: 26px;
                    font-weight: 500;
                    line-height: 1.3;
                    margin: 0;
                }

                /* ── Content area ── */
                .hiw-content {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                /* ── Steps: 2×2 grid with cross dividers ── */
                .hiw-steps-wrapper {
                    display: grid;
                    grid-template-columns: 1fr auto 1fr;
                    grid-template-rows: auto auto auto;
                    gap: 0;
                }

                .hiw-step--1 { grid-column: 1; grid-row: 1; padding: 0 12px 16px 0; }
                .hiw-step--2 { grid-column: 3; grid-row: 1; padding: 0 0 16px 12px; }
                .hiw-step--3 { grid-column: 1; grid-row: 3; padding: 16px 12px 0 0; }
                .hiw-step--4 { grid-column: 3; grid-row: 3; padding: 16px 0 0 12px; }

                /* Vertical divider */
                .hiw-divider-v {
                    display: block;
                    grid-column: 2;
                    grid-row: 1 / 4;
                    width: 1px;
                    background: var(--color-surface-border);
                }

                /* Horizontal divider */
                .hiw-divider-h {
                    display: block;
                    grid-column: 1 / 4;
                    grid-row: 2;
                    height: 1px;
                    background: var(--color-surface-border);
                }

                /* ── Individual step ── */
                .hiw-step {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .hiw-step-label {
                    color: var(--color-primary);
                    font-family: var(--font-body);
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 18px;
                    margin: 0;
                }

                .hiw-step-icon {
                    width: 32px;
                    height: 32px;
                    background: var(--color-primary);
                    border-radius: 100px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .hiw-step-icon :global(.hiw-step-icon-img) {
                    filter: brightness(0) invert(1);
                }

                .hiw-step-title {
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 19.6px;
                    margin: 0;
                }

                .hiw-step-desc {
                    color: var(--color-primary);
                    font-family: var(--font-body);
                    font-size: 10px;
                    font-weight: 300;
                    line-height: 15px;
                    margin: 4px 0 0;
                }

                /* ── Why Section ── */
                .hiw-why {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    padding: 24px 0;
                }

                .hiw-why-title {
                    color: var(--color-primary);
                    font-family: var(--font-body);
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 36px;
                    margin: 0;
                }

                .hiw-why-list {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .hiw-why-item {
                    display: flex;
                    gap: 16px;
                    align-items: flex-start;
                }

                .hiw-why-label {
                    color: var(--color-primary);
                    font-family: var(--font-body);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                    flex-shrink: 0;
                    min-width: 120px;
                }

                .hiw-why-text {
                    color: var(--color-primary);
                    font-family: var(--font-body);
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                }

                /* ═══════════════════════════════════════
                 * §2 TABLET ≥768px
                 * ═══════════════════════════════════════ */
                @media (min-width: 768px) {
                    .hiw {
                        padding: 48px var(--space-section-px);
                    }

                    .hiw-inner {
                        gap: 40px;
                    }

                    .hiw-title {
                        font-size: 38px;
                    }

                    .hiw-step--1 { padding: 0 24px 24px 0; }
                    .hiw-step--2 { padding: 0 0 24px 24px; }
                    .hiw-step--3 { padding: 24px 24px 0 0; }
                    .hiw-step--4 { padding: 24px 0 0 24px; }

                    .hiw-step-label {
                        font-size: 14px;
                        line-height: 20px;
                    }

                    .hiw-step-icon {
                        width: 40px;
                        height: 40px;
                    }

                    .hiw-step-title {
                        font-size: 18px;
                        line-height: 25px;
                    }

                    .hiw-step-desc {
                        font-size: 13px;
                        line-height: 20px;
                    }
                }

                /* ═══════════════════════════════════════
                 * §3 DESKTOP ≥1024px
                 * ═══════════════════════════════════════ */
                @media (min-width: 1024px) {
                    .hiw {
                        padding: 64px var(--space-section-px);
                    }

                    .hiw-inner {
                        gap: 48px;
                    }

                    .hiw-title {
                        font-size: 50px;
                        line-height: 65px;
                    }

                    .hiw-content {
                        flex-direction: row-reverse;
                        justify-content: space-between;
                        align-items: flex-start;
                        gap: 40px;
                        padding: 24px 0;
                    }

                    .hiw-steps-wrapper {
                        flex: 1;
                    }

                    .hiw-step--1 { padding: 0 40px 40px 0; }
                    .hiw-step--2 { padding: 0 0 40px 40px; }
                    .hiw-step--3 { padding: 40px 40px 0 0; }
                    .hiw-step--4 { padding: 40px 0 0 40px; }

                    .hiw-step {
                        gap: 24px;
                    }

                    .hiw-step-label {
                        font-size: 20px;
                        line-height: 28px;
                    }

                    .hiw-step-icon {
                        width: 48px;
                        height: 48px;
                    }

                    .hiw-step-title {
                        font-size: 24px;
                        line-height: 33.6px;
                    }

                    .hiw-step-desc {
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 24px;
                    }

                    /* ── Why: left sidebar ── */
                    .hiw-why {
                        width: 400px;
                        flex-shrink: 0;
                        align-self: flex-end;
                    }

                    .hiw-why-title {
                        font-size: 28px;
                    }
                }
            `}</style>

            <section className="hiw" aria-labelledby="hiw-heading">
                <div className="hiw-inner">
                    {/* ── Heading ── */}
                    <h2 id="hiw-heading" className="hiw-title">
                        Cum funcționează serviciul Medelise<br />
                        În doar 3 pași simpli.
                    </h2>

                    {/* ── Content: Steps + Why ── */}
                    <div className="hiw-content">
                        {/* ── Steps Grid (2×2 with cross dividers on desktop) ── */}
                        <div className="hiw-steps-wrapper">
                            {STEPS.map((s, i) => (
                                <article key={s.step} className={`hiw-step hiw-step--${i + 1}`}>
                                    <p className="hiw-step-label">{s.step}</p>
                                    <div className="hiw-step-icon">
                                        <Image
                                            src={s.icon}
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="hiw-step-icon-img"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="hiw-step-title">{s.title}</h3>
                                        <p className="hiw-step-desc">{s.description}</p>
                                    </div>
                                </article>
                            ))}
                            {/* Vertical divider */}
                            <div className="hiw-divider-v" aria-hidden="true" />
                            {/* Horizontal divider */}
                            <div className="hiw-divider-h" aria-hidden="true" />
                        </div>

                        {/* ── Why Section (left sidebar on desktop) ── */}
                        <aside className="hiw-why">
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
                    </div>
                </div>
            </section>
        </>
    );
}
