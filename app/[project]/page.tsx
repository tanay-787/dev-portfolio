async function getReadme(projectName: string) {
    const res = await fetch(
      `https://api.github.com/repos/tanay-787/${projectName}/readme`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        next: { revalidate: 3600 },
      }
    );
  
    if (!res.ok) return "No README available";
  
    const json = await res.json();
    return Buffer.from(json.content, "base64").toString("utf-8");
  }
  
  export default async function ProjectPage({
    params,
  }: {
    params: { project: string };
  }) {
    const readme = await getReadme(params.project);
  
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">{params.project}</h1>
        <pre className="bg-gray-100 p-4 rounded">{readme.slice(0, 300)}...</pre>
      </main>
    );
  }  