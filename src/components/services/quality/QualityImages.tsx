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

            <style jsx>{`
                .quality-images {
                    width: 100%;
                    height: 461px;
                    position: relative;
                    overflow: hidden;
                    margin-top: var(--space-8);
                    margin-bottom: var(--space-8);
                }

                .quality-splash {
                    width: 641.71px;
                    height: 461px;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: -20px;
                    object-fit: contain;
                }

                .quality-bag {
                    width: 380px;
                    height: 397px;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: -20px;
                    object-fit: contain;
                    z-index: 2;
                }

                /* ── Tablet ── */
                @media (max-width: 1024px) {
                    .quality-images {
                        height: 350px;
                    }
                    .quality-splash {
                        width: 490px;
                        height: 352px;
                        top: -15px;
                    }
                    .quality-bag {
                        width: 290px;
                        height: 303px;
                        top: -15px;
                    }
                }

                /* ── Mobile ── */
                @media (max-width: 767px) {
                    .quality-images {
                        height: 260px;
                    }
                    .quality-splash {
                        width: 360px;
                        height: 259px;
                        top: -10px;
                    }
                    .quality-bag {
                        width: 213px;
                        height: 223px;
                        top: -10px;
                    }
                }
            `}</style>
        </div>
    );
}
