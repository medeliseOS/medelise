'use client';

import React, { memo } from 'react';

interface BenefitsListProps {
    benefits: string[];
}

function BenefitsListComponent({ benefits }: BenefitsListProps) {
    return (
        <div className="drez-benefits-group">
            <h3 className="drez-benefits-title">Beneficii:</h3>
            <ul className="drez-benefits-list">
                {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                ))}
            </ul>

            <style jsx>{`
                .drez-benefits-group {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-3);
                }

                .drez-benefits-title {
                    color: var(--color-primary);
                    font-size: 18px;
                    font-family: var(--font-heading);
                    font-weight: 600;
                    line-height: 28px;
                    margin: 0;
                }

                .drez-benefits-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-2);
                }

                .drez-benefits-list li {
                    color: var(--color-primary);
                    font-size: 16px;
                    font-family: var(--font-body);
                    font-weight: 400;
                    line-height: 24px;
                    padding-left: 24px;
                    position: relative;
                }

                .drez-benefits-list li::before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    color: var(--color-accent);
                    font-weight: 600;
                    font-size: 18px;
                }
            `}</style>
        </div>
    );
}

export const BenefitsList = memo(BenefitsListComponent);
