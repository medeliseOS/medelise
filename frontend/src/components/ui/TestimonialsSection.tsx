'use client';

import { useRef, useCallback } from 'react';
import Image from 'next/image';
import { ICONS } from '@shared/constants/icons';

/* ─── Testimonial data ─── */
export interface TestimonialItem {
  rating: number;
  text: string;
  name: string;
  company: string;
}

interface TestimonialsSectionProps {
  testimonials?: TestimonialItem[];
  title?: string;
  subtitle?: string;
  hiddenSubtitle?: boolean;
  compact?: boolean; // Removes section padding if true
}

/* ─── SVG Star Shapes ─── */
const STAR_PATH =
  'M10 1.5l2.47 5.01L18 7.27l-4 3.9.95 5.53L10 13.77 5.05 16.7 6 11.17l-4-3.9 5.53-.76L10 1.5z';

function FullStar() {
  return (
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
      <path d={STAR_PATH} fill="var(--color-primary)" />
    </svg>
  );
}

function EmptyStar() {
  return (
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
      <path d={STAR_PATH} fill="var(--color-border-light)" />
    </svg>
  );
}

function PartialStar({ fraction }: { fraction: number }) {
  const id = `clip-${Math.round(fraction * 100)}`;
  return (
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
      <defs>
        <clipPath id={id}>
          <rect x="0" y="0" width={20 * fraction} height="19" />
        </clipPath>
      </defs>
      {/* Empty background */}
      <path d={STAR_PATH} fill="var(--color-border-light)" />
      {/* Filled portion */}
      <path d={STAR_PATH} fill="var(--color-primary)" clipPath={`url(#${id})`} />
    </svg>
  );
}

/* ─── Star Rating helper ─── */
function renderStars(rating: number) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const diff = rating - i;
    if (diff >= 1) {
      stars.push(<FullStar key={i} />);
    } else if (diff > 0) {
      stars.push(<PartialStar key={i} fraction={diff} />);
    } else {
      stars.push(<EmptyStar key={i} />);
    }
  }
  return stars;
}

/* ─── Default Testimonials ─── */
const defaultTestimonials: TestimonialItem[] = [
  {
    rating: 3.75,
    text: 'Medicul a ajuns exact la ora stabilită, a fost atent, calm și mi-a explicat totul cu răbdare. E prima dată când simt că sunt ascultat cu adevărat. Mulțumesc, Medelise!',
    name: 'Mircea Popa',
    company: 'Pacient Verificat',
  },
  {
    rating: 5.0,
    text: 'Am apelat la Medelise pentru o evaluare la domiciliu a tatălui meu. Echipa a fost impecabil organizată și empatică. Nu știam că se poate primi îngrijire medicală de calitate acasă!',
    name: 'Elena Dumitrescu',
    company: 'Pacient Verificat',
  },
  {
    rating: 4.5,
    text: 'Am programat o perfuzie IV pentru rehidratare după o viroză. Asistenta a fost profesionistă, m-a monitorizat constant și m-am simțit în siguranță pe tot parcursul procedurii.',
    name: 'Andrei Marinescu',
    company: 'Pacient Verificat',
  },
  {
    rating: 5.0,
    text: 'Serviciul de recoltare la domiciliu a fost rapid și fără stres. Rezultatele au ajuns pe e-mail în aceeași zi. Comod și eficient, exact ce aveam nevoie.',
    name: 'Maria Ionescu',
    company: 'Pacient Verificat',
  },
  {
    rating: 5.0,
    text: 'Mama mea are nevoie de îngrijiri regulate pentru escare. Echipa Medelise vine de trei ori pe săptămână și tratamentul a arătat progrese vizibile. Foarte recunoscătoare!',
    name: 'Cristina Georgescu',
    company: 'Pacient Verificat',
  },
  {
    rating: 4.5,
    text: 'După operația de genunchi, recuperarea cu kinetoterapistul de la Medelise a fost excelentă. Exercițiile personalizate și vizitele regulate m-au ajutat enorm.',
    name: 'Alexandru Toma',
    company: 'Pacient Verificat',
  },
  {
    rating: 5.0,
    text: 'Procesul de programare online e incredibil de simplu. În mai puțin de un minut am reușit să stabilesc o consultație pentru toată familia. Recomand cu încredere!',
    name: 'Diana Moldovan',
    company: 'Pacient Verificat',
  },
];

