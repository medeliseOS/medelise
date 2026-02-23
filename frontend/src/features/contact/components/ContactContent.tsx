'use client';

import CTASection from '@ui/CTASection';
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
            <CTASection />

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


                }
            `}</style>
        </div>
    );
}
