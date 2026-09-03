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
  description = "Building user-focused products by combining product thinking with hands-on engineering.",
  className = "",
}: HeroSectionProps) {
  return (
    <section 
      aria-label="HeroSection" 
      className="relative min-h-screen hidden md:flex flex-col justify-between pt-24 pb-fluid-s"
    > 
      {/* Top spacer for navbar balance */}
      <div className="hidden sm:block h-4" aria-hidden="true" />

      {/* Standard landing container centered */}
      <div className="container-landing flex flex-col justify-center my-auto"> 
        <div className="flex items-center justify-center"> 
          
          {/* Content area: Unified CSS Grid */}
          <div className="w-fit max-w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-x-fluid-m gap-y-fluid-s text-left">

            <div className="col-span-1 md:col-span-2">
              <Status status="online" className="w-fit">
                <StatusIndicator />
                <StatusLabel>Open for Opportunities</StatusLabel>
              </Status>
            </div>
            
            {/* HeroSection Title - Large, commanding single-line typography */}
            <h1 className="col-span-1 md:col-span-2 text-display-hero mt-fluid-xs leading-[0.90] tracking-tighter text-left sm:whitespace-nowrap">
              <span className="font-neo italic font-semibold">
                {"Tanay "} 
              </span>
              <span className="font-neo italic font-semibold text-brand relative inline-block">
                Gupte
                {/* <TypingText text={''} cursorClassName="hidden lg:inline lg:absolute lg:left-full lg:ml-1" cursor /> */}
              </span>
            </h1>
            
            {/* Description */}
            <p className="col-span-1 max-w-md lg:max-w-lg text-step-0 text-muted-foreground leading-relaxed self-center">
              {description}
            </p>

            {/* Action area: full height, pinned to right edge */}
            <div className="col-span-1 flex gap-fluid-xs items-center justify-start md:justify-end h-8 md:h-full md:max-h-16 justify-self-start md:justify-self-end">
              <a
                href="https://github.com/tanay-787"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center justify-center h-full aspect-square"
              >
                <GithubIcon className="h-full w-full" />
              </a>
              <a
                href="https://linkedin.com/in/tanay-gupte"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center justify-center h-full aspect-square"
              >
                <LinkedinIcon className="h-full w-full" />
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
