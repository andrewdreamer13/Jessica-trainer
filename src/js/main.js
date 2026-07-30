import "../scss/main.scss";
import "virtual:svg-icons-register";

import gsap from "gsap";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { optionsData } from "./data/selectOptions.js";
import { phoneMasks } from "./data/phoneMasks.js";

import { initPreloader } from "./components/preloader.js";
import { initBurger } from "./components/burger.js";
import { initAppearance } from "./animations/appearance.js";
import { initModal } from "./components/modalManager.js";
import { initLazySvg } from "./services/lazySvgLoader.js";
import { initAccordion } from "./components/accordion.js";
import { initFocusManager } from "./services/focusManager.js";
// import {initUpButton} from "./components/upButton/js";
import { initSliders, testimonialsSwiper } from "./components/sliders.js";
import { initTabs } from "./components/tabs.js";
import { initCookieBanner } from "./components/cookieBanner.js";
import { initCustomSelect } from "./components/customSelect.js";
import { initFormHandler } from "./forms/formHandler.js";
import { initResizableSwiper } from "./services/matchMediaSlider.js";
import { initMaps } from "./services/lazyMapLoader.js";
import { initVideoLoader } from "./services/lazyVideoLoader.js";
import { splitTextIntoSpans } from "./services/splitText.js";
import { initExpandableText } from "./services/expandableText.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("The project works");
  initPreloader();
  initBurger("#burger", ".nav", ".nav__list");
  initSliders();
  initModal();
  initAppearance();
  initAccordion("#faq");
  initFocusManager();
  initTabs("#tabs-1");
  initCookieBanner();
  initCustomSelect("#cities", optionsData.cities);
  initCustomSelect("#countries", optionsData.countries);
  initFormHandler("#contact-form");
  initResizableSwiper();
  initMaps();
  initVideoLoader();
  splitTextIntoSpans(".header__title");
  // initUpButton(".footer__up-button");
  // initExpandableText("[data-expandable]");
  initExpandableText("[data-expandable]", {
    onToggle: () => {
      if (!testimonialsSwiper) return;

      testimonialsSwiper.updateAutoHeight(300);
    },
  });

  (async () => {
    try {
      await import("./services/svgTemplates.js");
      initLazySvg();
    } catch (error) {
      console.error("SVG template lazy-loading error:", error);
      initLazySvg();
    }
  })();
});
