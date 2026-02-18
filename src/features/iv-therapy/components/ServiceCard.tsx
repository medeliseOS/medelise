// ... imports ...
import React from 'react';
import Link from 'next/link';
import { IVDripService } from '@features/iv-therapy/data/ivDripServices';
import Button from '@ui/Button';

interface ServiceCardProps {
    service: IVDripService;
}

export default function ServiceCard({ service }: ServiceCardProps) {
    return (
        <div className="service-card group">
            <Link href={service.slug} className="card-link">
                <div className="image-container">
                    {/* Placeholder for IV Bag Image - matching the style of the screenshot */}
                    <div className="iv-bag-placeholder">
                        <div className="bag-shape">
                            <span className="bag-label">{service.imagePlaceholder}</span>
                        </div>
                    </div>
                </div>

                <div className="card-content">
                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-price">{service.price} RON</p>
                    <p className="card-desc">{service.shortDescription}</p>

                    <div className="btn-wrapper">
                        <Button variant="primary">
                            VEZI DETALII
                        </Button>
                    </div>
                </div>
            </Link>

            <style jsx>{`
                .service-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    padding: 24px;
                    border-radius: 12px;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    background: var(--color-white);
                }

                .service-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-md);
                }

                .card-link {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-decoration: none;
                    color: inherit;
                }

                .image-container {
                    width: 100%;
                    height: 250px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 24px;
                }

                .iv-bag-placeholder {
                    width: 140px;
                    height: 200px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }
                
                /* Simple CSS shape to resemble an IV bag contextually */
                .bag-shape {
                    width: 100px;
                    height: 160px;
                    background: var(--color-surface); /* Very light tint */
                    border: 1px solid var(--color-border-light);
                    border-radius: 16px 16px 40px 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 10px;
                    box-shadow: inset 0 0 20px rgba(76, 175, 80, 0.1);
                    position: relative;
                }

                .bag-shape::before {
                    content: '';
                    position: absolute;
                    top: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 40px;
                    height: 10px;
                    background: var(--color-border-light);
                    border-radius: 4px;
                }

                 .bag-shape::after {
                    content: '';
                    position: absolute;
                    bottom: -20px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 4px;
                    height: 20px;
                    background: var(--color-border-light);
                }

                .bag-label {
                    font-size: 10px;
                    font-weight: 600;
                    color: var(--color-text-muted);
                    text-transform: uppercase;
                    text-align: center;
                    line-height: 1.2;
                }

                .card-content {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                }

                .card-title {
                    font-family: var(--font-heading, "Inter", sans-serif);
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: var(--color-text);
                    margin: 0;
                }

                .card-price {
                    font-family: var(--font-body, "Inter", sans-serif);
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--color-text);
                    margin: 0;
                }

                .card-desc {
                    font-family: var(--font-body, "Inter", sans-serif);
                    font-size: 0.875rem;
                    color: var(--color-text-muted);
                    line-height: 1.5;
                    margin-bottom: 16px;
                    height: 42px; /* Limit height for uniform look */
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                .btn-wrapper {
                    display: flex;
                    justify-content: center;
                    width: auto;
                }
            `}</style>
        </div>
    );
}
