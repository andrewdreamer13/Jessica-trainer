import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initServicesAnimation = () => {
  const section = document.querySelector(".services");
  if (!section) return;

  const title = section.querySelector(".services__title");
  const content = section.querySelector(".services__content");
  const paragraphs = section.querySelectorAll(".services__text");
  const button = section.querySelector(".services__button");

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

  if (paragraphs.length >= 2 && content) {
    const paragraphsTl = gsap.timeline({
      scrollTrigger: createTrigger(content, "top 80%"),
    });

    paragraphsTl
      .from(paragraphs[0], {
        duration: 0.8,
        autoAlpha: 0,
        x: -40,
        ease: "power3.out",
      })
      .from(
        paragraphs[1],
        {
          duration: 0.8,
          autoAlpha: 0,
          x: 40,
          ease: "power3.out",
        },
        "-=0.6",
      );
  } else if (paragraphs.length) {
    gsap.from(paragraphs, {
      scrollTrigger: createTrigger(content || paragraphs[0]),
      duration: 0.8,
      autoAlpha: 0,
      y: 30,
      ease: "power3.out",
    });
  }

  if (button) {
    gsap.from(button, {
      scrollTrigger: createTrigger(button, "top 90%"),
      duration: 0.8,
      autoAlpha: 0,
      y: 30,
      ease: "power3.out",
    });
  }
};
