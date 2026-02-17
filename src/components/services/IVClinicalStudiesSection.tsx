'use client';

import React, { useState } from 'react';

export interface IVClinicalStudy {
    title: string;
    content: string;
}

interface IVClinicalStudiesSectionProps {
    title?: string;
    heading?: string;
    description?: string;
    studies: IVClinicalStudy[];
}

function StudyCard({ study }: { study: IVClinicalStudy }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div 
            className={`study-card ${isOpen ? 'open' : ''}`}
            data-state={isOpen ? 'Open' : 'Closed'}
        >
            <button 
                className="study-header" 
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <div className="study-icon-wrapper">
                    {/* Minus Icon when open, Plus would be alternative but design shows Minus/Square logic */}
                    <div className="study-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            {/* Simple Minus for Open state */}
                            <path d="M5 12H19" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            {/* Vertical line for Plus if we wanted transition, but let's stick to simple minus for now or matching the design snippet imply "Outline" */}
                            {!isOpen && <path d="M12 5V19" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>}
                        </svg>
                    </div>
                </div>
                <span className="study-title">{study.title}</span>
            </button>
            
            {isOpen && (
                <div className="study-content">
                    <p>{study.content}</p>
                </div>
            )}

            <style jsx>{`
                .study-card {
                    width: 100%;
                    background: white;
                    border: 1px solid var(--color-border-light);
                    border-radius: 8px;
                    overflow: hidden;
                    transition: all 0.2s ease;
                }
                
                .study-header {
                    width: 100%;
                    display: flex;
                    align-items: flex-start; /* Align top for multi-line titles */
                    gap: 16px;
                    padding: 16px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    text-align: left;
                }

                .study-icon-wrapper {
                    flex-shrink: 0;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding-top: 2px; /* Visual optical alignment */
                }

                .study-title {
                    color: var(--color-primary);
                    font-size: 18px;
                    font-family: var(--font-heading);
                    font-weight: 500;
                    line-height: 1.5;
                    flex: 1;
                }

                .study-content {
                    padding: 0 16px 16px 56px; /* Indent to align with text start (24px icon + 16px gap + 16px padding) */
                }

                .study-content p {
                    color: var(--color-primary);
                    font-size: 18px;
                    font-family: var(--font-heading); /* Check if implied Montserrat */
                    font-weight: 400;
                    text-decoration: underline; /* As per design snippet */
                    line-height: 1.5;
                    margin: 0;
                }

                /* Mobile Adjustments */
                @media (max-width: 767px) {
                    .study-title {
                        font-size: 16px;
                    }
                    .study-content p {
                        font-size: 16px;
                        text-decoration: none; /* Often underline is removed on mobile for readability, but snippet says underline. Keeping it. */
                    }
                    .study-content {
                        padding: 0 16px 16px 16px; /* Reduce indent on mobile */
                    }
                }
            `}</style>
        </div>
    );
}

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
                    max-width: 1152px; /* Matching the snippet width roughly */
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 32px;
                }

                .clinical-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 16px;
                    max-width: 900px;
                }

                .clinical-supertitle {
                    color: #97A1AF; /* Custom grey from design */
                    font-size: 28px;
                    font-family: var(--font-heading);
                    font-weight: 600;
                    line-height: 36px;
                    margin: 0;
                }

                .clinical-title {
                    color: var(--color-primary);
                    font-size: 36px;
                    font-family: var(--font-heading);
                    font-weight: 600;
                    line-height: 44px;
                    margin: 0;
                }

                .clinical-desc {
                    color: var(--color-primary);
                    font-size: 18px;
                    font-family: var(--font-heading);
                    font-weight: 500;
                    line-height: 28px;
                    text-align: center;
                    max-width: 100%;
                }

                .clinical-grid {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
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
                        gap: 24px;
                    }
                    .clinical-supertitle {
                        font-size: 20px; /* From snippet */
                        line-height: 28px;
                    }
                    .clinical-title {
                        font-size: 20px; /* From snippet */
                        line-height: 28px;
                    }
                    .clinical-desc {
                        font-size: 14px; /* From snippet */
                        line-height: 20px;
                    }
                }
            `}</style>
        </section>
    );
}
