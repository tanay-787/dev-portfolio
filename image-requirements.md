# Image Requirements for Projects Section (Skiper34)

## Current Implementation Analysis

**Component:** `projects-skiper34.tsx`  
**Pattern:** Sticky cards with rotation/scale on scroll

---

## Ideal Image Specifications

### Aspect Ratio
**Recommended: 16:9 (1920x1080 or 1600x900)**

**Why:**
- Standard widescreen format
- Works well on all devices (desktop, tablet, mobile)
- Matches typical browser viewports
- Allows for horizontal composition

**Alternative ratios:**
- 2:1 (2000x1000) - More cinematic, works well for wide layouts
- 3:2 (1800x1200) - Slightly taller, good for UI screenshots

---

## Recommended Dimensions

### Primary Recommendation
**1920x1080 (1080p)**
- High enough resolution for retina displays
- Not too large (good performance)
- Standard format for screenshot tools
- ~200-400KB when optimized

### Secondary Options
- **2560x1440 (1440p)** - For very high-quality displays, larger file size
- **1600x900** - Good balance, smaller file size
- **1280x720 (720p)** - Minimum acceptable, faster loading

---


## Current Container Dimensions

```css
Height: 80vh (viewport height minus margins)
Width: 100% (max-width: 1200px on large screens)
```

**Effective display:**
- Desktop: ~1200px width × ~850px height
- Tablet: ~768px width × ~600px height  
- Mobile: ~375px width × ~500px height

---

## Image Capture Guidelines

### For Web Applications
1. **Full viewport capture** at 1920x1080
2. **Include key UI elements** - hero section or main interface
3. **Clean state** - No debug panels, lorem ipsum, or errors
4. **Consistent lighting/theme** - Consider dark mode consistency

### Tools for Capturing
- **Browser DevTools** - Screenshot full page at 1920x1080
- **Cleanshot X / Shottr** (Mac) - Precise dimensions
- **ShareX** (Windows) - Custom resolution captures
- **Firefox Screenshot** - Built-in full page capture

### Optimization
- **Format:** WebP or optimized PNG/JPG
- **Compression:** 80-85% quality (balance quality/size)
- **File size target:** 200-400KB per image

---

## Current Fallback

If images are not ready, placeholder URLs are used:
```
https://placehold.co/1920x1080/e5e5e5/666666?text=Project+Showcase
```

This maintains the correct aspect ratio during development.

---

## Object-Fit Behavior

Current CSS: `object-cover scale-125`

**What this means:**
- Image fills container completely
- Maintains aspect ratio
- Slight zoom (scale-125) for depth effect
- May crop edges slightly

**Best practices:**
- Keep important content centered
- Avoid critical info at edges (15% margin)
- Test on mobile to ensure main elements visible

---

## Next Steps

1. **Capture/recapture showcase images** at 1920x1080 (16:9)
2. **Optimize images** - Use WebP if possible
3. **Update GitHub repos** - Replace Showcase.png files
4. **Test responsive behavior** - Verify on mobile/tablet
5. **Adjust if needed** - Fine-tune scale/object-position

---

## Alternative: Dynamic Aspect Ratio Handling

If maintaining 16:9 is not feasible, we can adjust the component to handle variable aspect ratios:

```tsx
// Option 1: Fixed height with object-fit
className="h-full object-cover" // Centers and crops

// Option 2: Contain mode (shows full image with letterboxing)
className="h-full object-contain" // Shows full image

// Option 3: Dynamic aspect ratio detection
// Calculate based on image natural dimensions
```

Let me know if you want to implement flexible aspect ratio handling or stick with 16:9 standard.

---

## Questions for You

1. **Can you recapture at 1920x1080 (16:9)?** This is ideal.
2. **Current image dimensions?** Let me know if they vary widely.
3. **WebP support?** Can you export to WebP for better compression?
4. **Mobile-specific crops?** Need separate mobile versions, or one size fits all?

Once you confirm the approach, I can adjust the component accordingly.
