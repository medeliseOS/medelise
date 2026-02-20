'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ══════════════════════════════════════════════════════════════════════
 *  Types
 * ══════════════════════════════════════════════════════════════════════ */

export interface ServiceCardProps {
    title: string;
    description: string;
    price: string;
    duration: string;
    cnasStatus: 'decontat' | 'nedecontat';
    triageLevel: number;
    triageLabel: string;
    triageDescription: string;
    ctaHref?: string;
    /* ── Expanded: Eligibilitate & Siguranță ── */
    indications?: string;
    contraindications?: string;
    immediateBenefit?: string;
    premedication?: string;
    monitoringNeed?: string;
    /* ── Expanded: Pregătire & Documente ── */
    patientPrep?: string;
    medicalRecommendation?: string;
    referralTicket?: string;
    /* ── Expanded: Procedură & Personal ── */
    crew?: string;
    expertiseLevel?: string;
    location?: string;
    /* ── Expanded: Administrativ & Financiar ── */
    cnasInfo?: string;
    privateInsurance?: string;
    coPayment?: string;
}

/* ══════════════════════════════════════════════════════════════════════
 *  Inline SVG Icons
 * ══════════════════════════════════════════════════════════════════════ */

function SyringeIcon() {
    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18.5 2l4 4" /><path d="M17.5 7l3-3" />
            <path d="M19.5 9l-8.7 8.7c-.4.4-.8.7-1.3.9l-4.3 1.7a.5.5 0 0 1-.6-.6l1.7-4.3c.2-.5.5-.9.9-1.3L15.5 3" />
            <path d="M8.5 14l4 4" /><path d="M2.5 22l4-4" />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="8" />
            <polyline points="12,8 12,12 15,13.5" />
        </svg>
    );
}

function CalendarCheckIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" /><path d="M9 16l2 2 4-4" />
        </svg>
    );
}

function ShieldIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#40BF7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
        </svg>
    );
}

function ShieldRedIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F64C4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
        </svg>
    );
}

function ChevronDownIcon({ open }: { open: boolean }) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ transition: 'transform 0.3s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            <polyline points="6,9 12,15 18,9" />
        </svg>
    );
}

/* ── Detail row icons ── */
function IndicationsIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4" /><path d="M16 2v4" /><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M12 11v4" /><path d="M10 13h4" /></svg>; }
function ContraindicationsIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M4.93 4.93l14.14 14.14" /></svg>; }
function BenefitIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22,4 12,14.01 9,11.01" /></svg>; }
function PillIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.5 1.5H8C4.5 1.5 1.5 4.5 1.5 8v8c0 3.5 3 6.5 6.5 6.5h8c3.5 0 6.5-3 6.5-6.5V8c0-3.5-3-6.5-6.5-6.5h-3" /><path d="M12 8v8" /><path d="M8 12h8" /></svg>; }
function MonitorIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-5 10-5 10 5 10 5-3 5-10 5-10-5-10-5Z" /><circle cx="12" cy="12" r="3" /></svg>; }
function PatientPrepIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M19 8v6" /><path d="M22 11h-6" /></svg>; }
function DocumentIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14,2 14,8 20,8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>; }
function CrewIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>; }
function ExpertiseIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 10 3 12 0v-5" /></svg>; }
function LocationIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>; }
function InsuranceIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>; }

/* ══════════════════════════════════════════════════════════════════════
 *  Detail Helpers
 * ══════════════════════════════════════════════════════════════════════ */

function DetailRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="svc-card__detail-row">
            <span className="svc-card__detail-icon">{icon}</span>
            <span className="svc-card__detail-label">{label}</span>
            <span className="svc-card__detail-value">{value}</span>
        </div>
    );
}

function DetailGroup({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="svc-card__detail-group">
            <h4 className="svc-card__detail-group-title">{title}</h4>
            <div className="svc-card__detail-rows">{children}</div>
        </div>
    );
}

/* ══════════════════════════════════════════════════════════════════════
 *  Main Component
 * ══════════════════════════════════════════════════════════════════════ */

