'use client';

import { useState, useEffect } from 'react';
import NewsletterSection from '@features/homepage/components/NewsletterSection';
import LegalSearchHero from './LegalSearchHero';
import useLegalSearch from '../hooks/useLegalSearch';

/* ── Sidebar items ──────────────────────────────────────────────── */
const SECTIONS = [
    { id: 'introducere', label: 'Introducere' },
    { id: 'operator', label: 'Operatorul de date' },
    { id: 'date-colectate', label: 'Datele personale colectate' },
    { id: 'scop-legal', label: 'Scopul și temeiul legal' },
    { id: 'partajare', label: 'Partajarea datelor' },
    { id: 'durata-stocare', label: 'Durata stocării' },
    { id: 'drepturi', label: 'Drepturile dumneavoastră' },
    { id: 'securitate', label: 'Securitatea datelor' },
    { id: 'autoritate', label: 'Autoritatea de supraveghere' },
];

export default function GDPRContent() {
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
                            <p className="gdpr-sidebar-greeting">Bine ai venit!</p>
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
                            {/* Welcome */}
                            <p className="gdpr-welcome" id="introducere">
                                Bine ai venit!<br />
                                Această politică descrie modul în care colectăm, folosim și protejăm datele dvs. personale.
                            </p>

                            <h2 className="gdpr-section-title-lg">1. Introducere</h2>
                            <p className="gdpr-text">
                                <strong>MEDELISE HEALTH SOLUTIONS S.R.L.</strong> respectă confidențialitatea datelor
                                dumneavoastră personale și se angajează să le protejeze în conformitate cu Regulamentul
                                General privind Protecția Datelor (GDPR — Regulamentul UE 2016/679) și legislația
                                națională în vigoare.
                            </p>
                            <p className="gdpr-text">
                                Această politică descrie ce date personale colectăm, de ce le colectăm, cum le
                                folosim și care sunt drepturile dumneavoastră.
                            </p>

                            {/* 2. Operator */}
                            <div className="gdpr-section" id="operator">
                                <h3 className="gdpr-section-title">2. Operatorul de date</h3>
                                <p className="gdpr-text">
                                    Operatorul de date este <strong>MEDELISE HEALTH SOLUTIONS S.R.L.</strong>, cu sediul
                                    în București, România.
                                </p>
                                <ul className="gdpr-list">
                                    <li>Email DPO: <a href="mailto:dpo@medelise.ro">dpo@medelise.ro</a></li>
                                    <li>Email general: <a href="mailto:office@medelise.ro">office@medelise.ro</a></li>
                                    <li>Telefon: <a href="tel:+40784414555">+40 (784) 414 555</a></li>
                                </ul>
                            </div>

                            {/* 3. Date colectate */}
                            <div className="gdpr-section" id="date-colectate">
                                <h3 className="gdpr-section-title">3. Datele personale colectate</h3>
                                <p className="gdpr-text">Colectăm următoarele categorii de date personale:</p>
                                <div className="gdpr-callout-dark">
                                    <p>
                                        <strong>Date de identificare:</strong> nume, prenume, CNP (pentru servicii medicale), data nașterii<br />
                                        <strong>Date de contact:</strong> adresă email, număr de telefon, adresa de domiciliu<br />
                                        <strong>Date medicale:</strong> istoricul medical relevant, alergii, tratamente curente (categorie specială conform art. 9 GDPR)<br />
                                        <strong>Date de utilizare:</strong> adresa IP, tipul de browser, pagini vizitate, durata sesiunii<br />
                                        <strong>Date de plată:</strong> procesate securizat prin furnizori terți (nu stocăm datele cardurilor)
                                    </p>
                                </div>
                            </div>

                            {/* 4. Scopul */}
                            <div className="gdpr-section" id="scop-legal">
                                <h3 className="gdpr-section-title">4. Scopul și temeiul legal al prelucrării</h3>
                                <p className="gdpr-text">Prelucrăm datele dumneavoastră personale în baza următoarelor temeiuri legale:</p>
                                <div className="gdpr-callout-dark">
                                    <p>
                                        <strong>Executarea contractului</strong> (art. 6(1)(b) GDPR) — pentru furnizarea serviciilor medicale solicitate<br />
                                        <strong>Obligație legală</strong> (art. 6(1)(c) GDPR) — conformitate cu obligațiile fiscale și de raportare medicală<br />
                                        <strong>Consimțământ explicit</strong> (art. 9(2)(a) GDPR) — pentru prelucrarea datelor medicale sensibile<br />
                                        <strong>Interes legitim</strong> (art. 6(1)(f) GDPR) — pentru îmbunătățirea serviciilor și securitatea platformei
                                    </p>
                                </div>
                            </div>

                            {/* 5. Partajarea */}
                            <div className="gdpr-section" id="partajare">
                                <h3 className="gdpr-section-title">5. Partajarea datelor</h3>
                                <p className="gdpr-text">Datele dumneavoastră pot fi partajate cu:</p>
                                <div className="gdpr-callout-dark">
                                    <p>
                                        <strong>Profesioniști medicali</strong> — care furnizează serviciile solicitate<br />
                                        <strong>Furnizori de plăți</strong> — pentru procesarea securizată a tranzacțiilor<br />
                                        <strong>Furnizori de hosting și IT</strong> — pentru funcționarea platformei<br />
                                        <strong>Autorități publice</strong> — când legislația impune acest lucru
                                    </p>
                                </div>
                                <div className="gdpr-callout-warning">
                                    <p>Nu vindem și nu închiriem datele dumneavoastră personale către terți.</p>
                                </div>
                            </div>

                            {/* 6. Durata */}
                            <div className="gdpr-section" id="durata-stocare">
                                <h3 className="gdpr-section-title">6. Durata stocării</h3>
                                <p className="gdpr-text">
                                    Datele personale sunt stocate doar pe perioada necesară îndeplinirii scopurilor pentru
                                    care au fost colectate:
                                </p>
                                <div className="gdpr-callout-dark">
                                    <p>
                                        Date medicale — conform legislației medicale (minimum 5 ani)<br />
                                        Date financiare — conform legislației fiscale (10 ani)<br />
                                        Date de cont — pe durata relației contractuale + 3 ani<br />
                                        Date de navigare — maximum 26 luni
                                    </p>
                                </div>
                            </div>

                            {/* 7. Drepturi */}
                            <div className="gdpr-section" id="drepturi">
                                <h3 className="gdpr-section-title">7. Drepturile dumneavoastră</h3>
                                <p className="gdpr-text">Conform GDPR, aveți următoarele drepturi:</p>
                                <div className="gdpr-callout-dark">
                                    <p>
                                        <strong>Dreptul de acces</strong> — să solicitați o copie a datelor personale<br />
                                        <strong>Dreptul la rectificare</strong> — să corectați datele inexacte<br />
                                        <strong>Dreptul la ștergere</strong> (&quot;dreptul de a fi uitat&quot;) — cu excepția obligațiilor legale<br />
                                        <strong>Dreptul la restricționare</strong> — să limitați prelucrarea<br />
                                        <strong>Dreptul la portabilitate</strong> — să primiți datele într-un format structurat<br />
                                        <strong>Dreptul la opoziție</strong> — să vă opuneți prelucrării bazate pe interes legitim<br />
                                        <strong>Dreptul de retragere a consimțământului</strong> — în orice moment, fără a afecta legalitatea prelucrării anterioare
                                    </p>
                                </div>
                                <p className="gdpr-text">
                                    Pentru exercitarea acestor drepturi, contactați-ne la <a href="mailto:dpo@medelise.ro">dpo@medelise.ro</a>.
                                    Vom răspunde în maximum 30 de zile.
                                </p>
                            </div>

                            {/* 8. Securitate */}
                            <div className="gdpr-section" id="securitate">
                                <h3 className="gdpr-section-title">8. Securitatea datelor</h3>
                                <p className="gdpr-text">
                                    Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele personale
                                    împotriva accesului neautorizat, pierderii sau distrugerii, inclusiv: criptare SSL/TLS,
                                    acces bazat pe roluri, backup-uri regulate și audituri de securitate periodice.
                                </p>
                            </div>

                            {/* 9. Autoritatea */}
                            <div className="gdpr-section" id="autoritate">
                                <h3 className="gdpr-section-title">9. Autoritatea de supraveghere</h3>
                                <p className="gdpr-text">
                                    Dacă considerați că prelucrarea datelor dumneavoastră încalcă GDPR, aveți dreptul să
                                    depuneți o plângere la <strong>Autoritatea Națională de Supraveghere a Prelucrării
                                        Datelor cu Caracter Personal (ANSPDCP)</strong>:
                                </p>
                                <ul className="gdpr-list">
                                    <li>Website: <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">www.dataprotection.ro</a></li>
                                    <li>Email: anspdcp@dataprotection.ro</li>
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
                    gap: 32px;
                    align-self: flex-start;
                }

                .gdpr-sidebar-greeting {
                    color: #213170;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                    margin: 0;
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

                .gdpr-welcome {
                    color: #213170;
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 28px;
                    margin: 0;
                    scroll-margin-top: 120px;
                }

                .gdpr-section-title-lg {
                    color: #213170;
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 28px;
                    margin: 0;
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
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    margin: 0;
                }

                .gdpr-text a {
                    color: #FE5D16;
                    text-decoration: underline;
                }

                .gdpr-list {
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

                .gdpr-list a {
                    color: #FE5D16;
                    text-decoration: underline;
                }

                /* Callout: dark blue bg + white text */
                .gdpr-callout-dark {
                    padding: 24px;
                    background: #213170;
                    border-radius: 8px;
                }

                .gdpr-callout-dark p {
                    color: #fff;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    margin: 0;
                }

                .gdpr-callout-dark strong {
                    font-weight: 500;
                }

                /* Callout: gray bg + orange text */
                .gdpr-callout-warning {
                    padding: 24px;
                    background: #F2F4F7;
                    border-radius: 8px;
                }

                .gdpr-callout-warning p {
                    color: #FE5D16;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    margin: 0;
                }

                /* ═══════════════════════════════════════════════════
                   RESPONSIVE
                   ═══════════════════════════════════════════════════ */

                /* ── Dropdown (hidden on desktop) ────────────────── */
                .gdpr-dropdown-wrap {
                    display: none;
                }

                /* ── Tablet ──────────────────────────────────────── */
                @media (max-width: 1024px) {

                    .gdpr-body {
                        padding: 32px var(--space-section-px-md);
                        background: white;
                    }
                    .gdpr-body-inner {
                        flex-direction: column;
                        gap: 24px;
                    }
                    .gdpr-sidebar {
                        display: none;
                    }

                    /* Show dropdown nav */
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
                        padding: 48px 0 48px 0;
                    }

                    /* Callout text → 16px on tablet */
                    .gdpr-callout-warning p,
                    .gdpr-callout-dark p {
                        font-size: 16px;
                        line-height: 24px;
                    }
                }

                /* ── Mobile ──────────────────────────────────────── */
                @media (max-width: 480px) {

                    /* Body */
                    .gdpr-body {
                        padding: 16px var(--space-section-px-sm) 48px;
                    }
                    .gdpr-body-inner {
                        gap: 16px;
                    }

                    /* Dropdown label → 14px */
                    .gdpr-dropdown-label {
                        font-size: 14px;
                        line-height: 20px;
                    }

                    /* Content */
                    .gdpr-content {
                        padding: 16px 8px;
                        gap: 32px;
                    }

                    /* Welcome & section-title-lg → 16px */
                    .gdpr-welcome,
                    .gdpr-section-title-lg {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    /* Section titles → 16px */
                    .gdpr-section-title {
                        font-size: 16px;
                        line-height: 24px;
                    }
                }
            `}</style>
        </>
    );
}
