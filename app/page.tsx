import React from "react";
import LandingPage from "./LandingPage"; // Import the LandingPage component
import { getPortfolioRepos } from "@/lib/getPortfolioRepos"; // Import the data fetching function

export default async function Page() {
  const repos = await getPortfolioRepos(); // Fetch data on the server
  
  return (
    <LandingPage repos={repos} />
  );
}
