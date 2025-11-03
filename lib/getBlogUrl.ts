
// lib/getBlogUrl.ts

/**
 * Constructs the raw GitHub URL for a project's blog MDX file.
 * Assumes blogs are in a central 'portfolio-content' repository.
 * @param projectName - The name of the project (e.g., "cleat-central")
 * @param owner - The GitHub owner of the content repository.
 * @param contentRepo - The name of the content repository.
 * @param branch - The branch to fetch from.
 * @returns The raw URL to the BLOG.mdx file.
 */
export function getBlogUrl(
  projectName: string,
  owner: string = "tanay-787",
  contentRepo: string = "portfolio-content",
  branch: string = "main"
): string {
  return `https://raw.githubusercontent.com/${owner}/${contentRepo}/${branch}/${projectName}/BLOG.mdx`;
}
