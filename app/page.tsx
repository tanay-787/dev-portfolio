import React from "react";
import { getPortfolioRepos } from "@/lib/getPortfolioRepos"; // Import the data fetching function

import { NavigationBar } from "@/components/navigation-bar";
import { Spotlights } from "@/components/ui/spotlight-new";
import AboutMe from "@/components/sections/about-me";
import type { RepositoryItem } from "@/lib/git-types";
import Projects from "@/components/sections/projects";
import Footer from "@/components/sections/footer"
import NewHero from "@/components/sections/new-hero";
import ProjectsSkiper34 from "@/components/sections/projects-skiper34";
import Hero from "@/components/sections/hero";
import MagneticHero from "@/components/sections/magnetic-hero";


export default async function Page() {
  const repos = await getPortfolioRepos(); // Fetch data on the server
  
  return (
    <LandingPage repos={repos} />
  );
}


function LandingPage({ repos }: { repos: RepositoryItem[] }) {
  return (
    <div className="flex flex-col min-h-screen max-w-full">
      {/* Site Header (Navigation Bar) */}
      <NavigationBar />

      {/* Main content area with enhanced fluid spacing */}
      <main className="space-y-fluid-2xl">
        <Spotlights />
        <Hero />
        <AboutMe /> 
        {/* <Projects projects={repos} /> */}
        <ProjectsSkiper34 projects={repos} />
      </main>

      {/* Footer with fluid spacing */}
      <footer className="py-fluid-l py-12 text-center text-step--1 text-muted-foreground">
        <Footer />
      </footer>
    </div>
  );
}
