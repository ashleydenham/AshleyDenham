import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { site } from '@/content/site';

export function Hero() {
  return (
    <section id="top" data-section-title="Home" className="site-container flex min-h-[calc(100svh-4rem)] items-center py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[1fr_15rem] lg:items-center">
        <div className="text-center lg:text-left">
          <div className="mx-auto mb-8 h-20 w-20 overflow-hidden rounded-full border bg-muted lg:mx-0">
            <Image src={site.hero.image} alt="Ashley Denham" width={160} height={160} priority className="h-full w-full object-cover" />
          </div>
          <h1 className="font-display text-6xl font-semibold tracking-[-0.055em] text-balance sm:text-7xl lg:text-8xl">
            {site.hero.title}
          </h1>
          <p className="mt-6 text-xl font-medium leading-8 text-balance text-foreground sm:text-2xl">{site.hero.positioning}</p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground lg:mx-0 sm:text-lg">{site.hero.intro}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button asChild size="lg">
              <a href="#projects">View projects</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">{site.hero.caption}</p>
        </div>

        <aside className="hidden rounded-2xl border bg-card p-5 text-sm text-muted-foreground shadow-subtle lg:block">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Adelaide</p>
          <p className="mt-3 leading-6">Born and raised here. Studying engineering, building systems, and looking at Adelaide-based or remote roles.</p>
        </aside>
      </div>
    </section>
  );
}
