'use client';

import React from 'react';

interface QualityHeaderProps {
    title: string;
    paragraphs: string[];
}

export default function QualityHeader({ title, paragraphs }: QualityHeaderProps) {
    return (
        <div className="quality-header">
            <h2 className="quality-title">{title}</h2>
            <div className="quality-text-group">
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="quality-text">{paragraph}</p>
                ))}
            </div>

            <style jsx>{`
                .quality-header {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: stretch;
                    gap: 16px;
                    width: 100%;
                }

                .quality-title {
                    text-align: center;
                    color: var(--color-primary);
                    font-size: 36px;
                    font-family: var(--font-heading);
                    font-weight: 600;
                    line-height: 44px;
                    width: 100%;
                }

                .quality-text-group {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: stretch;
                    gap: 4px;
                    align-self: stretch;
                    padding: var(--space-8) 0;
                    width: 100%;
                }

                .quality-text {
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
