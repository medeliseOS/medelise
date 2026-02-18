'use client';

/* ═══════════════════════════════════════════════════════════
 * JourneySection — "Începe-ți călătoria cu Medelise"
 * CTA banner with title + description, separated by a
 * baby-blue divider line.
 * ═══════════════════════════════════════════════════════════ */

export default function JourneySection() {
  return (
    <>
      <section className="journey-section" aria-labelledby="journey-heading">
        <div className="journey-container">
          <div className="journey-inner">
            <div className="journey-content">
              <div className="journey-title-col">
                <h2 id="journey-heading" className="journey-heading">
                  &ldquo;Începe-ți călătoria cu Medelise&rdquo;
                </h2>
              </div>
              <div className="journey-desc-col">
                <p className="journey-description">
                  Alătură-te Medelise și descoperă libertatea de a-ți organiza programul exact
                  așa cum dorești!
                  <br />
                  <br />
                  Noi înțelegem cât de important este echilibrul dintre viața profesională și cea
                  personală, de aceea îți oferim flexibilitatea de a lucra exact atunci când îți
                  dorești.
                </p>
              </div>
            </div>
            <div className="journey-divider" />
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ═══════════════════════════════════════
         * §1  SECTION WRAPPER
         * ═══════════════════════════════════════ */
        .journey-section {
          width: 100%;
          background: var(--color-white);
        }

        /* ═══════════════════════════════════════
         * §2  CONTAINER
         * ═══════════════════════════════════════ */
        .journey-container {
          width: 100%;
          margin: 0 auto;
          padding: 48px 16px;
        }

        .journey-inner {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* ═══════════════════════════════════════
         * §3  CONTENT — Title + Description
         * ═══════════════════════════════════════ */
        .journey-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }

        .journey-title-col {
          width: 100%;
        }

        .journey-heading {
          color: var(--color-primary);
          font-size: 18px;
          font-weight: 600;
          line-height: 28px;
          margin: 0;
        }

        .journey-desc-col {
          width: 100%;
        }

        .journey-description {
          color: var(--color-primary);
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          margin: 0;
        }

        /* ═══════════════════════════════════════
         * §4  DIVIDER
         * ═══════════════════════════════════════ */
        .journey-divider {
          width: 100%;
          height: 1px;
          background: var(--color-secondary);
        }

        /* ═══════════════════════════════════════
         * §5  TABLET ≥641px
         * ═══════════════════════════════════════ */
        @media (min-width: 641px) {
          .journey-container {
            max-width: 704px;
            margin: 0 auto;
            padding: 0 32px;
          }

          .journey-inner {
            padding: 64px 0;
          }

          .journey-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 32px;
            padding: 40px 0;
          }

          .journey-title-col {
            width: 100%;
          }

          .journey-desc-col {
            width: 100%;
          }

          .journey-heading {
            font-size: 36px;
            line-height: 44px;
          }

          .journey-description {
            font-size: 20px;
            font-weight: 400;
            line-height: 28px;
          }
        }

        /* ═══════════════════════════════════════
         * §6  DESKTOP ≥1025px
         * ═══════════════════════════════════════ */
        @media (min-width: 1025px) {
          .journey-container {
            max-width: none;
            padding: 0 112px;
          }

          .journey-inner {
            padding: 48px 0;
            gap: 8px;
          }

          .journey-content {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 32px;
            padding: 40px 16px;
            overflow: hidden;
          }

          .journey-title-col {
            width: 596px;
            flex-shrink: 0;
          }

          .journey-desc-col {
            width: 556px;
            flex-shrink: 0;
          }
        }
      `}</style>
    </>
  );
}
