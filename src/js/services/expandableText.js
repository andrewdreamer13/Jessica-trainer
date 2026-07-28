const SELECTORS = {
  content: "[data-expandable-content]",
  button: "[data-expandable-button]",
};

const CLASSES = {
  expanded: "is-expanded",
  overflow: "has-overflow",
};

export function initExpandableText(selector, options = {}) {
  const { onToggle } = options;

  const items = [...document.querySelectorAll(selector)];

  if (!items.length) return;

  function updateButton(button, expanded) {
    button.textContent = expanded
      ? button.dataset.collapseLabel
      : button.dataset.expandLabel;

    button.setAttribute("aria-expanded", expanded);
  }

  function refreshItem(item) {
    const content = item.querySelector(SELECTORS.content);
    const button = item.querySelector(SELECTORS.button);

    if (!content || !button) return;

    if (item.classList.contains(CLASSES.expanded)) return;

    const originalClamp = content.style.webkitLineClamp;
    const originalOverflow = content.style.overflow;

    content.style.webkitLineClamp = "unset";
    content.style.overflow = "visible";

    const fullHeight = content.scrollHeight;

    content.style.webkitLineClamp = originalClamp;
    content.style.overflow = originalOverflow;

    const hasOverflow = fullHeight > content.clientHeight + 2;

    item.classList.toggle(CLASSES.overflow, hasOverflow);

    button.hidden = !hasOverflow;

    updateButton(button, false);
  }

  function refresh() {
    items.forEach(refreshItem);
  }

  function expand(item) {
    const button = item.querySelector(SELECTORS.button);

    item.classList.add(CLASSES.expanded);

    updateButton(button, true);

    onToggle?.(item, true);
  }

  function collapse(item) {
    const button = item.querySelector(SELECTORS.button);

    item.classList.remove(CLASSES.expanded);

    updateButton(button, false);

    refreshItem(item);

    onToggle?.(item, false);
  }

  function toggle(item) {
    item.classList.contains(CLASSES.expanded) ? collapse(item) : expand(item);
  }

  function handleClick(event) {
    const button = event.target.closest(SELECTORS.button);

    if (!button) return;

    const item = button.closest(selector);

    if (!item) return;

    toggle(item);
  }

  refresh();

  window.addEventListener("resize", refresh);
  document.addEventListener("click", handleClick);

  return {
    refresh,
    expand,
    collapse,
    toggle,

    destroy() {
      window.removeEventListener("resize", refresh);
      document.removeEventListener("click", handleClick);
    },
  };
}
