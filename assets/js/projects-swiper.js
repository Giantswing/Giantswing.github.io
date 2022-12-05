const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 0,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    //random delay
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
