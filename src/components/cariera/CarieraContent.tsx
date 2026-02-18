'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { JOBS, getDaysRemaining } from './jobData';

/* ─── Derive listing array from the single source of truth ─── */
const jobList = Object.entries(JOBS).map(([slug, job]) => ({
    slug,
    title: job.title,
    type: job.type,
    location: job.location,
    salary: job.salary,
    experience: job.experience,
    deadline: job.deadline,
}));

/* Right-arrow chevron for buttons */
function ArrowRight() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M7.5 4.16667L13.3333 10L7.5 15.8333"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function CarieraContent() {
    return (
        <>
            <main className="cariera-page">
                {/* ── Hero Section ── */}
                <section className="cariera-hero" aria-label="Carieră Hero">
                    <div className="cariera-hero-inner">
                        <div className="cariera-hero-content">
                            <div className="cariera-hero-text">
                                <h1 className="cariera-hero-title">
                                    „Începe-ți călătoria cu Medelise"
                                </h1>
                                <p className="cariera-hero-desc">
                                    Alătură-te Medelise și descoperă libertatea de a-ți organiza programul exact așa cum dorești!
                                    <br /><br />
                                    Noi înțelegem cât de important este echilibrul dintre viața profesională și cea personală, de aceea îți oferim flexibilitatea de a lucra exact atunci când îți dorești.
                                </p>
                            </div>
                            <div className="cariera-hero-divider" />
                        </div>
                    </div>
                </section>

                {/* ── Jobs Section ── */}
                <section className="jobs-section" id="joburi">
                    {/* Header */}
                    <div className="jobs-header">
                        <h2 className="jobs-title">Joburi disponibile</h2>
                        <p className="jobs-desc">
                            Construim echipe medicale de excelență în homecare și telemedicină. Dacă îți dorești un mediu profesional care pune accent pe inovație, flexibilitate și impactul real asupra pacienților, explorează pozițiile disponibile.
                        </p>
                    </div>

                    {/* Empty state */}
                    {jobList.length === 0 ? (
                        <div className="jobs-empty">
                            <p className="jobs-empty-text">
                                Momentan nu avem poziții deschise. Revino în curând sau trimite-ne un CV la pagina de contact!
                            </p>
                            <Link href="/contact">
                                <Button variant="primary">Contactează-ne</Button>
                            </Link>
                        </div>
                    ) : (
                        <>
                            {/* Cards Grid */}
                            <div className="jobs-grid">
                                {jobList.map((job) => {
                                    const daysLeft = getDaysRemaining(job.deadline);
                                    const isExpired = daysLeft === 0;

                                    return (
                                        <article key={job.slug} className={`job-card ${isExpired ? 'job-card-expired' : ''}`}>
                                            <div className="job-card-body">
                                                {/* Title + Type */}
                                                <div className="job-row-title">
                                                    <h3 className="job-name">{job.title}</h3>
                                                    <span className="job-type">
                                                        <Image
                                                            src="/icons-medelise/md-system/md-ico-flag.webp"
                                                            alt=""
                                                            width={20}
                                                            height={20}
                                                            aria-hidden="true"
                                                        />
                                                        {job.type}
                                                    </span>
                                                </div>

                                                {/* Meta: Location · Salary · Experience */}
                                                <div className="job-meta">
                                                    <span className="job-meta-item">
                                                        <Image
                                                            src="/icons-medelise/md-system/md-ico-location-emp.webp"
                                                            alt=""
                                                            width={20}
                                                            height={20}
                                                            aria-hidden="true"
                                                        />
                                                        {job.location}
                                                    </span>
                                                    <span className="job-meta-item">
                                                        <Image
                                                            src="/icons-medelise/md-system/md-ico-money-dollar.webp"
                                                            alt=""
                                                            width={20}
                                                            height={20}
                                                            aria-hidden="true"
                                                        />
                                                        {job.salary}
                                                    </span>
                                                    <span className="job-meta-item">
                                                        <Image
                                                            src="/icons-medelise/md-system/md-ico-suitcase.webp"
                                                            alt=""
                                                            width={20}
                                                            height={20}
                                                            aria-hidden="true"
                                                        />
                                                        {job.experience}
                                                    </span>
                                                </div>

                                                {/* Divider */}
                                                <div className="job-divider" />

                                                {/* Footer: Days remaining + Logo */}
                                                <div className="job-footer">
                                                    <span className={`job-meta-item ${isExpired ? 'job-expired' : ''}`}>
                                                        <Image
                                                            src="/icons-medelise/md-system/md-ico-calendar-emp.webp"
                                                            alt=""
                                                            width={20}
                                                            height={20}
                                                            aria-hidden="true"
                                                        />
                                                        {isExpired
                                                            ? 'Expirat'
                                                            : `${daysLeft} ${daysLeft === 1 ? 'zi rămasă' : 'zile rămase'}`}
                                                    </span>
                                                    <Image
                                                        src="/brand-medelise/md-logo-medvita-black.webp"
                                                        alt="Logo Medelise Health Solutions"
                                                        width={36}
                                                        height={20}
                                                        className="job-logo"
                                                    />
                                                </div>
                                            </div>

                                            {/* CTA — disabled on expired jobs */}
                                            {isExpired ? (
                                                <Button variant="primary" iconRight={<ArrowRight />} disabled>
                                                    Poziție expirată
                                                </Button>
                                            ) : (
                                                <Link href={`/cariera/${job.slug}`}>
                                                    <Button variant="primary" iconRight={<ArrowRight />}>
                                                        Aplică acum
                                                    </Button>
                                                </Link>
                                            )}
                                        </article>
                                    );
                                })}
                            </div>

                            {/* Bottom CTA */}
                            <Link href="/cariera#joburi">
                                <Button variant="primary" iconRight={<ArrowRight />}>
                                    Vezi toate postările
                                </Button>
                            </Link>
                        </>
                    )}
                </section>
            </main>

            <style jsx>{`
                /* ═══════════════════════════════════
                   GLOBAL — Font inheritance
                   ═══════════════════════════════════ */
                .cariera-page {
                    font-family: var(--font-heading);
                    min-height: 100vh;
                }

                /* ═══════════════════════════════════
                   §1  HERO SECTION — DESKTOP
                   ═══════════════════════════════════ */
                .cariera-hero {
                    width: 100%;
                    padding: 0 var(--space-section-px-lg);
                    background: white;
                }

                .cariera-hero-inner {
                    margin: 0 auto;
                    padding: var(--space-12) 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .cariera-hero-content {
                    width: 100%;
                    padding: var(--space-10) 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    gap: var(--space-8);
                }

                .cariera-hero-text {
                    width: 100%;
                    padding: var(--space-4);
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: var(--space-8);
                }

                .cariera-hero-title {
                    max-width: 596px;
                    width: 100%;
                    flex-shrink: 0;
                    color: var(--color-primary);
                    font-size: 36px;
                    font-weight: 600;
                    line-height: 44px;
                    margin: 0;
                    word-wrap: break-word;
                }

                .cariera-hero-desc {
                    flex: 1;
                    color: var(--color-primary);
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                    word-wrap: break-word;
                }

                .cariera-hero-divider {
                    width: 100%;
                    height: 1px;
                    background: var(--color-secondary);
                }

                /* ═══════════════════════════════════
                   §2  JOBS SECTION — DESKTOP
                   ═══════════════════════════════════ */
                .jobs-section {
                    width: 100%;
                    padding: var(--space-4) var(--space-section-px-lg) var(--space-16);
                    background: white;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: var(--space-6);
                }

                .jobs-header {
                    width: 100%;
                    padding-top: var(--space-4);
                    padding-bottom: var(--space-12);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: var(--space-3);
                    text-align: center;
                }

                .jobs-title {
                    color: var(--color-primary);
                    font-size: 36px;
                    font-weight: 600;
                    line-height: 44px;
                    margin: 0;
                }

                .jobs-desc {
                    color: var(--color-primary);
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                    max-width: 800px;
                }

                /* ── Empty state ── */
                .jobs-empty {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: var(--space-6);
                    padding: var(--space-12) var(--space-6);
                    text-align: center;
                }

                .jobs-empty-text {
                    color: var(--color-text-muted);
                    font-size: 18px;
                    line-height: 28px;
                    max-width: 500px;
                    margin: 0;
                }

                /* ── Cards Grid: 2×2 on desktop ── */
                .jobs-grid {
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-8);
                }

                .job-card {
                    padding: var(--space-6);
                    background: white;
                    overflow: hidden;
                    border-radius: var(--space-2);
                    outline: 1px solid var(--color-surface-border);
                    outline-offset: -1px;
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-6);
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    cursor: pointer;
                }

                .job-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(33, 49, 112, 0.10);
                }

                .job-card:focus-within {
                    outline: 2px solid var(--color-primary);
                    outline-offset: 2px;
                }

                /* ── Expired card visual state ── */
                .job-card-expired {
                    opacity: 0.6;
                    cursor: default;
                }

                .job-card-expired:hover {
                    transform: none;
                    box-shadow: none;
                }

                .job-card-body {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-3);
                }

                /* Title row: name + type badge */
                .job-row-title {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: var(--space-4);
                }

                .job-name {
                    flex: 1;
                    color: var(--color-primary);
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 28px;
                    margin: 0;
                }

                .job-type {
                    display: flex;
                    align-items: center;
                    gap: var(--space-1);
                    color: var(--color-accent);
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 20px;
                    white-space: nowrap;
                }

                /* Meta row: location · salary · experience */
                .job-meta {
                    display: flex;
                    align-items: center;
                    gap: var(--space-4);
                    flex-wrap: wrap;
                }

                .job-meta-item {
                    display: flex;
                    align-items: center;
                    gap: var(--space-1);
                    color: var(--color-primary);
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 20px;
                    white-space: nowrap;
                }

                .job-expired {
                    color: var(--color-error);
                    font-weight: 500;
                }

                .job-divider {
                    width: 100%;
                    height: 1px;
                    background: var(--color-surface-border);
                }

                .job-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .job-logo {
                    opacity: 0.5;
                }

                /* ═══════════════════════════════════
                   §3  TABLET (max 1024px)
                   Single-column cards, fluid width
                   ═══════════════════════════════════ */
                @media (max-width: 1024px) {
                    .cariera-hero {
                        padding: 0 var(--space-section-px-md);
                    }

                    .cariera-hero-inner {
                        width: 100%;
                        padding: var(--space-16) 0;
                    }

                    .cariera-hero-text {
                        flex-direction: column;
                        align-items: flex-start;
                        padding: 0;
                    }

                    .cariera-hero-title {
                        max-width: 596px;
                    }

                    .jobs-section {
                        padding: var(--space-16) var(--space-section-px-md);
                        align-items: center;
                    }

                    .jobs-header {
                        width: 100%;
                        padding-top: var(--space-4);
                        padding-bottom: var(--space-12);
                    }

                    .jobs-grid {
                        width: 100%;
                        grid-template-columns: 1fr;
                        gap: var(--space-6);
                    }

                    .job-card {
                        width: 100%;
                    }
                }

                /* ═══════════════════════════════════
                   §4  MOBILE (max 480px)
                   Compact layout
                   ═══════════════════════════════════ */
                @media (max-width: 480px) {
                    .cariera-hero {
                        padding: 0 var(--space-section-px-sm);
                    }

                    .cariera-hero-inner {
                        padding: var(--space-12) 0;
                    }

                    .cariera-hero-content {
                        padding: 0;
                        gap: var(--space-4);
                    }

                    .cariera-hero-text {
                        gap: var(--space-4);
                    }

                    .cariera-hero-title {
                        font-size: 18px;
                        font-weight: 600;
                        line-height: 28px;
                    }

                    .cariera-hero-desc {
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 24px;
                    }

                    .jobs-section {
                        padding: var(--space-10) var(--space-section-px-sm);
                    }

                    .jobs-header {
                        width: 100%;
                        padding-bottom: var(--space-8);
                    }

                    .jobs-title {
                        font-size: 24px;
                        line-height: 32px;
                    }

                    .jobs-desc {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    .jobs-grid {
                        width: 100%;
                    }

                    .job-card {
                        padding: var(--space-4);
                    }

                    .job-row-title {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: var(--space-2);
                    }

                    .job-meta {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: var(--space-2);
                    }
                }
            `}</style>
        </>
    );
}
