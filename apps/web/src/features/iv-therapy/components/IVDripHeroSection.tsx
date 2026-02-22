'use client';

import React, { useState } from 'react';
import Image from 'next/image';

/* ── Types ───────────────────────────────────────────────────────────────── */
export interface IVDripHeroProps {
    /** e.g. "DESHIDRATARE" */
    title: string;
    /** e.g. "Revitalizează și Rehidratează" */
    subtitle: string;
    imageSrc: string;
    imageAlt?: string;
    /** Volume options — e.g. ['250ml', '500ml', '1000ml'] */
    volumeOptions?: string[];
    /** Pricing per volume key */
    pricingVariants?: Record<string, { price: number; oldPrice?: number }>;
    /** Fallback price when no variant selected */
    price: number;
    oldPrice?: number;
    /** Economy text per volume key — e.g. { '500ml': '0,30 Lei/ml vs standard' } */
    economyPerMl?: Record<string, string>;
    benefits: string[];
    reviewCount: number;
    averageRating?: number;
    disclaimer?: string;
    onSchedule?: () => void;
}

/* ── Helpers ─────────────────────────────────────────────────────────────── */
function calcDiscount(price: number, oldPrice: number): string {
    return ((1 - price / oldPrice) * 100).toFixed(2).replace('.', ',');
}

function StarIcons({ count = 5, size = 24 }: { count?: number; size?: number }) {
    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
                <span
                    key={i}
                    style={{
                        display: 'inline-block',
                        width: size,
                        height: size,
                        clipPath:
                            'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)',
                        background: 'var(--color-accent, #FD5D16)',
                    }}
                />
            ))}
        </>
    );
}

