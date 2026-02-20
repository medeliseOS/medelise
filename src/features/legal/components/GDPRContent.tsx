'use client';

import { useState, useEffect } from 'react';
import NewsletterSection from '@features/homepage/components/NewsletterSection';
import LegalSearchHero from './LegalSearchHero';
import useLegalSearch from '../hooks/useLegalSearch';

/* ── Sidebar items ──────────────────────────────────────────────── */
const SECTIONS = [
    { id: 'cine-suntem', label: 'Cine suntem?' },
    { id: 'date-personale', label: 'Ce sunt datele personale?' },
    { id: 'prelucrare', label: 'Ce înseamnă prelucrarea datelor?' },
    { id: 'ce-date', label: 'Ce date prelucrăm?' },
    { id: 'temei-legal', label: 'Care este temeiul legal?' },
    { id: 'durata', label: 'Cât timp păstrăm datele?' },
    { id: 'contact', label: 'Cum ne contactați?' },
    { id: 'divulgare', label: 'Cui divulgăm datele?' },
    { id: 'drepturi', label: 'Drepturile dumneavoastră' },
    { id: 'securitate', label: 'Securitatea datelor' },
    { id: 'modificari', label: 'Modificări ale politicii' },
];

export default function GDPRContent() {
    const { searchQuery, setSearchQuery, matchCount, contentRef, clearSearch } = useLegalSearch();
    const [activeId, setActiveId] = useState('cine-suntem');
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

    const activeLabel = SECTIONS.find((s) => s.id === activeId)?.label ?? 'Cine suntem?';

    return (
        <>
            <main className="gdpr-page">
                {/* ── Hero ───────────────────────────────────── */}
                <LegalSearchHero
                    title="POLITICA PRIVIND CONFIDENȚIALITATEA ȘI PRELUCRAREA DATELOR CU CARACTER PERSONAL"
                    date="Ultima actualizare: [01 martie 2026]"
                    description="Conform Regulamentului General privind Protecția Datelor cu Caracter Personal (GDPR – UE 2016/679), Medvita Health Solutions S.R.L. respectă confidențialitatea datelor personale ale pacienților, utilizatorilor și partenerilor săi. Prezenta politică descrie modul în care colectăm, folosim și protejăm datele dvs."
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    matchCount={matchCount}
                    clearSearch={clearSearch}
                />

                {/* ── Body ─────────────────────────────────────── */}
                <section className="gdpr-body">
                    <div className="gdpr-body-inner">
                        {/* Sidebar — desktop */}
                        <aside className="gdpr-sidebar">
                            <nav className="gdpr-sidebar-nav">
                                {SECTIONS.map(({ id, label }) => (
                                    <button
                                        key={id}
                                        className={`gdpr-sidebar-link${activeId === id ? ' active' : ''}`}
                                        onClick={() => scrollTo(id)}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </nav>
                        </aside>

                        {/* Dropdown — tablet/mobile */}
                        <div className="gdpr-dropdown-wrap">
                            <button
                                className="gdpr-dropdown-toggle"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                <span className="gdpr-dropdown-label">{activeLabel}</span>
                                <svg
                                    className={`gdpr-dropdown-chevron${dropdownOpen ? ' open' : ''}`}
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
                                <div className="gdpr-dropdown-menu">
                                    {SECTIONS.map(({ id, label }) => (
                                        <button
                                            key={id}
                                            className={`gdpr-dropdown-item${activeId === id ? ' active' : ''}`}
                                            onClick={() => scrollTo(id)}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="gdpr-content" ref={contentRef}>

                            {/* 1. Cine suntem? */}
                            <div className="gdpr-section" id="cine-suntem">
                                <h3 className="gdpr-section-title">1. Cine suntem?</h3>
                                <p className="gdpr-text gdpr-text--bold">MEDVITA HEALTH SOLUTIONS S.R.L.</p>
                                <p className="gdpr-text gdpr-text--medium">
                                    Sediu: Str. Solstițiului, nr. 19, Bl. 1, Sc. B, Parter, Ap. 4, Popești-Leordeni, Ilfov
                                    &nbsp;&nbsp;&nbsp;&nbsp;CUI: 46951403
                                    &nbsp;&nbsp;&nbsp;&nbsp;Nr. înregistrare ONRC: J23/6788/03.10.2022
                                </p>
                                <div className="gdpr-email-row">
                                    <span className="gdpr-email-icon">📧</span>
                                    <span className="gdpr-text gdpr-text--medium">dpo@medvita.ro (responsabil cu protecția datelor)</span>
                                </div>
                            </div>

                            {/* 2. Ce sunt datele personale? */}
                            <div className="gdpr-section" id="date-personale">
                                <h3 className="gdpr-section-title">2. Ce sunt datele personale?</h3>
                                <p className="gdpr-text">Orice informație care vă poate identifica direct sau indirect:</p>
                                <div className="gdpr-callout-dark">
                                    <p>ex: nume, CNP, adresă, telefon, date medicale, IP, locație, semnătură, identificatori online.</p>
                                </div>
                            </div>

                            {/* 3. Ce înseamnă prelucrarea datelor? */}
                            <div className="gdpr-section" id="prelucrare">
                                <h3 className="gdpr-section-title">3. Ce înseamnă prelucrarea datelor?</h3>
                                <p className="gdpr-text">Prelucrarea înseamnă orice operațiune asupra datelor:</p>
                                <div className="gdpr-callout-dark">
                                    <p>
                                        colectare,<br />
                                        înregistrare,<br />
                                        organizare,<br />
                                        utilizare,<br />
                                        stocare,<br />
                                        transmitere,<br />
                                        ștergere.
                                    </p>
                                </div>
                            </div>

                            {/* 4. Ce date personale prelucrăm? */}
                            <div className="gdpr-section" id="ce-date">
                                <h3 className="gdpr-section-title">4. Ce date personale prelucrăm?</h3>
                                <div className="gdpr-callout-dark">
                                    <p>
                                        Nume și prenume<br />
                                        CNP / coduri unice<br />
                                        Telefon, e-mail, adresă<br />
                                        Date medicale (diagnostic, istoric, tratamente)<br />
                                        Semnătură electronică / fizică<br />
                                        Date biometrice (dacă e justificat clinic)<br />
                                        Informații de plată<br />
                                        IP, device, sistem de operare<br />
                                        Date aparținători (unde este cazul)
                                    </p>
                                </div>
                            </div>

                            {/* 5. Care este temeiul legal? */}
                            <div className="gdpr-section" id="temei-legal">
                                <h3 className="gdpr-section-title">5. Care este temeiul legal?</h3>
                                <p className="gdpr-text">Prelucrăm datele dvs. în baza următoarelor articole din GDPR:</p>
                                <div className="gdpr-callout-dark">
                                    <p>
                                        Art. 6(1)(b) – Executarea unui contract (ex: consultații, cont careOS)<br />
                                        Art. 6(1)(c) – Obligație legală (ex: arhivare, raportări medicale)<br />
                                        Art. 6(1)(a) – Consimțământ (ex: newsletter, campanii)<br />
                                        Art. 6(1)(f) – Interes legitim (ex: prevenirea fraudelor, optimizare servicii)
                                    </p>
                                </div>
                            </div>

                            {/* 6. Cât timp păstrăm datele? */}
                            <div className="gdpr-section" id="durata">
                                <h3 className="gdpr-section-title">6. Cât timp păstrăm datele?</h3>
                                <ul className="gdpr-icon-list">
                                    <li>📋 Date medicale: min. 5 ani, conform legislației (Ordin MS 679/2016)</li>
                                    <li>🗓️ Date financiare: 10 ani (Cod fiscal)</li>
                                    <li>💻 Date platformă: până la închiderea contului + perioada legală</li>
                                    <li>📩 Date marketing: până la retragerea consimțământului</li>
                                </ul>
                            </div>

                            {/* 7. Cum ne contactați? */}
                            <div className="gdpr-section" id="contact">
                                <h3 className="gdpr-section-title">7. Cum ne contactați?</h3>
                                <p className="gdpr-text">Pentru orice solicitare privind datele:</p>
                                <p className="gdpr-text">
                                    Sediu: Str. Solstițiului, nr. 19, Bl. 1, Sc. B, Parter, Ap. 4, Popești-Leordeni, Ilfov
                                    &nbsp;&nbsp;&nbsp;&nbsp;CUI: 46951403
                                    &nbsp;&nbsp;&nbsp;&nbsp;Nr. înregistrare ONRC: <strong>J23/6788/03.10.2022</strong>
                                </p>
                                <div className="gdpr-email-row">
                                    <span className="gdpr-email-icon">📧</span>
                                    <span className="gdpr-text gdpr-text--medium">dpo@medvita.ro (responsabil cu protecția datelor)</span>
                                </div>
                            </div>

                            {/* 8. Cui putem divulga datele? */}
                            <div className="gdpr-section" id="divulgare">
                                <h3 className="gdpr-section-title">8. Cui putem divulga datele?</h3>
                                <p className="gdpr-text">Datele pot fi partajate doar dacă este justificat legal sau contractual:</p>
                                <div className="gdpr-callout-dark">
                                    <p>
                                        Medici colaboratori, asistenți, operatori logistici<br />
                                        Furnizori digitali (Google, Meta, TikTok, etc.)<br />
                                        Autorități (ANAF, DSP, CNAS)
                                    </p>
                                </div>
                                <p className="gdpr-text">Nu transferăm datele în afara UE fără garanții legale (ex: Clauze contractuale standard).</p>
                                <p className="gdpr-text gdpr-text--small">
                                    „În scopuri de analiză, promovare și personalizare, putem utiliza și colaboratori tehnici precum:
                                    Google (Analytics, Ads), Meta (Pixel, Business Suite), TikTok (Ads, Events API), LinkedIn Ads,
                                    Hotjar, Mixpanel, Microsoft Clarity, HubSpot sau Brevo. Prelucrarea datelor prin aceste platforme
                                    se face exclusiv în baza consimțământului exprimat prin Politica de cookies."
                                </p>
                            </div>

                            {/* 9. Drepturile dumneavoastră */}
                            <div className="gdpr-section" id="drepturi">
                                <h3 className="gdpr-section-title">9. Drepturile dumneavoastră</h3>
                                <p className="gdpr-text">Aveți dreptul la:</p>
                                <ul className="gdpr-icon-list gdpr-icon-list--rights">
                                    <li>📋 Acces la datele personale</li>
                                    <li>✅ Rectificarea datelor</li>
                                    <li>🗑️ Ștergerea datelor („dreptul de a fi uitat")</li>
                                    <li>🔒 Restricționarea procesării</li>
                                    <li>📦 Portabilitate</li>
                                    <li>🚫 Opoziție (ex: profilare, marketing)</li>
                                    <li>↩️ Retragerea consimțământului</li>
                                </ul>
                                <div className="gdpr-email-row">
                                    <span className="gdpr-email-icon">📧</span>
                                    <span className="gdpr-text gdpr-text--bold-sm">Trimite o cerere la: dpo@medvita.ro</span>
                                </div>
                            </div>

                            {/* 10. Securitatea datelor */}
                            <div className="gdpr-section" id="securitate">
                                <h3 className="gdpr-section-title">10. Securitatea datelor</h3>
                                <p className="gdpr-text">Medvita aplică măsuri solide de securitate:</p>
                                <div className="gdpr-callout-dark">
                                    <p>
                                        Autentificare cu parolă și OTP<br />
                                        Backup-uri criptate<br />
                                        Loguri de acces<br />
                                        Colaboratori certificați ISO/echivalent
                                    </p>
                                </div>
                            </div>

                            {/* 11. Modificări ale politicii */}
                            <div className="gdpr-section" id="modificari">
                                <h3 className="gdpr-section-title">11. Modificări ale politicii</h3>
                                <div className="gdpr-callout-gray">
                                    <p>Ne rezervăm dreptul de a modifica această politică.
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        Recomandăm consultarea periodică a versiunii actualizate pe site-ul oficial.</p>
                                </div>
                            </div>

                            {/* Footer disclaimer */}
                            <div className="gdpr-footer-disclaimer">
                                <p>
                                    Pentru orice întrebări sau sesizări <strong>PRIVIND POLITICA DE CONFIDENȚIALITATEA ȘI
                                        PRELUCRAREA DATELOR CU CARACTER PERSONAL</strong>, vă rugăm să ne scrieți la
                                    office@medvita.ro (Responsabil cu protecția datelor).
                                </p>
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
                .gdpr-page {
                    font-family: var(--font-heading);
                    min-height: 100vh;
                    background: var(--color-white);
                }

                /* ═══════════════════════════════════════════════════
                   BODY — two-column layout
                   ═══════════════════════════════════════════════════ */
                .gdpr-body {
                    width: 100%;
                    padding: 0 64px;
                    display: flex;
                    justify-content: center;
                }

                .gdpr-body-inner {
                    width: 100%;
                    display: flex;
                    align-items: flex-start;
                    gap: 32px;
                }

                /* ── Sidebar ─────────────────────────────────────── */
                .gdpr-sidebar {
                    width: 280px;
                    flex-shrink: 0;
                    padding: 48px 0;
                    border-right: 1px solid #BDE0FF;
                    position: sticky;
                    top: 100px;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    align-self: flex-start;
                }

                .gdpr-sidebar-nav {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .gdpr-sidebar-link {
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

                .gdpr-sidebar-link:hover {
                    color: #FE5D16;
                }

                .gdpr-sidebar-link.active {
                    color: #FE5D16;
                    font-weight: 600;
                }

                /* ── Content ─────────────────────────────────────── */
                .gdpr-content {
                    flex: 1;
                    min-width: 0;
                    padding: 48px 32px;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                .gdpr-section {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    scroll-margin-top: 120px;
                }

                .gdpr-section-title {
                    color: #213170;
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 28px;
                    margin: 0;
                }

                .gdpr-text {
                    color: #213170;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                }

                .gdpr-text--bold {
                    font-weight: 600;
                }

                .gdpr-text--medium {
                    font-weight: 500;
                }

                .gdpr-text--bold-sm {
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 24px;
                }

                .gdpr-text--small {
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 20px;
                }

                .gdpr-text a {
                    color: #FE5D16;
                    text-decoration: underline;
                }

                /* Email row with icon */
                .gdpr-email-row {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .gdpr-email-icon {
                    font-size: 20px;
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                /* Icon list for sections 6 and 9 */
                .gdpr-icon-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .gdpr-icon-list li {
                    color: #213170;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .gdpr-icon-list--rights {
                    gap: 16px;
                }

                .gdpr-icon-list--rights li {
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                }

                /* Callout: dark blue bg + white text */
                .gdpr-callout-dark {
                    padding: 24px;
                    background: #213170;
                    border-radius: 8px;
                }

                .gdpr-callout-dark p {
                    color: #fff;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                }

                /* Callout: gray bg */
                .gdpr-callout-gray {
                    padding: 24px;
                    background: #F2F4F7;
                    border-radius: 8px;
                }

                .gdpr-callout-gray p {
                    color: #213170;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    margin: 0;
                }

                /* Footer disclaimer */
                .gdpr-footer-disclaimer {
                    padding-top: 32px;
                    border-top: none;
                }

                .gdpr-footer-disclaimer p {
                    color: #213170;
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 16px;
                    margin: 0;
                }

                .gdpr-footer-disclaimer strong {
                    font-weight: 600;
                }

                /* ═══════════════════════════════════════════════════
                   RESPONSIVE
                   ═══════════════════════════════════════════════════ */

                /* Dropdown (hidden on desktop) */
                .gdpr-dropdown-wrap {
                    display: none;
                }

                /* ── Tablet ──────────────────────────────────────── */
                @media (max-width: 1024px) {
                    .gdpr-body {
                        padding: 32px var(--space-section-px-md);
                    }
                    .gdpr-body-inner {
                        flex-direction: column;
                        gap: 24px;
                    }
                    .gdpr-sidebar {
                        display: none;
                    }

                    .gdpr-dropdown-wrap {
                        display: block;
                        width: 100%;
                        position: relative;
                    }
                    .gdpr-dropdown-toggle {
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
                    .gdpr-dropdown-label {
                        flex: 1;
                        text-align: left;
                        color: #213170;
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 24px;
                    }
                    .gdpr-dropdown-chevron {
                        transition: transform 0.2s;
                    }
                    .gdpr-dropdown-chevron.open {
                        transform: rotate(180deg);
                    }
                    .gdpr-dropdown-menu {
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
                    .gdpr-dropdown-item {
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
                    .gdpr-dropdown-item:hover {
                        background: #F2F4F7;
                    }
                    .gdpr-dropdown-item.active {
                        color: #FE5D16;
                        font-weight: 600;
                    }

                    .gdpr-content {
                        padding: 48px 0;
                    }
                }

                /* ── Mobile ──────────────────────────────────────── */
                @media (max-width: 480px) {
                    .gdpr-body {
                        padding: 16px var(--space-section-px-sm) 48px;
                    }
                    .gdpr-body-inner {
                        gap: 16px;
                    }
                    .gdpr-dropdown-label {
                        font-size: 14px;
                        line-height: 20px;
                    }
                    .gdpr-content {
                        padding: 16px 8px;
                        gap: 32px;
                    }
                    .gdpr-section-title {
                        font-size: 16px;
                        line-height: 24px;
                    }
                    .gdpr-text {
                        font-size: 16px;
                        line-height: 24px;
                    }
                    .gdpr-callout-dark p {
                        font-size: 16px;
                        line-height: 24px;
                    }
                    .gdpr-icon-list li {
                        font-size: 16px;
                        line-height: 24px;
                    }
                }
            `}</style>
        </>
    );
}
