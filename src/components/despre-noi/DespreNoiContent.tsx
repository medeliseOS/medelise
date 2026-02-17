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
                    background: var(--color-white);
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
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: var(--text-display);
                    font-weight: 500;
                    line-height: 1.1;
                    word-wrap: break-word;
                    margin: 0;
                }

                .dn-hero-desc {
                    flex: 1;
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: var(--text-h3);
                    font-weight: 500;
                    line-height: 1.3;
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
                    padding: var(--space-10) 0;
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
                    flex: 1;
                    min-width: 0;
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: var(--text-h2);
                    font-weight: 600;
                    line-height: 1.2;
                    word-wrap: break-word;
                    margin: 0;
                }

                .dn-quote-desc {
                    flex: 1;
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: var(--text-body-lg);
                    font-weight: 400;
                    line-height: 1.6;
                    word-wrap: break-word;
                    margin: 0;
                }

                .dn-quote-divider {
                    width: 100%;
                    height: 1px;
                    background: var(--color-primary, var(--color-primary));
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
                                var(--color-surface, var(--color-surface));
                }

                .dn-quote-avatar img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .dn-quote-name {
                    color: var(--color-primary, var(--color-primary));
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
                        font-size: var(--text-h2);
                        font-weight: 600;
                        line-height: 1.2;
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
                        border: 1.5px solid var(--color-accent);
                        opacity: 0.18;
                        pointer-events: none;
                    }

                    /* Quote tablet — 704px centered container */
                    .dn-quote {
                        padding: var(--space-16) var(--space-section-px-md);
                    }

                    .dn-quote-wrapper {
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
                        font-size: var(--text-h3);
                        font-weight: 600;
                        line-height: 1.3;
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
                        border: 1px solid var(--color-accent);
                        opacity: 0.18;
                        pointer-events: none;
                    }

                    /* Quote mobile — 343px centered container */
                    .dn-quote {
                        padding: var(--space-12) var(--space-section-px-sm);
                    }

                    .dn-quote-wrapper {
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
                /* ── New Signature Styles ── */
                .dn-signed-row {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: var(--space-4);
                    flex-wrap: wrap;
                }
                .dn-signed-left {
                    flex: 1;
                    min-width: 280px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .dn-signed-avatar {
                    width: 56px; 
                    height: 56px;
                    border-radius: 300px;
                    overflow: hidden;
                    position: relative;
                    background: linear-gradient(0deg, rgba(16, 24, 40, 0.10) 0%, rgba(16, 24, 40, 0.10) 100%);
                }
                .dn-signed-avatar img {
                    width: 100%; height: 100%; object-fit: cover;
                }
                .dn-signed-info {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 4px;
                }
                .dn-signed-name {
                    color: var(--color-primary);
                    font-size: 16px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 400;
                    line-height: 24px;
                    word-wrap: break-word;
                }
                .dn-signed-right {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }
                .dn-logo-container {
                    padding: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    position: relative;
                }
                
                @media (max-width: 768px) {
                    .dn-signed-row {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 24px;
                    }
                    .dn-signed-right {
                        width: 100%;
                        justify-content: flex-start;
                        flex-wrap: wrap;
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
                            „Am creat Medelise pentru că știu cât de greu e uneori să găsești un răspuns clar, un profesionist potrivit sau pur și simplu un ghid de încredere atunci când vine vorba de sănătate.
                            <br /><br />
                            Medelise nu este doar o platformă. Este un partener real în procesul tău – fie că ai nevoie de un tratament performant, de o opinie profesionistă sau doar vrei să verifici periodic cum stai cu sănătatea.
                            <br /><br />
                            Credem într-o abordare pozitivă și preventivă. De aceea, Medelise pune educația pacientului în centrul a tot ce face. Cu fiecare consultație, cu fiecare interacțiune, te ajutăm să înțelegi mai bine corpul tău, să gândești în perspectivă și să ai o viață cu adevărat mai bună.
                            <br /><br />
                            Bine ai venit în rețeaua medicală care are grijă de tine, înainte să fie nevoie.&rdquo;
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="dn-quote-divider" aria-hidden="true" />

                    {/* Signature Row */}
                    <div className="dn-signed-row">
                        <div className="dn-signed-left">
                            <div className="dn-signed-avatar">
                                <Image
                                    src="/images/owner/owner.jpeg"
                                    alt="Mircea Popa"
                                    width={56}
                                    height={56}
                                />
                            </div>
                            <div className="dn-signed-info">
                                <div className="dn-signed-name">
                                    Mircea Popa <br /> Founder Medvita
                                </div>
                            </div>
                        </div>

                        <div className="dn-signed-right">
                            {/* Logo 1: Geometric Cross */}
                            <div className="dn-logo-container" style={{ width: 136, height: 44 }}>
                                <div style={{ height: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <div style={{ width: 24, height: 11.08, transform: 'rotate(90deg)', transformOrigin: 'top left', background: 'var(--Color-Brand-Baby-Blue, #BCDFFF)' }} />
                                    <div style={{ width: 24, height: 11.08, transform: 'rotate(-90deg)', transformOrigin: 'top left', background: 'var(--Color-Brand-Ocean-Blue, #213170)' }} />
                                    {/* Small bars */}
                                    <div style={{ width: 16.15, height: 14, background: 'var(--Color-Brand-Ocean-Blue, #213170)' }} />
                                    <div style={{ width: 16.18, height: 14, background: 'var(--Color-Brand-Ocean-Blue, #213170)' }} />
                                    <div style={{ width: 11.57, height: 10.47, background: 'var(--Color-Brand-Ocean-Blue, #213170)' }} />
                                    <div style={{ width: 6.17, height: 10.23, background: 'var(--Color-Brand-Ocean-Blue, #213170)' }} />
                                    <div style={{ width: 11.19, height: 10.47, background: 'var(--Color-Brand-Ocean-Blue, #213170)' }} />
                                    <div style={{ width: 11.81, height: 10.47, background: 'var(--Color-Brand-Ocean-Blue, #213170)' }} />
                                </div>
                            </div>

                            {/* Logo 2: Medvita Text/Shape Construction */}
                            <div className="dn-logo-container" style={{ width: 193, height: 44 }}>
                                <div style={{ width: 157, height: 28, position: 'relative' }}>
                                    <div style={{ width: 147, height: 18, left: 5, top: 5, position: 'absolute', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                                        <span style={{
                                            fontFamily: 'var(--font-michroma), sans-serif',
                                            fontSize: '16px',
                                            fontWeight: '400',
                                            color: 'var(--Color-Brand-Ocean-Blue, #213170)',
                                            letterSpacing: '1px',
                                            textTransform: 'uppercase',
                                            lineHeight: 1
                                        }}>
                                            MEDELISE
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
