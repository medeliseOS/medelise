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
        }}>
            <Image
                src={splashImageSrc}
                alt="Medvita Water Splash"
                width={642}
                height={461}
                priority
                style={{
                    gridArea: '1 / 1',
                    width: '641.71px',
                    height: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain',
                }}
            />
            <Image
                src={bagImageSrc}
                alt="IV Drip Bag"
                width={380}
                height={397}
                style={{
                    gridArea: '1 / 1',
                    // User requested strict 100% width/height to match placeholder behavior
                    width: '100%',
                    height: '100%',
                    maxWidth: '100%',
                    zIndex: 2,
                    objectFit: 'contain',
                }}
            />
        </div>
    );
}
