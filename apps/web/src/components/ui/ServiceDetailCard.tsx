'use client';

import React, { useState } from 'react';
import { 
  PlusCircle, 
  MinusCircle, 
  Calendar, 
  Clock, 
  AlertCircle,
  ShieldAlert,
  HeartPulse,
  Activity,
  FileText,
  Stethoscope,
  FileSignature,
  Users,
  Award,
  MapPin,
  CreditCard,
  ShieldCheck,
  XCircle,
  Syringe
} from 'lucide-react';

export interface ServiceDetailCardProps {
  title: string;
  description: string;
  category?: string;
  triageLevel: 1 | 2 | 3 | 4 | 5;
  triageType: string;
  triageDescription: string;
  duration: string;
  price: number | 'N/A';
  currency?: string;
  cnasStatus: 'Decontat' | 'Nedecontat';

  indications: string;
  contraindications: string;
  immediateBenefit: string;
  premedication: string;
  monitoringNeed: string;

  patientPrep: string;
  medicalRecommendation: string;
  referralTicket: string;

  crew: string;
  expertiseLevel: string;
  location: string;

  cnasInfo: string;
  privateInsurance: string;
  coPayment: string;

  onSchedule?: () => void;
}

export default function ServiceDetailCard({
  title,
  description,
  category = '[Category]',
  triageLevel,
  triageType,
  triageDescription,
  duration,
  price,
  currency = 'RON',
  cnasStatus,

  indications,
  contraindications,
  immediateBenefit,
  premedication,
  monitoringNeed,

  patientPrep,
  medicalRecommendation,
  referralTicket,

  crew,
  expertiseLevel,
  location,

  cnasInfo,
  privateInsurance,
  coPayment,

  onSchedule,
}: ServiceDetailCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const isDecontat = cnasStatus === 'Decontat';
  
  // Custom Status Badge Colors based on exact HTML specification
  const badgeColor = isDecontat ? 'text-[#40BF7F] border-[#9FDFBF]' : 'text-[#F64C4C] border-[#F98686]';
  const badgeIcon = isDecontat ? <ShieldCheck className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" /> : <XCircle className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" />;

  // Triage Colors based on Level (3=Green/Mediu, 4-5=Red/Ridicat, 1-2=Blue/Non-urgent)
  const getTriageColors = (level: number) => {
    if (level >= 4) return { text: 'text-[#E31C40]', border: 'border-[#E31C40]', gradient: 'from-[#E31C40] to-[#F64C4C]' };
    if (level === 3) return { text: 'text-[#40BF7F]', border: 'border-[#40BF7F]', gradient: 'from-[#40BF7F] to-[#40BF7F]' };
    return { text: 'text-[#33A9FF]', border: 'border-[#33A9FF]', gradient: 'from-[#33A9FF] to-[#33A9FF]' };
  };
  const triageColors = getTriageColors(triageLevel);

  // Exact Typography variables per design specifications 
  const sectionTitleClass = "text-[#213170] text-[14px] md:text-[16px] xl:text-[18px] font-medium leading-[20px] md:leading-[24px] xl:leading-[28px] mb-3 xl:mb-4 flex items-center";
  const rowClass = "flex items-start gap-2 md:gap-4 mb-3 md:mb-2";
  const iconWrapperClass = "w-[20px] h-[20px] flex-shrink-0 text-[#213170] mt-0.5";
  const labelClass = "text-[#213170] text-[14px] md:text-[16px] xl:text-[18px] font-normal md:font-medium leading-[20px] md:leading-[24px] xl:leading-[28px] md:min-w-[150px] xl:min-w-[200px] flex-shrink-0 md:flex-shrink w-auto";
  const valueClass = "text-[#213170] text-[14px] md:text-[16px] xl:text-[18px] font-normal leading-[20px] md:leading-[24px] xl:leading-[28px] flex-1 break-words";

  /** Price and Default Call To Action reusable UI part */
  const PriceAndAction = ({ containerClass = "" }: { containerClass?: string }) => (
    <div className={`flex justify-between lg:justify-end items-center gap-4 w-full ${containerClass}`}>
      <div className="flex items-center gap-2">
        <span className="text-[#213170] text-[14px] md:text-[16px] font-semibold md:font-bold leading-[20px] md:leading-normal">Pret:</span>
        <span className="text-[#213170] text-[14px] md:text-[16px] font-semibold md:font-bold leading-[20px] md:leading-normal">{price}</span>
        <span className="text-[#213170] text-[14px] md:text-[16px] font-semibold md:font-bold leading-[20px] md:leading-normal">{currency}</span>
      </div>
      <button 
        onClick={onSchedule}
        className="flex items-center justify-center gap-2 bg-[#213170] text-white px-4 md:px-5 py-2 md:py-2.5 rounded-lg hover:bg-[#1a265a] transition-colors shadow-sm w-fit"
      >
        <Calendar className="w-5 h-5 md:w-[15px] md:h-[15px] lg:w-5 lg:h-5 text-white" />
        <span className="text-[14px] font-medium leading-[20px]">Programează</span>
      </button>
    </div>
  );

  /** Responsive Badge Component */
  const TopBadge = ({ className = "", size = "md" }: { className?: string, size?: "sm" | "md" }) => (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${size === 'sm' ? 'w-[48px] md:w-[56px] h-[24px]' : 'w-[56px] h-[28px]'} bg-gray-200 rounded object-cover flex items-center justify-center text-[8px] md:text-[10px] text-gray-500 font-bold tracking-tight shadow-sm`}>
        CNAS
      </div>
      <div className={`flex items-center justify-start gap-2 px-2 py-1 rounded-[4px] border ${badgeColor}`}>
        {badgeIcon}
        <span className={`${size === 'sm' ? 'text-[12px]' : 'text-[14px]'} font-semibold leading-[16px] md:leading-[20px]`}>
          {cnasStatus}
        </span>
      </div>
    </div>
  );

  return (
    <div 
      className="w-full bg-white rounded-lg border border-[#CED2DA] overflow-hidden transition-all duration-300 flex flex-col items-start gap-2 md:gap-0"
      style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
    >
      
      {/* ── MOBILE SPECIFIC LAYOUT: TOP CONTROLS (Open State specific HTML) ── */}
      <div className="w-full flex md:hidden flex-col items-end gap-2 px-4 pt-4 pb-2">
        <div className="flex justify-end items-center gap-8 w-full">
            <span className="text-[#213170] text-[12px] font-normal leading-[16px]">{category}</span>
            <span className="flex items-center gap-2">
                <span className="text-[#213170] text-[12px] font-normal leading-[16px]">{price}</span>
            </span>
        </div>
        <div className="flex justify-end items-center gap-4 w-full">
            <div className="w-[48px] h-[24px] bg-gray-200 rounded text-[8px] flex items-center justify-center font-bold text-gray-500">CNAS</div>
            <span className="text-[#213170] text-[12px] font-normal leading-[16px] text-right">CNAS: {cnasStatus}</span>
        </div>
      </div>
      
      {/* ── HEADER DATA: TABLET / DESKTOP / MOBILE ── */}
      <div className="px-4 md:px-6 lg:px-8 py-2 md:py-4 flex flex-col lg:flex-row justify-between relative mt-0 gap-6 w-full">
        
        {/* TABLET ONLY BADGE (Top Right absolute) */}
        <div className="hidden md:flex lg:hidden absolute top-4 right-6 items-center gap-2 z-10">
           <TopBadge size="md" />
        </div>

        <div className="flex-1 flex items-start gap-4 relative w-full lg:w-auto">
          {/* Action to Toggle Detail Dropdown */}
          <button 
            onClick={toggleOpen}
            className={`mt-0.5 text-[#213170] hover:scale-110 transition-transform focus:outline-none flex-shrink-0 md:relative absolute right-0 top-0 md:top-[unset] z-20`}
            aria-label={isOpen ? "Închide detaliile" : "Deschide detaliile"}
          >
            {isOpen ? <MinusCircle className="w-[24px] h-[24px] lg:w-6 lg:h-6 stroke-[1.5]" /> : <PlusCircle className="w-[24px] h-[24px] lg:w-6 lg:h-6 stroke-[1.5]" />}
          </button>
          
          {/* Main Info Columns */}
          <div className="flex-1 flex flex-col gap-[8px] lg:gap-2">
            
            <h3 className="text-[#213170] text-[16px] lg:text-[18px] font-medium leading-[24px] lg:leading-[28px] flex items-center pr-8 md:pr-32 lg:pr-0 gap-2">
              Template Services: {title}
            </h3>
            
            <p className="text-[#213170] text-[14px] lg:text-[18px] font-normal leading-[20px] lg:leading-[28px]">
              {description}
            </p>

            {/* Triage Container per Specifications */}
            <div className="flex flex-col md:flex-row md:items-center gap-[4px] md:gap-[16px] !mt-1 lg:!mt-1">
              <div className="flex items-center gap-3 md:gap-4">
                <div className={`w-[24px] h-[24px] lg:w-6 lg:h-6 border rounded-full flex items-center justify-center ${triageColors.border} bg-white relative overflow-hidden flex-shrink-0`}>
                   {/* Line representing the color gradient directly equivalent to the user HTML line */}
                   <div className={`absolute top-[4px] left-[10px] w-[3px] h-[10px] md:w-[2.84px] md:h-[8.4px] rotate-45 md:rotate-0 bg-gradient-to-br ${triageColors.gradient}`}></div>
                </div>
                <span className="text-[#213170] text-[12px] lg:text-[16px] font-medium leading-[16px]">Triere medicală:</span>
                <span className={`${triageColors.text} text-[12px] lg:text-[16px] font-normal leading-[16px]`}>{triageType}</span>
              </div>
              <p className={`${triageColors.text} text-[12px] lg:text-[16px] font-normal leading-[16px] w-full max-w-[95%] md:max-w-none md:flex-1 mt-1.5 md:mt-0`}>
                {triageDescription}
              </p>
            </div>

            {/* Duration Section */}
            <div className="flex items-center gap-2 md:gap-[10px] lg:gap-3 !mt-1 lg:!mt-1">
              <Clock className="w-[24px] h-[24px] lg:w-5 lg:h-5 text-[#213170] outline-[0.7px] outline-offset-[-0.35px] outline-[#213170] p-[2px]" />
              <span className="text-[#213170] text-[12px] lg:text-[16px] font-medium leading-[16px] lg:leading-[20px]">Durata procedurii :</span>
              <span className="text-[#213170] text-[12px] lg:text-[16px] font-normal leading-[16px] lg:leading-[20px]">{duration}</span>
            </div>
          </div>
        </div>

        {/* ── DESKTOP EXCLUSIVE RIGHT PANEL (Badge + Price + CTA) ── */}
        <div className="hidden lg:flex flex-col flex-shrink-0 items-end gap-3 min-w-[200px]">
          <TopBadge size="md" />
          <div className="mt-4 flex flex-col items-end justify-center w-full relative">
            <PriceAndAction />
          </div>
        </div>

      </div>

      {/* ── ACCORDION CONTENT / OPEN STATE ── */}
      <div 
        className={`grid transition-all duration-300 ease-in-out w-full ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden w-full">
          <div className="px-4 py-4 md:px-[64px] md:py-[16px] xl:py-[24px] flex flex-col gap-4 md:gap-6 xl:gap-8 w-full">
            
            {/* Section 1: Eligibilitate & Siguranță */}
            <section className="flex flex-col gap-1 md:gap-[16px] w-full">
              <div className="w-full flex items-center justify-start gap-4">
                  <h4 className={sectionTitleClass}>Eligibilitate & Siguranță</h4>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <div className={rowClass}>
                  <div className={iconWrapperClass}><AlertCircle className="w-full h-full" /></div>
                  <span className={labelClass}>Indicații :</span>
                  <span className={valueClass}>{indications}</span>
                </div>
                <div className={rowClass}>
                  <div className={iconWrapperClass}><ShieldAlert className="w-full h-full" /></div>
                  <span className={labelClass}>Contraindicații :</span>
                  <span className={valueClass}>{contraindications}</span>
                </div>
                <div className={rowClass}>
                  <div className={iconWrapperClass}><HeartPulse className="w-full h-full" /></div>
                  <span className={labelClass}>Beneficiu imediat:</span>
                  <span className={valueClass}>{immediateBenefit}</span>
                </div>
                <div className={rowClass}>
                  <div className={iconWrapperClass}><Activity className="w-full h-full" /></div>
                  <span className={labelClass}>Necesită premedicație :</span>
                  <span className={valueClass}>{premedication}</span>
                </div>
                <div className={rowClass}>
                  <div className={iconWrapperClass}><Stethoscope className="w-full h-full" /></div>
                  <span className={labelClass}>Necesită Monitorizare :</span>
                  <span className={valueClass}>{monitoringNeed}</span>
                </div>
              </div>
            </section>

            {/* Section 2: Pregătire & Documente */}
            <section className="flex flex-col gap-1 md:gap-[16px] w-full">
              <div className="w-full flex items-center justify-start gap-4">
                  <h4 className={sectionTitleClass}>Pregătire & Documente</h4>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <div className={rowClass}>
                  <div className={iconWrapperClass}><Users className="w-full h-full" /></div>
                  <span className={labelClass}>Pregătire pacient :</span>
                  <span className={valueClass}>{patientPrep}</span>
                </div>
                <div className={rowClass}>
                  <div className={iconWrapperClass}><FileText className="w-full h-full" /></div>
                  <span className={labelClass}>Recomandare medicală :</span>
                  <span className={valueClass}>{medicalRecommendation}</span>
                </div>
                <div className={rowClass}>
                  <div className={iconWrapperClass}><FileSignature className="w-full h-full" /></div>
                  <span className={labelClass}>Bilet de trimitere :</span>
                  <span className={valueClass}>{referralTicket}</span>
                </div>
              </div>
            </section>

            {/* Section 3: Procedură & Personal */}
            <section className="flex flex-col gap-1 md:gap-[16px] w-full">
              <div className="w-full flex items-center justify-start gap-4">
                  <h4 className={sectionTitleClass}>Procedură & Personal</h4>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <div className={rowClass}>
                  <div className={iconWrapperClass}><Users className="w-full h-full" /></div>
                  <span className={labelClass}>Echipaj :</span>
                  <span className={valueClass}>{crew}</span>
                </div>
                <div className={rowClass}>
                  <div className={iconWrapperClass}><Award className="w-full h-full" /></div>
                  <span className={labelClass}>Nivel de expertiză :</span>
                  <span className={valueClass}>{expertiseLevel}</span>
                </div>
                <div className={rowClass}>
                  <div className={iconWrapperClass}><MapPin className="w-full h-full" /></div>
                  <span className={labelClass}>Locație :</span>
                  <span className={valueClass}>{location}</span>
                </div>
              </div>
            </section>

            {/* Section 4: Administrativ & Financiar */}
            <section className="flex flex-col gap-1 md:gap-[16px] w-full">
              <div className="w-full flex items-center justify-start gap-4">
                  <h4 className={sectionTitleClass}>Administrativ & Financiar</h4>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <div className={rowClass}>
                  <div className={iconWrapperClass}><FileText className="w-full h-full" /></div>
                  <span className={labelClass}>CNAS :</span>
                  <span className={valueClass}>{cnasInfo}</span>
                </div>
                <div className={rowClass}>
                  <div className={iconWrapperClass}><ShieldCheck className="w-full h-full" /></div>
                  <span className={labelClass}>Asigurare privată :</span>
                  <span className={valueClass}>{privateInsurance}</span>
                </div>
                <div className={rowClass}>
                  <div className={iconWrapperClass}><CreditCard className="w-full h-full" /></div>
                  <span className={labelClass}>Co-plată:</span>
                  <span className={valueClass}>{coPayment}</span>
                </div>
              </div>
            </section>

            {/* MOBILE EXCLUSIVE BOTTOM ROW (Price + CTA INSIDE ACCORDION) */}
            {isOpen && (
              <div className="flex md:hidden w-full py-2 justify-between items-center bg-white mt-1">
                 <PriceAndAction />
              </div>
            )}

          </div>
        </div>
      </div>

      {/* ── TABLET EXCLUSIVE BOTTOM ROW (Price + CTA OUTSIDE ACCORDION) ── 
          Displayed only on tablet/md bounds. Visually appends below accordion when open, or under header if closed. */}
      <div className="hidden md:flex lg:hidden w-full px-6 py-4 justify-between items-center bg-white border-t border-[#CED2DA]">
         <PriceAndAction />
      </div>

    </div>
  );
}
