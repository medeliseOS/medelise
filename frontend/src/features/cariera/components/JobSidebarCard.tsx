import Image from 'next/image';
import Link from 'next/link';
import Button from '@ui/Button';
import MailIcon from '@/components/icons/MailIcon';
import { JobDetail } from '../data/jobData';

/* ─── Sidebar card (reused in desktop sidebar & tablet inline) ─── */
export default function JobSidebarCard({ job, slug, className }: { job: JobDetail; slug: string; className?: string }) {
    return (
        <>
            <div className={`job-sidebar-card ${className || ''}`}>
                {/* Company logo + name */}
                <div className="sidebar-company">
                    <div className="sidebar-logo-wrap">
                        <Image
                            src="/brand-medelise/md-logo-medvita-black.webp"
                            alt="Medelise"
                            width={36}
                            height={20}
                        />
                    </div>
                    <h3 className="sidebar-company-name">{job.sidebar.companyName}</h3>
                </div>

                {/* Location badges */}
                <div className="sidebar-badges">
                    {job.sidebar.locations.map((loc, i) => (
                        <span key={i} className="sidebar-badge">
                            {loc}
                        </span>
                    ))}
                </div>

                {/* Apply button */}
                <Link href={`/cariera/${slug}/aplica`}>
                    <Button variant="primary" isFullWidth iconRight={<MailIcon />}>
                        Aplica aici
                    </Button>
                </Link>

                {/* Info rows */}
                <div className="sidebar-info">
                    <div className="sidebar-info-item">
                        <span className="sidebar-info-label">Website Companie</span>
                        <a
                            href="https://www.medelise.ro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sidebar-info-value"
                        >
                            {job.sidebar.website}
                        </a>
                    </div>
                    <div className="sidebar-info-item">
                        <span className="sidebar-info-label">Tip job:</span>
                        <span className="sidebar-info-value">{job.sidebar.jobType}</span>
                    </div>
                    <div className="sidebar-info-item">
                        <span className="sidebar-info-label">Salariu</span>
                        <span className="sidebar-info-value">{job.sidebar.salary}</span>
                    </div>
                    <div className="sidebar-info-item">
                        <span className="sidebar-info-label">Locatie</span>
                        <span className="sidebar-info-value">{job.sidebar.workLocation}</span>
                    </div>
                    <div className="sidebar-info-item">
                        <span className="sidebar-info-label">Data Postare</span>
                        <span className="sidebar-info-value">{job.sidebar.datePosted}</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .job-sidebar-card {
                    width: 100%;
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    border: 1px solid var(--color-surface-border);
                    border-radius: 8px;
                    background: white;
                }

                .sidebar-company {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .sidebar-logo-wrap {
                    width: 56px;
                    height: 56px;
                    border-radius: 8px;
                    border: 1px solid var(--color-surface-border);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .sidebar-company-name {
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 28px;
                    color: var(--color-primary);
                    margin: 0;
                }

                .sidebar-badges {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }

                .sidebar-badge {
                    padding: 4px 12px;
                    background: var(--color-surface);
                    border-radius: 100px;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 20px;
                    color: var(--color-primary);
                }

                .sidebar-info {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }

                .sidebar-info-item {
                    display: flex;
                    flex-direction: column;
                    padding: 12px 0;
                    border-bottom: 1px solid var(--color-surface-border);
                }

                .sidebar-info-item:last-child {
                    border-bottom: none;
                }

                .sidebar-info-label {
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 20px;
                    color: var(--color-text-muted);
                }

                .sidebar-info-value {
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                    color: var(--color-primary);
                    text-decoration: none;
                }
            `}</style>
        </>
    );
}
