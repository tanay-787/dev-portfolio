import React from "react";
import { motion } from "motion/react";

import GithubIcon from "@/components/icons/socials/github"; // Adjust path if needed
import LinkedinIcon from "@/components/icons/socials/linkedin"; // Adjust path if needed
import ScrollArrow from "@/components/sections/scroll-arrow";
import { TypingText } from "@/components/ui/animate-ui/text/typing";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowRightIcon } from "@/components/ui/animate-ui/icons/arrow-right";
import { AnimateIcon } from "@/components/ui/animate-ui/icons/icon";


export default function ConstructionPage() {
  return (
    <section className={`flex items-center justify-center min-h-screen pb-12`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="col-span-1">
          <h1 className="mt-4 text-[44px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-[0.95] font-extrabold tracking-tight">
          <>
      This Portfolio is Under Construction<TypingText text={''} cursor/>
    </>
          </h1>
          

          <p className="mt-6 max-w-xl text-muted-foreground text-base sm:text-lg mx-auto">
          Want to see the progress? Click the button below
          </p>

          <div className="mt-8 flex gap-4 items-center justify-center">
          <Button className="" asChild>
            <a href="/landing">
            <AnimateIcon animation="default-loop" loop animate>
            <span className="inline-flex items-center">See Progress <ArrowRightIcon className="ml-1 -mt-0.8"/></span>
            </AnimateIcon>
            </a>
        </Button>
            <a
              href="https://github.com/tanay-787"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <GithubIcon className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <LinkedinIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}