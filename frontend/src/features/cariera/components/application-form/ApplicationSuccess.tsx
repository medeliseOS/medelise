import Link from 'next/link';

interface ApplicationSuccessProps {
    jobTitle: string;
}

/** Success state shown after form submission. */
export default function ApplicationSuccess({ jobTitle }: ApplicationSuccessProps) {
    return (
        <div className="apply-form" style={{ maxWidth: 720 }}>
            <div className="apply-success">
                <div className="apply-success-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="var(--color-success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <h2 className="apply-success-title">Aplicația ta a fost trimisă!</h2>
                <p className="apply-success-text">
                    Mulțumim că ai aplicat pentru poziția de <strong>{jobTitle}</strong>. Echipa noastră de recrutare va analiza profilul tău și te va contacta în cel mai scurt timp.
                </p>
                <Link href="/cariera" className="apply-success-link">
                    ← Înapoi la joburi
                </Link>
            </div>
        </div>
    );
}
