import { Card, CardContent } from '@/components/ui/card';
import { site } from '@/content/site';

export function ContactSection() {
  return (
    <section id="contact" data-section-title="Contact" className="section-shell reveal-section">
      <div className="mb-10 max-w-2xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">Contact</p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Get in touch</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {site.contact.links.map((link) => {
          const Icon = link.icon;
          return (
            <a key={link.label} className="focus-ring rounded-2xl" href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
              <Card className="h-full transition-colors hover:border-accent/50">
                <CardContent className="flex h-full items-start gap-4 p-6">
                  <span className="rounded-full border bg-muted p-3 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-semibold text-foreground">{link.label}</span>
                    <span className="mt-1 block break-all text-sm text-muted-foreground">{link.value}</span>
                  </span>
                </CardContent>
              </Card>
            </a>
          );
        })}
      </div>
      <p className="mt-6 max-w-3xl text-sm leading-6 text-muted-foreground">{site.contact.note}</p>
    </section>
  );
}
