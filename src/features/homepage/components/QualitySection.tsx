'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IMAGES } from '@shared/constants/images';
import Button from '@ui/Button';

const checklistItems = [
  'Răspuns rapid, fără așteptare',
  'Acces simplu, oriunde te afli',
  'Fără costuri ascunse',
  'Abonament cu activare instant',
];

export default function QualitySection() {
  return (
    <>
      <section className="quality-section" aria-labelledby="quality-heading">
        <div className="quality-container">
          <div className="quality-row">
            {/* ─── Left: Text Content ─── */}
            <div className="quality-text-col">
              <div className="quality-text-content">
                <div className="quality-heading-group">
                  <h2 id="quality-heading" className="quality-heading">
                    Calitatea serviciilor ne definește
                  </h2>
                  <div className="quality-body-group">
                    <p className="quality-body">
                      Echipa noastră este formată din profesioniști cu
                      experiență: medici, asistenți medicali și terapeuți
                      specializați.
                    </p>
                    <p className="quality-body">
                      Fiecare membru al echipei noastre este dedicat
                      excelenței în îngrijire și are la dispoziție resursele
                      necesare pentru a oferi un tratament de calitate.
                    </p>

                    {/* ─── Semantic Checklist (SEO: <ul>/<li>) ─── */}
                    <ul className="quality-checklist" role="list">
                      {checklistItems.map((item, i) => (
                        <li key={i} className="quality-check-item">
                          <span className="quality-check-icon" aria-hidden="true">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.5 12.75L3.75 9L4.6275 8.1225L7.5 10.9875L13.3725 5.115L14.25 6L7.5 12.75Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          <span className="quality-check-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* ─── Email + CTA ─── */}
                <form className="quality-cta-row" onSubmit={(e) => e.preventDefault()}>
                  <div className="quality-input-wrap">
                    <label htmlFor="quality-email" className="sr-only">
                      Adresa de email
                    </label>
                    <input
                      id="quality-email"
                      type="email"
                      className="quality-email-input"
                      placeholder="Introduceti adresa dumneavoastra de email"
                    />
                  </div>
                  <Link href="/login">
                    <Button variant="primary" isFullWidth className="quality-cta-btn">
                      Intră în contul tău Medelise
                    </Button>
                  </Link>
                </form>
              </div>
            </div>

            {/* ─── Right: MacBook Mockup ─── */}
            <div className="quality-laptop-col">
              <div className="quality-laptop-wrap">
                {/* Desktop: SVG mockup (high fidelity) */}
                <Image
                  src={IMAGES.quality.macbookMockup}
                  alt="Previzualizare a platformei medicale Medelise pe un MacBook Pro — dashboard cu informații despre pacient, anatomie 3D interactivă și monitorizare a semnelor vitale"
                  width={676}
                  height={468}
                  className="quality-laptop-img quality-laptop-desktop"
                  priority
                />
                {/* Tablet/Mobile: PNG fallback */}
                <Image
                  src={IMAGES.quality.macbookTablet}
                  alt="Platforma medicală Medelise afișată pe laptop — interfață modernă cu anatomie interactivă și semnele vitale ale pacientului"
                  width={676}
                  height={468}
                  className="quality-laptop-img quality-laptop-mobile"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ═══════════════════════════════════════════════
         * §1  SECTION WRAPPER
         * Background + overflow clip
         * ═══════════════════════════════════════════════ */
        .quality-section {
          width: 100%;
          background: var(--color-white);
          overflow: hidden;
        }

        /* ═══════════════════════════════════════════════
         * §2  CONTAINER — Gutter Safety (24px mobile)
         * max-width: 1280px, centered
         * ═══════════════════════════════════════════════ */
        .quality-container {
          width: 100%;
          max-width: var(--max-width);
          margin: 0 auto;
          padding-left: var(--space-6);
          padding-right: var(--space-6);
        }

        /* ═══════════════════════════════════════════════
         * §3  ROW — Mobile-first single-column stack
         * flex-direction: column (stacked)
         * Switches to row at ≥1025px
         * ═══════════════════════════════════════════════ */
        .quality-row {
          width: 100%;
          padding-top: var(--space-section-py);
          padding-bottom: var(--space-section-py);
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: var(--space-8);
        }

        /* ═══════════════════════════════════════════════
         * §4  TEXT COLUMN
         * max-width: 70ch for readability
         * ═══════════════════════════════════════════════ */
        .quality-text-col {
          width: 100%;
          max-width: 70ch;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        .quality-text-content {
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: var(--space-8);
        }

        .quality-heading-group {
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        /* H2 — Fluid Typography: clamp(24px → 32px) via --text-2xl */
        .quality-heading {
          color: var(--color-primary);
          font-size: var(--text-h2);
          font-weight: 600;
          line-height: var(--lh-heading);
          margin: 0;
        }

        .quality-body-group {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        /* Body — Fluid Typography: clamp(18px → 20px) via --text-lg
         * line-height: 1.6 via --lh-body
         * color: --color-text (dark grey for readability) */
        .quality-body {
          color: var(--color-primary);
          font-size: var(--text-body-lg);
          font-weight: 500;
          line-height: var(--lh-body);
          margin: 0;
        }

        /* ─── Semantic Checklist (<ul>/<li>) ─── */
        .quality-checklist {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .quality-check-item {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .quality-check-icon {
          width: var(--space-8);
          height: var(--space-8);
          background: var(--color-surface-card);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--color-primary);
        }

        .quality-check-text {
          color: var(--color-primary);
          font-size: var(--text-body);
          font-weight: 500;
          line-height: var(--lh-body);
        }

        /* ─── Email + CTA (semantic <form>) ─── */
        .quality-cta-row {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: var(--space-3);
        }

        .quality-input-wrap {
          width: 100%;
        }

        /* Visually-hidden label for screen readers */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .quality-email-input {
          width: 100%;
          padding: var(--space-3) var(--space-6) var(--space-3) var(--space-6);
          background: var(--color-white);
          border-radius: var(--radius-pill);
          border: none;
          outline: 1px var(--color-input-border) solid;
          outline-offset: -1px;
          font-size: var(--text-sm);
          font-weight: 400;
          line-height: var(--lh-body);
          color: var(--color-text);
          transition: outline-color 0.2s ease;
        }

        .quality-email-input::placeholder {
          color: var(--color-text-muted);
        }

        .quality-email-input:focus {
          outline: 2px solid var(--color-primary);
          outline-offset: -2px;
        }

        .quality-cta-btn {
          padding: var(--space-3) var(--space-6);
          background: var(--color-primary);
          border-radius: var(--radius-pill);
          border: none;
          color: var(--color-white);
          font-size: var(--text-body);
          font-weight: 600;
          line-height: var(--lh-body);
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease-in-out;
          width: 100%;
          text-align: center;
        }

        .quality-cta-btn:hover {
          background: var(--color-primary-hover);
          box-shadow: var(--shadow-md);
          transform: translateY(-1px);
        }

        /* ═══════════════════════════════════════════════
         * §5  LAPTOP COLUMN
         * Image constrained: max-width 100%, height auto
         * ═══════════════════════════════════════════════ */
        .quality-laptop-col {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .quality-laptop-wrap {
          width: 100%;
          max-width: 676px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .quality-laptop-wrap :global(.quality-laptop-img) {
          width: 100%;
          max-width: 100%;
          height: auto;
          display: block;
        }

        /* Mobile default: show PNG, hide SVG */
        .quality-laptop-wrap :global(.quality-laptop-desktop) {
          display: none;
        }
        .quality-laptop-wrap :global(.quality-laptop-mobile) {
          display: block;
        }

        /* ═══════════════════════════════════════════════
         * §6  TABLET ≥641px
         * Upgrade gutter to --space-section-px
         * Inline CTA row
         * ═══════════════════════════════════════════════ */
        @media (min-width: 641px) {
          .quality-container {
            padding-left: var(--space-section-px);
            padding-right: var(--space-section-px);
          }

          .quality-cta-row {
            flex-direction: row;
            width: auto;
          }

          .quality-input-wrap {
            width: 320px;
          }

          .quality-cta-btn {
            width: auto;
          }
        }

        /* ═══════════════════════════════════════════════
         * §7  DESKTOP ≥1025px — Two-column layout
         * gap: var(--space-8) = 32px between columns
         * Laptop bleeds right edge
         * ═══════════════════════════════════════════════ */
        @media (min-width: 1025px) {
          .quality-section {
            overflow: visible;
          }

          .quality-container {
            max-width: none;
            padding-left: var(--space-section-px);
            padding-right: 0;
          }

          .quality-row {
            flex-direction: row;
            justify-content: space-between;
            align-items: stretch;
            gap: 0;
          }

          .quality-text-col {
            flex: 0 0 50%;
            max-width: 50%;
            min-width: 0;
            padding-right: 32px;
          }

          .quality-laptop-col {
            flex: 0 0 50%;
            max-width: 50%;
            width: auto;
            justify-content: flex-end;
            align-items: flex-end;
            overflow: visible;
          }

          .quality-laptop-wrap {
            max-width: none;
            justify-content: flex-end;
          }

          /* Desktop: show SVG, hide PNG */
          .quality-laptop-wrap :global(.quality-laptop-desktop) {
            display: block;
          }
          .quality-laptop-wrap :global(.quality-laptop-mobile) {
            display: none;
          }

          /* CTA form: stay stacked in desktop two-column layout
             so it doesn't overlap with the MacBook image */
          .quality-cta-row {
            flex-direction: column;
            width: 100%;
          }

          .quality-input-wrap {
            width: 100%;
          }

          .quality-cta-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
