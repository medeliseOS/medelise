'use client';

import React, { useState, memo } from 'react';
import type { IVClinicalStudy } from './types';
import { MinusIcon, PlusIcon } from './icons';

interface StudyCardProps {
    study: IVClinicalStudy;
}

function StudyCardComponent({ study }: StudyCardProps) {
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
                    <div className="study-icon">
                        {isOpen ? <MinusIcon /> : <PlusIcon />}
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
                    border-radius: var(--radius-main);
                    overflow: hidden;
                    transition: all 0.2s ease;
                }
                
                .study-header {
                    width: 100%;
                    display: flex;
                    align-items: flex-start;
                    gap: var(--space-4);
                    padding: var(--space-4);
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
                    padding-top: 2px;
                }

                .study-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .study-title {
                    flex: 1;
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: var(--text-body);
                    font-weight: 600;
                    line-height: 1.5;
                }

                .study-content {
                    padding: 0 var(--space-4) var(--space-4) var(--space-4);
                    border-top: 1px solid var(--color-border-light);
                    background: white;
                }

                .study-content p {
                    margin: 0;
                    padding-top: var(--space-4);
                    color: var(--color-primary);
                    font-family: var(--font-body);
                    font-size: var(--text-body);
                    line-height: var(--lh-body);
                }

                .study-header:hover {
                    background: var(--color-surface);
                }

                @media (max-width: 767px) {
                    .study-title {
                        font-size: var(--text-sm);
                    }
                    
                    .study-content p {
                        font-size: var(--text-sm);
                    }
                }
            `}</style>
        </div>
    );
}

// Memoize to prevent re-render when sibling cards expand/collapse
export const StudyCard = memo(StudyCardComponent);
