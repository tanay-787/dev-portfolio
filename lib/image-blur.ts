export function getBlurDataURL(width: number = 8, height: number = 8): string {
  const shimmer = (w: number, h: number) => `
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shimmer" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="hsl(var(--muted))" />
          <stop offset="50%" stop-color="hsl(var(--muted-foreground) / 0.08)" />
          <stop offset="100%" stop-color="hsl(var(--muted))" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#shimmer)" />
    </svg>
  `;
  
  const base64 = Buffer.from(shimmer(width, height)).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}
