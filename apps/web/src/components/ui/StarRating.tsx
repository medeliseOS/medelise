'use client';

import React, { useState } from 'react';

/* ── Props ───────────────────────────────────────────────────────────────── */
export interface StarRatingProps {
    /** Total number of stars (default: 5) */
    totalStars?: number;
    /** Initially active stars */
    initialRating?: number;
    /** Size of each star in px (default: 20) */
    size?: number;
    /** If true, user can click to rate (default: false = display only) */
    interactive?: boolean;
    /** Callback when rating changes (interactive mode) */
    onRate?: (rating: number) => void;
    /** Optional extra className on the wrapper */
    className?: string;
}

/* ── Component ───────────────────────────────────────────────────────────── */
export default function StarRating({
    totalStars = 5,
    initialRating = 5,
    size = 20,
    interactive = false,
    onRate,
    className = '',
}: StarRatingProps) {
    const [activeCount, setActiveCount] = useState(initialRating);
    const [animating, setAnimating] = useState<number | null>(null);

    const handleClick = (index: number) => {
        if (!interactive) return;
        const newRating = index + 1;
        setAnimating(index);
        setActiveCount(newRating);
        onRate?.(newRating);
        // Reset animation class after animation completes
        setTimeout(() => setAnimating(null), 750);
    };

    return (
        <>
            <div className={`star-rating ${className}`.trim()}>
                {Array.from({ length: totalStars }).map((_, i) => {
                    const isActive = i < activeCount;
                    const isAnimating = animating !== null && i <= animating;
                    return (
                        <button
                            key={i}
                            className={`star-btn${isActive ? ' star-btn--active' : ''}${isAnimating ? ' star-btn--animating' : ''}`}
                            onClick={() => handleClick(i)}
                            type="button"
                            aria-label={`${i + 1} stea`}
                            style={{ fontSize: size * 1.5 }}
                        >
                            <span
                                className="star-icon"
                                style={{ width: size, height: size, lineHeight: `${size}px`, fontSize: size * 1.5 }}
                            >
                                ★
                            </span>
                        </button>
                    );
                })}
            </div>

            <style jsx>{`
                .star-rating {
                    display: inline-flex;
                    align-items: center;
                    gap: 2px;
                }
                .star-btn {
                    background-color: transparent;
                    border: 0;
                    outline: 0;
                    padding: 0;
                    cursor: ${interactive ? 'pointer' : 'default'};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .star-icon {
                    display: block;
                    position: relative;
                    color: #aaa;
                    text-align: center;
                    z-index: 10;
                }
                .star-icon::before {
                    content: '★';
                    display: inline-block;
                    color: #95a5a6;
                    position: absolute;
                    left: 0;
                    top: -1px;
                    opacity: 0;
                    z-index: -1;
                    width: 100%;
                    height: 100%;
                }
                .star-icon::after {
                    content: '★';
                    display: inline-block;
                    color: #f1c40f;
                    position: absolute;
                    left: 0;
                    top: -1px;
                    opacity: 0;
                    z-index: -2;
                    width: 100%;
                    height: 100%;
                }

                /* Hover */
                .star-btn:hover .star-icon {
                    color: #999;
                }

                /* Active state — gold star */
                .star-btn--active .star-icon {
                    color: #f1c40f;
                }

                /* Animation on click */
                .star-btn--animating .star-icon {
                    animation: starbackground 500ms 1;
                    animation-delay: 250ms;
                    animation-fill-mode: forwards;
                }
                .star-btn--animating .star-icon::before {
                    animation: staranimation 250ms 1;
                }
                .star-btn--animating .star-icon::after {
                    animation: staranimation 500ms 1;
                    animation-delay: 250ms;
                }

                @keyframes staranimation {
                    0%   { opacity: 0; transform: scale(1); }
                    50%  { opacity: 0.5; }
                    100% { opacity: 0; transform: scale(2); top: -1px; }
                }

                @keyframes starbackground {
                    0%   { color: #aaaaaa; }
                    100% { color: #f1c40f; }
                }

                /* ═══ MOBILE (≤767px) ═══ */
                @media (max-width: 767px) {
                    .star-icon {
                        width: 18px !important;
                        height: 18px !important;
                        line-height: 18px !important;
                        font-size: 27px !important;
                    }
                }
            `}</style>
        </>
    );
}
