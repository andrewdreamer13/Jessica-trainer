import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initFirstScreenAnimation = () => {
  const chars = document.querySelectorAll(".header__title .word > span");

  if (!chars.length) return;

  chars.forEach((char) => {
    char.style.display = "inline-block";
  });

  const tl = gsap.timeline();

  tl.from(chars, {
    duration: 1.5,
    opacity: 0,
    x: () => (Math.random() - 0.5) * 600,
    y: () => (Math.random() - 0.5) * 400,
    rotation: () => (Math.random() - 0.5) * 180,
    scale: 2,
    stagger: {
      amount: 0.6,
      from: "random",
    },
    ease: "power4.out",
    onComplete: () => {
      gsap.set(chars, { clearProps: "transform,opacity" });
    },
  })

    .from(
      [
        ".header__logo",
        ".header__nav",
        ".header__description",
        ".header__button",
      ],
      {
        duration: 0.8,
        opacity: 0,
        y: 25,
        stagger: 0.2,
        ease: "power3.out",
        clearProps: "all",
      },
      "-=0.9",
    );
};
