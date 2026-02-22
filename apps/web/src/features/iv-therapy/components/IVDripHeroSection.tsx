'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import QuantitySelector from '@/components/ui/QuantitySelector';
import FavoriteButton from '@/components/ui/FavoriteButton';
import DisclaimerPanel from '@/components/ui/DisclaimerPanel';
import StarRating from '@/components/ui/StarRating';

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
                        <DisclaimerPanel text={disclaimer} />
                    )}
                </div>

                {/* ── Right column: all content ── */}
                <div className="ivhero-right">

                    {/* Header */}
                    <div className="ivhero-header">
                        <h1 className="ivhero-title">{title}</h1>
                        <h2 className="ivhero-subtitle">{subtitle}</h2>

                    </div>

                    {/* Price */}
                    <div className="ivhero-price-block">
                        <div className="ivhero-price-row">
                            <span className="ivhero-price-current">{currentPrice} Lei</span>
                        </div>
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
                                        className={`ivhero-vol-btn cursor-pointer font-body font-normal transition-all duration-300 hover:brightness-110 hover:scale-105${selectedVolume === vol ? ' ivhero-vol-btn--active' : ''}`}
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
                        <QuantitySelector value={quantity} onChange={setQuantity} />
                    </div>

                    {/* CTA */}
                    <div className="ivhero-cta-row">
                        <button
                            className="ivhero-btn-schedule cursor-pointer transition-all duration-300 hover:brightness-110 hover:scale-105"
                            onClick={onSchedule}
                        >
                            Programează
                        </button>
                        <FavoriteButton
                            isFavorite={isFavorite}
                            onToggle={() => setIsFavorite((f) => !f)}
                        />
                    </div>
                </div>
            </div>

            {/* ── Disclaimer banner — tablet & mobile ── */}
            {/* Disclaimer banner — hidden by default, shown on tablet/mobile if needed */}

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
                /* Disclaimer — now uses <DisclaimerPanel /> */

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
                /* Stars — now uses <StarRating /> */
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
                    justify-content: center;
                    align-items: center;
                }
                .ivhero-vol-btn:hover { background: rgba(33,49,112,0.06); }
                .ivhero-vol-btn--active {
                    background: var(--color-primary, #213170) !important;
                    color: white !important;
                    border-color: var(--color-primary, #213170) !important;
                }

                /* Quantity control — now uses <QuantitySelector /> */

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
                    padding: 8px 16px;
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
                /* Favorite button — now uses <FavoriteButton /> */

                /* Disclaimer text — now in <DisclaimerPanel /> */

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

                    /* Disclaimer — handled by <DisclaimerPanel /> */

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
                    .ivhero-vol-btn { width: 154px !important; font-size: 18px; line-height: 28px; justify-content: center; }

                    /* Qty display */

                    /* CTA */
                    .ivhero-cta-row { gap: 32px; align-self: stretch; }
                    .ivhero-btn-schedule { font-size: 18px; line-height: 28px; }

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

                    /* Disclaimer — handled by <DisclaimerPanel /> */

                    /* Content */
                    .ivhero-right { width: 100%; padding: 0; gap: 16px; }
                    .ivhero-header { gap: 16px; }

                    /* Title + Subtitle */
                    .ivhero-title { font-size: 16px; font-family: 'Montserrat', sans-serif; font-weight: 600; line-height: 24px; }
                    .ivhero-subtitle { font-size: 12px; line-height: 16px; }

                    /* Rating */
                    /* Stars — handled by <StarRating /> */
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

                    /* CTA */
                    .ivhero-cta-row { gap: 24px; align-self: stretch; }
                    .ivhero-btn-schedule { font-size: 16px; font-weight: 500; line-height: 24px; }

                }
            `}</style>
        </section>
    );
}
