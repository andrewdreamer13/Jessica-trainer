import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initTestimonialsAnimation = () => {
  const section = document.querySelector(".testimonials");
  if (!section) return;

  const title = section.querySelector(".testimonials__title");
  const slider = section.querySelector(".testimonials__slider");
  const pagination = section.querySelector(".testimonials__pagination");
  const bgImage = section.querySelector(".testimonials__bg");

  const createScrollTrigger = (triggerElement, start = "top 85%") => ({
    trigger: triggerElement,
    start: start,
    toggleActions: "play none none none",
  });

  if (title) {
    gsap.from(title, {
      scrollTrigger: createScrollTrigger(title),
      duration: 0.8,
      autoAlpha: 0,
      y: 30,
      ease: "power3.out",
    });
  }

  if (slider) {
    const sliderTl = gsap.timeline({
      scrollTrigger: createScrollTrigger(slider, "top 80%"),
    });

    sliderTl.from(slider, {
      duration: 0.9,
      autoAlpha: 0,
      y: 40,
      ease: "power3.out",
    });
  }

  if (bgImage) {
    gsap.from(bgImage, {
      scrollTrigger: createScrollTrigger(bgImage, "top 80%"),
      duration: 1.1,
      autoAlpha: 0,
      y: 40,
      ease: "power3.out",
    });
  }
};
