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
                priority
                style={{
                    width: '641.71px',
                    height: '461px',
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: '-20px',
                    objectFit: 'contain',
                }}
            />
            <Image
                src={bagImageSrc}
                alt="IV Drip Bag"
                width={380}
                height={397}
                style={{
                    width: '380px',
                    height: '397px',
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: '-20px',
                    objectFit: 'contain',
                    zIndex: 2,
                }}
            />

            <style jsx>{`
                .quality-images {
                    width: 100%;
                    height: 452px;
                    position: relative;
                    overflow: hidden;
                    margin-top: var(--space-8);
                    margin-bottom: var(--space-8);
                }

                /* ── Tablet ── */
                @media (max-width: 1024px) {
                    .quality-images {
                        height: 340px;
                    }
                }

                /* ── Mobile ── */
                @media (max-width: 767px) {
                    .quality-images {
                        height: 250px;
                    }
                }
            `}</style>
        </div>
    );
}
