import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { site, type Credential, type Membership } from '@/content/site';

function statusVariant(status: Credential['status']) {
  return status === 'current focus' ? 'default' : 'neutral';
}

function MembershipCard({ item }: { item: Membership }) {
  return (
    <a className="focus-ring block rounded-2xl" href={item.href} target="_blank" rel="noreferrer">
      <Card className="h-full transition-colors hover:border-accent/50">
        <CardContent className="grid h-full gap-4 p-5">
          <div className="flex items-start justify-between gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border bg-white p-2">
              <img src={item.icon} alt="" width="36" height="36" loading="lazy" decoding="async" className="h-full w-full object-contain" />
            </span>
            <Badge>{item.status}</Badge>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight">{item.name}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.summary}</p>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}

function CredentialCard({ item }: { item: Credential }) {
  return (
    <a className="focus-ring block rounded-2xl" href={item.href} target="_blank" rel="noreferrer">
      <Card className="h-full transition-colors hover:border-accent/50">
        <CardContent className="flex h-full gap-4 p-5">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border bg-white p-2">
            <img src={item.icon} alt="" width="36" height="36" loading="lazy" decoding="async" className="h-full w-full object-contain" />
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{item.issuer}</p>
              <Badge variant={statusVariant(item.status)}>{item.status}</Badge>
            </div>
            <h3 className="mt-3 font-display text-xl font-semibold leading-6 tracking-tight">{item.name}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.summary}</p>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}

export function SignalsSection() {
  return (
    <section id="signals" data-section-title="Signals" className="section-shell reveal-section">
      <div className="mb-10 max-w-3xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">Signals</p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Memberships and credentials</h2>
        <p className="mt-5 text-base leading-7 text-muted-foreground">
          These are here as direction-of-travel signals, not a trophy wall. The memberships show professional engagement; the certifications are a roadmap that complements the engineering degree.
        </p>
      </div>

      <div className="grid gap-12">
        <div>
          <div className="mb-4 flex items-end justify-between gap-4">
            <h3 className="font-display text-2xl font-semibold tracking-tight">Professional memberships</h3>
            <p className="hidden text-sm text-muted-foreground sm:block">Adelaide-relevant, practical, low-ego.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {site.memberships.map((item) => (
              <MembershipCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight">Certification roadmap</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {site.credentials.certifications.map((item) => (
              <CredentialCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight">Programming language evidence</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {site.credentials.languageCredentials.map((item) => (
              <CredentialCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
