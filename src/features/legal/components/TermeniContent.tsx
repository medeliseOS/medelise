'use client';

import { useState } from 'react';

export default function TermeniContent() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <>
            <main className="termeni-page">
                {/* ── Hero ─────────────────────────────────────────── */}
                <section className="termeni-hero">
                    <div className="termeni-hero-inner">
                        <div className="termeni-hero-text">
                            <p className="termeni-date">Ultima actualizare: 12 mai 2025</p>
                            <h1 className="termeni-title">Termeni și condiții</h1>
                        </div>

                        <p className="termeni-desc">
                            Acești termeni stabilesc regulile de utilizare a serviciilor Medelise
                            și condițiile legale aplicabile utilizatorilor platformei noastre.
                            Îți recomandăm să-i parcurgi cu atenție pentru a înțelege drepturile
                            și responsabilitățile tale ca utilizator.
                        </p>

                        {/* Search */}
                        <div className="termeni-search-wrap">
                            <div className="termeni-search-label">
                                <span>Căutare în document</span>
                                <span className="termeni-search-star">*</span>
                            </div>

                            <div className="termeni-search-box">
                                <div className="termeni-search-icon">
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
                                    className="termeni-search-input"
                                    placeholder="Caută cuvinte cheie…"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            <p className="termeni-search-hint">
                                Exemplu: GDPR, confidențialitate, date personale
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <style jsx>{`
                /* ── Page ────────────────────────────────────────── */
                .termeni-page {
                    font-family: var(--font-heading);
                    min-height: 100vh;
                    background: var(--color-white);
                }

                /* ── Hero ────────────────────────────────────────── */
                .termeni-hero {
                    width: 100%;
                    background: #213170;
                    padding: 96px 32px;
                    display: flex;
                    justify-content: center;
                }

                .termeni-hero-inner {
                    width: 100%;
                    max-width: 1280px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 48px;
                }

                /* ── Text block ──────────────────────────────────── */
                .termeni-hero-text {
                    max-width: 768px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                }

                .termeni-date {
                    text-align: center;
                    color: #fff;
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 28px;
                    margin: 0;
                }

                .termeni-title {
                    text-align: center;
                    color: #fff;
                    font-size: 36px;
                    font-weight: 600;
                    line-height: 44px;
                    margin: 0;
                }

                .termeni-desc {
                    max-width: 768px;
                    text-align: center;
                    color: #fff;
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 28px;
                    margin: 0;
                }

                /* ── Search ──────────────────────────────────────── */
                .termeni-search-wrap {
                    width: 100%;
                    max-width: 640px;
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .termeni-search-label {
                    display: flex;
                    align-items: flex-start;
                    gap: 2px;
                    color: #fff;
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 16px;
                }

                .termeni-search-star {
                    color: #fff;
                    font-family: var(--font-body);
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 20px;
                }

                .termeni-search-box {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 14px;
                    background: #fff;
                    border-radius: 8px;
                    box-shadow: 0 1px 2px rgba(10, 13, 18, 0.05);
                    border: 1px solid #D5D7DA;
                }

                .termeni-search-icon {
                    width: 20px;
                    height: 20px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .termeni-search-input {
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

                .termeni-search-input::placeholder {
                    color: rgba(33, 49, 112, 0.7);
                }

                .termeni-search-hint {
                    color: #BDE0FF;
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 16px;
                    margin: 0;
                }

                /* ── Responsive ──────────────────────────────────── */
                @media (max-width: 768px) {
                    .termeni-hero {
                        padding: 64px 20px;
                    }

                    .termeni-title {
                        font-size: 28px;
                        line-height: 36px;
                    }

                    .termeni-desc {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    .termeni-hero-inner {
                        gap: 32px;
                    }
                }
            `}</style>
        </>
    );
}
