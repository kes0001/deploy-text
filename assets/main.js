/* ─── ENVIRONMENT DETECTION ──────────────────────────────────────── */
function detectEnv() {
  const h = location.hostname;
  if (h.includes('vercel.app') || h.endsWith('.vercel.com')) return 'Vercel';
  if (h.includes('netlify.app') || h.endsWith('.netlify.com')) return 'Netlify';
  if (h.includes('github.io')) return 'GitHub Pages';
  if (h === 'localhost' || h === '127.0.0.1' || h === '') return 'Local Dev';
  return h || 'Unknown';
}

function formatJaDate(d) {
  return d.toLocaleString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
}

/* ─── STATUS POPULATION ──────────────────────────────────────────── */
window.addEventListener('load', () => {
  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  set('env-value', detectEnv());
  set('build-time', formatJaDate(new Date()));
  set('ua-value', navigator.userAgent);

  const nav = performance.getEntriesByType('navigation')[0];
  if (nav && nav.loadEventEnd > 0) {
    set('perf-value', `${Math.round(nav.loadEventEnd - nav.startTime)} ms`);
  } else {
    /* Fallback: measure from performance.now() at load event */
    set('perf-value', `${Math.round(performance.now())} ms`);
  }
});

/* ─── SCROLL REVEAL ──────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -32px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
