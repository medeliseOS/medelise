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
            height: '452px',
            position: 'relative',
            overflow: 'hidden',
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
                    width: 'auto',
                    height: '100%',
                    position: 'absolute',
                    left: '50%',
                    // Scale up by 1.25 to make the bag appear larger/wider while maintaining aspect ratio
                    transform: 'translateX(-50%) scale(1.25)',
                    transformOrigin: 'center 40%', // Pivot scaling slightly higher to keep top visible
                    top: '-20px',
                    objectFit: 'contain',
                    zIndex: 2,
                }}
            />
        </div>
    );
}
