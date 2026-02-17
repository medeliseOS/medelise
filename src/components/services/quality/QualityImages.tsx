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
                    margin-left: -155px;
                    top: -20px;
                    object-fit: contain;
                }

                .quality-bag {
                    width: 380px;
                    height: 397px;
                    position: absolute;
                    left: 50%;
                    margin-left: -25px;
                    top: -20px;
                    object-fit: contain;
                }

                /* ── Tablet ── */
                @media (max-width: 1024px) {
                    .quality-images {
                        height: 350px;
                    }
                    .quality-splash {
                        width: 480px;
                        height: 345px;
                        margin-left: -120px;
                        top: -15px;
                    }
                    .quality-bag {
                        width: 285px;
                        height: 298px;
                        margin-left: -20px;
                        top: -15px;
                    }
                }

                /* ── Mobile ── */
                @media (max-width: 767px) {
                    .quality-images {
                        height: 250px;
                    }
                    .quality-splash {
                        width: 340px;
                        height: 245px;
                        margin-left: -85px;
                        top: -10px;
                    }
                    .quality-bag {
                        width: 200px;
                        height: 209px;
                        margin-left: -15px;
                        top: -10px;
                    }
                }
            `}</style>
        </div>
    );
}
