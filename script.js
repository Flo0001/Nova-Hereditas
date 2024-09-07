// Carousel functionality
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const carouselTrack = document.querySelector('.carousel-track');

rightArrow.addEventListener('click', () => {
  carouselTrack.scrollBy({ left: 320, behavior: 'smooth' });
});

leftArrow.addEventListener('click', () => {
  carouselTrack.scrollBy({ left: -320, behavior: 'smooth' });
});