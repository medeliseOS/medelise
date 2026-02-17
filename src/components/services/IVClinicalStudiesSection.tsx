'use client';

import React from 'react';
import { StudyCard } from './clinical/StudyCard';
import type { IVClinicalStudy, IVClinicalStudiesSectionProps } from './clinical/types';

// Re-export types for backward compatibility
export type { IVClinicalStudy };

export default function IVClinicalStudiesSection({
    title = 'Formulă bazată pe evidență clinică',
    heading = 'Studii relevante:',
    description,
    studies
}: IVClinicalStudiesSectionProps) {
    return (
        <section className="clinical-section">
            <div className="clinical-container">
                <div className="clinical-header">
                    <h2 className="clinical-supertitle">{title}</h2>
                    <h3 className="clinical-title">{heading}</h3>
                    {description && <p className="clinical-desc">{description}</p>}
                </div>

                <div className="clinical-grid">
                    {studies.map((study, index) => (
                        <StudyCard key={index} study={study} />
                    ))}
                </div>
            </div>

            <style jsx>{`
                .clinical-section {
                    width: 100%;
                    background: white;
                    display: flex;
                    justify-content: center;
                    padding: 0;
                }

                .clinical-container {
                    width: 100%;
                    max-width: 100%;
                    padding: var(--space-16) 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: var(--space-8);
                }

                .clinical-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: var(--space-4);
                    max-width: 900px;
                }

                .clinical-supertitle {
                    color: #97A1AF;
                    font-size: 28px;
                    font-family: var(--font-heading);
                    font-weight: 600;
                    line-height: 36px;
                    margin: 0;
                }

                .clinical-title {
                    color: var(--color-primary);
                    font-size: var(--text-3xl);
                    font-family: var(--font-heading);
                    font-weight: 600;
                    line-height: var(--lh-heading);
                    margin: 0;
                }

                .clinical-desc {
                    color: var(--color-primary);
                    font-size: var(--text-body);
                    font-family: var(--font-heading);
                    font-weight: 500;
                    line-height: var(--lh-body);
                    text-align: center;
                    max-width: 100%;
                    padding: var(--space-8) 0;
                }

                .clinical-grid {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-4);
                }

                /* ── Tablet ── */
                @media (max-width: 1024px) {
                    .clinical-container {
                        padding: 0;
                    }
                    .clinical-supertitle {
                        font-size: 24px;
                        line-height: 32px;
                    }
                    .clinical-title {
                        font-size: 28px;
                        line-height: 36px;
                    }
                }

                /* ── Mobile ── */
                @media (max-width: 767px) {
                    .clinical-section {
                        padding: 0;
                    }
                    .clinical-container {
                        padding: 0;
                        gap: var(--space-6);
                    }
                    .clinical-supertitle {
                        font-size: 20px;
                        line-height: 28px;
                    }
                    .clinical-title {
                        font-size: 20px;
                        line-height: 28px;
                    }
                    .clinical-desc {
                        font-size: 14px;
                        line-height: 20px;
                    }
                }
            `}</style>
        </section>
    );
}