export default function ServiceCard({
    title,
    description,
    price,
    duration,
    cnasStatus,
    triageLevel,
    triageLabel,
    triageDescription,
    ctaHref = '/programare',
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
}: ServiceCardProps) {
    const [open, setOpen] = useState(false);
    const isDecontat = cnasStatus === 'decontat';

    const hasDetails = indications || contraindications || immediateBenefit ||
        premedication || monitoringNeed || patientPrep || medicalRecommendation ||
        referralTicket || crew || expertiseLevel || location || cnasInfo ||
        privateInsurance || coPayment;

    return (
        <div className="svc-card-wrapper">
            <div className={`svc-card ${open ? 'svc-card--open' : ''}`}
                data-accordion-services={open ? 'Open' : 'Closed'}>

                {/* ── CNAS Badge (top-right) ── */}
                <div className="svc-card__cnas-row">
                    <div className="svc-card__cnas-badge">
                        <Image
                            src="/icons-medelise/md-cnas-insurance/e7245003e8d530f3bc911af4d3a3f4557b63da85.png"
                            alt="CNAS"
                            width={48}
                            height={24}
                            className="svc-card__cnas-logo"
                        />
                        <div className="svc-card__cnas-tag-wrapper">
                            <div className={`svc-card__cnas-tag ${isDecontat ? 'svc-card__cnas-tag--green' : 'svc-card__cnas-tag--red'}`}>
                                {isDecontat ? <ShieldIcon /> : <ShieldRedIcon />}
                                <div className="svc-card__cnas-text">{isDecontat ? 'Decontat' : 'Nedecontat'}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Main content row (icon + info + price/CTA) ── */}
                <div className="svc-card__body">
                    <div className="svc-card__row">
                        <div className="svc-card__row-inner">
                            {/* Icon */}
                            <div className="svc-card__icon">
                                <SyringeIcon />
                            </div>

                            {/* Info column */}
                            <div className="svc-card__info">
                                <div className="svc-card__title">{title}</div>
                                <div className="svc-card__desc">{description}</div>

                                {/* Triage */}
                                <div className="svc-card__triage">
                                    <div className="svc-card__triage-top">
                                        <div className="svc-card__triage-circle">
                                            <span>{triageLevel}</span>
                                        </div>
                                        <div className="svc-card__triage-label">Triaj:</div>
                                        <div className="svc-card__triage-value">{triageLabel}</div>
                                    </div>
                                    <div className="svc-card__triage-desc">{triageDescription}</div>
                                </div>

                                {/* Duration */}
                                <div className="svc-card__duration">
                                    <ClockIcon />
                                    <div className="svc-card__duration-label">Durata procedurii :</div>
                                    <div className="svc-card__duration-value">{duration}</div>
                                </div>
                            </div>

                            {/* Price + CTA */}
                            <div className="svc-card__price-block">
                                <div className="svc-card__price">
                                    <span className="svc-card__price-text">Pret:</span>
                                    <span className="svc-card__price-text">{price}</span>
                                    <span className="svc-card__price-text">RON</span>
                                </div>
                                <Link href={ctaHref} className="svc-card__cta">
                                    <CalendarCheckIcon />
                                    <span>Programează</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Toggle ── */}
                {hasDetails && (
                    <button
                        type="button"
                        className="svc-card__toggle"
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                    >
                        <span>{open ? 'Ascunde detalii' : 'Vezi detalii'}</span>
                        <ChevronDownIcon open={open} />
                    </button>
                )}

                {/* ── Expanded details ── */}
                {open && hasDetails && (
                    <div className="svc-card__details">
                        {(indications || contraindications || immediateBenefit || premedication || monitoringNeed) && (
                            <DetailGroup title="Eligibilitate & Siguranță">
                                {indications && <DetailRow icon={<IndicationsIcon />} label="Indicații :" value={indications} />}
                                {contraindications && <DetailRow icon={<ContraindicationsIcon />} label="Contraindicații :" value={contraindications} />}
                                {immediateBenefit && <DetailRow icon={<BenefitIcon />} label="Beneficiu imediat:" value={immediateBenefit} />}
                                {premedication && <DetailRow icon={<PillIcon />} label="Necesită premedicație :" value={premedication} />}
                                {monitoringNeed && <DetailRow icon={<MonitorIcon />} label="Necesită Monitorizare :" value={monitoringNeed} />}
                            </DetailGroup>
                        )}
                        {(patientPrep || medicalRecommendation || referralTicket) && (
                            <DetailGroup title="Pregătire & Documente">
                                {patientPrep && <DetailRow icon={<PatientPrepIcon />} label="Pregătire pacient :" value={patientPrep} />}
                                {medicalRecommendation && <DetailRow icon={<DocumentIcon />} label="Recomandare medicală :" value={medicalRecommendation} />}
                                {referralTicket && <DetailRow icon={<DocumentIcon />} label="Bilet de trimitere :" value={referralTicket} />}
                            </DetailGroup>
                        )}
                        {(crew || expertiseLevel || location) && (
                            <DetailGroup title="Procedură & Personal">
                                {crew && <DetailRow icon={<CrewIcon />} label="Echipaj :" value={crew} />}
                                {expertiseLevel && <DetailRow icon={<ExpertiseIcon />} label="Nivel de expertiză :" value={expertiseLevel} />}
                                {location && <DetailRow icon={<LocationIcon />} label="Locație :" value={location} />}
                            </DetailGroup>
                        )}
                        {(cnasInfo || privateInsurance || coPayment) && (
                            <DetailGroup title="Administrativ & Financiar">
                                {cnasInfo && <DetailRow icon={<InsuranceIcon />} label="CNAS :" value={cnasInfo} />}
                                {privateInsurance && <DetailRow icon={<InsuranceIcon />} label="Asigurare privată :" value={privateInsurance} />}
                                {coPayment && <DetailRow icon={<InsuranceIcon />} label="Co-plată:" value={coPayment} />}
                            </DetailGroup>
                        )}

                        <div className="svc-card__bottom-cta">
                            <div className="svc-card__price">
                                <span className="svc-card__price-text">Pret:</span>
                                <span className="svc-card__price-text">{price}</span>
                                <span className="svc-card__price-text">RON</span>
                            </div>
                            <Link href={ctaHref} className="svc-card__cta">
                                <CalendarCheckIcon />
                                <span>Programează</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
                /* ── Wrapper ── */
                .svc-card-wrapper {
                    width: 100%;
                    padding: 16px 64px;
                    background: white;
                    overflow: hidden;
                    display: inline-flex;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 10px;
                }

                /* ── Card shell ── */
                .svc-card {
                    flex: 1 1 0;
                    padding: 16px 32px;
                    background: white;
                    border-radius: 8px;
                    outline: 1px #CED2DA solid;
                    outline-offset: -1px;
                    display: inline-flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-end;
                    gap: 16px;
                }

                /* ── CNAS Badge ── */
                .svc-card__cnas-row {
                    display: flex;
                    justify-content: flex-end;
                    width: 100%;
                }

                .svc-card__cnas-badge {
                    padding: 8px 16px;
                    background: #F9FAFB;
                    border-radius: 8px;
                    display: inline-flex;
                    justify-content: flex-end;
                    align-items: flex-start;
                    gap: 8px;
                }

                .svc-card__cnas-tag-wrapper {
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                }

                .svc-card__cnas-tag {
                    padding: 4px 10px 4px 3px;
                    border-radius: 4px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 2px;
                }

                .svc-card__cnas-tag--green {
                    outline: 1px #9FDFBF solid;
                    outline-offset: -1px;
                }

                .svc-card__cnas-tag--red {
                    outline: 1px #F98686 solid;
                    outline-offset: -1px;
                }

                .svc-card__cnas-text {
                    font-size: 14px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 600;
                    line-height: 20px;
                    word-wrap: break-word;
                }

                .svc-card__cnas-tag--green .svc-card__cnas-text {
                    color: #40BF7F;
                }

                .svc-card__cnas-tag--red .svc-card__cnas-text {
                    color: #F64C4C;
                }

                /* ── Body ── */
                .svc-card__body {
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: 10px;
                }

                .svc-card__row {
                    align-self: stretch;
                    display: inline-flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .svc-card__row-inner {
                    flex: 1 1 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                /* ── Icon ── */
                .svc-card__icon {
                    width: 25px;
                    height: 24px;
                    flex-shrink: 0;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                /* ── Info column ── */
                .svc-card__info {
                    flex: 1 1 0;
                    padding-right: 32px;
                    display: inline-flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 8px;
                }

                .svc-card__title {
                    align-self: stretch;
                    color: var(--Indigo, #213170);
                    font-size: 18px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 600;
                    line-height: 28px;
                    word-wrap: break-word;
                }

                .svc-card__desc {
                    align-self: stretch;
                    color: #213170;
                    font-size: 18px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 400;
                    line-height: 28px;
                    word-wrap: break-word;
                }

                /* ── Triage ── */
                .svc-card__triage {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: 4px;
                }

                .svc-card__triage-top {
                    display: inline-flex;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 16px;
                }

                .svc-card__triage-circle {
                    width: 24px;
                    height: 24px;
                    position: relative;
                    background: #F0F6FF;
                    border-radius: 300px;
                    outline: 1px #33A9FF solid;
                    outline-offset: -1px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .svc-card__triage-circle span {
                    color: #33A9FF;
                    font-size: 14px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 700;
                    line-height: 20px;
                    text-align: center;
                }

                .svc-card__triage-label {
                    color: var(--Color-Brand-Ocean-Blue, #213170);
                    font-size: 16px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 500;
                    line-height: 24px;
                    word-wrap: break-word;
                }

                .svc-card__triage-value {
                    color: #33A9FF;
                    font-size: 16px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 400;
                    line-height: 24px;
                    word-wrap: break-word;
                }

                .svc-card__triage-desc {
                    color: #33A9FF;
                    font-size: 16px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 400;
                    line-height: 24px;
                    word-wrap: break-word;
                    margin: 0;
                }

                /* ── Duration ── */
                .svc-card__duration {
                    align-self: stretch;
                    display: inline-flex;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 16px;
                }

                .svc-card__duration-label {
                    color: var(--Indigo, #213170);
                    font-size: 18px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 500;
                    line-height: 28px;
                    word-wrap: break-word;
                }

                .svc-card__duration-value {
                    color: #213170;
                    font-size: 18px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 400;
                    line-height: 28px;
                    word-wrap: break-word;
                }

                /* ── Price block ── */
                .svc-card__price-block {
                    width: 231px;
                    padding: 16px;
                    overflow: hidden;
                    display: inline-flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 16px;
                    flex-shrink: 0;
                }

                .svc-card__price {
                    display: inline-flex;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 16px;
                }

                .svc-card__price-text {
                    color: var(--Indigo, #213170);
                    font-size: 18px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 700;
                    line-height: 28px;
                    word-wrap: break-word;
                }

                /* ── Toggle button ── */
                .svc-card__toggle {
                    align-self: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 8px 16px;
                    background: #F9FAFB;
                    border: 1px solid #CED2DA;
                    border-radius: 8px;
                    cursor: pointer;
                    color: #213170;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 20px;
                    transition: background 0.2s ease;
                }

                .svc-card__toggle:hover {
                    background: #F0F6FF;
                }

                /* ── Expanded details ── */
                .svc-card__details {
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    border-top: 1px solid #BDE0FF;
                    padding-top: 16px;
                }

                .svc-card__detail-group {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .svc-card__detail-group-title {
                    color: #213170;
                    font-size: 18px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 500;
                    line-height: 28px;
                    margin: 0;
                }

                .svc-card__detail-rows {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .svc-card__detail-row {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    min-height: 28px;
                }

                .svc-card__detail-icon {
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }

                .svc-card__detail-label {
                    flex: 1;
                    color: #213170;
                    font-size: 18px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 400;
                    line-height: 28px;
                }

                .svc-card__detail-value {
                    flex: 1;
                    color: #213170;
                    font-size: 18px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 400;
                    line-height: 28px;
                }

                .svc-card__bottom-cta {
                    align-self: stretch;
                    display: inline-flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 16px 32px 16px 16px;
                }

                /* ── Tablet (≤1024px) ── */
                @media (max-width: 1024px) {
                    .svc-card-wrapper {
                        padding: 16px 32px;
                    }

                    .svc-card__row-inner {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 16px;
                    }

                    .svc-card__info {
                        padding-right: 0;
                    }

                    .svc-card__price-block {
                        width: 100%;
                        flex-direction: row;
                        justify-content: space-between;
                        padding: 16px 0;
                        border-top: 1px solid #BDE0FF;
                    }

                    .svc-card__detail-row {
                        flex-wrap: wrap;
                    }
                }

                /* ── Mobile (≤640px) ── */
                @media (max-width: 640px) {
                    .svc-card-wrapper {
                        padding: 8px 16px;
                    }

                    .svc-card {
                        padding: 12px 16px;
                    }

                    .svc-card__title {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    .svc-card__desc {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    .svc-card__triage-label,
                    .svc-card__triage-value,
                    .svc-card__triage-desc {
                        font-size: 14px;
                        line-height: 20px;
                    }

                    .svc-card__detail-label,
                    .svc-card__detail-value {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    .svc-card__detail-group-title {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    .svc-card__price-text {
                        font-size: 16px;
                    }

                    .svc-card__bottom-cta {
                        flex-direction: column;
                        gap: 16px;
                        align-items: stretch;
                    }
                }
            `}</style>

            <style jsx global>{`
                .svc-card__cnas-logo {
                    object-fit: contain;
                }

                .svc-card__cta {
                    width: 189px;
                    padding: 10px 20px;
                    background: #213170;
                    border-radius: 8px;
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                    text-decoration: none;
                    transition: background 0.25s ease, transform 0.2s ease;
                }

                .svc-card__cta span {
                    color: white;
                    font-size: 18px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 500;
                    line-height: 28px;
                    word-wrap: break-word;
                }

                .svc-card__cta:hover {
                    background: #1a2758;
                    transform: translateY(-1px);
                }

                @media (max-width: 1024px) {
                    .svc-card__cta {
                        width: auto;
                        flex: 1;
                    }
                }

                @media (max-width: 640px) {
                    .svc-card__cta {
                        width: 100%;
                    }
                    .svc-card__cta span {
                        font-size: 16px;
                    }
                }
            `}</style>
        </div>
    );
}