/* ── Component ───────────────────────────────────────────────────────────── */
export default function IVDripHeroSection({
    title,
    subtitle,
    imageSrc,
    imageAlt,
    volumeOptions = ['250ml', '500ml', '1000ml'],
    pricingVariants,
    price: defaultPrice,
    oldPrice: defaultOldPrice,
    economyPerMl,
    benefits,
    reviewCount,
    averageRating = 5,
    disclaimer =
    'Imaginea are rol exclusiv ilustrativ, iar culorile soluției prezentate nu reflectă neapărat culoarea reală a tratamentului. Pigmentarea este folosită în scopuri de marketing și diferențiere vizuală între produse. Efectele medicale menționate sunt reale și susținute de ingredientele active din compoziție.',
    onSchedule,
}: IVDripHeroProps) {
    const [selectedVolume, setSelectedVolume] = useState<string>(
        volumeOptions[volumeOptions.length - 1] ?? ''
    );
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);

    const variant = pricingVariants?.[selectedVolume];
    const currentPrice = variant?.price ?? defaultPrice;
    const currentOldPrice = variant?.oldPrice ?? defaultOldPrice;
    const discountPct =
        currentOldPrice ? calcDiscount(currentPrice, currentOldPrice) : null;
    const economy = economyPerMl?.[selectedVolume] ?? null;

    return (
        <section className="ivhero-section">
            <div className="ivhero-container">

                {/* ── Left column: image + disclaimer (desktop only) ── */}
                <div className="ivhero-left">
                    <div className="ivhero-image-wrapper">
                        <Image
                            src={imageSrc}
                            alt={imageAlt ?? title}
                            fill
                            priority
                            className="ivhero-image"
                            style={{ objectFit: 'contain', objectPosition: 'center' }}
                        />
                    </div>
                    {disclaimer && (
                        <div className="ivhero-disclaimer-desktop">
                            <span className="ivhero-disclaimer-text">{disclaimer}</span>
                        </div>
                    )}
                </div>

                {/* ── Right column: all content ── */}
                <div className="ivhero-right">

                    {/* Header */}
                    <div className="ivhero-header">
                        <h1 className="ivhero-title">{title}</h1>
                        <h2 className="ivhero-subtitle">{subtitle}</h2>
                        <div className="ivhero-rating-row">
                            <div className="ivhero-stars">
                                <StarIcons count={Math.round(averageRating)} size={20} />
                            </div>
                            <span className="ivhero-review-count">{reviewCount} Recenzii</span>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="ivhero-price-block">
                        <div className="ivhero-price-row">
                            <span className="ivhero-price-current">{currentPrice} Lei</span>
                            {currentOldPrice && (
                                <span className="ivhero-price-old">{currentOldPrice} Lei</span>
                            )}
                        </div>
                        {discountPct && (
                            <span className="ivhero-discount">Reducere de {discountPct}%</span>
                        )}
                        {economy && (
                            <div className="ivhero-economy">
                                <span className="ivhero-eco-label">Economisește acum!</span>
                                <span className="ivhero-eco-value">{economy}</span>
                            </div>
                        )}
                    </div>

                    {/* Benefits */}
                    <div className="ivhero-benefits">
                        <p className="ivhero-benefits-title">Beneficii:</p>
                        {benefits.map((b, i) => (
                            <div key={i} className="ivhero-benefit-item">{b}</div>
                        ))}
                    </div>

                    {/* Volume selector */}
                    {volumeOptions.length > 0 && (
                        <div className="ivhero-selector-block">
                            <span className="ivhero-selector-label">Selectează volumul :</span>
                            <div className="ivhero-vol-options">
                                {volumeOptions.map((vol) => (
                                    <button
                                        key={vol}
                                        className={`ivhero-vol-btn${selectedVolume === vol ? ' ivhero-vol-btn--active' : ''}`}
                                        onClick={() => setSelectedVolume(vol)}
                                    >
                                        {vol}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Quantity selector */}
                    <div className="ivhero-selector-block">
                        <span className="ivhero-selector-label">Selectează Cantitatea :</span>
                        <div className="ivhero-qty-control">
                            <button
                                className="ivhero-qty-btn"
                                aria-label="Scade cantitatea"
                                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                            >
                                <span className="ivhero-qty-minus" />
                            </button>
                            <span className="ivhero-qty-display">{quantity}</span>
                            <button
                                className="ivhero-qty-btn ivhero-qty-btn--last"
                                aria-label="Creste cantitatea"
                                onClick={() => setQuantity((q) => q + 1)}
                            >
                                <span className="ivhero-qty-plus">
                                    <span className="bar-h" />
                                    <span className="bar-v" />
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="ivhero-cta-row">
                        <button className="ivhero-btn-schedule" onClick={onSchedule}>
                            Programează
                        </button>
                        <button
                            className={`ivhero-btn-fav${isFavorite ? ' ivhero-btn-fav--active' : ''}`}
                            aria-label={isFavorite ? 'Elimină de la favorite' : 'Adaugă la favorite'}
                            onClick={() => setIsFavorite((f) => !f)}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24"
                                fill={isFavorite ? 'var(--color-error, #e03)' : 'none'}
                                stroke={isFavorite ? 'var(--color-error, #e03)' : 'var(--color-primary, #213170)'}
                                strokeWidth="1.5"
                                style={{ transition: 'fill 0.2s, stroke 0.2s' }}
                            >
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Disclaimer banner — tablet & mobile ── */}
            {disclaimer && (
                <div className="ivhero-disclaimer-banner">
                    <span className="ivhero-disclaimer-text">{disclaimer}</span>
                </div>
            )}

            {/* ──────────────────── STYLES ──────────────────── */}
            <style jsx>{`
                /* ═══ BASE (Desktop ≥ 1025px) ═══════════════════════════════════════ */
                .ivhero-section {
                    width: 100%;
                    max-width: 1920px;
                    margin: 0 auto;
                    background: white;
                    font-family: 'Montserrat', sans-serif;
                }
                .ivhero-container {
                    width: 100%;
                    padding: 64px;
                    display: flex;
                    flex-direction: row;
                    gap: 32px;
                    align-items: flex-start;
                    justify-content: flex-start;
                    box-sizing: border-box;
                }

                /* ── Left column ── */
                .ivhero-left {
                    flex: 1 1 0;
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 32px;
                }
                .ivhero-image-wrapper {
                    flex: 1 1 0;
                    align-self: stretch;
                    position: relative;
                    padding: 16px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 400px;
                }
                .ivhero-image {
                    border-radius: 8px;
                    object-fit: contain;
                }
                .ivhero-disclaimer-desktop {
                    width: 100%;
                    background: #F9FAFB;
                    border-radius: 8px;
                    padding: 10px 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                /* Hidden on tablet/mobile — banner used instead */
                .ivhero-disclaimer-banner { display: none; }

                /* ── Right column ── */
                .ivhero-right {
                    flex: 1 1 0;
                    align-self: stretch;
                    padding: 16px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: 32px;
                }

                /* Header */
                .ivhero-header {
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .ivhero-title {
                    align-self: stretch;
                    color: var(--color-primary, #213170);
                    font-size: 28px;
                    font-family: 'Inter', sans-serif;
                    font-weight: 600;
                    line-height: 36px;
                    margin: 0;
                }
                .ivhero-subtitle {
                    align-self: stretch;
                    color: var(--color-primary, #213170);
                    font-size: 18px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 600;
                    line-height: 28px;
                    margin: 0;
                }
                .ivhero-rating-row {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }
                .ivhero-stars {
                    display: inline-flex;
                    gap: 2px;
                }
                .ivhero-review-count {
                    color: var(--color-primary, #213170);
                    font-size: 18px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 500;
                    line-height: 28px;
                }

                /* Price */
                .ivhero-price-block {
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
                .ivhero-price-row {
                    display: inline-flex;
                    align-items: flex-start;
                    gap: 8px;
                }
                .ivhero-price-current {
                    color: var(--color-primary, #213170);
                    font-size: 48px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 600;
                    line-height: 60px;
                }
                .ivhero-price-old {
                    color: #FE5D16;
                    font-size: 28px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 700;
                    text-decoration: line-through;
                    line-height: 36px;
                }
                .ivhero-discount {
                    flex: 1 1 0;
                    color: #FE5D16;
                    font-size: 18px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 500;
                    line-height: 28px;
                }
                .ivhero-economy {
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .ivhero-eco-label {
                    align-self: stretch;
                    color: var(--color-primary, #213170);
                    font-size: 18px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 500;
                    line-height: 28px;
                }
                .ivhero-eco-value {
                    align-self: stretch;
                    color: var(--color-primary, #213170);
                    font-size: 18px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 700;
                    line-height: 28px;
                }

                /* Benefits */
                .ivhero-benefits {
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .ivhero-benefits-title {
                    align-self: stretch;
                    color: var(--color-primary, #213170);
                    font-size: 18px;
                    font-family: 'Open Sans', sans-serif;
                    font-weight: 600;
                    line-height: 28px;
                    margin: 0;
                }
                .ivhero-benefit-item {
                    align-self: stretch;
                    color: var(--color-primary, #213170);
                    font-size: 18px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 400;
                    line-height: 28px;
                    padding-left: 14px;
                    position: relative;
                }
                .ivhero-benefit-item::before {
                    content: '•';
                    position: absolute;
                    left: 0;
                    color: var(--color-primary, #213170);
                }

                /* Selectors */
                .ivhero-selector-block {
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .ivhero-selector-label {
                    color: var(--color-primary, #213170);
                    font-size: 18px;
                    font-family: 'Open Sans', sans-serif;
                    font-weight: 600;
                    line-height: 28px;
                }

                /* Volume buttons — PILL, left-aligned, responsive gap */
                .ivhero-vol-options {
                    align-self: stretch;
                    display: inline-flex;
                    justify-content: flex-start;
                    align-items: center;
                    gap: clamp(32px, 2.5vw, 48px);
                }
                .ivhero-vol-btn {
                    width: 154px;
                    padding: 10px 20px;
                    border-radius: 100px;
                    border: 1px solid #CED2DA;
                    background: white;
                    color: var(--color-primary, #213170);
                    font-size: 18px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 500;
                    line-height: 28px;
                    cursor: pointer;
                    transition: background 0.15s, color 0.15s, border-color 0.15s;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .ivhero-vol-btn:hover { background: rgba(33,49,112,0.06); }
                .ivhero-vol-btn--active {
                    background: var(--color-primary, #213170) !important;
                    color: white !important;
                    border-color: var(--color-primary, #213170) !important;
                }

                /* Quantity control — PILL, hug content */
                .ivhero-qty-control {
                    display: inline-flex;
                    width: fit-content;
                    border: 1px solid #CED2DA;
                    border-radius: 100px;
                    overflow: hidden;
                }
                .ivhero-qty-btn {
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
                .ivhero-qty-btn--last { border-right: none; }
                .ivhero-qty-display {
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
                .ivhero-qty-minus {
                    display: block;
                    width: 20px;
                    height: 2px;
                    background: var(--color-primary, #213170);
                }
                /* plus icon */
                .ivhero-qty-plus {
                    display: block;
                    width: 20px;
                    height: 20px;
                    position: relative;
                }
                .bar-h {
                    position: absolute;
                    top: 9px;
                    left: 0;
                    width: 20px;
                    height: 2px;
                    background: var(--color-primary, #213170);
                }
                .bar-v {
                    position: absolute;
                    top: 0;
                    left: 9px;
                    width: 2px;
                    height: 20px;
                    background: var(--color-primary, #213170);
                }

                /* CTA row */
                .ivhero-cta-row {
                    align-self: stretch;
                    display: inline-flex;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 32px;
                }
                .ivhero-btn-schedule {
                    flex: 1 1 0;
                    padding: 10px 20px;
                    background: var(--color-primary, #213170);
                    border: none;
                    border-radius: 100px;
                    color: white;
                    font-size: 18px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 500;
                    line-height: 28px;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                    transition: opacity 0.15s;
                }
                .ivhero-btn-schedule:hover { opacity: 0.88; }
                .ivhero-btn-fav {
                    width: 44px;
                    height: 44px;
                    border-radius: 100px;
                    border: 1px solid #97A1AF;
                    background: white;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: border-color 0.2s, transform 0.15s;
                    flex-shrink: 0;
                }
                .ivhero-btn-fav:active { transform: scale(0.9); }
                .ivhero-btn-fav--active { border-color: var(--color-error, #e03); }

                /* Disclaimer text shared */
                .ivhero-disclaimer-text {
                    flex: 1;
                    text-align: center;
                    color: var(--color-primary, #213170);
                    font-size: 14px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 400;
                    line-height: 20px;
                    word-wrap: break-word;
                }

                /* ═══ TABLET (768px – 1024px) ═══════════════════════════════════════ */
                @media (max-width: 1024px) {
                    .ivhero-container {
                        padding: 32px;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 32px;
                    }
                    /* Left column: image + disclaimer stacked */
                    .ivhero-left { width: 100%; align-self: auto; gap: 16px; flex-direction: column; justify-content: flex-start; }
                    .ivhero-image-wrapper { padding: 0; height: 737px; min-height: unset; flex: none; }

                    /* Disclaimer — VISIBLE inside left col on tablet (NOT separate banner) */
                    .ivhero-disclaimer-desktop {
                        display: flex;
                        width: 100%;
                        background: #F9FAFB;
                        border-radius: 8px;
                        padding: 10px 20px;
                        justify-content: center;
                        align-items: center;
                    }
                    .ivhero-disclaimer-desktop .ivhero-disclaimer-text { font-size: 12px; line-height: 16px; }
                    /* Hide bottom banner on tablet — disclaimer is inside left col */
                    .ivhero-disclaimer-banner { display: none; }

                    /* Content */
                    .ivhero-right { width: 100%; padding: 0; gap: 24px; }
                    .ivhero-header { gap: 16px; }
                    .ivhero-title { font-size: 24px; font-family: 'Montserrat', sans-serif; line-height: 32px; }
                    .ivhero-subtitle { font-size: 18px; line-height: 28px; }
                    .ivhero-review-count { font-size: 18px; line-height: 28px; text-align: center; }
                    .ivhero-price-current { font-size: 20px; font-weight: 700; line-height: 28px; text-align: center; }
                    .ivhero-price-old { font-size: 16px; line-height: 24px; text-align: center; }
                    .ivhero-discount { font-size: 18px; line-height: 28px; }
                    .ivhero-eco-label { font-size: 18px; line-height: 28px; }
                    .ivhero-eco-value { font-size: 18px; line-height: 28px; }
                    .ivhero-benefits-title { font-size: 18px; line-height: 28px; font-family: 'Montserrat', sans-serif; }
                    .ivhero-benefit-item { font-size: 16px; line-height: 24px; }

                    /* Selector labels — Montserrat 600 */
                    .ivhero-selector-label { font-size: 18px; font-family: 'Montserrat', sans-serif; font-weight: 600; line-height: 28px; }

                    /* Volume buttons — gap tablet clamp 16-32px, flex-start */
                    .ivhero-vol-options { gap: clamp(16px, 2vw, 32px); justify-content: flex-start; width: 100%; }
                    .ivhero-vol-btn { width: 154px !important; font-size: 18px; line-height: 28px; justify-content: space-between; }

                    /* Qty display */
                    .ivhero-qty-display { font-size: 18px; line-height: 28px; font-family: 'Open Sans', sans-serif; }

                    /* CTA */
                    .ivhero-cta-row { gap: 32px; align-self: stretch; }
                    .ivhero-btn-schedule { font-size: 18px; line-height: 28px; }
                    .ivhero-btn-fav { border-color: #CED2DA; }
                }

                /* ═══ MOBILE (≤ 767px) ═══════════════════════════════════════════════ */
                @media (max-width: 767px) {
                    .ivhero-container {
                        padding: 16px;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 32px;
                    }

                    /* Left column: image + disclaimer stacked */
                    .ivhero-left { width: 100%; gap: 16px; flex-direction: column; justify-content: flex-start; }
                    .ivhero-image-wrapper { padding: 0; height: 359px; min-height: unset; flex: none; }

                    /* Disclaimer — VISIBLE inside left col on mobile (NOT separate banner) */
                    .ivhero-disclaimer-desktop {
                        display: flex;
                        width: 100%;
                        background: #F2F4F7;
                        border-radius: 8px;
                        padding: 10px 20px;
                        justify-content: center;
                        align-items: center;
                    }
                    .ivhero-disclaimer-desktop .ivhero-disclaimer-text { font-size: 12px; line-height: 16px; }
                    /* Hide bottom banner — disclaimer is inside left col */
                    .ivhero-disclaimer-banner { display: none; }

                    /* Content */
                    .ivhero-right { width: 100%; padding: 0; gap: 16px; }
                    .ivhero-header { gap: 16px; }

                    /* Title + Subtitle */
                    .ivhero-title { font-size: 16px; font-family: 'Montserrat', sans-serif; font-weight: 600; line-height: 24px; }
                    .ivhero-subtitle { font-size: 12px; line-height: 16px; }

                    /* Rating */
                    .ivhero-stars > span { width: 18px !important; height: 18px !important; }
                    .ivhero-review-count { font-size: 14px; line-height: 20px; font-weight: 500; }

                    /* Price */
                    .ivhero-price-current { font-size: 16px; font-weight: 700; line-height: 24px; }
                    .ivhero-price-old { font-size: 14px; font-weight: 700; line-height: 20px; }
                    .ivhero-discount { font-size: 16px; font-weight: 500; line-height: 24px; }
                    .ivhero-eco-label { font-size: 16px; font-weight: 500; line-height: 24px; }
                    .ivhero-eco-value { font-size: 16px; font-weight: 700; line-height: 24px; }

                    /* Benefits */
                    .ivhero-benefits-title { font-size: 16px; font-weight: 600; line-height: 24px; font-family: 'Montserrat', sans-serif; text-align: left; }
                    .ivhero-benefit-item { font-size: 14px; line-height: 20px; }

                    /* Selectors */
                    .ivhero-selector-block { gap: 16px; }
                    .ivhero-selector-label { font-size: 16px; font-family: 'Montserrat', sans-serif; font-weight: 500; line-height: 24px; }

                    /* Volume buttons — gap mobile clamp 8-16px, flex-start, auto width */
                    .ivhero-vol-options { gap: clamp(8px, 3vw, 16px); justify-content: flex-start; width: 100%; }
                    .ivhero-vol-btn { width: auto !important; flex: none; font-size: 14px; line-height: 20px; justify-content: center; padding: 10px 20px; }

                    /* Qty — hug content, align left, padding 8px 16px, Montserrat 14/600 */
                    .ivhero-qty-control { width: fit-content; }
                    .ivhero-qty-btn { padding: 8px 16px; }
                    .ivhero-qty-display { font-size: 14px; font-weight: 600; line-height: 20px; font-family: 'Montserrat', sans-serif; padding: 8px 16px; }

                    /* CTA */
                    .ivhero-cta-row { gap: 24px; align-self: stretch; }
                    .ivhero-btn-schedule { font-size: 16px; font-weight: 500; line-height: 24px; }
                    .ivhero-btn-fav { border-color: #CED2DA; }
                }
            `}</style>
        </section>
    );
}
