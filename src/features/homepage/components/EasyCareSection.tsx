'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@ui/Button';

/* ═══════════════════════════════════════════════════════════════════════════
 * PLAN DATA
 * ═══════════════════════════════════════════════════════════════════════════ */
const PLANS = [
    {
        id: 'basic',
        name: 'Basic Protect',
        monthlyPrice: 19,
        yearlyPrice: 17,
        description:
            'Serviciul de elită pentru cei care își prețuiesc timpul și sănătatea. Primești prioritate totală: intervenție medicală în maxim 90 de minute în orașele mari și condiții VIP la toate serviciile.',
        features: [
            'Telemedicină 24/7',
            '1 intervenție simplă/an',
            'Acces la portal pacient',
            'Reduceri la servicii suplimentare',
        ],
        badge: null,
    },
    {
        id: 'standard',
        name: 'Standard Protect',
        monthlyPrice: 29,
        yearlyPrice: 26,
        description:
            'Protecția completă pentru sănătatea și timpul tău. Beneficiezi de intervenții rapide și acces prioritar la consultații acasă, exact atunci când ai nevoie. Îți protejezi sănătatea, fără stres și fără pierdere de timp.',
        features: [
            'Telemedicină 24/7',
            '2 intervenții simple/an',
            'Acces rapid la consultație la domiciliu (max 24h)',
            'Discount 25% la servicii extra',
        ],
        badge: 'cel mai popular',
    },
    {
        id: 'premium',
        name: 'Premium Protect',
        monthlyPrice: 49,
        yearlyPrice: 44,
        description:
            'Serviciul de elită pentru cei care își prețuiesc timpul și sănătatea. Primești prioritate totală: intervenție medicală în maxim 90 de minute în orașele mari și condiții VIP la toate serviciile.',
        features: [
            'Telemedicină 24/7',
            '4 intervenții simple/an',
            'Vizită medicală prioritară în 90 minute în orașe mari',
            'Discount 40% la servicii extra',
            'Prioritate garantată la programări complexe și tratamente speciale',
            'Chat Support 24/7',
        ],
        badge: null,
    },
] as const;

/* ═══════════════════════════════════════════════════════════════════════════
 * HELPERS — compute CSS order so the selected card is always in the center
 * ═══════════════════════════════════════════════════════════════════════════ */
function getCardOrder(cardIndex: number, selectedIndex: number): number {
    // We want the selected card in position 1 (center of 0,1,2)
    // The other two cards flank it on left (0) and right (2)
    if (cardIndex === selectedIndex) return 1; // center
    // Cards before selected → left side
    if (cardIndex < selectedIndex) return 0;
    // Cards after selected → right side
    return 2;
}

/* ═══════════════════════════════════════════════════════════════════════════
 * COMPONENT
 * ═══════════════════════════════════════════════════════════════════════════ */
