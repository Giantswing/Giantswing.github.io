const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 100,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
