/* ═══════════════════════════════════════════════
   ВЕШАЛКА — logo.js
   Слайдер «Охранное поле»
   ═══════════════════════════════════════════════ */
 
document.addEventListener('DOMContentLoaded', () => {
 
  const slides  = Array.from(document.querySelectorAll('.ohr-slide'));
  const dots    = Array.from(document.querySelectorAll('.ohr-dot'));
  const btnPrev = document.getElementById('ohrPrev');
  const btnNext = document.getElementById('ohrNext');
 
  if (!slides.length || !btnPrev || !btnNext) return;
 
  let current = 0;
 
  function goTo(idx) {
    // снимаем активный класс со всех
    slides[current].classList.remove('active');
    dots[current] && dots[current].classList.remove('active');
 
    // вычисляем новый индекс с зацикливанием
    current = ((idx % slides.length) + slides.length) % slides.length;
 
    // ставим активный класс новому
    slides[current].classList.add('active');
    dots[current] && dots[current].classList.add('active');
  }
 
  btnNext.addEventListener('click', () => goTo(current + 1));
  btnPrev.addEventListener('click', () => goTo(current - 1));
 
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goTo(i));
  });
 
  // Свайп на мобильных
  let touchStartX = 0;
  const slidesWrap = document.querySelector('.ohr-slides');
  if (slidesWrap) {
    slidesWrap.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    slidesWrap.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        diff > 0 ? goTo(current + 1) : goTo(current - 1);
      }
    }, { passive: true });
  }
 
});