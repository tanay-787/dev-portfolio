"use client";

import { motion, useScroll, useTransform, useMotionValue, useInView } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { RepositoryItem } from "@/lib/git-types";
import { getBlurDataURL } from "@/lib/image-blur";
import GitRepoIcon from "../icons/socials/git-repo";
import { projectNames } from "./projects";

interface ProjectsStickyProps {
  projects: RepositoryItem[];
}

const StickyProjectCard = ({ 
  project, 
  index 
}: { 
  project: RepositoryItem; 
  index: number;
}) => {
  const vertMargin = 10;
  const container = useRef<HTMLDivElement>(null);
  const [maxScrollY, setMaxScrollY] = useState(Infinity);

  const filter = useMotionValue(0);
  const negateFilter = useTransform(filter, (value) => -value);

  const { scrollY } = useScroll({
    target: container,
  });
  
  const scale = useTransform(scrollY, [maxScrollY, maxScrollY + 10000], [1, 0]);
  
  const isInView = useInView(container, {
    margin: `0px 0px -${100 - vertMargin}% 0px`,
    once: true,
  });

  scrollY.on("change", (scrollY) => {
    let animationValue = 1;
    if (scrollY > maxScrollY) {
      animationValue = Math.max(0, 1 - (scrollY - maxScrollY) / 10000);
    }

    scale.set(animationValue);
    filter.set((1 - animationValue) * 100);
  });

  useEffect(() => {
    if (isInView) {
      setMaxScrollY(scrollY.get());
    }
  }, [isInView, scrollY]);

  const displayName = projectNames.find(item => item.key === project.name)?.name || project.name;

  return (
    <motion.div
      ref={container}
      className="sticky h-[200px] w-full max-w-7xl overflow-hidden rounded-3xl bg-muted border border-border/50"
      style={{
        scale: scale,
        rotate: filter,
        height: `${100 - 2 * vertMargin}vh`,
        top: `${vertMargin}vh`,
      }}
    >
      <motion.div
        style={{
          rotate: negateFilter,
        }}
        className="relative h-full w-full"
      >
        <Image
          src={project.showcaseImage || "https://placehold.co/1920x1080/e5e5e5/666666?text=Project+Showcase"}
          alt={displayName}
          fill
          className="object-cover scale-125 image-fade-in"
          placeholder="blur"
          blurDataURL={getBlurDataURL(1920, 1080)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
        />
        
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Project info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-white/70 hover:text-white transition-colors mb-2"
          >
            <GitRepoIcon className="mr-1.5 inline h-[1em] w-[1em]" />
            <span className="lowercase">{"tanay-787/"}{project.name}</span>
          </a>
          
          <h3 className="text-scale-60 font-semibold text-white mb-3">
            {displayName}
          </h3>
          
          <p className="text-scale-18 text-white/90 max-w-2xl">
            {project.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSkiper34 = ({ projects }: ProjectsStickyProps) => {
  const sortedProjects = projects.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ReactLenis root>
      <section aria-label="Projects" id="projects" className="py-16 pb-24">
        <div className="max-w-7xl mx-auto px-10 lg:px-12">
          <h2 className="text-scale-72 w-full text-center mb-12">
            <span className="">{'Featured '}</span>
            <span className="inline text-brand font-neo italic font-semibold">Projects</span>
            <GitRepoIcon className="inline h-[1em] w-[1em] text-brand ml-2" />
          </h2>

          {/* Scroll hint - positioned relative to title */}
          <div className="flex justify-center mt-8 mb-16">
            <span className="after:from-background after:to-foreground relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 text-center after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
              scroll to explore
            </span>
          </div>
        </div>

        {/* Sticky cards container */}
        <div className="flex w-full flex-col items-center gap-[10vh] px-4 pt-[10vh]">
          {sortedProjects.map((project, index) => (
            <StickyProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </section>
    </ReactLenis>
  );
};

export default ProjectsSkiper34;
