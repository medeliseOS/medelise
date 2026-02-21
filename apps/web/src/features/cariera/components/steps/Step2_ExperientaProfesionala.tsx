'use client';

import type { StepProps } from './Step1_DatePersonale';

/* ═══════════════════════════════════════════════════════════════════════════
 * Step 2 — Experiență Profesională
 * ═══════════════════════════════════════════════════════════════════════════ */

const SPECIALTIES = [
    'Medicină Generală',
    'Asistent Medical',
    'Kinetoterapeut',
    'Ambulanțier',
    'Medic de Familie',
    'Coordonator Medical',
    'Altă specialitate',
];

const EXPERIENCE_RANGES = [
    'Sub 1 an',
    '1 – 3 ani',
    '3 – 5 ani',
    '5 – 10 ani',
    'Peste 10 ani',
];

const GRADES = ['Debutant', 'Rezident', 'Specialist', 'Principal'];

export default function Step2_ExperientaProfesionala({ data, onChange, jobTitle }: StepProps) {
    return (
        <fieldset className="aj-step-card">
            <legend className="aj-step-card-title">Experiență profesională</legend>

            <div className="aj-field">
                <label className="aj-label" htmlFor="aj-pozitie">
                    Poziția aplicată
                </label>
                <input
                    id="aj-pozitie"
                    type="text"
                    readOnly
                    className="aj-input"
                    value={jobTitle}
                />
            </div>

            <div className="aj-field-row">
                <div className="aj-field">
                    <label className="aj-label" htmlFor="aj-specialitate">
                        Specialitate medicală <span className="aj-req">*</span>
                    </label>
                    <select
                        id="aj-specialitate"
                        className="aj-select"
                        required
                        value={data.specialitate ?? ''}
                        onChange={(e) => onChange('specialitate', e.target.value)}
                    >
                        <option value="" disabled>Selectează specialitatea</option>
                        {SPECIALTIES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </div>
                <div className="aj-field">
                    <label className="aj-label" htmlFor="aj-experienta">
                        Ani de experiență <span className="aj-req">*</span>
                    </label>
                    <select
                        id="aj-experienta"
                        className="aj-select"
                        required
                        value={data.experienta ?? ''}
                        onChange={(e) => onChange('experienta', e.target.value)}
                    >
                        <option value="" disabled>Selectează experiența</option>
                        {EXPERIENCE_RANGES.map((r) => (
                            <option key={r} value={r}>{r}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="aj-field-row">
                <div className="aj-field">
                    <label className="aj-label" htmlFor="aj-grad">
                        Grad profesional
                    </label>
                    <select
                        id="aj-grad"
                        className="aj-select"
                        value={data.gradProfesional ?? ''}
                        onChange={(e) => onChange('gradProfesional', e.target.value)}
                    >
                        <option value="" disabled>Selectează gradul</option>
                        {GRADES.map((g) => (
                            <option key={g} value={g}>{g}</option>
                        ))}
                    </select>
                </div>
                <div className="aj-field">
                    <div className="aj-checkbox-row" style={{ paddingTop: 26 }}>
                        <input
                            id="aj-telemedicina"
                            type="checkbox"
                            className="aj-checkbox"
                            checked={data.atestatTelemedicina ?? false}
                            onChange={(e) => onChange('atestatTelemedicina', e.target.checked)}
                        />
                        <label htmlFor="aj-telemedicina" className="aj-checkbox-label">
                            Dețin atestat telemedicină
                        </label>
                    </div>
                </div>
            </div>
        </fieldset>
    );
}

export function validateStep2(data: Record<string, any>): boolean {
    return !!data.specialitate && !!data.experienta;
}
