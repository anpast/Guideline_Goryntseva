/* ═══════════════════════════════════════════════
   ВЕШАЛКА — nositely.js
   Переключение макет ↔ визуализация для носителей
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.nosit-btn').forEach(btn => {
    const img = btn.closest('.nosit-item-img').querySelector('.nosit-img');
    if (!img) return;

    // Сохраняем оригинальный src как data-атрибут при первом запуске
    const layoutSrc = img.getAttribute('src');
    const mockSrc   = img.getAttribute('data-mock');
    let showingMock = false;

    btn.addEventListener('click', () => {
      // Плавное переключение через opacity
      img.style.opacity = '0';

      setTimeout(() => {
        if (!showingMock) {
          img.src = mockSrc;
          btn.textContent = 'Макет';
        } else {
          img.src = layoutSrc;
          btn.textContent = 'Визуализация';
        }
        showingMock = !showingMock;
        img.style.opacity = '1';
      }, 200);
    });
  });

  document.querySelectorAll('.nosit.img').forEach(img =>{
    const mockSrc = img.getAttribute('data-mock');
    if (mockSrc) {
      const preload = new Image();
      preload.src = mockSrc;
    }
  });
});