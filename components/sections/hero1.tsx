'use client';
import React from "react";
import { motion } from "motion/react";
import { TechCloud } from "../tech-grid";
import GithubIcon from "../icons/socials/github"; // Adjust path if needed
import LinkedinIcon from "../icons/socials/linkedin"; // Adjust path if needed
import ScrollArrow from "./scroll-arrow";
import { TypingText } from "@/components/animate-ui/text/typing";
import { Button } from "../ui/button";

type Hero1Props = {
  title?: React.ReactNode; // can be string or JSX (multiple lines)
  description?: string;
  className?: string;
};

export default function Hero1({
  title = (
    <>
      Crafting
      <br />
      End-to-End<TypingText text={''} cursor/>
    </>
  ),
  description = "A passionate developer learning to build reliable, user-focused products across the stack.",
  className = "",
}: Hero1Props) {
  return (
    <section aria-label="Hero" className={`pt-12 lg:pt-0 pb-12 ${className}`}> {/* Adjusted padding, removed relative */}
      <div className="max-w-7xl mx-auto px-10 lg:px-12"> {/* Adjusted max-width and padding */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"> {/* Adjusted gap */}
          <div className="col-span-1 lg:col-span-7">
            <h1 className="mt-4 text-scale-72 leading-[0.95] font-extrabold tracking-tight">
              {title}
            </h1>
            

            <p className="mt-3 max-w-xl text-muted-foreground text-scale-18 ">
              {description}
            </p>

            <div className="mt-8 flex gap-4 items-center">
            <Button className="">
            Get Started
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

          <div className="col-span-1 lg:col-span-5 relative h-[30rem] md:h-[35rem] lg:h-[40rem] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <TechCloud />
            </motion.div>
          </div>
        </div>
        {/* ScrollArrow moved outside the grid but within the max-w-7xl container */}
        {/* <div className="hidden sm:flex justify-center">
          <ScrollArrow
            href="#about-me"
            size="lg"
            className="text-foreground"
            duration={1.4}
            spacing={14}
          />
        </div> */}
      </div>
    </section>
  );
}
