document.addEventListener('DOMContentLoaded', () => {

  const slides = document.querySelectorAll('.ohr-slide');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  if (!slides.length) return;

  let current = 0;

  function showSlide(index){

    slides.forEach(slide => {
      slide.classList.remove('active');
    });

    slides[index].classList.add('active');
  }

  next.addEventListener('click', () => {

    current++;

    if(current >= slides.length){
      current = 0;
    }

    showSlide(current);

  });

  prev.addEventListener('click', () => {

    current--;

    if(current < 0){
      current = slides.length - 1;
    }

    showSlide(current);

  });

});