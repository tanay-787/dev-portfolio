const query = `
 {
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
            }
          }
        }
      }
    }
  }
}
`;

export async function getPortfolioRepos() {
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

  const { data } = await res.json();

  if(data){
    console.log(data);
  }

  const portfolioList = data?.user?.lists.nodes.find(
    (list: any) => list.name.toLowerCase() === "portfolio"
  );

  return portfolioList?.items?.nodes || [];
}
