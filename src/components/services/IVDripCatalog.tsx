'use client';

import React from 'react';
import ServiceCard from '@/components/services/ServiceCard';
import { IV_DRIP_SERVICES } from '@/data/ivDripServices';

export default function IVDripCatalog() {
    return (
        <main className="iv-drip-catalog-page">
            <div className="container">
                <header className="page-header">
                    <h1 className="page-title">
                        Vitamin IV <span className="font-bold">Therapy</span>
                    </h1>
                    <p className="page-subtitle">
                        Experimentează toate beneficiile terapiei IV în confortul propriei case.
                        Tratamente personalizate pentru nevoile tale specifice.
                    </p>
                </header>

                <div className="services-grid">
                    {IV_DRIP_SERVICES.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>

            <style jsx>{`
                .iv-drip-catalog-page {
                    min-height: 100vh;
                    background-color: #f8f9fa; /* Light grey background for catalog */
                    padding: 60px 20px;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .page-header {
                    text-align: center;
                    margin-bottom: 60px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 16px;
                }

                .page-title {
                    font-family: var(--font-heading, "Inter", sans-serif);
                    font-size: 2.5rem;
                    color: #111;
                    margin: 0;
                    font-weight: 300; /* Thin part */
                }

                .font-bold {
                    font-weight: 700; /* Bold 'Therapy' */
                }

                .page-subtitle {
                    font-family: var(--font-body, "Inter", sans-serif);
                    font-size: 1rem;
                    color: #666;
                    max-width: 600px;
                    line-height: 1.6;
                }

                .services-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 30px;
                }

                @media (min-width: 640px) {
                    .services-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (min-width: 1024px) {
                    .services-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
            `}</style>
        </main>
    );
}
