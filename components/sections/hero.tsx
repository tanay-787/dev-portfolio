'use client';
import React from "react";
import { motion } from "motion/react";
import { TechCloud } from "../tech-cloud";
import GithubIcon from "../icons/socials/github"; // Adjust path if needed
import LinkedinIcon from "../icons/socials/linkedin"; // Adjust path if needed
import ScrollArrow from "./scroll-arrow";
import { TypingText } from "@/components/ui/animate-ui/text/typing";
import { Button } from "../ui/button";
import { useContainerSize } from "@/hooks/useContainerSize"; // Import the hook
import AnimatedButton from "../animated-button";
import { Download } from "../ui/animate-ui/icons/download";
import { Status, StatusIndicator, StatusLabel } from "@/components/kibo-ui/status";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link006 } from "../ui/skiper-ui/animated-links";
import { ExternalLink } from "../ui/animate-ui/icons/external-link";

type HeroProps = {
  title?: React.ReactNode; // can be string or JSX (multiple lines)
  description?: string;
  className?: string;
};

export default function Hero({
  description = "A developer learning to build reliable, user-focused products across the stack.",
  className = "",
}: HeroProps) {
  const [containerRef, dimensions] = useContainerSize<HTMLDivElement>();

  return (
    <section 
      aria-label="Hero" 
      className="relative min-h-[75vh] flex items-center pt-fluid-xl pb-fluid-2xl"
    > 
      {/* Enhanced container - grows with screen size but maintains balance */}
      <div className="w-full max-w-[90vw] xl:max-w-[85vw] 2xl:max-w-[80vw] mx-auto px-fluid-m lg:px-fluid-l "> 
  
        <div className="flex items-center justify-center gap-fluid-l xl:gap-fluid-xl"> 
          
          {/* Content area - slightly more space on larger screens */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-fluid-s">
            {/* Status Badge */}
            <Status status="degraded" className="mb-fluid-xs w-fit">
              <StatusIndicator />
              <StatusLabel>This Portfolio is Under Development</StatusLabel>
            </Status>
            
            {/* Hero Title - Enhanced but controlled scaling */}
            <h1 className="text-display-hero mt-fluid-s">
              <span className=" font-neo italic font-semibold tracking-tighter leading-none">
                {"Tanay "} 
              </span>
              <span className=" font-neo italic font-semibold text-brand tracking-tighter leading-none">
              Gupte<TypingText text={''} cursorClassName="hidden lg:inline" cursor />
              </span>
            </h1>
            
            {/* Description - Better scaling for readability */}
            <p 
              className="mt-fluid-s max-w-lg text-step-0 text-muted-foreground leading-relaxed"
            >
              {description}
            </p>

            {/* Action area - Consistent spacing */}
            <div className="inline">
            <div className="mt-fluid-m flex gap-fluid-s items-center">
              <AnimatedButton 
                text="My Resume"
                href={"https://1drv.ms/b/c/56798a0a94c08b35/EZCqn-YNOBVPovsamuPqzckBmxshyzfFP7RCWsYFYv0EUg?e=TheiuB"} 
                icon={<ExternalLink className="ml-1 -mt-0.8"/>}
                isExternal
              />
              <div className="w-fit">
          </div>
              <a
                href="https://github.com/tanay-787"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <GithubIcon className="w-8 h-8 xl:w-10 xl:h-10" />
              </a>
              <a
                href="https://linkedin.com/in/tanay-gupte"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <LinkedinIcon className="w-8 h-8 xl:w-10 xl:h-10" />
              </a>
            </div>
            </div>
          </div>

          {/* Visual area - Balanced sizing */}
          {/* <div 
            ref={containerRef}
            className="hidden lg:flex lg:col-span-5 xl:col-span-4 
                       relative items-center justify-center aspect-square 
                       max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full h-full"
            >
              <TechCloud width={dimensions.width} height={dimensions.height} /> 
            </motion.div>
          </div> */}
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-fluid-xl flex justify-center">
          <ScrollArrow
            href="#about-me"
            size="md"
            className="text-foreground"
            duration={1.4}
            spacing={14}
          />
        </div>
      </div>
    </section>
  );
}
