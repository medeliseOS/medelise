'use client';

import DocumentChecker from '../DocumentChecker';
import { getRoleForSlug, getB2BRequirements, type DocumentRequirement } from '../../data/documentRequirements';
import type { StepProps } from './Step1_DatePersonale';

/* ═══════════════════════════════════════════════════════════════════════════
 * Step 5 — Documente Necesare (wraps DocumentChecker)
 * Switches between PF (personal) and B2B (company) documents.
 * ═══════════════════════════════════════════════════════════════════════════ */

export default function Step5_DocumenteNecesare({ slug, data }: StepProps) {
    const role = getRoleForSlug(slug);
    const isB2B = data?.tipColaborare === 'b2b';

    return (
        <div className="aj-step-card aj-step-card--no-legend">
            {isB2B ? (
                <>
                    <p style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'var(--text-base)',
                        fontWeight: 600,
                        color: 'var(--color-primary)',
                        marginBottom: 'var(--space-4)',
                    }}>
                        Documente necesare — Colaborare B2B (PJ)
                    </p>
                    <DocumentChecker selectedRole={role} b2bDocuments={getB2BRequirements()} />
                </>
            ) : (
                <DocumentChecker selectedRole={role} />
            )}
        </div>
    );
}

/* Step 5 is informational — always valid */
export function validateStep5(): boolean {
    return true;
}
