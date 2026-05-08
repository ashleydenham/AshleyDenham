'use client';

import { useEffect } from 'react';

const baseTitle = 'Ashley Denham';

export function ScrollEffects() {
  useEffect(() => {
    document.documentElement.classList.add('js');

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealSections = Array.from(document.querySelectorAll<HTMLElement>('.reveal-section'));

    if (prefersReduced) {
      revealSections.forEach((section) => section.classList.add('is-visible'));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      revealSections.forEach((section) => revealObserver.observe(section));
    }

    const titleSections = Array.from(document.querySelectorAll<HTMLElement>('[data-section-title]'));
    const updateTitle = () => {
      const current =
        titleSections
          .map((section) => ({ section, distance: Math.abs(section.getBoundingClientRect().top - 96) }))
          .sort((a, b) => a.distance - b.distance)[0]?.section || titleSections[0];
      const title = current?.getAttribute('data-section-title');
      if (title) document.title = title === 'Home' ? `${baseTitle} — Adelaide-based engineer` : `${baseTitle} — ${title}`;
    };

    updateTitle();
    window.addEventListener('scroll', updateTitle, { passive: true });

    return () => {
      document.documentElement.classList.remove('js');
      window.removeEventListener('scroll', updateTitle);
    };
  }, []);

  return null;
}
