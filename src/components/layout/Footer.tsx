'use client';

import Link from 'next/link';
import Image from 'next/image';

/* ── Footer Data ──────────────────────────────────────────────── */
const COMPANY_LINKS = [
    { label: 'Despre noi', href: '/despre-noi' },
    { label: 'Cariere', href: '/cariera' },
];

const CONTACT_ITEMS = [
    {
        icon: '/images-medelise/md-quality/md-img-email-icon.webp',
        text: 'office@medelise.ro',
        href: 'mailto:office@medelise.ro',
    },
    {
        icon: '/images-medelise/md-quality/md-img-phone-icon.webp',
        text: '+40 (784) 414 555',
        href: 'tel:+40784414555',
    },
    {
        icon: '/images-medelise/md-quality/md-img-location-icon.webp',
        text: 'București & Ilfov',
        href: '#',
    },
];

const LEGAL_LINKS = [
    { label: 'Asistență clienți', href: '/contact' },
    { label: 'Termeni și condiții', href: '#' },
    { label: 'Politica cookies', href: '#' },
    { label: 'Întrebări frecvente (FAQ)', href: '#' },
    { label: 'Politica de confidențialitate GDPR', href: '#' },
];

const SOCIAL_LINKS = [
    { icon: '/images-medelise/md-quality/md-img-instagram-icon.webp', href: 'https://instagram.com', label: 'Instagram' },
    { icon: '/images-medelise/md-quality/md-img-facebook-icon.webp', href: 'https://facebook.com', label: 'Facebook', round: true },
    { icon: '/images-medelise/md-quality/md-img-twitter-icon.webp', href: 'https://x.com', label: 'X / Twitter' },
    { icon: '/images-medelise/md-quality/md-img-linkedin-icon.webp', href: 'https://linkedin.com', label: 'LinkedIn' },
];

