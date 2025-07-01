
export function fontClamp(referencePx, { minPx = 16, maxMultiplier = 1.2 } = {}) {
  const minAllowed = referencePx * 0.8;
  if (minPx < minAllowed) minPx = minAllowed;
  if (referencePx < minPx) minPx = referencePx;
  const vw = ((referencePx / 1440) * 100).toFixed(2);
  const maxPx = (referencePx * maxMultiplier).toFixed(2);
  return `clamp(${minPx}px, ${vw}vw, ${maxPx}px)`;
}
