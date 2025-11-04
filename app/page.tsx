import React from "react";
import { getPortfolioRepos } from "@/lib/getPortfolioRepos"; // Import the data fetching function

import { NavigationBar } from "@/components/navigation-bar";
import { Spotlights } from "@/components/ui/spotlight-new";
import Hero1 from "@/components/sections/hero";
import Tools from "@/components/sections/tools";
import AboutMe from "@/components/sections/about-me";
import type { RepositoryItem } from "@/lib/git-types";
import Projects from "@/components/sections/projects";
import Footer from "@/components/sections/footer"
import Hero2 from "@/components/sections/sample-hero";
import NewHero from "@/components/sections/new-hero";


export default async function Page() {
  const repos = await getPortfolioRepos(); // Fetch data on the server
  
  return (
    <LandingPage repos={repos} />
  );
}


function LandingPage({ repos }: { repos: RepositoryItem[] }) {
  return (
    <div className="flex flex-col min-h-screen max-w-full justify-center">
      {/* Site Header (Navigation Bar) */}
      <NavigationBar />

      {/* Main content area */}
      <main className="">
      <Spotlights />
        {/* <Hero1 /> */}

        <NewHero/>

        
        
        <AboutMe /> 
       
        {/* <Tools /> */}


       <Projects projects={repos} />

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
