'use client';

import React from 'react';
import Image from 'next/image';

export default function VisionSection() {
    return (
        <section className="dn-vision">
            <style jsx>{`
                /* ═══════════════════════════════════════
                 * VISIUNEA NOASTRA (VISION SECTION)
                 * ═══════════════════════════════════════ */
                .dn-vision {
                    width: 100%;
                    background: var(--color-white);
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                }

                .dn-vision-inner {
                    width: 100%;
                    padding: 64px 112px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .dn-vision-content {
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: 64px;
                }

                /* ── LEFT COLUMN ── */
                .dn-vision-left {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 24px;
                }

                .dn-vision-text-group {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                .dn-vision-header {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .dn-vision-title-group {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    padding-bottom: 24px; /* Space for the orange line */
                }

                .dn-vision-title {
                    color: var(--color-primary);
                    font-size: 28px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 600;
                    line-height: 36px;
                }

                .dn-vision-desc {
                    color: var(--color-primary);
                    font-size: 16px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 400;
                    line-height: 24px;
                }

                .dn-vision-line-container {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 160px;
                    height: 12px;
                }

                .dn-vision-features {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                /* Feature Rows */
                .dn-feature-row {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .dn-feature-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .dn-feature-icon-box {
                    width: 24px;
                    height: 24px;
                    position: relative;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                /* Custom Icon Mask for coloring SVGs blue on left side */
                .dn-icon-mask {
                    width: 100%;
                    height: 100%;
                    background-color: var(--color-primary);
                    -webkit-mask-size: contain;
                    mask-size: contain;
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    -webkit-mask-position: center;
                    mask-position: center;
                }

                .dn-feature-title {
                    flex: 1;
                    color: var(--color-primary);
                    font-size: 16px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 500;
                    line-height: 24px;
                }

                .dn-feature-desc {
                    color: var(--color-primary);
                    font-size: 16px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 400;
                    line-height: 24px;
                }

                /* ── RIGHT COLUMN (CARDS) ── */
                .dn-vision-right {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                .dn-cards-row {
                    display: flex;
                    gap: 32px;
                }

                .dn-card {
                    flex: 1;
                    padding: 24px;
                    background: white;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    border-radius: 10px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    gap: 28px;
                }

                .dn-card-header {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    align-items: flex-start;
                }

                .dn-card-icon {
                    width: 40px;
                    height: 40px;
                    background: var(--color-primary);
                    border-radius: 10px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .dn-card-icon-inner {
                    position: relative;
                    width: 24px; height: 24px;
                }


                .dn-card-content {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .dn-card-title {
                    color: var(--color-primary);
                    font-size: 20px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 600;
                    line-height: 28px;
                }

                .dn-card-desc {
                    color: var(--color-primary);
                    font-size: 16px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 400;
                    line-height: 24px;
                }

                /* ── RESPONSIVE (MOBILE) ── */
                @media (max-width: 1024px) {
                    .dn-vision-inner {
                        padding: 48px 16px;
                    }
                    
                    .dn-vision-content {
                        flex-direction: column;
                        gap: 48px;
                    }

                    .dn-vision-left {
                        width: 100%;
                    }

                    .dn-vision-right {
                        width: 100%;
                        gap: 24px;
                    }

                    .dn-cards-row {
                        flex-direction: column;
                        gap: 24px;
                    }

                    /* Typography adjustments for mobile */
                    .dn-vision-title { font-size: 24px; lineHeight: 32px; }
                    .dn-vision-desc { font-size: 14px; line-height: 20px; }
                    .dn-feature-title { font-size: 14px; line-height: 20px; }
                    .dn-feature-desc { font-size: 12px; line-height: 16px; }
                    .dn-card-title { font-size: 18px; line-height: 28px; }
                    .dn-card-desc { font-size: 14px; line-height: 20px; }

                    .dn-vision-line-container { width: 140px; }
                }
            `}</style>

            <div className="dn-vision-inner">
                <div className="dn-vision-content">
                    {/* LEFT SIDE: Objectives List */}
                    <div className="dn-vision-left">
                        <div className="dn-vision-text-group">
                            <div className="dn-vision-header">
                                <div className="dn-vision-title-group">
                                    <div className="dn-vision-title">Unde vrem să ajungem?</div>
                                    <div className="dn-vision-desc">
                                        Viziunea noastră este clară:<br />
                                        Să devenim cel mai eficient și uman ecosistem digital de sănătate la domiciliu din Europa Centrală și de Est.<br />
                                        Un spațiu în care tehnologia, empatia și excelența profesională lucrează împreună pentru oameni.
                                    </div>
                                    <div className="dn-vision-line-container">
                                        <Image
                                            src="/icons-medelise/md-about/md-ico-underline-marker.webp"
                                            alt=""
                                            layout="fill"
                                            objectFit="contain"
                                            objectPosition="left"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="dn-vision-features">
                                {/* Feature 1: Efficiency/Resources -> dollar-coin.svg */}
                                <div className="dn-feature-row">
                                    <div className="dn-feature-header">
                                        <div className="dn-feature-icon-box">
                                            <div className="dn-icon-mask" style={{ maskImage: "url('/icons-medelise/md-about/md-ico-dollar-coin.webp')", WebkitMaskImage: "url('/icons-medelise/md-about/md-ico-dollar-coin.webp')" }} />
                                        </div>
                                        <div className="dn-feature-title">Gestionare inteligentă a intervențiilor</div>
                                    </div>
                                    <div className="dn-feature-desc">Timpul, resursele și rutele medicale sunt optimizate digital.</div>
                                </div>

                                {/* Feature 2: Speed -> timer.svg */}
                                <div className="dn-feature-row">
                                    <div className="dn-feature-header">
                                        <div className="dn-feature-icon-box">
                                            <div className="dn-icon-mask" style={{ maskImage: "url('/icons-medelise/md-about/md-ico-timer.webp')", WebkitMaskImage: "url('/icons-medelise/md-about/md-ico-timer.webp')" }} />
                                        </div>
                                        <div className="dn-feature-title">Intervenții rapide, fără bariere</div>
                                    </div>
                                    <div className="dn-feature-desc">Ajungem acolo unde este nevoie – eficient, uman, profesionist.</div>
                                </div>

                                {/* Feature 3: Data -> check-circle.svg */}
                                <div className="dn-feature-row">
                                    <div className="dn-feature-header">
                                        <div className="dn-feature-icon-box">
                                            <div className="dn-icon-mask" style={{ maskImage: "url('/icons-medelise/md-about/md-ico-pie-chart.webp')", WebkitMaskImage: "url('/icons-medelise/md-about/md-ico-pie-chart.webp')" }} />
                                        </div>
                                        <div className="dn-feature-title">Decizii bazate pe date reale</div>
                                    </div>
                                    <div className="dn-feature-desc">Folosim algoritmi clinici, nu impresii generale.</div>
                                </div>

                                {/* Feature 4: Collaboration -> user-group.svg */}
                                <div className="dn-feature-row">
                                    <div className="dn-feature-header">
                                        <div className="dn-feature-icon-box">
                                            <div className="dn-icon-mask" style={{ maskImage: "url('/icons-medelise/md-about/md-ico-user-group.webp')", WebkitMaskImage: "url('/icons-medelise/md-about/md-ico-user-group.webp')" }} />
                                        </div>
                                        <div className="dn-feature-title">Colaborare reală între echipe</div>
                                    </div>
                                    <div className="dn-feature-desc">Profesioniștii lucrează împreună în timp real, indiferent de locație.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Cards */}
                    <div className="dn-vision-right">
                        {/* Row 1 */}
                        <div className="dn-cards-row">
                            <div className="dn-card">
                                <div className="dn-card-header">
                                    <div className="dn-card-icon">
                                        <div className="dn-card-icon-inner">
                                            <Image
                                                src="/icons-medelise/md-about/md-ico-user-group.webp"
                                                alt=""
                                                width={24}
                                                height={24}
                                                style={{ filter: 'brightness(0) invert(1)' }} /* Make icon white on blue bg */
                                            />
                                        </div>
                                    </div>
                                    <div className="dn-card-content">
                                        <div className="dn-card-title">Echipă multidisciplinară, sincronizată</div>
                                        <div className="dn-card-desc">Medici, asistenți, terapeuți și nutriționiști colaborează în jurul pacientului, cu roluri și responsabilități clar definite, într-un singur flux digital.</div>
                                    </div>
                                </div>
                            </div>

                            <div className="dn-card">
                                <div className="dn-card-header">
                                    <div className="dn-card-icon">
                                        <div className="dn-card-icon-inner">
                                            <Image
                                                src="/icons-medelise/md-about/md-ico-email-open.webp"
                                                alt=""
                                                width={24}
                                                height={24}
                                                style={{ filter: 'brightness(0) invert(1)' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="dn-card-content">
                                        <div className="dn-card-title">Conexiune umană autentică</div>
                                        <div className="dn-card-desc">Comunicarea dintre pacient și profesionist se face ușor, sigur și empatic – prin notificări, mesaje și feedback continuu, fără zgomotul platformelor generaliste.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="dn-cards-row">
                            <div className="dn-card">
                                <div className="dn-card-header">
                                    <div className="dn-card-icon">
                                        <div className="dn-card-icon-inner">
                                            <Image
                                                src="/icons-medelise/md-about/md-ico-mobile.webp"
                                                alt=""
                                                width={24}
                                                height={24}
                                                style={{ filter: 'brightness(0) invert(1)' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="dn-card-content">
                                        <div className="dn-card-title">HomeCare fără granițe</div>
                                        <div className="dn-card-desc">Construim o rețea transfrontalieră de medici și asistenți, capabilă să răspundă rapid oriunde este nevoie — în România, diaspora sau alte piețe emergente.</div>
                                    </div>
                                </div>
                            </div>

                            <div className="dn-card">
                                <div className="dn-card-header">
                                    <div className="dn-card-icon">
                                        <div className="dn-card-icon-inner">
                                            {/* Using check-folder.svg for Tech/Process */}
                                            <Image
                                                src="/icons-medelise/md-about/md-ico-check-folder.webp"
                                                alt=""
                                                width={24}
                                                height={24}
                                                style={{ filter: 'brightness(0) invert(1)' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="dn-card-content">
                                        <div className="dn-card-title">Tehnologie pentru decizii rapide</div>
                                        <div className="dn-card-desc">careOS optimizează intervenția medicală la domiciliu prin algoritmi, rutare inteligentă și scoruri clinice AI — totul în timp real, fără birocrație.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
