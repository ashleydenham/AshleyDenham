import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="site-container grid min-h-screen place-items-center py-20">
      <section className="max-w-md rounded-3xl border bg-card p-8 text-center shadow-subtle">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight">Gone walkabout.</h1>
        <p className="mt-4 text-muted-foreground">This page seems to have gone walkabout. Head back to the homepage.</p>
        <Button asChild className="mt-7">
          <Link href="/">Back home</Link>
        </Button>
      </section>
    </main>
  );
}
