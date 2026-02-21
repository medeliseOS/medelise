'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ══════════════════════════════════════════════════════════════════════
 *  Types
 * ══════════════════════════════════════════════════════════════════════ */

export interface ServiceCardProps {
    /** Procedure title */
    title: string;
    /** Short description */
    description: string;
    /** Price in RON (string, e.g. "70" or "N/A") */
    price: string;
    /** Duration (e.g. "10 - 15 min") */
    duration: string;
    /** CNAS reimbursement status */
    cnasStatus: 'decontat' | 'nedecontat';
    /** Triage level number (1-5) */
    triageLevel: number;
    /** Triage label (e.g. "Control") */
    triageLabel: string;
    /** Triage description (e.g. "Procedură de verificare standard...") */
    triageDescription: string;
    /** CTA link href */
    ctaHref?: string;

    /* ── Expanded section: Eligibilitate & Siguranță ── */
    indications?: string;
    contraindications?: string;
    immediateBenefit?: string;
    premedication?: string;
    monitoringNeed?: string;

    /* ── Expanded section: Pregătire & Documente ── */
    patientPrep?: string;
    medicalRecommendation?: string;
    referralTicket?: string;

    /* ── Expanded section: Procedură & Personal ── */
    crew?: string;
    expertiseLevel?: string;
    location?: string;

    /* ── Expanded section: Administrativ & Financiar ── */
    cnasInfo?: string;
    privateInsurance?: string;
    coPayment?: string;
}

/* ══════════════════════════════════════════════════════════════════════
 *  Inline SVG Icons (crisp at any size)
 * ══════════════════════════════════════════════════════════════════════ */

function SyringeIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2l4 4" /><path d="M17 7l3-3" />
            <path d="M19 9l-8.7 8.7c-.4.4-.8.7-1.3.9l-4.3 1.7a.5.5 0 0 1-.6-.6l1.7-4.3c.2-.5.5-.9.9-1.3L15 3" />
            <path d="M8 14l4 4" /><path d="M2 22l4-4" />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12,6 12,12 16,14" />
        </svg>
    );
}

function CalendarIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" /><path d="M9 16l2 2 4-4" />
        </svg>
    );
}

function ShieldCheckIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
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

/* row icons for detail sections */
function IndicationsIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 2v4" /><path d="M16 2v4" />
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M12 11v4" /><path d="M10 13h4" />
        </svg>
    );
}

function ContraindicationsIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M4.93 4.93l14.14 14.14" />
        </svg>
    );
}

function BenefitIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22,4 12,14.01 9,11.01" />
        </svg>
    );
}

function PillIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.5 1.5H8C4.5 1.5 1.5 4.5 1.5 8v8c0 3.5 3 6.5 6.5 6.5h8c3.5 0 6.5-3 6.5-6.5V8c0-3.5-3-6.5-6.5-6.5h-3" />
            <path d="M12 8v8" /><path d="M8 12h8" />
        </svg>
    );
}

function MonitorIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s3-5 10-5 10 5 10 5-3 5-10 5-10-5-10-5Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

function PatientPrepIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M19 8v6" /><path d="M22 11h-6" />
        </svg>
    );
}

function DocumentIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14,2 14,8 20,8" />
            <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
        </svg>
    );
}

function CrewIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

function ExpertiseIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 10 3 12 0v-5" />
        </svg>
    );
}

function LocationIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function InsuranceIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
    );
}

