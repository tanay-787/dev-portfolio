"use client";

import { NavigationBar } from "@/components/navigation-bar";
import { Button } from "@/components/ui/button"; // Using Shadcn Button
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { Spotlights } from "@/components/ui/spotlight-new";
import { Spotlight } from "@/components/ui/spotlight";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TechGrid from "@/components/tech-grid";
import { techStack } from "@/lib/techStack";
import { motion } from "motion/react"
import { ProjectsSection } from "@/components/sections/project-section";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Site Header (Navigation Bar) */}
      <NavigationBar /> {/* This should be the actual NavigationBar component */}

      {/* Main content area */}
      <main className="flex-1">
      <Spotlights />
        {/* Hero Section */}
        <section id="hero" className="relative w-full px-4 pt-28 md:pt-40 pb-12 md:pb-20">
          
          <div className="mx-auto w-full max-w-[1440px] text-center">

            {/* Animated Heading */}
            <div className="mb-4 max-w-[1128px] 2xl:max-w-[1880px] mx-auto">
              <TextEffect
                preset="blur"
                per="char"
                as="h1"
                className="text-scale-72 md:text-scale-72 font-semibold"
              >
                Crafting End-to-End
              </TextEffect>
            </div>

            {/* Subtitle Paragraph */}
            <div className="mx-auto flex justify-center items-center mb-6 lg:mb-10">
              <div className="max-w-[655px]">
                <p className="text-scale-16 lg:text-scale-18 text-muted-foreground">
                  A developer learning to build reliable, user-focused products across the stack.
                </p>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-center items-center gap-4">
              <Button size="lg" className="">
                Get Started
              </Button>
            </div>

          </div>
        </section>


        <section id="tech" className="relative w-full px-4 pt-28 md:pt-40 pb-24 md:pb-36">

          <div className="mx-auto w-full max-w-[1440px] text-center flex flex-col items-center justify-center gap-14">

            <div className="max-w-[655px] mx-auto">
              <TextEffect
                preset="fade"
                per="char"
                as="h3"
                className="text-scale-18 lg:text-scale-25 text-muted-foreground"
              >
                My evolving toolbox — ever growing, ever learning.
              </TextEffect>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <TechGrid />
            </motion.div>

          </div>
        </section>




        {/* Projects Section */}
       <ProjectsSection />

        {/* Testimonials Section */}
        <section id="testimonials" className="flex items-center justify-center h-screen">
          <div className="container mx-auto text-center px-4">
            <h2 className="mb-12 text-foreground">
              {/* Placeholder for Testimonials Title */}
              What Our Customers Say
            </h2>
            {/* Placeholder Testimonial */}
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <p className="text-lg italic mb-4 text-foreground">"This is an amazing product that has transformed the way I work!"</p>
                <p className="text-base font-semibold">- Satisfied Customer</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground">
        <div className="container mx-auto">&copy; {new Date().getFullYear()} Your Company</div>
        {/* Placeholder for Footer Links/Content */}
      </footer>
    </div>
  );
}
