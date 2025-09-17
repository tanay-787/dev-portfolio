

const colorCache = new Map<string, { light: string; dark: string }>();

export function getTailwindColor(className: string): { light: string; dark: string } {
 
  // Light
  const elLight = document.createElement("div");
  elLight.className = className;
  document.body.appendChild(elLight);
  const light = normalizeToRGB(getComputedStyle(elLight).color);
  document.body.removeChild(elLight);

  // Dark (simulate dark mode locally)
  const darkContainer = document.createElement("div");
  darkContainer.classList.add("dark");
  document.body.appendChild(darkContainer);

  const elDark = document.createElement("div");
  elDark.className = className;
  darkContainer.appendChild(elDark);
  const dark = normalizeToRGB(getComputedStyle(elDark).color);

  document.body.removeChild(darkContainer);

  return { light, dark };
}


function normalizeToRGB(color: string): string {
  const ctx = document.createElement("canvas").getContext("2d");
  if (!ctx) throw new Error("Canvas not supported");
  ctx.fillStyle = color;
  return ctx.fillStyle; // browser always gives rgb(...) or rgba(...)
}

// Sub Utility fn

function cssColorToHex(color: string): string {
  // Create a dummy canvas context
  const ctx = document.createElement("canvas").getContext("2d");
  if (!ctx) throw new Error("Canvas not supported");

  // Set fillStyle → browser forces normalization to rgb/rgba
  ctx.fillStyle = color;

  // ctx.fillStyle is now always "rgb(r, g, b)" or "#rrggbb"
  const normalized = ctx.fillStyle as string;

  if (normalized.startsWith("#")) {
    return normalized; // already hex
  }

  // Parse "rgb(r, g, b)" or "rgba(r, g, b, a)"
  const m = normalized.match(/\d+/g);
  if (!m) throw new Error(`Unable to parse color: ${normalized}`);

  const [r, g, b] = m.map(Number);
  return (
    "#" +
    [r, g, b]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
  );
}