/* ── Footer Component ─────────────────────────────────────────── */
export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-divider" />
                <div className="footer-container">
                    {/* ── Top Row ── */}
                    <div className="footer-top">
                        {/* Left: Logo + tagline */}
                        <div className="footer-brand">
                            <Link href="/">
                                <span style={{
                                    fontFamily: 'var(--font-brand)',
                                    fontSize: '24px',
                                    textTransform: 'uppercase' as const,
                                    color: 'var(--color-primary)',
                                    letterSpacing: '0.05em',
                                    lineHeight: 1,
                                }}>
                                    MEDELISE
                                </span>
                            </Link>
                            <p className="footer-tagline">
                                We love working with ambitious people. Let&apos;s build something great together now.
                            </p>
                        </div>

                        {/* Right: Link columns */}
                        <div className="footer-columns">
                            {/* Companie */}
                            <div className="footer-col">
                                <h4 className="footer-col-heading">Companie</h4>
                                <nav className="footer-col-links">
                                    {COMPANY_LINKS.map((link) => (
                                        <Link key={link.label} href={link.href} className="footer-link">
                                            {link.label}
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            {/* Suport & Legal */}
                            <div className="footer-col">
                                <h4 className="footer-col-heading">Suport &amp; Legal</h4>
                                <nav className="footer-col-links">
                                    {LEGAL_LINKS.map((link) => (
                                        <Link key={link.label} href={link.href} className="footer-link">
                                            {link.label}
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            {/* Contact */}
                            <div className="footer-col">
                                <h4 className="footer-col-heading">Contact</h4>
                                <div className="footer-col-links">
                                    {CONTACT_ITEMS.map((item) => (
                                        <a key={item.text} href={item.href} className="footer-contact-item">
                                            <Image src={item.icon} alt="" width={20} height={20} className="footer-contact-icon" />
                                            <span className="footer-link">{item.text}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Divider ── */}
                    <div className="footer-divider" />

                    {/* ── Bottom Row ── */}
                    <div className="footer-bottom">
                        <p className="footer-copyright">
                            © 2025 MEDELISE HEALTH SOLUTIONS S.R.L<br />
                            Toate drepturile rezervate
                        </p>
                        <div className="footer-socials">
                            {SOCIAL_LINKS.map((social) => (
                                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className={`footer-social-icon${social.round ? ' footer-social-icon--fb' : ''}`} aria-label={social.label}>
                                    <Image src={social.icon} alt={social.label} width={20} height={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Regulatory Bar ── */}
                <div className="footer-regulatory">
                    <div className="footer-regulatory-logos">
                        <Image src="/images-medelise/md-quality/md-img-anpc-badge.webp" alt="ANPC SAL" width={201} height={50} />
                        <Image src="/images-medelise/md-quality/md-img-quality-large.webp" alt="ANPC" width={50} height={50} />
                        <Image src="/images-medelise/md-quality/md-img-anpc-badge-alt.webp" alt="ANPC SOL" width={195} height={50} />
                    </div>
                </div>
            </footer>

            <style jsx>{`
                /* ═══════════════════════════════════════
                 * FOOTER — Mobile-first (375px)
                 * ═══════════════════════════════════════ */
                .footer {
                    width: 100%;
                    background: white;
                    display: flex;
                    flex-direction: column;
                    font-family: var(--font-body);
                    color: var(--color-primary);
                }

                .footer-container {
                    width: 100%;
                    padding: 48px 16px;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                /* ── Top Row ── */
                .footer-top {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                .footer-brand {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;
                }

                .footer-tagline {
                    max-width: 316px;
                    text-align: center;
                    color: var(--color-primary);
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    margin: 0;
                }

                /* ── Columns ── */
                .footer-columns {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 16px;
                }

                .footer-col {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                /* Mobile: first two cols side by side, third full width */
                .footer-col:nth-child(1) {
                    flex: 0 0 calc(50% - 8px);
                }

                .footer-col:nth-child(2) {
                    flex: 0 0 calc(50% - 8px);
                }

                .footer-col:nth-child(3) {
                    flex: 0 0 100%;
                    margin-top: 16px;
                }

                .footer-col-heading {
                    color: var(--color-primary);
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 28px;
                    margin: 0;
                }

                .footer-col-links {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .footer-link {
                    color: var(--color-primary);
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    text-decoration: none;
                    transition: opacity 0.2s ease;
                }

                .footer-link:hover {
                    opacity: 0.7;
                }

                .footer-contact-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    text-decoration: none;
                    border-radius: 8px;
                }

                /* ── Divider ── */
                .footer-divider {
                    width: 100%;
                    height: 1px;
                    background: var(--color-secondary);
                }

                /* ── Bottom Row ── */
                .footer-bottom {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    align-items: center;
                }

                .footer-copyright {
                    color: var(--color-primary);
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 20px;
                    text-align: center;
                    margin: 0;
                }

                .footer-socials {
                    width: 176px;
                    display: flex;
                    justify-content: space-between;
                }

                .footer-social-icon {
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--color-primary);
                    border-radius: 6px;
                    transition: transform 0.2s ease, opacity 0.2s ease;
                }

                .footer-social-icon--fb {
                    border-radius: 50%;
                }

                .footer-social-icon:hover {
                    transform: translateY(-2px);
                    opacity: 0.85;
                }

                /* ── Regulatory Bar ── */
                .footer-regulatory {
                    width: 100%;
                    background: var(--color-primary);
                    padding: 8px 16px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .footer-regulatory-logos {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                /* ═══════════════════════════════════════
                 * TABLET ≥641px
                 * ═══════════════════════════════════════ */
                @media (min-width: 641px) {
                    .footer-container {
                        padding: 64px 32px;
                        gap: 32px;
                    }

                    .footer-brand {
                        align-items: flex-start;
                    }

                    .footer-tagline {
                        text-align: left;
                    }

                    .footer-columns {
                        flex-wrap: nowrap;
                        justify-content: space-between;
                        gap: 0;
                    }

                    .footer-col:nth-child(1),
                    .footer-col:nth-child(2),
                    .footer-col:nth-child(3) {
                        flex: 0 0 auto;
                        margin-top: 0;
                    }

                    .footer-link {
                        font-weight: 500;
                    }

                    .footer-bottom {
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        gap: 16px;
                    }

                    .footer-copyright {
                        font-size: 16px;
                        line-height: 24px;
                        text-align: left;
                    }

                    .footer-social-icon {
                        width: 32px;
                        height: 32px;
                    }
                }

                /* ═══════════════════════════════════════
                 * DESKTOP ≥1025px
                 * ═══════════════════════════════════════ */
                @media (min-width: 1025px) {
                    .footer-container {
                        padding: 32px 64px;
                        gap: 16px;
                    }

                    .footer-top {
                        flex-direction: row;
                        justify-content: space-between;
                        gap: 137px;
                    }

                    .footer-columns {
                        flex: 1;
                        justify-content: flex-end;
                        gap: 64px;
                    }

                    .footer-copyright {
                        font-size: 14px;
                        line-height: 20px;
                    }

                    .footer-regulatory {
                        padding: 8px 64px;
                    }
                }
            `}</style>
        </>
    );
}
