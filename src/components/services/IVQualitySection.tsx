'use client';

import React from 'react';
import Image from 'next/image';

interface IVQualitySectionProps {
    bagImageSrc: string;
}

export default function IVQualitySection({ bagImageSrc }: IVQualitySectionProps) {
    return (
        <section className="quality-section">
            <div className="quality-container">
                <div className="quality-content">
                    {/* Header Group */}
                    <div className="quality-header">
                        <h2 className="quality-title">Administrare sigură și controlată</h2>
                        <div className="quality-text-group">
                            <p className="quality-text">
                                Realizată exclusiv de personal medical Medvita autorizat, cu experiență în administrarea intravenoasă și protocoale de siguranță estetică.
                            </p>
                            <p className="quality-text">
                                Fiecare perfuzie este preparată în condiții sterile, utilizând ingrediente de calitate farmaceutică, conforme cu standardele internaționale.
                            </p>
                            <p className="quality-text">
                                Diluția, viteza de administrare și durata tratamentului sunt personalizate în funcție de greutate, status metabolic și obiectivele estetice ale pacientului.
                            </p>
                        </div>
                    </div>

                    {/* Image Composition */}
                    <div className="quality-images">
                        {/* Splash Image (Back) */}
                        <div className="quality-splash-wrapper">
                            <Image 
                                src="/images/quality/splash-iv.png" 
                                alt="Medvita Water Splash"
                                width={642}
                                height={461}
                                className="quality-splash"
                                style={{ width: '100%', height: 'auto' }}
                                priority
                            />
                        </div>
                        {/* Bag Image (Front) */}
                        <div className="quality-bag-wrapper">
                            <Image 
                                src={bagImageSrc} 
                                alt="IV Drip Bag"
                                width={380}
                                height={397}
                                className="quality-bag"
                                style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>

                    {/* Footer Group */}
                    <div className="quality-footer">
                        <h3 className="quality-subtitle">Medvita înseamnă încredere:</h3>
                        <p className="quality-desc">
                            Fiecare tratament este adaptat nevoilor reale ale pacientului – nu administrăm formule standardizate fără o evaluare prealabilă. <br className="desktop-break" />
                            În echipa noastră, siguranța este la fel de importantă ca eficiența.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .quality-section {
                    width: 100%;
                    background: white;
                    padding: 64px 0;
                    display: flex;
                    justify-content: center;
                }

                .quality-container {
                    width: 100%;
                    max-width: 1312px;
                    padding: 0 64px; /* Safety padding */
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .quality-content {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 32px;
                }

                /* ── Header ── */
                .quality-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 32px;
                    width: 100%;
                }

                .quality-title {
                    text-align: center;
                    color: var(--color-primary);
                    font-size: 36px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 600;
                    line-height: 44px;
                    max-width: 1216px;
                }

                .quality-text-group {
                    display: flex;
                    flex-direction: column;
                    align-items: center; /* Centered based on snippets title center and mobile center, assuming center preference */
                    gap: 8px; /* Reduced gap from 16 to 8 based on snippet */
                    width: 100%;
                    max-width: 1106px; /* From snippet max width on texts */
                }

                .quality-text {
                    color: var(--color-primary);
                    font-size: 18px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 400;
                    line-height: 28px;
                    text-align: center; /* Enforcing center alignment for clean look as per images usually */
                    margin: 0;
                    width: 100%;
                }

                /* ─── Images ─── */
                .quality-images {
                    width: 100%;
                    height: 350px; /* Reduced from 461px */
                    position: relative;
                    display: flex;
                    justify-content: center;
                    overflow: visible;
                    margin-top: 32px;
                    margin-bottom: 32px;
                }

                .quality-splash-wrapper {
                    position: absolute;
                    z-index: 1;
                    width: 500px; /* Reduced from 642px */
                    max-width: 100%;
                    top: 0;
                }

                .quality-bag-wrapper {
                    position: absolute;
                    z-index: 2;
                    top: 10px; 
                    width: 280px; /* Reduced from 380px */
                    max-width: 100%;
                    display: flex;
                    justify-content: center;
                }

                /* ── Footer ── */
                .quality-footer {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    text-align: center;
                    max-width: 1216px;
                }

                .quality-subtitle {
                    color: var(--color-primary);
                    font-size: 20px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 600;
                    line-height: 28px;
                    margin: 0;
                }

                .quality-desc {
                    color: var(--color-primary);
                    font-size: 18px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                }

                .desktop-break {
                    display: block;
                }

                /* ── Tablet (max-width: 1024px) ── */
                @media (max-width: 1024px) {
                    .quality-container {
                        max-width: 768px;
                        padding: 0 32px;
                    }

                    .quality-title {
                        font-size: 28px;
                        line-height: 36px;
                    }

                    .quality-text, .quality-desc {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    .quality-subtitle {
                        font-size: 18px;
                        line-height: 26px;
                    }

                    .quality-images {
                        height: 280px; /* Reduced from 340px */
                    }

                    .quality-splash-wrapper {
                        width: 400px; /* Reduced from 480px */
                    }
                    
                    .quality-bag-wrapper {
                        width: 220px; /* Reduced from 280px */
                        top: 10px;
                    }
                }

                /* ── Mobile (max-width: 767px) ── */
                @media (max-width: 767px) {
                    .quality-section {
                        padding: 48px 0;
                    }
                    
                    .quality-container {
                        padding: 0 16px;
                    }

                    .quality-title {
                        font-size: 24px;
                        line-height: 32px;
                    }

                    .quality-text, .quality-desc {
                        font-size: 14px;
                        line-height: 20px;
                    }

                    .quality-subtitle {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    .quality-images {
                        height: 240px; /* Reduced from 300px */
                        margin: 24px 0;
                    }

                    .quality-splash-wrapper {
                        width: 300px; /* Reduced from 344px */
                    }

                    .quality-bag-wrapper {
                        width: 160px; /* Reduced from 200px */
                        top: 10px;
                    }

                    .desktop-break {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
}
