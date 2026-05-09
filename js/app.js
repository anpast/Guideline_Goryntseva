/* ═══════════════════════════════════════════════
   ВЕШАЛКА — app.js
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── SCROLL TO TOP ──────────────────────────── */
  const scrollBtn = document.getElementById('scrollTop');

  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 300);
    });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ─── REVEAL ON SCROLL ───────────────────────── */
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => revealObserver.observe(el));

  /* ─── MOBILE SIDEBAR ─────────────────────────── */
  const menuToggle  = document.getElementById('menuToggle');
  const sidebar     = document.getElementById('sidebar');
  const overlay     = document.getElementById('sidebarOverlay');

  if (menuToggle && sidebar && overlay) {

    // Open / close on burger click
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('open');
    });

    // Close on overlay click
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    });

    // Close sidebar when a nav link is tapped (mobile)
    document.querySelectorAll('.sidebar nav a').forEach(link => {
      link.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
      });
    });
  }

});
