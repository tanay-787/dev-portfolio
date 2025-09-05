import LandingPage from "../LandingPage";
import { getPortfolioRepos } from "@/lib/getPortfolioRepos";
import type { RepositoryItem } from "@/lib/git-types";

export default async function Page() {
  const repos: RepositoryItem[] = await getPortfolioRepos();
  return <LandingPage repos={repos} />;
}
