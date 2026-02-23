'use client';

/* ═══════════════════════════════════════════════════════════
 * LegalSearchHero — Reusable hero banner with keyword search
 * for all Legal pages (Termeni, GDPR, Cookies, FAQ, etc.)
 *
 * Props:
 *   title        — Page heading (e.g. "Termeni și condiții")
 *   date         — "Ultima actualizare: …"
 *   description  — Short paragraph below the title (optional)
 *   searchQuery, setSearchQuery, matchCount, clearSearch
 *        — from useLegalSearch() hook
 * ═══════════════════════════════════════════════════════════ */

interface LegalSearchHeroProps {
    title: string;
    date: string;
    description?: string;
    searchQuery: string;
    setSearchQuery: (q: string) => void;
    matchCount: number;
    clearSearch: () => void;
}

export default function LegalSearchHero({
    title,
    date,
    description,
    searchQuery,
    setSearchQuery,
    matchCount,
    clearSearch,
}: LegalSearchHeroProps) {
    return (
        <>
            <section className="lsh-hero">
                <div className="lsh-hero-inner">
                    <div className="lsh-hero-text">
                        <p className="lsh-date">{date}</p>
                        <h1 className="lsh-title">{title}</h1>
                    </div>

                    {description && (
                        <p className="lsh-desc">{description}</p>
                    )}

                    {/* Search */}
                    <div className="lsh-search-wrap">
                        <div className="lsh-search-label">
                            <span>Căutare în document</span>
                            <span className="lsh-search-star">*</span>
                        </div>
                        <div className="lsh-search-box">
                            <div className="lsh-search-icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path
                                        d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                                        stroke="#213170"
                                        strokeWidth="1.67"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                className="lsh-search-input"
                                placeholder="Caută cuvinte cheie…"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <>
                                    {matchCount > 0 && (
                                        <span className="lsh-search-badge">
                                            {matchCount} {matchCount === 1 ? 'rezultat' : 'rezultate'}
                                        </span>
                                    )}
                                    <button
                                        type="button"
                                        className="lsh-search-clear"
                                        onClick={clearSearch}
                                        aria-label="Șterge căutarea"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>
                        <p className="lsh-search-hint">
                            {searchQuery.length >= 2 && matchCount === 0
                                ? 'Niciun rezultat găsit'
                                : 'Exemplu: GDPR, confidențialitate, date personale'
                            }
                        </p>
                    </div>
                </div>
            </section>

            <style jsx>{`
                /* ═══════════════════════════════════════
                 * LEGAL SEARCH HERO — Desktop-first
                 * ═══════════════════════════════════════ */
                .lsh-hero {
                    width: 100%;
                    background: #213170;
                    padding: 96px var(--space-section-px-lg);
                    display: flex;
                    justify-content: center;
                }

                .lsh-hero-inner {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 48px;
                }

                .lsh-hero-text {
                    max-width: 768px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                }

                .lsh-date {
                    text-align: center;
                    color: #fff;
                    font-family: var(--font-heading);
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 28px;
                    margin: 0;
                }

                .lsh-title {
                    text-align: center;
                    color: #fff;
                    font-family: var(--font-heading);
                    font-size: 36px;
                    font-weight: 600;
                    line-height: 44px;
                    margin: 0;
                }

                .lsh-desc {
                    max-width: 768px;
                    text-align: center;
                    color: #fff;
                    font-family: var(--font-heading);
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 28px;
                    margin: 0;
                }

                /* ── Search ── */
                .lsh-search-wrap {
                    width: 100%;
                    max-width: 640px;
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .lsh-search-label {
                    display: flex;
                    align-items: flex-start;
                    gap: 2px;
                    color: #fff;
                    font-family: var(--font-heading);
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 16px;
                }

                .lsh-search-star {
                    color: #fff;
                    font-family: var(--font-body);
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 20px;
                }

                .lsh-search-box {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 14px;
                    background: #fff;
                    border-radius: 8px;
                    box-shadow: 0 1px 2px rgba(10, 13, 18, 0.05);
                    border: 1px solid #D5D7DA;
                }

                .lsh-search-icon {
                    width: 20px;
                    height: 20px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .lsh-search-input {
                    flex: 1;
                    border: none;
                    outline: none;
                    background: transparent;
                    font-family: var(--font-heading);
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 20px;
                    color: #213170;
                }

                .lsh-search-input::placeholder {
                    color: rgba(33, 49, 112, 0.7);
                }

                .lsh-search-hint {
                    color: #BDE0FF;
                    font-family: var(--font-heading);
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 16px;
                    margin: 0;
                }

                /* ── Badge + Clear ── */
                .lsh-search-badge {
                    flex-shrink: 0;
                    padding: 2px 8px;
                    border-radius: 10px;
                    background: #FE5D16;
                    color: #fff;
                    font-size: 12px;
                    font-weight: 600;
                    line-height: 16px;
                    white-space: nowrap;
                }

                .lsh-search-clear {
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 24px;
                    height: 24px;
                    border: none;
                    background: transparent;
                    color: rgba(33, 49, 112, 0.5);
                    cursor: pointer;
                    border-radius: 4px;
                    transition: color 0.2s, background 0.2s;
                    padding: 0;
                }

                .lsh-search-clear:hover {
                    color: #213170;
                    background: rgba(33, 49, 112, 0.08);
                }

                /* ═══ Tablet ═══ */
                @media (max-width: 1024px) {
                    .lsh-hero {
                        padding: 48px var(--space-section-px-md);
                    }
                    .lsh-date {
                        font-size: 16px;
                        line-height: 24px;
                    }
                    .lsh-desc {
                        font-size: 16px;
                        line-height: 24px;
                    }
                }

                /* ═══ Mobile ═══ */
                @media (max-width: 480px) {
                    .lsh-hero {
                        padding: 32px var(--space-section-px-sm);
                    }
                    .lsh-hero-inner {
                        gap: 32px;
                    }
                    .lsh-hero-text {
                        gap: 12px;
                    }
                    .lsh-date {
                        font-size: 14px;
                        line-height: 20px;
                    }
                    .lsh-title {
                        font-size: 28px;
                        line-height: 36px;
                    }
                    .lsh-desc {
                        font-size: 14px;
                        line-height: 20px;
                    }
                }
            `}</style>

            {/* Global styles for dynamically injected <mark> highlights */}
            <style jsx global>{`
                mark.legal-highlight {
                    background: #FFF3CD;
                    color: #213170;
                    padding: 1px 3px;
                    border-radius: 3px;
                    font-weight: inherit;
                    animation: legalHighlightFadeIn 0.3s ease;
                }

                mark.legal-highlight-first {
                    background: #FE5D16;
                    color: #fff;
                    padding: 2px 4px;
                    border-radius: 4px;
                    box-shadow: 0 0 0 2px rgba(254, 93, 22, 0.25);
                }

                @keyframes legalHighlightFadeIn {
                    from { background: transparent; }
                    to { background: #FFF3CD; }
                }
            `}</style>
        </>
    );
}
