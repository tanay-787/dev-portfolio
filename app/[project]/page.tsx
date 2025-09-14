// app/[project]/page.tsx
import { getPortfolioRepos } from "@/lib/getPortfolioRepos";
import { getRawGithubFileUrl } from "@/lib/getRawGithubFileUrl";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import BlogPageContent from "@/components/blog-page-content"; // Import the new component

interface ProjectPageProps {
  params: Promise<{ project: string }>;
}

// ✅ SEO metadata from frontmatter
export async function generateMetadata(
  { params }: ProjectPageProps
): Promise<Metadata> {
  const { project } = await params;
  const repos = await getPortfolioRepos();
  const repo = repos.find((r: any) => r.name.toLowerCase() === project.toLowerCase());

  if (!repo) {
    return {
      title: "Project not found | Tanay Codes",
      description: "This project does not exist in the portfolio.",
    };
  }

  // Fetch blog file
  const blogUrl = getRawGithubFileUrl("tanay-787", repo.name, "BLOG.mdx");
  const blogRes = await fetch(blogUrl, { cache: "no-store" });
  const blogMarkdown = blogRes.ok ? await blogRes.text() : "";

  // Compile & extract frontmatter (fallback to repo data if missing)
  let frontmatter: { title?: string; description?: string; previewImage?: string } = {};
  if (blogMarkdown) {
    try {
      const parsed = await compileMDX<{ title?: string; description?: string; previewImage?: string }>({
        source: blogMarkdown,
        options: { parseFrontmatter: true },
      });
      frontmatter = parsed.frontmatter;
    } catch {
      // fallback
    }
  }

  const title = frontmatter.title || repo.name;
  const description = frontmatter.description || repo.description || "A project from Tanay's portfolio.";
  const imageUrl = frontmatter.previewImage
    ? `https://raw.githubusercontent.com/tanay-787/${repo.name}/HEAD/assets/${frontmatter.previewImage}`
    : repo.showcaseImage!;

  return {
    title: `${title} | Tanay Codes`,
    description,
    openGraph: {
      title,
      description,
      url: `https://tanaycodes.vercel.app/${repo.name.toLowerCase()}`,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: `${title} preview` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  const repos = await getPortfolioRepos();
  return repos.map((repo: any) => ({ project: repo.name.toLowerCase() }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { project } = await params;
  const repos = await getPortfolioRepos();
  const repo = repos.find((r: any) => r.name.toLowerCase() === project.toLowerCase());
  if (!repo) notFound();

  const blogUrl = getRawGithubFileUrl("tanay-787", repo.name, "BLOG.mdx");
  const blogRes = await fetch(blogUrl, { cache: "no-store" });
  const blogMarkdown = blogRes.ok ? await blogRes.text() : "# Blog not found";

  const { content, frontmatter } = await compileMDX<{ title?: string }>({
    source: blogMarkdown,
    options: { parseFrontmatter: true },
  });

  return (
    <BlogPageContent content={content} frontmatter={frontmatter} repo={repo} />
  );
}
