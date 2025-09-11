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
import Projects2 from "@/components/sections/projects2";
import Footer from "@/components/sections/footer"

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


       <Projects2 projects={repos} />

      </main>


      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground">
        {/* <div className="container mx-auto">Made with ❤️ by Tanay Gupte</div>
         */}
         <Footer />
      </footer>
    </div>
  );
}