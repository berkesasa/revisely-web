import { getLocale, getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default async function Home() {
  const locale = await getLocale();
  const t = await getTranslations();

  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      <Navbar
        locale={locale}
        translations={{
          features: t('nav.features'),
          howItWorks: t('nav.howItWorks'),
          download: t('nav.download'),
        }}
      />

      <Hero
        translations={{
          badge: t('hero.badge'),
          title: t('hero.title'),
          titleHighlight: t('hero.titleHighlight'),
          titleEnd: t('hero.titleEnd'),
          description: t('hero.description'),
          cta: t('hero.cta'),
          ctaSecondary: t('hero.ctaSecondary'),
        }}
      />

      <Features
        translations={{
          title: t('features.title'),
          titleHighlight: t('features.titleHighlight'),
          feature1: {
            title: t('features.feature1.title'),
            titleHighlight: t('features.feature1.titleHighlight'),
            description: t('features.feature1.description'),
          },
          feature2: {
            title: t('features.feature2.title'),
            titleHighlight: t('features.feature2.titleHighlight'),
            titleEnd: t('features.feature2.titleEnd'),
            description: t('features.feature2.description'),
          },
          feature3: {
            title: t('features.feature3.title'),
            titleHighlight: t('features.feature3.titleHighlight'),
            description: t('features.feature3.description'),
          },
          feature4: {
            title: t('features.feature4.title'),
            titleHighlight: t('features.feature4.titleHighlight'),
            description: t('features.feature4.description'),
          },
        }}
      />

      <HowItWorks
        translations={{
          title: t('howItWorks.title'),
          titleHighlight: t('howItWorks.titleHighlight'),
          step1: {
            title: t('howItWorks.step1.title'),
            description: t('howItWorks.step1.description'),
          },
          step2: {
            title: t('howItWorks.step2.title'),
            description: t('howItWorks.step2.description'),
          },
          step3: {
            title: t('howItWorks.step3.title'),
            description: t('howItWorks.step3.description'),
          },
        }}
      />

      <Benefits
        translations={{
          title: t('benefits.title'),
          titleHighlight: t('benefits.titleHighlight'),
          benefit1: {
            title: t('benefits.benefit1.title'),
            description: t('benefits.benefit1.description'),
          },
          benefit2: {
            title: t('benefits.benefit2.title'),
            description: t('benefits.benefit2.description'),
          },
          benefit3: {
            title: t('benefits.benefit3.title'),
            description: t('benefits.benefit3.description'),
          },
          benefit4: {
            title: t('benefits.benefit4.title'),
            description: t('benefits.benefit4.description'),
          },
        }}
      />

      <CTASection
        translations={{
          title: t('cta.title'),
          titleHighlight: t('cta.titleHighlight'),
          description: t('cta.description'),
          button: t('cta.button'),
        }}
      />

      <Footer
        translations={{
          description: t('footer.description'),
          rights: t('footer.rights'),
          madeWith: t('footer.madeWith'),
          by: t('footer.by'),
        }}
      />
    </main>
  );
}
