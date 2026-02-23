'use client';

import React, { memo } from 'react';

interface ProductHeaderProps {
    title: string;
    subtitle: string;
    rating: number;
    reviewCount: number;
}

const renderStars = (rating: number) =>
    [1, 2, 3, 4, 5].map(i => (
        <div key={i} className={i <= rating ? 'drez-star-icon' : 'drez-star-icon-empty'} />
    ));

function ProductHeaderComponent({ title, subtitle, rating, reviewCount }: ProductHeaderProps) {
    return (
        <div className="drez-header-group">
            <h1 className="drez-title">{title}</h1>
            <h2 className="drez-subtitle">{subtitle}</h2>
            <div className="drez-rating-row">
                <div className="drez-stars">{renderStars(rating)}</div>
                <span className="drez-review-count">{reviewCount} Recenzii</span>
            </div>

            <style jsx>{`
                .drez-header-group {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-2);
                }

                .drez-title {
                    color: var(--color-primary);
                    font-size: 32px;
                    font-family: var(--font-heading);
                    font-weight: 700;
                    line-height: 40px;
                    letter-spacing: 2px;
                    margin: 0;
                }

                .drez-subtitle {
                    color: var(--color-primary);
                    font-size: 18px;
                    font-family: var(--font-heading);
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                }

                .drez-rating-row {
                    display: flex;
                    align-items: center;
                    gap: var(--space-2);
                }

                .drez-stars {
                    display: flex;
                    gap: 4px;
                }

                .drez-star-icon, .drez-star-icon-empty {
                    width: 20px;
                    height: 20px;
                    background: var(--color-accent);
                    clip-path: polygon(
                        50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 
                        50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%
                    );
                }

                .drez-star-icon-empty {
                    background: #E0E0E0;
                }

                .drez-review-count {
                    color: var(--color-text-muted);
                    font-size: 14px;
                    font-family: var(--font-body);
                    font-weight: 500;
                }
            `}</style>
        </div>
    );
}

export const ProductHeader = memo(ProductHeaderComponent);
