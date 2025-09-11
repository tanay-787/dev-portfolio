// app/[project]/page.tsx
import { getPortfolioRepos } from "@/lib/getPortfolioRepos";
import { getRawGithubFileUrl } from "@/lib/getRawGithubFileUrl";
import React from "react";
import BlogPage from "@/app/[project]/BlogPage"; // <- correct import
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  // Next.js 15+: params is a Promise
  params: Promise<{ project: string }>;
}

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

  return {
    title: `${repo.name} | Tanay Codes`,
    description: repo.description || "A project from Tanay's portfolio.",
    openGraph: {
      title: repo.name,
      description: repo.description || "",
      url: `https://tanaycodes.vercel.app/${repo.name.toLowerCase()}`,
      images: [
        {
          url: repo.showcaseImage!,
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
      images: [repo.showcaseImage!],
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

  if (!repo) {
    notFound();
  }

  const blogUrl = getRawGithubFileUrl("tanay-787", repo.name, "BLOG.md");
  const blogRes = await fetch(blogUrl);
  const blogMarkdown = blogRes.ok ? await blogRes.text() : "# Blog not found";

  return <BlogPage project={repo} blogMarkdown={blogMarkdown} />;
}
