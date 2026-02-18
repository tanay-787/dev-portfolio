/**
 * Get showcase image URL with fallback from .webp to .png
 * Images are stored in portfolio-content repo under {projectName}/assets/
 * @param owner - GitHub username/org (e.g., "tanay-787")
 * @param projectName - Project name (used as folder name)
 * @param branchOrTag - Branch, tag, or commit hash (default: "HEAD")
 * @returns Promise<string> - URL to showcase image
 */
export async function getShowcaseUrl(
  owner: string = "tanay-787",
  projectName: string,
  branchOrTag: string = "HEAD"
): Promise<{ image: string, video?: string }> {
  const baseUrl = `https://raw.githubusercontent.com/${owner}/portfolio-content/${branchOrTag}/${projectName}/assets`;

  // Try video first
  const videoUrl = `${baseUrl}/Showcase.mp4`;
  try {
    const videoResponse = await fetch(videoUrl, { method: 'HEAD' });
    if (videoResponse.ok) {
      // Try image next
      const webpUrl = `${baseUrl}/Showcase.webp`;
      const webpResponse = await fetch(webpUrl, { method: 'HEAD' });
      if (webpResponse.ok) {
        return { image: webpUrl, video: videoUrl };
      }
      // Fallback to PNG
      return { image: `${baseUrl}/Showcase.png`, video: videoUrl };
    }
  } catch {
    // Network error, fall through to image
  }

  // Try .webp first (new format)
  const webpUrl = `${baseUrl}/Showcase.webp`;
  try {
    const response = await fetch(webpUrl, { method: 'HEAD' });
    if (response.ok) {
      return { image: webpUrl };
    }
  } catch {
    // Network error, fall through to PNG
  }

  // Fallback to .png (legacy format)
  return { image: `${baseUrl}/Showcase.png` };
}