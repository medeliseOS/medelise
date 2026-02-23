'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@ui/Button';

/* ═══════════════════════════════════════════════════════════
 * NewsletterSection — "Intră în comunitatea Medelise, a celor
 * care văd sănătatea altfel."
 * Email subscription CTA — side-by-side layout on desktop.
 * ═══════════════════════════════════════════════════════════ */

interface NewsletterSectionProps {
  heading?: string;
  description?: string;
}

export default function NewsletterSection({
  heading = 'Intră în comunitatea Medelise, a celor care văd sănătatea altfel.',
  description = 'Viitorul sănătății este personalizat, digital și uman. Noi construim acest viitor pas cu pas, alături de cei care cred că medicina înseamnă mai mult decât rețete și protocoale.',
}: NewsletterSectionProps) {
  const [email, setEmail] = useState('');

  return (
    <>
      <section className="newsletter-section" aria-labelledby="newsletter-heading">
        <div className="newsletter-outer">
          <div className="newsletter-container">
            <div className="newsletter-card">
              <div className="newsletter-row">
                {/* ─── LEFT — Text ─── */}
                <div className="newsletter-text">
                  <h2 id="newsletter-heading" className="newsletter-heading">
                    {heading}
                  </h2>
                  <p className="newsletter-description">
                    {description}
                  </p>
                </div>

                {/* ─── RIGHT — Image + Form ─── */}
                <div className="newsletter-right">
                  {/* Girl illustration */}
                  <div className="newsletter-illustration">
                    <Image
                      src="/images-medelise/md-quality/md-img-girl-model.webp"
                      alt="Medelise community"
                      width={174}
                      height={87}
                    />
                  </div>

                  {/* Subscribe Form */}
                  <form
                    className="newsletter-form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      /* handle subscribe */
                    }}
                  >
                    <div className="newsletter-input-wrap">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your e-mail address"
                        className="newsletter-input"
                        aria-label="Email address"
                        required
                      />
                    </div>
                    <Button variant="primary" isFullWidth type="submit">
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ═══════════════════════════════════════
         * §1  BASE / MOBILE
         * ═══════════════════════════════════════ */
        .newsletter-section {
          width: 100%;
          background: white;
        }

        .newsletter-outer {
          width: 100%;
          padding: 48px var(--space-section-px-sm);
        }

        .newsletter-container {
          width: 100%;
        }

        .newsletter-card {
          width: 100%;
        }

        .newsletter-row {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .newsletter-text {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .newsletter-heading {
          color: var(--color-primary);
          font-size: 24px;
          font-weight: 600;
          line-height: 32px;
          margin: 0;
        }

        .newsletter-description {
          color: var(--color-primary);
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          margin: 0;
        }

        .newsletter-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
        }

        .newsletter-illustration {
          display: none;
        }

        .newsletter-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .newsletter-input-wrap {
          width: 100%;
        }

        .newsletter-input {
          width: 100%;
          padding: 10px 12px;
          background: var(--color-surface-card);
          border-radius: 8px;
          border: none;
          color: var(--color-primary);
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          outline: none;
          transition: box-shadow 0.2s ease;
        }

        .newsletter-input::placeholder {
          color: var(--color-primary);
          opacity: 0.5;
        }

        .newsletter-input:focus {
          box-shadow: 0 0 0 2px var(--color-accent);
        }

        /* ═══════════════════════════════════════
         * §2  TABLET ≥641px
         * ═══════════════════════════════════════ */
        @media (min-width: 641px) {
          .newsletter-outer {
            padding: 64px var(--space-section-px-md);
          }

          .newsletter-row {
            gap: 40px;
          }

          .newsletter-text {
            gap: 16px;
          }

          .newsletter-illustration {
            display: block;
            width: 174px;
            height: 87px;
          }

          .newsletter-heading {
            font-size: 28px;
            line-height: 36px;
          }

          .newsletter-description {
            font-size: 18px;
            line-height: 28px;
          }

          .newsletter-right {
            gap: 0;
          }

          .newsletter-form {
            flex-direction: row;
            align-items: flex-start;
            gap: 16px;
          }

          .newsletter-input-wrap {
            width: 320px;
            flex-shrink: 0;
          }
        }

        /* ═══════════════════════════════════════
         * §3  DESKTOP ≥1025px
         * ═══════════════════════════════════════ */
        @media (min-width: 1025px) {
          .newsletter-outer {
            padding: 64px var(--space-section-px-lg);
          }

          .newsletter-card {
            padding: 64px 0;
          }

          .newsletter-row {
            flex-direction: row;
            align-items: center;
            gap: 64px;
          }

          .newsletter-text {
            flex: 1 1 0;
            gap: 16px;
          }

          .newsletter-heading {
            font-size: 36px;
            line-height: 44px;
          }

          .newsletter-description {
            font-size: 18px;
            line-height: 28px;
          }

          .newsletter-right {
            flex: 1 1 0;
            gap: 0;
          }

          .newsletter-form {
            flex-direction: column;
            gap: 16px;
          }

          .newsletter-input-wrap {
            width: 100%;
            flex-shrink: 1;
          }
        }
      `}</style>
    </>
  );
}
