import LandingPage from "./LandingPage";
import { getPortfolioRepos } from "@/lib/getPortfolioRepos";

export default async function Page() {
  const repos:[] = await getPortfolioRepos();
  return <LandingPage repos={repos} />;
}
