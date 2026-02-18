'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ICONS } from '@shared/constants/icons';
import { IMAGES } from '@shared/constants/images';
import Button from '@ui/Button';

/* ─── Tab Data ───────────────────────────────────────────────────────────── */
const portalTabs = [
  { icon: ICONS.ambulance, label: 'Ambulanță la domiciliu' },
  { icon: ICONS.timer, label: 'Acces 24/7 la servicii medicale' },
  {
    icon: ICONS.stethoscope,
    label: 'Specialisti medicalii disponibili în permanență',
  },
  { icon: ICONS.stethoscope, label: 'Consultații medicale acasă' },
  { icon: ICONS.box, label: 'Livrarea medicatiei la domiciliu' },
];

/* ─── Checklist Data ─────────────────────────────────────────────────────── */
const checklistItems = [
  'Monitorizează-ți starea de sănătate, accesează servicii medicale la domiciliu și programează consultații în doar câteva click-uri, direct din contul tău Medelise.',
  'Fără cozi, Fără drumuri inutile.',
  'Totul digital, accesibil și eficient.',
];

/* ═══════════════════════════════════════════════════════════════════════════
 * PatientPortalSection
 *
 * 3-breakpoint responsive layout:
 *   Mobile  <641px  — vertical tabs, single column
 *   Tablet  641–1024px — 2-col tab grid, images side-by-side, stacked content
 *   Desktop ≥1025px — horizontal tabs, image-left + info-right 2-col panel
 *
 * Governance: 100 % design-token compliant (globals.css)
 * ═══════════════════════════════════════════════════════════════════════════ */
