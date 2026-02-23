'use client';

import React from 'react';

/* ── Static Card Data ────────────────────────────────────────────────────── */
const CARDS = [
    {
        titleMobile: 'Reduce hiperexcitabilitatea musculară',
        titleDesktop: 'Calmează rapid tensiunea musculară',
        descMobile: 'Magneziu cu biodisponibilitate ridicată, pentru relaxare musculară și antispasm',
        descDesktop: 'Magneziul administrat direct în sânge reduce spasmele și relaxează musculatura prin acțiune imediată, în cazuri de contracturi, efort fizic intens sau tensiune cronică.',
    },
    {
        titleMobile: 'Reface nivelul vitaminelor B esențiale',
        titleDesktop: 'Restabilește nivelul vitaminelor din grupul B',
        descMobile: 'Combate epuizarea nervoasă și optimizează metabolismul energetic',
        descDesktop: 'Vitaminele esențiale pentru sistemul nervos și energie celulară sunt absorbite complet, ajutând în perioadele de stres, oboseală sau epuizare mentală.',
    },
    {
        titleMobile: 'Eficiență crescută față de administrarea orală',
        titleDesktop: 'Eficiență net superioară față de pastile',
        descMobile: 'Biodisponibilitate de 90% comparativ cu sub 20% oral',
        descDesktop: 'Prin perfuzie, substanțele active ajung direct în circulație, cu o absorbție de peste 90% – față de mai puțin de 20% în cazul administrării orale.',
    },
    {
        titleMobile: 'Siguranță și protocol medical',
        titleDesktop: 'Administrare sigură, sub supraveghere medicală',
        descMobile: 'Personal Medelise, respectarea diluțiilor și monitorizare completă',
        descDesktop: 'Tratamentul este pregătit și monitorizat de personal Medelise, cu respectarea strictă a dozelor, diluțiilor și protocoalelor – pentru efect maxim și zero riscuri.',
    },
] as const;

/* ── Reusable Card ───────────────────────────────────────────────────────── */
function InfoCard({ titleMobile, titleDesktop, descMobile, descDesktop }: (typeof CARDS)[number]) {
    return (
        <div className="p-6 bg-white rounded-lg md:rounded-[20px] outline outline-1 outline-[#E4E7EC] flex flex-col gap-3">
            <h3 className="text-[var(--color-primary)] font-heading font-semibold text-lg md:text-lg leading-snug md:leading-7 break-words">
                <span className="block md:hidden">{titleMobile}</span>
                <span className="hidden md:block">{titleDesktop}</span>
            </h3>
            <p className="text-[var(--color-primary)] font-heading font-normal text-base md:text-lg leading-6 md:leading-7 break-words">
                <span className="block md:hidden">{descMobile}</span>
                <span className="hidden md:block">{descDesktop}</span>
            </p>
        </div>
    );
}

/* ── Component ───────────────────────────────────────────────────────────── */
export default function ProductWhyItWorks() {
    return (
        <section className="w-full max-w-[1920px] mx-auto bg-white px-1 py-8 md:py-16 flex flex-col items-center overflow-hidden">
            <div className="w-full flex flex-col items-center gap-8">

                {/* ── Title & Subtitle ── */}
                <div className="w-full flex flex-col items-center gap-4 md:gap-6 lg:gap-9">
                    <h2 className="text-center text-[var(--color-primary)] font-heading font-bold text-lg md:text-[28px] lg:text-4xl leading-7 md:leading-9 lg:leading-[44px] break-words">
                        De ce PainOFF funcționează atât de rapid și eficient?
                    </h2>

                    {/* Subtitle Mobile */}
                    <p className="block md:hidden text-center text-[var(--color-primary)] font-heading font-medium text-base leading-6 break-words">
                        Mai simplu. Mai rapid. Mai sigur.<br />Totul pentru sănătatea ta.
                    </p>

                    {/* Subtitle Tablet/Desktop */}
                    <p className="hidden md:block text-center text-[var(--color-primary)] font-heading font-medium text-lg lg:text-xl leading-7 max-w-[998px] break-words">
                        Formula special concepută și administrarea intravenoasă permit absorbția imediată și efecte vizibile în timp scurt.
                    </p>
                </div>

                {/* ── Content Grid ── */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch mt-16">

                    {/* Center Image */}
                    <div className="order-1 md:col-span-2 lg:col-span-1 lg:order-2 flex justify-center items-center py-4 md:py-0">
                        <div className="relative w-[179px] h-[326px] md:w-[340px] md:h-[620px] lg:w-[384px] lg:h-[544px] rounded-lg md:rounded-[20px] overflow-hidden">
                            <img
                                src="/images-medelise/md-iv-drip/md-img-drip-dehydration.webp"
                                alt="Deshidratare IV Drip"
                                className="w-full h-full object-contain object-center rounded-lg md:rounded-[20px]"
                            />
                        </div>
                    </div>

                    {/* Left Column (Cards 1-2) */}
                    <div className="order-2 md:col-span-2 lg:col-span-1 lg:order-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6 lg:gap-8">
                        {CARDS.slice(0, 2).map((card, i) => (
                            <InfoCard key={i} {...card} />
                        ))}
                    </div>

                    {/* Right Column (Cards 3-4) */}
                    <div className="order-3 md:col-span-2 lg:col-span-1 lg:order-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6 lg:gap-8">
                        {CARDS.slice(2, 4).map((card, i) => (
                            <InfoCard key={i} {...card} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
