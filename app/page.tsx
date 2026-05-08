import { AboutSection } from '@/components/about';
import { ContactSection } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { NowSection } from '@/components/now';
import { SignalsSection } from '@/components/signals';
import { ProjectsSection } from '@/components/projects';
import { ScrollEffects } from '@/components/scroll-effects';

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <Header />
      <main>
        <Hero />
        <NowSection />
        <ProjectsSection />
        <SignalsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
