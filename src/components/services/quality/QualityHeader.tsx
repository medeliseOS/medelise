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
                    align-items: stretch;
                    gap: var(--space-8);
                    width: 100%;
                }

                .quality-title {
                    text-align: center;
                    color: var(--color-primary);
                    font-size: var(--text-3xl);
                    font-family: var(--font-heading);
                    font-weight: 600;
                    line-height: var(--lh-heading);
                    max-width: 100%;
                }

                .quality-text-group {
                    display: flex;
                    flex-direction: column;
                    align-items: stretch; 
                    gap: var(--space-2);
                    width: 100%;
                    padding: var(--space-8) 0;
                }

                .quality-text {
                    color: var(--color-primary);
                    font-size: var(--text-body);
                    font-family: var(--font-heading);
                    font-weight: 400;
                    line-height: var(--lh-body);
                    text-align: center; 
                    margin: 0;
                    width: 100%;
                }
            `}</style>
        </div>
    );
}
