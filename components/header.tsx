'use client';

import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { site } from '@/content/site';
import { cn } from '@/lib/utils';

export function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isDark = mounted ? resolvedTheme === 'dark' : true;
  const nav = site.nav.map((item) => (
    <a key={item.href} className="link-underline focus-ring rounded-sm py-1 text-sm font-medium text-muted-foreground hover:text-foreground" href={item.href} onClick={() => setOpen(false)}>
      {item.label}
    </a>
  ));

  return (
    <header className="sticky top-0 z-50 border-b bg-background/78 backdrop-blur-xl supports-[backdrop-filter]:bg-background/68">
      <div className="site-container flex h-16 items-center justify-between gap-6">
        <a className="focus-ring rounded-sm font-display text-xl font-semibold tracking-tight" href="#top" aria-label="Ashley Denham home">
          Ashley Denham
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {nav}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
          >
            {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </div>

      <div className={cn('fixed inset-0 z-50 overflow-hidden md:hidden', open ? 'pointer-events-auto' : 'pointer-events-none')} aria-hidden={!open}>
        <button className={cn('absolute inset-0 bg-background/60 backdrop-blur-sm transition-opacity', open ? 'opacity-100' : 'opacity-0')} type="button" aria-label="Dismiss navigation overlay" onClick={() => setOpen(false)} />
        <div
          id="mobile-menu"
          className={cn(
            'absolute right-3 top-3 w-[min(22rem,calc(100vw-1.5rem))] rounded-2xl border bg-card p-4 shadow-subtle transition-transform duration-200',
            open ? 'translate-x-0' : 'translate-x-[calc(100%+1rem)]',
          )}
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="font-display text-lg font-semibold">Menu</p>
            <Button type="button" variant="ghost" size="icon" aria-label="Close navigation menu" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
          <nav className="grid gap-4" aria-label="Mobile navigation">
            {nav}
          </nav>
        </div>
      </div>
    </header>
  );
}
