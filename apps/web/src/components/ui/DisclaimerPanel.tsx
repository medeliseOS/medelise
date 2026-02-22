'use client';

import React from 'react';

/* ── Props ───────────────────────────────────────────────────────────────── */
export interface DisclaimerPanelProps {
    /** The disclaimer text to display */
    text: string;
    /** Optional extra className on the wrapper */
    className?: string;
}

/* ── Component ───────────────────────────────────────────────────────────── */
export default function DisclaimerPanel({ text, className = '' }: DisclaimerPanelProps) {
    return (
        <>
            <div className={`disclaimer-panel ${className}`.trim()}>
                <span className="disclaimer-panel-text">{text}</span>
            </div>

            <style jsx>{`
                .disclaimer-panel {
                    width: 100%;
                    background: #F9FAFB;
                    border-radius: 8px;
                    padding: 10px 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .disclaimer-panel-text {
                    flex: 1;
                    text-align: center;
                    color: var(--color-primary, #213170);
                    font-size: 14px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 400;
                    line-height: 20px;
                    word-wrap: break-word;
                }

                /* ═══ TABLET (768–1024px) ═══ */
                @media (max-width: 1024px) {
                    .disclaimer-panel {
                        display: flex;
                        width: 100%;
                        background: #F9FAFB;
                        border-radius: 8px;
                        padding: 10px 20px;
                        justify-content: center;
                        align-items: center;
                    }
                    .disclaimer-panel-text { font-size: 12px; line-height: 16px; }
                }

                /* ═══ MOBILE (≤767px) ═══ */
                @media (max-width: 767px) {
                    .disclaimer-panel {
                        display: flex;
                        width: 100%;
                        background: #F2F4F7;
                        border-radius: 8px;
                        padding: 10px 20px;
                        justify-content: center;
                        align-items: center;
                    }
                    .disclaimer-panel-text { font-size: 12px; line-height: 16px; }
                }
            `}</style>
        </>
    );
}
