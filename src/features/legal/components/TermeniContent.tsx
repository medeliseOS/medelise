'use client';

export default function TermeniContent() {
    return (
        <>
            <main className="legal-page">
                <div className="legal-inner">
                    {/* Hero */}
                    <section className="legal-hero">
                        <p className="legal-surtitle">Legal</p>
                        <h1 className="legal-title">Termeni și Condiții</h1>
                        <p className="legal-updated">Ultima actualizare: 18 februarie 2026</p>
                    </section>

                    {/* Content */}
                    <section className="legal-content">
                        <div className="legal-section">
                            <h2>1. Informații generale</h2>
                            <p>
                                Prezentul document stabilește termenii și condițiile de utilizare a platformei
                                <strong> medelise.ro</strong>, operată de <strong>MEDELISE HEALTH SOLUTIONS S.R.L.</strong>,
                                societate înregistrată în România, cu sediul social în București.
                            </p>
                            <p>
                                Prin accesarea și utilizarea platformei, confirmați că ați citit, înțeles și acceptat
                                acești termeni în integralitatea lor. Dacă nu sunteți de acord cu oricare dintre
                                prevederile de mai jos, vă rugăm să nu utilizați platforma.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>2. Definiții</h2>
                            <ul>
                                <li><strong>Platforma</strong> — site-ul web medelise.ro și toate serviciile digitale asociate.</li>
                                <li><strong>Utilizator</strong> — orice persoană care accesează sau utilizează platforma.</li>
                                <li><strong>Servicii</strong> — serviciile medicale la domiciliu, programările online, IV Drip Therapy și orice alte servicii oferite prin platformă.</li>
                                <li><strong>Profesionist medical</strong> — medic, asistent medical sau alt profesionist din domeniul sănătății care colaborează cu Medelise.</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>3. Serviciile oferite</h2>
                            <p>
                                Medelise oferă o platformă digitală care conectează pacienții cu profesioniști medicali
                                pentru servicii la domiciliu. Serviciile includ, fără a se limita la:
                            </p>
                            <ul>
                                <li>Consultații medicale la domiciliu</li>
                                <li>Terapie intravenoasă (IV Drip Therapy)</li>
                                <li>Recoltări și analize de laborator</li>
                                <li>Administrarea tratamentelor prescrise</li>
                                <li>Monitorizare și follow-up post-tratament</li>
                            </ul>
                            <p>
                                Serviciile medicale sunt furnizate exclusiv de profesioniști autorizați, conform
                                legislației în vigoare din România.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>4. Înregistrare și cont</h2>
                            <p>
                                Pentru a beneficia de anumite servicii, este posibil să fie necesară crearea unui cont.
                                Sunteți responsabil pentru menținerea confidențialității datelor de autentificare și
                                pentru toate activitățile care au loc prin intermediul contului dumneavoastră.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>5. Programări și anulări</h2>
                            <p>
                                Programările pot fi efectuate prin platformă sau telefonic. Anularea gratuită este
                                posibilă cu cel puțin <strong>24 de ore</strong> înainte de data programării. Anulările
                                tardive pot fi supuse unei taxe administrative.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>6. Prețuri și plăți</h2>
                            <p>
                                Prețurile serviciilor sunt afișate pe platformă și includ TVA, unde este cazul.
                                Medelise își rezervă dreptul de a modifica prețurile, cu notificarea prealabilă a
                                utilizatorilor. Plățile se pot efectua online sau la fața locului, conform opțiunilor
                                disponibile.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>7. Proprietate intelectuală</h2>
                            <p>
                                Toate conținuturile platformei (texte, imagini, logo-uri, design, software) sunt
                                proprietatea Medelise Health Solutions S.R.L. sau a licențiatorilor săi și sunt protejate
                                de legislația privind drepturile de autor și proprietatea intelectuală.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>8. Limitarea răspunderii</h2>
                            <p>
                                Medelise depune eforturi rezonabile pentru a asigura acuratețea informațiilor de pe
                                platformă. Cu toate acestea, nu garantăm că platforma va funcționa fără întreruperi sau
                                erori. Informațiile prezentate nu substituie consultul medical profesional.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>9. Modificări ale termenilor</h2>
                            <p>
                                Ne rezervăm dreptul de a modifica acești termeni în orice moment. Modificările vor fi
                                publicate pe această pagină, iar continuarea utilizării platformei constituie acceptarea
                                noilor termeni.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>10. Contact</h2>
                            <p>
                                Pentru orice întrebări legate de acești termeni, ne puteți contacta la:
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
                    padding: 64px var(--space-section-px);
                }

                .legal-hero {
                    text-align: center;
                    padding: 48px 0 64px;
                    border-bottom: 1px solid var(--color-surface-border);
                    margin-bottom: 48px;
                }

                .legal-surtitle {
                    color: var(--color-accent);
                    font-size: 14px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin: 0 0 12px;
                }

                .legal-title {
                    color: var(--color-primary);
                    font-size: 40px;
                    font-weight: 700;
                    line-height: 1.2;
                    margin: 0 0 16px;
                }

                .legal-updated {
                    color: var(--color-surface-border);
                    font-size: 14px;
                    font-weight: 400;
                    margin: 0;
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

                    .legal-hero {
                        padding: 32px 0 40px;
                        margin-bottom: 32px;
                    }

                    .legal-title {
                        font-size: 28px;
                    }

                    .legal-section h2 {
                        font-size: 18px;
                    }
                }

                @media (max-width: 480px) {
                    .legal-inner {
                        padding: 24px var(--space-section-px-sm);
                    }

                    .legal-title {
                        font-size: 24px;
                    }
                }
            `}</style>
        </>
    );
}