export default function TestimonialsSection({
  testimonials = defaultTestimonials,
  title = 'Testimoniale',
  subtitle = 'Secțiunea noastră de testimoniale reflectă experiențele și satisfacția clienților și utilizatorilor noștri.',
  hiddenSubtitle = false,
  compact = false,
}: TestimonialsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = 380 + 16; // card width + gap (matches CSS)
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <section className={`tm-section ${compact ? 'tm-compact' : ''}`}>
        <div className="tm-inner">
          <div className="tm-content">
            {/* ─── Header Row ─── */}
            <div className="tm-header-row">
              <div className="tm-header-text">
                {title && <h2 className="tm-title">{title}</h2>}
                {!hiddenSubtitle && subtitle && (
                  <p className="tm-subtitle">{subtitle}</p>
                )}
              </div>
              <div className="tm-nav-buttons">
                <button
                  className="tm-nav-btn"
                  onClick={() => scroll('left')}
                  aria-label="Testimonial anterior"
                >
                  <Image
                    src={ICONS.arrowLeft}
                    alt=""
                    width={32}
                    height={32}
                  />
                </button>
                <button
                  className="tm-nav-btn"
                  onClick={() => scroll('right')}
                  aria-label="Testimonial următor"
                >
                  <Image
                    src={ICONS.arrowRight}
                    alt=""
                    width={32}
                    height={32}
                  />
                </button>
              </div>
            </div>

            {/* ─── Cards Row ─── */}
            <div className="tm-cards-wrapper" ref={scrollRef}>
              <div className="tm-cards-track">
                {testimonials.map((t, i) => (
                  <div key={i} className="tm-card">
                    <div className="tm-stars">{renderStars(t.rating)}</div>
                    <div className="tm-card-content">
                      <p className="tm-card-text">{t.text}</p>
                      <div className="tm-card-author">
                        <div className="tm-avatar-circle">
                          <span className="tm-avatar-initials">
                            {t.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </span>
                        </div>
                        <div className="tm-author-info">
                          <span className="tm-author-name">{t.name}</span>
                          <span className="tm-author-company">{t.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ═══════════════════════════════════════
         * SECTION
         * ═══════════════════════════════════════ */
        .tm-section {
          width: 100%;
          padding-left: var(--space-section-px);
          background: var(--color-white);
          display: inline-flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }

        .tm-section.tm-compact {
          padding-left: 0;
          background: transparent;
        }

        .tm-inner {
          align-self: stretch;
          padding-top: 64px;
          padding-bottom: 64px;
          background: var(--color-white);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }
        
        .tm-compact .tm-inner {
            padding-top: 0;
            padding-bottom: 0;
            background: transparent;
        }
        
        .tm-compact .tm-header-row {
            padding-right: 0; /* Remove right padding in compact/embedded mode */
        }
        
        .tm-compact .tm-cards-track {
            padding-right: 0; /* Remove right padding in compact/embedded mode */
        }

        .tm-content {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          overflow: hidden;
        }

        /* ═══════════════════════════════════════
         * HEADER ROW
         * ═══════════════════════════════════════ */
        .tm-header-row {
          align-self: stretch;
          padding-top: var(--space-8);
          padding-bottom: var(--space-8);
          padding-right: var(--space-section-px);
          background: var(--color-white);
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: var(--space-8);
        }

        .tm-header-text {
          display: inline-flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: var(--space-3);
        }

        .tm-title {
          color: var(--color-primary);
          font-size: var(--text-h2);
          font-weight: 600;
          line-height: var(--lh-heading);
          margin: 0;
        }

        .tm-subtitle {
          width: 478px;
          color: var(--color-primary);
          font-size: var(--text-body-lg);
          font-weight: 400;
          line-height: var(--lh-body);
          margin: 0;
        }

        /* ─── Navigation Buttons ─── */
        .tm-nav-buttons {
          display: none;
          justify-content: flex-start;
          align-items: flex-start;
          gap: var(--space-8);
          margin-left: auto;
        }

        @media (min-width: 641px) {
          .tm-nav-buttons {
            display: flex;
          }
        }

        .tm-nav-btn {
          width: 56px;
          height: 56px;
          position: relative;
          background: var(--color-surface);
          border-radius: var(--radius-full);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease, transform 0.15s ease;
          flex-shrink: 0;
        }

        .tm-nav-btn:hover {
          background: var(--color-surface-border);
          transform: scale(1.05);
        }

        .tm-nav-btn:active {
          transform: scale(0.97);
        }

        /* ═══════════════════════════════════════
         * CARDS WRAPPER (scrollable container)
         * ═══════════════════════════════════════ */
        .tm-cards-wrapper {
          width: 100%;
          overflow-x: scroll;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-behavior: smooth;
        }

        .tm-cards-wrapper::-webkit-scrollbar {
          display: none;
        }

        /* ═══════════════════════════════════════
         * CARDS TRACK (inner flex row)
         * ═══════════════════════════════════════ */
        .tm-cards-track {
          display: inline-flex;
          align-items: stretch;
          gap: var(--space-4);
          padding-right: var(--space-section-px);
        }

        /* ═══════════════════════════════════════
         * CARD
         * ═══════════════════════════════════════ */
        .tm-card {
          width: 380px;
          min-width: 380px;
          padding: var(--space-6);
          background: var(--color-surface-card);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: var(--space-3);
          scroll-snap-align: start;
        }

        .tm-card-content {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          gap: var(--space-6);
          flex: 1;
        }

        .tm-card-text {
          align-self: stretch;
          color: var(--color-primary);
          font-size: var(--text-body);
          font-weight: 400;
          line-height: var(--lh-body);
          margin: 0;
        }

        /* ─── Author ─── */
        .tm-card-author {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: var(--space-3);
        }

        .tm-avatar-circle {
          width: var(--space-12);
          height: var(--space-12);
          border-radius: var(--radius-full);
          background: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .tm-avatar-initials {
          color: var(--color-white);
          font-size: var(--text-body);
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .tm-author-info {
          flex: 1 1 0;
          display: inline-flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }

        .tm-author-name {
          color: var(--color-primary);
          font-size: var(--text-body);
          font-weight: 500;
          line-height: var(--lh-body);
        }

        .tm-author-company {
          color: var(--color-text-muted);
          font-size: var(--text-sm);
          font-weight: 400;
          line-height: var(--lh-body);
        }

        /* ─── Stars ─── */
        .tm-stars {
          display: flex;
          flex-direction: row;
          gap: var(--space-1);
          height: var(--space-6);
          align-items: center;
        }

        /* ═══════════════════════════════════════
         * TABLET — ≤1024px
         * ═══════════════════════════════════════ */
        @media (max-width: 1024px) {
          .tm-section {
            padding-right: var(--space-section-px);
          }

          .tm-header-row {
            padding-right: 0;
          }

          .tm-subtitle {
            width: 100%;
          }

          .tm-cards-track {
            padding-right: 0;
          }
        }

        /* ═══════════════════════════════════════
         * MOBILE — ≤640px
         * ═══════════════════════════════════════ */
        @media (max-width: 640px) {
          .tm-header-row {
            padding-right: var(--space-section-px);
            padding-top: var(--space-6);
            padding-bottom: var(--space-6);
          }

          .tm-cards-track {
            padding-right: var(--space-section-px);
          }

          .tm-card {
            width: 280px;
            min-width: 280px;
            padding: var(--space-5);
          }
        }
      `}</style>
    </>
  );
}
