import { Button } from "@/components/reusables/primitives/button";
import { ArrowUpRight, Terminal } from "lucide-react";
import { ArrowRight } from "@/components/icons/animated/arrow-right";
import Link from "next/link";
import { AnimateIcon } from "@/components/icons/animated/icon";
import AnimatedButton from "../../reusables/animated-button";
import { RepositoryItem } from "@/lib/git-types";
import GitRepoIcon from "../../icons/assets/socials/git-repo";
import { RepoTechStack } from "@/components/blogs/repo-tech-stack";
import HeroMediaSection from "@/components/reusables/hero-media-section";
import Image from "next/image";
import { getBlurDataURL } from "@/lib/image-blur";

export const projectNames = [
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
    key: 'act4-fitness',
    name: 'Act4 Fitness'
  }, {
    key: 'resume-analyzer-app',
    name: 'Resume-Analyzer AI'
  }, {
    key: 'refind',
    name: 'Refind'
  }, {
    key: 'voice-query',
    name: 'VoiceQuery'
  }, {
    key: 'ghcc-client',
    name: 'GhCC Client'
  }
]

const ProjectsSimple = ({ projects }: { projects: RepositoryItem[] }) => {
  return (
    <section aria-label="Projects" id="projects" className="py-fluid-xl pb-fluid-2xl">
      <div className="max-w-7xl mx-auto px-fluid-m lg:px-fluid-l">
        <h2 className="text-step-4 w-full md:text-center md:mx-auto">
        <span className="">{'Featured '}</span><span className="inline text-brand font-neo italic font-semibold">Projects</span> <GitRepoIcon className="inline h-[1em] w-[1em] text-brand" />
        </h2>
        <div className="mt-fluid-l md:mt-fluid-xl w-full mx-auto space-y-fluid-2xl">
          {projects.sort((a, b) => a.name.localeCompare(b.name)).map((project, index) => (
            <div
              key={project.name}
              className="flex flex-col md:flex-row items-center gap-x-fluid-2xl gap-y-fluid-m md:odd:flex-row-reverse"
            >
              <div className="relative w-full aspect-video basis-1/2 group">
                <HeroMediaSection
                  image={project.showcaseImage}
                  video={project.showcaseVideo}
                  title={project.name}
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
                  <GitRepoIcon className="mr-0.8 inline h-[1em] w-[1em]" />
                  <span>{"tanay-787/"}{project.name}</span>
                </span>
                </a>
                <h4 className="mb-fluid-2xs text-step-2 font-semibold">
                  {projectNames.find(item => item.key === project.name)?.name || project.name}
                </h4>
                <p className="text-muted-foreground text-step-0">
                  {project.description}
                </p>
                <RepoTechStack repo={project}/>
                <AnimatedButton
                  text="Learn More"
                  href={`/${project.name}`}
                  icon={<ArrowRight className="ml-1 -mt-0.8" />}
                  isBlogLink
                  className="mt-fluid-m rounded-full min-w-40 text-step--1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSimple;