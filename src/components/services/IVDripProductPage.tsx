'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';
import IVWhySection from './IVWhySection';
import type { IVWhyFeature } from './IVWhySection';

/* ── Types ── */
export interface IVDripReview {
    author: string;
    date: string;
    rating: number; // 1-5
    text: string;
}

export interface IVDripProductProps {
    /** Unique product ID for cart */
    id: string;
    /** Product title (uppercase) */
    title: string;
    /** Short subtitle / tagline */
    subtitle: string;
    /** Image path (SVG or PNG) */
    imageSrc: string;
    /** Image alt text */
    imageAlt?: string;
    /** Current price in Lei */
    price: number;
    /** Old (strikethrough) price in Lei */
    oldPrice?: number;
    /** Volume options e.g. ['500ml', '1000ml'] */
    volumeOptions?: string[];
    /** Per-ml economy text per volume, indexed same as volumeOptions */
    economyPerMl?: string[];
    /** List of benefit strings */
    benefits: string[];
    /** Description paragraphs for "Descriere" tab */
    description: {
        title: string;
        intro: string;
        sections: {
            heading: string;
            content: string | string[]; // string = paragraph, string[] = list
        }[];
    };
    /** Customer reviews for "Recenzii" tab */
    reviews: IVDripReview[];
    /** Total review count shown next to stars */
    reviewCount: number;
    /** Average rating (1-5) for the star display */
    averageRating?: number;
    /** Disclaimer text */
    disclaimer?: string;
    /** Override "Why it works" section heading */
    whyHeading?: string;
    /** Override "Why it works" section intro text */
    whyIntro?: string;
    /** Override "Why it works" feature cards */
    whyFeatures?: IVWhyFeature[];
}

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
}: IVDripProductProps) {
    const [selectedVolume, setSelectedVolume] = useState(volumeOptions[0]);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState<'descriere' | 'recenzii'>('descriere');
    const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const totalPrice = price * quantity;
    const discountPercent = oldPrice ? Math.round((1 - price / oldPrice) * 100) : 0;
    const volumeIndex = volumeOptions.indexOf(selectedVolume);

    const handleIncrement = () => setQuantity(q => q + 1);
    const handleDecrement = () => setQuantity(q => Math.max(1, q - 1));

    const handleAddToCart = () => {
        const item = {
            id,
            name: title,
            volume: selectedVolume,
            quantity,
            price,
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
                    {/* Image */}
                    <div className="drez-image-wrapper">
                        <img src={imageSrc} alt={imageAlt || title} className="drez-image" />
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
                                <span className="drez-price-current">{price} Lei</span>
                                {oldPrice && <span className="drez-price-old">{oldPrice} Lei</span>}
                            </div>
                            {oldPrice && (
                                <div className="drez-discount-badge">Reducere de {discountPercent}%!</div>
                            )}
                            {economyPerMl && economyPerMl[volumeIndex] && (
                                <div className="drez-economy-group">
                                    <span className="drez-eco-label">Economisește acum!</span>
                                    <span className="drez-eco-value">
                                        {economyPerMl[volumeIndex]} vs prețul standard
                                    </span>
                                </div>
                            )}
                        </div>

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
                                            <button
                                                key={vol}
                                                onClick={() => setSelectedVolume(vol)}
                                                className={`drez-vol-btn ${selectedVolume === vol ? 'drez-vol-btn-active' : 'drez-vol-btn-inactive'}`}
                                            >
                                                {vol}
                                            </button>
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
                                Adaugă în coș - {totalPrice} Lei
                            </Button>
                            <button
                                className={`drez-btn-fav ${isFavorite ? 'drez-btn-fav-active' : ''}`}
                                aria-label={isFavorite ? 'Elimina de la favorite' : 'Adauga la favorite'}
                                onClick={() => setIsFavorite(!isFavorite)}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24"
                                    fill={isFavorite ? '#E53935' : 'none'}
                                    stroke={isFavorite ? '#E53935' : '#213170'}
                                    strokeWidth="1.5"
                                    style={{ transition: 'fill 0.2s, stroke 0.2s' }}
                                >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Disclaimer */}
                {disclaimer && <div className="drez-disclaimer">{disclaimer}</div>}

                {/* Tabs Section */}
                <div className="drez-tabs-section">
                    {/* Desktop + Tablet: Underline Tabs */}
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

                    {/* Mobile: Accordion */}
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

                    {/* Tab Content */}
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
                            </div>
                        ) : (
                            <div className="drez-tab-panel">
                                <h3 className="drez-tab-panel-title">Recenzii Clienți</h3>
                                {reviews.map((review, i) => (
                                    <div key={i} className="drez-review-card">
                                        <div className="drez-review-header">
                                            <div className="drez-review-stars">{renderStars(review.rating)}</div>
                                            <span className="drez-review-date">{review.date}</span>
                                        </div>
                                        <p className="drez-review-author">{review.author}</p>
                                        <p className="drez-review-text">{review.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                /* ══ All styles from DeshidratareContent — unchanged ══ */
                .drez-page {
                    width: 100%;
                    min-height: 100vh;
                    background: white;
                    display: flex;
                    justify-content: center;
                    padding: 64px 0;
                    font-family: 'Montserrat', sans-serif;
                }
                .drez-container {
                    width: 100%;
                    max-width: 1440px;
                    padding: 0 64px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 32px;
                }
                .drez-main-row {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    max-width: 1312px;
                    gap: 32px;
                    align-items: flex-start;
                }
                .drez-image-wrapper {
                    flex-shrink: 0;
                    width: 592px;
                    max-height: 620px;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                }
                .drez-image {
                    width: 100%;
                    max-height: 620px;
                    border-radius: 8px;
                    object-fit: contain;
                }
                .drez-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }
                .drez-header-group {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .drez-title {
                    color: var(--Color-Brand-Ocean-Blue, #213170);
                    font-size: 28px;
                    font-family: 'Inter', sans-serif;
                    font-weight: 600;
                    line-height: 1.2;
                    margin: 0;
                }
                .drez-subtitle {
                    color: var(--Color-Brand-Ocean-Blue, #213170);
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 1.5;
                    margin: 0;
                }
                .drez-rating-row { display: flex; align-items: center; gap: 8px; }
                .drez-stars { display: flex; gap: 4px; }
                .drez-star-icon {
                    width: 20px; height: 20px;
                    background: var(--Color-Brand-Vivid-Orange, #FD5D16);
                    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
                }
                .drez-star-icon-empty {
                    width: 20px; height: 20px;
                    background: #CED2DA;
                    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
                }
                .drez-review-count { color: #213170; font-size: 18px; font-weight: 500; }
                .drez-price-group { display: flex; flex-direction: column; gap: 8px; }
                .drez-price-row { display: flex; align-items: flex-start; gap: 8px; }
                .drez-price-current { color: #213170; font-size: 48px; font-weight: 600; line-height: 1.2; }
                .drez-price-old { color: #FE5D16; font-size: 28px; font-weight: 700; text-decoration: line-through; align-self: center; }
                .drez-discount-badge { color: #FE5D16; font-size: 18px; font-weight: 500; }
                .drez-economy-group { display: flex; flex-direction: column; }
                .drez-eco-label { color: #213170; font-size: 18px; font-weight: 500; }
                .drez-eco-value { color: #213170; font-size: 18px; font-weight: 700; }
                .drez-benefits-group { display: flex; flex-direction: column; gap: 8px; }
                .drez-benefits-title { color: #213170; font-size: 18px; font-family: 'Open Sans', sans-serif; font-weight: 600; margin: 0; }
                .drez-benefits-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0; }
                .drez-benefits-list li { color: #213170; font-size: 18px; font-weight: 400; line-height: 1.5; }
                .drez-benefits-list li::before { content: "• "; margin-right: 4px; }
                .drez-selectors { display: flex; flex-direction: column; gap: 24px; }
                .drez-selector-block { display: flex; flex-direction: column; gap: 12px; }
                .drez-selector-label { color: #213170; font-size: 18px; font-family: 'Open Sans', sans-serif; font-weight: 600; text-align: left; }
                .drez-volume-options { display: flex; gap: 32px; }
                .drez-vol-btn {
                    width: 154px; padding: 10px 20px; border-radius: 8px; border: 1px solid #CED2DA;
                    display: flex; justify-content: center; align-items: center; cursor: pointer;
                    font-weight: 500; font-size: 18px; background: white; color: #213170; transition: all 0.2s;
                }
                .drez-vol-btn-active { background: #213170; color: white; border-color: #213170; }
                .drez-vol-btn-inactive { background: white; color: #213170; }
                .drez-vol-btn:hover { border-color: #213170; }
                .drez-qty-control {
                    display: inline-flex; width: fit-content; border: 1px solid #CED2DA; border-radius: 8px; overflow: hidden;
                }
                .drez-qty-btn {
                    background: white; border: none; border-right: 1px solid #CED2DA; padding: 0 20px;
                    width: 60px; height: 44px; cursor: pointer; display: flex; align-items: center;
                    justify-content: center; transition: background 0.1s;
                }
                .drez-qty-btn:active { background-color: #f2f4f7; }
                .drez-qty-btn:last-child { border-right: none; }
                .drez-qty-display {
                    width: 60px; height: 44px; font-size: 18px; font-weight: 600; color: #213170;
                    border-right: 1px solid #CED2DA; display: flex; align-items: center; justify-content: center;
                }
                .drez-qty-minus { width: 20px; height: 2px; background: #213170; }
                .drez-qty-plus { width: 20px; height: 20px; position: relative; }
                .bar-h { position: absolute; top: 9px; left: 0; width: 20px; height: 2px; background: #213170; }
                .bar-v { position: absolute; top: 0; left: 9px; width: 2px; height: 20px; background: #213170; }
                .drez-cta-row { display: flex; gap: 32px; align-items: center; }
                .drez-btn-fav {
                    width: 44px; height: 44px; border-radius: 8px; border: 1px solid #97A1AF;
                    background: white; display: flex; align-items: center; justify-content: center;
                    cursor: pointer; flex-shrink: 0; transition: border-color 0.2s, transform 0.15s;
                }
                .drez-btn-fav:active { transform: scale(0.9); }
                .drez-btn-fav-active { border-color: #E53935; }
                .drez-disclaimer {
                    width: 100%; max-width: 1312px; background: #F2F4F7; padding: 10px 20px;
                    border-radius: 8px; color: #213170; font-size: 14px; text-align: center; line-height: 1.4;
                }

                /* ═══ Tabs ═══ */
                .drez-tabs-section { width: 100%; max-width: 1312px; padding: 16px 0; }
                .drez-tabs-bar { display: flex; align-items: flex-start; }
                .drez-tab {
                    width: 240px; padding: 10px 20px; background: none; border: none;
                    border-bottom: 2px solid #BDE0FF; color: var(--Color-Brand-Ocean-Blue, #213170);
                    font-size: 18px; font-family: 'Open Sans', sans-serif; font-weight: 600;
                    line-height: 28px; cursor: pointer; display: flex; justify-content: space-between;
                    align-items: center; transition: border-color 0.2s;
                }
                .drez-tab-active { border-bottom: 2px solid #FE5D16; }
                .drez-accordion { display: none; }
                .drez-tab-content { padding: 32px 0; }
                .drez-tab-panel { display: flex; flex-direction: column; gap: 16px; }
                .drez-tab-panel-title { color: #213170; font-size: 24px; font-weight: 600; margin: 0; }
                .drez-tab-panel-subtitle { color: #213170; font-size: 18px; font-weight: 600; margin: 16px 0 0; }
                .drez-tab-panel-text { color: #213170; font-size: 16px; font-weight: 400; line-height: 1.6; margin: 0; }
                .drez-tab-panel-list { list-style: disc; padding-left: 24px; margin: 0; color: #213170; font-size: 16px; line-height: 1.8; }
                .drez-review-card { padding: 24px; background: #F8F9FB; border-radius: 8px; display: flex; flex-direction: column; gap: 8px; }
                .drez-review-header { display: flex; justify-content: space-between; align-items: center; }
                .drez-review-stars { display: flex; gap: 4px; }
                .drez-review-date { color: #97A1AF; font-size: 14px; font-weight: 400; }
                .drez-review-author { margin: 0; color: #213170; font-size: 16px; font-weight: 600; }
                .drez-review-text { margin: 0; color: #213170; font-size: 15px; font-weight: 400; line-height: 1.6; }
                .drez-accordion-header {
                    width: 100%; padding: 12px; background: white; border: 1px solid #213170;
                    border-radius: 5px; display: flex; justify-content: space-between; align-items: center;
                    cursor: pointer; color: #213170; font-size: 14px; font-family: 'Montserrat', sans-serif;
                    font-weight: 600; line-height: 20px;
                }
                .drez-accordion-arrow {
                    width: 12px; height: 7px; background: #213170;
                    clip-path: polygon(0 0, 100% 0, 50% 100%); transition: transform 0.2s;
                }
                .drez-accordion-arrow-open { transform: rotate(180deg); }
                .drez-accordion-dropdown { border: 1px solid #CED2DA; border-top: none; border-radius: 0 0 5px 5px; overflow: hidden; }
                .drez-accordion-option {
                    width: 100%; padding: 12px; background: white; border: none; text-align: left;
                    cursor: pointer; color: #213170; font-size: 14px; font-family: 'Montserrat', sans-serif;
                    font-weight: 500; line-height: 20px;
                }
                .drez-accordion-option:hover { background: #F2F4F7; }
                .drez-accordion-option-active { font-weight: 600; background: #F2F4F7; }

                /* ── Tablet ── */
                @media (max-width: 1024px) {
                    .drez-page { padding: 32px 0; }
                    .drez-container { max-width: 704px; padding: 0 32px; gap: 32px; }
                    .drez-main-row { flex-direction: column; align-items: center; gap: 32px; }
                    .drez-image-wrapper { width: 100%; max-width: 704px; max-height: 500px; }
                    .drez-image { max-height: 500px; }
                    .drez-content { width: 100%; align-items: flex-start; }
                    .drez-title { font-family: 'Montserrat', sans-serif; font-size: 24px; }
                    .drez-price-row { gap: 8px; }
                    .drez-price-current { font-family: 'Montserrat', sans-serif; font-size: 20px; font-weight: 700; }
                    .drez-price-old { font-size: 24px; }
                    .drez-benefits-list li { font-size: 16px; }
                    .drez-tab { font-size: 16px; font-family: 'Montserrat', sans-serif; line-height: 24px; }
                    .drez-tabs-section { padding: 16px 0; }
                }

                /* ── Mobile ── */
                @media (max-width: 767px) {
                    .drez-page { padding: 32px 0; }
                    .drez-container { max-width: 100%; padding: 0 16px; gap: 32px; }
                    .drez-main-row { gap: 32px; }
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
                    .drez-vol-btn { font-size: 14px; padding: 10px; width: 100%; flex: 1; }
                    .drez-volume-options { gap: 16px; }
                    .drez-disclaimer { font-size: 12px; }
                    .drez-tabs-bar { display: none; }
                    .drez-accordion { display: block; }
                    .drez-tab-content { padding: 16px 0; }
                    .drez-tab-panel-title { font-size: 18px; }
                    .drez-tab-panel-subtitle { font-size: 16px; }
                    .drez-tab-panel-text, .drez-tab-panel-list { font-size: 14px; }
                }
            `}</style>
        </div>
    );
}
