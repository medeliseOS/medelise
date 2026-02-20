'use client';

import Image from 'next/image';
import Link from 'next/link';

/* ── Types ── */

export interface ServiceHeroProps {
    /** Main heading */
    title: string;
    /** Paragraph(s) — supports \n\n for paragraph breaks */
    description: string;
    /** Hero image path (public/) */
    imageSrc: string;
    /** Alt text for the image */
    imageAlt: string;
    /** CTA button label (default: "Programează Ședință") */
    ctaLabel?: string;
    /** CTA button href (default: "/programare") */
    ctaHref?: string;
}

/* ── Calendar icon (inline SVG) ── */

function CalendarIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <path d="M9 16l2 2 4-4" />
        </svg>
    );
}

/* ── Component ── */

export default function ServiceHero({
    title,
    description,
    imageSrc,
    imageAlt,
    ctaLabel = 'Programează Ședință',
    ctaHref = '/programare',
}: ServiceHeroProps) {
    const paragraphs = description.split('\n\n');

    return (
        <section className="svc-hero">
            <div className="svc-hero__inner">
                {/* ── Left column: text ── */}
                <div className="svc-hero__text">
                    <h1 className="svc-hero__title">{title}</h1>

                    <div className="svc-hero__desc">
                        {paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>

                    <Link href={ctaHref} className="svc-hero__cta">
                        <CalendarIcon />
                        <span>{ctaLabel}</span>
                    </Link>
                </div>

                {/* ── Right column: image ── */}
                <div className="svc-hero__media">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={592}
                        height={700}
                        priority
                        className="svc-hero__img"
                    />
                </div>
            </div>

            <style jsx>{`
                .svc-hero {
                    width: 100%;
                    background: #fff;
                    padding: 64px 64px;
                }

                .svc-hero__inner {
                    max-width: 1216px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    gap: 32px;
                    padding: 32px 0;
                }

                .svc-hero__text {
                    flex: 1 1 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 64px;
                    padding-bottom: 40px;
                }

                .svc-hero__title {
                    color: #213170;
                    font-family: var(--font-heading, 'Inter', sans-serif);
                    font-size: 48px;
                    font-weight: 600;
                    line-height: 1.25;
                    margin: 0;
                }

                .svc-hero__desc {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .svc-hero__desc p {
                    color: #213170;
                    font-family: var(--font-heading, 'Inter', sans-serif);
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 1.56;
                    margin: 0;
                }

                .svc-hero__media {
                    flex: 1 1 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 700px;
                }

                /* ── Responsive ── */

                @media (max-width: 1024px) {
                    .svc-hero {
                        padding: 48px 32px;
                    }

                    .svc-hero__inner {
                        flex-direction: column;
                        gap: 40px;
                    }

                    .svc-hero__text {
                        padding-bottom: 0;
                        gap: 32px;
                    }

                    .svc-hero__title {
                        font-size: 36px;
                    }

                    .svc-hero__media {
                        min-height: auto;
                        width: 100%;
                    }
                }

                @media (max-width: 640px) {
                    .svc-hero {
                        padding: 32px 20px;
                    }

                    .svc-hero__title {
                        font-size: 28px;
                    }

                    .svc-hero__desc p {
                        font-size: 16px;
                    }

                    .svc-hero__text {
                        gap: 24px;
                    }
                }
            `}</style>

            {/* Global styles for Next/Image and Link (can't use jsx scoped) */}
            <style jsx global>{`
                .svc-hero__img {
                    width: 100%;
                    height: auto;
                    max-height: 700px;
                    object-fit: cover;
                    border-radius: 32px;
                }

                .svc-hero__cta {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    width: 100%;
                    padding: 10px 20px;
                    background: #213170;
                    color: #fff;
                    border-radius: 8px;
                    font-family: var(--font-body, 'Montserrat', sans-serif);
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 1.56;
                    text-decoration: none;
                    transition: background 0.25s ease, transform 0.2s ease;
                    cursor: pointer;
                }

                .svc-hero__cta:hover {
                    background: #1a2758;
                    transform: translateY(-1px);
                }

                .svc-hero__cta:active {
                    transform: translateY(0);
                }

                @media (max-width: 640px) {
                    .svc-hero__cta {
                        font-size: 16px;
                        padding: 12px 16px;
                    }
                }
            `}</style>
        </section>
    );
}
