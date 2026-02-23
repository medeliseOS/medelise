import Button from '@ui/Button';
import { Heart, ArrowRight, Send, Download, Stethoscope } from 'lucide-react';

/**
 * Button Demo Page — showcases all variants, states, and responsive behavior.
 * Visit: http://localhost:3000/button-demo
 */
export default function ButtonDemoPage() {
    return (
        <main
            style={{
                maxWidth: 960,
                margin: '0 auto',
                padding: '64px 24px',
                fontFamily: 'var(--font-body)',
                color: 'var(--color-primary)',
                display: 'flex',
                flexDirection: 'column',
                gap: 64,
            }}
        >
            {/* ── Title ── */}
            <header>
                <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
                    Button Component Demo
                </h1>
                <p style={{ fontSize: 16, color: 'var(--color-text-muted)' }}>
                    Resize the browser to see responsive tokens in action (Mobile &lt;768px
                    / Tablet 768–1023px / Desktop ≥1024px).
                </p>
            </header>

            {/* ── §1 Variants ── */}
            <section>
                <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24 }}>
                    1. Variants
                </h2>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 16,
                        alignItems: 'center',
                    }}
                >
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                </div>
            </section>

            {/* ── §2 With Icons ── */}
            <section>
                <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24 }}>
                    2. With Icons
                </h2>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 16,
                        alignItems: 'center',
                    }}
                >
                    <Button variant="primary" iconLeft={<Heart size={18} />}>
                        Favorite
                    </Button>
                    <Button variant="secondary" iconRight={<ArrowRight size={18} />}>
                        Continue
                    </Button>
                    <Button variant="outline" iconLeft={<Send size={18} />}>
                        Send Message
                    </Button>
                    <Button
                        variant="primary"
                        iconLeft={<Stethoscope size={18} />}
                        iconRight={<ArrowRight size={18} />}
                    >
                        Book Now
                    </Button>
                </div>
            </section>

            {/* ── §3 States ── */}
            <section>
                <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24 }}>
                    3. States
                </h2>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 16,
                        alignItems: 'center',
                    }}
                >
                    <Button variant="primary">Normal</Button>
                    <Button variant="primary" isLoading>
                        Loading
                    </Button>
                    <Button variant="primary" disabled>
                        Disabled
                    </Button>
                    <Button variant="outline" isLoading>
                        Loading
                    </Button>
                    <Button variant="outline" disabled>
                        Disabled
                    </Button>
                </div>
            </section>

            {/* ── §4 Full Width ── */}
            <section>
                <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24 }}>
                    4. Full Width
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <Button variant="primary" isFullWidth>
                        Intră în contul tău Medelise
                    </Button>
                    <Button
                        variant="secondary"
                        isFullWidth
                        iconLeft={<Download size={18} />}
                    >
                        Download Report
                    </Button>
                    <Button variant="outline" isFullWidth>
                        Outline Full Width
                    </Button>
                </div>
            </section>

            {/* ── §5 Responsive Tokens ── */}
            <section
                style={{
                    padding: 24,
                    background: 'var(--color-surface)',
                    borderRadius: 12,
                }}
            >
                <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
                    5. Responsive Token Reference
                </h2>
                <table
                    style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        fontSize: 14,
                    }}
                >
                    <thead>
                        <tr
                            style={{
                                borderBottom: '2px solid var(--color-surface-border)',
                                textAlign: 'left',
                            }}
                        >
                            <th style={{ padding: '8px 12px' }}>Property</th>
                            <th style={{ padding: '8px 12px' }}>Desktop ≥1024</th>
                            <th style={{ padding: '8px 12px' }}>Tablet 768–1023</th>
                            <th style={{ padding: '8px 12px' }}>Mobile &lt;768</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            ['Height', '48px', '48px', '56px'],
                            ['Padding X', '24px', '20px', '16px'],
                            ['Font Size', '16px', '16px', '18px'],
                            ['Border Radius', '8px', '8px', '12px'],
                        ].map(([prop, d, t, m]) => (
                            <tr
                                key={prop}
                                style={{
                                    borderBottom: '1px solid var(--color-surface-border)',
                                }}
                            >
                                <td style={{ padding: '8px 12px', fontWeight: 500 }}>{prop}</td>
                                <td style={{ padding: '8px 12px' }}>{d}</td>
                                <td style={{ padding: '8px 12px' }}>{t}</td>
                                <td style={{ padding: '8px 12px' }}>{m}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </main>
    );
}
