'use client';

import React from 'react';

interface QualityFooterProps {
    subtitle: string;
    description: string;
}

export default function QualityFooter({ subtitle, description }: QualityFooterProps) {
    return (
        <div className="quality-footer">
            <h3 className="quality-subtitle">{subtitle}</h3>
            <p className="quality-desc">
                {description}
                <br className="desktop-break" />
            </p>

            <style jsx>{`
                .quality-footer {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: var(--space-4);
                }

                .quality-subtitle {
                    color: var(--color-primary);
                    font-size: var(--text-xl);
                    font-family: var(--font-heading);
                    font-weight: 600;
                    line-height: var(--lh-heading);
                    margin: 0;
                }

                .quality-desc {
                    color: var(--color-primary);
                    font-size: var(--text-body);
                    font-family: var(--font-heading);
                    font-weight: 400;
                    line-height: var(--lh-body);
                    margin: 0;
                    width: 100%;
                }

                .desktop-break {
                    display: none;
                }

                @media (min-width: 768px) {
                    .desktop-break {
                        display: inline;
                    }
                }
            `}</style>
        </div>
    );
}
