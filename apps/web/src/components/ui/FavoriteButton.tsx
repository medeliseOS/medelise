'use client';

import React from 'react';

/* ── Props ───────────────────────────────────────────────────────────────── */
export interface FavoriteButtonProps {
    /** Whether the item is currently favorited */
    isFavorite: boolean;
    /** Toggle callback */
    onToggle: () => void;
    /** Optional extra className on the wrapper button */
    className?: string;
}

/* ── Component ───────────────────────────────────────────────────────────── */
export default function FavoriteButton({
    isFavorite,
    onToggle,
    className = '',
}: FavoriteButtonProps) {
    return (
        <>
            <button
                className={`fav-btn${isFavorite ? ' fav-btn--active' : ''} ${className}`.trim()}
                aria-label={isFavorite ? 'Elimină de la favorite' : 'Adaugă la favorite'}
                onClick={onToggle}
            >
                <svg
                    className="fav-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={isFavorite ? 'var(--color-error, #e03)' : 'none'}
                    stroke={isFavorite ? 'var(--color-error, #e03)' : 'var(--color-primary, #213170)'}
                    strokeWidth="1.5"
                >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            </button>

            <style jsx>{`
                .fav-btn {
                    width: 44px;
                    height: 44px;
                    border-radius: 100px;
                    border: 1px solid #97A1AF;
                    background: white;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: border-color 0.2s;
                    flex-shrink: 0;
                }
                .fav-btn--active {
                    border-color: var(--color-error, #e03);
                }

                /* Animation on the SVG icon only */
                .fav-icon {
                    transition: fill 0.2s, stroke 0.2s, transform 0.3s, filter 0.3s;
                }
                .fav-btn:hover .fav-icon {
                    transform: scale(1.15);
                    filter: brightness(1.1);
                }
                .fav-btn:active .fav-icon {
                    transform: scale(0.9);
                }

                /* ═══ TABLET & MOBILE ═══ */
                @media (max-width: 1024px) {
                    .fav-btn { border-color: #CED2DA; }
                }
            `}</style>
        </>
    );
}
