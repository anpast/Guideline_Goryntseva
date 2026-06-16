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
  const menuToggle = document.getElementById('menuToggle');
  const sidebar    = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay'); // ← переименовано

  if (menuToggle && sidebar && sidebarOverlay) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      sidebarOverlay.classList.toggle('open');
    });
    sidebarOverlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      sidebarOverlay.classList.remove('open');
    });
    document.querySelectorAll('.sidebar nav a').forEach(link => {
      link.addEventListener('click', () => {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('open');
      });
    });
  }

  /* ─── ПОПАПЫ ЦЕЛЕВОЙ АУДИТОРИИ ───────────────── */
  const caOverlay = document.getElementById('ca-overlay'); // ← другое имя

  if (caOverlay) {
    document.querySelectorAll('.ca-card').forEach(card => {
      card.addEventListener('click', () => {
        const popupId = card.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        if (!popup) return;
        caOverlay.classList.add('open');
        popup.style.display = 'block';
        requestAnimationFrame(() => popup.classList.add('open'));
      });
    });

    function closePopups() {
      document.querySelectorAll('.ca-popup.open').forEach(p => {
        p.classList.remove('open');
        setTimeout(() => { p.style.display = 'none'; }, 300);
      });
      caOverlay.classList.remove('open');
    }

    caOverlay.addEventListener('click', closePopups);
    document.querySelectorAll('.ca-popup-close').forEach(btn => {
      btn.addEventListener('click', closePopups);
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closePopups();
    });
  }

  /* ─── АККОРДЕОН ──────────────────────────────── */
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.accordion-item');
    const isOpen = item.classList.contains('open');
    // Закрываем все
    document.querySelectorAll('.accordion-item.open').forEach(el => {
      el.classList.remove('open');
    });
    // Открываем кликнутый если был закрыт
    if (!isOpen) item.classList.add('open');
  });
});
});