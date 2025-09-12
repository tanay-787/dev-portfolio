import { Button } from "@/components/ui/button";
import { Terminal} from "lucide-react";
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right";
import Link from "next/link";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import AnimatedButton from "../animated-button";
import { RepositoryItem } from "@/lib/git-types";
import GitRepoIcon from "../icons/socials/git-repo";

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
  },{
    key: 'product-demo-app',
    name: 'Tourify Demos'
  },{
    key: 'actfour-fitness',
    name: 'Act4Fitness'
  },{
    key: 'resume-analyzer-app',
    name: 'Resume-Analyzer AI'
  }
]

const Projects2 = ({ projects }: { projects: RepositoryItem[] }) => {
  return (
    <section aria-label="Projects" id="projects" className="py-16 pb-24"> {/* Changed to section and applied padding */}
      <div className="max-w-7xl mx-auto px-10 lg:px-12"> {/* Adjusted padding */}
        <h2 className="text-scale-72 w-full md:text-center md:mx-auto">
          Featured Projects <GitRepoIcon className="inline h-[1em] w-[1em]" />
        </h2>
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {projects.sort((a, b) => a.name.localeCompare(b.name)).map((project) => (
            <div
              key={project.name}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse"
            >
              <img className="w-full aspect-video bg-muted rounded-xl border border-border/50 basis-1/2" src={project.showcaseImage!} />
              <div className="basis-1/2 shrink-0">
                <span className="lowercase inline-flex items-center font-semibold text-sm text-muted-foreground">
                  <GitRepoIcon className="mr-1 h-[1em] w-[1em]"/>tanay-787/{project.name} 
                </span>
                <h4 className="mb-2 text-scale-40 font-semibold">
                  { projectNames.find(item => item.key === project.name)?.name || project.name }
                </h4>
                <p className="text-muted-foreground text-scale-18">
                  {project.description}
                </p>
                <AnimatedButton 
                text="Learn More" 
                href={project.url} 
                icon={<ArrowRight className="ml-1 -mt-0.8"/>} 
                isBlogLink={true}
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