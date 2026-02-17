'use client';

import React from 'react';
import Image from 'next/image';

interface QualityImagesProps {
    bagImageSrc: string;
    splashImageSrc: string;
}

export default function QualityImages({ bagImageSrc, splashImageSrc }: QualityImagesProps) {
    return (
        <div className="quality-images">
            <div className="quality-iso-group">
                <div className="quality-splash-wrapper">
                    <Image 
                        src={splashImageSrc} 
                        alt="Medvita Water Splash"
                        width={700}
                        height={503}
                        className="quality-splash"
                        style={{ width: '100%', height: '100%' }}
                        priority
                    />
                </div>
                <div className="quality-bag-wrapper">
                    <Image 
                        src={bagImageSrc} 
                        alt="IV Drip Bag"
                        width={228}
                        height={238}
                        className="quality-bag"
                        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                    />
                </div>
            </div>

            <style jsx>{`
                /* ─── Images ─── */
                .quality-images {
                    width: 100%;
                    height: 490px; 
                    display: flex;
                    justify-content: center;
                    margin-top: var(--space-8);
                    margin-bottom: var(--space-8);
                }

                .quality-iso-group {
                    position: relative;
                    width: 700px;
                    max-width: 100%;
                    height: 100%;
                }

                .quality-splash-wrapper {
                    position: absolute;
                    z-index: 1;
                    width: 100%;
                    top: 0;
                    left: 0;
                }

                .quality-bag-wrapper {
                    position: absolute;
                    z-index: 2;
                    top: 0;
                    left: 0; 
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-bottom: 20px;
                }

                .quality-bag {
                    max-width: 228px;
                    max-height: 100%;
                    object-fit: contain;
                }

                /* ── Tablet ── */
                @media (max-width: 1024px) {
                    .quality-images {
                        height: 350px;
                    }

                    .quality-iso-group {
                        width: 500px;
                    }
                }

                /* ── Mobile ── */
                @media (max-width: 767px) {
                    .quality-images {
                        height: 250px;
                    }

                    .quality-iso-group {
                        width: 350px;
                    }
                }
            `}</style>
        </div>
    );
}
