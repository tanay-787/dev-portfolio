'use client';
import React from "react";
import GithubIcon from "@/components/icons/assets/socials/github";
import LinkedinIcon from "@/components/icons/assets/socials/linkedin";
import ScrollArrow from "../scroll-arrow";
import { TypingText } from "@/components/landing-sections/hero/typing-text";
import AnimatedButton from "@/components/reusables/animated-button";
import { Status, StatusIndicator, StatusLabel } from "@/components/reusables/status";
import { ExternalLink } from "@/components/icons/animated";

type HeroSectionProps = {
  title?: React.ReactNode; // can be string or JSX (multiple lines)
  description?: string;
  className?: string;
};

export default function HeroSection({
  description = "A developer learning to build reliable, user-focused products across the stack.",
  className = "",
}: HeroSectionProps) {
  return (
    <section 
      aria-label="HeroSection" 
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-fluid-s"
    > 
      {/* Top spacer for navbar balance */}
      <div className="hidden sm:block h-4" aria-hidden="true" />

      {/* Standard landing container centered */}
      <div className="container-landing flex flex-col justify-center my-auto"> 
        <div className="flex items-center justify-center gap-fluid-l xl:gap-fluid-xl"> 
          
          {/* Content area */}
          <div className="w-full space-y-fluid-s flex flex-col items-center text-center">

            <Status status="online" className="mb-fluid-xs w-fit">
              <StatusIndicator />
              <StatusLabel>Open for Opportunities</StatusLabel>
            </Status>
            
            {/* HeroSection Title - Large, commanding single-line typography */}
            <h1 className="text-display-hero mt-fluid-xs leading-[0.90] tracking-tighter text-center sm:whitespace-nowrap">
              <span className="font-neo italic font-semibold">
                {"Tanay "} 
              </span>
              <span className="font-neo italic font-semibold text-brand">
                Gupte<TypingText text={''} cursorClassName="hidden lg:inline" cursor />
              </span>
            </h1>
            
            {/* Description - Better scaling for readability */}
            <p 
              className="mt-fluid-s max-w-xl text-step-0 text-muted-foreground leading-relaxed text-center mx-auto"
            >
              {description}
            </p>

            {/* Action area - Consistent spacing */}
            <div className="mt-fluid-m flex gap-fluid-xs items-center justify-center">
              <AnimatedButton 
                text="My Resume"
                href={"https://flowcv.com/resume/cnwfpbnd02uh"} 
                icon={<ExternalLink className="ml-1 -mt-0.8"/>}
                isExternal
              />
              <a
                href="https://github.com/tanay-787"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <GithubIcon className="size-8 xl:size-9" />
              </a>
              <a
                href="https://linkedin.com/in/tanay-gupte"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <LinkedinIcon className="size-8 xl:size-9" />
              </a>
            </div>
          </div>
        </div>
      </div>
        
      {/* Scroll indicator anchored cleanly at the bottom */}
      <div className="flex justify-center pb-fluid-s">
        <ScrollArrow
          href="#about-me"
          size="md"
          className="text-foreground"
          duration={1.4}
          spacing={14}
        />
      </div>
    </section>
  );
}
