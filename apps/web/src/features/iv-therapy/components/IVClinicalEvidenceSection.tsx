'use client';

import { useState } from 'react';
import Image from 'next/image';

/* ── Study Data ── */
const STUDIES = [
    {
        title: 'Dinamica Farmacocinetică: Biodisponibilitate de 100% vs. Absorbție Orală Limitată',
        description:
            'Administrarea IV eludează bariera intestinală și metabolismul hepatic, atingând concentrații plasmatice de micronutrienți (ex: Vitamina C) de 100 de ori mai mari față de dozele orale maxime. Această „supra-încărcare" nutrițională este singura modalitate de a satura țesuturile epuizate și de a obține efecte terapeutice sistemice imediate.',
        link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3435915/',
    },
    {
        title: 'Eficacitate în Rehidratare: Studiu Clinic Randomizat (PubMed)',
        description:
            'Într-un studiu clinic pe pacienți cu deshidratare severă, terapia IV a demonstrat o superioritate netă față de rehidratarea orală, asigurând un câștig ponderal de 3 ori mai mare în primele 12 ore (948 g vs. 293 g) și un control mult mai eficient al simptomelor de greață și epuizare.',
        link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5506238/',
    },
    {
        title: 'Optimizare Atletică: Reducerea Cortizolului și a Stresului Metabolic',
        description:
            'Cercetările pe sportivi de performanță confirmă faptul că perfuziile IV cu electroliți reduc semnificativ nivelurile de cortizol (hormonul de stres) și aldosteron post-efort. Rezultatul este o restaurare superioară a volumului plasmatic și o recuperare funcțională accelerată, imposibil de atins prin hidratarea orală convențională.',
        link: 'https://www.quenchwellness.com/post/what-are-the-benefits-of-iv-hydration',
    },
    {
        title: 'Combaterea Oboselii: Protocolul Myers în Managementul Energiei',
        description:
            'Studiile clinice pe pacienți cu oboseală cronică indică o reducere a simptomelor de oboseală cu 80% și a durerii cu 60% în urma terapiei intravenoase cu micronutrienți. Majoritatea subiecților raportează o creștere semnificativă a nivelului de energie și a clarității mentale în primele 24-48 de ore de la infuzie.',
        link: 'https://pubmed.ncbi.nlm.nih.gov/23016105/',
    },
];

