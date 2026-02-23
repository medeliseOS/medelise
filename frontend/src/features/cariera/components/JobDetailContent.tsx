'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@ui/Button';
import MailIcon from '@/components/icons/MailIcon';
import { JOBS } from '../data/jobData';
import JobSidebarCard from './JobSidebarCard';

/* ─── Helper: render \n as <br/> ─── */
function TextBlock({ text }: { text: string }) {
    return (
        <>
            {text.split('\n').map((line, i, arr) => (
                <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                </span>
            ))}
        </>
    );
}

/* ═══════════════════════════════════════════════════════════
 * JobDetailContent — Orchestrator
 *
 * Composes the job detail page from:
 *   • Header (inline — small)
 *   • JobSidebarCard (extracted component)
 *   • Content sections (inline — data-driven)
 *   • Apply CTA button
 * ═══════════════════════════════════════════════════════════ */
export default function JobDetailContent({ slug }: { slug: string }) {
    const job = JOBS[slug];
    const [copyLabel, setCopyLabel] = useState('Copy');

    const handleCopy = useCallback(() => {
        if (typeof navigator === 'undefined') return;
        navigator.clipboard
            .writeText(window.location.href)
            .then(() => {
                setCopyLabel('Copiat ✓');
                setTimeout(() => setCopyLabel('Copy'), 2000);
            })
            .catch(() => {
                /* Fallback: silent fail on non-HTTPS */
            });
    }, []);

    if (!job) {
        return (
            <div className="job-not-found">
                <h1 className="job-not-found-title">Job negăsit</h1>
                <p className="job-not-found-desc">
                    Poziția căutată nu a fost găsită.
                </p>
                <Link href="/cariera" className="job-not-found-link">
                    Înapoi la Carieră
                </Link>
                <style jsx>{`
                    .job-not-found {
                        padding: 100px 20px;
                        text-align: center;
                        font-family: var(--font-heading);
                    }
                    .job-not-found-title {
                        color: var(--color-primary);
                        font-size: 36px;
                        margin: 0;
                    }
                    .job-not-found-desc {
                        color: var(--color-primary);
                        font-size: 18px;
                        margin-top: 16px;
                    }
                    .job-not-found-link {
                        display: inline-block;
                        margin-top: 24px;
                        padding: 10px 20px;
                        background: var(--color-primary);
                        color: white;
                        border-radius: 8px;
                        text-decoration: none;
                        font-weight: 600;
                        transition: opacity 0.15s;
                    }
                    .job-not-found-link:hover {
                        opacity: 0.9;
                    }
                    .job-not-found-link:focus-visible {
                        outline: 2px solid var(--color-primary);
                        outline-offset: 2px;
                    }
                `}</style>
            </div>
        );
    }

    return (
        <>
            <main className="job-detail-page">
                <div className="job-detail-container">
                    <div className="job-detail-row">
                        {/* ── LEFT / MAIN CONTENT ── */}
                        <div className="job-detail-main">
                            {/* Header */}
                            <div className="job-detail-header">
                                <h2 className="job-detail-category">{job.category}</h2>
                                <h1 className="job-detail-title">{job.title}</h1>

                                {/* Social buttons */}
                                <div className="job-social-row">
                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="job-social-btn"
                                    >
                                        <Image
                                            src="/icons-medelise/md-social/md-ico-facebook.webp"
                                            alt="Facebook"
                                            width={20}
                                            height={20}
                                        />
                                        <span>Share</span>
                                    </a>
                                    <a
                                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(job.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="job-social-btn"
                                    >
                                        <Image
                                            src="/icons-medelise/md-social/md-ico-twitter.webp"
                                            alt="Twitter"
                                            width={20}
                                            height={20}
                                        />
                                        <span>Tweet</span>
                                    </a>
                                    <button
                                        className="job-social-btn"
                                        onClick={handleCopy}
                                    >
                                        <Image
                                            src="/icons-medelise/md-system/md-ico-copy.webp"
                                            alt="Copy"
                                            width={20}
                                            height={20}
                                        />
                                        <span>{copyLabel}</span>
                                    </button>
                                </div>
                            </div>

                            {/* ── Sidebar card (INLINE version — visible tablet/mobile only) ── */}
                            <JobSidebarCard job={job} slug={slug} className="sidebar-inline" />

                            {/* Content sections */}
                            <div className="job-detail-body">
                                <div className="job-detail-section">
                                    <span className="job-section-heading">{job.overviewTitle}</span>
                                    <br />
                                    <span className="job-section-text">
                                        <TextBlock text={job.overviewBody} />
                                    </span>
                                </div>

                                <div className="job-detail-section">
                                    <span className="job-section-heading">{job.tasksTitle}</span>
                                    <br />
                                    <span className="job-section-text">
                                        <TextBlock text={job.tasksBody} />
                                    </span>
                                </div>

                                <div className="job-detail-section">
                                    <span className="job-section-heading">{job.profileTitle}</span>
                                    <br />
                                    <span className="job-section-text">
                                        <TextBlock text={job.profileBody} />
                                    </span>
                                </div>

                                <div className="job-detail-section">
                                    <span className="job-section-heading">{job.benefitsTitle}</span>
                                    <br />
                                    <span className="job-section-text">
                                        <TextBlock text={job.benefitsBody} />
                                    </span>
                                </div>

                                <p className="job-closing-text">{job.closingText}</p>
                            </div>

                            {/* Apply CTA */}
                            <Link href={`/cariera/${slug}/aplica`}>
                                <Button variant="primary" isFullWidth iconRight={<MailIcon />}>
                                    Aplica aici
                                </Button>
                            </Link>
                        </div>

                        {/* ── RIGHT SIDEBAR (desktop only) ── */}
                        <aside className="job-detail-sidebar">
                            <JobSidebarCard job={job} slug={slug} className="sidebar-desktop" />
                        </aside>
                    </div>
                </div>
            </main>

            <style jsx>{`
                .job-detail-page {
                    font-family: var(--font-heading);
                    min-height: 100vh;
                    background: white;
                }

                .job-detail-container {
                    width: 100%;
                    padding: var(--space-16) var(--space-section-px-lg);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .job-detail-row {
                    width: 100%;
                    padding: var(--space-8) 0;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    gap: var(--space-8);
                }

                .job-detail-main {
                    flex: 1;
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                .job-detail-header {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .job-detail-category {
                    color: var(--color-primary);
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 32px;
                    margin: 0;
                }

                .job-detail-title {
                    color: var(--color-primary);
                    font-size: 36px;
                    font-weight: 600;
                    line-height: 44px;
                    margin: 0;
                }

                .job-social-row {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .job-social-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 10px 20px;
                    border-radius: 8px;
                    outline: 1px solid var(--color-border-light);
                    outline-offset: -1px;
                    background: white;
                    color: var(--color-text-secondary);
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 20px;
                    text-decoration: none;
                    cursor: pointer;
                    border: none;
                    font-family: inherit;
                    transition: background 0.15s, color 0.15s;
                }

                .job-social-btn:hover {
                    background: var(--color-surface-card);
                }

                .job-social-btn:focus-visible {
                    outline: 2px solid var(--color-primary);
                    outline-offset: 2px;
                }

                /* Inline sidebar: HIDDEN on desktop */
                :global(.sidebar-inline) {
                    display: none !important;
                }

                .job-detail-body {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                .job-detail-section {
                    color: var(--color-primary);
                    font-size: 18px;
                    line-height: 28px;
                    word-wrap: break-word;
                }

                .job-section-heading {
                    font-weight: 600;
                }

                .job-section-text {
                    font-weight: 400;
                }

                .job-closing-text {
                    color: var(--color-primary);
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                }

                .job-detail-sidebar {
                    max-width: 375px;
                    width: 100%;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                /* ─── TABLET (max 1024px) ─── */
                @media (max-width: 1024px) {
                    .job-detail-container {
                        padding: var(--space-8) var(--space-section-px-md);
                    }

                    .job-detail-row {
                        flex-direction: column;
                        align-items: stretch;
                        gap: 0;
                    }

                    .job-detail-main {
                        width: 100%;
                        gap: var(--space-6);
                    }

                    .job-detail-sidebar {
                        display: none;
                    }

                    :global(.sidebar-inline) {
                        display: flex !important;
                    }

                    :global(.sidebar-inline .sidebar-info) {
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: flex-start;
                        padding: 0 var(--space-2);
                        gap: var(--space-2);
                    }
                }

                /* ─── MOBILE (max 480px) ─── */
                @media (max-width: 480px) {
                    .job-detail-container {
                        padding: var(--space-section-px-sm);
                    }

                    .job-detail-row {
                        padding: var(--space-4) 0;
                    }

                    .job-detail-main {
                        gap: 24px;
                    }

                    .job-detail-header {
                        gap: 12px;
                    }

                    .job-detail-category {
                        font-size: 14px;
                        line-height: 20px;
                    }

                    .job-detail-title {
                        font-size: 18px;
                        line-height: 28px;
                    }

                    .job-social-row {
                        gap: 16px;
                        width: 100%;
                    }

                    .job-social-btn {
                        flex: 1 1 0;
                        padding: 8px 16px;
                        font-size: 14px;
                    }

                    .job-detail-body {
                        gap: 16px;
                    }

                    .job-detail-section {
                        font-size: 14px;
                        line-height: 20px;
                    }

                    .job-section-heading {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    .job-closing-text {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    :global(.sidebar-inline .sidebar-company-name) {
                        font-size: 18px;
                        line-height: 28px;
                    }

                    :global(.sidebar-inline .sidebar-info) {
                        flex-direction: column;
                        padding: 0;
                    }
                }
            `}</style>
        </>
    );
}
