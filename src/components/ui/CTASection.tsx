'use client';

import Link from 'next/link';
import Button from '@ui/Button';

/* ── Calendar SVG Icon ── */
const CalendarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
            d="M6.66667 1.66667V4.16667M13.3333 1.66667V4.16667M2.91667 7.57500H17.0833M17.5 7.08333V14.1667C17.5 16.6667 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6667 2.5 14.1667V7.08333C2.5 4.58333 3.75 2.91667 6.66667 2.91667H13.3333C16.25 2.91667 17.5 4.58333 17.5 7.08333Z"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

/* ── Props ── */
interface CTASectionProps {
    title?: React.ReactNode;
    description?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    showSecondary?: boolean;
}

/* ═══════════════════════════════════════════════════════════
 * CTASection — Reusable CTA banner
 *
 * Used on: Homepage, Contact, About, IV-Therapy pages
 * ═══════════════════════════════════════════════════════════ */
export default function CTASection({
    title = (
        <>
            Ai nevoie de o vizită medicală la domiciliu?
            <br />
            Programează acum – Fără stres, direct online.
        </>
    ),
    description = 'Te ajutăm să ai grijă de sănătatea ta, fără să pierzi ore întregi pe drum.',
    primaryLabel = 'Programează',
    primaryHref = '/login',
    secondaryLabel = 'Intră în contul tău MEDELISE',
    secondaryHref = '/login',
    showSecondary = true,
}: CTASectionProps) {
    return (
        <>
            <section className="cta-section">
                <div className="cta-inner">
                    <div className="cta-text">
                        <h2 className="cta-title">{title}</h2>
                        <p className="cta-desc">{description}</p>
                    </div>
                    <div className="cta-buttons">
                        <Link href={primaryHref}>
                            <Button variant="primary" iconLeft={<CalendarIcon />}>
                                {primaryLabel}
                            </Button>
                        </Link>
                        {showSecondary && (
                            <Link href={secondaryHref}>
                                <Button variant="outline">{secondaryLabel}</Button>
                            </Link>
                        )}
                    </div>
                </div>
            </section>

            <style jsx>{`
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

                /* ── TABLET (≤1024px) ── */
                @media (max-width: 1024px) {
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

                /* ── MOBILE (≤480px) ── */
                @media (max-width: 480px) {
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

                    .cta-buttons {
                        flex-direction: column;
                        width: 100%;
                    }
                }
            `}</style>
        </>
    );
}
