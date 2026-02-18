'use client';

import Image from 'next/image';

/* ── Component ──────────────────────────────────────────────── */
export default function CTAScheduleSection() {
    return (
        <>
            <style jsx>{`
                /* ═══════════════════════════════════════
                 * §1 BASE — Mobile-first (<768px)
                 * ═══════════════════════════════════════ */
                .cta-schedule {
                    width: 100%;
                    background: var(--color-white);
                    padding: 48px 16px;
                    overflow: hidden;
                }

                .cta-schedule-inner {
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 24px;
                }

                /* ── Text group ── */
                .cta-schedule-text {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .cta-schedule-title {
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 28px;
                    margin: 0;
                }

                .cta-schedule-subtitle {
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    margin: 0;
                }

                /* ── Button ── */
                .cta-schedule-btn {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 10px 20px;
                    background: var(--color-primary);
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: opacity 0.2s ease;
                }

                .cta-schedule-btn:hover {
                    opacity: 0.9;
                }

                .cta-schedule-btn-icon {
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .cta-schedule-btn-icon :global(.cta-cal-img) {
                    filter: brightness(0) invert(1);
                }

                .cta-schedule-btn-text {
                    color: var(--color-white);
                    font-family: var(--font-heading);
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 28px;
                }

                /* ═══════════════════════════════════════
                 * §2 TABLET ≥768px
                 * ═══════════════════════════════════════ */
                @media (min-width: 768px) {
                    .cta-schedule {
                        padding: 64px var(--space-section-px);
                        display: flex;
                        justify-content: center;
                    }

                    .cta-schedule-inner {
                        max-width: 704px;
                        gap: 40px;
                    }

                    .cta-schedule-text {
                        gap: 16px;
                    }

                    .cta-schedule-title {
                        font-size: 28px;
                        line-height: 36px;
                    }

                    .cta-schedule-subtitle {
                        font-size: 18px;
                        line-height: 28px;
                        max-width: 513px;
                    }

                    .cta-schedule-btn {
                        width: 294px;
                    }
                }

                /* ═══════════════════════════════════════
                 * §3 DESKTOP ≥1024px
                 * ═══════════════════════════════════════ */
                @media (min-width: 1024px) {
                    .cta-schedule {
                        padding: 64px 112px;
                    }

                    .cta-schedule-inner {
                        max-width: 100%;
                        gap: 40px;
                    }

                    .cta-schedule-title {
                        font-size: 36px;
                        line-height: 44px;
                    }
                }
            `}</style>

            <section className="cta-schedule" aria-labelledby="cta-schedule-heading">
                <div className="cta-schedule-inner">
                    {/* ── Text ── */}
                    <div className="cta-schedule-text">
                        <h2 id="cta-schedule-heading" className="cta-schedule-title">
                            Ai nevoie de o vizită medicală la domiciliu?
                            <br />
                            Programează acum – Fără stres, direct online.
                        </h2>
                        <p className="cta-schedule-subtitle">
                            Te ajutăm să ai grijă de sănătatea ta, fără să pierzi ore
                            întregi pe drum.
                        </p>
                    </div>

                    {/* ── CTA Button ── */}
                    <button className="cta-schedule-btn" type="button">
                        <span className="cta-schedule-btn-icon">
                            <Image
                                src="/icons-medelise/md-business/md-ico-calendar-check.webp"
                                alt=""
                                width={20}
                                height={20}
                                className="cta-cal-img"
                            />
                        </span>
                        <span className="cta-schedule-btn-text">Programează</span>
                    </button>
                </div>
            </section>
        </>
    );
}