/* ── Component ── */
export default function IVClinicalEvidenceSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (i: number) =>
        setOpenIndex((prev) => (prev === i ? null : i));

    return (
        <>
            <section className="cs-section">
                <div className="cs-inner">
                    {/* ── Header ── */}
                    <div className="cs-header">
                        <span className="cs-overline">Formulă bazată pe evidență clinică</span>
                        <h2 className="cs-title">Studii relevante:</h2>
                    </div>
                    <p className="cs-description">
                        Terapia intravenoasă (IV) reprezintă standardul de aur în optimizarea biologică, depășind limitele inerente ale sistemului digestiv. Prin livrarea directă în fluxul sangvin, aceasta garantează o biodisponibilitate de 100%, permițând nutrienților să atingă concentrații plasmatice de până la 100 de ori mai mari decât administrarea orală. Această metodă asigură o revitalizare celulară instantanee, susținând funcția imunitară, refacerea energetică și neutralizarea rapidă a stresului oxidativ.
                    </p>

                    {/* ── Accordion Study Items ── */}
                    <div className="cs-cards-area">
                        <div className="cs-cards-list">
                            {STUDIES.map((study, i) => (
                                <div
                                    key={i}
                                    className="cs-item"
                                    role="button"
                                    tabIndex={0}
                                    aria-expanded={openIndex === i}
                                    onClick={() => toggle(i)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            toggle(i);
                                        }
                                    }}
                                >
                                    <div className="cs-question-row">
                                        <div className={`cs-chevron ${openIndex === i ? 'open' : ''}`}>
                                            <Image
                                                src="/icons-medelise/md-system/md-ico-chevron-down.webp"
                                                alt=""
                                                width={18}
                                                height={18}
                                                className="cs-chevron-img"
                                            />
                                        </div>
                                        <h3 className="cs-question">{study.title}</h3>
                                    </div>
                                    <div className={`cs-answer ${openIndex === i ? 'open' : ''}`}>
                                        <p className="cs-answer-text">{study.description}</p>
                                        <a
                                            href={study.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cs-answer-link"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Vezi studiul →
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                /* ═══════════════════════════════════════
                 * BASE — Mobile-first
                 * ═══════════════════════════════════════ */
                .cs-section {
                    width: 100%;
                    padding: 0;
                    background: white;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: stretch;
                }

                .cs-inner {
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 24px;
                }

                /* ── Header ── */
                .cs-header {
                    width: 100%;
                    max-width: 1216px;
                    align-self: center;
                    padding: 16px 0 16px;
                    background: white;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 16px;
                }

                .cs-overline {
                    align-self: stretch;
                    text-align: center;
                    color: #97A1AF;
                    font-size: 20px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 600;
                    line-height: 28px;
                    word-wrap: break-word;
                }

                .cs-title {
                    align-self: stretch;
                    text-align: center;
                    color: #213170;
                    font-size: 20px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 600;
                    line-height: 28px;
                    word-wrap: break-word;
                    margin: 0;
                }

                .cs-description {
                    width: 100%;
                    max-width: none;
                    align-self: stretch;
                    text-align: center;
                    color: #213170;
                    font-size: 16px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 500;
                    line-height: 24px;
                    word-wrap: break-word;
                    margin: 0 0 48px;
                    padding: 0 16px;
                }

                /* ── Cards Area ── */
                .cs-cards-area {
                    align-self: stretch;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 40px;
                }

                .cs-cards-list {
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: 16px;
                }

                /* ── Accordion Item ── */
                .cs-item {
                    align-self: stretch;
                    padding: 16px;
                    background: white;
                    border-radius: 8px;
                    border: 1px solid #CED2DA;
                    cursor: pointer;
                    transition: border-color 0.2s ease;
                    display: flex;
                    flex-direction: column;
                }

                .cs-item:hover {
                    border-color: #213170;
                }

                .cs-question-row {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .cs-chevron {
                    width: 24px;
                    height: 24px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                }

                .cs-chevron.open {
                    transform: rotate(180deg);
                }

                .cs-chevron :global(.cs-chevron-img) {
                    filter: none;
                }

                .cs-question {
                    flex: 1;
                    color: #213170;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                    margin: 0;
                    word-wrap: break-word;
                }

                /* ── Answer (collapsible) ── */
                .cs-answer {
                    width: 100%;
                    overflow: hidden;
                    max-height: 0;
                    opacity: 0;
                    transition: max-height 0.35s ease, opacity 0.25s ease, margin 0.35s ease;
                    margin-top: 0;
                }

                .cs-answer.open {
                    max-height: 400px;
                    opacity: 1;
                    margin-top: 16px;
                }

                .cs-answer-text {
                    width: 100%;
                    max-width: none;
                    color: #213170;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    margin: 0;
                    word-wrap: break-word;
                }

                .cs-answer-link {
                    display: inline-block;
                    margin-top: 12px;
                    color: #213170;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 24px;
                    text-decoration: underline;
                    text-underline-offset: 3px;
                    transition: opacity 0.2s;
                }

                .cs-answer-link:hover {
                    opacity: 0.7;
                }

                /* ═══════════════════════════════════════
                 * TABLET ≥768px
                 * ═══════════════════════════════════════ */
                @media (min-width: 768px) {
                    .cs-section {
                        padding: 0;
                    }

                    .cs-inner {
                        max-width: 100%;
                    }

                    .cs-overline {
                        color: #97A1AF;
                        font-size: 24px;
                        line-height: 32px;
                    }

                    .cs-title {
                        font-size: 28px;
                        line-height: 36px;
                    }

                    .cs-description {
                        font-size: 16px;
                        line-height: 24px;
                        padding: 0 32px;
                    }

                    .cs-item {
                        padding: 24px;
                    }

                    .cs-question {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    .cs-answer-text {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    .cs-answer-link {
                        font-size: 14px;
                    }
                }

                /* ═══════════════════════════════════════
                 * DESKTOP ≥1024px
                 * ═══════════════════════════════════════ */
                @media (min-width: 1024px) {
                    .cs-section {
                        padding: 64px 4px;
                    }

                    .cs-inner {
                        max-width: 100%;
                        gap: 32px;
                    }

                    .cs-header {
                        max-width: 1216px;
                        padding: 16px 32px;
                    }

                    .cs-overline {
                        color: #CED2DA;
                        font-size: 28px;
                        line-height: 36px;
                    }

                    .cs-title {
                        font-size: 36px;
                        line-height: 44px;
                    }

                    .cs-description {
                        font-size: 18px;
                        line-height: 28px;
                        padding: 0 64px;
                    }

                    .cs-cards-area {
                        padding: 0;
                    }

                    .cs-item {
                        padding: 24px;
                    }

                    .cs-question {
                        font-size: 18px;
                        font-weight: 500;
                        line-height: 28px;
                    }

                    .cs-answer-text {
                        font-size: 18px;
                        line-height: 28px;
                    }

                    .cs-answer-link {
                        font-size: 16px;
                    }
                }
            `}</style>
        </>
    );
}
