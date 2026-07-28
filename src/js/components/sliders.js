import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { updatePaginationPosition } from "../services/dynamicPagination";

export let testimonialsSwiper = null;
export const initSliders = () => {
  initTestimonialsSlider();
};

const initTestimonialsSlider = () => {
  testimonialsSwiper = new Swiper(".testimonials__slider", {
    speed: 500,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".testimonials__arrow--next",
      prevEl: ".testimonials__arrow--prev",
    },
    on: {
      init: (swiper) => updatePaginationPosition(swiper),
      slideChange: (swiper) => updatePaginationPosition(swiper),
      resize: (swiper) => updatePaginationPosition(swiper),
    },
  });

 
};
