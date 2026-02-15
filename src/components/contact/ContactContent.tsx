'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import ContactFormSection from './ContactFormSection';
import ContactFaqSection from './ContactFaqSection';

/* ═══════════════════════════════════════════════════════════
 * ContactContent — Orchestrator
 *
 * Composes the Contact page from focused sub-components:
 *   • Hero section (inline — small)
 *   • ContactFormSection (form + info cards)
 *   • ContactFaqSection (FAQ accordion)
 *   • CTA section (inline — small)
 * ═══════════════════════════════════════════════════════════ */
export default function ContactContent() {
    return (
        <div className="min-h-screen">
            {/* ── Hero / Intro Section ── */}
            <section className="contact-hero">
                <div className="contact-hero-inner">
                    <div className="contact-hero-content">
                        <h1 className="contact-hero-title">
                            „Suntem gata să te ascultăm."
                        </h1>
                        <p className="contact-hero-desc">
                            Contactează echipa Medelise pentru întrebări legate de servicii, parteneriate sau colaborări.
                            <br />
                            Credem într-o comunicare transparentă și rapidă, exact așa cum ar trebui să fie îngrijirea modernă.
                        </p>
                    </div>
                    <div className="contact-hero-divider" />
                </div>
            </section>

            {/* ── Contact Form + Info Section ── */}
            <ContactFormSection />

            {/* ── FAQ Section ── */}
            <ContactFaqSection />

            {/* ── CTA Section ── */}
            <section className="cta-section">
                <div className="cta-inner">
                    <div className="cta-text">
                        <h2 className="cta-title">
                            Ai nevoie de o vizită medicală la domiciliu?
                            <br />
                            Programează acum – Fără stres, direct online.
                        </h2>
                        <p className="cta-desc">
                            Te ajutăm să ai grijă de sănătatea ta, fără să pierzi ore întregi pe drum.
                        </p>
                    </div>
                    <div className="cta-buttons">
                        <Link href="/login">
                            <Button variant="primary" iconLeft={
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M6.66667 1.66667V4.16667M13.3333 1.66667V4.16667M2.91667 7.57500H17.0833M17.5 7.08333V14.1667C17.5 16.6667 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6667 2.5 14.1667V7.08333C2.5 4.58333 3.75 2.91667 6.66667 2.91667H13.3333C16.25 2.91667 17.5 4.58333 17.5 7.08333Z" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }>
                                Programează
                            </Button>
                        </Link>
                        <Link href="/login">
                            <Button variant="outline">
                                Intră în contul tău MEDELISE
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
                /* ═══════════════════════════════════
                   HERO SECTION
                   ═══════════════════════════════════ */
                .contact-hero {
                    width: 100%;
                    padding: 0 64px;
                    background: white;
                    font-family: var(--font-heading);
                }

                .contact-hero-inner {
                    padding: 48px 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .contact-hero-content {
                    width: 100%;
                    padding: 40px 16px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 32px;
                }

                .contact-hero-title {
                    color: var(--color-primary);
                    font-size: 36px;
                    font-weight: 600;
                    line-height: 44px;
                    margin: 0;
                    max-width: 596px;
                    flex: 1 1 auto;
                }

                .contact-hero-desc {
                    color: var(--color-primary);
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                    flex: 1;
                    max-width: 556px;
                }

                .contact-hero-divider {
                    width: 100%;
                    height: 1px;
                    background: var(--color-secondary);
                }

                /* ═══════════════════════════════════
                   CTA SECTION
                   ═══════════════════════════════════ */
                .cta-section {
                    width: 100%;
                    padding: 64px;
                    background: var(--color-white, #fff);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-family: var(--font-heading);
                }

                .cta-inner {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 40px;
                }

                .cta-buttons {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    flex-wrap: wrap;
                }

                .cta-text {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .cta-title {
                    color: var(--color-primary);
                    font-size: 36px;
                    font-weight: 600;
                    line-height: 44px;
                    margin: 0;
                }

                .cta-desc {
                    color: var(--color-primary);
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                }

                /* ─── TABLET (max 1024px) ─── */
                @media (max-width: 1024px) {
                    .contact-hero {
                        padding: 0;
                    }

                    .contact-hero-inner {
                        padding: 64px 0;
                    }

                    .contact-hero-content {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 32px;
                        max-width: 704px;
                        width: 100%;
                        padding: 40px 16px;
                    }

                    .contact-hero-title {
                        width: auto;
                        max-width: 596px;
                    }

                    .contact-hero-desc {
                        max-width: 100%;
                    }

                    .cta-section {
                        padding: 48px 32px;
                    }

                    .cta-title {
                        font-size: 28px;
                        line-height: 36px;
                    }

                    .cta-desc {
                        font-size: 16px;
                        line-height: 24px;
                    }
                }

                /* ─── MOBILE (max 480px) ─── */
                @media (max-width: 480px) {
                    .contact-hero-inner {
                        padding: 48px 0;
                    }

                    .contact-hero-content {
                        max-width: min(343px, 100%);
                        padding: 0 16px;
                        gap: 16px;
                    }

                    .contact-hero-title {
                        font-size: 18px;
                        font-weight: 600;
                        line-height: 28px;
                    }

                    .contact-hero-desc {
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 24px;
                    }

                    .cta-section {
                        padding: 32px 16px;
                    }

                    .cta-title {
                        font-size: 22px;
                        line-height: 30px;
                    }

                    .cta-desc {
                        font-size: 16px;
                        line-height: 24px;
                    }
                }
            `}</style>
        </div>
    );
}
