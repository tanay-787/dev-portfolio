import React from "react";
import { getPortfolioRepos } from "@/lib/getPortfolioRepos";
import ProjectsSkiper34 from "@/components/sections/projects-skiper34";
import Projects from "@/components/sections/projects";
import UtopiaDemo from "@/components/utopia-demo";

export default async function TestProjectsPage() {
  // const repos = await getPortfolioRepos();
  
  return (
    <div className="min-h-screen">
      <UtopiaDemo />
    </div>
  );
}
