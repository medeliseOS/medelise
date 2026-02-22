'use client';

import { useState } from 'react';

/* ─── Types ─────────────────────────────────────────────────────────────── */
export type IVDripTab = 'description' | 'reviews';

export interface IVDripProductTabsProps {
    /** Conținut afișat pe tab-ul Descriere (descriere, studii, beneficii etc.) */
    descriptionContent: React.ReactNode;
    /** Conținut afișat pe tab-ul Recenzii */
    reviewsContent: React.ReactNode;
    /** Tab activ implicit (default: 'description') */
    defaultTab?: IVDripTab;
}

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function IVDripProductTabs({
    descriptionContent,
    reviewsContent,
    defaultTab = 'description',
}: IVDripProductTabsProps) {
    const [activeTab, setActiveTab] = useState<IVDripTab>(defaultTab);
    const [mobileOpen, setMobileOpen] = useState(false);

    const tabLabel: Record<IVDripTab, string> = {
        description: 'Descriere',
        reviews: 'Recenzii clienți',
    };

    /* Mobile accordion: toggle dropdown, switch tab */
    const handleMobileSelect = (tab: IVDripTab) => {
        setActiveTab(tab);
        setMobileOpen(false);
    };

    return (
        <section className="w-full bg-white px-[16px] md:px-[32px] xl:px-[480px] py-[16px] flex flex-col justify-start items-center md:items-start gap-[10px] mx-auto overflow-hidden">
            {/* ── Desktop & Tablet: underline tab bar ── */}
            <div className="hidden md:flex self-stretch justify-center items-start">
                <button
                    className={`flex items-center justify-between py-[10px] px-[20px] w-[235.5px] xl:w-[240px] border-b-2 transition-colors ${activeTab === 'description' ? 'border-[#FE5D16]' : 'border-[#BDE0FF] hover:border-[#FE5D16]/50'
                        }`}
                    onClick={() => setActiveTab('description')}
                    aria-selected={activeTab === 'description'}
                    role="tab"
                >
                    <span
                        className={`font-semibold break-words mx-auto xl:mx-0 ${activeTab === 'description' ? 'text-[#213170]' : 'text-[#213170]'
                            } font-['DM_Sans'] text-[16px] leading-[24px] xl:font-['DM_Sans'] xl:text-[18px] xl:leading-[28px]`}
                    >
                        Descriere
                    </span>
                </button>
                <button
                    className={`flex items-center justify-between py-[10px] px-[20px] w-[235.5px] xl:w-[240px] border-b-2 transition-colors ${activeTab === 'reviews' ? 'border-[#FE5D16]' : 'border-[#BDE0FF] hover:border-[#FE5D16]/50'
                        }`}
                    onClick={() => setActiveTab('reviews')}
                    aria-selected={activeTab === 'reviews'}
                    role="tab"
                >
                    <span
                        className={`font-semibold break-words mx-auto xl:mx-0 ${activeTab === 'reviews' ? 'text-[#213170]' : 'text-[#213170]'
                            } font-['DM_Sans'] text-[16px] leading-[24px] xl:font-['DM_Sans'] xl:text-[18px] xl:leading-[28px]`}
                    >
                        Recenzii clienți
                    </span>
                </button>
            </div>

            {/* ── Mobile: accordion / dropdown selector ── */}
            <div className="flex w-full md:hidden flex-col self-stretch gap-[4px] relative">
                <div className="flex flex-col self-stretch gap-[6px]">
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="flex items-center justify-between self-stretch py-[12px] pl-[12px] pr-[21px] bg-white rounded-[5px] outline outline-1 outline-[#F2F4F7] bg-white cursor-pointer"
                        aria-expanded={mobileOpen}
                    >
                        <span className="flex-1 text-[#213170] text-[16px] font-['DM_Sans'] font-semibold leading-[24px] break-words text-left">
                            {tabLabel[activeTab]}
                        </span>
                        <div className="w-[12px] h-[7px] flex items-center justify-center">
                            <svg
                                className={`w-[12px] h-[7px] transform transition-transform ${mobileOpen ? 'rotate-180' : ''}`}
                                viewBox="0 0 12 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M1 1L6 6L11 1" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </button>
                </div>

                {mobileOpen && (
                    <div className="absolute top-[100%] mt-1 left-0 w-full bg-white outline outline-1 outline-[#F2F4F7] rounded-[5px] shadow-sm z-10 flex flex-col overflow-hidden">
                        {(['description', 'reviews'] as IVDripTab[]).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleMobileSelect(tab)}
                                className={`w-full text-left px-[12px] py-[12px] text-[16px] font-['DM_Sans'] font-semibold leading-[24px] transition-colors ${activeTab === tab ? 'text-[#FE5D16] bg-gray-50' : 'text-[#213170] hover:bg-gray-50'
                                    }`}
                            >
                                {tabLabel[tab]}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* ── Content area ── */}
            <div className="w-full mt-2" role="tabpanel">
                {activeTab === 'description' ? descriptionContent : reviewsContent}
            </div>
        </section>
    );
}
