'use client';

import NewsletterSection from '@features/homepage/components/NewsletterSection';
import LegalSearchHero from './LegalSearchHero';
import useLegalSearch from '../hooks/useLegalSearch';

export default function CookiesContent() {
    const { searchQuery, setSearchQuery, matchCount, contentRef, clearSearch } = useLegalSearch();

    return (
        <>
            <main className="legal-page">
                {/* ── Hero ──────────────────────────────────────── */}
                <LegalSearchHero
                    title="Politica privind modulele cookie"
                    date="Ultima actualizare: [01 martie 2026]"
                    description={`Această politică explică modul în care MEDVITA HEALTH SOLUTIONS S.R.L. („Medvita", „noi") utilizează modulele cookie și tehnologii similare pe website-ul nostru [www.medvita.ro] și în platformele noastre digitale (inclusiv careOS).`}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    matchCount={matchCount}
                    clearSearch={clearSearch}
                />

                {/* ── Content ──────────────────────────────────── */}
                <div className="legal-layout" ref={contentRef}>
                    {/* ── Table of Contents sidebar ── */}
                    <aside className="legal-toc">
                        <a href="#section-1" className="legal-toc-item legal-toc-item--active">Ce sunt modulele cookie?</a>
                        <a href="#section-2" className="legal-toc-item">Ce tipuri de cookie folosim?</a>
                        <a href="#section-3" className="legal-toc-item">De ce folosim cookie-uri?</a>
                        <a href="#section-4" className="legal-toc-item">Controlul asupra cookie-urilor</a>
                        <a href="#section-5" className="legal-toc-item">Durata stocării cookie-urilor</a>
                        <a href="#section-6" className="legal-toc-item">Partajarea datelor prin cookie-uri</a>
                        <a href="#section-7" className="legal-toc-item">Drepturile tale</a>
                        <a href="#section-8" className="legal-toc-item">Modificări ale politicii</a>
                    </aside>

                    {/* ── Main content ── */}
                    <section className="legal-content">
                        <p className="legal-welcome">
                            Bine ai venit! <br />Acești termeni reglementează utilizarea serviciilor Medvita și a platformei careOS.
                        </p>

                        <div className="legal-section" id="section-1">
                            <h2>1. Ce sunt modulele cookie?</h2>
                            <p>
                                Cookie-urile sunt fișiere text mici plasate pe dispozitivul tău atunci când accesezi site-ul nostru.
                                Ele ajută la memorarea preferințelor (ex: limbă, autentificare) și la optimizarea funcționalității.
                            </p>
                        </div>

                        <div className="legal-section" id="section-2">
                            <h2>2. Ce tipuri de cookie folosim?</h2>
                            <div className="legal-card">
                                <p>
                                    <strong>Cookie-uri esențiale:</strong> Necesare funcționării corecte a platformei (ex: autentificare, protecție CSRF).
                                </p>
                                <p>
                                    <strong>Cookie-uri funcționale:</strong> Salvează preferințe precum limbă, afișare personalizată.
                                </p>
                                <p>
                                    <strong>Cookie-uri analitice:</strong> Colectează date anonime despre comportamentul pe site, ajutându-ne să îmbunătățim experiența utilizatorului.
                                </p>
                                <p>
                                    <strong>Cookie-uri de marketing:</strong> Folosite doar cu consimțământ explicit, pentru afișare de reclame relevante (ex: Google Ads, Facebook Pixel).
                                </p>
                            </div>
                        </div>

                        <div className="legal-section" id="section-3">
                            <h2>3. De ce folosim cookie-uri?</h2>
                            <p className="legal-label">Pentru:</p>
                            <div className="legal-card">
                                <p>funcționarea corectă a platformei;</p>
                                <p>îmbunătățirea experienței utilizatorului;</p>
                                <p>analiza performanței;</p>
                                <p>afișarea de conținut personalizat (doar cu acordul tău).</p>
                            </div>
                        </div>

                        <div className="legal-section" id="section-4">
                            <h2>4. Cum poți controla cookie-urile?</h2>
                            <p className="legal-label">Poți:</p>
                            <div className="legal-card">
                                <p>accepta sau refuza cookie-urile neesențiale din bannerul de consimțământ;</p>
                                <p>modifica setările din browser;</p>
                                <p>retrage oricând acordul pentru cookie-urile de marketing.</p>
                            </div>
                        </div>

                        <div className="legal-section" id="section-5">
                            <h2>5. Cât timp sunt stocate cookie-urile?</h2>
                            <div className="legal-card">
                                <p><strong>Cookie-uri de sesiune:</strong> se șterg automat la închiderea browserului.</p>
                                <p><strong>Cookie-uri persistente:</strong> pot fi păstrate până la 12 luni, în funcție de scopul lor.</p>
                            </div>
                        </div>

                        <div className="legal-section" id="section-6">
                            <h2>6. Cu cine partajăm datele?</h2>
                            <p>Putem lucra cu terți precum:</p>
                            <div className="legal-card">
                                <p>Google (Analytics, Ads, Tag Manager, YouTube Ads)</p>
                                <p>Meta (Facebook, Instagram, Pixel, Business Suite)</p>
                                <p>TikTok (TikTok Ads, Pixel de tracking, Events API)</p>
                                <p>LinkedIn Ads (reclame B2B, retargetare)</p>
                                <p>Hotjar și Mixpanel (analiză UX și comportament utilizator)</p>
                                <p>HubSpot sau Brevo (pentru automatizare email și CRM)</p>
                                <p>Microsoft Clarity (mapare comportament vizitator)</p>
                                <p>Cloudflare (pentru securitate și optimizare performanță)</p>
                            </div>
                            <p className="legal-note">
                                Acești parteneri pot colecta și procesa date în conformitate cu propriile politici.
                                Folosim aceste servicii exclusiv pentru a înțelege mai bine nevoile clienților noștri,
                                a optimiza experiența de navigare și a promova serviciile Medvita într-un mod etic și transparent.
                            </p>
                        </div>

                        <div className="legal-section" id="section-7">
                            <h2>7. Drepturile tale</h2>
                            <p>Ai dreptul la:</p>
                            <div className="legal-card">
                                <p>acces, corectare, ștergere („dreptul de a fi uitat");</p>
                                <p>retragerea consimțământului;</p>
                                <p>obținerea unei copii a datelor procesate.</p>
                            </div>
                            <p className="legal-contact">
                                Pentru exercitarea acestor drepturi: &nbsp;📧&nbsp; <a href="mailto:contact@medvita.ro">contact@medvita.ro</a> &nbsp;📍&nbsp; Str. Solstițiului 19, Popești-Leordeni, Ilfov
                            </p>
                        </div>

                        <div className="legal-section" id="section-8">
                            <h2>8. Modificări ale politicii</h2>
                            <p>Putem actualiza această politică periodic.</p>
                            <div className="legal-callout-warning">
                                <p>Îți recomandăm să o consulți regulat.</p>
                            </div>
                        </div>
                    </section>
                </div>
                {/* ── Newsletter ───────────────────────────────── */}
                <NewsletterSection
                    heading="Alătură-te comunității Medelise!"
                    description="Abonează-te pentru a primi protocoale de sănătate, noutăți despre medicina viitorului și acces la servicii personalizate direct în inbox-ul tău. Sănătatea ta este o călătorie, nu o destinație – hai să o parcurgem împreună!"
                />
            </main>

            <style jsx>{`
                .legal-page {
                    font-family: var(--font-heading);
                    min-height: 100vh;
                    background: var(--color-white);
                }

                /* ── Two-column layout ── */
                .legal-layout {
                    display: flex;
                    gap: 32px;
                    padding: 32px 64px;
                }

                /* ── Table of Contents ── */
                .legal-toc {
                    width: 280px;
                    flex-shrink: 0;
                    padding: 48px 0;
                    border-right: 1px solid #BDE0FF;
                    position: sticky;
                    top: 100px;
                    align-self: flex-start;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .legal-toc-item {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 0;
                    color: #213170;
                    font-family: var(--font-heading);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                    text-decoration: none;
                    border-radius: 8px;
                    transition: color 0.2s ease;
                }

                .legal-toc-item:hover {
                    color: #FE5D16;
                }

                .legal-toc-item--active {
                    color: #FE5D16;
                    font-weight: 500;
                }

                /* ── Content ── */
                .legal-content {
                    flex: 1;
                    min-width: 0;
                    padding: 48px 32px;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                .legal-welcome {
                    color: #213170;
                    font-family: var(--font-heading);
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 28px;
                    margin: 0;
                }

                .legal-section h2 {
                    color: #213170;
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 28px;
                    margin: 0 0 16px;
                }

                .legal-section p {
                    color: #213170;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    margin: 0 0 12px;
                }

                .legal-section p:last-child {
                    margin-bottom: 0;
                }

                .legal-label {
                    color: #213170;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                }

                .legal-card {
                    background: #213170;
                    border-radius: 8px;
                    padding: 24px;
                    margin-top: 0;
                    width: 100%;
                    box-sizing: border-box;
                }

                .legal-card p {
                    color: #fff;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    margin: 0 0 8px;
                }

                .legal-card p:last-child {
                    margin-bottom: 0;
                }

                .legal-note {
                    color: #213170;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    margin-top: 16px;
                }

                .legal-contact {
                    color: #213170;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    margin-top: 16px;
                }

                .legal-contact a {
                    color: var(--color-accent);
                    text-decoration: underline;
                    transition: opacity 0.2s ease;
                }

                .legal-contact a:hover {
                    opacity: 0.7;
                }

                .legal-callout-warning {
                    padding: 24px;
                    background: #F2F4F7;
                    border-radius: 8px;
                    width: 100%;
                    box-sizing: border-box;
                }

                .legal-callout-warning p {
                    color: #FE5D16;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    margin: 0;
                }

                .legal-section a {
                    color: var(--color-accent);
                    text-decoration: underline;
                    transition: opacity 0.2s ease;
                }

                .legal-section a:hover {
                    opacity: 0.7;
                }

                /* ═══ Tablet ═══ */
                @media (max-width: 1024px) {
                    .legal-layout {
                        flex-direction: column;
                        gap: 24px;
                        padding: 32px var(--space-section-px-md);
                    }

                    .legal-toc {
                        width: 100%;
                        position: static;
                        border-right: none;
                        flex-direction: row;
                        flex-wrap: wrap;
                        gap: 8px;
                        padding: 0;
                    }

                    .legal-toc-item {
                        font-size: 14px;
                        padding: 8px 12px;
                        border-bottom: 2px solid transparent;
                    }

                    .legal-toc-item:hover {
                        border-bottom-color: #FE5D16;
                    }

                    .legal-toc-item--active {
                        border-bottom-color: #FE5D16;
                    }

                    .legal-content {
                        padding: 32px 0;
                    }
                }

                /* ═══ Mobile ═══ */
                @media (max-width: 480px) {
                    .legal-layout {
                        padding: 16px var(--space-section-px-sm);
                        gap: 16px;
                    }

                    .legal-welcome {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    .legal-section h2 {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    .legal-card {
                        padding: 16px;
                    }

                    .legal-toc-item {
                        font-size: 13px;
                        padding: 6px 10px;
                    }

                    .legal-content {
                        padding: 16px 8px;
                        gap: 32px;
                    }
                }
            `}</style>
        </>
    );
}
