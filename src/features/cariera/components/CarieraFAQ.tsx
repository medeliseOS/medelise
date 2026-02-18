'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ─── Career FAQ Data ─── */
const CAREER_FAQ_ITEMS = [
    {
        question: 'Cum pot aplica pentru un job în cadrul Medvita?',
        answer: 'Poți aplica direct din pagina de carieră, selectând poziția dorită și completând formularul de aplicare. Procesul durează sub 5 minute.',
    },
    {
        question: 'Ce documente sunt necesare pentru aplicare?',
        answer: 'Ai nevoie de CV actualizat, diplomă de studii și certificatele profesionale relevante pentru rolul ales. Le poți încărca direct în formular.',
    },
    {
        question: 'Ce urmează după trimiterea aplicației?',
        answer: 'Echipa noastră de recrutare analizează fiecare aplicație și revine cu un răspuns în maximum 5 zile lucrătoare. Dacă profilul tău se potrivește, vei fi invitat la un interviu online.',
    },
    {
        question: 'Există perioadă de training sau onboarding?',
        answer: 'Da, toți colaboratorii noi beneficiază de un program structurat de onboarding care include training pe protocoale clinice, utilizarea platformei careOS și shadowing cu echipa.',
    },
    {
        question: 'Pot lucra part-time sau în program flexibil?',
        answer: 'Absolut. Medvita oferă flexibilitate reală — îți alegi programul, numărul de vizite și intervalele care ți se potrivesc.',
    },
    {
        question: 'În ce zone pot desfășura vizite la domiciliu?',
        answer: 'Acoperim București, Ilfov și zonele limitrofe. Poți alege zonele preferate din aplicație, iar rețeaua se extinde constant.',
    },
    {
        question: 'Cum este remunerată activitatea în Medvita?',
        answer: 'Plata se face transparent, per vizită sau per procedură, cu bonusuri pentru disponibilitate și feedback pozitiv. Detaliile exacte sunt discutate la interviu.',
    },
    {
        question: 'Oferiți suport logistic?',
        answer: 'Da, asigurăm echipamente medicale, consumabile și suport de transport pentru vizitele la domiciliu. Nu trebuie să investești din resurse proprii.',
    },
    {
        question: 'Pot avansa sau schimba rolul în cadrul Medvita?',
        answer: 'Da, avem trasee de carieră clar definite. Poți avansa în roluri de coordonator, mentor sau specialist senior, în funcție de experiență și performanță.',
    },
    {
        question: 'Colaborarea este pe contract sau angajare?',
        answer: 'Oferim ambele variante: colaborare pe bază de contract (PFA/SRL) sau angajare cu contract individual de muncă, în funcție de preferințele tale.',
    },
];

