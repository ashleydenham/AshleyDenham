import type { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { site } from '@/content/site';

function SidebarBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-muted-foreground">{children}</div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" data-section-title="About" className="section-shell reveal-section">
      <div className="mb-10 max-w-2xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">About</p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">About</h2>
      </div>
      <div className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:items-start">
        <div className="space-y-6 text-base leading-8 text-muted-foreground sm:text-lg">
          {site.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Card className="lg:sticky lg:top-24">
          <CardContent className="grid gap-8 p-6">
            <SidebarBlock title="Location">
              <p>{site.about.sidebar.location}</p>
            </SidebarBlock>
            <SidebarBlock title="Availability">
              <div className="grid gap-2">
                {site.about.sidebar.availability.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </SidebarBlock>
            <SidebarBlock title="What I'm looking for">
              <p>{site.about.sidebar.lookingFor}</p>
            </SidebarBlock>
            <SidebarBlock title="Memberships">
              <ul className="grid gap-2">
                {site.about.sidebar.memberships.map((membership) => (
                  <li key={membership}>{membership}</li>
                ))}
              </ul>
            </SidebarBlock>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
