'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NewsletterSection from '@features/homepage/components/NewsletterSection';
import LegalSearchHero from './LegalSearchHero';
import useLegalSearch from '../hooks/useLegalSearch';

/* ─── FAQ Categories & Data ─── */
const FAQ_CATEGORIES = [
    { key: 'general', label: 'Întrebări generale' },
    { key: 'servicii', label: 'Servicii medicale' },
    { key: 'programari', label: 'Programări' },
    { key: 'plati', label: 'Plăți & prețuri' },
    { key: 'cont', label: 'Cont & date' },
] as const;

type CategoryKey = (typeof FAQ_CATEGORIES)[number]['key'];

const FAQ_ITEMS: Record<CategoryKey, { question: string; answer: string }[]> = {
    general: [
        {
            question: 'Ce este Medelise?',
            answer: 'Medelise este o platformă digitală de sănătate care conectează pacienții cu profesioniști medicali pentru servicii la domiciliu — de la consultații și recoltări la terapie intravenoasă (IV Drip Therapy). Totul simplu, rapid și sigur.',
        },
        {
            question: 'În ce zone este disponibil Medelise?',
            answer: 'Momentan acoperim București și județul Ilfov. Rețeaua se extinde constant — urmărește actualizările noastre pentru disponibilitate în alte zone.',
        },
        {
            question: 'Cine sunt profesioniștii medicali Medelise?',
            answer: 'Toți profesioniștii care colaborează cu Medelise sunt medici, asistenți medicali și specialiști autorizați, verificați și cu experiență clinică relevantă. Fiecare trece printr-un proces de validare și onboarding.',
        },
        {
            question: 'Medelise oferă servicii de urgență?',
            answer: 'Nu, Medelise nu este un serviciu de urgență. Pentru urgențe medicale, apelați 112. Serviciile noastre sunt programate și destinate îngrijirii medicale planificate.',
        },
        {
            question: 'Cum pot contacta echipa Medelise?',
            answer: 'Ne poți contacta telefonic la +40 (784) 414 555, prin email la office@medelise.ro sau prin formularul de contact de pe site. Răspundem în maximum 24 de ore.',
        },
        {
            question: 'Medelise este disponibil și pentru companii?',
            answer: 'Da, oferim pachete corporate personalizate pentru companii care doresc să ofere angajaților lor acces la servicii medicale la birou sau la domiciliu. Contactează-ne pentru o ofertă dedicată.',
        },
        {
            question: 'Ce garanții oferă Medelise?',
            answer: 'Garantăm profesioniști medicali autorizați, echipamente sterile certificate și respectarea tuturor normelor sanitare în vigoare. Dacă nu ești mulțumit de un serviciu, ne poți contacta pentru soluționare.',
        },
        {
            question: 'Cum pot lăsa un feedback despre experiența mea?',
            answer: 'După fiecare vizită, vei primi un email cu un formular scurt de evaluare. Poți lăsa feedback și direct din contul tău de pe platformă sau prin email la office@medelise.ro.',
        },
        {
            question: 'Medelise are o aplicație mobilă?',
            answer: 'Aplicația mobilă Medelise este în dezvoltare și va fi disponibilă pe iOS și Android. Până atunci, platforma web este optimizată pentru utilizare pe orice dispozitiv mobil.',
        },
        {
            question: 'Ce limbă este disponibilă pe platformă?',
            answer: 'Platforma Medelise este disponibilă în limba română. Suport bilingv (română și engleză) este planificat pentru viitoarele versiuni.',
        },
    ],
    servicii: [
        {
            question: 'Ce tipuri de servicii sunt disponibile?',
            answer: 'Oferim consultații la domiciliu, terapie intravenoasă (IV Drip Therapy) cu 12 formule specializate, recoltări pentru analize de laborator, administrare tratamente injectabile și monitorizare post-tratament.',
        },
        {
            question: 'Ce este IV Drip Therapy?',
            answer: 'IV Drip Therapy este o terapie intravenoasă care administrează vitamine, minerale și nutrienți direct în fluxul sanguin, pentru absorbție maximă. Formulele noastre acoperă de la rehidratare și boost de energie la recuperare sportivă și imunitate.',
        },
        {
            question: 'Tratamentele sunt sigure?',
            answer: 'Da, toate tratamentele sunt administrate de profesioniști medicali autorizați, folosind echipamente sterile și produse certificate. Înainte de orice procedură, se realizează o evaluare medicală pentru a asigura compatibilitatea.',
        },
        {
            question: 'Pot solicita un serviciu pentru altcineva?',
            answer: 'Da, puteți programa o vizită medicală pentru un membru al familiei sau o altă persoană. Datele pacientului vor fi necesare la momentul programării.',
        },
        {
            question: 'Ce formule IV Drip Therapy sunt disponibile?',
            answer: 'Avem 12 formule: Boost de Energie, Boost de Imunitate, Super Boost de Imunitate, Anti-Mahmureală, Recuperare Sportivă, Frumusețe, Myers Cocktail, All-Inclusive, Deshidratare, Calmarea Migrenelor, Gastroenterită și Fertility Plus.',
        },
        {
            question: 'Cât durează o sesiune de IV Drip Therapy?',
            answer: 'O sesiune durează între 30 și 60 de minute, în funcție de formula aleasă și de recomandarea medicului. În acest timp, te poți relaxa confortabil acasă.',
        },
        {
            question: 'Există contraindicații pentru IV Drip Therapy?',
            answer: 'Da, anumite afecțiuni medicale (boli renale severe, insuficiență cardiacă, alergii la componente) pot constitui contraindicații. De aceea, fiecare pacient beneficiază de o evaluare medicală înainte de tratament.',
        },
        {
            question: 'Ce analize de laborator pot fi recoltate la domiciliu?',
            answer: 'Acoperim o gamă largă: hemoleucogramă completă, profil lipidic, glicemie, funcție hepatică și renală, markeri tiroidieni, teste hormonale, markeri tumorali și multe altele. Lista completă este disponibilă pe platformă.',
        },
        {
            question: 'Cum primesc rezultatele analizelor?',
            answer: 'Rezultatele sunt disponibile în contul tău de pe platformă în 24-72 de ore, în funcție de tipul analizei. Primești și o notificare pe email când rezultatele sunt gata.',
        },
        {
            question: 'Serviciile medicale sunt personalizate?',
            answer: 'Da, fiecare plan de tratament este adaptat nevoilor individuale ale pacientului. Medicul evaluează starea de sănătate, istoricul medical și obiectivele de wellness pentru a recomanda cel mai potrivit serviciu.',
        },
    ],
    programari: [
        {
            question: 'Cum pot face o programare?',
            answer: 'Programările se pot face direct de pe platformă (medelise.ro), prin butonul „Book Now" sau telefonic la +40 (784) 414 555. Procesul durează sub 2 minute.',
        },
        {
            question: 'Pot anula sau reprograma o vizită?',
            answer: 'Da, anularea gratuită este posibilă cu cel puțin 24 de ore înainte de programare. Reprogramarea se face simplu din contul tău sau telefonic.',
        },
        {
            question: 'Cât durează o vizită la domiciliu?',
            answer: 'Durata variază în funcție de serviciu: consultațiile durează 20-40 minute, o sesiune IV Drip Therapy durează 30-60 minute, iar recoltările sunt finalizate în 10-15 minute.',
        },
        {
            question: 'Ce intervale orare sunt disponibile?',
            answer: 'Oferim programări de luni până vineri, între 08:00 și 20:00, cu posibilitatea de programări în weekend pentru cazuri speciale. Intervalele exacte depind de disponibilitatea echipei din zona ta.',
        },
        {
            question: 'Pot alege un anumit profesionist medical?',
            answer: 'Da, dacă ai o preferință, poți solicita un anumit profesionist medical la momentul programării. Disponibilitatea depinde de agenda acestuia.',
        },
        {
            question: 'Ce se întâmplă dacă nu sunt acasă la ora programării?',
            answer: 'Echipa noastră te va contacta telefonic cu 30 de minute înainte de vizită. Dacă nu ești disponibil, programarea poate fi reprogramată gratuit o singură dată.',
        },
        {
            question: 'Cum primesc confirmarea programării?',
            answer: 'Primești confirmare instant pe email și SMS imediat după finalizarea programării. Cu 24 de ore și cu 1 oră înainte, primești și un reminder automat.',
        },
        {
            question: 'Pot programa mai multe servicii în aceeași vizită?',
            answer: 'Da, poți combina servicii compatibile în aceeași vizită (de exemplu, recoltare de analize și IV Drip Therapy). Menționează acest lucru la momentul programării.',
        },
        {
            question: 'Există o limită de programări pe lună?',
            answer: 'Nu, poți face oricâte programări dorești. Pentru tratamente recurente (cum ar fi IV Drip Therapy), medicul îți va recomanda frecvența optimă.',
        },
        {
            question: 'Ce adresă trebuie să furnizez pentru vizita la domiciliu?',
            answer: 'Furnizează adresa completă (stradă, număr, bloc, scară, etaj, apartament) și orice indicații suplimentare de acces. Vizitele se fac la adresa specificată, fie acasă, fie la birou.',
        },
    ],
    plati: [
        {
            question: 'Care sunt prețurile serviciilor?',
            answer: 'Prețurile sunt afișate transparent pe pagina fiecărui serviciu. O sesiune IV Drip Therapy pornește de la 299 lei, iar consultațiile la domiciliu de la 199 lei. Pachetele personalizate beneficiază de reduceri.',
        },
        {
            question: 'Ce metode de plată acceptați?',
            answer: 'Acceptăm plata cu cardul (online, la programare), transfer bancar și plata la fața locului (numerar sau POS mobil). Toate tranzacțiile online sunt securizate.',
        },
        {
            question: 'Oferiți facturi?',
            answer: 'Da, pentru fiecare serviciu este emisă o factură fiscală, fie electronică, fie la cerere. Factura poate fi descărcată din contul tău de pe platformă.',
        },
        {
            question: 'Serviciile sunt decontate de asigurarea de sănătate?',
            answer: 'Momentan, serviciile Medelise nu sunt decontate de Casa de Asigurări de Sănătate. Lucrăm la parteneriate cu asigurări private pentru a oferi această opțiune în viitor.',
        },
        {
            question: 'Există taxe suplimentare de deplasare?',
            answer: 'Nu, prețul afișat include deplasarea în zona acoperită (București și Ilfov). Nu există costuri ascunse sau taxe suplimentare.',
        },
        {
            question: 'Oferiți pachete sau abonamente?',
            answer: 'Da, oferim pachete de mai multe sesiuni IV Drip Therapy cu reduceri de până la 20%. De asemenea, pregătim abonamente lunare pentru companii și persoane fizice.',
        },
        {
            question: 'Pot obține rambursare dacă nu sunt mulțumit?',
            answer: 'Dacă serviciul nu a fost livrat conform standardelor, analizăm fiecare caz individual. Contactează-ne în 48 de ore de la vizită pentru a iniția o solicitare de rambursare.',
        },
        {
            question: 'Plata online este sigură?',
            answer: 'Da, utilizăm sisteme de plată cu criptare SSL/TLS și conformitate PCI-DSS. Datele cardului tău nu sunt stocate pe serverele noastre — sunt procesate securizat de partenerul nostru de plăți.',
        },
        {
            question: 'Pot plăti în rate?',
            answer: 'Momentan nu oferim plata în rate, dar planificăm integrarea cu servicii de tip „buy now, pay later" în viitor. Urmărește actualizările noastre.',
        },
        {
            question: 'Există reduceri pentru programări recurente?',
            answer: 'Da, pacienții care programează sesiuni recurente de IV Drip Therapy sau pachete de analize beneficiază de reduceri progresive. Detaliile sunt disponibile pe pagina fiecărui serviciu.',
        },
    ],
    cont: [
        {
            question: 'Cum îmi creez un cont?',
            answer: 'Poți crea un cont gratuit pe medelise.ro folosind adresa de email sau prin login social (Google). Contul îți oferă acces la istoric programări, facturi și setări personalizate.',
        },
        {
            question: 'Cum îmi șterg contul?',
            answer: 'Poți solicita ștergerea contului din setările profilului sau contactând echipa noastră la office@medelise.ro. Datele vor fi șterse conform politicii GDPR, cu excepția celor necesare obligațiilor legale.',
        },
        {
            question: 'Datele mele sunt în siguranță?',
            answer: 'Da, protejăm datele tale cu criptare SSL/TLS, acces bazat pe roluri și măsuri tehnice conforme GDPR. Nu vindem și nu partajăm datele tale cu terți în scopuri comerciale.',
        },
        {
            question: 'Am uitat parola. Ce fac?',
            answer: 'Pe pagina de login, apasă „Am uitat parola" și urmează instrucțiunile primite pe email. Resetarea durează sub 1 minut.',
        },
        {
            question: 'Pot modifica datele din profilul meu?',
            answer: 'Da, poți actualiza oricând numele, adresa de email, numărul de telefon și adresa de domiciliu din secțiunea „Profilul meu" din contul tău.',
        },
        {
            question: 'Ce date personale stochează Medelise?',
            answer: 'Stocăm doar datele necesare furnizării serviciilor: nume, email, telefon, adresă, istoric programări și datedate medicale relevante. Toate sunt protejate conform GDPR.',
        },
        {
            question: 'Pot descărca datele mele personale?',
            answer: 'Da, conform GDPR ai dreptul la portabilitatea datelor. Poți solicita o copie a datelor tale personale din setările contului sau prin email la office@medelise.ro.',
        },
        {
            question: 'Cum funcționează autentificarea pe platformă?',
            answer: 'Poți te autentifica cu email și parolă sau prin login social (Google). Recomandăm activarea autentificării în doi pași (2FA) pentru securitate suplimentară.',
        },
        {
            question: 'Ce se întâmplă cu datele mele dacă îmi șterg contul?',
            answer: 'La ștergerea contului, datele personale sunt anonimizate sau șterse în 30 de zile. Datele medicale și facturile sunt păstrate conform obligațiilor legale (minimum 5 ani pentru documente fiscale).',
        },
        {
            question: 'Pot avea mai multe adrese salvate în cont?',
            answer: 'Da, poți salva mai multe adrese de vizită (acasă, birou, altă locație) și alege rapid la fiecare programare adresa dorită.',
        },
    ],
};

