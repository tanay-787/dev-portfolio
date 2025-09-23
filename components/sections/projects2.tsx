import { Button } from "@/components/ui/button";
import { ArrowUpRight, Terminal } from "lucide-react";
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right";
import Link from "next/link";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import AnimatedButton from "../animated-button";
import { RepositoryItem } from "@/lib/git-types";
import GitRepoIcon from "../icons/socials/git-repo";
import { RepoTechStack } from "../repo-tech-stack";

const projectNames = [
  {
    key: 'cleat-central',
    name: 'CleatCentral'
  },
  {
    key: 'care-pin',
    name: 'CarePin'
  },
  {
    key: 'qpas',
    name: 'Question Paper Archives'
  }, {
    key: 'product-demo-app',
    name: 'Tourify Demos'
  }, {
    key: 'actfour-fitness',
    name: 'Act4Fitness'
  }, {
    key: 'resume-analyzer-app',
    name: 'Resume-Analyzer AI'
  }
]

const Projects2 = ({ projects }: { projects: RepositoryItem[] }) => {
  return (
    <section aria-label="Projects" id="projects" className="py-16 pb-24"> {/* Changed to section and applied padding */}
      <div className="max-w-7xl mx-auto px-10 lg:px-12"> {/* Adjusted padding */}
        <h2 className="text-scale-72 w-full md:text-center md:mx-auto">
        <span className="">{'Featured '}</span><span className="inline text-brand font-neo italic font-semibold">Projects</span> <GitRepoIcon className="inline h-[1em] w-[1em] text-brand" />
        </h2>
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {projects.sort((a, b) => a.name.localeCompare(b.name)).map((project) => (
            <div
              key={project.name}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse"
            >
              <div className="relative w-full aspect-video basis-1/2 group">
                <img
                  className="w-full h-full object-cover bg-muted rounded-xl border border-border/50 transition-transform duration-300 group-hover:brightness-50"
                  src={project.showcaseImage!}
                  alt={project.name}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.homepageUrl!} target="_blank" rel="noopener noreferrer" >
                    <ArrowUpRight className="h-12 w-12 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
              <div className="basis-1/2 shrink-0">
                <a href={project.url!} target="_blank" rel="noopener noreferrer" >
                <span className="lowercase inline-flex items-center font-semibold text-sm text-muted-foreground">
                  <GitRepoIcon className="mr-0.8 inline h-[1em] w-[1em]" />tanay-787/{project.name}
                </span>
                </a>
                <h4 className="mb-2 text-scale-40 font-semibold">
                  {projectNames.find(item => item.key === project.name)?.name || project.name}
                </h4>
                <p className="text-muted-foreground text-scale-18">
                  {project.description}
                </p>
                <RepoTechStack repo={project}/>
                <AnimatedButton
                  text="Learn More"
                  href={`${project.name}`}
                  icon={<ArrowRight className="ml-1 -mt-0.8" />}
                  isBlogLink={true}
                  className="mt-6 rounded-full min-w-40 text-[15px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects2;