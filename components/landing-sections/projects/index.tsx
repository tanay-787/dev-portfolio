"use client";

import { motion, useScroll, useTransform, useMotionValue, useInView } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { RepositoryItem } from "@/lib/git-types";
import { getBlurDataURL } from "@/lib/image-blur";
import GitRepoIcon from "../../icons/assets/socials/git-repo";
import { projectNames } from "./projects-2";
import { Link006 } from "@/components/reusables/animated-links";
import HeroMediaSection from "../../reusables/hero-media-section";

interface ProjectsSectionStickyProps {
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
  const [viewportHeight, setViewportHeight] = useState(0);

  const filter = useMotionValue(0);
  const negateFilter = useTransform(filter, (value) => -value);

  const { scrollY } = useScroll({
    target: container,
  });
  
  const scale = useTransform(scrollY, [maxScrollY, maxScrollY + 10000], [1, 0]);
  const top = useTransform(scrollY, (value) => {
    if (value <= maxScrollY) return `${vertMargin}vh`;
    const overshoot = value - maxScrollY;
    const maxOvershoot = 10000;
    const offset = Math.min((overshoot / maxOvershoot) * 20, 20);
    return `calc(${vertMargin}vh + ${offset}px)`;
  });
  
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

  useEffect(() => {
    setViewportHeight(window.innerHeight);
  }, []);

  const displayName = projectNames.find(item => item.key === project.name)?.name || project.name;

  return (
    <motion.div
      ref={container}
      className="sticky w-full max-w-7xl overflow-hidden rounded-3xl bg-muted"
      style={{
        scale: scale,
        height: 'clamp(400px, 85vh, 90vh)',
        top: top,
      }}
    >
      <motion.div
        className="relative h-full w-full"
      >
        <Image
          src={project.showcaseImage!}
          alt={displayName}
          fill
          className="object-cover image-fade-in"
          placeholder="blur"
          blurDataURL={getBlurDataURL(1920,1080)}
          sizes="(max-width: 786px) 100vw, (max-width: 1200px) 90vw, 1200px"
          quality={95}
        />
        
        {/* Floor fade overlay gradient */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1.2))'
          }}
        /> 


        {/* Project info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-fluid-l md:p-fluid-xl z-20 text-[#ededed]">
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-step--2 transition-colors mb-fluid-2xs drop-shadow-xl/50"
            style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}
          >
            <GitRepoIcon className="mr-0.8 inline h-[1em] w-[1em]" />
            <span className="lowercase">{"tanay-787/"}{project.name}</span>
          </a>
          
          {/* Project title */}
          <h3 className="font-semibold  mb-fluid-2xs"
              style={{ 
                fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
            {displayName}
          </h3>
          
          {/* Project description */}
          <p className=" max-w-2xl mb-fluid-s leading-relaxed"
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
            className="text-sm font-medium tracking-wide"
          >
            Learn more
          </Link006>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = ({ projects }: ProjectsSectionStickyProps) => {
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

export default ProjectsSection;
