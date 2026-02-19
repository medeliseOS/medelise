'use client';

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
                    date="Ultima actualizare: [04 mai 2025]"
                    description="Această politică explică modul în care MEDVITA HEALTH SOLUTIONS S.R.L. („Medvita", „noi") utilizează modulele cookie și tehnologii similare pe website-ul nostru [www.medvita.ro] și în platformele noastre digitale (inclusiv careOS)."
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                matchCount={matchCount}
                clearSearch={clearSearch}
                />

                {/* ── Content ──────────────────────────────────── */}
                <div className="legal-inner" ref={contentRef}>
                    <section className="legal-content">
                        <div className="legal-section">
                            <h2>1. Ce sunt cookie-urile?</h2>
                            <p>
                                Cookie-urile sunt fișiere de text de mici dimensiuni care sunt stocate pe dispozitivul
                                dumneavoastră (computer, telefon mobil, tabletă) atunci când vizitați un site web. Acestea
                                permit site-ului să rețină informații despre vizita dumneavoastră, cum ar fi limba preferată
                                și alte setări, ceea ce poate facilita următoarea vizită.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>2. Cum utilizăm cookie-urile?</h2>
                            <p>
                                Platforma <strong>medelise.ro</strong> utilizează cookie-uri în următoarele scopuri:
                            </p>
                            <ul>
                                <li><strong>Cookie-uri esențiale</strong> — necesare pentru funcționarea corectă a platformei, inclusiv autentificarea, securitatea și gestionarea sesiunii.</li>
                                <li><strong>Cookie-uri de performanță</strong> — colectează informații despre cum utilizați platforma (pagini vizitate, eventuale erori) pentru a ne ajuta să îmbunătățim experiența.</li>
                                <li><strong>Cookie-uri de funcționalitate</strong> — permit platformei să rețină alegerile dumneavoastră (limba, regiunea, preferințele de afișare) pentru a oferi o experiență personalizată.</li>
                                <li><strong>Cookie-uri de marketing</strong> — utilizate pentru a vă afișa reclame relevante, în funcție de interesele dumneavoastră. Pot fi partajate cu parteneri publicitari.</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>3. Cookie-uri utilizate pe medelise.ro</h2>
                            <div className="cookie-table-wrapper">
                                <table className="cookie-table">
                                    <thead>
                                        <tr>
                                            <th>Nume cookie</th>
                                            <th>Tip</th>
                                            <th>Durată</th>
                                            <th>Scop</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>_session</td>
                                            <td>Esențial</td>
                                            <td>Sesiune</td>
                                            <td>Menținerea sesiunii utilizatorului</td>
                                        </tr>
                                        <tr>
                                            <td>_csrf</td>
                                            <td>Esențial</td>
                                            <td>Sesiune</td>
                                            <td>Protecție împotriva atacurilor CSRF</td>
                                        </tr>
                                        <tr>
                                            <td>_ga</td>
                                            <td>Performanță</td>
                                            <td>2 ani</td>
                                            <td>Google Analytics — identificare vizitator</td>
                                        </tr>
                                        <tr>
                                            <td>cookie_consent</td>
                                            <td>Funcționalitate</td>
                                            <td>1 an</td>
                                            <td>Stochează preferințele de consimțământ</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="legal-section">
                            <h2>4. Gestionarea cookie-urilor</h2>
                            <p>
                                Puteți controla și/sau șterge cookie-urile după cum doriți. Puteți șterge toate
                                cookie-urile deja stocate pe dispozitivul dumneavoastră și puteți seta majoritatea
                                browserelor să le blocheze. Cu toate acestea, dacă faceți acest lucru, este posibil
                                să fie necesară setarea manuală a unor preferințe la fiecare vizită, iar unele
                                servicii și funcționalități s-ar putea să nu funcționeze.
                            </p>
                            <p>
                                Setările cookie-urilor pot fi modificate din setările browser-ului dumneavoastră:
                            </p>
                            <ul>
                                <li><strong>Chrome:</strong> Setări → Confidențialitate și securitate → Cookie-uri</li>
                                <li><strong>Firefox:</strong> Setări → Viață privată și securitate → Cookie-uri</li>
                                <li><strong>Safari:</strong> Preferințe → Confidențialitate → Cookie-uri</li>
                                <li><strong>Edge:</strong> Setări → Confidențialitate → Cookie-uri</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>5. Cookie-uri terțe</h2>
                            <p>
                                Este posibil ca pe platforma noastră să fie plasate cookie-uri de către terțe părți
                                (de exemplu, Google Analytics, Facebook Pixel). Aceste cookie-uri sunt gestionate de
                                respectivele terțe părți, conform propriilor politici de confidențialitate.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>6. Modificări ale politicii de cookies</h2>
                            <p>
                                Ne rezervăm dreptul de a modifica această politică în orice moment. Orice modificare
                                va fi publicată pe această pagină cu data actualizării.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>7. Contact</h2>
                            <p>
                                Pentru orice întrebări referitoare la utilizarea cookie-urilor, ne puteți contacta la:
                            </p>
                            <ul>
                                <li>Email: <a href="mailto:office@medelise.ro">office@medelise.ro</a></li>
                                <li>Telefon: <a href="tel:+40784414555">+40 (784) 414 555</a></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>

            <style jsx>{`
                .legal-page {
                    font-family: var(--font-heading);
                    min-height: 100vh;
                    background: var(--color-white);
                }

                .legal-inner {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 64px var(--space-section-px-lg);
                }

                .legal-content {
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                }

                .legal-section h2 {
                    color: var(--color-primary);
                    font-size: 22px;
                    font-weight: 600;
                    line-height: 1.3;
                    margin: 0 0 16px;
                }

                .legal-section p {
                    color: var(--color-primary);
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 1.7;
                    margin: 0 0 12px;
                }

                .legal-section p:last-child {
                    margin-bottom: 0;
                }

                .legal-section ul {
                    list-style: disc;
                    padding-left: 24px;
                    margin: 8px 0 0;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .legal-section li {
                    color: var(--color-primary);
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 1.7;
                }

                .legal-section a {
                    color: var(--color-accent);
                    text-decoration: underline;
                    transition: opacity 0.2s ease;
                }

                .legal-section a:hover {
                    opacity: 0.7;
                }

                /* Cookie table */
                .cookie-table-wrapper {
                    overflow-x: auto;
                    margin-top: 16px;
                }

                .cookie-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 14px;
                }

                .cookie-table th,
                .cookie-table td {
                    text-align: left;
                    padding: 12px 16px;
                    border: 1px solid var(--color-surface-border);
                    color: var(--color-primary);
                }

                .cookie-table th {
                    background: var(--color-primary);
                    color: white;
                    font-weight: 600;
                }

                .cookie-table tbody tr:nth-child(even) {
                    background: #f8f9fa;
                }

                @media (max-width: 768px) {
                    .legal-inner {
                        padding: 32px var(--space-section-px-md);
                    }

                    .legal-section h2 {
                        font-size: 18px;
                    }
                }

                @media (max-width: 480px) {
                    .legal-inner {
                        padding: 24px var(--space-section-px-sm);
                    }
                }
            `}</style>
        </>
    );
}
