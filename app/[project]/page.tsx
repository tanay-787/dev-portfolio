// app/[project]/page.tsx
import { getPortfolioRepos } from "@/lib/getPortfolioRepos";
import { notFound } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext} from "@/components/ui/carousel"
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import BlogPageContent from "@/components/blog-page-content"; // Import the new component
import Image from 'next/image'
//For Mock
import { mockBlogs } from "@/lib/mockBlogs";
import { readFile } from "fs/promises";
import path from "path";
import { MdxImage } from "@/components/mdx-image";
import { getBlogUrl } from "@/lib/getBlogUrl";

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
  const blogUrl = getBlogUrl(repo.name);
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
  const imageUrl = frontmatter.previewImage!;
  console.log(imageUrl)

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

  // Production setup
  const blogUrl = getBlogUrl(repo.name);
  const blogRes = await fetch(blogUrl, { cache: "no-store" });
  const blogMarkdown = blogRes.ok ? await blogRes.text() : "# Blog not found";
  
  const components = {
    h1: (props: any) => <h1 className="mt-8 mb-4 text-scale-60" {...props} />,
    h2: (props: any) => <h2 className="mt-6 mb-3 text-scale-40" {...props} />,
    h3: (props: any) => <h3 className="mt-5 mb-2 text-scale-25" {...props} />,
    p: (props: any) => <p className="mb-4 text-scale-18 leading-relaxed" {...props} />,
    ul: (props: any) => <ul className="mb-4 ml-6 list-disc [&>li]:mt-2" {...props} />,
    ol: (props: any) => <ol className="mb-4 ml-6 list-decimal [&>li]:mt-2" {...props} />,
    li: (props: any) => <li className="mb-2 text-scale-18" {...props} />,
    a: (props: any) => <a className="font-medium text-primary underline underline-offset-4" {...props} />,
    img: (props: any) => <MdxImage {...props} />,
    blockquote: (props: any) => <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />,
    pre: (props: any) => <pre className="my-6 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm" {...props} />,
    code: (props: any) => <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm" {...props} />,
    Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  MdxImage
  };

  const { content, frontmatter } = await compileMDX<{ title?: string }>({
    source: blogMarkdown,
    options: { parseFrontmatter: true },
    components, // Pass the custom components here
  });

  return (
    <BlogPageContent content={content} frontmatter={frontmatter} repo={repo} />
  );
}
