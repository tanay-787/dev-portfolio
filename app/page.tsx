import React from "react";
import { getPortfolioRepos } from "@/lib/getPortfolioRepos"; // Import the data fetching function

import { NavigationBar } from "@/components/global/navigation-bar";
import { Spotlights } from "@/components/landing-sections/spotlight-new";
import AboutMe from "@/components/landing-sections/about-me";
import type { RepositoryItem } from "@/lib/git-types";
import Footer from "@/components/global/footer"
import HeroSection from "@/components/landing-sections/hero";
import ProjectsSection from "@/components/landing-sections/projects";


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

      {/* Main content area */}
      <main>
        <Spotlights />
        <HeroSection />
        <AboutMe /> 
        <ProjectsSection projects={repos} />
      </main>

      {/* Footer with fluid spacing */}
      <footer className="py-fluid-l text-center text-step--1 text-muted-foreground">
        <Footer />
      </footer>
    </div>
  );
}
