import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { site } from '@/content/site';

export function ProjectsSection() {
  return (
    <section id="projects" data-section-title="Work" className="section-shell reveal-section">
      <div className="mb-10 max-w-2xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">Selected Work</p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Things I’m building</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl">
          Production systems I use every day and open-source experiments that push what’s possible locally.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {site.projects.map((project) => (
          <Card 
            key={project.name} 
            className="group flex flex-col overflow-hidden border border-border/50 hover:border-accent/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl tracking-tight group-hover:text-accent transition-colors">
                    {project.name}
                  </CardTitle>
                  <div className="mt-1.5 flex items-center gap-2">
                    <Badge 
                      variant={project.status === 'active' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {project.status === 'active' ? 'Active' : 'In Development'}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-[15px] leading-snug text-muted-foreground">
                  {project.longDescription}
                </p>

                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.5px] text-muted-foreground mb-2">Key Capabilities</div>
                  <ul className="space-y-1.5 text-sm">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="text-xs text-muted-foreground italic">
                    {project.impact}
                  </div>
                  
                  {project.githubUrl && (
                    <Button 
                      asChild 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 px-3 text-xs gap-1.5 hover:bg-accent hover:text-accent-foreground"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          All projects are either in active daily use or under active development. Some are open source.
        </p>
      </div>
    </section>
  );
}
