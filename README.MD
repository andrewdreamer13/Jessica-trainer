# 🏋️ Jessica Trainer — Personal Trainer Landing Page

A modern, highly performant, and fully responsive landing page for a personal trainer. Built with a focus on fast load times, smooth UI animations (GSAP), and an accessible user experience (Accessibility & UI/UX).

---

## 🛠 Tech Stack

- **Bundler & Tooling:** Vite, ES6+ Modules.
- **Styling:** SCSS (BEM methodology), CSS Variables, Flexbox/Grid, custom `:hover` and `:focus-visible` state management.
- **Animations:** GSAP (GreenSock), ScrollTrigger.
- **Interactivity:** Native JavaScript, Web3Forms API (AJAX form submission), dynamic modal management.
- **Optimization & SEO:** SVG Sprites, custom 404 page, Cookie Banner, structured meta tags.

---

## ✨ Features & Highlights

### 1. 🎨 Design & UI/UX

- **Overhauled Hero Section:** Fully responsive layout with fluid typography and a flexible grid.
- **Interactive States:** Carefully designed `:hover` and `:focus-visible` states across interactive elements (buttons, links, inputs) to ensure seamless keyboard navigation.
- **Custom Components:** Styled cookie consent banner, customized 404 error page, and dynamic footer.
- **SVG Sprites Setup:** Optimized icon management for social media links, arrows, and UI elements.

### 2. ⚡ Dynamic Sections

- **Services:** Responsive card layout featuring specialized background setups for mobile viewports.
- **Expertise:** Modular section built with structured SCSS variables and custom grid rules.
- **Testimonials:** Dynamic scrolling pagination with expandable text cards for long reviews.

### 3. 🎬 Advanced GSAP & ScrollTrigger Animations

- **First Screen Animation:** Smooth entrance timeline triggered on page load.
- **Scroll-Driven Reveal Effects:** Sequential card reveal animations across _Expertise_, _Services_, and _Testimonials_ sections.
- **Form & Footer Triggers:** Scroll-triggered appearance for the contact section and footer links.
- **Success Modal Animations (`successAnimation.js`):** Custom `initSuccessOpenAnimation` and `initSuccessCloseAnimation` functions using GSAP timelines. Utilizes `scale` and `opacity` with automatic inline style cleanup (`clearProps`) to preserve CSS absolute centering without layout shifts.

### 4. ✉️ Contact Form & Modal Lifecycle

- Integrated with **Web3Forms API** for seamless background form submissions (AJAX).
- Safe JSON response parsing, error handling, and instant input validation clearing.
- Modal state handled via **`modalManager.js`** (body scroll locking `body.lock`, accessibility state `aria-hidden`).

---

## 📁 Project Structure

```text
├── src/
│   ├── assets/          # Images, fonts, SVG icons/sprites
│   ├── scss/            # Variables, mixins, global styles, components (BEM)
│   ├── js/
│   │   ├── modules/     # JS modules (formHandler, modalManager, successAnimation, etc.)
│   │   └── main.js      # Entry point
│   └── index.html       # Primary HTML template with SEO configurations
├── 404.html             # Custom 404 error page
├── vite.config.js       # Vite configuration
└── package.json
```
