/**
 * @library Internal
 * @description Full blog/project page layout component with hero image, content area, sidebar info, and repo details
 */

import { RepositoryItem } from "@/lib/git-types";
import { FC } from "react";
import HeroMediaSection from "@/components/reusables/hero-media-section";
import Image from "next/image";
import { TracingBeam } from '@/components/blogs/tracing-beam';
import Footer from "../global/footer";
import { RepoTechStack } from "@/components/blogs/repo-tech-stack";
import { Link001 } from "../reusables/animated-links";
import { getBlurDataURL } from "@/lib/image-blur";
import { TechBadge } from "@/components/reusables/tech-badge";

interface BlogPageContentProps {
  content: React.ReactNode;
  frontmatter: { title?: string; projectType?: string; videoUrl?: string };
  repo: RepositoryItem;
}

const getShortenedLink = (url: string) => {
    const regex = /(?:github\.com|deepwiki\.com)\/([^/]+\/[^/]+)/;
    const match = url.match(regex);
    if (match && match[1]) {
        return match[1];
    }
    return url.replace(/https?:\/\//, '');
};

const BlogPageContent: FC<BlogPageContentProps> = ({ content, frontmatter, repo }) => {

  return (
    <>
    <main>
    <TracingBeam className="px-2">
      <div className="flex min-h-screen max-w-full justify-center">
        <div className="max-w-7xl my-16 mx-12">
          {/* Title */}
          <h1 className="capitalize text-scale-96 tracking-tighter">
            <span className="text-brand">{'Blog: '}</span>
            <br className="block  lg:hidden" />
            <span className="">{frontmatter.title}</span>
          </h1>

          {/* Hero image */}
          <HeroMediaSection
            image={repo.showcaseImage}
            video={frontmatter.videoUrl}
            title={frontmatter.title || repo.name}
            projectType={['web','native','package'].includes(frontmatter.projectType as string) ? frontmatter.projectType as 'web'|'native'|'package' : undefined}
            projectUrl={repo.homepageUrl}
          />
          {/* Main 2-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 mx-auto border-t pt-7 ">
            {/* Left column (Blog content) */}
            <article className="prose dark:inverse-prose lg:prose-xl max-w-none">
              {content}
            </article>
            
            {/* Right column (sidebar) */}
            <aside className="space-y-6 text-scale-16 text-muted-foreground border-l pl-4">
              <div>
                <h2 className="text-base font-semibold mb-2">Language Used</h2>
                <TechBadge icon="JavaScript" />
              </div>

              <div>
                <h2 className="text-base font-semibold mb-2">Built Using</h2>
                {repo.repositoryTopics.nodes.length > 0 ? (
                 <RepoTechStack repo={repo}/>
                ) : (
                  <p className="text-muted-foreground">Not specified</p>
                )}
              </div>

{repo.homepageUrl && (
                <div>
                  <h2 className="text-base font-semibold mb-1">Live Demo At</h2>
                  <div className="w-fit">
                    <Link001
                      href={repo.homepageUrl}
                      className="text-primary hover:text-brand"
                    >
                      {getShortenedLink(repo.homepageUrl)}
                    </Link001>
                  </div>
                </div>
              )}

              {repo.url && (
                <div>
                  <h2 className="text-base font-semibold mb-1">Github Repo</h2>
                  <div className="w-fit">
                    <Link001
                      href={repo.url}
                      className="text-primary hover:text-brand"
                    >
                    {getShortenedLink(repo.url)}
                    </Link001>
                    </div>
                </div>
              )}

              {repo.url && (
                <div>
                  <h2 className="text-base font-semibold mb-1">Deepwiki Docs</h2>
                  <div className="w-fit">
                  <Link001
                    href={`https://deepwiki.com/tanay-787/${repo.name}`}
                    className="text-primary hover:text-brand break-all"
                  >
                    {getShortenedLink(`https://deepwiki.com/tanay-787/${repo.name}`)}
                    </Link001>
                    </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </TracingBeam>
    </main>
    <footer className="py-8 text-center text-muted-foreground">
        {/* <div className="container mx-auto">Made with ❤️ by Tanay Gupte</div>
         */}
         <Footer />
      </footer>
    </>
  );
};

export default BlogPageContent;