'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ICONS } from '@shared/constants/icons';

export default function NewsTicker() {
    return (
        <div className="news-ticker-container">
            <style jsx>{`
                .news-ticker-container {
                    background-color: var(--color-surface-card); /* Light Grey */
                    color: var(--color-primary);
                    overflow: hidden;
                    white-space: nowrap;
                    position: relative;
                    width: 100%;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    z-index: 51; /* Above navbar main */
                }

                .ticker-content {
                    display: inline-flex;
                    align-items: center;
                    animation: marquee 30s linear infinite; /* Slower for elegance because of pulling effect */
                    padding-left: 100%; /* Start from right */
                }


                .ticker-item {
                    display: inline-block;
                    padding: 0 48px;
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: 0.5px;
                }

                .ticker-link {
                    color: var(--color-primary);
                    text-decoration: none;
                    transition: color 0.2s ease;
                }
                .ticker-link:hover {
                    color: var(--color-accent); /* Orange highlight on hover */
                    text-decoration: underline;
                }
                
                @keyframes marquee {
                    0% {
                        transform: translate3d(0, 0, 0);
                    }
                    100% {
                        transform: translate3d(-100%, 0, 0);
                    }
                }


                 .news-ticker-container:hover .ticker-content {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="ticker-content">

                <span className="ticker-item">
                    🎉 <Link href="/services" className="ticker-link">Oferte Speciale Octombrie: 20% Reducere la Prima Consultatie</Link>
                </span>
                <span className="ticker-item">
                    💉 <Link href="/programare" className="ticker-link">Campanie Vaccinare Antigripala - Programeaza Acum</Link>
                </span>
                <span className="ticker-item">
                    🏠 <Link href="/contact" className="ticker-link">Noi Zone de Acoperire in Bucuresti si Ilfov</Link>
                </span>
                <span className="ticker-item">
                    🎉 <Link href="/services" className="ticker-link">Oferte Speciale Octombrie: 20% Reducere la Prima Consultatie</Link>
                </span>
                <span className="ticker-item">
                    💉 <Link href="/programare" className="ticker-link">Campanie Vaccinare Antigripala - Programeaza Acum</Link>
                </span>
                <span className="ticker-item">
                    🏠 <Link href="/contact" className="ticker-link">Noi Zone de Acoperire in Bucuresti si Ilfov</Link>
                </span>
            </div>
        </div>
    );
}
