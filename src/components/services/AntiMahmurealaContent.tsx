'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function AntiMahmurealaContent() {
    return (
        <main className="service-page">
            {/* ── Hero Section ── */}
            <section className="service-hero">
                <div className="service-hero-content">
                    <h1 className="service-title">
                        Tratament IV <span className="text-accent">Anti-Mahmureală</span>
                    </h1>
                    <p className="service-subtitle">
                        Soluția rapidă pentru diminețile dificile. Elimină greața, durerile de cap și rehidratează organismul
                        în timp record, pentru ca tu să îți poți continua ziua fără probleme.
                    </p>
                    <div className="service-cta-group">
                        <Link href="/contact">
                            <Button variant="primary">Programează acum</Button>
                        </Link>
                        <p className="service-price">
                            de la <span className="font-semibold">450 RON</span>
                        </p>
                    </div>
                </div>
                <div className="service-hero-image">
                    {/* Placeholder image until user provides specific one */}
                    <div className="image-placeholder">
                        <span>IV Drip Hangover Image</span>
                    </div>
                </div>
            </section>

            {/* ── Benefits Section ── */}
            <section className="service-benefits">
                <div className="benefits-container">
                    <h2 className="section-heading">Beneficii Cheie</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3 className="benefit-title">Detoxifiere Rapidă</h3>
                            <p className="benefit-desc">Accelerează eliminarea toxinelor din organism și restabilește funcția hepatică normală.</p>
                        </div>
                        <div className="benefit-card">
                            <h3 className="benefit-title">Stop Greață & Cefalee</h3>
                            <p className="benefit-desc">Include medicamentație specifică pentru calmarea rapidă a simptomelor digestive și a durerilor de cap.</p>
                        </div>
                        <div className="benefit-card">
                            <h3 className="benefit-title">Rehidratare Profundă</h3>
                            <p className="benefit-desc">Restabilește instantaneu nivelul de fluide și electroliți pierduți, eliminând senzația de epuizare.</p>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .service-page {
                    width: 100%;
                    min-height: 100vh;
                    background: var(--color-surface);
                    font-family: var(--font-body);
                }

                /* ── Hero ── */
                .service-hero {
                    width: 100%;
                    max-width: var(--max-width);
                    margin: 0 auto;
                    padding: var(--space-section-py) var(--space-section-px);
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-8);
                    align-items: center;
                }

                @media (min-width: 1025px) {
                    .service-hero {
                        flex-direction: row;
                        justify-content: space-between;
                        gap: var(--space-12);
                    }
                }

                .service-hero-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-6);
                }

                .service-title {
                    font-family: var(--font-heading);
                    font-size: var(--text-h2);
                    color: var(--color-primary);
                    line-height: 1.2;
                }

                .text-accent {
                    color: var(--color-accent);
                }

                .service-subtitle {
                    font-size: var(--text-body-lg);
                    color: var(--color-text);
                    max-width: 60ch;
                    line-height: 1.6;
                }

                .service-cta-group {
                    display: flex;
                    align-items: center;
                    gap: var(--space-6);
                    margin-top: var(--space-4);
                }

                .service-price {
                    font-size: var(--text-body);
                    color: var(--color-primary);
                }

                .service-hero-image {
                    flex: 1;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .image-placeholder {
                    width: 100%;
                    max-width: 500px;
                    height: 350px;
                    background: var(--color-surface-card);
                    border-radius: var(--radius-lg);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: var(--color-text-muted);
                    border: 1px dashed var(--color-border-light);
                }

                /* ── Benefits ── */
                .service-benefits {
                    width: 100%;
                    background: var(--color-white);
                    padding: var(--space-section-py) var(--space-section-px);
                }

                .benefits-container {
                    width: 100%;
                    max-width: var(--max-width);
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-10);
                }

                .section-heading {
                    font-family: var(--font-heading);
                    font-size: var(--text-h3);
                    color: var(--color-primary);
                    text-align: center;
                }

                .benefits-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: var(--space-6);
                }

                @media (min-width: 768px) {
                    .benefits-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                .benefit-card {
                    padding: var(--space-6);
                    background: var(--color-surface);
                    border-radius: var(--radius-main);
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-3);
                    transition: transform 0.2s ease;
                }

                .benefit-card:hover {
                    transform: translateY(-4px);
                }

                .benefit-title {
                    font-family: var(--font-heading);
                    font-size: var(--text-h5);
                    color: var(--color-primary);
                }

                .benefit-desc {
                    font-size: var(--text-body);
                    color: var(--color-text);
                    line-height: 1.5;
                }
            `}</style>
        </main>
    );
}
