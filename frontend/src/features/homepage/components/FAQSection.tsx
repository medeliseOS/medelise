'use client';

import { useState } from 'react';
import Image from 'next/image';

/* ── FAQ Data ──────────────────────────────────────────────── */
const FAQ_ITEMS = [
    {
        question: 'Cum pot programa o vizită medicală la domiciliu?',
        answer:
            'Poți programa direct online din contul tău Medvita, în mai puțin de 60 de secunde.',
    },
    {
        question: 'Ce tipuri de servicii medicale sunt disponibile acasă?',
        answer:
            'Oferim consultații generale, recoltări analize, tratamente, perfuzii și monitorizări la domiciliu.',
    },
    {
        question: 'Cât durează până vine echipa medicală la mine?',
        answer:
            'Timpul mediu de intervenție în București este sub 90 de minute, în funcție de urgență și oră.',
    },
    {
        question: 'Este nevoie de trimitere medicală sau bilet de internare?',
        answer:
            'Nu. Medvita funcționează pe bază de abonament sau servicii la cerere, fără birocrație.',
    },
    {
        question: 'Pot folosi Medelise pentru un părinte în vârstă sau copil?',
        answer:
            'Da, poți programa vizita în numele unei alte persoane și să gestionezi totul dintr-un singur cont.',
    },
    {
        question: 'Care este diferența dintre un abonament și o vizită unică?',
        answer:
            'Abonamentele includ acces rapid, reduceri și intervenții gratuite. Vizitele unice sunt disponibile fără abonament, la tarif standard.',
    },
];

/* ── Component ──────────────────────────────────────────────── */
export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (i: number) =>
        setOpenIndex((prev) => (prev === i ? null : i));

    return (
        <>
            <style jsx>{`
                /* ═══════════════════════════════════════
                 * §1 BASE — Mobile-first (<768px)
                 * ═══════════════════════════════════════ */
                .faq {
                    width: 100%;
                    background: var(--color-white);
                    padding: 64px 16px;
                    overflow: hidden;
                }

                .faq-inner {
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 32px;
                }

                /* ── Header ── */
                .faq-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    padding: 16px 0 32px;
                    text-align: center;
                }

                .faq-surtitle {
                    color: var(--color-surface-border);
                    font-family: var(--font-heading);
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 1.22;
                    margin: 0;
                }

                .faq-title {
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 1.22;
                    margin: 0;
                    max-width: 650px;
                }

                /* ── Items list ── */
                .faq-list {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                /* ── Single FAQ item ── */
                .faq-item {
                    width: 100%;
                    padding: 24px;
                    border-radius: 8px;
                    border: 1px solid var(--color-surface-border);
                    cursor: pointer;
                    transition: border-color 0.2s ease;
                }

                .faq-item:hover {
                    border-color: var(--color-primary);
                }

                .faq-question-row {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .faq-chevron {
                    width: 24px;
                    height: 24px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                }

                .faq-chevron.open {
                    transform: rotate(180deg);
                }

                .faq-question {
                    flex: 1;
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 1.4;
                    margin: 0;
                }

                .faq-answer {
                    overflow: hidden;
                    max-height: 0;
                    opacity: 0;
                    transition: max-height 0.35s ease, opacity 0.25s ease, margin 0.35s ease;
                    margin-top: 0;
                }

                .faq-answer.open {
                    max-height: 200px;
                    opacity: 1;
                    margin-top: 16px;
                }

                .faq-answer-text {
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    margin: 0;
                }

                /* ── CTA Banner ── */
                .faq-cta {
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

                .faq-cta-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                }

                .faq-cta-title {
                    color: var(--color-white);
                    font-family: var(--font-heading);
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 1.33;
                    margin: 0;
                }

                .faq-cta-desc {
                    color: var(--color-white);
                    font-family: var(--font-heading);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                    margin: 0;
                    max-width: 610px;
                }

                .faq-cta-btn {
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

                .faq-cta-btn:hover {
                    opacity: 0.9;
                }

                .faq-cta-btn-text {
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 24px;
                }

                .faq-cta-btn-icon {
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                /* ═══════════════════════════════════════
                 * §2 TABLET ≥768px
                 * ═══════════════════════════════════════ */
                @media (min-width: 768px) {
                    .faq {
                        padding: 32px var(--space-section-px);
                    }

                    .faq-surtitle,
                    .faq-title {
                        font-size: 30px;
                        line-height: 1.22;
                    }

                    .faq-item {
                        padding: 32px;
                    }

                    .faq-question {
                        font-size: 18px;
                    }

                    .faq-cta {
                        padding: 32px 48px;
                        gap: 32px;
                    }

                    .faq-cta-title {
                        font-size: 24px;
                        line-height: 32px;
                    }
                }

                /* ═══════════════════════════════════════
                 * §3 DESKTOP ≥1024px
                 * ═══════════════════════════════════════ */
                @media (min-width: 1024px) {
                    .faq {
                        padding: 32px 64px;
                    }

                    .faq-surtitle,
                    .faq-title {
                        font-size: 36px;
                        line-height: 44px;
                    }

                    .faq-question {
                        font-size: 20px;
                        line-height: 28px;
                    }

                    .faq-cta {
                        padding: 32px 64px;
                    }
                }
            `}</style>

            <section className="faq" aria-labelledby="faq-heading">
                <div className="faq-inner">
                    {/* ── Header ── */}
                    <div className="faq-header">
                        <p className="faq-surtitle">Frequently Asked Questions</p>
                        <h2 id="faq-heading" className="faq-title">
                            Tot ce trebuie să știi despre serviciile Medelise
                        </h2>
                    </div>

                    {/* ── FAQ Items ── */}
                    <div className="faq-list">
                        {FAQ_ITEMS.map((item, i) => (
                            <div
                                key={i}
                                className="faq-item"
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
                                <div className="faq-question-row">
                                    <div
                                        className={`faq-chevron ${openIndex === i ? 'open' : ''}`}
                                    >
                                        <Image
                                            src="/icons-medelise/md-system/md-ico-chevron-down.webp"
                                            alt=""
                                            width={18}
                                            height={18}
                                            className="faq-chevron-img"
                                        />
                                    </div>
                                    <h3 className="faq-question">{item.question}</h3>
                                </div>
                                <div
                                    className={`faq-answer ${openIndex === i ? 'open' : ''}`}
                                >
                                    <p className="faq-answer-text">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── CTA Banner ── */}
                    <div className="faq-cta">
                        <div className="faq-cta-content">
                            <h3 className="faq-cta-title">Vrei să afli mai multe?</h3>
                            <p className="faq-cta-desc">
                                Contactează-ne și primești suport personalizat din partea
                                echipei Medvita. Răspundem prompt și clar.
                            </p>
                        </div>
                        <button className="faq-cta-btn" type="button">
                            <span className="faq-cta-btn-icon">
                                <Image
                                    src="/icons-medelise/md-business/md-ico-mail.webp"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="faq-cta-mail-img"
                                />
                            </span>
                            <span className="faq-cta-btn-text">Contactează-ne</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
