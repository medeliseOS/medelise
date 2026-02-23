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
                Fiecare tratament este adaptat nevoilor reale ale pacientului – nu administrăm formule standardizate fără o evaluare prealabilă. <br/>
                În echipa noastră, siguranța este la fel de importantă ca eficiența.
            </p>

            <style jsx>{`
                .quality-footer {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: stretch;
                    gap: 12px;
                }

                .quality-subtitle {
                    color: var(--color-primary);
                    font-size: 20px;
                    font-family: var(--font-heading);
                    font-weight: 600;
                    line-height: 28px;
                    text-align: center;
                    margin: 0;
                    align-self: stretch;
                }

                .quality-desc {
                    color: var(--color-primary);
                    font-size: 18px;
                    font-family: var(--font-heading);
                    font-weight: 400;
                    line-height: 28px;
                    text-align: center;
                    margin: 0;
                    align-self: stretch;
                    max-width: none;
                }
            `}</style>
        </div>
    );
}
