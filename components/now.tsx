import { site } from '@/content/site';

export function NowSection() {
  return (
    <section id="now" data-section-title="Now" className="section-shell reveal-section">
      <div className="rounded-3xl border bg-muted/55 p-6 sm:p-8 lg:p-10">
        <div className="border-l-2 border-accent pl-5">
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{site.now.title}</h2>
          <ul className="mt-7 grid gap-4 text-base leading-7 text-muted-foreground sm:text-lg">
            {site.now.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{site.now.lastUpdated}</p>
        </div>
      </div>
    </section>
  );
}
