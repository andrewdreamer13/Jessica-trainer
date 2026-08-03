import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initFooterAnimation = () => {
  const footer = document.querySelector(".footer");
  if (!footer) return;

  const logo = footer.querySelector(".footer__logo");
  const socialsWrapper = footer.querySelector(".footer__socials");
  const socialLinks = footer.querySelectorAll(".footer__social-link");
  const copyright = footer.querySelector(".footer__copyright");
  const bgIcon = footer.querySelector(".footer__bg");

  const createTrigger = (triggerEl, start = "top 90%") => ({
    trigger: triggerEl,
    start: start,
    toggleActions: "play none none none",
  });

  if (logo) {
    gsap.from(logo, {
      scrollTrigger: createTrigger(logo),
      duration: 0.8,
      autoAlpha: 0,
      y: -30,
      ease: "power3.out",
    });
  }

  if (socialsWrapper && socialLinks.length) {
    gsap.from(socialLinks, {
      scrollTrigger: createTrigger(socialsWrapper),
      duration: 0.8,
      autoAlpha: 0,
      y: -30,
      scale: 0.8,
      stagger: 0.3,
      ease: "back.out(1.7)",
    });
  }

  if (copyright) {
    gsap.from(copyright, {
      scrollTrigger: createTrigger(copyright),
      duration: 0.8,
      autoAlpha: 0,
      y: -20,
      ease: "power3.out",
    });
  }

  if (bgIcon) {
    gsap.from(bgIcon, {
      scrollTrigger: createTrigger(bgIcon, "top 95%"),
      duration: 1.5,
      autoAlpha: 0,
      scale: 0,
      transformOrigin: "center center",
      ease: "power3.out",
    });
  }
};
