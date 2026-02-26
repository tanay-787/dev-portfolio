/**
 * @library Internal
 * @description Blog/project page layout for native mobile apps with side-by-side content and device mockup
 */

import { RepositoryItem } from "@/lib/git-types";
import { FC } from "react";
import HeroMediaSection from "@/components/reusables/hero-media-section";
import { TracingBeam } from '@/components/blogs/tracing-beam';
import Footer from "../global/footer";
import { TechBadge } from "../reusables/tech-badge";
import { Link001 } from "../reusables/animated-links";
import { RepoTechStack } from "./repo-tech-stack";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../reusables/primitives/accordion";
import KeyDetailsAccordion from "./key-details-accordion";


interface NativeBlogPageContentProps {
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

const NativeBlogPageContent: FC<NativeBlogPageContentProps> = ({ content, frontmatter, repo }) => {
  return (
    <>
      <main>
        <TracingBeam className="px-2 !max-w-5xl">
          <div className="flex min-h-screen max-w-full justify-center">
            <div className="w-full max-w-7xl xl:max-w-[90vw] 2xl:max-w-[88vw] my-16 px-fluid-m lg:px-fluid-l">
              {/* Title */}
              <h1 className="capitalize text-scale-96 tracking-tighter">
                <span className="text-brand">{'Blog: '}</span>
                <br className="block lg:hidden" />
                <span className="">{frontmatter.title}</span>
              </h1>

{/* Key Details Accordion (below title) */}
<KeyDetailsAccordion repo={repo} getShortenedLink={getShortenedLink} />
                  

              {/* Main 2-column layout */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 mx-auto  pt-7">
                {/* Left column (Key Details + Blog content) - order-2 on mobile to place below hero */}
                <div className="flex flex-col gap-8 w-full order-2 md:order-1">
                  
                  <article className="prose dark:inverse-prose lg:prose-xl max-w-none w-full">
                    {content}
                  </article>
                </div>

                {/* Right column (Hero media) - order-1 on mobile to place above content */}
                <div className="flex justify-center items-start order-1 md:order-2">
                  <HeroMediaSection
                    image={repo.showcaseImage}
                    video={frontmatter.videoUrl}
                    title={frontmatter.title || repo.name}
                    projectType={['web', 'native', 'package'].includes(frontmatter.projectType as string) ? frontmatter.projectType as 'web' | 'native' | 'package' : undefined}
                    projectUrl={repo.homepageUrl}
                  />
                </div>
              </div>
            </div>
          </div>
        </TracingBeam>
      </main>
      <footer className="py-8 text-center text-muted-foreground">
        <Footer />
      </footer>
    </>
  );
};

export default NativeBlogPageContent;
