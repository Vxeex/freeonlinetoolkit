// Scroll-triggered reveal animations using IntersectionObserver
export function initScrollAnimations(): void {
  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animEls = document.querySelectorAll('.animate-in');
  if (!animEls.length) return;

  if (prefersReducedMotion) {
    animEls.forEach((el) => el.classList.add('visible'));
    return;
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;

            // Stagger delay for grid children (50ms per item)
            const parent = el.parentElement;
            if (parent) {
              const siblings = Array.from(parent.querySelectorAll('.animate-in'));
              const index = siblings.indexOf(el);
              if (index > 0) {
                el.style.transitionDelay = `${index * 50}ms`;
              }
            }

            el.classList.add('visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    animEls.forEach((el) => observer.observe(el));
  } else {
    animEls.forEach((el) => el.classList.add('visible'));
  }
}
