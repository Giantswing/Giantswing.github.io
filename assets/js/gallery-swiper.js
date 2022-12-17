const swiperThumbs = new Swiper(".js-gallery-swiper-thumbs", {
  spaceBetween: 10,

  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  loop: true,
  rewind: false,
  freeMode: true,
  centerInsufficientSlides: true,
  /*
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  */

  //have multiple rows
  spaceBetween: 6,
  slidesPerGroup: 1,
  slidesPerView: 5,
  slidesPerColumn: 2,
  slidesPerColumnFill: "row",
  /*

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 10,
      spaceBetween: 10,
    },
  },
  */
});

const swiperMain = new Swiper(".js-gallery-swiper", {
  fadeEffect: { crossFade: true },
  loop: true,
  rewind: false,
  spaceBetween: 0,
  speed: 500,
  effect: "fade",
  thumbs: {
    swiper: swiperThumbs,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
