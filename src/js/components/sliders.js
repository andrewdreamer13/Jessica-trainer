import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import gsap from "gsap";
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
      slideChangeTransitionStart: function () {
        
        const activeSlide = this.slides[this.activeIndex];
        const quote = activeSlide.querySelector(".testimonials__text");
        const author = activeSlide.querySelector(".testimonials__author");

        gsap.fromTo(
          [quote, author].filter(Boolean),
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            delay: 0.5,
            stagger: 0.2,
            ease: "power2.out",
          },
        );
      },
    },
  });

 
};
