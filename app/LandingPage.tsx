"use client";

import { NavigationBar } from "@/components/navigation-bar";
import { Spotlights } from "@/components/ui/spotlight-new";
import { Spotlight } from "@/components/ui/spotlight";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { motion } from "motion/react"
import Projects from "@/components/sections/projects";
import Hero1 from "@/components/sections/hero1";
import Tools from "@/components/sections/tools";
import AboutMe from "@/components/sections/about-me";
import type { RepositoryItem } from "@/lib/git-types";

export default function LandingPage({ repos }: { repos: RepositoryItem[] }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Site Header (Navigation Bar) */}
      <NavigationBar />

      {/* Main content area */}
      <main className="flex-1 ">
      {/* <Spotlights /> */}
        <Hero1 />

        <AboutMe /> 
{/*        
        <Tools /> */}




        {/* Projects Section */}
       <Projects projects={repos} />

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
