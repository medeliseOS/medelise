'use client';

import React from 'react';
import QualityHeader from './quality/QualityHeader';
import QualityImages from './quality/QualityImages';
import QualityFooter from './quality/QualityFooter';
import { 
    QUALITY_TITLE, 
    QUALITY_PARAGRAPHS, 
    QUALITY_FOOTER_SUBTITLE, 
    QUALITY_FOOTER_TEXT,
    SPLASH_IMAGE_SRC 
} from './quality/constants';
import type { IVQualitySectionProps } from './quality/types';

export default function IVQualitySection({ bagImageSrc }: IVQualitySectionProps) {
    return (
        <section className="quality-section">
            <div className="quality-container">
                <div className="quality-content">
                    <QualityHeader 
                        title={QUALITY_TITLE} 
                        paragraphs={QUALITY_PARAGRAPHS} 
                    />
                    
                    <QualityImages 
                        bagImageSrc={bagImageSrc}
                        splashImageSrc={SPLASH_IMAGE_SRC}
                    />
                    
                    <QualityFooter 
                        subtitle={QUALITY_FOOTER_SUBTITLE}
                        description={QUALITY_FOOTER_TEXT}
                    />
                </div>
            </div>

            <style jsx>{`
                .quality-section {
                    width: 100%;
                    background: white;
                    display: flex;
                    justify-content: center;
                    padding: 0;
                }

                .quality-container {
                    width: 100%;
                    max-width: 100%;
                    padding: var(--space-8) 0;
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                }

                .quality-content {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                    gap: var(--space-8);
                }

                /* ── Tablet ── */
                @media (max-width: 1024px) {
                    .quality-container {
                        padding: var(--space-6) var(--space-8);
                    }
                }

                /* ── Mobile ── */
                @media (max-width: 767px) {
                    .quality-container {
                        padding: var(--space-4) var(--space-4);
                    }
                    
                    .quality-content {
                        gap: var(--space-6);
                    }
                }
            `}</style>
        </section>
    );
}
