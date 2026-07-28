export function updatePaginationPosition(swiper) {
  const paginationEl = swiper.pagination?.el;
  if (!paginationEl) return;

  const paginationContainer = paginationEl.parentElement;
  const activeBullet = paginationEl.querySelector(
    ".swiper-pagination-bullet-active",
  );

  if (!paginationContainer || !activeBullet) return;

  const containerWidth = paginationContainer.offsetWidth;

  const paginationWidth = paginationEl.scrollWidth;

  const bulletLeft = activeBullet.offsetLeft;
  const bulletWidth = activeBullet.offsetWidth;

  let offset = containerWidth / 2 - (bulletLeft + bulletWidth / 2);

  const minOffset = containerWidth - paginationWidth;

  if (offset > 0) {
    offset = 0;
  } else if (offset < minOffset) {
    offset = minOffset;
  }

  paginationEl.style.transform = `translateX(${offset}px)`;
}
