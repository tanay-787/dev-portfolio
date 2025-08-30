// utils/getRawGithubFileUrl.ts

/**
 * Construct the raw GitHub file URL for a file in the repo root
 * @param owner - GitHub username/org (e.g., "tanay-787")
 * @param repo - Repository name (e.g., "cleat-central")
 * @param fileName - File name at repo root (e.g., "Showcase.jpeg")
 * @param branchOrTag - Branch, tag, or commit hash (default: "HEAD")
 * @returns string - Raw GitHub content URL
 */
export function getRawGithubFileUrl(
    owner: string = "tanay-787",
    repo: string,
    fileName: string,
    branchOrTag: string = "HEAD"
  ): string {
    return `https://raw.githubusercontent.com/${owner}/${repo}/${branchOrTag}/${fileName}`;
  }
  