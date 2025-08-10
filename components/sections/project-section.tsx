import {
    Carousel,
    CarouselItem,
    CarouselContent,
    CarouselNavigation,
    CarouselIndicator,
  } from "@/components/motion-primitives/carousel";
  import { ProjectCard } from "@/components/project-card";
  import { Spotlight } from "@/components/ui/spotlight";
import JavascriptIcon from "../icons/javascript";
import ReactIcon from "../icons/react";
import NodejsIcon from "../icons/node";
import ExpressJsIcon from "../icons/express";
import MongodbIcon from "../icons/mongodb";
  
  const projects = [
    {
      title: "CleatCentral",
      description: "An e-commerce platform for football cleats...",
      image: "/projects/cleatcentral.png",
      features: [
        "Filtering & searching",
        "JWT auth",
        "Context-based cart",
        "Skeleton loading",
        "Clean UI",
      ],
      technologies: [<JavascriptIcon />, <ReactIcon />, <NodejsIcon />, <ExpressJsIcon />, <MongodbIcon />],
      codeLink: "https://github.com/user/cleatcentral",
      liveLink: "https://cleatcentral.app",
    },
    // Add more...
  ];
  
  export function ProjectsSection() {
    return (
      <section
        id="projects"
        className="relative w-full overflow-hidden px-4 pt-28 md:pt-40 pb-20"
      >
       <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="currentColor"
          />
  
        <div className="mx-auto max-w-[1440px] text-center relative z-10">
          <h2 className="text-scale-60 md:text-scale-72 font-semibold mb-6">
            Featured Projects
          </h2>
          <p className="max-w-[640px] mx-auto text-muted-foreground mb-10">
            A selection of some projects I've built with modern stacks.
          </p>
  
          <Carousel className="w-full">
            <CarouselContent className="w-full">
              {projects.map((proj, idx) => (
                <CarouselItem key={idx} className="px-4">
                  <ProjectCard {...proj} />
                </CarouselItem>
              ))}
            </CarouselContent>
  
            <CarouselNavigation />
            <CarouselIndicator className="mt-6" />
          </Carousel>
        </div>
      </section>
    );
  }
  