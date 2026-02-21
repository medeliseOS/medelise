import Link from 'next/link';

interface ApplicationHeaderProps {
    slug: string;
    jobTitle: string;
}

/** Page header with back button, breadcrumb, title and subtitle. */
export default function ApplicationHeader({ slug, jobTitle }: ApplicationHeaderProps) {
    return (
        <header className="apply-header">
            <Link href={`/cariera/${slug}`} className="apply-back-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Înapoi la {jobTitle}
            </Link>
            <nav className="apply-breadcrumb">
                <Link href="/cariera" className="apply-breadcrumb-link">Carieră</Link>
                <span className="apply-breadcrumb-sep">›</span>
                <Link href={`/cariera/${slug}`} className="apply-breadcrumb-link">{jobTitle}</Link>
                <span className="apply-breadcrumb-sep">›</span>
                <span className="apply-breadcrumb-current">Aplică</span>
            </nav>
            <h1 className="apply-header-title">Aplică pentru {jobTitle}</h1>
            <p className="apply-header-subtitle">Completează formularul de mai jos pentru a te înscrie în procesul de selecție.</p>
        </header>
    );
}
