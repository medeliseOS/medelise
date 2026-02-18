'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@ui/Button';
import IVWhySection from './IVWhySection';
import IVIdealForSection from './IVIdealForSection';
import type { IVWhyFeature } from './IVWhySection';
import IVClinicalStudiesSection, { IVClinicalStudy } from './IVClinicalStudiesSection';
import TestimonialsSection from '@features/homepage/components/TestimonialsSection';
import IVQualitySection from './IVQualitySection';

// Removed inline IVDripReview interface as it should be enhancing, but for now I'm augmenting the existing component.
// Actually I will continue to use local interfaces if I don't import them, BUT
// I should import from types.ts to use the new PricingVariants support.
import { IVDripProductProps } from './iv-drip/types';




/* ── Component ── */
export default function IVDripProductPage({
    id,
    title,
    subtitle,
    imageSrc,
    imageAlt,
    price,
    oldPrice,
    volumeOptions = ['500ml', '1000ml'],
    economyPerMl,
    benefits,
    description,
    reviews,
    reviewCount,
    averageRating = 5,
    disclaimer = 'Imaginea are rol exclusiv ilustrativ, iar culorile soluției prezentate nu reflectă neapărat culoarea reală a tratamentului. Pigmentarea este folosită în scopuri de marketing și diferențiere vizuală între produse. Efectele medicale menționate sunt reale și susținute de ingredientele active din compoziție.',
    whyHeading,
    whyIntro,
    whyFeatures,
    idealForItems,
    clinicalStudies,
    qualityBagImageSrc,
    pricingVariants,
}: IVDripProductProps) {
    const [selectedVolume, setSelectedVolume] = useState(volumeOptions[0]);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState<'descriere' | 'recenzii'>('descriere');
    const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    // Determine current price based on selected volume
    const currentVariant = pricingVariants ? pricingVariants[selectedVolume] : null;
    const currentPrice = currentVariant ? currentVariant.price : price;
    const currentOldPrice = currentVariant ? currentVariant.oldPrice : oldPrice;

    const totalPrice = currentPrice * quantity;
    const discountPercent = currentOldPrice ? Math.round((1 - currentPrice / currentOldPrice) * 100) : 0;
    const volumeIndex = volumeOptions.indexOf(selectedVolume);

    // Dynamic Economy Calculation
    // Logic: Economy/ml = (OldPrice/ml) - (NewPrice/ml)
    // OR just display savings per ml if requested.
    // The previous hardcoded value "0,50 Lei/ml" for 500ml (300 vs 450)
    // 450/500 = 0.9; 300/500 = 0.6; Diff = 0.3. The user asked for "correct calculator".
    // I will use strict math: (Old - New) / Volume.

    // Helper to parse volume string to number (e.g. "500ml" -> 500)
    const parseVolume = (vol: string) => parseInt(vol.replace(/\D/g, ''), 10) || 0;
    const volNum = parseVolume(selectedVolume);

    let calculatedEconomyText = null;

    // Only calculate if input has old price and we have a valid volume number
    if (currentOldPrice && volNum > 0) {
        // Calculate savings based on (Old Price - New Price)
        const savings = currentOldPrice - currentPrice;

        // Calculate savings per ml
        const economyPerMlValue = savings / volNum;

        if (economyPerMlValue > 0) {
            // Format to 2 decimals, replace dot with comma for Romanian locale style
            const formattedEco = economyPerMlValue.toFixed(2).replace('.', ',');
            calculatedEconomyText = `${formattedEco} Lei/ml`;
        }
    }

    // Display string: prefer calculated, fall back to props
    const displayEconomy = calculatedEconomyText
        ? `${calculatedEconomyText} vs prețul standard`
        : (economyPerMl && economyPerMl[volumeIndex] ? `${economyPerMl[volumeIndex]} vs prețul standard` : null);





    const handleIncrement = () => setQuantity(q => q + 1);
    const handleDecrement = () => setQuantity(q => Math.max(1, q - 1));

    const handleAddToCart = () => {
        const item = {
            id,
            name: title,
            volume: selectedVolume,
            quantity,
            price: currentPrice,
            total: totalPrice,
        };
        console.log('Added to cart:', item);
        alert(`Adăugat în coș:\n${item.name} (${item.volume})\nCantitate: ${item.quantity}\nTotal: ${item.total} Lei`);
    };

    /* Star rendering helper */
    const renderStars = (rating: number) =>
        [1, 2, 3, 4, 5].map(i => (
            <div key={i} className={i <= rating ? 'drez-star-icon' : 'drez-star-icon-empty'} />
        ));

    return (
        <div className="drez-page">
            <div className="drez-container">
                <div className="drez-main-row">
                    {/* Left Column: Image + Disclaimer */}
                    <div className="drez-left-column">
                        <div className="drez-image-wrapper">
                            <Image
                                src={imageSrc}
                                alt={imageAlt || title}
                                fill
                                priority
                                className="drez-image"
                                style={{ objectFit: 'contain', objectPosition: 'center' }}
                            />
                        </div>
                        {disclaimer && <div className="drez-disclaimer">{disclaimer}</div>}
                    </div>

                    {/* Content */}
                    <div className="drez-content">
                        {/* Header */}
                        <div className="drez-header-group">
                            <h1 className="drez-title">{title}</h1>
                            <h2 className="drez-subtitle">{subtitle}</h2>
                            <div className="drez-rating-row">
                                <div className="drez-stars">{renderStars(averageRating)}</div>
                                <span className="drez-review-count">{reviewCount} Recenzii</span>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="drez-price-group">
                            <div className="drez-price-row">
                                <span className="drez-price-current">{currentPrice} Lei</span>
                                {currentOldPrice && <span className="drez-price-old">{currentOldPrice} Lei</span>}
                            </div>
                            {currentOldPrice && (
                                <div className="drez-discount-badge">Reducere de {discountPercent}%!</div>
                            )}
                            {displayEconomy && (
                                <div className="drez-economy-group">
                                    <span className="drez-eco-label">Economisește acum!</span>
                                    <span className="drez-eco-value">
                                        {displayEconomy}
                                    </span>
                                </div>
                            )}

                            {/* Benefits */}
                            <div className="drez-benefits-group">
                                <h3 className="drez-benefits-title">Beneficii:</h3>
                                <ul className="drez-benefits-list">
                                    {benefits.map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Selectors */}
                            <div className="drez-selectors">
                                {volumeOptions.length > 1 && (
                                    <div className="drez-selector-block">
                                        <span className="drez-selector-label">Selectează volumul :</span>
                                        <div className="drez-volume-options">
                                            {volumeOptions.map(vol => (
                                                <Button
                                                    key={vol}
                                                    variant={selectedVolume === vol ? 'primary' : 'outline'}
                                                    onClick={() => setSelectedVolume(vol)}
                                                    className="drez-vol-btn" // Custom width class
                                                >
                                                    {vol}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="drez-selector-block">
                                    <span className="drez-selector-label">Selectează Cantitatea :</span>
                                    <div className="drez-qty-control">
                                        <button className="drez-qty-btn" onClick={handleDecrement} aria-label="Scade cantitatea">
                                            <div className="drez-qty-minus" />
                                        </button>
                                        <div className="drez-qty-display">{quantity}</div>
                                        <button className="drez-qty-btn" onClick={handleIncrement} aria-label="Creste cantitatea">
                                            <div className="drez-qty-plus">
                                                <div className="bar-h" />
                                                <div className="bar-v" />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="drez-cta-row">
                                <Button variant="primary" onClick={handleAddToCart} style={{ flex: 1 }}>
                                    Programează
                                </Button>
                                <button
                                    className={`drez-btn-fav ${isFavorite ? 'drez-btn-fav-active' : ''}`}
                                    aria-label={isFavorite ? 'Elimina de la favorite' : 'Adauga la favorite'}
                                    onClick={() => setIsFavorite(!isFavorite)}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                        fill={isFavorite ? 'var(--color-error)' : 'none'}
                                        stroke={isFavorite ? 'var(--color-error)' : 'var(--color-primary)'}
                                        strokeWidth="1.5"
                                        style={{ transition: 'fill 0.2s, stroke 0.2s' }}
                                    >
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Tabs Section (Full Width) */}
                <div className="drez-tabs-section">
                    <div className="drez-tabs-bar">
                        <button
                            className={`drez-tab ${activeTab === 'descriere' ? 'drez-tab-active' : ''}`}
                            onClick={() => setActiveTab('descriere')}
                        >
                            Descriere
                        </button>
                        <button
                            className={`drez-tab ${activeTab === 'recenzii' ? 'drez-tab-active' : ''}`}
                            onClick={() => setActiveTab('recenzii')}
                        >
                            Recenzii clienți
                        </button>
                    </div>
                    <div className="drez-accordion">
                        <button
                            className="drez-accordion-header"
                            onClick={() => setMobileAccordionOpen(!mobileAccordionOpen)}
                        >
                            <span>{activeTab === 'descriere' ? 'Descriere' : 'Recenzii clienți'}</span>
                            <div className={`drez-accordion-arrow ${mobileAccordionOpen ? 'drez-accordion-arrow-open' : ''}`} />
                        </button>
                        {mobileAccordionOpen && (
                            <div className="drez-accordion-dropdown">
                                <button
                                    className={`drez-accordion-option ${activeTab === 'descriere' ? 'drez-accordion-option-active' : ''}`}
                                    onClick={() => { setActiveTab('descriere'); setMobileAccordionOpen(false); }}
                                >
                                    Descriere
                                </button>
                                <button
                                    className={`drez-accordion-option ${activeTab === 'recenzii' ? 'drez-accordion-option-active' : ''}`}
                                    onClick={() => { setActiveTab('recenzii'); setMobileAccordionOpen(false); }}
                                >
                                    Recenzii clienți
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="drez-tab-content">
                        {activeTab === 'descriere' ? (
                            <div className="drez-tab-panel">
                                <IVWhySection
                                    imageSrc={imageSrc}
                                    imageAlt={imageAlt}
                                    heading={whyHeading}
                                    intro={whyIntro}
                                    features={whyFeatures}
                                />
                                {idealForItems && idealForItems.length > 0 && (
                                    <IVIdealForSection
                                        items={idealForItems.map(text => ({ text }))}
                                    />
                                )}
                                {clinicalStudies && clinicalStudies.length > 0 && (
                                    <IVClinicalStudiesSection
                                        studies={clinicalStudies}
                                        description="Cercetările clinice confirmă faptul că hidratarea intravenoasă restabilește mai rapid echilibrul hidric și electrolitic decât administrarea orală. Terapia este sigură, eficientă și indicată în stările de deshidratare moderată sau severă."
                                    />
                                )}
                                {qualityBagImageSrc && (
                                    <IVQualitySection bagImageSrc={qualityBagImageSrc} />
                                )}
                            </div>
                        ) : (
                            <div className="drez-tab-panel">
                                <TestimonialsSection
                                    testimonials={reviews.map(r => ({
                                        rating: r.rating,
                                        text: r.text,
                                        name: r.author,
                                        company: r.date
                                    }))}
                                    title="Recenzii Clienți"
                                    hiddenSubtitle={true}
                                    compact={true}
                                />
                            </div>
                        )}
                    </div>
                </div>

                <style jsx>{`
                /* ══ All styles from DeshidratareContent — unchanged ══ */
                .drez-page {
                    width: 100%;
                    min-height: 100vh;
                    background: white;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    padding: 0;
                    font-family: 'Montserrat', sans-serif;
                }
                .drez-container {
                    width: 100%;
                    max-width: 100%;
                    padding: 64px;
                    display: inline-flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: 10px;
                    overflow: hidden;
                }
                .drez-main-row {
                    display: inline-flex;
                    width: 100%;
                    gap: 32px;
                    justify-content: flex-start;
                    align-items: stretch; /* Image height matches content */
                }
                .drez-image-wrapper {
                    position: relative;
                    width: 100%;
                    /* max-width removed, handled by parent column */
                    /* min-height removed to let it adapt, but stretch will force it */
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                     /* flex-shrink: 0; removed, now it grows/shrinks in column */
                     flex: 1;
                }
                .drez-left-column {
                    display: flex;
                    flex-direction: column;
                    width: 50%;
                    max-width: 592px;
                    gap: 16px;
                    flex-shrink: 0;
                    align-self: stretch; /* Match height of content column */
                }
                .drez-image {
                    border-radius: 8px;
                }
                .drez-content {
                    flex: 1 1 0;
                    align-self: stretch;
                    padding: 16px;
                    display: inline-flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: 32px;
                }
                .drez-header-group {
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: 16px;
                }
                .drez-title {
                    color: var(--Color-Brand-Ocean-Blue, var(--color-primary));
                    font-size: 28px;
                    font-family: 'Inter', sans-serif;
                    font-weight: 600;
                    line-height: 36px;
                    margin: 0;
                }
                .drez-subtitle {
                    color: var(--Color-Brand-Ocean-Blue, var(--color-primary));
                    font-size: 18px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 600;
                    line-height: 28px;
                    margin: 0;
                }
                .drez-rating-row { align-self: stretch; display: inline-flex; align-items: center; gap: 8px; }
                .drez-stars { display: flex; gap: 0; width: 120px; height: 24px; position: relative; }
                .drez-star-icon {
                    width: 24px; height: 24px;
                    display: flex; align-items: center; justify-content: center;
                }
                .drez-star-icon::after {
                    content: '';
                    width: 20px; height: 19px;
                    background: var(--Color-Brand-Vivid-Orange, var(--color-accent));
                    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
                }
                .drez-star-icon-empty {
                    width: 24px; height: 24px;
                    display: flex; align-items: center; justify-content: center;
                }
                .drez-star-icon-empty::after {
                    content: '';
                    width: 20px; height: 19px;
                    background: var(--color-border-light);
                    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
                }
                .drez-review-count { flex: 1 1 0; color: var(--color-primary); font-size: 18px; font-family: 'Montserrat', sans-serif; font-weight: 500; line-height: 28px; }
                .drez-price-group { align-self: stretch; display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; }
                .drez-price-row { display: inline-flex; align-items: flex-start; gap: 8px; }
                .drez-price-current { color: var(--color-primary); font-size: 48px; font-family: 'Montserrat', sans-serif; font-weight: 600; line-height: 60px; }
                .drez-price-old { color: var(--color-accent); font-size: 28px; font-family: 'Montserrat', sans-serif; font-weight: 700; text-decoration: line-through; line-height: 36px; }
                .drez-discount-badge { align-self: stretch; color: var(--color-accent); font-size: 18px; font-family: 'Montserrat', sans-serif; font-weight: 500; line-height: 28px; }
                .drez-economy-group { align-self: stretch; display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; }
                .drez-eco-label { align-self: stretch; color: var(--color-primary); font-size: 18px; font-family: 'Montserrat', sans-serif; font-weight: 500; line-height: 28px; }
                .drez-eco-value { align-self: stretch; color: var(--color-primary); font-size: 18px; font-family: 'Montserrat', sans-serif; font-weight: 700; line-height: 28px; }
                .drez-benefits-group { align-self: stretch; display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; }
                .drez-benefits-title { align-self: stretch; color: var(--color-primary); font-size: 18px; font-family: 'Open Sans', sans-serif; font-weight: 600; line-height: 28px; margin: 0; }
                .drez-benefits-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0; }
                .drez-benefits-list li { align-self: stretch; color: var(--color-primary); font-size: 18px; font-family: 'Montserrat', sans-serif; font-weight: 400; line-height: 28px; }
                .drez-benefits-list li::before { content: "• "; margin-right: 4px; }
                .drez-selectors { align-self: stretch; display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; }
                .drez-selector-block { align-self: stretch; display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; }
                .drez-selector-label { text-align: center; color: var(--color-primary); font-size: 18px; font-family: 'Open Sans', sans-serif; font-weight: 600; line-height: 28px; }
                .drez-volume-options { align-self: stretch; display: inline-flex; justify-content: flex-start; align-items: center; gap: 32px; }
                /* Custom width for volume button */
                .drez-vol-btn { width: 154px; }

                .drez-qty-control {
                    display: inline-flex; width: fit-content; border: 1px solid #CED2DA; border-radius: 8px; overflow: hidden;
                    justify-content: center; align-items: center;
                }
                .drez-qty-btn {
                    background: white; border: none; border-right: 1px solid #CED2DA; padding: 10px 20px;
                    cursor: pointer; display: flex; align-items: center; justify-content: flex-start;
                    gap: 8px; transition: background 0.1s;
                }
                .drez-qty-btn:active { background-color: var(--color-surface); }
                .drez-qty-btn:last-child { border-right: none; }
                .drez-qty-display {
                    padding: 10px 20px; font-size: 18px; font-family: 'Open Sans', sans-serif; font-weight: 600;
                    line-height: 28px; color: var(--color-primary);
                    border-right: 1px solid #CED2DA; display: flex; align-items: center; justify-content: center;
                }
                .drez-qty-minus { width: 20px; height: 2px; background: var(--color-primary); }
                .drez-qty-plus { width: 20px; height: 20px; position: relative; }
                .bar-h { position: absolute; top: 9px; left: 0; width: 20px; height: 2px; background: var(--color-primary); }
                .bar-v { position: absolute; top: 0; left: 9px; width: 2px; height: 20px; background: var(--color-primary); }
                .drez-cta-row { align-self: stretch; display: inline-flex; justify-content: flex-start; align-items: center; gap: 32px; }
                .drez-btn-fav {
                    width: 44px; height: 44px; border-radius: 8px; border: 1px solid #97A1AF;
                    background: white; display: flex; align-items: center; justify-content: center;
                    cursor: pointer; flex-shrink: 0; transition: border-color 0.2s, transform 0.15s;
                    position: relative;
                }
                .drez-btn-fav:active { transform: scale(0.9); }
                .drez-btn-fav-active { border-color: var(--color-error); }
                .drez-disclaimer {
                    width: 100%; background: #F2F4F7; padding: 10px 20px;
                    border-radius: 8px; color: var(--color-primary); font-size: 14px;
                    font-family: 'Montserrat', sans-serif; font-weight: 400;
                    text-align: center; line-height: 20px;
                }

                /* ═══ Tabs ═══ */
                .drez-tabs-section { width: 100%; max-width: 100%; padding: 16px 0; }
                .drez-tabs-bar { display: flex; align-items: flex-start; justify-content: center; padding: 0 64px; }
                .drez-tab {
                    width: 240px; padding: 10px 20px; background: none; border: none;
                    border-bottom: 2px solid var(--color-secondary); color: var(--Color-Brand-Ocean-Blue, var(--color-primary));
                    font-size: 18px; font-family: 'Open Sans', sans-serif; font-weight: 600;
                    line-height: 28px; cursor: pointer; display: flex; justify-content: space-between;
                    align-items: center; transition: border-color 0.2s;
                }
                .drez-tab-active { border-bottom: 2px solid var(--color-accent); }
                .drez-accordion { display: none; }
                .drez-tab-content { padding: 32px 64px; }
                .drez-tab-panel { display: flex; flex-direction: column; gap: 16px; }
                .drez-tab-panel-title { color: var(--color-primary); font-size: 24px; font-weight: 600; margin: 0; }
                .drez-tab-panel-subtitle { color: var(--color-primary); font-size: 18px; font-weight: 600; margin: 16px 0 0; }
                .drez-tab-panel-text { color: var(--color-primary); font-size: 16px; font-weight: 400; line-height: 1.6; margin: 0; }
                .drez-tab-panel-list { list-style: disc; padding-left: 24px; margin: 0; color: var(--color-primary); font-size: 16px; line-height: 1.8; }
                .drez-review-card { padding: 24px; background: var(--color-surface-card); border-radius: 8px; display: flex; flex-direction: column; gap: 8px; }
                .drez-review-header { display: flex; justify-content: space-between; align-items: center; }
                .drez-review-stars { display: flex; gap: 4px; }
                .drez-review-date { color: var(--color-input-border); font-size: 14px; font-weight: 400; }
                .drez-review-author { margin: 0; color: var(--color-primary); font-size: 16px; font-weight: 600; }
                .drez-review-text { margin: 0; color: var(--color-primary); font-size: 15px; font-weight: 400; line-height: 1.6; }
                .drez-accordion-header {
                    width: 100%; padding: 12px; background: white; border: 1px solid var(--color-primary);
                    border-radius: 5px; display: flex; justify-content: space-between; align-items: center;
                    cursor: pointer; color: var(--color-primary); font-size: 14px; font-family: 'Montserrat', sans-serif;
                    font-weight: 600; line-height: 20px;
                }
                .drez-accordion-arrow {
                    width: 12px; height: 7px; background: var(--color-primary);
                    clip-path: polygon(0 0, 100% 0, 50% 100%); transition: transform 0.2s;
                }
                .drez-accordion-arrow-open { transform: rotate(180deg); }
                .drez-accordion-dropdown { border: 1px solid var(--color-border-light); border-top: none; border-radius: 0 0 5px 5px; overflow: hidden; }
                .drez-accordion-option {
                    width: 100%; padding: 12px; background: white; border: none; text-align: left;
                    cursor: pointer; color: var(--color-primary); font-size: 14px; font-family: 'Montserrat', sans-serif;
                    font-weight: 500; line-height: 20px;
                }
                .drez-accordion-option:hover { background: var(--color-surface); }
                .drez-accordion-option-active { font-weight: 600; background: var(--color-surface); }

                /* ── Tablet ── */
                @media (max-width: 1024px) {
                    .drez-page { padding: 0; }
                    .drez-container { max-width: 704px; padding: 0 32px; gap: 32px; }
                    .drez-main-row { flex-direction: column; align-items: center; gap: 32px; }
                    .drez-left-column { width: 100%; max-width: 704px; }
                    .drez-image-wrapper { width: 100%; max-width: 100%; max-height: 500px; }
                    .drez-image { max-height: 500px; }
                    .drez-content { width: 100%; align-items: flex-start; }
                    .drez-title { font-family: 'Montserrat', sans-serif; font-size: 24px; }
                    .drez-price-row { gap: 8px; }
                    .drez-price-current { font-family: 'Montserrat', sans-serif; font-size: 20px; font-weight: 700; }
                    .drez-price-old { font-size: 24px; }
                    .drez-benefits-list li { font-size: 16px; }
                    .drez-tab { font-size: 16px; font-family: 'Montserrat', sans-serif; line-height: 24px; }
                    .drez-tabs-section { padding: 16px 32px; }
                    .drez-disclaimer { padding: 10px 32px; }
                }

                /* ── Mobile ── */
                @media (max-width: 767px) {
                    .drez-page { padding: 0; }
                    .drez-container { max-width: 100%; padding: 0 16px; gap: 32px; }
                    .drez-main-row { gap: 32px; }
                    .drez-left-column { width: 100%; max-width: 100%; }
                    .drez-image-wrapper { width: 100%; max-width: 100%; max-height: 360px; }
                    .drez-image { width: 100%; max-height: 360px; object-fit: contain; }
                    .drez-title { font-size: 16px; font-weight: 600; }
                    .drez-subtitle { font-size: 12px; font-weight: 600; }
                    .drez-review-count { font-size: 14px; }
                    .drez-price-current { font-size: 28px; font-weight: 700; }
                    .drez-price-old { font-size: 18px; }
                    .drez-discount-badge { font-size: 16px; }
                    .drez-eco-label, .drez-eco-value { font-size: 16px; }
                    .drez-benefits-title { font-size: 16px; }
                    .drez-benefits-list li { font-size: 14px; }
                    .drez-selector-label { font-size: 16px; }
                    /* Full width on mobile */
                    .drez-vol-btn { width: 100% !important; flex: 1; }

                    .drez-volume-options { gap: 16px; }
                    .drez-disclaimer { font-size: 12px; }
                    .drez-tabs-bar { display: none; }
                    .drez-accordion { display: block; }
                    .drez-tabs-section { padding: 16px 16px; }
                    .drez-disclaimer { padding: 10px 16px; }
                    .drez-tab-content { padding: 16px 0; }
                    .drez-tab-panel-title { font-size: 18px; }
                    .drez-tab-panel-subtitle { font-size: 16px; }
                    .drez-tab-panel-text, .drez-tab-panel-list { font-size: 14px; }
                }
            `}</style>
            </div>
        </div>
    );
}
