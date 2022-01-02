'use strict';


// Hero's Heading Typing Effect

const texts = ['CREATIVE', 'PASSIONATE', 'DYNAMIC'];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';


(function type() {

  // To run the infinite loop

  // if (count === texts.length) {
  //   count = 0;
  // }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.type').textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }

  setTimeout(type, 250);

}());


// Testimonial Section Carasoul

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(-400px)';

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let currentSlide = 0;
const maxSlide = slides.length;


const goToSlide = function(slide) {
  slides.forEach(
    (s, i) => (s.style.transform =
    `translateX(${100 * (i - slide)}%)`)
  );
}


goToSlide(0);


const nextSlide = function() {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  goToSlide(currentSlide);
}


const prevSlide = function() {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }

  goToSlide(currentSlide)
}


btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