export default function PatientPortalSection() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <section
        className="portal-section"
        aria-labelledby="portal-heading"
      >
        <div className="portal-container">
          {/* ─── Header ─── */}
          <div className="portal-header">
            <h2 id="portal-heading" className="portal-display">
              Simplu, Rapid și Sigur
            </h2>
            <p className="portal-display">Portalul Pacienților Medelise</p>
          </div>

          {/* ─── Tab Bar + Content ─── */}
          <div className="portal-body">
            {/* ─── Tab Bar ─── */}
            <nav className="portal-tabs" aria-label="Servicii portal">
              {portalTabs.map((tab, i) => (
                <button
                  key={i}
                  type="button"
                  className={`portal-tab${i === activeTab ? ' portal-tab--active' : ''}`}
                  onClick={() => setActiveTab(i)}
                >
                  <Image
                    src={tab.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="portal-tab-icon"
                    aria-hidden="true"
                  />
                  <span className="portal-tab-label">{tab.label}</span>
                </button>
              ))}
            </nav>

            {/* ─── Content Grid ─── */}
            <div className="portal-content">
              {/* Main image */}
              <div className="portal-img-main">
                <Image
                  src={IMAGES.portal.mainImage}
                  alt="Interfața portalului pacientului Medelise — gestionare completă a sănătății digitale"
                  width={588}
                  height={380}
                  className="portal-img"
                />
              </div>

              {/* Side image */}
              <div className="portal-img-side">
                <Image
                  src={IMAGES.portal.sideImage}
                  alt="Vizualizare secundară a portalului medical"
                  width={352}
                  height={220}
                  className="portal-img"
                />
              </div>

              {/* Heading */}
              <h3 className="portal-info-heading">
                Tot ce ai nevoie pentru sănătatea ta, într-un singur loc.
              </h3>

              {/* Checklist */}
              <ul className="portal-checklist" role="list">
                {checklistItems.map((item, i) => (
                  <li key={i} className="portal-check-item">
                    <span
                      className="portal-check-icon"
                      aria-hidden="true"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.125 3.375L4.875 8.625L1.875 5.625"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="portal-check-text">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link href="/login">
                <Button variant="primary" isFullWidth className="portal-cta-btn">
                  Intră în contul tău Medelise
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ═══════════════════════════════════════════════
         * §1  SECTION WRAPPER
         * ═══════════════════════════════════════════════ */
        .portal-section {
          width: 100%;
          background: var(--color-white);
          overflow: hidden;
        }

        /* ═══════════════════════════════════════════════
         * §2  CONTAINER
         * ═══════════════════════════════════════════════ */
        .portal-container {
          width: 100%;
          max-width: none;
          margin: 0 auto;
          padding: var(--space-16) var(--space-4);
          display: flex;
          flex-direction: column;
          gap: var(--space-10);
        }

        /* ═══════════════════════════════════════════════
         * §3  HEADER — Display Heading (left-aligned)
         * ═══════════════════════════════════════════════ */
        .portal-header {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .portal-display {
          color: var(--color-primary);
          font-size: var(--text-h2);
          font-weight: 600;
          line-height: 1.25;
          margin: 0;
        }

        /* ═══════════════════════════════════════════════
         * §4  BODY — Tabs + Content
         * ═══════════════════════════════════════════════ */
        .portal-body {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-6);
        }

        /* ═══════════════════════════════════════════════
         * §5  TAB BAR
         * Mobile: 2-col wrapped grid (16px icons, 12px text)
         * Tablet: 2-col wrapped grid (24px icons, 14px text)
         * Desktop: single horizontal row
         * ═══════════════════════════════════════════════ */
        .portal-tabs {
          align-self: stretch;
          display: flex;
          flex-wrap: wrap;
        }

        .portal-tab {
          flex: 1 1 50%;
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-3) var(--space-3);
          cursor: pointer;
          border: none;
          background: transparent;
          text-align: left;
          border-bottom: 0.4px solid var(--color-primary);
          transition: border-color 0.25s ease, color 0.25s ease,
                      background-color 0.2s ease, transform 0.15s ease;
        }

        .portal-tab:hover {
          background: rgba(33, 49, 112, 0.06);
        }

        .portal-tab:active {
          transform: scale(0.97);
        }

        .portal-tab--active {
          border-bottom: 1px solid var(--color-accent);
        }

        .portal-tab--active .portal-tab-label {
          color: var(--color-primary);
          font-weight: 500;
        }

        .portal-tab :global(.portal-tab-icon) {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }

        .portal-tab-label {
          flex: 1;
          color: var(--color-primary);
          font-size: var(--text-body);
          font-weight: 500;
          line-height: 1.4;
        }

        /* ═══════════════════════════════════════════════
         * §6  CONTENT GRID
         * Mobile base: single column, side image hidden
         * ═══════════════════════════════════════════════ */
        .portal-content {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        /* ─── Images ─── */
        .portal-img-main {
          width: 100%;
        }

        .portal-img-side {
          display: none;
        }

        .portal-content :global(.portal-img) {
          width: 100%;
          height: 220px;
          border-radius: var(--radius-lg);
          display: block;
          object-fit: cover;
        }

        /* ─── Info Heading ─── */
        .portal-info-heading {
          color: var(--color-primary);
          font-size: 18px;
          font-weight: 600;
          line-height: 1.43;
          margin: 0;
        }

        /* ─── Checklist ─── */
        .portal-checklist {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .portal-check-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .portal-check-icon {
          width: 16px;
          height: 16px;
          min-width: 16px;
          background: var(--color-primary);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .portal-check-text {
          flex: 1;
          color: var(--color-primary);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.33;
        }

        /* ─── CTA Button ─── */
        .portal-cta-btn {
          align-self: stretch;
          padding: var(--space-2) var(--space-8);
          background: var(--color-primary);
          border-radius: var(--radius-main);
          border: none;
          color: var(--color-white);
          font-size: var(--text-xs);
          font-weight: 500;
          line-height: 1.5;
          cursor: pointer;
          text-align: center;
          transition: all 0.2s ease-in-out;
        }

        .portal-cta-btn:hover {
          background: var(--color-primary-hover);
          box-shadow: var(--shadow-md);
          transform: translateY(-1px);
        }

        /* ═══════════════════════════════════════════════
         * §7  TABLET ≥641px
         * Scale up: larger icons/text, show side image,
         * images side-by-side, content stacked below.
         * ═══════════════════════════════════════════════ */
        @media (min-width: 641px) {
          .portal-container {
            padding: var(--space-16) var(--space-4);
          }

          .portal-display {
            line-height: 1.25;
          }

          /* --- Tabs: scale up icons & labels --- */
          .portal-tab :global(.portal-tab-icon) {
            width: var(--space-6);
            height: var(--space-6);
          }

          .portal-tab-label {
            line-height: 1.43;
          }

          /* --- Show side image --- */
          .portal-img-side {
            display: block;
            width: 100%;
          }

          /* --- Content: images row + stacked text --- */
          .portal-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
              "img-main    img-side"
              "heading     heading"
              "checklist   checklist"
              "cta         cta";
            gap: var(--space-4);
            column-gap: var(--space-8);
          }

          .portal-img-main  { grid-area: img-main; }
          .portal-img-side  { grid-area: img-side; }
          .portal-info-heading { grid-area: heading; }
          .portal-checklist { grid-area: checklist; }
          .portal-cta-btn   { grid-area: cta; }

          .portal-info-heading {
            font-size: var(--text-body);
            font-weight: 500;
            line-height: 1.5;
          }

          .portal-check-text {
            font-size: var(--text-sm);
            line-height: 1.43;
          }

          .portal-check-icon {
            width: 24px;
            height: 24px;
            min-width: 24px;
          }
        }

        /* ═══════════════════════════════════════════════
         * §8  DESKTOP ≥1025px
         * Tabs: single horizontal row.
         * Content: image-left + info-right 2-col panel.
         * ═══════════════════════════════════════════════ */
        @media (min-width: 1025px) {
          .portal-container {
            padding: var(--space-16) var(--space-section-px);
            gap: var(--space-16);
          }

          .portal-body {
            gap: var(--space-10);
          }

          .portal-display {
            line-height: var(--lh-heading);
          }

          /* --- Tabs: single row --- */
          .portal-tab {
            flex: 1 1 0;
            border-bottom: 2px solid var(--color-surface-border);
            padding-bottom: var(--space-6);
            padding-left: var(--space-3);
            align-items: flex-start;
          }

          .portal-tab--active {
            border-bottom-color: var(--color-accent);
          }

          .portal-tab-label {
            line-height: 1.4;
          }

          /* --- Content: 2-col panel (image left, info right) --- */
          .portal-content {
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
              "img-main   heading"
              "img-main   img-side"
              "img-main   checklist"
              "img-main   cta";
            gap: var(--space-6);
            column-gap: var(--space-10);
            align-items: start;
          }

          .portal-img-main {
            grid-area: img-main;
            align-self: stretch;
          }

          .portal-content :global(.portal-img) {
            height: 100%;
            max-height: none;
          }

          .portal-img-side :global(.portal-img) {
            height: 220px;
          }

          .portal-info-heading {
            font-size: var(--text-h4);
            font-weight: 600;
            line-height: var(--lh-heading);
          }

          .portal-check-text {
            font-size: var(--text-sm);
          }

          .portal-cta-btn {
            font-size: var(--text-body);
            padding: var(--space-3) var(--space-8);
          }

          .portal-check-icon {
            width: 32px;
            height: 32px;
            min-width: 32px;
          }
        }
      `}</style>
    </>
  );
}