export default function CarieraFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

    return (
        <section className="cfaq" aria-labelledby="cfaq-heading">
            <div className="cfaq-inner">
                {/* ── Header ── */}
                <div className="cfaq-header">
                    <p className="cfaq-surtitle">Frequently Asked Questions</p>
                    <h2 id="cfaq-heading" className="cfaq-title">
                        Pașii pentru a colabora cu Echipa Medvita
                    </h2>
                </div>

                {/* ── FAQ Items ── */}
                <div className="cfaq-list">
                    {CAREER_FAQ_ITEMS.map((item, i) => (
                        <div
                            key={i}
                            className="cfaq-item"
                            onClick={() => toggle(i)}
                            role="button"
                            tabIndex={0}
                            aria-expanded={openIndex === i}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    toggle(i);
                                }
                            }}
                        >
                            <div className="cfaq-question-row">
                                <div className={`cfaq-chevron ${openIndex === i ? 'open' : ''}`}>
                                    <Image
                                        src="/icons-medelise/md-system/md-ico-chevron-down.webp"
                                        alt=""
                                        width={18}
                                        height={18}
                                        className="cfaq-chevron-img"
                                    />
                                </div>
                                <h3 className="cfaq-question">{item.question}</h3>
                            </div>
                            <div className={`cfaq-answer ${openIndex === i ? 'open' : ''}`}>
                                <p className="cfaq-answer-text">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── CTA Banner ── */}
                <div className="cfaq-cta">
                    <div className="cfaq-cta-content">
                        <h3 className="cfaq-cta-title">Vrei să afli mai multe?</h3>
                        <p className="cfaq-cta-desc">
                            Contactează-ne și primești suport personalizat din partea echipei Medvita. Răspundem prompt și clar.
                        </p>
                    </div>
                    <Link href="/contact">
                        <button className="cfaq-cta-btn" type="button">
                            <span className="cfaq-cta-btn-icon">
                                <Image
                                    src="/icons-medelise/md-business/md-ico-mail.webp"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="cfaq-cta-mail-img"
                                />
                            </span>
                            <span className="cfaq-cta-btn-text">Contactează-ne</span>
                        </button>
                    </Link>
                </div>
            </div>

            <style jsx>{`
                /* ═══════════════════════════════════
                   CAREER FAQ — Mobile-first
                   ═══════════════════════════════════ */
                .cfaq {
                    width: 100%;
                    background: var(--color-white);
                    padding: 64px 16px;
                    overflow: hidden;
                }

                .cfaq-inner {
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 32px;
                }

                .cfaq-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    padding: 16px 0 32px;
                    text-align: center;
                }

                .cfaq-surtitle {
                    color: var(--color-surface-border);
                    font-family: var(--font-heading);
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 1.22;
                    margin: 0;
                }

                .cfaq-title {
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 1.22;
                    margin: 0;
                    max-width: 650px;
                }

                .cfaq-list {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .cfaq-item {
                    width: 100%;
                    padding: 24px;
                    border-radius: 8px;
                    border: 1px solid var(--color-surface-border);
                    cursor: pointer;
                    transition: border-color 0.2s ease;
                }

                .cfaq-item:hover {
                    border-color: var(--color-primary);
                }

                .cfaq-question-row {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .cfaq-chevron {
                    width: 24px;
                    height: 24px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                }

                .cfaq-chevron.open {
                    transform: rotate(180deg);
                }

                .cfaq-question {
                    flex: 1;
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 1.4;
                    margin: 0;
                }

                .cfaq-answer {
                    overflow: hidden;
                    max-height: 0;
                    opacity: 0;
                    transition: max-height 0.35s ease, opacity 0.25s ease, margin 0.35s ease;
                    margin-top: 0;
                }

                .cfaq-answer.open {
                    max-height: 200px;
                    opacity: 1;
                    margin-top: 16px;
                }

                .cfaq-answer-text {
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    margin: 0;
                }

                /* ── CTA Banner ── */
                .cfaq-cta {
                    width: 100%;
                    padding: 32px 24px;
                    background: var(--color-primary);
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;
                    text-align: center;
                }

                .cfaq-cta-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                }

                .cfaq-cta-title {
                    color: var(--color-white);
                    font-family: var(--font-heading);
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 1.33;
                    margin: 0;
                }

                .cfaq-cta-desc {
                    color: var(--color-white);
                    font-family: var(--font-heading);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                    margin: 0;
                    max-width: 610px;
                }

                .cfaq-cta-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 20px;
                    background: var(--color-white);
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: opacity 0.2s ease;
                }

                .cfaq-cta-btn:hover {
                    opacity: 0.9;
                }

                .cfaq-cta-btn-text {
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 24px;
                }

                .cfaq-cta-btn-icon {
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                /* ── Tablet ≥768px ── */
                @media (min-width: 768px) {
                    .cfaq {
                        padding: 64px 32px;
                    }

                    .cfaq-surtitle,
                    .cfaq-title {
                        font-size: 30px;
                        line-height: 1.22;
                    }

                    .cfaq-item {
                        padding: 32px;
                    }

                    .cfaq-question {
                        font-size: 18px;
                    }

                    .cfaq-cta {
                        padding: 32px 48px;
                        gap: 32px;
                    }

                    .cfaq-cta-title {
                        font-size: 24px;
                        line-height: 32px;
                    }
                }

                /* ── Desktop ≥1024px ── */
                @media (min-width: 1024px) {
                    .cfaq {
                        padding: 32px 64px;
                    }

                    .cfaq-surtitle,
                    .cfaq-title {
                        font-size: 36px;
                        line-height: 44px;
                    }

                    .cfaq-question {
                        font-size: 20px;
                        line-height: 28px;
                    }

                    .cfaq-cta {
                        padding: 32px 64px;
                    }
                }
            `}</style>
        </section>
    );
}
