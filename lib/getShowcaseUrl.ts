import { getRawGithubFileUrl } from "./getRawGithubFileUrl";

/**
 * Get showcase image URL with fallback from .webp to .png
 * @param owner - GitHub username/org (e.g., "tanay-787")
 * @param repo - Repository name
 * @param branchOrTag - Branch, tag, or commit hash (default: "HEAD")
 * @returns Promise<string> - URL to showcase image
 */
export async function getShowcaseUrl(
  owner: string = "tanay-787",
  repo: string,
  branchOrTag: string = "HEAD"
): Promise<string> {
  // Try .webp first (new format)
  const webpUrl = getRawGithubFileUrl(owner, repo, "Showcase.webp", branchOrTag);
  
  try {
    const response = await fetch(webpUrl, { method: 'HEAD' });
    if (response.ok) {
      return webpUrl;
    }
  } catch {
    // Network error, fall through to PNG
  }
  
  // Fallback to .png (legacy format)
  return getRawGithubFileUrl(owner, repo, "Showcase.png", branchOrTag);
}