'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from '@ui/Button';
import { IMAGES } from '@shared/constants/images';
import { ICONS } from '@shared/constants/icons';

/* ── Hero Section ──────────────────────────────────────────────── */
export default function HeroSection() {
    return (
        <>
            <style jsx>{`
                /* ═══════════════════════════════════════
                 * BASE (Mobile-first — shared by all)
                 * ═══════════════════════════════════════ */
                .hero-section {
                    width: 100%;
                    min-height: 100svh;
                    position: relative;
                    background: var(--color-white);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .hero-background {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }

                .hero-blur-overlay {
                    position: absolute;
                    top: 64px;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 1;
                    backdrop-filter: blur(14px);
                    -webkit-backdrop-filter: blur(14px);
                    background: linear-gradient(
                        to bottom,
                        rgba(255, 255, 255, 0.65) 0%,
                        rgba(255, 255, 255, 0.3) 35%,
                        rgba(255, 255, 255, 0.05) 55%,
                        rgba(255, 255, 255, 0.3) 75%,
                        rgba(255, 255, 255, 0.55) 100%
                    );
                    -webkit-mask-image: linear-gradient(
                        to bottom,
                        transparent 0%,
                        black 8%,
                        rgba(0, 0, 0, 0.7) 30%,
                        rgba(0, 0, 0, 0.25) 50%,
                        rgba(0, 0, 0, 0.6) 70%,
                        black 100%
                    );
                    mask-image: linear-gradient(
                        to bottom,
                        transparent 0%,
                        black 8%,
                        rgba(0, 0, 0, 0.7) 30%,
                        rgba(0, 0, 0, 0.25) 50%,
                        rgba(0, 0, 0, 0.6) 70%,
                        black 100%
                    );
                    pointer-events: none;
                }

                .hero-content {
                    width: 100%;
                    flex: 1;
                    padding: clamp(64px, 12vh, 210px) var(--space-section-px-sm) var(--space-6);
                    position: relative;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-end;
                    gap: var(--space-10);
                }

                /* ── Top: Text + CTA ─────────────────── */
                .hero-top-block {
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                }

                .hero-text-group {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .hero-heading {
                    color: var(--color-primary);
                    font-size: 26px;
                    font-family: var(--font-display);
                    font-weight: 500;
                    line-height: 33.8px;
                    margin: 0;
                }

                .hero-subtitle-cta {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    position: relative;
                    z-index: 10;
                }

                .hero-subtitle-cta::before {
                    content: "";
                    position: absolute;
                    inset: -24px;
                    z-index: -1;
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    background: rgba(255, 255, 255, 0.15);
                    border-radius: 16px;
                    -webkit-mask-image: radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%);
                    mask-image: radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%);
                }

                .hero-subtitle {
                    color: var(--color-primary);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 22px;
                    max-width: 75%;
                    margin: 0;
                }

                /* ── CTA Group — TECH DEBT ELIMINATED: replaced custom .hero-btn-primary
                   with unified <Button> component ── */
                .hero-cta-group {
                    display: inline-flex;
                    align-items: center;
                    cursor: pointer;
                    text-decoration: none;
                    align-self: stretch;
                }

                /* ── Social Proof ─────────────────────── */
                .hero-social-proof {
                    width: 280px;
                    align-self: flex-end;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: var(--space-4);
                    margin-top: auto;
                    position: relative;
                    z-index: 2;
                }

                .hero-social-proof::before {
                    content: "";
                    position: absolute;
                    inset: -32px;
                    z-index: -1;
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    background: rgba(255, 255, 255, 0.15);
                    border-radius: 24px;
                    -webkit-mask-image: radial-gradient(ellipse at 50% 50%, black 35%, transparent 75%);
                    mask-image: radial-gradient(ellipse at 50% 50%, black 35%, transparent 75%);
                }

                .hero-sp-label {
                    color: var(--color-primary);
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 25.2px;
                }

                .hero-avatars-group {
                    display: inline-flex;
                    align-items: center;
                }

                .hero-avatar-wrapper {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 2px solid var(--color-white);
                    flex-shrink: 0;
                    display: flex;
                    align-items: flex-end;
                }

                .hero-avatar-wrapper:not(:first-child) {
                    margin-left: -16px;
                }

                .hero-avatar-wrapper:nth-child(1) { z-index: 4; }
                .hero-avatar-wrapper:nth-child(2) { z-index: 3; }
                .hero-avatar-wrapper:nth-child(3) { z-index: 2; }

                .hero-avatar-img {
                    width: 100%;
                    height: 56px;
                    object-fit: cover;
                    object-position: top;
                }

                .hero-avatar-count {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background: var(--color-surface-card);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-shrink: 0;
                    border: 2px solid var(--color-white);
                    margin-left: -16px;
                    z-index: 1;
                }

                .hero-avatar-count-text {
                    color: var(--color-error);
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 19.6px;
                }

                .hero-sp-stat-title {
                    color: var(--color-accent);
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 25.2px;
                }

                .hero-sp-stat-desc {
                    color: var(--color-primary);
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 21px;
                }

                /* ═══════════════════════════════════════
                 * TABLET ≥641px
                 * Only differences from mobile base.
                 * ═══════════════════════════════════════ */
                @media (min-width: 641px) {
                    .hero-content {
                        padding: clamp(68px, 14vh, 210px) var(--space-section-px-md) var(--space-8);
                    }

                    .hero-text-group {
                        max-width: 75%;
                    }

                    .hero-heading {
                        max-width: 75%;
                    }

                    .hero-subtitle-cta {
                        max-width: 75%;
                    }

                    .hero-subtitle {
                        max-width: 75%;
                    }
                }

                /* ═══════════════════════════════════════
                 * DESKTOP ≥1025px
                 * Only differences from tablet.
                 * ═══════════════════════════════════════ */
                @media (min-width: 1025px) {
                    .hero-blur-overlay {
                        display: none;
                    }

                    .hero-section {
                        min-height: 100svh;
                    }

                    .hero-content {
                        padding: 210px var(--space-section-px-lg) var(--space-16);
                    }

                    .hero-top-block {
                        gap: 64px;
                    }

                    .hero-text-group {
                        max-width: 800px;
                    }

                    .hero-heading {
                        font-size: var(--text-h1);
                        line-height: 1.3;
                        max-width: 728px;
                    }

                    .hero-subtitle-cta {
                        max-width: 600px;
                        gap: 32px;
                    }

                    .hero-subtitle-cta::before,
                    .hero-social-proof::before {
                        display: none;
                    }

                    .hero-subtitle {
                        font-size: var(--text-body-lg);
                        font-family: var(--font-display);
                        line-height: 1.4;
                        max-width: 448px;
                    }

                    /* TECH DEBT ELIMINATED: .hero-btn-primary desktop overrides removed
                       — <Button> component handles responsive sizing via tokens */


                }
            `}</style>

            <section className="hero-section">
                {/* Background Image */}
                <div className="hero-background">
                    <Image
                        src={IMAGES.hero.background}
                        alt="Medelise Hero Background"
                        fill
                        priority
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                </div>

                {/* Blur overlay for mobile/tablet readability */}
                <div className="hero-blur-overlay" />

                <div className="hero-content">
                    {/* Heading + Subtitle + CTA grouped, pushed to bottom-left */}
                    <div className="hero-top-block">
                        <h1 className="hero-heading">
                            Vizite medicale acasă, programabile în sub 60 de secunde.
                        </h1>

                        <div className="hero-subtitle-cta">
                            <p className="hero-subtitle">
                                Creează-ți contul gratuit în Portalul MEDELISE și programează o vizită medicală acasă, fără apeluri sau cozi.
                            </p>
                            {/* TECH DEBT ELIMINATED: custom .hero-btn-primary replaced with <Button> */}
                            <Link href="/login" className="hero-cta-group">
                                <Button variant="primary" isFullWidth>
                                    Creeaza contul gratuit
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Social Proof – Left aligned, overlapping avatars */}
                    <div className="hero-social-proof">
                        <div className="hero-sp-label">Apreciat de cei mai buni medici</div>

                        <div className="hero-avatars-group">
                            <div className="hero-avatar-wrapper" style={{ background: 'var(--color-accent)' }}>
                                <Image src={IMAGES.hero.avatar1} alt="Medic 1" width={64} height={64} className="hero-avatar-img" style={{ width: '100%', height: '56px', objectFit: 'cover', objectPosition: 'top' }} />
                            </div>
                            <div className="hero-avatar-wrapper" style={{ background: 'var(--color-secondary)' }}>
                                <Image src={IMAGES.hero.avatar2} alt="Medic 2" width={64} height={64} className="hero-avatar-img" style={{ width: '100%', height: '56px', objectFit: 'cover', objectPosition: 'top' }} />
                            </div>
                            <div className="hero-avatar-wrapper" style={{ background: 'var(--color-primary)' }}>
                                <Image src={IMAGES.hero.avatar3} alt="Medic 3" width={64} height={64} className="hero-avatar-img" style={{ width: '100%', height: '56px', objectFit: 'cover', objectPosition: 'top' }} />
                            </div>
                            <div className="hero-avatar-count">
                                <span className="hero-avatar-count-text">40+</span>
                            </div>
                        </div>

                        <div className="hero-sp-stat-title">Peste 40 de specialiști</div>
                        <div className="hero-sp-stat-desc">Medici experți colaborează cu MEDELISE pentru diagnostice precise și rapide.</div>
                    </div>
                </div>
            </section>
        </>
    );
}
