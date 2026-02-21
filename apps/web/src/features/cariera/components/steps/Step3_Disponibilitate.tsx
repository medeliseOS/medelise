'use client';

import type { StepProps } from './Step1_DatePersonale';

/* ═══════════════════════════════════════════════════════════════════════════
 * Step 3 — Disponibilitate
 * ═══════════════════════════════════════════════════════════════════════════ */

const AVAILABILITY = ['Full-time', 'Part-time'];

export default function Step3_Disponibilitate({ data, onChange }: StepProps) {
    return (
        <fieldset className="aj-step-card">
            <legend className="aj-step-card-title">Disponibilitate</legend>

            <div className="aj-field-row">
                <div className="aj-field">
                    <label className="aj-label" htmlFor="aj-disponibilitate">
                        Tip program <span className="aj-req">*</span>
                    </label>
                    <select
                        id="aj-disponibilitate"
                        className="aj-select"
                        required
                        value={data.disponibilitate ?? ''}
                        onChange={(e) => onChange('disponibilitate', e.target.value)}
                    >
                        <option value="" disabled>Selectează disponibilitatea</option>
                        {AVAILABILITY.map((a) => (
                            <option key={a} value={a}>{a}</option>
                        ))}
                    </select>
                </div>
                <div className="aj-field">
                    <label className="aj-label" htmlFor="aj-start">
                        Poate începe din
                    </label>
                    <input
                        id="aj-start"
                        type="date"
                        className="aj-input"
                        value={data.dataStart ?? ''}
                        onChange={(e) => onChange('dataStart', e.target.value)}
                    />
                </div>
            </div>

            <div className="aj-checkbox-row">
                <input
                    id="aj-permis"
                    type="checkbox"
                    className="aj-checkbox"
                    checked={data.permisConducere ?? false}
                    onChange={(e) => onChange('permisConducere', e.target.checked)}
                />
                <label htmlFor="aj-permis" className="aj-checkbox-label">
                    Dețin permis de conducere categoria B
                </label>
            </div>

            <div className="aj-checkbox-row">
                <input
                    id="aj-auto"
                    type="checkbox"
                    className="aj-checkbox"
                    checked={data.autovehiculPropriu ?? false}
                    onChange={(e) => onChange('autovehiculPropriu', e.target.checked)}
                />
                <label htmlFor="aj-auto" className="aj-checkbox-label">
                    Dețin autovehicul propriu
                </label>
            </div>
        </fieldset>
    );
}

export function validateStep3(data: Record<string, any>): boolean {
    return !!data.disponibilitate;
}
