import React from "react";
import { getPortfolioRepos } from "@/lib/getPortfolioRepos"; // Import the data fetching function

import { NavigationBar } from "@/components/navigation-bar";
import { Spotlights } from "@/components/ui/spotlight-new";
import AboutMe from "@/components/sections/about-me";
import type { RepositoryItem } from "@/lib/git-types";
import Footer from "@/components/sections/footer"
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";


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
        <Projects projects={repos} />
      </main>

      {/* Footer with fluid spacing */}
      <footer className="py-fluid-l py-12 text-center text-step--1 text-muted-foreground">
        <Footer />
      </footer>
    </div>
  );
}
