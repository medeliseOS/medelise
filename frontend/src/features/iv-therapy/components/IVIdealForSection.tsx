'use client';

import React from 'react';

export interface IdealForItem {
    text: string;
}

interface IVIdealForSectionProps {
    title?: string;
    items: IdealForItem[];
}

export default function IVIdealForSection({ 
    title = 'Ideal pentru:', 
    items 
}: IVIdealForSectionProps) {
    return (
        <section className="ideal-section">
            <h2 className="ideal-title">{title}</h2>
            
            <div className="ideal-grid">
                {/* Divide items into two columns for Desktop/Tablet if possible */}
                <div className="ideal-col">
                    {items.filter((_, i) => i % 2 === 0).map((item, i) => ( // 0, 2...
                        <div key={i} className="ideal-item">
                            <div className="ideal-icon">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6666 4.5L6.41663 12.75L3.33331 9.66667" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <p className="ideal-text">{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className="ideal-col">
                    {items.filter((_, i) => i % 2 !== 0).map((item, i) => ( // 1, 3...
                        <div key={i} className="ideal-item">
                            <div className="ideal-icon">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6666 4.5L6.41663 12.75L3.33331 9.66667" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <p className="ideal-text">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .ideal-section {
                    width: 100%;
                    background: white;
                    padding: 64px 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 64px;
                }

                .ideal-title {
                    text-align: center;
                    color: var(--color-primary);
                    font-size: 48px;
                    font-family: var(--font-heading);
                    font-weight: 700;
                    line-height: 1.25;
                    margin: 0;
                }

                .ideal-grid {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    gap: 64px;
                    max-width: 1200px;
                }

                .ideal-col {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    flex: 1;
                    max-width: 500px;
                }

                .ideal-item {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    padding: 8px 0;
                }

                .ideal-icon {
                    flex-shrink: 0;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background: #F0F6FF; /* Keeping the specific tint or use var(--color-surface) if preferred */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .ideal-text {
                    color: var(--color-primary);
                    font-size: 18px;
                    font-family: var(--font-heading);
                    font-weight: 500;
                    line-height: 1.55;
                    margin: 0;
                }

                /* ── Tablet ── */
                @media (max-width: 1024px) {
                    .ideal-section {
                        padding: 32px;
                        gap: 32px;
                    }

                    .ideal-title {
                        font-size: 36px;
                        font-weight: 600;
                    }

                    .ideal-text {
                        font-size: 16px;
                    }
                    
                    .ideal-grid {
                        gap: 32px;
                    }
                }

                /* ── Mobile ── */
                @media (max-width: 767px) {
                    .ideal-section {
                        padding: 32px 16px;
                        gap: 16px;
                    }

                    .ideal-title {
                        font-size: 28px;
                        font-weight: 600;
                    }

                    .ideal-grid {
                        flex-direction: column;
                        gap: 16px;
                    }

                    .ideal-col {
                        width: 100%;
                        max-width: 100%;
                        gap: 16px;
                    }

                    .ideal-item {
                        align-items: flex-start;
                        gap: 12px;
                    }

                    .ideal-text {
                        font-size: 14px;
                        line-height: 1.4;
                    }
                }
            `}</style>
        </section>
    );
}
