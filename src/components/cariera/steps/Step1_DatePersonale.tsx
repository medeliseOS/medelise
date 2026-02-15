'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import {
    COUNTRIES,
    ROMANIAN_JUDETE,
    getJudeteNames,
    getCitiesForJudet,
    type Country,
} from '../countryData';

/* ═══════════════════════════════════════════════════════════════════════════
 * Step 1 — Date Personale
 * ═══════════════════════════════════════════════════════════════════════════ */

export interface StepProps {
    data: Record<string, any>;
    onChange: (field: string, value: any) => void;
    slug: string;
    jobTitle: string;
}

/* ── Default phone country ── */
const DEFAULT_COUNTRY = COUNTRIES[0]; // România

export default function Step1_DatePersonale({ data, onChange }: StepProps) {
    const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);
    const [phoneSearch, setPhoneSearch] = useState('');
    const phoneDropdownRef = useRef<HTMLDivElement>(null);
    const phoneSearchRef = useRef<HTMLInputElement>(null);

    /* ── Derived ── */
    const selectedPhoneCountry: Country =
        COUNTRIES.find(c => c.code === data.phoneCountryCode) ?? DEFAULT_COUNTRY;

    const selectedCountry = data.tara ?? 'RO';
    const isRomania = selectedCountry === 'RO';
    const judete = getJudeteNames();
    const selectedJudet = data.judet ?? '';
    const cities = selectedJudet ? getCitiesForJudet(selectedJudet) : [];

    /* ── Close phone dropdown on outside click ── */
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (phoneDropdownRef.current && !phoneDropdownRef.current.contains(e.target as Node)) {
                setPhoneDropdownOpen(false);
                setPhoneSearch('');
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    /* ── Focus search when dropdown opens ── */
    useEffect(() => {
        if (phoneDropdownOpen) phoneSearchRef.current?.focus();
    }, [phoneDropdownOpen]);

    /* ── Filter countries for phone dropdown ── */
    const filteredCountries = phoneSearch.trim()
        ? COUNTRIES.filter(c =>
            c.name.toLowerCase().includes(phoneSearch.toLowerCase()) ||
            c.dial.includes(phoneSearch) ||
            c.code.toLowerCase().includes(phoneSearch.toLowerCase())
        )
        : COUNTRIES;

    /* ── Select phone country ── */
    const selectPhoneCountry = useCallback((c: Country) => {
        onChange('phoneCountryCode', c.code);
        onChange('phoneDial', c.dial);
        setPhoneDropdownOpen(false);
        setPhoneSearch('');
    }, [onChange]);

    /* ── Handle country change ── */
    const handleCountryChange = useCallback((code: string) => {
        onChange('tara', code);
        // Reset judet/city when country changes
        onChange('judet', '');
        onChange('oras', '');
        onChange('localitate', '');
    }, [onChange]);

    /* ── Handle județ change ── */
    const handleJudetChange = useCallback((judet: string) => {
        onChange('judet', judet);
        onChange('oras', '');
    }, [onChange]);

    return (
        <>
            <style jsx global>{`
                /* ── Phone Prefix Dropdown ── */
                .aj-phone-wrapper {
                    display: flex;
                    gap: 0;
                }

                .aj-phone-prefix {
                    position: relative;
                    flex-shrink: 0;
                }

                .aj-phone-prefix-btn {
                    display: flex;
                    align-items: center;
                    gap: var(--space-2);
                    height: 100%;
                    padding: var(--space-3) var(--space-3);
                    font-family: var(--font-body);
                    font-size: var(--text-sm);
                    color: var(--color-text);
                    background: var(--color-surface);
                    border: 1px solid var(--color-border-form);
                    border-right: none;
                    border-radius: var(--radius-main) 0 0 var(--radius-main);
                    cursor: pointer;
                    transition: background 0.15s ease;
                    white-space: nowrap;
                    min-width: 100px;
                }

                .aj-phone-prefix-btn:hover {
                    background: color-mix(in srgb, var(--color-primary) 5%, var(--color-surface));
                }

                .aj-phone-prefix-flag {
                    font-size: 18px;
                    line-height: 1;
                }

                .aj-phone-prefix-dial {
                    font-weight: 500;
                    color: var(--color-text);
                    font-size: var(--text-sm);
                }

                .aj-phone-prefix-chevron {
                    color: var(--color-text-muted);
                    transition: transform 0.2s ease;
                    flex-shrink: 0;
                }

                .aj-phone-prefix-chevron--open {
                    transform: rotate(180deg);
                }

                .aj-phone-input {
                    flex: 1;
                    border-radius: 0 var(--radius-main) var(--radius-main) 0 !important;
                    min-width: 0;
                }

                /* ── Dropdown Panel ── */
                .aj-phone-dropdown {
                    position: absolute;
                    top: calc(100% + var(--space-1));
                    left: 0;
                    width: 320px;
                    max-height: 280px;
                    background: var(--color-white);
                    border: 1px solid var(--color-surface-border);
                    border-radius: var(--radius-main);
                    box-shadow: var(--shadow-lg);
                    z-index: 100;
                    display: flex;
                    flex-direction: column;
                    animation: aj-dropdown-in 0.15s ease-out;
                }

                @keyframes aj-dropdown-in {
                    from { opacity: 0; transform: translateY(-4px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                .aj-phone-dropdown-search {
                    padding: var(--space-2) var(--space-3);
                    border-bottom: 1px solid var(--color-surface-border);
                    flex-shrink: 0;
                }

                .aj-phone-dropdown-search input {
                    width: 100%;
                    padding: var(--space-2) var(--space-3);
                    font-family: var(--font-body);
                    font-size: var(--text-sm);
                    border: 1px solid var(--color-surface-border);
                    border-radius: var(--radius-sm);
                    outline: none;
                    background: var(--color-surface);
                }

                .aj-phone-dropdown-search input:focus {
                    border-color: var(--color-primary);
                }

                .aj-phone-dropdown-list {
                    flex: 1;
                    overflow-y: auto;
                    padding: var(--space-1) 0;
                }

                .aj-phone-dropdown-item {
                    display: flex;
                    align-items: center;
                    gap: var(--space-3);
                    padding: var(--space-2) var(--space-3);
                    cursor: pointer;
                    transition: background 0.1s ease;
                    border: none;
                    background: none;
                    width: 100%;
                    text-align: left;
                    font-family: var(--font-body);
                    font-size: var(--text-sm);
                }

                .aj-phone-dropdown-item:hover {
                    background: var(--color-surface);
                }

                .aj-phone-dropdown-item--active {
                    background: color-mix(in srgb, var(--color-primary) 8%, transparent);
                }

                .aj-phone-dropdown-flag {
                    font-size: 18px;
                    line-height: 1;
                    flex-shrink: 0;
                }

                .aj-phone-dropdown-name {
                    flex: 1;
                    color: var(--color-text);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .aj-phone-dropdown-dial {
                    color: var(--color-text-muted);
                    font-weight: 500;
                    flex-shrink: 0;
                    font-size: var(--text-sm);
                }

                /* ── Scrollbar for dropdown ── */
                .aj-phone-dropdown-list::-webkit-scrollbar {
                    width: 6px;
                }

                .aj-phone-dropdown-list::-webkit-scrollbar-track {
                    background: transparent;
                }

                .aj-phone-dropdown-list::-webkit-scrollbar-thumb {
                    background: var(--color-surface-border);
                    border-radius: var(--radius-full);
                }

                /* ── Tablet responsive ≤ 768px ── */
                @media (max-width: 768px) {
                    .aj-toggle-row {
                        width: 100%;
                    }

                    .aj-toggle-btn {
                        flex: 1;
                        text-align: center;
                    }

                    .aj-phone-dropdown {
                        width: calc(100vw - var(--space-section-px-md) * 2 - var(--space-12));
                    }

                    .aj-section-subtitle {
                        font-size: var(--text-xs);
                    }

                    .aj-b2b-section {
                        margin-top: var(--space-4);
                        padding-top: var(--space-4);
                    }
                }

                /* ── Mobile responsive ≤ 480px ── */
                @media (max-width: 480px) {
                    .aj-phone-dropdown {
                        width: calc(100vw - var(--space-section-px-sm) * 2 - var(--space-12));
                    }

                    .aj-phone-prefix-btn {
                        min-width: 90px;
                        padding: var(--space-2) var(--space-2);
                    }

                    .aj-toggle-btn {
                        font-size: var(--text-xs);
                        padding: var(--space-2) var(--space-3);
                    }
                }

                /* ── B2B Toggle ── */
                .aj-toggle-row {
                    display: flex;
                    gap: var(--space-2);
                    margin-bottom: var(--space-6);
                    padding: var(--space-1);
                    background: var(--color-surface);
                    border-radius: var(--radius-main);
                    border: 1px solid var(--color-border-form);
                    width: fit-content;
                }

                .aj-toggle-btn {
                    padding: var(--space-2) var(--space-4);
                    font-family: var(--font-body);
                    font-size: var(--text-sm);
                    font-weight: 500;
                    color: var(--color-text-muted);
                    background: transparent;
                    border: none;
                    border-radius: calc(var(--radius-main) - 2px);
                    cursor: pointer;
                    transition: all 0.2s ease;
                    white-space: nowrap;
                }

                .aj-toggle-btn--active {
                    background: var(--color-primary);
                    color: var(--color-white);
                    box-shadow: var(--shadow-sm);
                }

                .aj-toggle-btn:hover:not(.aj-toggle-btn--active) {
                    background: color-mix(in srgb, var(--color-primary) 8%, transparent);
                }

                /* ── B2B Fields Section ── */
                .aj-b2b-section {
                    margin-top: var(--space-6);
                    padding-top: var(--space-6);
                    border-top: 1px solid var(--color-border-form);
                }

                .aj-b2b-title {
                    font-family: var(--font-heading);
                    font-size: var(--text-base);
                    font-weight: 600;
                    color: var(--color-primary);
                    margin-bottom: var(--space-4);
                }

                /* ── Field-level Errors ── */
                .aj-field-error {
                    font-family: var(--font-body);
                    font-size: var(--text-xs);
                    color: var(--color-error, #dc2626);
                    margin-top: var(--space-1);
                }

                /* ── Section Subtitle ── */
                .aj-section-subtitle {
                    font-family: var(--font-heading);
                    font-size: var(--text-sm);
                    font-weight: 600;
                    color: var(--color-text-muted);
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                    margin-bottom: var(--space-4);
                    padding-bottom: var(--space-2);
                    border-bottom: 1px solid var(--color-border-form);
                }
            `}</style>

            <fieldset className="aj-step-card">

                {/* ── B2B Toggle: PF / PJ ── */}
                <div className="aj-toggle-row">
                    <button
                        type="button"
                        className={`aj-toggle-btn ${(data.tipColaborare ?? 'pf') === 'pf' ? 'aj-toggle-btn--active' : ''}`}
                        onClick={() => onChange('tipColaborare', 'pf')}
                    >
                        Persoană Fizică
                    </button>
                    <button
                        type="button"
                        className={`aj-toggle-btn ${data.tipColaborare === 'b2b' ? 'aj-toggle-btn--active' : ''}`}
                        onClick={() => onChange('tipColaborare', 'b2b')}
                    >
                        Colaborare B2B
                    </button>
                </div>

                {/* ── Section subtitle: contact / representative ── */}
                <p className="aj-section-subtitle">
                    {data.tipColaborare === 'b2b'
                        ? 'Persoană de contact / Reprezentant'
                        : 'Date personale'}
                </p>

                {/* ── Row 1: Nume + Prenume ── */}
                <div className="aj-field-row">
                    <div className="aj-field">
                        <label className="aj-label" htmlFor="aj-nume">
                            Nume <span className="aj-req">*</span>
                        </label>
                        <input
                            id="aj-nume"
                            type="text"
                            required
                            minLength={2}
                            placeholder="Popescu"
                            className="aj-input"
                            value={data.nume ?? ''}
                            onChange={(e) => onChange('nume', e.target.value)}
                        />
                    </div>
                    <div className="aj-field">
                        <label className="aj-label" htmlFor="aj-prenume">
                            Prenume <span className="aj-req">*</span>
                        </label>
                        <input
                            id="aj-prenume"
                            type="text"
                            required
                            minLength={2}
                            placeholder="Maria"
                            className="aj-input"
                            value={data.prenume ?? ''}
                            onChange={(e) => onChange('prenume', e.target.value)}
                        />
                    </div>
                </div>

                {/* ── Row 2: Email + Phone (with prefix) ── */}
                <div className="aj-field-row">
                    <div className="aj-field">
                        <label className="aj-label" htmlFor="aj-email">
                            E-mail <span className="aj-req">*</span>
                        </label>
                        <input
                            id="aj-email"
                            type="email"
                            required
                            placeholder="maria.popescu@email.com"
                            className="aj-input"
                            value={data.email ?? ''}
                            onChange={(e) => onChange('email', e.target.value)}
                        />
                        {data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) && (
                            <p className="aj-field-error">Adresa de email nu este validă</p>
                        )}
                    </div>
                    <div className="aj-field">
                        <label className="aj-label" htmlFor="aj-telefon">
                            Telefon <span className="aj-req">*</span>
                        </label>
                        <div className="aj-phone-wrapper">
                            <div className="aj-phone-prefix" ref={phoneDropdownRef}>
                                <button
                                    type="button"
                                    className="aj-phone-prefix-btn"
                                    onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
                                    aria-expanded={phoneDropdownOpen}
                                    aria-haspopup="listbox"
                                >
                                    <span className="aj-phone-prefix-flag">{selectedPhoneCountry.flag}</span>
                                    <span className="aj-phone-prefix-dial">{selectedPhoneCountry.dial}</span>
                                    <svg
                                        className={`aj-phone-prefix-chevron ${phoneDropdownOpen ? 'aj-phone-prefix-chevron--open' : ''}`}
                                        width="12" height="12" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                    >
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {phoneDropdownOpen && (
                                    <div className="aj-phone-dropdown" role="listbox">
                                        <div className="aj-phone-dropdown-search">
                                            <input
                                                ref={phoneSearchRef}
                                                type="text"
                                                placeholder="Caută țara..."
                                                value={phoneSearch}
                                                onChange={(e) => setPhoneSearch(e.target.value)}
                                            />
                                        </div>
                                        <div className="aj-phone-dropdown-list">
                                            {filteredCountries.map((c) => (
                                                <button
                                                    key={c.code}
                                                    type="button"
                                                    className={`aj-phone-dropdown-item ${c.code === selectedPhoneCountry.code ? 'aj-phone-dropdown-item--active' : ''}`}
                                                    onClick={() => selectPhoneCountry(c)}
                                                    role="option"
                                                    aria-selected={c.code === selectedPhoneCountry.code}
                                                >
                                                    <span className="aj-phone-dropdown-flag">{c.flag}</span>
                                                    <span className="aj-phone-dropdown-name">{c.name}</span>
                                                    <span className="aj-phone-dropdown-dial">{c.dial}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <input
                                id="aj-telefon"
                                type="tel"
                                required
                                placeholder="7XX XXX XXX"
                                className="aj-input aj-phone-input"
                                value={data.telefon ?? ''}
                                onChange={(e) => {
                                    const digits = e.target.value.replace(/\D/g, '').slice(0, 9);
                                    const formatted = digits.replace(/(\d{3})(?=\d)/g, '$1 ').trim();
                                    onChange('telefon', formatted);
                                }}
                                maxLength={11}
                            />
                        </div>
                    </div>
                </div>

                {/* ── Row 3: Țara + Județ/Regiune ── */}
                <div className="aj-field-row">
                    <div className="aj-field">
                        <label className="aj-label" htmlFor="aj-tara">
                            Țara <span className="aj-req">*</span>
                        </label>
                        <select
                            id="aj-tara"
                            className="aj-select"
                            value={selectedCountry}
                            onChange={(e) => handleCountryChange(e.target.value)}
                        >
                            {COUNTRIES.map(c => (
                                <option key={c.code} value={c.code}>
                                    {c.flag} {c.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="aj-field">
                        {isRomania ? (
                            <>
                                <label className="aj-label" htmlFor="aj-judet">
                                    Județ <span className="aj-req">*</span>
                                </label>
                                <select
                                    id="aj-judet"
                                    className="aj-select"
                                    value={selectedJudet}
                                    onChange={(e) => handleJudetChange(e.target.value)}
                                >
                                    <option value="">Selectează județul</option>
                                    {judete.map(j => (
                                        <option key={j} value={j}>{j}</option>
                                    ))}
                                </select>
                            </>
                        ) : (
                            <>
                                <label className="aj-label" htmlFor="aj-regiune">
                                    Regiune / Stat
                                </label>
                                <input
                                    id="aj-regiune"
                                    type="text"
                                    placeholder="Regiune sau stat"
                                    className="aj-input"
                                    value={data.regiune ?? ''}
                                    onChange={(e) => onChange('regiune', e.target.value)}
                                />
                            </>
                        )}
                    </div>
                </div>

                {/* ── Row 4: Oraș + Localitate ── */}
                <div className="aj-field-row">
                    <div className="aj-field">
                        {isRomania && cities.length > 0 ? (
                            <>
                                <label className="aj-label" htmlFor="aj-oras">
                                    Oraș <span className="aj-req">*</span>
                                </label>
                                <select
                                    id="aj-oras"
                                    className="aj-select"
                                    value={data.oras ?? ''}
                                    onChange={(e) => onChange('oras', e.target.value)}
                                >
                                    <option value="">Selectează orașul</option>
                                    {cities.map(city => (
                                        <option key={city} value={city}>{city}</option>
                                    ))}
                                </select>
                            </>
                        ) : (
                            <>
                                <label className="aj-label" htmlFor="aj-oras">
                                    Oraș <span className="aj-req">*</span>
                                </label>
                                <input
                                    id="aj-oras"
                                    type="text"
                                    required
                                    placeholder={isRomania ? 'Selectează mai întâi județul' : 'Oraș'}
                                    className="aj-input"
                                    value={data.oras ?? ''}
                                    onChange={(e) => onChange('oras', e.target.value)}
                                    disabled={isRomania && !selectedJudet}
                                />
                            </>
                        )}
                    </div>
                    <div className="aj-field">
                        <label className="aj-label" htmlFor="aj-localitate">
                            Localitate / Sector
                        </label>
                        <input
                            id="aj-localitate"
                            type="text"
                            placeholder="Localitate, sector sau comună"
                            className="aj-input"
                            value={data.localitate ?? ''}
                            onChange={(e) => onChange('localitate', e.target.value)}
                        />
                    </div>
                </div>

                {/* ── Row 5: Data nașterii (only PF) ── */}
                {(data.tipColaborare ?? 'pf') !== 'b2b' && (
                    <div className="aj-field">
                        <label className="aj-label" htmlFor="aj-data-nastere">
                            Data nașterii
                        </label>
                        <input
                            id="aj-data-nastere"
                            type="date"
                            className="aj-input"
                            value={data.dataNasterii ?? ''}
                            onChange={(e) => onChange('dataNasterii', e.target.value)}
                            style={{ maxWidth: '240px' }}
                        />
                    </div>
                )}

                {/* ── B2B Company Fields (conditional) ── */}
                {data.tipColaborare === 'b2b' && (
                    <div className="aj-b2b-section">
                        <p className="aj-section-subtitle">Date identificare societate (PJ)</p>

                        <div className="aj-field-row">
                            <div className="aj-field">
                                <label className="aj-label" htmlFor="aj-cui">
                                    CUI <span className="aj-req">*</span>
                                </label>
                                <input
                                    id="aj-cui"
                                    type="text"
                                    required
                                    placeholder="RO12345678"
                                    className="aj-input"
                                    value={data.cui ?? ''}
                                    onChange={(e) => {
                                        const clean = e.target.value.replace(/[^0-9RO]/gi, '').toUpperCase();
                                        onChange('cui', clean.slice(0, 12));
                                    }}
                                    maxLength={12}
                                />
                                {data.cui && data.cui.length > 0 && !/^(RO)?\d{2,10}$/i.test(data.cui) && (
                                    <p className="aj-field-error">Format: RO12345678 sau doar cifre (2-10 caractere)</p>
                                )}
                            </div>
                            <div className="aj-field">
                                <label className="aj-label" htmlFor="aj-regcom">
                                    Nr. Registrul Comerțului <span className="aj-req">*</span>
                                </label>
                                <input
                                    id="aj-regcom"
                                    type="text"
                                    required
                                    placeholder="J40/1234/2024"
                                    className="aj-input"
                                    value={data.regCom ?? ''}
                                    onChange={(e) => onChange('regCom', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="aj-field-row">
                            <div className="aj-field">
                                <label className="aj-label" htmlFor="aj-sediu">
                                    Sediu Social <span className="aj-req">*</span>
                                </label>
                                <input
                                    id="aj-sediu"
                                    type="text"
                                    required
                                    placeholder="Str. Exemplu nr. 1, București"
                                    className="aj-input"
                                    value={data.sediuSocial ?? ''}
                                    onChange={(e) => onChange('sediuSocial', e.target.value)}
                                />
                            </div>
                            <div className="aj-field">
                                <label className="aj-label" htmlFor="aj-iban">
                                    IBAN <span className="aj-req">*</span>
                                </label>
                                <input
                                    id="aj-iban"
                                    type="text"
                                    required
                                    placeholder="RO49AAAA1B31007593840000"
                                    className="aj-input"
                                    value={data.iban ?? ''}
                                    onChange={(e) => onChange('iban', e.target.value.toUpperCase().replace(/\s/g, ''))}
                                    maxLength={24}
                                />
                                {data.iban && data.iban.length > 0 && data.iban.length !== 24 && (
                                    <p className="aj-field-error">
                                        IBAN-ul trebuie să aibă exact 24 caractere ({data.iban.length}/24)
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="aj-field">
                            <label className="aj-label" htmlFor="aj-repr-legal">
                                Reprezentant Legal <span className="aj-req">*</span>
                            </label>
                            <input
                                id="aj-repr-legal"
                                type="text"
                                required
                                placeholder="Nume și prenume reprezentant"
                                className="aj-input"
                                value={data.reprezentantLegal ?? ''}
                                onChange={(e) => onChange('reprezentantLegal', e.target.value)}
                            />
                        </div>
                    </div>
                )}
            </fieldset>
        </>
    );
}

/* ─── Validation: all required fields filled + valid email ─── */
export function validateStep1(data: Record<string, any>): boolean {
    const { nume, prenume, email, telefon, oras, tara } = data;
    if (!nume?.trim() || !prenume?.trim() || !telefon?.trim() || !oras?.trim()) return false;
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false;

    // For Romania, require județ
    const isRomania = (tara ?? 'RO') === 'RO';
    if (isRomania && !data.judet?.trim()) return false;

    // B2B validation
    if (data.tipColaborare === 'b2b') {
        const { cui, regCom, sediuSocial, iban, reprezentantLegal } = data;
        if (!cui?.trim() || !/^(RO)?\d{2,10}$/i.test(cui)) return false;
        if (!regCom?.trim()) return false;
        if (!sediuSocial?.trim()) return false;
        if (!iban?.trim() || iban.length !== 24) return false;
        if (!reprezentantLegal?.trim()) return false;
    }

    return true;
}
