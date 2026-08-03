import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initContactAnimation = () => {
  const section = document.querySelector(".contact");
  if (!section) return;

  const title = section.querySelector(".contact__title");
  const text = section.querySelector(".contact__text");
  const form = section.querySelector(".form");
  const inputBoxes = section.querySelectorAll(
    ".form__input-box, .form__textarea-box",
  );
  const submitBtn = section.querySelector(".form__submit");
  const bgImage = section.querySelector(".contact__bg");

  const createTrigger = (triggerEl, start = "top 85%") => ({
    trigger: triggerEl,
    start: start,
    toggleActions: "play none none none",
  });

  if (title) {
    gsap.from(title, {
      scrollTrigger: createTrigger(title),
      duration: 0.8,
      autoAlpha: 0,
      y: 30,
      ease: "power3.out",
    });
  }

  if (text) {
    gsap.from(text, {
      scrollTrigger: createTrigger(text),
      duration: 0.8,
      autoAlpha: 0,
      y: 30,
      ease: "power3.out",
    });
  }

  if (inputBoxes.length) {
    inputBoxes.forEach((box) => {
      const input = box.querySelector(".form__input, .form__textarea");
      const label = box.querySelector(".form__label");

      const tl = gsap.timeline({
        scrollTrigger: createTrigger(box, "top 85%"),
      });

      if (input) {
        tl.from(input, {
          duration: 0.6,
          autoAlpha: 0,
          y: 30,
          ease: "power3.out",
        });
      }

      if (label) {
        tl.from(
          label,
          {
            duration: 0.5,
            autoAlpha: 0,
            y: -15,
            ease: "back.out(2)",
          },
          "-=0.3",
        );
      }
    });
  }

  if (submitBtn) {
    gsap.from(submitBtn, {
      scrollTrigger: createTrigger(submitBtn, "top 90%"),
      duration: 0.7,
      autoAlpha: 0,
      y: 30,
      ease: "power3.out",
    });
  }

  if (bgImage) {
    gsap.from(bgImage, {
      scrollTrigger: createTrigger(bgImage, "top 80%"),
      duration: 1,
      autoAlpha: 0,
      y: 40,
      ease: "power3.out",
    });
  }
};
