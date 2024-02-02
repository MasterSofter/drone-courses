import "bootstrap";
import "./scss/index.scss"
import "./js/section-program"

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let swiperMobile = new Swiper(".swiper-mobile", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  }
});

let swiperDesktop = new Swiper(".swiper-desktop", {
  loop: true,
  slidesPerView: 4,
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
});