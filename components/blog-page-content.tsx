import { RepositoryItem } from "@/lib/git-types";
import { FC } from "react";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { TracingBeam } from "./tracing-beam";
import Footer from "./sections/footer";

interface BlogPageContentProps {
  content: React.ReactNode;
  frontmatter: { title?: string };
  repo: RepositoryItem;
}

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
            <br className="block lg:hidden" />
            {repo.name}
          </h1>

          {/* Hero image */}
          {repo.showcaseImage && (
            <div className="flex mb-12">
              <img
                className="w-full h-full object-contain bg-muted rounded-xl border border-border/50 shadow-lg"
                src={repo.showcaseImage}
                alt={`${frontmatter.title || repo.name} preview`}
              />
            </div>
          )}

          {/* Main 2-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 mx-auto border-t pt-7 ">
            {/* Left column (Blog content) */}
            <article className="prose dark:inverse-prose lg:prose-xl max-w-none">
              {content}
            </article>

            {/* Right column (sidebar) */}
            <aside className="space-y-6 text-scale-18 text-muted-foreground border-l pl-4">
              <div>
                <h2 className="text-base font-semibold mb-2">Technologies</h2>
                {repo.repositoryTopics.nodes.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {repo.repositoryTopics.nodes.map((topicNode, idx) => (
                      <Badge key={idx} variant="secondary">
                        {topicNode.topic.name}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">Not specified</p>
                )}
              </div>

              {repo.homepageUrl && (
                <div>
                  <h2 className="text-base font-semibold mb-1">Live Demo</h2>
                  <a
                    href={repo.homepageUrl}
                    className="text-primary hover:underline break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.homepageUrl}
                  </a>
                </div>
              )}

              {repo.url && (
                <div>
                  <h2 className="text-base font-semibold mb-1">Repository</h2>
                  <a
                    href={repo.url}
                    className="text-primary hover:underline break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.url}
                  </a>
                </div>
              )}

              {repo.url && (
                <div>
                  <h2 className="text-base font-semibold mb-1">DeepWiki</h2>
                  <a
                    href={`https://deepwiki.com/tanay-787/${repo.name}`}
                    className="text-primary hover:underline break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`https://deepwiki.com/tanay-787/${repo.name}`}
                  </a>
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