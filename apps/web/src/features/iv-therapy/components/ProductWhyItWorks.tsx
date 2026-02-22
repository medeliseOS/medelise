'use client';

import React from 'react';

export default function ProductWhyItWorks() {
    return (
        <section className="w-full max-w-[1920px] mx-auto bg-white px-[4px] py-[32px] md:py-[64px] flex flex-col items-center overflow-hidden">
            <div className="w-full flex flex-col items-center gap-[32px]">

                {/* ── Title & Subtitle Section ── */}
                <div className="w-full flex flex-col items-center gap-[16px] md:gap-[24px] lg:gap-[36px]">
                    <h2 className="text-center text-[#213170] font-['Montserrat'] font-bold text-[18px] md:text-[28px] lg:text-[36px] leading-[28px] md:leading-[36px] lg:leading-[44px] break-words">
                        De ce PainOFF funcționează atât de rapid și eficient?
                    </h2>

                    {/* Subtitlu Mobile */}
                    <p className="block md:hidden text-center text-[#213170] font-['Montserrat'] font-medium text-[16px] leading-[24px] break-words">
                        Mai simplu. Mai rapid. Mai sigur.<br />Totul pentru sănătatea ta.
                    </p>

                    {/* Subtitlu Tablet/Desktop */}
                    <p className="hidden md:block text-center text-[#213170] font-['Montserrat'] font-medium text-[18px] lg:text-[20px] leading-[28px] max-w-[998px] break-words">
                        Formula special concepută și administrarea intravenoasă permit absorbția imediată și efecte vizibile în timp scurt.
                    </p>
                </div>

                {/* ── Content Grid ── */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-[16px] items-stretch mt-[64px]">

                    {/* Img Center (Mobile: Top, Tablet: Top, Desktop: Center) */}
                    <div className="order-1 md:col-span-2 lg:col-span-1 lg:order-2 flex justify-center items-center py-[16px] md:py-[0]">
                        <div className="relative w-[179px] h-[326px] md:w-[340px] md:h-[620px] lg:w-[384px] lg:h-[544px] rounded-[8px] md:rounded-[20px] overflow-hidden">
                            <img
                                src="/images-medelise/md-iv-drip/md-img-drip-dehydration.webp"
                                alt="Deshidratare IV Drip"
                                className="w-full h-full object-contain object-center rounded-[8px] md:rounded-[20px]"
                            />
                        </div>
                    </div>

                    {/* Column 1 (Left Cards) */}
                    <div className="order-2 md:col-span-2 lg:col-span-1 lg:order-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[16px] md:gap-[24px] lg:gap-[32px]">
                        {/* Card 1 */}
                        <div className="p-[24px] bg-white rounded-[8px] md:rounded-[20px] outline outline-1 outline-[#E4E7EC] flex flex-col justify-start items-start gap-[12px]">
                            {/* Title */}
                            <h3 className="text-[#213170] font-['Montserrat'] font-semibold text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] break-words">
                                <span className="block md:hidden">Reduce hiperexcitabilitatea musculară</span>
                                <span className="hidden md:block">Calmează rapid tensiunea musculară</span>
                            </h3>
                            {/* Description */}
                            <p className="text-[#213170] font-['Montserrat'] font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] break-words">
                                <span className="block md:hidden">Magneziu cu biodisponibilitate ridicată, pentru relaxare musculară și antispasm</span>
                                <span className="hidden md:block">Magneziul administrat direct în sânge reduce spasmele și relaxează musculatura prin acțiune imediată, în cazuri de contracturi, efort fizic intens sau tensiune cronică.</span>
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="p-[24px] bg-white rounded-[8px] md:rounded-[20px] outline outline-1 outline-[#E4E7EC] flex flex-col justify-start items-start gap-[12px]">
                            {/* Title */}
                            <h3 className="text-[#213170] font-['Montserrat'] font-semibold text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] break-words">
                                <span className="block md:hidden">Reface nivelul vitaminelor B esențiale</span>
                                <span className="hidden md:block">Restabilește nivelul vitaminelor din grupul B</span>
                            </h3>
                            {/* Description */}
                            <p className="text-[#213170] font-['Montserrat'] font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] break-words">
                                <span className="block md:hidden">Combate epuizarea nervoasă și optimizează metabolismul energetic</span>
                                <span className="hidden md:block">Vitaminele esențiale pentru sistemul nervos și energie celulară sunt absorbite complet, ajutând în perioadele de stres, oboseală sau epuizare mentală.</span>
                            </p>
                        </div>
                    </div>

                    {/* Column 2 (Right Cards) */}
                    <div className="order-3 md:col-span-2 lg:col-span-1 lg:order-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[16px] md:gap-[24px] lg:gap-[32px]">
                        {/* Card 3 */}
                        <div className="p-[24px] bg-white rounded-[8px] md:rounded-[20px] outline outline-1 outline-[#E4E7EC] flex flex-col justify-start items-start gap-[12px]">
                            {/* Title */}
                            <h3 className="text-[#213170] font-['Montserrat'] font-semibold text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] break-words">
                                <span className="block md:hidden">Eficiență crescută față de administrarea orală</span>
                                <span className="hidden md:block">Eficiență net superioară față de pastile</span>
                            </h3>
                            {/* Description */}
                            <p className="text-[#213170] font-['Montserrat'] font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] break-words">
                                <span className="block md:hidden">Biodisponibilitate de 90% comparativ cu sub 20% oral</span>
                                <span className="hidden md:block">Prin perfuzie, substanțele active ajung direct în circulație, cu o absorbție de peste 90% – față de mai puțin de 20% în cazul administrării orale.</span>
                            </p>
                        </div>
                        {/* Card 4 */}
                        <div className="p-[24px] bg-white rounded-[8px] md:rounded-[20px] outline outline-1 outline-[#E4E7EC] flex flex-col justify-start items-start gap-[12px]">
                            {/* Title */}
                            <h3 className="text-[#213170] font-['Montserrat'] font-semibold text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] break-words">
                                <span className="block md:hidden">Siguranță și protocol medical</span>
                                <span className="hidden md:block">Administrare sigură, sub supraveghere medicală</span>
                            </h3>
                            {/* Description */}
                            <p className="text-[#213170] font-['Montserrat'] font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] break-words">
                                <span className="block md:hidden">Personal Medelise, respectarea diluțiilor și monitorizare completă</span>
                                <span className="hidden md:block">Tratamentul este pregătit și monitorizat de personal Medelise, cu respectarea strictă a dozelor, diluțiilor și protocoalelor – pentru efect maxim și zero riscuri.</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
