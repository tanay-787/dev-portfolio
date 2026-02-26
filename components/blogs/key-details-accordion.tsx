import { FC } from "react";
import { TechBadge } from "../reusables/tech-badge";
import { Link001 } from "../reusables/animated-links";
import { RepoTechStack } from "./repo-tech-stack";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../reusables/primitives/accordion";
import { RepositoryItem } from "@/lib/git-types";

interface KeyDetailsAccordionProps {
  repo: RepositoryItem;
  getShortenedLink: (url: string) => string;
}

const KeyDetailsAccordion: FC<KeyDetailsAccordionProps> = ({ repo, getShortenedLink }) => (
  <Accordion type="single" collapsible className="mb-8">
    <AccordionItem value="key-details">
      <AccordionTrigger className="after:from-background after:to-foreground relative max-w-[20ch] text-sm uppercase leading-tight opacity-40">
        KEY DETAILS & LINKS
      </AccordionTrigger>
      <AccordionContent>
        <aside className="space-y-3 text-scale-16 text-muted-foreground border-t border-l-0 pl-0 pt-4">
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
                  className="text-primary hover:text-brand active:text-brand touch:text-brand"
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
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default KeyDetailsAccordion;
