'use client';

import Link from 'next/link';
import type { StepProps } from './Step1_DatePersonale';

/* ═══════════════════════════════════════════════════════════════════════════
 * Step 6 — Consimțământ & Finalizare
 * ═══════════════════════════════════════════════════════════════════════════ */

export default function Step6_Consimtamant({ data, onChange }: StepProps) {
    return (
        <fieldset className="aj-step-card">
            <legend className="aj-step-card-title">Consimțământ</legend>

            <div className="aj-checkbox-row">
                <input
                    id="aj-gdpr"
                    type="checkbox"
                    required
                    className="aj-checkbox"
                    checked={data.acordGdpr ?? false}
                    onChange={(e) => onChange('acordGdpr', e.target.checked)}
                />
                <label htmlFor="aj-gdpr" className="aj-checkbox-label">
                    Sunt de acord cu prelucrarea datelor personale în conformitate cu{' '}
                    <Link href="/politica-confidentialitate" target="_blank" rel="noopener noreferrer">
                        Politica de Confidențialitate
                    </Link>{' '}
                    și regulamentul GDPR. <span className="aj-req">*</span>
                </label>
            </div>

            <div className="aj-checkbox-row">
                <input
                    id="aj-newsletter"
                    type="checkbox"
                    className="aj-checkbox"
                    checked={data.newsletter ?? false}
                    onChange={(e) => onChange('newsletter', e.target.checked)}
                />
                <label htmlFor="aj-newsletter" className="aj-checkbox-label">
                    Doresc să primesc notificări despre noi oportunități de angajare la Medelise.
                </label>
            </div>
        </fieldset>
    );
}

export function validateStep6(data: Record<string, any>): boolean {
    return !!data.acordGdpr;
}
