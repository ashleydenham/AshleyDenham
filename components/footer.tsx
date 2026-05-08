import { site } from '@/content/site';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="site-container grid gap-5 py-8 text-sm text-muted-foreground lg:grid-cols-[1fr_auto_1.5fr] lg:items-start">
        <p>© 2026 Ashley Denham</p>
        <p>{site.footer.build}</p>
        <p className="lg:text-right">{site.footer.country}</p>
      </div>
    </footer>
  );
}
