/* ═══════════════════════════════════════════════
   ВЕШАЛКА — graphic.js
   Переключение паттернов по кнопке «Сменить цвет»
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  const images = Array.from(document.querySelectorAll('.graph-patt-img'));
  const btn    = document.getElementById('pattToggle');

  if (!images.length || !btn) return;

  let current = 0;

  btn.addEventListener('click', () => {
    // Убираем активный с текущего
    images[current].classList.remove('active');

    // Следующий по кругу
    current = (current + 1) % images.length;

    // Показываем следующий
    images[current].classList.add('active');
  });

});