// app/[project]/page.tsx
import { getPortfolioRepos } from "@/lib/getPortfolioRepos";
import { getRawGithubFileUrl } from "@/lib/getRawGithubFileUrl";
import React from "react";
import BlogPage from "@/app/[project]/BlogPage";

export async function generateMetadata({ params }: { params: { project: string } }) {
  const { project } = params;

  const repos = await getPortfolioRepos();
  const repo = repos.find((r: any) => r.name.toLowerCase() === project.toLowerCase());

  if (!repo) {
    return {
      title: "Project not found | Tanay Codes",
      description: "This project does not exist in the portfolio.",
    };
  }

  return {
    title: `${repo.name} | Tanay Codes`,
    description: repo.description || "A project from Tanay's portfolio.",
    openGraph: {
      title: repo.name,
      description: repo.description || "",
      url: `https://tanaycodes.vercel.app/${repo.name.toLowerCase()}`,
      images: [
        {
          url: repo.showcaseImage,
          width: 1200,
          height: 630,
          alt: `${repo.name} showcase image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: repo.name,
      description: repo.description || "",
      images: [repo.showcaseImage],
    },
  };
}

export default async function ProjectPage({ params }: { params: { project: string } }) {
  const { project } = params;

  // Step 1: Fetch all repos
  const repos = await getPortfolioRepos();

  // Step 2: Find the one matching the project param
  const repo = repos.find((r: any) => r.name.toLowerCase() === project.toLowerCase());
  if (!repo) {
    return <div>Project not found.</div>;
  }

  // Step 3: Fetch the blog.md from repo/assets
  const blogUrl = getRawGithubFileUrl("tanay-787", repo.name, "BLOG.md");
  const blogRes = await fetch(blogUrl);
  const blogMarkdown = blogRes.ok ? await blogRes.text() : "# Blog not found";

  // Step 4: Render
  return <BlogPage project={repo} blogMarkdown={blogMarkdown} />;
}
