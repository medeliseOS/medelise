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
                    padding: var(--space-12) var(--space-section-px);
                    overflow: hidden;
                }

                .hiw-inner {
                    max-width: var(--max-width);
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 48px;
                }

                /* ── Title ── */
                .hiw-title {
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: 28px;
                    font-weight: 500;
                    line-height: 1.3;
                    margin: 0;
                }

                /* ── Content area ── */
                .hiw-content {
                    display: flex;
                    flex-direction: column;
                    gap: 48px;
                }

                /* ── Steps grid ── */
                .hiw-steps {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 48px;
                }

                /* ── Individual step ── */
                .hiw-step {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .hiw-step-label {
                    color: var(--color-primary);
                    font-family: var(--font-body);
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 28px;
                    margin: 0;
                }

                .hiw-step-icon {
                    width: 48px;
                    height: 48px;
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
                    font-size: 22px;
                    font-weight: 500;
                    line-height: 1.4;
                    margin: 0;
                }

                .hiw-step-desc {
                    color: var(--color-primary);
                    font-family: var(--font-body);
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    margin: 0;
                }

                /* ── Divider between steps grid columns ── */
                .hiw-divider {
                    display: none;
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
                    .hiw-title {
                        font-size: 38px;
                    }

                    .hiw-steps {
                        grid-template-columns: 1fr 1fr;
                        gap: 48px 40px;
                    }
                }

                /* ═══════════════════════════════════════
                 * §3 DESKTOP ≥1024px
                 * ═══════════════════════════════════════ */
                @media (min-width: 1024px) {
                    .hiw {
                        padding: 64px var(--space-section-px);
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

                    /* ── Steps: 2 columns with vertical divider ── */
                    .hiw-steps-wrapper {
                        display: flex;
                        gap: 40px;
                        flex: 1;
                    }

                    .hiw-steps {
                        grid-template-columns: 1fr;
                        gap: 80px;
                        flex: 1;
                    }

                    .hiw-divider {
                        display: block;
                        width: 1px;
                        background: var(--color-surface-border);
                        align-self: stretch;
                        flex-shrink: 0;
                    }

                    .hiw-step-title {
                        font-size: 24px;
                        line-height: 33.6px;
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
                        {/* ── Steps Grid (2 columns on desktop) ── */}
                        <div className="hiw-steps-wrapper">
                            {/* Left column: Step 1 & 3 */}
                            <div className="hiw-steps">
                                {[STEPS[0], STEPS[2]].map((s) => (
                                    <article key={s.step} className="hiw-step">
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
                            </div>

                            {/* Vertical divider */}
                            <div className="hiw-divider" aria-hidden="true" />

                            {/* Right column: Step 2 & 4 */}
                            <div className="hiw-steps">
                                {[STEPS[1], STEPS[3]].map((s) => (
                                    <article key={s.step} className="hiw-step">
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
                            </div>
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
