const swiperThumbs = new Swiper(".js-gallery-swiper-thumbs", {
  loop: true,
  rewind: false,
  spaceBetween: 5,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

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
      slidesPerView: 6,
      spaceBetween: 6,
    },
    1024: {
      slidesPerView: 10,
      spaceBetween: 10,
    },
    1920: {
      slidesPerView: 15,
      spaceBetween: 10,
    },
  },
});

const swiperMain = new Swiper(".js-gallery-swiper", {
  fadeEffect: { crossFade: true },
  loop: true,
  rewind: false,
  spaceBetween: 0,
  speed: 300,
  effect: "fade",
  thumbs: {
    swiper: swiperThumbs,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  //on slide change
  on: {
    slideChange: function () {
      reset_animation();
    },
  },
});

function reset_animation() {
  var el = document.getElementById("swiper-slider-main");
  el.classList.remove("anim-panning");
  void el.offsetWidth;
  el.classList.add("anim-panning");
}
