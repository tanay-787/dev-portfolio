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
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen w-full py-10 px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
          Featured Projects <GitRepoIcon className="inline h-[1em] w-[1em]" />
        </h2>
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {projects.sort((a, b) => a.name.localeCompare(b.name)).map((project) => (
            <div
              key={project.name}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse"
            >
              <img className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2" src={project.showcaseImage!} />
              <div className="basis-1/2 shrink-0">
                <span className="lowercase inline-flex items-center font-semibold text-sm text-muted-foreground">
                  <GitRepoIcon className="mr-1 h-[1em] w-[1em]"/>tanay-787/{project.name} 
                </span>
                <h4 className="mb-3 text-3xl font-semibold tracking-tight">
                  { projectNames.find(item => item.key === project.name)?.name || project.name }
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  {project.description}
                </p>
                {/* <Button
                  asChild
                  className="mt-6 rounded-full min-w-40 text-[15px]"
                >
                  <Link href={project.tutorialLink}>
                  <AnimateIcon animation="default-loop" loop animate>
            <span className="inline-flex items-center">Learn More <ArrowRight className="ml-1 -mt-0.8"/></span>
            </AnimateIcon>
                  </Link>
                </Button> */}
                <AnimatedButton 
                text="Learn More" 
                href={project.url} 
                icon={<ArrowRight className="ml-1 -mt-0.8"/>} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects2;