import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { site } from '@/content/site';

export function ProjectsSection() {
  return (
    <section id="projects" data-section-title="Projects" className="section-shell reveal-section">
      <div className="mb-10 max-w-2xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">Projects</p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Projects</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {site.projects.map((project) => (
          <Card key={project.name} className="group min-h-72 transition-colors hover:border-accent/50">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <CardTitle>{project.name}</CardTitle>
                <Badge>{project.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex min-h-48 flex-col justify-between">
              <p className="text-sm leading-6 text-muted-foreground">{project.summary}</p>
              <div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex text-sm font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                  View →
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
