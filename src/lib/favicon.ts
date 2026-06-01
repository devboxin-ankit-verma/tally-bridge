/** Build theme-colored favicon as SVG data URL */
export function faviconDataUrl(accent: string, accentDark: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="8" fill="url(#g)"/>
  <defs>
    <linearGradient id="g" x1="4" y1="4" x2="28" y2="28">
      <stop stop-color="${accent}"/>
      <stop offset="1" stop-color="${accentDark}"/>
    </linearGradient>
  </defs>
  <path d="M6 20c5-8 15-8 20 0" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
  <circle cx="10" cy="15" r="2.5" fill="#fff"/>
  <circle cx="22" cy="15" r="2.5" fill="#fff"/>
  <rect x="13" y="9" width="6" height="10" rx="1.5" fill="#fff"/>
</svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
