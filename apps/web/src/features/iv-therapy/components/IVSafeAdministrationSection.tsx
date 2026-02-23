'use client';

export default function IVSafeAdministrationSection() {
    return (
        <>
            <style jsx>{`
                .safe-admin-section {
                    width: 100%;
                    background: var(--Color-White, white);
                    font-family: 'Montserrat', sans-serif;
                    color: #213170;
                    text-align: center;
                }

                .breakout {
                    width: calc(100% + 32px);
                    margin-left: -16px;
                    margin-right: -16px;
                }

                .content-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    padding: 48px 16px;
                    gap: 16px;
                }

                .text-block {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    gap: 8px;
                }

                .hero-image {
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                }

                .image-wrapper {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }

                .splash-img {
                    width: 100%;
                    max-width: 668.63px;
                    height: auto;
                    object-fit: contain;
                }

                /* Typography */
                h2 { font-weight: 600; margin: 0; font-size: 24px; line-height: 32px; }
                h3 { font-weight: 600; margin: 16px 0 12px; font-size: 16px; line-height: 24px; }
                p  { font-weight: 400; margin: 0; width: 100%; font-size: 16px; line-height: 24px; }

                /* ═══ TABLET (768px – 1279px) ═══ */
                @media (min-width: 768px) {
                    .breakout {
                        width: calc(100% + 64px);
                        margin-left: -32px;
                        margin-right: -32px;
                    }
                    .content-container { padding: 64px 32px; gap: 24px; }
                    .text-block { gap: 12px; }
                    h2 { font-size: 28px; line-height: 36px; margin-bottom: 8px; }
                    h3 { font-size: 18px; line-height: 28px; margin-top: 32px; margin-bottom: 12px; }
                    p  { font-size: 18px; line-height: 28px; }
                }

                /* ═══ DESKTOP (≥1280px) ═══ */
                @media (min-width: 1280px) {
                    .breakout {
                        width: calc(100% + 128px);
                        margin-left: -64px;
                        margin-right: -64px;
                    }
                    .content-container { padding: 64px; gap: 32px; max-width: 100%; }
                    .text-block { gap: 16px; max-width: 100%; }
                    h2 { font-size: 36px; line-height: 44px; margin-bottom: 16px; }
                    h3 { font-size: 20px; line-height: 28px; margin-top: 32px; margin-bottom: 12px; }
                    p  { font-size: 18px; line-height: 28px; max-width: 1200px; }
                }
            `}</style>

            <section className="safe-admin-section breakout" aria-labelledby="safe-admin-heading">
                <div className="content-container">
                    <div className="text-block">
                        <h2 id="safe-admin-heading">Administrare sigură și controlată</h2>
                        <p>Realizată exclusiv de personal medical Medvita autorizat, cu experiență în administrarea intravenoasă și protocoale de siguranță estetică. Fiecare perfuzie este preparată în condiții sterile, utilizând ingrediente de calitate farmaceutică, conforme cu standardele internaționale. Diluția, viteza de administrare și durata tratamentului sunt personalizate în funcție de greutate, status metabolic și obiectivele estetice ale pacientului.</p>
                    </div>

                    <div className="image-wrapper">
                        <img className="splash-img" src="/images-medelise/md-iv-drip/md-iv-splah/md-img-drip-dehydration-splash.png" alt="IV Drip Splash" />
                    </div>

                    <div className="text-block">
                        <h3>Medvita înseamnă încredere:</h3>
                        <p>Fiecare tratament este adaptat nevoilor reale ale pacientului – nu administrăm formule standardizate fără o evaluare prealabilă. În echipa noastră, siguranța este la fel de importantă ca eficiența.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
