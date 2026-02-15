'use client';

import Image from 'next/image';

export default function DespreNoiContent() {
    return (
        <>
            <style jsx global>{`
                /* ═══════════════════════════════════════
                 * DESPRE NOI — HERO
                 * ═══════════════════════════════════════ */
                .dn-hero {
                    width: 100%;
                    padding: var(--space-8) var(--space-section-px-lg);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .dn-hero-inner {
                    width: 100%;
                    display: flex;
                    align-items: flex-start;
                    gap: 100px;
                }

                .dn-hero-title {
                    width: 396px;
                    flex-shrink: 0;
                    color: var(--color-primary, #213170);
                    font-family: var(--font-heading);
                    font-size: 72px;
                    font-weight: 500;
                    line-height: 80px;
                    word-wrap: break-word;
                    margin: 0;
                }

                .dn-hero-desc {
                    flex: 1;
                    color: var(--color-primary, #213170);
                    font-family: var(--font-heading);
                    font-size: 28px;
                    font-weight: 500;
                    line-height: 36px;
                    word-wrap: break-word;
                    margin: 0;
                    padding-bottom: var(--space-2);
                }

                /* ═══════════════════════════════════════
                 * DESPRE NOI — FOUNDER QUOTE
                 * ═══════════════════════════════════════ */
                .dn-quote {
                    width: 100%;
                    padding: var(--space-16) var(--space-section-px-lg);
                    background: var(--color-white, #fff);
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                }

                .dn-quote-wrapper {
                    width: 100%;
                    max-width: 1216px;
                    padding: var(--space-10) var(--space-4);
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-8);
                }

                .dn-quote-content {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: var(--space-8);
                }

                .dn-quote-text {
                    width: 596px;
                    flex-shrink: 0;
                    color: var(--color-primary, #213170);
                    font-family: var(--font-heading);
                    font-size: 36px;
                    font-weight: 600;
                    line-height: 44px;
                    word-wrap: break-word;
                    margin: 0;
                }

                .dn-quote-desc {
                    flex: 1;
                    color: var(--color-primary, #213170);
                    font-family: var(--font-heading);
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 28px;
                    word-wrap: break-word;
                    margin: 0;
                }

                .dn-quote-divider {
                    width: 100%;
                    height: 1px;
                    background: var(--color-primary, #213170);
                }

                .dn-quote-author {
                    display: flex;
                    align-items: center;
                    gap: var(--space-3);
                }

                .dn-quote-avatar {
                    width: 56px;
                    height: 56px;
                    border-radius: 300px;
                    overflow: hidden;
                    flex-shrink: 0;
                    background: linear-gradient(0deg, rgba(16, 24, 40, 0.10) 0%, rgba(16, 24, 40, 0.10) 100%),
                                var(--color-surface, #F8F9FA);
                }

                .dn-quote-avatar img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .dn-quote-name {
                    color: var(--color-primary, #213170);
                    font-family: var(--font-heading);
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    margin: 0;
                }

                .dn-quote-name-brand {
                    font-family: var(--font-brand);
                }

                .dn-quote-brand {
                    display: flex;
                    align-items: center;
                    gap: var(--space-4);
                    padding-top: var(--space-6);
                }

                .dn-quote-brand-logo {
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: var(--space-2) var(--space-3);
                }

                /* ── Tablet ≤ 1024px ── */
                @media (max-width: 1024px) {
                    .dn-hero {
                        padding: var(--space-16) var(--space-section-px-md);
                    }

                    .dn-hero-inner {
                        flex-direction: column;
                        gap: var(--space-4);
                        position: relative;
                    }

                    .dn-hero-title {
                        width: 100%;
                        font-size: 36px;
                        font-weight: 600;
                        line-height: 44px;
                    }

                    .dn-hero-desc {
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 28px;
                    }

                    .dn-hero-frame {
                        display: block;
                        position: absolute;
                        top: -32px;
                        left: -32px;
                        right: -32px;
                        bottom: -32px;
                        border: 1.5px solid #FE5D16;
                        opacity: 0.18;
                        pointer-events: none;
                    }

                    /* Quote tablet — 704px centered container */
                    .dn-quote {
                        padding: var(--space-16) var(--space-section-px-md);
                    }

                    .dn-quote-wrapper {
                        max-width: 704px;
                        padding: var(--space-10) 0;
                        gap: var(--space-8);
                    }

                    .dn-quote-content {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: var(--space-8);
                    }

                    .dn-quote-text {
                        width: 100%;
                        font-size: 36px;
                        font-weight: 600;
                        line-height: 44px;
                    }

                    .dn-quote-desc {
                        font-size: 20px;
                        font-weight: 400;
                        line-height: 28px;
                    }

                    .dn-quote-author {
                        gap: var(--space-3);
                    }

                    .dn-quote-brand {
                        padding-top: var(--space-4);
                    }
                }

                /* ── Mobile ≤ 480px ── */
                @media (max-width: 480px) {
                    .dn-hero {
                        padding: var(--space-10) var(--space-section-px-sm);
                    }

                    .dn-hero-inner {
                        flex-direction: column;
                        gap: var(--space-4);
                    }

                    .dn-hero-title {
                        width: 100%;
                        font-size: 32px;
                        font-weight: 600;
                        line-height: 40px;
                    }

                    .dn-hero-desc {
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 26px;
                    }

                    .dn-hero-frame {
                        display: block;
                        position: absolute;
                        top: -16px;
                        left: -16px;
                        right: -16px;
                        bottom: -16px;
                        border: 1px solid #FE5D16;
                        opacity: 0.18;
                        pointer-events: none;
                    }

                    /* Quote mobile — 343px centered container */
                    .dn-quote {
                        padding: var(--space-12) var(--space-section-px-sm);
                    }

                    .dn-quote-wrapper {
                        max-width: 343px;
                        padding: 0;
                        gap: var(--space-4);
                    }

                    .dn-quote-content {
                        flex-direction: column;
                        gap: var(--space-4);
                    }

                    .dn-quote-text {
                        width: 100%;
                        font-size: 28px;
                        font-weight: 600;
                        line-height: 36px;
                    }

                    .dn-quote-desc {
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 28px;
                    }

                    .dn-quote-author {
                        gap: var(--space-3);
                    }

                    .dn-quote-brand {
                        justify-content: center;
                        padding-top: var(--space-4);
                    }
                }
            `}</style>

            {/* ── Hero Section ── */}
            <section className="dn-hero">
                <div className="dn-hero-inner">
                    <h1 className="dn-hero-title">Despre noi</h1>
                    <p className="dn-hero-desc">
                        Află mai multe despre cine suntem – misiunea noastră, valorile și modul în care te putem sprijini să-ți atingi obiectivele. Descoperă povestea noastră și ce ne diferențiază.
                    </p>
                    {/* Decorative orange frame — visible on tablet/mobile */}
                    <div className="dn-hero-frame" aria-hidden="true" />
                </div>
            </section>

            {/* ── Founder Quote Section ── */}
            <section className="dn-quote">
                <div className="dn-quote-wrapper">
                    <div className="dn-quote-content">
                        <blockquote className="dn-quote-text">
                            &ldquo;Bine ai venit în spațiul unde sănătatea înseamnă încredere, grijă și claritate.&rdquo;
                        </blockquote>
                        <p className="dn-quote-desc">
                            „Am creat Medvita pentru că știu cât de greu e uneori să găsești un răspuns clar, un profesionist potrivit sau pur și simplu un ghid de încredere atunci când vine vorba de sănătate.
                            <br /><br />
                            Medvita nu este doar o platformă. Este un partener real în procesul tău – fie că ai nevoie de un tratament performant, de o opinie profesionistă sau doar vrei să verifici periodic cum stai cu sănătatea.
                            <br /><br />
                            Credem într-o abordare pozitivă și preventivă. De aceea, Medvita pune educația pacientului în centrul a tot ce face. Cu fiecare consultație, cu fiecare interacțiune, te ajutăm să înțelegi mai bine corpul tău, să gândești în perspectivă și să ai o viață cu adevărat mai bună.
                            <br /><br />
                            Bine ai venit în rețeaua medicală care are grijă de tine, înainte să fie nevoie.&rdquo;
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="dn-quote-divider" aria-hidden="true" />

                    {/* Author */}
                    <div className="dn-quote-author">
                        <div className="dn-quote-avatar">
                            <Image
                                src="/images/despre-noi/founder-avatar.jpg"
                                alt="Mircea Popa — Fondator Medvita"
                                width={56}
                                height={56}
                            />
                        </div>
                        <p className="dn-quote-name">
                            Mircea Popa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Founder{' '}
                            <span className="dn-quote-name-brand">MEDVITA</span>
                        </p>
                    </div>

                    {/* Brand Logos */}
                    <div className="dn-quote-brand">
                        <div className="dn-quote-brand-logo">
                            <Image
                                src="/images/quality/Logo.svg"
                                alt="Medvita logo"
                                width={200}
                                height={40}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
