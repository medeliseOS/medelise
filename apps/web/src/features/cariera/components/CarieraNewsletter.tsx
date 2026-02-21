'use client';

import Image from 'next/image';

export default function CarieraNewsletter() {
    return (
        <section className="nl-section">
            <div className="nl-inner">
                <div className="nl-content">
                    {/* LEFT: Title + Description */}
                    <div className="nl-left">
                        <h2 className="nl-title">
                            Intră în comunitatea Medelise, a celor care văd sănătatea altfel.
                        </h2>
                        <p className="nl-desc">
                            Viitorul sănătății este personalizat, digital și uman. Noi construim acest viitor pas cu pas, alături de cei care cred că medicina înseamnă mai mult decât rețete și protocoale.
                        </p>
                    </div>

                    {/* RIGHT: Image + Email + Subscribe */}
                    <div className="nl-right">
                        <div className="nl-image-wrapper">
                            <Image
                                src="/icons-medelise/md-medical/doctor_result.webp"
                                alt="Medic Medelise"
                                width={174}
                                height={87}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <div className="nl-form">
                            <div className="nl-input-wrapper">
                                <input
                                    type="email"
                                    className="nl-input"
                                    placeholder="Your e-mail address"
                                />
                            </div>
                            <button type="button" className="nl-subscribe-btn">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                /* ═══════════════════════════════════
                   NEWSLETTER SECTION — DESKTOP
                   ═══════════════════════════════════ */
                .nl-section {
                    width: 100%;
                    padding: 64px;
                    background: var(--color-white, #fff);
                }

                .nl-inner {
                    width: 100%;
                }

                .nl-content {
                    width: 100%;
                    padding: 64px 0;
                    background: white;
                    overflow: hidden;
                    border-radius: 16px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 64px;
                }

                /* ── Left column ── */
                .nl-left {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .nl-title {
                    color: var(--color-primary);
                    font-size: 36px;
                    font-family: var(--font-heading);
                    font-weight: 600;
                    line-height: 44px;
                    margin: 0;
                }

                .nl-desc {
                    color: var(--color-primary);
                    font-size: 18px;
                    font-family: var(--font-heading);
                    font-weight: 500;
                    line-height: 28px;
                    margin: 0;
                }

                /* ── Right column ── */
                .nl-right {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-end;
                    gap: 24px;
                }

                .nl-image-wrapper {
                    width: 174px;
                    height: 87px;
                    position: relative;
                }

                .nl-form {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .nl-input-wrapper {
                    width: 100%;
                }

                .nl-input {
                    width: 100%;
                    padding: 10px 12px;
                    background: #F2F4F7;
                    border: none;
                    border-radius: 8px;
                    color: var(--color-primary);
                    font-size: 16px;
                    font-family: var(--font-heading);
                    font-weight: 400;
                    line-height: 24px;
                    outline: none;
                    transition: box-shadow 0.2s ease;
                }

                .nl-input::placeholder {
                    color: var(--color-primary);
                    opacity: 0.6;
                }

                .nl-input:focus {
                    box-shadow: 0 0 0 2px var(--color-primary);
                }

                .nl-subscribe-btn {
                    width: 100%;
                    padding: 10px 20px;
                    background: var(--color-primary);
                    border: none;
                    border-radius: 8px;
                    color: white;
                    font-size: 16px;
                    font-family: var(--font-heading);
                    font-weight: 600;
                    line-height: 24px;
                    cursor: pointer;
                    transition: opacity 0.2s ease;
                }

                .nl-subscribe-btn:hover {
                    opacity: 0.9;
                }

                /* ── Tablet (max 1024px) ── */
                @media (max-width: 1024px) {
                    .nl-section {
                        padding: 48px 32px;
                    }

                    .nl-content {
                        flex-direction: column;
                        gap: 32px;
                        padding: 48px 0;
                    }

                    .nl-title {
                        font-size: 28px;
                        line-height: 36px;
                    }

                    .nl-desc {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    .nl-right {
                        align-items: center;
                    }
                }

                /* ── Mobile (max 480px) ── */
                @media (max-width: 480px) {
                    .nl-section {
                        padding: 32px 16px;
                    }

                    .nl-content {
                        padding: 32px 0;
                        gap: 24px;
                    }

                    .nl-title {
                        font-size: 22px;
                        line-height: 30px;
                    }

                    .nl-desc {
                        font-size: 14px;
                        line-height: 22px;
                    }
                }
            `}</style>
        </section>
    );
}
