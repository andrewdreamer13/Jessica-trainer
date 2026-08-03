import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initExpertiseAnimation = () => {
  const cards = document.querySelectorAll(".expertise__card");
  const title = document.querySelector(".expertise__title");

  if (!cards.length) return;

  if (title) {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      duration: 0.8,
      opacity: 0,
      y: 30,
      ease: "power3.out",
      clearProps: "all",
    });
  }

  cards.forEach((card) => {
    const icon = card.querySelector(".expertise__card-icon");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    tl.from(card, {
      duration: 0.7,
      opacity: 0,
      y: 40,
      ease: "power3.out",
    });

    if (icon) {
      tl.from(
        icon,
        {
          duration: 0.8,
          opacity: 0,
          scale: 1.6,
          y: -15,
          ease: "back.out(2)",
        },
        "-=0.4",
      );
    }

    tl.eventCallback("onComplete", () => {
      gsap.set([card, icon].filter(Boolean), { clearProps: "all" });
    });
  });
};
