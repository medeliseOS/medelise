'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import NewsletterSection from '@features/homepage/components/NewsletterSection';
import LegalSearchHero from './LegalSearchHero';
import useLegalSearch from '../hooks/useLegalSearch';

/* ── Sidebar items ──────────────────────────────────────────────── */
const SECTIONS = [
    { id: 'introducere', label: 'Introducere' },
    { id: 'acceptarea-termenilor', label: 'Acceptarea Termenilor' },
    { id: 'scopul-informativ', label: 'Scopul Informativ' },
    { id: 'disponibilitate', label: 'Disponibilitate Servicii' },
    { id: 'drepturi-autor', label: 'Drepturi de Autor' },
    { id: 'limitare-raspundere', label: 'Limitarea Răspunderii' },
    { id: 'colaboratori-terti', label: 'Colaboratori Terți' },
    { id: 'abonamente-plati', label: 'Abonamente și Plăți' },
    { id: 'confidentialitate-gdpr', label: 'Confidențialitate și GDPR' },
    { id: 'modificari', label: 'Modificări' },
    { id: 'legea-aplicabila', label: 'Legea Aplicabilă' },
    { id: 'contact', label: 'Contact' },
];

export default function TermeniContent() {
    const { searchQuery, setSearchQuery, matchCount, contentRef, clearSearch } = useLegalSearch();
    const [activeId, setActiveId] = useState('introducere');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    /* ── Scroll-spy ──────────────────────────────────────────── */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting);
                if (visible.length > 0) {
                    setActiveId(visible[0].target.id);
                }
            },
            { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
        );

        SECTIONS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveId(id);
            setDropdownOpen(false);
        }
    };

    const activeLabel = SECTIONS.find((s) => s.id === activeId)?.label ?? 'Introducere';

    return (
        <>
            <main className="termeni-page">
                {/* ── Hero ───────────────────────────────────── */}
                <LegalSearchHero
                    title="Termeni și condiții"
                    date="Ultima actualizare: 01 martie 2026"
                    description="Acești termeni stabilesc regulile de utilizare a serviciilor Medelise și condițiile legale aplicabile utilizatorilor platformei noastre. Îți recomandăm să-i parcurgi cu atenție pentru a înțelege drepturile și responsabilitățile tale ca utilizator."
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    matchCount={matchCount}
                    clearSearch={clearSearch}
                />

                {/* ── Body ─────────────────────────────────────── */}
                <section className="termeni-body">
                    <div className="termeni-body-inner">
                        {/* Sidebar — desktop */}
                        <aside className="termeni-sidebar">
                            <p className="termeni-sidebar-greeting">Bine ai venit!</p>
                            <nav className="termeni-sidebar-nav">
                                {SECTIONS.map(({ id, label }) => (
                                    <button
                                        key={id}
                                        className={`termeni-sidebar-link${activeId === id ? ' active' : ''}`}
                                        onClick={() => scrollTo(id)}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </nav>
                        </aside>

                        {/* Dropdown — tablet/mobile */}
                        <div className="termeni-dropdown-wrap">
                            <button
                                className="termeni-dropdown-toggle"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                <span className="termeni-dropdown-label">{activeLabel}</span>
                                <svg
                                    className={`termeni-dropdown-chevron${dropdownOpen ? ' open' : ''}`}
                                    width="20" height="20" viewBox="0 0 20 20" fill="none"
                                >
                                    <path
                                        d="M5 7.5L10 12.5L15 7.5"
                                        stroke="#213170"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            {dropdownOpen && (
                                <div className="termeni-dropdown-menu">
                                    {SECTIONS.map(({ id, label }) => (
                                        <button
                                            key={id}
                                            className={`termeni-dropdown-item${activeId === id ? ' active' : ''}`}
                                            onClick={() => scrollTo(id)}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="termeni-content" ref={contentRef}>
                            {/* Welcome */}
                            <p className="termeni-welcome" id="introducere">
                                Bine ai venit!<br />
                                Acești termeni reglementează utilizarea serviciilor Medelise și a platformei noastre.
                            </p>

                            <h2 className="termeni-section-title-lg">Introducere</h2>
                            <p className="termeni-text">
                                Medvita Health Solutions S.R.L., cu sediul în Popești-Leordeni, Ilfov,
                                Str. Solstițiului 19, este înregistrată la ONRC cu nr. J23/6788/03.10.2022,
                                CUI 46951403. Acești Termeni descriu responsabilitățile noastre și ale tale
                                atunci când folosești platforma Medelise.
                            </p>

                            {/* 1. Acceptarea */}
                            <div className="termeni-section" id="acceptarea-termenilor">
                                <h3 className="termeni-section-title">1. Acceptarea Termenilor</h3>
                            </div>
                            <p className="termeni-text">
                                Prin utilizarea oricărui serviciu oferit de Medelise, confirmi că ai citit
                                și ești de acord cu acești termeni.
                            </p>
                            <div className="termeni-callout-warning">
                                <p>Dacă nu ești de acord, te rugăm să întrerupi utilizarea serviciilor.</p>
                            </div>

                            {/* 2. Scopul */}
                            <div className="termeni-section" id="scopul-informativ">
                                <h3 className="termeni-section-title">2. Scopul Informativ și Limitarea Răspunderii Medicale</h3>
                                <p className="termeni-text">Conținutul oferit NU reprezintă un consult medical.</p>
                                <div className="termeni-callout-dark">
                                    <p>
                                        <strong>Medelise nu este responsabilă pentru:</strong><br />
                                        interpretări greșite ale datelor;<br />
                                        recomandări eronate;<br />
                                        folosirea aplicației în alte scopuri.
                                    </p>
                                </div>
                            </div>

                            {/* 3. Disponibilitate */}
                            <div className="termeni-section" id="disponibilitate">
                                <h3 className="termeni-section-title">3. Disponibilitatea Serviciilor</h3>
                            </div>
                            <p className="termeni-text">
                                Serviciile pot fi întrerupte temporar din motive de mentenanță, abuz sau neplată.
                                Nu garantăm acces permanent sau lipsa erorilor.
                            </p>

                            {/* 4. Drepturi */}
                            <div className="termeni-section" id="drepturi-autor">
                                <h3 className="termeni-section-title">4. Drepturi de Proprietate Intelectuală</h3>
                            </div>
                            <p className="termeni-text">
                                Toate elementele MEDELISE sunt protejate de legea drepturilor de autor.
                                Este interzisă copierea fără acord scris.
                            </p>

                            {/* 5. Limitare */}
                            <div className="termeni-section" id="limitare-raspundere">
                                <h3 className="termeni-section-title">5. Limitarea Răspunderii</h3>
                                <div className="termeni-callout-dark">
                                    <p>
                                        <strong>Nu ne asumăm răspunderea pentru:</strong><br />
                                        daune indirecte, pierderi de venit, imagine sau date;<br />
                                        conflicte între utilizatori și colaboratori terți.
                                    </p>
                                </div>
                                <p className="termeni-text">
                                    Răspunderea totală este limitată la valoarea serviciului plătit.
                                </p>
                            </div>

                            {/* 6. Colaboratori */}
                            <div className="termeni-section" id="colaboratori-terti">
                                <h3 className="termeni-section-title">6. Colaboratori și Servicii ale Terților</h3>
                            </div>
                            <p className="termeni-text">
                                Lucrăm cu medici, asistenți medicali generaliști, kinetoterapeuți colaboratori,
                                procesatori de plăți și furnizori de logistică. Nu controlăm acțiunile acestora.
                            </p>

                            {/* 7. Abonamente */}
                            <div className="termeni-section" id="abonamente-plati">
                                <h3 className="termeni-section-title">7. Abonamente și Politici de Plată</h3>
                                <p className="termeni-text">Serviciile premium necesită plată în avans.</p>
                                <div className="termeni-callout-warning">
                                    <p>Nu se rambursează perioadele neutilizate.</p>
                                </div>
                            </div>

                            {/* 8. GDPR */}
                            <div className="termeni-section" id="confidentialitate-gdpr">
                                <h3 className="termeni-section-title">8. Confidențialitate și Protecția Datelor (GDPR)</h3>
                                <p className="termeni-text">Procesăm datele în scopuri legale și operaționale.</p>
                                <div className="termeni-callout-warning">
                                    <p>
                                        Vezi{' '}
                                        <Link href="/politica-confidentialitate" className="termeni-link-underline">
                                            Politica de Confidențialitate
                                        </Link>{' '}
                                        pentru detalii.
                                    </p>
                                </div>
                            </div>

                            {/* 9. Modificari */}
                            <div className="termeni-section" id="modificari">
                                <h3 className="termeni-section-title">9. Modificări ale Termenilor</h3>
                            </div>
                            <p className="termeni-text">
                                Ne rezervăm dreptul să modificăm acești termeni fără notificare prealabilă.
                                Versiunile actualizate vor fi disponibile pe site.
                            </p>

                            {/* 10. Legea */}
                            <div className="termeni-section" id="legea-aplicabila">
                                <h3 className="termeni-section-title">10. Legea Aplicabilă</h3>
                                <p className="termeni-text">Legea română guvernează acești termeni.</p>
                                <div className="termeni-callout-warning">
                                    <p>Orice litigiu va fi soluționat în instanțele din București.</p>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="termeni-section" id="contact">
                                <h3 className="termeni-section-title">11. Contact</h3>
                                <p className="termeni-text">
                                    Pentru orice întrebări legate de acești termeni, ne puteți contacta la:
                                </p>
                                <ul className="termeni-contact-list">
                                    <li>Email: <a href="mailto:office@medelise.ro">office@medelise.ro</a></li>
                                    <li>Telefon: <a href="tel:+40784414555">+40 (784) 414 555</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Newsletter ───────────────────────────────── */}
                <NewsletterSection
                    heading="Alătură-te comunității Medelise!"
                    description="Abonează-te pentru a primi protocoale de sănătate, noutăți despre medicina viitorului și acces la servicii personalizate direct în inbox-ul tău. Sănătatea ta este o călătorie, nu o destinație – hai să o parcurgem împreună!"
                />
            </main>

            <style jsx>{`
                /* ── Page ────────────────────────────────────────── */
                .termeni-page {
                    font-family: var(--font-heading);
                    min-height: 100vh;
                    background: var(--color-white);
                }


                /* ═══════════════════════════════════════════════════
                   BODY — two-column layout
                   ═══════════════════════════════════════════════════ */
                .termeni-body {
                    width: 100%;
                    padding: 0 var(--space-section-px-lg);
                    display: flex;
                    justify-content: center;
                }

                .termeni-body-inner {
                    width: 100%;
                    display: flex;
                    align-items: flex-start;
                    gap: 32px;
                }

                /* ── Sidebar ─────────────────────────────────────── */
                .termeni-sidebar {
                    width: 280px;
                    flex-shrink: 0;
                    padding: 48px 0;
                    border-right: 1px solid #BDE0FF;
                    position: sticky;
                    top: 100px;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    align-self: flex-start;
                }

                .termeni-sidebar-greeting {
                    color: #213170;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                    margin: 0;
                }

                .termeni-sidebar-nav {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .termeni-sidebar-link {
                    background: none;
                    border: none;
                    padding: 0;
                    cursor: pointer;
                    text-align: left;
                    color: #213170;
                    font-family: var(--font-heading);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                    border-radius: 8px;
                    transition: color 0.2s;
                }

                .termeni-sidebar-link:hover {
                    color: #FE5D16;
                }

                .termeni-sidebar-link.active {
                    color: #FE5D16;
                    font-weight: 600;
                }

                /* ── Content ─────────────────────────────────────── */
                .termeni-content {
                    flex: 1;
                    min-width: 0;
                    padding: 48px 32px;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                .termeni-welcome {
                    color: #213170;
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 28px;
                    margin: 0;
                    scroll-margin-top: 120px;
                }

                .termeni-section-title-lg {
                    color: #213170;
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 28px;
                    margin: 0;
                }

                .termeni-section {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    scroll-margin-top: 120px;
                }

                .termeni-section-title {
                    color: #213170;
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 28px;
                    margin: 0;
                }

                .termeni-text {
                    color: #213170;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    margin: 0;
                }

                /* Callout: gray bg + orange text */
                .termeni-callout-warning {
                    padding: 24px;
                    background: #F2F4F7;
                    border-radius: 8px;
                }

                .termeni-callout-warning p {
                    color: #FE5D16;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                }

                /* Callout: dark blue bg + white text */
                .termeni-callout-dark {
                    padding: 24px;
                    background: #213170;
                    border-radius: 8px;
                }

                .termeni-callout-dark p {
                    color: #fff;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                }

                .termeni-callout-dark strong {
                    font-weight: 500;
                }

                /* Contact list */
                .termeni-contact-list {
                    color: #213170;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    margin: 0;
                    padding-left: 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .termeni-contact-list a {
                    color: #FE5D16;
                    text-decoration: underline;
                }

                /* ═══════════════════════════════════════════════════
                   RESPONSIVE
                   ═══════════════════════════════════════════════════ */

                /* ── Dropdown (hidden on desktop) ────────────────── */
                .termeni-dropdown-wrap {
                    display: none;
                }

                /* ── Tablet ──────────────────────────────────────── */
                @media (max-width: 1024px) {

                    .termeni-body {
                        padding: 32px var(--space-section-px-md);
                        background: white;
                    }
                    .termeni-body-inner {
                        flex-direction: column;
                        gap: 24px;
                    }
                    .termeni-sidebar {
                        display: none;
                    }

                    /* Show dropdown nav */
                    .termeni-dropdown-wrap {
                        display: block;
                        width: 100%;
                        position: relative;
                    }
                    .termeni-dropdown-toggle {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 8px 8px 8px 12px;
                        background: #fff;
                        border-radius: 8px;
                        border: 1px solid #CED2DA;
                        cursor: pointer;
                        font-family: var(--font-heading);
                    }
                    .termeni-dropdown-label {
                        flex: 1;
                        text-align: left;
                        color: #213170;
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 24px;
                    }
                    .termeni-dropdown-chevron {
                        transition: transform 0.2s;
                    }
                    .termeni-dropdown-chevron.open {
                        transform: rotate(180deg);
                    }
                    .termeni-dropdown-menu {
                        position: absolute;
                        top: calc(100% + 4px);
                        left: 0;
                        right: 0;
                        background: #fff;
                        border: 1px solid #CED2DA;
                        border-radius: 8px;
                        box-shadow: 0 4px 16px rgba(33, 49, 112, 0.12);
                        z-index: 20;
                        display: flex;
                        flex-direction: column;
                        padding: 4px 0;
                    }
                    .termeni-dropdown-item {
                        background: none;
                        border: none;
                        text-align: left;
                        padding: 10px 16px;
                        cursor: pointer;
                        font-family: var(--font-heading);
                        font-size: 15px;
                        font-weight: 500;
                        line-height: 22px;
                        color: #213170;
                        transition: background 0.15s;
                    }
                    .termeni-dropdown-item:hover {
                        background: #F2F4F7;
                    }
                    .termeni-dropdown-item.active {
                        color: #FE5D16;
                        font-weight: 600;
                    }

                    .termeni-content {
                        padding: 48px 0 48px 0;
                    }

                    /* Callout text → 16px on tablet */
                    .termeni-callout-warning p,
                    .termeni-callout-dark p {
                        font-size: 16px;
                        line-height: 24px;
                    }
                }

                /* ── Mobile ──────────────────────────────────────── */
                @media (max-width: 480px) {

                    /* Body */
                    .termeni-body {
                        padding: 16px var(--space-section-px-sm) 48px;
                    }
                    .termeni-body-inner {
                        gap: 16px;
                    }

                    /* Dropdown label → 14px */
                    .termeni-dropdown-label {
                        font-size: 14px;
                        line-height: 20px;
                    }

                    /* Content */
                    .termeni-content {
                        padding: 16px 8px;
                        gap: 32px;
                    }

                    /* Welcome & section-title-lg → 16px */
                    .termeni-welcome,
                    .termeni-section-title-lg {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    /* Section titles → 16px */
                    .termeni-section-title {
                        font-size: 16px;
                        line-height: 24px;
                    }


                }
            `}</style>

            <style jsx global>{`
                .termeni-link-underline {
                    color: #FE5D16 !important;
                    text-decoration: underline;
                }
            `}</style>
        </>
    );
}
