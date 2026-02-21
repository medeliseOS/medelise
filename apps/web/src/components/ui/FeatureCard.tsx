'use client';

/* ── Feature Card — Reusable benefit/feature display card ──────── */

interface FeatureCardProps {
    /** Card title (e.g. "Profesionalism Garantat") */
    title: string;
    /** Card description text. Supports line breaks via \n */
    description: string;
    /** Whether to show a subtle box-shadow (default: false) */
    elevated?: boolean;
}

export default function FeatureCard({
    title,
    description,
    elevated = false,
}: FeatureCardProps) {
    return (
        <>
            <style jsx>{`
                .feature-card {
                    align-self: stretch;
                    flex: 1 1 0;
                    padding: var(--space-6);
                    background: var(--color-white);
                    border-radius: var(--radius-lg);
                    outline: 1px var(--color-surface-border) solid;
                    outline-offset: -1px;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: var(--space-3);
                    display: flex;
                    transition: box-shadow 0.2s ease;
                }

                .feature-card--elevated {
                    box-shadow: var(--shadow-md);
                    outline: none;
                }

                .feature-card__content {
                    align-self: stretch;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: var(--space-3);
                    display: flex;
                }

                .feature-card__title {
                    align-self: stretch;
                    color: var(--color-primary);
                    font-size: var(--text-h4);
                    font-weight: 600;
                    line-height: var(--lh-heading);
                    word-wrap: break-word;
                }

                .feature-card__description {
                    align-self: stretch;
                    color: var(--color-primary);
                    font-size: var(--text-body-lg);
                    font-weight: 400;
                    line-height: var(--lh-body);
                    word-wrap: break-word;
                }

                /* ─── Mobile ≤640px ──────── */
                @media (max-width: 640px) {
                    .feature-card {
                        border-radius: var(--radius-main);
                    }

                    .feature-card__description {
                        font-weight: 500;
                    }
                }
            `}</style>

            <div
                className={`feature-card${elevated ? ' feature-card--elevated' : ''
                    }`}
            >
                <div className="feature-card__content">
                    <h3 className="feature-card__title">{title}</h3>
                    <p className="feature-card__description">{description}</p>
                </div>
            </div>
        </>
    );
}
