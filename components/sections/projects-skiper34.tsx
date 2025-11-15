"use client";

import { motion, useScroll, useTransform, useMotionValue, useInView } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { RepositoryItem } from "@/lib/git-types";
import { getBlurDataURL } from "@/lib/image-blur";
import GitRepoIcon from "../icons/socials/git-repo";
import { projectNames } from "./projects";
import { Link006 } from "@/components/ui/skiper-ui/animated-links";

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
      className="sticky w-full max-w-7xl overflow-hidden rounded-3xl bg-muted border border-border/50"
      style={{
        scale: scale,
        rotate: filter,
        aspectRatio: '',
        height: '90vh',
        top: `auto`,
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
          className="object-cover image-fade-in"
          placeholder="blur"
          blurDataURL={getBlurDataURL(1920, 1080)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          quality={95}
        />
        
        {/* Floor fade overlay gradient */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))'
          }}
        />
        
        {/* Curved overlay for text readability */}
        {/* <svg 
          className="absolute inset-0 w-full h-full z-0" 
          viewBox="0 0 1920 1080" 
          preserveAspectRatio="none"
          style={{ pointerEvents: 'none', display: 'none' }}
        >
          <path
            d="M 0 550 Q 400 650, 950 850 L 1920 1080 L 0 1080 Z"
            fill="black"
            opacity="0.85"
          />
        </svg> */}
        


        {/* Project info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-fluid-l md:p-fluid-xl z-20 ">
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-step--2 text-foreground transition-colors mb-fluid-2xs drop-shadow-xl/50"
            style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}
          >
            <GitRepoIcon className="mr-0.8 inline h-[1em] w-[1em]" />
            <span className="lowercase">{"tanay-787/"}{project.name}</span>
          </a>
          
          {/* Project title - enhanced scaling for card context */}
          <h3 className="font-semibold text-[#ededed] mb-fluid-2xs"
              style={{ 
                fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
            {displayName}
          </h3>
          
          {/* Project description - enhanced readability */}
          <p className="text-foreground max-w-2xl mb-fluid-s leading-relaxed"
             style={{ 
               fontSize: 'clamp(1rem, 2vw, 1.3rem)',
               textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
             }}>
            {project.description}
          </p>

          {/* Subtle blog navigation hint */}
          <div className="w-fit">
          <Link006 
            href={`/${project.name}`}
            className="text-white/90 text-sm font-medium tracking-wide"
          >
            Learn more
          </Link006>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSkiper34 = ({ projects }: ProjectsStickyProps) => {
  const sortedProjects = projects.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ReactLenis root>
      <section aria-label="Projects" id="projects" className="pt-fluid-3xl pb-fluid-2xl">
        {/* Enhanced container for better large screen utilization */}
        <div className="w-full max-w-7xl xl:max-w-[85vw] 2xl:max-w-[80vw] mx-auto px-fluid-m lg:px-fluid-l">
          {/* Section header - enhanced scaling */}
          <h2 className="text-display-section w-full text-center mb-fluid-l">
            <span className="">{'Featured '}</span>
            <span className="inline text-brand font-neo italic font-semibold">Projects</span>
            <GitRepoIcon className="inline h-[1em] w-[1em] text-brand ml-2" />
          </h2>

          {/* Scroll hint */}
          <div className="flex justify-center mt-fluid-l mb-fluid-xl">
            <span className="after:from-background after:to-foreground relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 text-center after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
              scroll to explore
            </span>
          </div>
        </div>

        {/* Sticky cards container */}
        <div className="flex w-full flex-col items-center gap-[10vh] px-fluid-s pt-[10vh]">
          {sortedProjects.map((project, index) => (
            <StickyProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </section>
    </ReactLenis>
  );
};

export default ProjectsSkiper34;
