'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function SecurityScanner() {
    const streamRef = useRef<HTMLDivElement>(null);

    // Simple auto-scroll animation effect for the cards
    useEffect(() => {
        const stream = streamRef.current;
        if (!stream) return;

        let animationId: number;
        let position = 0;
        const speed = 0.5; // pixels per frame

        const animate = () => {
            position -= speed;
            // Reset position for seamless loop (assuming content is duplicated enough)
            // This is a basic implementation; for a perfect loop, we'd need to measure content width.
            // For now, we'll let it scroll. 
            // In a real implementation with known width, we'd mod the position.

            if (stream) {
                stream.style.transform = `translateX(${position}px)`;
            }
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div className="cs-container">
            <div className="cs-gradient-overlay"></div>

            <div className="cs-header">
                <div className="cs-logo-row">
                    <span className="cs-logo-text">MEDELISE</span>
                    <div className="cs-logo-line"></div>
                </div>
            </div>

            {/* Canvas placeholders - in a real implementation these would be WebGL/Three.js */}
            <canvas className="cs-particle-canvas" width="823" height="250"></canvas>
            <canvas className="cs-scanner-canvas" width="823" height="300"></canvas>

            <div className="cs-card-stream" ref={streamRef}>
                {/* Duplicated cards for seamless scrolling effect */}
                {Array.from({ length: 12 }).map((_, i) => (
                    <div className="cs-card-wrapper" key={i}>
                        <div className="cs-card cs-card-normal">
                            <Image
                                src="/images/security/Touch ID.png"
                                alt="Security Scan"
                                width={200}
                                height={300}
                                className="cs-card-image"
                            />
                        </div>
                        <div className="cs-card cs-card-ascii">
                            <div className="cs-ascii-content">
                                {`// compiled preview • scanner demo
const SCAN_WIDTH = 8;
const FADE_ZONE = 35;
const MAX_PARTICLES = 2500;
const TRANSITION = 0.05;
function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }
function lerp(a, b, t) { return a + (b - a) * t; }`}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cs-scanning-label">
                <span className="cs-scanning-text">Scanning</span>
                <a href="https://medelise.com/" target="_blank" rel="noopener noreferrer" className="cs-scanning-link">
                    identity
                    <span className="cs-dots">
                        <span className="cs-dot cs-dot-1">.</span>
                        <span className="cs-dot cs-dot-2">.</span>
                        <span className="cs-dot cs-dot-3">.</span>
                    </span>
                </a>
            </div>

            <div className="cs-footer">
                <div className="cs-sec-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <span>SECURITATE DE NIVEL MILITAR</span>
                </div>
                <p className="cs-sec-desc">
                    Datele tale sunt protejate cu criptare AES-256 și autentificare biometrică avansată.
                    Fiecare acces este monitorizat și validat în timp real.
                </p>
                <p className="cs-sec-badges">
                    🔒 Conexiune securizată • Certificat SSL/TLS • Conformitate GDPR
                </p>
            </div>

            <style jsx>{`
                .cs-container {
                    position: relative;
                    width: 100%;
                    max-width: 100%;
                    height: 500px; /* Adjust height as needed */
                    overflow: hidden;
                    background-color: var(--color-surface); /* Background requested: #F8F9FA */
                    border-radius: var(--radius-xl);
                    font-family: var(--font-body);
                }

                .cs-gradient-overlay {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 100%);
                    pointer-events: none;
                    z-index: 10;
                }

                .cs-header {
                    position: absolute;
                    top: 24px;
                    left: 24px;
                    z-index: 20;
                }

                .cs-logo-row {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .cs-logo-text {
                    font-family: var(--font-brand);
                    font-size: 14px;
                    color: var(--color-primary);
                    letter-spacing: 0.1em;
                }

                .cs-logo-line {
                    width: 40px;
                    height: 1px;
                    background-color: var(--color-accent);
                }

                .cs-particle-canvas,
                .cs-scanner-canvas {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                }

                .cs-card-stream {
                    display: flex;
                    gap: 20px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%); /* Initial centering */
                    /* Animation handling would go here or in JS */
                    will-change: transform;
                }

                .cs-card-wrapper {
                    position: relative;
                    width: 200px;
                    height: 300px;
                    flex-shrink: 0;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: var(--shadow-md);
                    background: white;
                }

                .cs-card {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                }

                .cs-card-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .cs-card-ascii {
                    background: #111;
                    color: #0f0;
                    font-family: monospace;
                    padding: 10px;
                    overflow: hidden;
                    opacity: 0.9;
                    /* Clip-path logic would be needed for the scanner effect */
                }

                .cs-scanning-label {
                    position: absolute;
                    bottom: 120px; /* Adjust based on footer height */
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 20;
                    background: rgba(255, 255, 255, 0.9);
                    padding: 8px 16px;
                    border-radius: 20px;
                    border: 1px solid var(--color-border-light);
                    display: flex;
                    gap: 8px;
                    align-items: center;
                    font-size: 14px;
                }

                .cs-scanning-text {
                    color: var(--color-text-muted);
                }

                .cs-scanning-link {
                    color: var(--color-primary);
                    font-weight: 600;
                    text-decoration: none;
                }

                .cs-footer {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    padding: 24px;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-top: 1px solid var(--color-border-light);
                    z-index: 30;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 8px;
                }

                .cs-sec-title {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-family: var(--font-heading);
                    font-weight: 700;
                    font-size: 14px;
                    color: var(--color-text);
                    letter-spacing: 0.05em;
                }

                .cs-sec-desc {
                    font-size: 14px;
                    color: var(--color-text-muted);
                    max-width: 600px;
                    line-height: 1.5;
                }

                .cs-sec-badges {
                    font-size: 12px;
                    color: var(--color-text-muted);
                    opacity: 0.8;
                    margin-top: 4px;
                }

                /* Dots animation */
                .cs-dot {
                    animation: blink 1.4s infinite both;
                }
                .cs-dot-1 { animation-delay: 0s; }
                .cs-dot-2 { animation-delay: 0.2s; }
                .cs-dot-3 { animation-delay: 0.4s; }

                @keyframes blink {
                    0% { opacity: 0.2; }
                    20% { opacity: 1; }
                    100% { opacity: 0.2; }
                }
            `}</style>
        </div>
    );
}
