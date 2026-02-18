'use client';

import Image from 'next/image';

/* ═══════════════════════════════════════════════════════════
 * ServiciiSection — "Servicii standard dar si personalizate"
 * 4 service cards: Asistență Medicală, Kinetoterapie,
 * Medicină de Prevenție, Analize Medicale
 * ═══════════════════════════════════════════════════════════ */

/* ─── Icon paths from public/icons-medelise (All-WebP) ─── */
const ICON_MAP: Record<string, string> = {
  stethoscope: '/icons-medelise/md-medical/md-ico-stethoscope.webp',
  check: '/icons-medelise/md-system/md-ico-check.webp',
  dna: '/icons-medelise/md-medical/md-ico-adn.webp',
  atom: '/icons-medelise/md-medical/md-ico-atom.webp',
};

const services = [
  {
    title: 'Asistență Medicală',
    description:
      'Îți oferim îngrijire medicală completă acasă: administrare de tratamente, monitorizarea stării de sănătate și intervenții specifice realizate de asistenți calificați.',
    icon: 'stethoscope',
  },
  {
    title: 'Kinetoterapie',
    description:
      'Recuperare medicală personalizată la domiciliu, prin programe de exerciții supravegheate de specialiști. Ideal pentru pacienți post-operator, seniori sau persoane cu afecțiuni cronice.',
    icon: 'check',
  },
  {
    title: 'Medicină de Prevenție',
    description:
      'Consulturi periodice, evaluări de risc și screeninguri personalizate pentru depistarea timpurie a afecțiunilor. Prevenția salvează vieți — iar noi te ajutăm să fii cu un pas înainte.',
    icon: 'dna',
  },
  {
    title: 'Analize Medicale',
    description:
      'Recoltăm probe biologice direct la domiciliul pacientului, în condiții sigure și sterile. Lucrăm cu laboratoare acreditate pentru rezultate rapide și de încredere.',
    icon: 'atom',
  },
];

export default function ServiciiSection() {
  return (
    <>
      <section className="servicii-section" aria-labelledby="servicii-heading">
        <div className="servicii-container">
          {/* ─── Header Row: Title + Description ─── */}
          <div className="servicii-header">
            <div className="servicii-title-col">
              <h2 id="servicii-heading" className="servicii-heading">
                <span>Servicii standard </span>
                <span>dar și personalizate</span>
              </h2>
            </div>
            <div className="servicii-desc-col">
              <p className="servicii-description">
                Medelise oferă servicii în următoarele domenii: medicină de prevenție, medicină
                generală, medicină de urgență și kinetoterapie.
                <br />
                Ne dorim să oferim cât mai multe servicii, astfel încât să putem satisface toate
                nevoile pacienților noștri.
              </p>
            </div>
          </div>

          {/* ─── Service Cards Grid ─── */}
          <div className="servicii-grid">
            {services.map((service) => {
              const iconSrc = ICON_MAP[service.icon];
              return (
                <article key={service.title} className="servicii-card">
                  <div className="servicii-card-content">
                    <div className="servicii-card-title-wrap">
                      <h3 className="servicii-card-title">{service.title}</h3>
                    </div>
                    <p className="servicii-card-desc">{service.description}</p>
                  </div>
                  <div className="servicii-card-icon">
                    {iconSrc && (
                      <Image
                        src={iconSrc}
                        alt={service.title}
                        width={32}
                        height={32}
                      />
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ═══════════════════════════════════════
         * §1  SECTION WRAPPER
         * ═══════════════════════════════════════ */
        .servicii-section {
          width: 100%;
          background: var(--color-white);
        }

        /* ═══════════════════════════════════════
         * §2  CONTAINER
         * ═══════════════════════════════════════ */
        .servicii-container {
          width: 100%;
          margin: 0 auto;
          padding: 48px 16px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* ═══════════════════════════════════════
         * §3  HEADER — Title + Description
         * ═══════════════════════════════════════ */
        .servicii-header {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 16px 0 32px 0;
        }

        .servicii-title-col {
          flex: 1 1 0;
        }

        .servicii-heading {
          color: var(--color-primary);
          font-size: 20px;
          font-weight: 600;
          line-height: 28px;
          margin: 0;
        }

        .servicii-desc-col {
          flex: 1 1 0;
        }

        .servicii-description {
          color: var(--color-primary);
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          margin: 0;
        }

        /* ═══════════════════════════════════════
         * §4  CARDS GRID
         * ═══════════════════════════════════════ */
        .servicii-grid {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .servicii-card {
          padding: 16px;
          background: var(--color-surface-card);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-end;
          gap: 16px;
        }

        .servicii-card-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .servicii-card-title-wrap {
          width: 100%;
          padding-bottom: 16px;
          border-bottom: 0.5px solid var(--color-primary);
          display: flex;
          align-items: center;
        }

        .servicii-card-title {
          flex: 1;
          color: var(--color-primary);
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          margin: 0;
        }

        .servicii-card-desc {
          color: var(--color-primary);
          font-size: var(--text-body);
          font-weight: 400;
          line-height: 24px;
          margin: 0;
        }

        .servicii-card-icon {
          padding: 8px;
          background: var(--color-white);
          border-radius: var(--radius-pill);
          display: inline-flex;
          justify-content: center;
          align-items: center;
        }

        .servicii-card-icon :global(svg) {
          width: 24px;
          height: 24px;
        }

        /* ═══════════════════════════════════════
         * §5  TABLET ≥641px
         * ═══════════════════════════════════════ */
        @media (min-width: 641px) {
          .servicii-container {
            max-width: 704px;
            margin: 0 auto;
            padding: 64px 32px;
            gap: 24px;
          }

          .servicii-header {
            flex-direction: column;
            gap: 16px;
            padding: 0;
          }

          .servicii-heading {
            font-size: 36px;
            line-height: 44px;
          }

          .servicii-description {
            font-size: 18px;
            line-height: 28px;
          }

          .servicii-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }

          .servicii-card {
            min-height: 396px;
            padding: 24px;
            border-radius: 16px;
            justify-content: space-between;
            gap: 32px;
            overflow: hidden;
          }

          .servicii-card-title-wrap {
            padding-bottom: 24px;
          }

          .servicii-card-title {
            font-size: 20px;
            line-height: 28px;
          }

          .servicii-card-icon {
            padding: 12px;
          }

          .servicii-card-icon :global(svg) {
            width: 32px;
            height: 32px;
          }
        }

        /* ═══════════════════════════════════════
         * §6  DESKTOP ≥1025px
         * ═══════════════════════════════════════ */
        @media (min-width: 1025px) {
          .servicii-container {
            max-width: none;
            padding: 64px 64px;
            gap: 48px;
          }

          .servicii-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }

          .servicii-heading {
            font-size: 48px;
            line-height: 60px;
          }

          .servicii-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
          }

          .servicii-card {
            min-height: auto;
          }
        }
      `}</style>
    </>
  );
}
