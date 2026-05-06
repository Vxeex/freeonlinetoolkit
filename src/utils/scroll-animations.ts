// Scroll-triggered reveal animations using IntersectionObserver
export function initScrollAnimations(): void {
  const animEls = document.querySelectorAll('.animate-in');
  if (!animEls.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    animEls.forEach((el) => observer.observe(el));
  } else {
    animEls.forEach((el) => el.classList.add('visible'));
  }
}
