'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import QuantitySelector from '@/components/ui/QuantitySelector';
import FavoriteButton from '@/components/ui/FavoriteButton';
import DisclaimerPanel from '@/components/ui/DisclaimerPanel';

/* ── Types (purged: oldPrice, economyPerMl, reviewCount, averageRating) ── */
export interface IVDripHeroProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt?: string;
    volumeOptions?: string[];
    pricingVariants?: Record<string, { price: number; oldPrice?: number }>;
    price: number;
    oldPrice?: number;
    economyPerMl?: Record<string, string>;
    benefits: string[];
    reviewCount?: number;
    averageRating?: number;
    disclaimer?: string;
    onSchedule?: () => void;
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
    benefits,
    disclaimer = 'Info: Aspectul produsului este ilustrativ. Eficacitatea medicală este garantată de formula activă, indiferent de variațiile de culoare.',
    onSchedule,
}: IVDripHeroProps) {
    const [selectedVolume, setSelectedVolume] = useState(
        volumeOptions[volumeOptions.length - 1] ?? ''
    );
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);

    const currentPrice = pricingVariants?.[selectedVolume]?.price ?? defaultPrice;

    return (
        <section className="ivhero-section">
            <div className="ivhero-container">

                {/* ── Left: Image + Disclaimer ── */}
                <div className="ivhero-left">
                    <div className="ivhero-image-wrapper">
                        <Image
                            src={imageSrc}
                            alt={imageAlt ?? title}
                            fill
                            priority
                            className="rounded-lg object-contain object-center"
                        />
                    </div>
                    {disclaimer && <DisclaimerPanel text={disclaimer} />}
                </div>

                {/* ── Right: Content ── */}
                <div className="ivhero-right">

                    {/* Header */}
                    <div className="ivhero-header">
                        <h1 className="ivhero-title">{title}</h1>
                        <h2 className="ivhero-subtitle">{subtitle}</h2>
                    </div>

                    {/* Price */}
                    <div className="ivhero-price-block">
                        <span className="ivhero-price-current">{currentPrice} Lei</span>
                    </div>

                    {/* Benefits */}
                    <div className="ivhero-benefits">
                        <p className="ivhero-benefits-title">Beneficii:</p>
                        {benefits.map((b, i) => (
                            <div key={i} className="ivhero-benefit-item">{b}</div>
                        ))}
                    </div>

                    {/* Volume Selector */}
                    {volumeOptions.length > 0 && (
                        <div className="ivhero-selector-block">
                            <span className="ivhero-selector-label">Selectează volumul :</span>
                            <div className="ivhero-vol-options">
                                {volumeOptions.map((vol) => (
                                    <button
                                        key={vol}
                                        onClick={() => setSelectedVolume(vol)}
                                        className={`ivhero-vol-btn cursor-pointer transition-all duration-300 hover:brightness-110 hover:scale-105${selectedVolume === vol ? ' ivhero-vol-btn--active' : ''}`}
                                    >
                                        {vol}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Quantity Selector */}
                    <div className="ivhero-selector-block">
                        <span className="ivhero-selector-label">Selectează Cantitatea :</span>
                        <QuantitySelector value={quantity} onChange={setQuantity} />
                    </div>

                    {/* CTA */}
                    <div className="ivhero-cta-row">
                        <button
                            onClick={onSchedule}
                            className="ivhero-btn-schedule cursor-pointer transition-all duration-300 hover:brightness-110 hover:scale-105"
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

            {/* ──────────────── STYLES ──────────────── */}
            <style jsx>{`
                .ivhero-section {
                    width: 100%;
                    max-width: 1920px;
                    margin: 0 auto;
                    background: white;
                    font-family: var(--font-heading);
                }

                /* ═══ MOBILE-FIRST BASE (< 768px) ═══ */
                .ivhero-container {
                    width: 100%;
                    padding: 16px;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    align-items: flex-start;
                }
                .ivhero-left {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .ivhero-image-wrapper {
                    position: relative;
                    width: 100%;
                    height: 359px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .ivhero-right {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .ivhero-header {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .ivhero-title {
                    color: var(--color-primary);
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 1.5;
                    margin: 0;
                }
                .ivhero-subtitle {
                    color: var(--color-primary);
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 1.5;
                    margin: 0;
                }
                .ivhero-price-block {
                    display: flex;
                    align-items: flex-start;
                    gap: 8px;
                }
                .ivhero-price-current {
                    color: var(--color-primary);
                    font-size: 24px;
                    font-weight: 700;
                    line-height: 1.5;
                }
                .ivhero-benefits {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .ivhero-benefits-title {
                    color: var(--color-primary);
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 1.5;
                    margin: 0;
                }
                .ivhero-benefit-item {
                    color: var(--color-primary);
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 1.5;
                    padding-left: 14px;
                    position: relative;
                }
                .ivhero-benefit-item::before {
                    content: '·';
                    position: absolute;
                    left: 0;
                    color: var(--color-primary);
                }
                .ivhero-selector-block {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .ivhero-selector-label {
                    color: var(--color-primary);
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 1.5;
                }
                .ivhero-vol-options {
                    width: 100%;
                    display: inline-flex;
                    align-items: center;
                    gap: clamp(8px, 3vw, 16px);
                }
                .ivhero-vol-btn {
                    padding: 10px 20px;
                    border-radius: 100px;
                    border: 1px solid var(--color-border-light);
                    background: white;
                    color: var(--color-primary);
                    font-size: 14px;
                    font-family: var(--font-heading);
                    font-weight: 500;
                    line-height: 1.5;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: background 0.15s, color 0.15s, border-color 0.15s;
                }
                .ivhero-vol-btn:hover { background: rgba(33, 49, 112, 0.06); }
                .ivhero-vol-btn--active {
                    background: var(--color-primary) !important;
                    color: white !important;
                    border-color: var(--color-primary) !important;
                }
                .ivhero-cta-row {
                    width: 100%;
                    display: inline-flex;
                    align-items: center;
                    gap: 24px;
                }
                .ivhero-btn-schedule {
                    flex: 1;
                    padding: 8px 16px;
                    background: var(--color-primary);
                    border: none;
                    border-radius: 100px;
                    color: white;
                    font-size: 18px;
                    font-family: var(--font-heading);
                    font-weight: 500;
                    line-height: 1.5;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                    transition: opacity 0.15s;
                }
                .ivhero-btn-schedule:hover { opacity: 0.88; }

                /* ═══ TABLET (768px – 1024px) ═══ */
                @media (min-width: 768px) {
                    .ivhero-container { padding: 32px; gap: 32px; }
                    .ivhero-image-wrapper { height: 737px; }
                    .ivhero-right { gap: 24px; }
                    .ivhero-title { font-size: 32px; }
                    .ivhero-subtitle { font-size: 22px; }
                    .ivhero-benefits-title { font-size: 22px; }
                    .ivhero-benefit-item { font-size: 16px; }
                    .ivhero-selector-label { font-size: 22px; font-weight: 600; }
                    .ivhero-selector-block { gap: 12px; }
                    .ivhero-vol-options { gap: clamp(16px, 2vw, 32px); }
                    .ivhero-vol-btn { width: 154px; font-size: 14px; }
                    .ivhero-cta-row { gap: 32px; }
                    .ivhero-btn-schedule { font-size: 18px; line-height: 28px; }
                }

                /* ═══ DESKTOP (≥ 1025px) ═══ */
                @media (min-width: 1025px) {
                    .ivhero-container {
                        padding: 64px;
                        flex-direction: row;
                        gap: 32px;
                    }
                    .ivhero-left {
                        flex: 1 1 0;
                        align-self: stretch;
                        justify-content: center;
                        gap: 32px;
                    }
                    .ivhero-image-wrapper {
                        flex: 1 1 0;
                        align-self: stretch;
                        padding: 16px;
                        height: auto;
                        min-height: 400px;
                    }
                    .ivhero-right {
                        flex: 1 1 0;
                        align-self: stretch;
                        padding: 16px;
                        gap: 32px;
                    }
                    .ivhero-title { font-size: 48px; line-height: 1.6; }
                    .ivhero-subtitle { font-size: 24px; line-height: 1.6; }
                    .ivhero-price-current { font-size: 48px; font-weight: 600; line-height: 1.6; }
                    .ivhero-benefits-title { font-size: 24px; line-height: 1.6; }
                    .ivhero-benefit-item { font-size: 18px; line-height: 1.6; }
                    .ivhero-selector-label { font-size: 24px; font-weight: 600; line-height: 1.6; }
                    .ivhero-selector-block { gap: 12px; }
                    .ivhero-vol-options { gap: clamp(32px, 2.5vw, 48px); }
                    .ivhero-vol-btn { width: 154px; font-size: 16px; line-height: 1.6; }
                    .ivhero-cta-row { gap: 32px; }
                }
            `}</style>
        </section>
    );
}
