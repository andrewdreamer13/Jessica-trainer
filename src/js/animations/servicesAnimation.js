import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initServicesAnimation = () => {
  const section = document.querySelector(".services");
  if (!section) return;

  const title = section.querySelector(".services__title");
  const paragraphs = section.querySelectorAll(".services__text");
  const button = section.querySelector(".services__button");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  if (title) {
    tl.from(title, {
      duration: 0.8,
      autoAlpha: 0,
      y: 30,
      ease: "power3.out",
    });
  }

  if (paragraphs.length >= 2) {
    tl.from(
      paragraphs[0],
      {
        duration: 0.8,
        autoAlpha: 0,
        x: -40,
        ease: "power3.out",
      },
      "-=0.4",
    )

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
    tl.from(paragraphs, {
      duration: 0.8,
      autoAlpha: 0,
      y: 30,
      ease: "power3.out",
    });
  }

  if (button) {
    tl.from(
      button,
      {
        duration: 0.8,
        autoAlpha: 0,
        y: 30,
        ease: "power3.out",
      },
      "-=0.4",
    );
  }
};
