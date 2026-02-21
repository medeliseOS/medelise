'use client';

/* ── Types ── */

export interface ServiceSectionHeaderProps {
    /** Section title */
    title: string;
    /** Section description */
    description: string;
}

/* ── Component ── */

export default function ServiceSectionHeader({
    title,
    description,
}: ServiceSectionHeaderProps) {
    return (
        <section className="svc-section-header">
            <div className="svc-section-header__inner">
                <div className="svc-section-header__content">
                    <div className="svc-section-header__row">
                        <h2 className="svc-section-header__title">{title}</h2>
                        <p className="svc-section-header__desc">{description}</p>
                    </div>
                    <div className="svc-section-header__divider" />
                </div>
            </div>

            <style jsx>{`
                /* ── Desktop (>1024px): side-by-side ── */
                .svc-section-header {
                    width: 100%;
                    background: #fff;
                    padding: 48px 64px;
                }

                .svc-section-header__inner {
                    width: 100%;
                }

                .svc-section-header__content {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    padding: 40px 16px;
                }

                .svc-section-header__row {
                    display: flex;
                    align-items: center;
                    gap: 32px;
                }

                .svc-section-header__title {
                    flex: 1 1 0;
                    color: #213170;
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    font-size: 28px;
                    font-weight: 600;
                    line-height: 1.29;
                    margin: 0;
                }

                .svc-section-header__desc {
                    flex: 1 1 0;
                    color: #213170;
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 1.4;
                    margin: 0;
                    max-width: none;
                }

                .svc-section-header__divider {
                    width: 100%;
                    height: 1px;
                    background: #BDE0FF;
                }

                /* ── Tablet (≤1024px): stacked ── */
                @media (max-width: 1024px) {
                    .svc-section-header {
                        padding: 32px 32px;
                    }

                    .svc-section-header__inner {
                        max-width: 704px;
                        margin: 0 auto;
                    }

                    .svc-section-header__content {
                        padding: 16px 0;
                        gap: 32px;
                    }

                    .svc-section-header__row {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 32px;
                    }

                    .svc-section-header__title {
                        font-size: 24px;
                        line-height: 1.33;
                    }

                    .svc-section-header__desc {
                        font-size: 20px;
                        line-height: 1.4;
                    }
                }

                /* ── Mobile (≤640px): compact ── */
                @media (max-width: 640px) {
                    .svc-section-header {
                        padding: 32px 16px;
                        overflow: hidden;
                    }

                    .svc-section-header__inner {
                        max-width: 343px;
                    }

                    .svc-section-header__content {
                        padding: 0;
                        gap: 16px;
                    }

                    .svc-section-header__row {
                        gap: 16px;
                    }

                    .svc-section-header__title {
                        font-size: 20px;
                        line-height: 1.4;
                    }

                    .svc-section-header__desc {
                        font-size: 16px;
                        line-height: 1.5;
                    }
                }
            `}</style>
        </section>
    );
}