export default function EasyCareSection() {
    const [isYearly, setIsYearly] = useState(false);
    const [activeTab, setActiveTab] = useState(1); // default: Standard Protect
    const [selectedDesktop, setSelectedDesktop] = useState(1); // default: Standard Protect

    const activePlan = PLANS[activeTab];

    return (
        <>
            <style jsx>{`
                /* ═══════════════════════════════════════
                 * §1  BASE — Mobile-first (<768px)
                 * ═══════════════════════════════════════ */
                .easycare {
                    width: 100%;
                    background: var(--color-white);
                    padding: var(--space-12) var(--space-section-px);
                }

                .easycare-inner {
                    max-width: var(--max-width);
                    margin: 0 auto;
                }

                /* ── Header ── */
                .easycare-header {
                    text-align: center;
                    padding: var(--space-4) 0 var(--space-8);
                }

                .easycare-title {
                    font-family: var(--font-heading);
                    font-weight: 600;
                    font-size: 28px;
                    line-height: 36px;
                    color: var(--color-primary);
                    margin: 0 0 var(--space-2);
                }

                .easycare-subtitle {
                    font-family: var(--font-heading);
                    font-size: 16px;
                    line-height: 24px;
                    font-weight: 400;
                    color: var(--color-primary);
                    margin: 0;
                    max-width: none;
                }

                /* ── Toggle (shadow variant — mobile/tablet) ── */
                .easycare-toggle-wrap {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: var(--space-4);
                    margin-bottom: var(--space-6);
                }

                .easycare-toggle {
                    display: inline-flex;
                    align-items: center;
                    background: #F9FAFB;
                    border-radius: 12px;
                    padding: 6px 8px;
                    border: 1px solid #F2F4F7;
                }

                .easycare-toggle-btn {
                    flex: 1;
                    padding: var(--space-2) var(--space-4);
                    border: none;
                    border-radius: var(--radius-main);
                    font-family: var(--font-heading);
                    font-size: 16px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    background: transparent;
                    color: var(--color-text-muted);
                    line-height: 24px;
                    min-width: 100px;
                }

                .easycare-toggle-btn.active {
                    background: var(--color-white);
                    color: var(--color-primary);
                    box-shadow: 0px 2px 4px rgba(52, 64, 81, 0.12);
                }

                .easycare-save-text {
                    font-family: var(--font-body);
                    font-size: 16px;
                    font-weight: 300;
                    color: var(--color-text);
                    line-height: 24px;
                    display: none;
                }

                /* ── Plan Tabs (mobile/tablet only) ── */
                .easycare-tabs {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    margin-bottom: var(--space-4);
                }

                .easycare-tab {
                    flex: 1;
                    padding: var(--space-2) var(--space-5);
                    border: none;
                    background: var(--color-white);
                    border-bottom: 2px solid #E4E7EC;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    font-family: var(--font-heading);
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: var(--color-text-muted);
                    text-align: center;
                }

                .easycare-tab.active {
                    color: var(--color-primary);
                    font-weight: 600;
                    border-bottom-color: var(--color-primary);
                }

                /* ── Single Card (mobile/tablet view) ── */
                .easycare-single-card {
                    padding: var(--space-6);
                    background: var(--color-white);
                    border-radius: var(--radius-main);
                }

                .easycare-single-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: var(--space-6);
                }

                .easycare-single-name {
                    font-family: var(--font-heading);
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 28px;
                    color: var(--color-primary);
                }

                .easycare-single-badge {
                    display: inline-flex;
                    padding: 2px 10px;
                    background: #F0F6FF;
                    border-radius: var(--radius-main);
                    font-family: var(--font-heading);
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    color: var(--color-primary);
                }

                .easycare-single-price {
                    font-family: var(--font-heading);
                    font-weight: 600;
                    font-size: 36px;
                    line-height: 44px;
                    color: var(--color-primary);
                    margin: 0;
                }

                .easycare-single-period {
                    font-family: var(--font-heading);
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    color: var(--color-text-muted);
                    margin: 0 0 var(--space-4);
                }

                .easycare-single-desc {
                    font-family: var(--font-heading);
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    color: var(--color-primary);
                    margin: 0 0 var(--space-4);
                    max-width: none;
                }

                .easycare-single-features {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-4);
                    padding: var(--space-2) 0;
                    margin-bottom: var(--space-6);
                }

                .easycare-single-actions {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-3);
                }

                /* ── Feature row (shared) ── */
                .easycare-feature {
                    display: flex;
                    align-items: center;
                    gap: var(--space-2);
                }

                .easycare-feature-icon {
                    width: 20px;
                    height: 20px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #F0F6FF;
                    border-radius: 50%;
                    overflow: hidden;
                }

                .easycare-feature-text {
                    flex: 1;
                    font-family: var(--font-heading);
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    color: var(--color-primary);
                }

                /* ── Desktop Grid (hidden on mobile/tablet) ── */
                .easycare-grid {
                    display: none;
                }

                /* ═══════════════════════════════════════
                 * §2  TABLET ≥768px
                 * ═══════════════════════════════════════ */
                @media (min-width: 768px) {
                    .easycare {
                        padding: var(--space-16) var(--space-section-px);
                    }

                    .easycare-header {
                        padding: var(--space-4) 0 var(--space-12);
                    }

                    .easycare-title {
                        font-size: var(--text-h2);
                        line-height: 44px;
                    }

                    .easycare-subtitle {
                        font-size: 18px;
                        line-height: 28px;
                    }

                    .easycare-tab {
                        font-size: 18px;
                        line-height: 28px;
                        padding: var(--space-2) var(--space-5);
                    }

                    .easycare-single-name {
                        font-size: 20px;
                    }

                    .easycare-single-price {
                        font-size: 48px;
                        line-height: 60px;
                    }
                }

                /* ═══════════════════════════════════════
                 * §3  DESKTOP ≥1024px
                 *     Switch to 3-card grid, hide tabs
                 * ═══════════════════════════════════════ */
                @media (min-width: 1024px) {
                    .easycare-toggle {
                        background: var(--color-surface-card);
                        border-radius: var(--radius-main);
                        padding: var(--space-1);
                        border: none;
                    }

                    .easycare-toggle-btn.active {
                        background: var(--color-primary);
                        color: var(--color-white);
                        box-shadow: none;
                    }

                    .easycare-toggle-btn {
                        min-width: 160px;
                    }

                    .easycare-save-text {
                        display: block;
                    }

                    .easycare-toggle-wrap {
                        margin-bottom: var(--space-10);
                    }

                    /* Hide tab-based view */
                    .easycare-tabs {
                        display: none;
                    }

                    .easycare-single-card {
                        display: none;
                    }

                    /* ── 3-card grid — full width, no gaps ── */
                    .easycare-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 0;
                    }

                    /* ── Card (desktop) ── */
                    .easycare-card {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        padding: var(--space-8);
                        cursor: pointer;
                        border: 1px solid #E7EBF6;

                        /* Smooth color & order transitions */
                        background: var(--color-white);
                        transition:
                            background 0.45s cubic-bezier(0.4, 0, 0.2, 1),
                            border-color 0.45s cubic-bezier(0.4, 0, 0.2, 1),
                            box-shadow 0.45s cubic-bezier(0.4, 0, 0.2, 1),
                            transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                    }

                    /* First card gets left rounded corners */
                    .easycare-card[data-order="0"] {
                        border-radius: var(--radius-lg) 0 0 var(--radius-lg);
                        border-right: none;
                    }

                    /* Center card (selected) — full border */
                    .easycare-card[data-order="1"] {
                        border-radius: 0;
                    }

                    /* Last card gets right rounded corners */
                    .easycare-card[data-order="2"] {
                        border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
                        border-left: none;
                    }

                    .easycare-card:hover:not(.highlighted) {
                        background: #F5F7FC;
                    }

                    /* ── Selected / highlighted card ── */
                    .easycare-card.highlighted {
                        background: var(--color-primary);
                        border-color: var(--color-primary);
                        transform: scaleY(1.03);
                        box-shadow: 0 20px 60px rgba(33, 49, 112, 0.28);
                        z-index: 2;
                        border-radius: var(--radius-lg);
                    }

                    .easycare-card-header {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: var(--space-6);
                    }

                    .easycare-plan-name {
                        font-family: var(--font-heading);
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 28px;
                        color: var(--color-primary);
                        transition: color 0.45s cubic-bezier(0.4, 0, 0.2, 1);
                    }

                    .highlighted .easycare-plan-name {
                        color: var(--color-white);
                    }

                    .easycare-badge {
                        display: inline-flex;
                        padding: var(--space-1) var(--space-3);
                        background: var(--color-white);
                        border-radius: var(--radius-main);
                        font-family: var(--font-heading);
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 20px;
                        color: var(--color-primary);
                        transition: opacity 0.3s ease;
                    }

                    .highlighted .easycare-badge {
                        background: rgba(255, 255, 255, 0.2);
                        color: var(--color-white);
                    }

                    .easycare-price {
                        font-family: var(--font-heading);
                        font-weight: 600;
                        font-size: 48px;
                        line-height: 60px;
                        color: var(--color-primary);
                        margin: 0;
                        transition: color 0.45s cubic-bezier(0.4, 0, 0.2, 1);
                    }

                    .highlighted .easycare-price {
                        color: var(--color-white);
                    }

                    .easycare-period {
                        font-family: var(--font-heading);
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 24px;
                        color: var(--color-text-muted);
                        margin: 0 0 var(--space-6);
                        transition: color 0.45s cubic-bezier(0.4, 0, 0.2, 1);
                    }

                    .highlighted .easycare-period {
                        color: rgba(255, 255, 255, 0.7);
                    }

                    .easycare-desc {
                        font-family: var(--font-heading);
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 20px;
                        color: var(--color-primary);
                        margin: 0 0 var(--space-6);
                        max-width: none;
                        transition: color 0.45s cubic-bezier(0.4, 0, 0.2, 1);
                    }

                    .highlighted .easycare-desc {
                        color: rgba(255, 255, 255, 0.9);
                    }

                    .easycare-features {
                        display: flex;
                        flex-direction: column;
                        gap: var(--space-4);
                        padding: var(--space-2) 0;
                        margin-bottom: var(--space-8);
                        flex: 1;
                    }

                    .highlighted .easycare-feature-icon {
                        background: rgba(255, 255, 255, 0.2);
                    }

                    .highlighted .easycare-feature-text {
                        color: var(--color-white);
                    }

                    .easycare-actions {
                        display: flex;
                        flex-direction: column;
                        gap: var(--space-3);
                    }
                }
            `}</style>

            <section className="easycare" aria-labelledby="easycare-heading">
                <div className="easycare-inner">
                    {/* ── Header ── */}
                    <div className="easycare-header">
                        <h2 id="easycare-heading" className="easycare-title">
                            Medvita EasyCare
                        </h2>
                        <p className="easycare-subtitle">
                            Ai grijă de tine și de cei dragi, în fiecare zi, cu un singur abonament.
                        </p>
                    </div>

                    {/* ── Toggle Lunar / Anual ── */}
                    <div className="easycare-toggle-wrap">
                        <div className="easycare-toggle">
                            <button
                                type="button"
                                className={`easycare-toggle-btn ${!isYearly ? 'active' : ''}`}
                                onClick={() => setIsYearly(false)}
                            >
                                Lunar
                            </button>
                            <button
                                type="button"
                                className={`easycare-toggle-btn ${isYearly ? 'active' : ''}`}
                                onClick={() => setIsYearly(true)}
                            >
                                Anual
                            </button>
                        </div>
                        <span className="easycare-save-text">
                            Save 10% for yearly payment
                        </span>
                    </div>

                    {/* ═══════════════════════════════════════
                     *  MOBILE / TABLET — Tab-based single card
                     * ═══════════════════════════════════════ */}
                    <div className="easycare-tabs">
                        {PLANS.map((plan, idx) => (
                            <button
                                key={plan.id}
                                type="button"
                                className={`easycare-tab ${activeTab === idx ? 'active' : ''}`}
                                onClick={() => setActiveTab(idx)}
                            >
                                {plan.name}
                            </button>
                        ))}
                    </div>

                    <div className="easycare-single-card">
                        <div className="easycare-single-header">
                            <span className="easycare-single-name">{activePlan.name}</span>
                            {activePlan.badge && (
                                <span className="easycare-single-badge">{activePlan.badge}</span>
                            )}
                        </div>
                        <p className="easycare-single-price">
                            {isYearly ? activePlan.yearlyPrice : activePlan.monthlyPrice}€
                        </p>
                        <p className="easycare-single-period">Pe luna</p>
                        <p className="easycare-single-desc">{activePlan.description}</p>

                        <ul className="easycare-single-features">
                            {activePlan.features.map((feat) => (
                                <li key={feat} className="easycare-feature">
                                    <span className="easycare-feature-icon">
                                        <Image
                                            src="/icons-medelise/md-system/md-ico-check.webp"
                                            alt=""
                                            width={12}
                                            height={12}
                                        />
                                    </span>
                                    <span className="easycare-feature-text">{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="easycare-single-actions">
                            <Button variant="primary" isFullWidth>
                                Activează planul
                            </Button>
                            <Button variant="outline" isFullWidth>
                                Află toate detaliile
                            </Button>
                        </div>
                    </div>

                    {/* ═══════════════════════════════════════
                     *  DESKTOP — Full-width cards with
                     *  click-to-select animation
                     * ═══════════════════════════════════════ */}
                    <div className="easycare-grid">
                        {PLANS.map((plan, idx) => {
                            const isSelected = selectedDesktop === idx;
                            const order = getCardOrder(idx, selectedDesktop);

                            return (
                                <article
                                    key={plan.id}
                                    className={`easycare-card ${isSelected ? 'highlighted' : ''}`}
                                    style={{ order }}
                                    data-order={order}
                                    onClick={() => setSelectedDesktop(idx)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            setSelectedDesktop(idx);
                                        }
                                    }}
                                    aria-pressed={isSelected}
                                >
                                    <div>
                                        <div className="easycare-card-header">
                                            <span className="easycare-plan-name">{plan.name}</span>
                                            {plan.badge && (
                                                <span className="easycare-badge">{plan.badge}</span>
                                            )}
                                        </div>

                                        <p className="easycare-price">
                                            {isYearly ? plan.yearlyPrice : plan.monthlyPrice}€
                                        </p>
                                        <p className="easycare-period">Pe luna</p>
                                        <p className="easycare-desc">{plan.description}</p>

                                        <ul className="easycare-features">
                                            {plan.features.map((feat) => (
                                                <li key={feat} className="easycare-feature">
                                                    <span className="easycare-feature-icon">
                                                        <Image
                                                            src="/icons-medelise/md-system/md-ico-check.webp"
                                                            alt=""
                                                            width={12}
                                                            height={12}
                                                        />
                                                    </span>
                                                    <span className="easycare-feature-text">{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="easycare-actions">
                                        <Button
                                            variant={isSelected ? 'secondary' : 'primary'}
                                            isFullWidth
                                        >
                                            Activează planul
                                        </Button>
                                        <Button
                                            variant="outline"
                                            isFullWidth
                                            style={
                                                isSelected
                                                    ? {
                                                        '--btn-border': 'white',
                                                        '--btn-text': 'white',
                                                        '--btn-bg': 'transparent',
                                                        '--btn-bg-hover': 'rgba(255,255,255,0.1)',
                                                    } as React.CSSProperties
                                                    : undefined
                                            }
                                        >
                                            Află toate detaliile
                                        </Button>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
