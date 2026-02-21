'use client';

import { useState, useCallback } from 'react';

// TODO: Replace static FAQ data with CMS/API fetch (e.g. /api/faq) for dynamic content management
const FAQ_ITEMS = [
    {
        q: 'Cât de repede primesc un răspuns după ce trimit formularul?',
        a: 'De obicei, echipa noastră răspunde în maxim 24 de ore. Pentru urgențe, recomandăm să ne contactați telefonic la numărul afișat pe site.',
    },
    {
        q: 'Pot solicita o ofertă de preț înainte de vizită?',
        a: 'Absolut! Completează formularul menționând serviciul dorit și vei primi o estimare detaliată prin email sau telefon în cel mai scurt timp.',
    },
    {
        q: 'Pot primi răspuns pe WhatsApp sau SMS?',
        a: 'Da, menționează în mesaj dacă preferi să fii contactat prin WhatsApp sau SMS, iar echipa noastră se va adapta.',
    },
    {
        q: 'Cum funcționează vizitele medicale la domiciliu?',
        a: 'Specialistul vine la adresa ta, la ora stabilită. Echipamentul necesar este inclus. Tu nu trebuie să te deplasezi.',
    },
    {
        q: 'Ce specialiști pot veni acasă în funcție de serviciu?',
        a: 'Oferim medici generaliști, asistenți medicali, fizioterapeuți și specialiști pentru recoltare sau perfuzii la domiciliu.',
    },
    {
        q: 'Pot solicita același specialist la fiecare vizită?',
        a: 'Da. Dacă specialistul este disponibil, îl poți selecta direct la programare. Medelise încurajează continuitatea pentru confort și siguranță.',
    },
    {
        q: 'Care este zona de acoperire și timpul mediu de sosire?',
        a: 'Acoperim București și Ilfov. Timpul mediu de sosire este 60–120 minute, în funcție de trafic, disponibilitate și tipul procedurii. Îți comunicăm în timp real statusul vizitei.',
    },
];

interface ContactFaqSectionProps {
    className?: string;
}

export default function ContactFaqSection({ className = '' }: ContactFaqSectionProps) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = useCallback((i: number) => {
        setOpenFaq((prev) => (prev === i ? null : i));
    }, []);

    return (
        <>
            <section className={`faq-section ${className}`}>
                <div className="faq-header">
                    <span className="faq-subtitle">Frequently Asked Questions</span>
                    <h2 className="faq-title">
                        Ai o întrebare?
                        <br />
                        Uite ce ne întreabă cel mai des pacienții Medelise
                    </h2>
                </div>

                <div className="faq-list">
                    {FAQ_ITEMS.map((item, i) => {
                        const isOpen = openFaq === i;
                        return (
                            <button
                                key={i}
                                className={`faq-card${isOpen ? ' faq-card--open' : ''}`}
                                onClick={() => toggleFaq(i)}
                                aria-expanded={isOpen}
                                type="button"
                            >
                                <div className="faq-card-header">
                                    <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        {/* Horizontal line (always visible) */}
                                        <line x1="4" y1="12" x2="20" y2="12" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
                                        {/* Vertical line (hidden when open) */}
                                        <line
                                            x1="12" y1="4" x2="12" y2="20"
                                            stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round"
                                            className="faq-icon-vertical"
                                        />
                                    </svg>
                                    <span className="faq-question">{item.q}</span>
                                </div>
                                <div className="faq-answer-wrapper">
                                    <p className="faq-answer">{item.a}</p>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </section>

            <style jsx>{`
                .faq-section {
                    width: 100%;
                    padding: 80px 64px;
                    background: white;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 32px;
                    font-family: var(--font-heading);
                }

                .faq-header {
                    width: 100%;
                    padding: 16px 0 64px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 32px;
                }

                .faq-subtitle {
                    color: var(--color-border-light);
                    font-size: 36px;
                    font-weight: 600;
                    line-height: 44px;
                }

                .faq-title {
                    color: var(--color-primary);
                    font-size: 36px;
                    font-weight: 600;
                    line-height: 44px;
                    text-align: center;
                    margin: 0;
                }

                .faq-list {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .faq-card {
                    width: 100%;
                    padding: 32px;
                    background: white;
                    border-radius: 8px;
                    border: 1px solid var(--color-border-light);
                    cursor: pointer;
                    text-align: left;
                    font-family: inherit;
                    transition: border-color 0.2s;
                    display: flex;
                    flex-direction: column;
                }

                .faq-card:hover {
                    border-color: var(--color-primary);
                }

                .faq-card-header {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .faq-icon {
                    flex-shrink: 0;
                    width: 24px;
                    height: 24px;
                }

                .faq-icon-vertical {
                    transition: transform 0.3s ease, opacity 0.3s ease;
                    transform-origin: center;
                }

                .faq-card--open .faq-icon-vertical {
                    transform: rotate(90deg);
                    opacity: 0;
                }

                .faq-question {
                    flex: 1;
                    color: var(--color-primary);
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 32px;
                }

                .faq-answer-wrapper {
                    display: grid;
                    grid-template-rows: 0fr;
                    transition: grid-template-rows 0.35s ease;
                    overflow: hidden;
                }

                .faq-card--open .faq-answer-wrapper {
                    grid-template-rows: 1fr;
                }

                .faq-answer {
                    min-height: 0;
                    overflow: hidden;
                    color: var(--color-primary);
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                    padding-top: 0;
                    transition: padding-top 0.35s ease;
                }

                .faq-card--open .faq-answer {
                    padding-top: 16px;
                }

                /* ─── TABLET (max 1024px) ─── */
                @media (max-width: 1024px) {
                    .faq-section {
                        padding: 32px 0;
                        display: flex;
                        align-items: center;
                    }

                    .faq-header {
                        padding: 16px 0 48px;
                        gap: 12px;
                        max-width: min(704px, 100%);
                    }

                    .faq-subtitle {
                        font-size: 36px;
                        line-height: 44px;
                    }

                    .faq-title {
                        font-size: 24px;
                        line-height: 32px;
                    }

                    .faq-list {
                        max-width: min(704px, 100%);
                    }

                    .faq-card {
                        padding: 24px 32px;
                    }

                    .faq-question {
                        font-size: 20px;
                        line-height: 28px;
                    }

                    .faq-answer {
                        font-size: 16px;
                        line-height: 24px;
                    }
                }

                /* ─── MOBILE (max 480px) ─── */
                @media (max-width: 480px) {
                    .faq-section {
                        padding: 16px 16px;
                        display: flex;
                        align-items: center;
                    }

                    .faq-header {
                        padding: 16px 0 32px;
                        gap: 8px;
                        max-width: min(343px, 100%);
                    }

                    .faq-subtitle {
                        font-size: 24px;
                        line-height: 32px;
                    }

                    .faq-title {
                        font-size: 18px;
                        line-height: 28px;
                    }

                    .faq-list {
                        max-width: min(343px, 100%);
                    }

                    .faq-card {
                        padding: 16px;
                    }

                    .faq-question {
                        font-size: 18px;
                        line-height: 28px;
                    }

                    .faq-answer {
                        font-size: 16px;
                        line-height: 24px;
                    }
                }
            `}</style>
        </>
    );
}
