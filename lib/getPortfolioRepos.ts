import { getRawGithubFileUrl } from "@/lib/getRawGithubFileUrl";
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
  }
}`;

export async function getPortfolioRepos(): Promise<RepositoryItem[]> {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 3600 }, // cache 1h
  });

  if (!res.ok) throw new Error("Failed to fetch GitHub lists");

  const { data }: PortfolioQueryResponse = await res.json();

  const portfolioList = data?.user?.lists.nodes.find(
    (list) => list.name.toLowerCase() === "portfolio"
  );

  const repos = portfolioList?.items?.nodes || [];

  return repos.map((repo: any) => ({
    ...repo,
    showcaseImage: getRawGithubFileUrl("tanay-787", repo.name, "Showcase.png"),
  }));
}

