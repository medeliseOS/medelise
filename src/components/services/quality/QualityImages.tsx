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
            <div className="quality-images-inner">
                <Image 
                    src={splashImageSrc} 
                    alt="Medvita Water Splash"
                    width={642}
                    height={461}
                    className="quality-splash"
                    priority
                />
                <Image 
                    src={bagImageSrc} 
                    alt="IV Drip Bag"
                    width={380}
                    height={397}
                    className="quality-bag"
                />
            </div>

            <style jsx>{`
                .quality-images {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    margin-top: var(--space-8);
                    margin-bottom: var(--space-8);
                }

                .quality-images-inner {
                    width: 977px;
                    max-width: 100%;
                    height: 461px;
                    position: relative;
                    overflow: hidden;
                }

                .quality-splash {
                    width: 641.71px;
                    height: 461px;
                    left: 0;
                    top: -20px;
                    position: absolute;
                    object-fit: contain;
                }

                .quality-bag {
                    width: 380px;
                    height: 397px;
                    left: 130.85px;
                    top: -20px;
                    position: absolute;
                    object-fit: contain;
                }

                /* ── Tablet ── */
                @media (max-width: 1024px) {
                    .quality-images-inner {
                        width: 700px;
                        height: 340px;
                    }
                    .quality-splash {
                        width: 460px;
                        height: 330px;
                        top: -14px;
                    }
                    .quality-bag {
                        width: 272px;
                        height: 284px;
                        left: 94px;
                        top: -14px;
                    }
                }

                /* ── Mobile ── */
                @media (max-width: 767px) {
                    .quality-images-inner {
                        width: 100%;
                        height: 250px;
                    }
                    .quality-splash {
                        width: 330px;
                        height: 237px;
                        top: -10px;
                    }
                    .quality-bag {
                        width: 195px;
                        height: 204px;
                        left: 67px;
                        top: -10px;
                    }
                }
            `}</style>
        </div>
    );
}
