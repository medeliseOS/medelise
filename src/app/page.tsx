import {
  EasyCareSection,
  HeroSection,
  MissionStatsSection,
  WhyChooseUsSection,
  QualitySection,
  PatientPortalSection,
  ServiciiSection,
  TestimonialsSection,
} from '@features/homepage/components';

export default function Home() {
  return (
    <main>
      {/* ── Hero: spacing="none" — manages its own layout ────────────── */}
      <HeroSection />

      {/* ── Sections: each manages its own vertical rhythm via         ──
       *    styled-jsx using --space-section-py.                        ──
       *    The visual hierarchy follows the Proximity Rule:            ──
       *      • LARGE gap between sections (48→96px fluid)              ──
       *      • SMALL gap between sibling elements (8–24px)             ── */}
      <MissionStatsSection />
      <WhyChooseUsSection />
      <QualitySection />
      <TestimonialsSection />
      <PatientPortalSection />
      <ServiciiSection />
      <EasyCareSection />
    </main>
  );
}
