import "../scss/main.scss";
import "virtual:svg-icons-register";

import gsap from "gsap";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { phoneMasks } from "./data/phoneMasks.js";
import { initPreloader } from "./components/preloader.js";
import { initModal } from "./components/modalManager.js";
import { initFocusManager } from "./services/focusManager.js";
import { initSliders, testimonialsSwiper } from "./components/sliders.js";
import { initCookieBanner } from "./components/cookieBanner.js";
import { initFormHandler } from "./forms/formHandler.js";
import { splitTextIntoSpans } from "./services/splitText.js";
import { initFirstScreenAnimation } from "./animations/firstScreenAnimation.js";
import { initExpandableText } from "./services/expandableText.js";
import {initExpertiseAnimation} from "./animations/expertiseAnimation.js";

document.addEventListener("DOMContentLoaded", () => {
  initPreloader();
  initSliders();
  initModal();
  initFocusManager();
  initCookieBanner();
  initFormHandler("#contact-form");
  splitTextIntoSpans(".header__title");
  initFirstScreenAnimation();
  initExpertiseAnimation();
  initExpandableText("[data-expandable]", {
    onToggle: () => {
      if (!testimonialsSwiper) return;

      testimonialsSwiper.updateAutoHeight(300);
    },
  });
});
