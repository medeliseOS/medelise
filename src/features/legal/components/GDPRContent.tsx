'use client';

import NewsletterSection from '@features/homepage/components/NewsletterSection';
import LegalSearchHero from './LegalSearchHero';
import useLegalSearch from '../hooks/useLegalSearch';

export default function GDPRContent() {
    const { searchQuery, setSearchQuery, matchCount, contentRef, clearSearch } = useLegalSearch();

    return (
        <>
            <main className="legal-page">
                {/* ── Hero ──────────────────────────────────────── */}
                <LegalSearchHero
                    title="POLITICA PRIVIND CONFIDENȚIALITATEA ȘI PRELUCRAREA DATELOR CU CARACTER PERSONAL"
                    date="Ultima actualizare: [01 martie 2026]"
                    description="Conform Regulamentului General privind Protecția Datelor cu Caracter Personal (GDPR – UE 2016/679), Medvita Health Solutions S.R.L. respectă confidențialitatea datelor personale ale pacienților, utilizatorilor și partenerilor săi. Prezenta politică descrie modul în care colectăm, folosim și protejăm datele dvs."
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    matchCount={matchCount}
                    clearSearch={clearSearch}
                />

                {/* ── Content ──────────────────────────────────── */}
                <div className="legal-inner" ref={contentRef}>
                    <section className="legal-content">
                        <div className="legal-section">
                            <h2>1. Introducere</h2>
                            <p>
                                <strong>MEDELISE HEALTH SOLUTIONS S.R.L.</strong> respectă confidențialitatea datelor
                                dumneavoastră personale și se angajează să le protejeze în conformitate cu Regulamentul
                                General privind Protecția Datelor (GDPR — Regulamentul UE 2016/679) și legislația
                                națională în vigoare.
                            </p>
                            <p>
                                Această politică descrie ce date personale colectăm, de ce le colectăm, cum le
                                folosim și care sunt drepturile dumneavoastră.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>2. Operatorul de date</h2>
                            <p>
                                Operatorul de date este <strong>MEDELISE HEALTH SOLUTIONS S.R.L.</strong>, cu sediul
                                în București, România.
                            </p>
                            <ul>
                                <li>Email DPO: <a href="mailto:dpo@medelise.ro">dpo@medelise.ro</a></li>
                                <li>Email general: <a href="mailto:office@medelise.ro">office@medelise.ro</a></li>
                                <li>Telefon: <a href="tel:+40784414555">+40 (784) 414 555</a></li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>3. Datele personale colectate</h2>
                            <p>Colectăm următoarele categorii de date personale:</p>
                            <ul>
                                <li><strong>Date de identificare:</strong> nume, prenume, CNP (pentru servicii medicale), data nașterii</li>
                                <li><strong>Date de contact:</strong> adresă email, număr de telefon, adresa de domiciliu</li>
                                <li><strong>Date medicale:</strong> istoricul medical relevant, alergii, tratamente curente (categorie specială conform art. 9 GDPR)</li>
                                <li><strong>Date de utilizare:</strong> adresa IP, tipul de browser, pagini vizitate, durata sesiunii</li>
                                <li><strong>Date de plată:</strong> procesate securizat prin furnizori terți (nu stocăm datele cardurilor)</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>4. Scopul și temeiul legal al prelucrării</h2>
                            <p>Prelucrăm datele dumneavoastră personale în baza următoarelor temeiuri legale:</p>
                            <ul>
                                <li><strong>Executarea contractului</strong> (art. 6(1)(b) GDPR) — pentru furnizarea serviciilor medicale solicitate</li>
                                <li><strong>Obligație legală</strong> (art. 6(1)(c) GDPR) — conformitate cu obligațiile fiscale și de raportare medicală</li>
                                <li><strong>Consimțământ explicit</strong> (art. 9(2)(a) GDPR) — pentru prelucrarea datelor medicale sensibile</li>
                                <li><strong>Interes legitim</strong> (art. 6(1)(f) GDPR) — pentru îmbunătățirea serviciilor și securitatea platformei</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>5. Partajarea datelor</h2>
                            <p>Datele dumneavoastră pot fi partajate cu:</p>
                            <ul>
                                <li><strong>Profesioniști medicali</strong> — care furnizează serviciile solicitate</li>
                                <li><strong>Furnizori de plăți</strong> — pentru procesarea securizată a tranzacțiilor</li>
                                <li><strong>Furnizori de hosting și IT</strong> — pentru funcționarea platformei</li>
                                <li><strong>Autorități publice</strong> — când legislația impune acest lucru</li>
                            </ul>
                            <p>
                                Nu vindem și nu închiriem datele dumneavoastră personale către terți.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>6. Durata stocării</h2>
                            <p>
                                Datele personale sunt stocate doar pe perioada necesară îndeplinirii scopurilor pentru
                                care au fost colectate:
                            </p>
                            <ul>
                                <li>Date medicale — conform legislației medicale (minimum 5 ani)</li>
                                <li>Date financiare — conform legislației fiscale (10 ani)</li>
                                <li>Date de cont — pe durata relației contractuale + 3 ani</li>
                                <li>Date de navigare — maximum 26 luni</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>7. Drepturile dumneavoastră</h2>
                            <p>
                                Conform GDPR, aveți următoarele drepturi:
                            </p>
                            <ul>
                                <li><strong>Dreptul de acces</strong> — să solicitați o copie a datelor personale</li>
                                <li><strong>Dreptul la rectificare</strong> — să corectați datele inexacte</li>
                                <li><strong>Dreptul la ștergere</strong> (&quot;dreptul de a fi uitat&quot;) — cu excepția obligațiilor legale</li>
                                <li><strong>Dreptul la restricționare</strong> — să limitați prelucrarea</li>
                                <li><strong>Dreptul la portabilitate</strong> — să primiți datele într-un format structurat</li>
                                <li><strong>Dreptul la opoziție</strong> — să vă opuneți prelucrării bazate pe interes legitim</li>
                                <li><strong>Dreptul de retragere a consimțământului</strong> — în orice moment, fără a afecta legalitatea prelucrării anterioare</li>
                            </ul>
                            <p>
                                Pentru exercitarea acestor drepturi, contactați-ne la <a href="mailto:dpo@medelise.ro">dpo@medelise.ro</a>.
                                Vom răspunde în maximum 30 de zile.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>8. Securitatea datelor</h2>
                            <p>
                                Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele personale
                                împotriva accesului neautorizat, pierderii sau distrugerii, inclusiv: criptare SSL/TLS,
                                acces bazat pe roluri, backup-uri regulate și audituri de securitate periodice.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>9. Autoritatea de supraveghere</h2>
                            <p>
                                Dacă considerați că prelucrarea datelor dumneavoastră încalcă GDPR, aveți dreptul să
                                depuneți o plângere la <strong>Autoritatea Națională de Supraveghere a Prelucrării
                                    Datelor cu Caracter Personal (ANSPDCP)</strong>:
                            </p>
                            <ul>
                                <li>Website: <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">www.dataprotection.ro</a></li>
                                <li>Email: anspdcp@dataprotection.ro</li>
                            </ul>
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
