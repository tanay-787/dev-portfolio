
import { getPortfolioRepos } from "@/lib/getPortfolioRepos";
import { notFound } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext} from "@/components/reusables/primitives/carousel"
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import BlogPageContent from "@/components/blogs/blog-page-content";
import NativeBlogPageContent from "@/components/blogs/native-blog-page-content";
import { MdxImage } from "@/components/blogs/mdx-image";
import { getBlogUrl } from "@/lib/getBlogUrl";
import { TechBadge } from "@/components/reusables/tech-badge";
import { cache } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogNavBar } from "@/components/blogs/blog-nav-bar";


interface ProjectPageProps {
  params: Promise<{ project: string }>;
}

const getPageData = cache(async (project: string) => {
	const repos = await getPortfolioRepos();
	const repo = repos.find(
		(r: any) => r.name.toLowerCase() === project.toLowerCase()
	);

	if (!repo) {
		return { repo: null, blogMarkdown: null };
	}

	const blogUrl = getBlogUrl(repo.name);
	const blogRes = await fetch(blogUrl, { cache: "no-store" });
	const blogMarkdown = blogRes.ok ? await blogRes.text() : null;

	return { repo, blogMarkdown };
});


// SEO metadata from frontmatter
export async function generateMetadata(
  { params }: ProjectPageProps
): Promise<Metadata> {
  const { project } = await params;
  const { repo, blogMarkdown } = await getPageData(project);


  if (!repo) {
    return {
      title: "Project not found | Tanay Codes",
      description: "This project does not exist in the portfolio.",
    };
  }

  // Compile & extract frontmatter (fallback to repo data if missing)
  let frontmatter: { title?: string; description?: string; previewImage?: string; } = {};
  if (blogMarkdown) {
    try {
      const parsed = await compileMDX<{ title?: string; description?: string; previewImage?: string; }>({
        source: blogMarkdown,
        options: { parseFrontmatter: true },
      });
      frontmatter = parsed.frontmatter;
    } catch(error) {
      console.error(error)
    }
  }

  const title = frontmatter.title || repo.name;
  const description = frontmatter.description || repo.description || "A project from Tanay's portfolio.";
  const imageUrl = frontmatter.previewImage!;

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
	const { repo, blogMarkdown } = await getPageData(project);

  if (!repo) notFound();

  const allRepos = await getPortfolioRepos();
  const navItems = allRepos.map((r: any) => ({
    label: r.name,
    href: `/${r.name.toLowerCase()}`,
  }));

  // Production setup
  const blogSource = blogMarkdown || "# Blog not found";
  
  const components = {
    h1: (props: any) => <h1 className="mt-8 mb-4 text-scale-60" {...props} />,
    h2: (props: any) => <h2 className="mt-8 mb-3 text-scale-40 text-brand" {...props} />,
    h3: (props: any) => <h3 className="mt-10 mb-2 text-scale-25 text-brand" {...props} />,
    p: (props: any) => <p className="mb-4 text-scale-18 leading-relaxed" {...props} />,
    ul: (props: any) => <ul className="mb-4 ml-6 list-disc [&>li]:mt-2" {...props} />,
    ol: (props: any) => <ol className="mb-4 ml-6 list-decimal [&>li]:mt-2" {...props} />,
    li: (props: any) => <li className="mb-2 text-scale-18" {...props} />,
    a: (props: any) => <a className="font-medium text-primary underline underline-offset-4" {...props} />,
    img: (props: any) => <MdxImage {...props} />,
    blockquote: (props: any) => <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />,
    strong: (props: any) => <strong className="mt-6 text-brand" {...props} />,
    pre: (props: any) => <pre className="my-6 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm" {...props} />,
    code: (props: any) => <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm" {...props} />,
    Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  MdxImage,
  TechBadge
  };

  const { content, frontmatter } = await compileMDX<{ title?: string; projectType?: string; videoUrl?: string }>({
    source: blogSource,
    options: { parseFrontmatter: true },
    components,
  });

  return (
    <>
      <header className={`relative mx-auto w-full ${frontmatter.projectType === 'native' ? 'max-w-5xl' : 'max-w-4xl'} px-2 py-2`}>
        <div className={`flex items-center justify-between ${frontmatter.projectType === 'native' ? 'px-fluid-m lg:px-fluid-l' : 'mx-12'}`}>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
          <BlogNavBar navItems={navItems} />
        </div>
      </header>
      {frontmatter.projectType === 'native'
        ? <NativeBlogPageContent content={content} frontmatter={frontmatter} repo={repo} />
        : <BlogPageContent content={content} frontmatter={frontmatter} repo={repo} />}
    </>
  );
}
