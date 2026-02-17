'use client';

import React from 'react';
import Image from 'next/image';

interface QualityImagesProps {
    bagImageSrc: string;
    splashImageSrc: string;
}

export default function QualityImages({ bagImageSrc, splashImageSrc }: QualityImagesProps) {
    return (
        <div style={{
            width: '100%',
            display: 'grid',
            placeItems: 'center',
            position: 'relative',
            marginTop: '32px',
            marginBottom: '32px',
            // No fixed height, let container hug content
        }}>
            {/* Splash Image - Defines the natural height of the grid cell */}
            <Image
                src={splashImageSrc}
                alt="Medvita Water Splash"
                width={642}
                height={461}
                priority
                style={{
                    gridArea: '1 / 1', // Overlap in first cell
                    width: '641.71px',
                    height: 'auto', // Responsive height
                    maxWidth: '100%',
                    objectFit: 'contain',
                    // Slight negative margin if needed to pull up, but let's stick to center hug
                }}
            />
            {/* Bag Image - Overlaps splash */}
            <Image
                src={bagImageSrc}
                alt="IV Drip Bag"
                width={380}
                height={397}
                style={{
                    gridArea: '1 / 1', // Overlap in first cell
                    width: 'auto', // Let aspect ratio drive width
                    height: 'auto',
                    maxWidth: '100%',
                    transform: 'scale(1.25)', // Keep visual size boost
                    transformOrigin: 'center 40%',
                    zIndex: 2,
                    objectFit: 'contain',
                }}
            />
        </div>
    );
}
