'use client';

import React from 'react';
import Image from 'next/image';

interface QualityImagesProps {
    bagImageSrc: string;
    splashImageSrc: string;
}

export default function QualityImages({ bagImageSrc, splashImageSrc }: QualityImagesProps) {
    return (
        <div className="quality-images-container">
            <Image
                src={splashImageSrc}
                alt="Medvita Water Splash"
                width={642}
                height={461}
                priority
                className="quality-splash-img"
            />
            <Image
                src={bagImageSrc}
                alt="IV Drip Bag"
                width={380}
                height={397}
                className="quality-bag-img"
            />
            <style jsx>{`
                .quality-images-container {
                    width: 100%;
                    display: grid;
                    place-items: center;
                    position: relative;
                    margin-top: 32px;
                    margin-bottom: 32px;
                }
                /* Target the Next.js images via global selector if class is passed through, 
                   or use :global() to break scope if needed. 
                   Since we pass className, it should work with scoped styles if they are applied to the element.
                */
                :global(.quality-splash-img) {
                    grid-area: 1 / 1;
                    width: 100%;
                    height: auto;
                    max-width: 642px;
                    object-fit: contain;
                }
                :global(.quality-bag-img) {
                    grid-area: 1 / 1;
                    z-index: 2;
                    object-fit: contain;
                    width: 100%;
                    height: auto;
                    max-width: 380px; /* Mobile behavior defaulting */
                }

                @media (min-width: 1024px) {
                    :global(.quality-bag-img) {
                        width: 380px !important;
                        height: 397px !important;
                        /* Ensure we stick to the requested dimensions strictly on desktop */
                    }
                }
            `}</style>
        </div>
    );
}
