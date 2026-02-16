'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DeshidratareContent() {
    return (
        <div className="drez-page">
            <div className="drez-container">
                <div className="drez-main-row">
                    {/* Image Section */}
                    <div className="drez-image-wrapper">
                        {/* Using standard img tag for exact prompt compliance regarding style props, 
                            but could use Next.js Image if preferred. Sticking to simple img for now 
                            to match the 'copy-paste' nature of the request, but styling it with classes. */}
                        <img
                            src="/images/iv-drip/Photo.svg"
                            alt="Deshidratare IV Drip"
                            className="drez-image"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="drez-content">
                        {/* Header */}
                        <div className="drez-header-group">
                            <h1 className="drez-title">DESHIDRATARE</h1>
                            <h2 className="drez-subtitle">Revitalizează și Rehidratează</h2>

                            <div className="drez-rating-row">
                                <div className="drez-stars">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <div key={i} className="drez-star-icon" />
                                    ))}
                                </div>
                                <span className="drez-review-count">46 Recenzii</span>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="drez-price-group">
                            <div className="drez-price-row">
                                <span className="drez-price-current">450 Lei</span>
                                <span className="drez-price-old">600 Lei</span>
                            </div>
                            <div className="drez-discount-badge">Reducere de 36,36%</div>
                            <div className="drez-economy-group">
                                <span className="drez-eco-label">Economisește acum!</span>
                                <span className="drez-eco-value">0,55 Lei/ml vs 0,849 Lei/ml</span>
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="drez-benefits-group">
                            <h3 className="drez-benefits-title">Beneficii:</h3>
                            <ul className="drez-benefits-list">
                                <li>Rehidratare rapidă și eficientă</li>
                                <li>Restabilirea echilibrului de electroliți</li>
                                <li>Îmbunătățirea nivelului de energie</li>
                                <li>Claritate mentală crescută</li>
                                <li>Recuperare mai rapidă după efort, boală sau expunere la căldură</li>
                                <li>Ameliorarea simptomelor precum oboseală, amețeală, greață și cefalee</li>
                            </ul>
                        </div>

                        {/* Selectors */}
                        <div className="drez-selectors">
                            {/* Volume */}
                            <div className="drez-selector-block">
                                <span className="drez-selector-label">Selectează volumul :</span>
                                <div className="drez-volume-options">
                                    <div className="drez-vol-btn drez-vol-btn-white">500 ml</div>
                                    <div className="drez-vol-btn drez-vol-btn-blue">1000 ml</div>
                                </div>
                            </div>

                            {/* Quantity */}
                            <div className="drez-selector-block">
                                <span className="drez-selector-label">Selectează Cantitatea :</span>
                                <div className="drez-qty-control">
                                    <button className="drez-qty-btn">
                                        <div className="drez-qty-minus" />
                                    </button>
                                    <div className="drez-qty-display">1</div>
                                    <button className="drez-qty-btn">
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
                            <Link href="/contact" className="drez-btn-program">
                                Programează
                            </Link>
                            <button className="drez-btn-fav">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Disclaimer */}
                <div className="drez-disclaimer">
                    Imaginea are rol exclusiv ilustrativ, iar culorile soluției prezentate nu reflectă neapărat culoarea reală a tratamentului. Pigmentarea este folosită în scopuri de marketing și diferențiere vizuală între produse. Efectele medicale menționate sunt reale și susținute de ingredientele active din compoziție.
                </div>
            </div>

            <style jsx>{`
                /* ── Base / Desktop Styles (>= 1025px) ── */
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
                    max-width: 1440px; /* Wrapper mostly for centering */
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

                /* Image */
                .drez-image-wrapper {
                    flex-shrink: 0;
                    width: 592px;
                    height: 836px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .drez-image {
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;
                    object-fit: cover;
                }

                /* Content Panel */
                .drez-content {
                    flex: 1;
                    /* min-width: 300px; */
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                /* Header */
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
                .drez-rating-row {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .drez-stars {
                    display: flex;
                    gap: 4px;
                }
                .drez-star-icon {
                    width: 20px; 
                    height: 20px; 
                    background: var(--Color-Brand-Vivid-Orange, #FD5D16);
                    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
                }
                .drez-review-count {
                    color: #213170;
                    font-size: 18px;
                    font-weight: 500;
                }

                /* Price */
                .drez-price-group {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .drez-price-row {
                    display: flex;
                    align-items: flex-start;
                    gap: 8px;
                }
                .drez-price-current {
                    color: #213170;
                    font-size: 48px;
                    font-weight: 600;
                    line-height: 1.2;
                }
                .drez-price-old {
                    color: #FE5D16;
                    font-size: 28px;
                    font-weight: 700;
                    text-decoration: line-through;
                    align-self: center;
                }
                .drez-discount-badge {
                    color: #FE5D16;
                    font-size: 18px;
                    font-weight: 500;
                }
                .drez-economy-group {
                    display: flex;
                    flex-direction: column;
                }
                .drez-eco-label {
                    color: #213170;
                    font-size: 18px;
                    font-weight: 500;
                }
                .drez-eco-value {
                    color: #213170;
                    font-size: 18px;
                    font-weight: 700;
                }

                /* Benefits */
                .drez-benefits-group {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .drez-benefits-title {
                    color: #213170;
                    font-size: 18px;
                    font-family: 'Open Sans', sans-serif;
                    font-weight: 600;
                    margin: 0;
                }
                .drez-benefits-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }
                .drez-benefits-list li {
                    color: #213170;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 1.5;
                }
                /* Add bullet manually or via css? User prompt had explicit divs. */
                .drez-benefits-list li::before {
                    content: "• ";
                    margin-right: 4px;
                }

                /* Selectors */
                .drez-selectors {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }
                .drez-selector-block {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .drez-selector-label {
                    color: #213170;
                    font-size: 18px;
                    font-family: 'Open Sans', sans-serif;
                    font-weight: 600;
                    text-align: center; /* Centered in desktop? prompt said textAlign center */
                }
                .drez-volume-options {
                    display: flex;
                    gap: 32px;
                }
                .drez-vol-btn {
                    width: 154px;
                    padding: 10px 20px;
                    border-radius: 8px;
                    border: 1px solid #CED2DA;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    font-weight: 500;
                    font-size: 18px;
                }
                .drez-vol-btn-white {
                    background: white;
                    color: #213170;
                }
                .drez-vol-btn-blue {
                    background: #213170;
                    color: white;
                }

                .drez-qty-control {
                    display: inline-flex;
                    border: 1px solid #CED2DA;
                    border-radius: 8px;
                    overflow: hidden;
                }
                .drez-qty-btn {
                    background: white;
                    border: none;
                    border-right: 1px solid #CED2DA;
                    padding: 10px 20px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .drez-qty-btn:last-child {
                    border-right: none;
                }
                .drez-qty-display {
                    padding: 10px 20px;
                    font-size: 18px;
                    font-weight: 600;
                    color: #213170;
                    border-right: 1px solid #CED2DA;
                    display: flex;
                    align-items: center;
                }
                .drez-qty-minus {
                    width: 20px; height: 2px; background: #213170;
                }
                .drez-qty-plus {
                    width: 20px; height: 20px; position: relative;
                }
                .bar-h { position: absolute; top: 9px; left: 0; width: 20px; height: 2px; background: #213170; }
                .bar-v { position: absolute; top: 0; left: 9px; width: 2px; height: 20px; background: #213170; }


                /* CTA */
                .drez-cta-row {
                    display: flex;
                    gap: 32px;
                    align-items: center;
                }
                .drez-btn-program {
                    flex: 1;
                    background: #213170;
                    color: white;
                    text-decoration: none;
                    text-align: center;
                    padding: 10px 20px;
                    border-radius: 8px;
                    font-size: 18px;
                    font-weight: 500;
                }
                .drez-btn-fav {
                    width: 44px;
                    height: 44px;
                    border-radius: 8px;
                    border: 1px solid #97A1AF;
                    background: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }

                /* Disclaimer */
                .drez-disclaimer {
                    width: 100%;
                    max-width: 1312px;
                    background: #F2F4F7;
                    padding: 10px 20px;
                    border-radius: 8px;
                    color: #213170;
                    font-size: 14px;
                    text-align: center;
                    line-height: 1.4;
                }



                /* ── Tablet Styles (<= 1024px) ── */
                @media (max-width: 1024px) {
                    .drez-page {
                        padding: 32px 0;
                    }
                    .drez-container {
                        max-width: 704px;
                        padding: 0 32px;
                        gap: 32px;
                    }
                    .drez-main-row {
                        flex-direction: column;
                        align-items: center;
                        gap: 32px;
                    }
                    .drez-image-wrapper {
                        width: 100%;
                        max-width: 704px;
                        height: auto;
                        aspect-ratio: 704 / 737;
                    }
                    .drez-content {
                        width: 100%;
                        align-items: flex-start;
                    }
                    .drez-title {
                        font-family: 'Montserrat', sans-serif;
                        font-size: 24px;
                    }
                    .drez-price-row {
                        gap: 8px;
                    }
                    .drez-price-current {
                        font-family: 'Montserrat', sans-serif;
                        font-size: 20px;
                        font-weight: 700;
                    }
                    .drez-price-old {
                        font-size: 24px;
                    }
                    .drez-benefits-list li {
                        font-size: 16px;
                    }
                }

                /* ── Mobile Styles (< 768px) ── */
                @media (max-width: 767px) {
                    .drez-page {
                        padding: 32px 0;
                    }
                    .drez-container {
                        max-width: 100%;
                        padding: 0 16px; /* 16px padding side as requested */
                        gap: 32px;
                    }
                    .drez-main-row {
                        gap: 32px;
                    }
                    .drez-image-wrapper {
                        max-width: 100%;
                        aspect-ratio: 343 / 359; /* Mobile aspect */
                    }
                    
                    /* Typography overrides for Mobile */
                    .drez-title {
                        font-size: 16px; /* Mobile prompt: 16px */
                        font-weight: 600;
                    }
                    .drez-subtitle {
                        font-size: 12px; /* Mobile prompt: 12px */
                        font-weight: 600;
                    }
                    .drez-review-count {
                        font-size: 14px; /* Mobile prompt: 14px */
                    }
                    
                    /* Price Mobile */
                    .drez-price-current {
                        font-size: 16px; /* Mobile prompt: 16px */
                    }
                    .drez-price-old {
                        font-size: 20px; /* Mobile prompt: 20px */
                    }
                    .drez-discount-badge {
                        font-size: 16px;
                    }
                    .drez-eco-label, .drez-eco-value {
                        font-size: 16px;
                    }

                    /* Benefits Mobile */
                    .drez-benefits-title {
                        font-size: 16px;
                    }
                    .drez-benefits-list li {
                        font-size: 14px; /* Mobile prompt: 14px */
                    }
                    
                    /* Selectors Mobile */
                    .drez-selector-label {
                        font-size: 16px;
                    }
                    .drez-vol-btn {
                        font-size: 14px;
                        padding: 10px; /* Squeeze padding if needed */
                        width: 100%; /* Full width buttons? Or flex */
                        flex: 1;
                    }
                    .drez-volume-options {
                        gap: 16px; /* Smaller gap */
                    }
                    
                    /* CTA Mobile */
                    .drez-btn-program {
                        font-size: 16px;
                    }
                    
                    /* Disclaimer Mobile */
                    .drez-disclaimer {
                        font-size: 12px;
                    }
                }
            `}</style>
        </div>
    );
}
