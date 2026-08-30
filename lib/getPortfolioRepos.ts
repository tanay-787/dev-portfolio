import { getShowcaseUrl } from "@/lib/getShowcaseUrl";
import type { PortfolioQueryResponse, RepositoryItem } from "./git-types"; 


const query = `{
  user(login: "tanay-787") {
    lists(first: 10) {
      nodes {
        name
        items(first: 20) {
          nodes {
            ... on Repository {
              name
              description
              url
              homepageUrl
              repositoryTopics(first: 10){
                nodes{
                  topic{
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`;

export async function getPortfolioRepos(): Promise<RepositoryItem[]> {
  try {
    if (!process.env.GITHUB_TOKEN) {
      console.warn("GITHUB_TOKEN environment variable is not set. Returning empty repo list for build.");
      return [];
    }

    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 }, // cache 1h
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to fetch GitHub lists: ${res.status} ${res.statusText} - ${errorText}`);
    }

    const response = await res.json();
    if (response.errors) {
      console.error("GitHub GraphQL errors:", response.errors);
      throw new Error(`GitHub GraphQL error: ${JSON.stringify(response.errors)}`);
    }

    const { data }: PortfolioQueryResponse = response;

    const portfolioList = data?.user?.lists.nodes.find(
      (list) => list.name.toLowerCase() === "portfolio"
    );

    if (!portfolioList) {
      console.error("Portfolio list not found. Available lists:", data?.user?.lists.nodes.map((l: any) => l.name));
      throw new Error("Portfolio list not found in GitHub");
    }

    const repos = portfolioList?.items?.nodes || [];

    return Promise.all(repos.map(async (repo: any) => {
      const showcase = await getShowcaseUrl("tanay-787", repo.name);
      return {
        ...repo,
        showcaseImage: showcase.image,
        showcaseVideo: showcase.video,
      };
    }));
  } catch (error) {
    console.error("Error in getPortfolioRepos:", error);
    throw error;
  }
}

