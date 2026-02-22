'use client';

import React from 'react';

/* ── Props ───────────────────────────────────────────────────────────────── */
export interface QuantitySelectorProps {
    /** Current quantity value */
    value: number;
    /** Min allowed value (default: 1) */
    min?: number;
    /** Max allowed value (default: unlimited) */
    max?: number;
    /** Callback when value changes */
    onChange: (newValue: number) => void;
    /** Optional extra className on the wrapper */
    className?: string;
}

/* ── Component ───────────────────────────────────────────────────────────── */
export default function QuantitySelector({
    value,
    min = 1,
    max,
    onChange,
    className = '',
}: QuantitySelectorProps) {
    const decrement = () => onChange(Math.max(min, value - 1));
    const increment = () => onChange(max !== undefined ? Math.min(max, value + 1) : value + 1);

    return (
        <>
            <div className={`qty-control ${className}`.trim()}>
                <button
                    className="qty-btn"
                    aria-label="Scade cantitatea"
                    onClick={decrement}
                >
                    <span className="qty-minus" />
                </button>
                <span className="qty-display">{value}</span>
                <button
                    className="qty-btn qty-btn--last"
                    aria-label="Creste cantitatea"
                    onClick={increment}
                >
                    <span className="qty-plus">
                        <span className="qty-bar-h" />
                        <span className="qty-bar-v" />
                    </span>
                </button>
            </div>

            <style jsx>{`
                .qty-control {
                    display: inline-flex;
                    width: fit-content;
                    border: 1px solid #CED2DA;
                    border-radius: 100px;
                    overflow: hidden;
                }
                .qty-btn {
                    background: white;
                    border: none;
                    border-right: 1px solid #CED2DA;
                    padding: 10px 20px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.1s;
                    position: relative;
                }
                .qty-btn--last { border-right: none; }
                .qty-display {
                    padding: 10px 20px;
                    font-size: 18px;
                    font-family: 'Open Sans', sans-serif;
                    font-weight: 600;
                    line-height: 28px;
                    color: var(--color-primary, #213170);
                    border-right: 1px solid #CED2DA;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                /* minus icon */
                .qty-minus {
                    display: block;
                    width: 20px;
                    height: 2px;
                    background: var(--color-primary, #213170);
                }
                /* plus icon */
                .qty-plus {
                    display: block;
                    width: 20px;
                    height: 20px;
                    position: relative;
                }
                .qty-bar-h {
                    position: absolute;
                    top: 9px;
                    left: 0;
                    width: 20px;
                    height: 2px;
                    background: var(--color-primary, #213170);
                }
                .qty-bar-v {
                    position: absolute;
                    top: 0;
                    left: 9px;
                    width: 2px;
                    height: 20px;
                    background: var(--color-primary, #213170);
                }

                /* ═══ TABLET (768–1024px) ═══ */
                @media (max-width: 1024px) {
                    .qty-display { font-size: 18px; line-height: 28px; font-family: 'Open Sans', sans-serif; }
                }

                /* ═══ MOBILE (≤767px) ═══ */
                @media (max-width: 767px) {
                    .qty-control { width: fit-content; }
                    .qty-btn { padding: 8px 16px; }
                    .qty-display {
                        font-size: 14px;
                        font-weight: 600;
                        line-height: 20px;
                        font-family: 'Montserrat', sans-serif;
                        padding: 8px 16px;
                    }
                }
            `}</style>
        </>
    );
}