/* ══════════════════════════════════════════════════════════════════════
 *  Detail Row (label : value)
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

/* ══════════════════════════════════════════════════════════════════════
 *  Detail Group (section title + rows)
 * ══════════════════════════════════════════════════════════════════════ */

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
            <div className={`svc-card ${open ? 'svc-card--open' : ''}`}>
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
                        <span className={`svc-card__cnas-tag ${isDecontat ? 'svc-card__cnas-tag--green' : 'svc-card__cnas-tag--red'}`}>
                            <ShieldCheckIcon />
                            <span>{isDecontat ? 'Decontat' : 'Nedecontat'}</span>
                        </span>
                    </div>
                </div>

                {/* ── Main content row ── */}
                <div className="svc-card__main">
                    {/* Left: icon + text */}
                    <div className="svc-card__left">
                        <div className="svc-card__icon">
                            <SyringeIcon />
                        </div>
                        <div className="svc-card__info">
                            <h3 className="svc-card__title">{title}</h3>
                            <p className="svc-card__desc">{description}</p>

                            {/* Triage */}
                            <div className="svc-card__triage">
                                <div className="svc-card__triage-row">
                                    <span className="svc-card__triage-circle">{triageLevel}</span>
                                    <span className="svc-card__triage-label">Triaj:</span>
                                    <span className="svc-card__triage-value">{triageLabel}</span>
                                </div>
                                <p className="svc-card__triage-desc">{triageDescription}</p>
                            </div>

                            {/* Duration */}
                            <div className="svc-card__duration">
                                <ClockIcon />
                                <span className="svc-card__duration-label">Durata procedurii :</span>
                                <span className="svc-card__duration-value">{duration}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: price + CTA */}
                    <div className="svc-card__right">
                        <div className="svc-card__price">
                            <span>Pret:</span>
                            <span>{price}</span>
                            <span>RON</span>
                        </div>
                        <Link href={ctaHref} className="svc-card__cta">
                            <CalendarIcon />
                            <span>Programează</span>
                        </Link>
                    </div>
                </div>

                {/* ── Toggle button ── */}
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
                        {/* Eligibilitate & Siguranță */}
                        {(indications || contraindications || immediateBenefit || premedication || monitoringNeed) && (
                            <DetailGroup title="Eligibilitate & Siguranță">
                                {indications && <DetailRow icon={<IndicationsIcon />} label="Indicații :" value={indications} />}
                                {contraindications && <DetailRow icon={<ContraindicationsIcon />} label="Contraindicații :" value={contraindications} />}
                                {immediateBenefit && <DetailRow icon={<BenefitIcon />} label="Beneficiu imediat:" value={immediateBenefit} />}
                                {premedication && <DetailRow icon={<PillIcon />} label="Necesită premedicație :" value={premedication} />}
                                {monitoringNeed && <DetailRow icon={<MonitorIcon />} label="Necesită Monitorizare :" value={monitoringNeed} />}
                            </DetailGroup>
                        )}

                        {/* Pregătire & Documente */}
                        {(patientPrep || medicalRecommendation || referralTicket) && (
                            <DetailGroup title="Pregătire & Documente">
                                {patientPrep && <DetailRow icon={<PatientPrepIcon />} label="Pregătire pacient :" value={patientPrep} />}
                                {medicalRecommendation && <DetailRow icon={<DocumentIcon />} label="Recomandare medicală :" value={medicalRecommendation} />}
                                {referralTicket && <DetailRow icon={<DocumentIcon />} label="Bilet de trimitere :" value={referralTicket} />}
                            </DetailGroup>
                        )}

                        {/* Procedură & Personal */}
                        {(crew || expertiseLevel || location) && (
                            <DetailGroup title="Procedură & Personal">
                                {crew && <DetailRow icon={<CrewIcon />} label="Echipaj :" value={crew} />}
                                {expertiseLevel && <DetailRow icon={<ExpertiseIcon />} label="Nivel de expertiză :" value={expertiseLevel} />}
                                {location && <DetailRow icon={<LocationIcon />} label="Locație :" value={location} />}
                            </DetailGroup>
                        )}

                        {/* Administrativ & Financiar */}
                        {(cnasInfo || privateInsurance || coPayment) && (
                            <DetailGroup title="Administrativ & Financiar">
                                {cnasInfo && <DetailRow icon={<InsuranceIcon />} label="CNAS :" value={cnasInfo} />}
                                {privateInsurance && <DetailRow icon={<InsuranceIcon />} label="Asigurare privată :" value={privateInsurance} />}
                                {coPayment && <DetailRow icon={<InsuranceIcon />} label="Co-plată:" value={coPayment} />}
                            </DetailGroup>
                        )}

                        {/* Bottom price + CTA (repeated in open state) */}
                        <div className="svc-card__bottom-cta">
                            <div className="svc-card__price">
                                <span>Pret :</span>
                                <span>{price}</span>
                                <span>RON</span>
                            </div>
                            <Link href={ctaHref} className="svc-card__cta">
                                <CalendarIcon />
                                <span>Programează</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
                .svc-card-wrapper {
                    width: 100%;
                    padding: 16px 64px;
                    background: #fff;
                }

                .svc-card {
                    padding: 16px 32px;
                    background: #fff;
                    border-radius: 8px;
                    border: 1px solid #CED2DA;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    transition: border-color 0.2s ease;
                }

                .svc-card:hover {
                    border-color: #213170;
                }

                /* ── CNAS badge ── */
                .svc-card__cnas-row {
                    display: flex;
                    justify-content: flex-end;
                }

                .svc-card__cnas-badge {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    background: #F9FAFB;
                    border-radius: 8px;
                }

                .svc-card__cnas-tag {
                    display: flex;
                    align-items: center;
                    gap: 2px;
                    padding: 4px 10px 4px 3px;
                    border-radius: 4px;
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 1.43;
                }

                .svc-card__cnas-tag--green {
                    color: #40BF7F;
                    border: 1px solid #9FDFBF;
                }

                .svc-card__cnas-tag--red {
                    color: #F64C4C;
                    border: 1px solid #F98686;
                }

                /* ── Main content ── */
                .svc-card__main {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 16px;
                }

                .svc-card__left {
                    flex: 1;
                    display: flex;
                    gap: 16px;
                    align-items: flex-start;
                }

                .svc-card__icon {
                    flex-shrink: 0;
                    padding-top: 4px;
                }

                .svc-card__info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    padding-right: 32px;
                }

                .svc-card__title {
                    color: #213170;
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 1.56;
                    margin: 0;
                }

                .svc-card__desc {
                    color: #213170;
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 1.56;
                    margin: 0;
                    max-width: none;
                }

                /* ── Triage ── */
                .svc-card__triage {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .svc-card__triage-row {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .svc-card__triage-circle {
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #F0F6FF;
                    border: 1px solid #33A9FF;
                    border-radius: 50%;
                    color: #33A9FF;
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    font-size: 14px;
                    font-weight: 700;
                    line-height: 1;
                }

                .svc-card__triage-label {
                    color: #213170;
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 1.5;
                }

                .svc-card__triage-value {
                    color: #33A9FF;
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 1.5;
                }

                .svc-card__triage-desc {
                    color: #33A9FF;
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 1.5;
                    margin: 0;
                    max-width: none;
                }

                /* ── Duration ── */
                .svc-card__duration {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .svc-card__duration-label {
                    color: #213170;
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 1.43;
                }

                .svc-card__duration-value {
                    color: #213170;
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 1.43;
                }

                /* ── Right: price + CTA ── */
                .svc-card__right {
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 16px;
                    padding: 16px;
                    min-width: 200px;
                }

                .svc-card__price {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: #213170;
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 1.56;
                }

                /* ── Toggle button ── */
                .svc-card__toggle {
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
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 1.43;
                    transition: background 0.2s ease;
                    align-self: center;
                }

                .svc-card__toggle:hover {
                    background: #F0F6FF;
                }

                /* ── Expanded details ── */
                .svc-card__details {
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
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 1.56;
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
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 1.56;
                }

                .svc-card__detail-value {
                    flex: 1;
                    color: #213170;
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 1.56;
                }

                /* ── Bottom CTA (open state) ── */
                .svc-card__bottom-cta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 16px 16px 16px 16px;
                }

                /* ── Tablet (≤1024px) ── */
                @media (max-width: 1024px) {
                    .svc-card-wrapper {
                        padding: 16px 32px;
                    }

                    .svc-card__main {
                        flex-direction: column;
                    }

                    .svc-card__right {
                        flex-direction: row;
                        justify-content: space-between;
                        width: 100%;
                        padding: 16px 0;
                        border-top: 1px solid #BDE0FF;
                    }

                    .svc-card__info {
                        padding-right: 0;
                    }

                    .svc-card__detail-row {
                        flex-wrap: wrap;
                    }

                    .svc-card__bottom-cta {
                        padding: 16px 0;
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
                    }

                    .svc-card__desc {
                        font-size: 16px;
                    }

                    .svc-card__triage-label,
                    .svc-card__triage-value,
                    .svc-card__triage-desc {
                        font-size: 14px;
                    }

                    .svc-card__detail-label,
                    .svc-card__detail-value {
                        font-size: 16px;
                    }

                    .svc-card__detail-group-title {
                        font-size: 16px;
                    }

                    .svc-card__price {
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
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 10px 20px;
                    background: #213170;
                    color: #fff;
                    border-radius: 8px;
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 1.56;
                    text-decoration: none;
                    transition: background 0.25s ease, transform 0.2s ease;
                    white-space: nowrap;
                }

                .svc-card__cta:hover {
                    background: #1a2758;
                    transform: translateY(-1px);
                }

                @media (max-width: 640px) {
                    .svc-card__cta {
                        font-size: 16px;
                        padding: 10px 16px;
                    }
                }
            `}</style>
        </div>
    );
}