export default function FAQContent() {
    const { searchQuery, setSearchQuery, matchCount, contentRef, clearSearch } = useLegalSearch();
    const [activeCategory, setActiveCategory] = useState<CategoryKey>('general');
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

    const handleCategoryChange = (key: CategoryKey) => {
        setActiveCategory(key);
        setOpenIndex(0);
    };

    return (
        <>
            <main className="faq-page">
                {/* ── Hero ──────────────────────────────────────── */}
                <LegalSearchHero
                    title="Întrebări Frecvente"
                    date="Suport"
                    description="Găsește rapid răspunsuri la cele mai frecvente întrebări despre Medelise, serviciile noastre, programări și plăți."
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    matchCount={matchCount}
                    clearSearch={clearSearch}
                />

                <div className="faq-inner" ref={contentRef}>

                    {/* Category Tabs */}
                    <section className="faq-tabs">
                        {FAQ_CATEGORIES.map((cat) => (
                            <button
                                key={cat.key}
                                className={`faq-tab ${activeCategory === cat.key ? 'active' : ''}`}
                                onClick={() => handleCategoryChange(cat.key)}
                                type="button"
                            >
                                {cat.label}
                            </button>
                        ))}
                    </section>

                    {/* FAQ Items */}
                    <section className="faq-list">
                        {FAQ_ITEMS[activeCategory].map((item, i) => (
                            <div
                                key={`${activeCategory}-${i}`}
                                className="faq-item"
                                onClick={() => toggle(i)}
                                role="button"
                                tabIndex={0}
                                aria-expanded={openIndex === i}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        toggle(i);
                                    }
                                }}
                            >
                                <div className="faq-question-row">
                                    <div className={`faq-chevron ${openIndex === i ? 'open' : ''}`}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>
                                    <h3 className="faq-question">{item.question}</h3>
                                </div>
                                <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                                    <p className="faq-answer-text">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* CTA */}
                    <section className="faq-cta">
                        <div className="faq-cta-content">
                            <h2 className="faq-cta-title">Nu ai găsit răspunsul?</h2>
                            <p className="faq-cta-desc">
                                Contactează echipa Medelise și primești suport personalizat. Răspundem în maximum 24h.
                            </p>
                        </div>
                        <Link href="/contact">
                            <button className="faq-cta-btn" type="button">
                                <span className="faq-cta-btn-icon">
                                    <Image
                                        src="/icons-medelise/md-business/md-ico-mail.webp"
                                        alt=""
                                        width={20}
                                        height={20}
                                    />
                                </span>
                                <span className="faq-cta-btn-text">Contactează-ne</span>
                            </button>
                        </Link>
                    </section>
                </div>
                {/* ── Newsletter ───────────────────────────────── */}
                <NewsletterSection
                    heading="Alătură-te comunității Medelise!"
                    description="Abonează-te pentru a primi protocoale de sănătate, noutăți despre medicina viitorului și acces la servicii personalizate direct în inbox-ul tău. Sănătatea ta este o călătorie, nu o destinație – hai să o parcurgem împreună!"
                />
            </main>

            <style jsx>{`
                .faq-page {
                    font-family: var(--font-heading);
                    min-height: 100vh;
                    background: var(--color-white);
                }

                .faq-inner {
                    width: 100%;
                    padding: 64px;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    align-items: stretch;
                }

                /* Force ALL children to stretch full width */
                .faq-inner > *,
                .faq-list > * {
                    width: 100%;
                    align-self: stretch;
                    box-sizing: border-box;
                }

                /* ── Category Tabs ── */
                .faq-tabs {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    justify-content: center;
                    padding-bottom: 40px;
                    border-bottom: 1px solid var(--color-surface-border);
                    width: 100%;
                }

                .faq-tab {
                    padding: 8px 20px;
                    border: 1px solid var(--color-surface-border);
                    border-radius: 100px;
                    background: transparent;
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .faq-tab:hover {
                    border-color: var(--color-primary);
                }

                .faq-tab.active {
                    background: var(--color-primary);
                    color: white;
                    border-color: var(--color-primary);
                }

                /* ── FAQ Items ── */
                .faq-list {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    align-items: stretch;
                    width: 100%;
                }

                .faq-item {
                    width: 100%;
                    padding: 24px;
                    border-radius: 8px;
                    border: 1px solid var(--color-surface-border);
                    cursor: pointer;
                    transition: border-color 0.2s ease;
                    box-sizing: border-box;
                }

                .faq-item:hover {
                    border-color: var(--color-primary);
                }

                .faq-question-row {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    width: 100%;
                }

                .faq-chevron {
                    width: 24px;
                    height: 24px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                }

                .faq-chevron.open {
                    transform: rotate(180deg);
                }

                .faq-question {
                    flex: 1;
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 1.4;
                    margin: 0;
                }

                .faq-answer {
                    overflow: hidden;
                    max-height: 0;
                    opacity: 0;
                    transition: max-height 0.35s ease, opacity 0.25s ease, margin 0.35s ease;
                    margin-top: 0;
                    width: 100%;
                }

                .faq-answer.open {
                    max-height: 300px;
                    opacity: 1;
                    margin-top: 16px;
                }

                .faq-answer-text {
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 1.7;
                    margin: 0;
                    width: 100%;
                }

                /* ── CTA ── */
                .faq-cta {
                    width: 100%;
                    padding: 40px 32px;
                    background: var(--color-primary);
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;
                    text-align: center;
                    box-sizing: border-box;
                }

                .faq-cta-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    width: 100%;
                }

                .faq-cta-title {
                    color: white;
                    font-family: var(--font-heading);
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 1.3;
                    margin: 0;
                }

                .faq-cta-desc {
                    color: white;
                    font-family: var(--font-heading);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                    margin: 0;
                    max-width: 500px;
                }

                .faq-cta-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 24px;
                    background: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: opacity 0.2s ease;
                }

                .faq-cta-btn:hover {
                    opacity: 0.9;
                }

                .faq-cta-btn-text {
                    color: var(--color-primary);
                    font-family: var(--font-heading);
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 24px;
                }

                .faq-cta-btn-icon {
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                /* ── Responsive ── */
                @media (max-width: 768px) {
                    .faq-inner {
                        padding: 32px 24px;
                    }

                    .faq-tabs {
                        gap: 6px;
                    }

                    .faq-tab {
                        font-size: 13px;
                        padding: 6px 16px;
                    }
                }

                @media (max-width: 480px) {
                    .faq-inner {
                        padding: 24px 16px;
                    }

                    .faq-item {
                        padding: 16px;
                    }

                    .faq-cta {
                        padding: 32px 20px;
                    }
                }
            `}</style>
        </>
    );
}
