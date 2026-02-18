import HeroSection from '@features/homepage/components/HeroSection';
import MissionStatsSection from '@features/homepage/components/MissionStatsSection';
import WhyChooseUsSection from '@features/homepage/components/WhyChooseUsSection';
import QualitySection from '@features/homepage/components/QualitySection';
import PatientPortalSection from '@features/homepage/components/PatientPortalSection';
import ServiciiSection from '@features/homepage/components/ServiciiSection';
import JourneySection from '@features/homepage/components/JourneySection';
import NewsletterSection from '@features/homepage/components/NewsletterSection';
import TestimonialsSection from '@features/homepage/components/TestimonialsSection';

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
      <JourneySection />
      <NewsletterSection />
    </main>
  );
}
