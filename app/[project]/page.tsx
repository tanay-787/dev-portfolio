// async function getReadme(projectName: string) {
//     const res = await fetch(
//       `https://api.github.com/repos/tanay-787/${projectName}/readme`,
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//         },
//         next: { revalidate: 3600 },
//       }
//     );
  
//     if (!res.ok) return "No README available";
  
//     const json = await res.json();
//     return Buffer.from(json.content, "base64").toString("utf-8");
//   }

import { ProjectCard, ProjectCardProps } from "@/components/project-card-02";

const projectDetails: ProjectCardProps ={
  "name": "cleat-central",
  "description": "A MERN ecommerce platform developed as a final capstone project for upGrad FSD bootcamp",
  "url": "https://github.com/tanay-787/cleat-central",
  "homepageUrl": "https://cleat-central.vercel.app",
  showcaseImage: "https://raw.githubusercontent.com/tanay-787/cleat-central/main/Showcase.png",
  "repositoryTopics": {
    "nodes": [
      {
        "topic": {
          "name": "expressjs"
        }
      },
      {
        "topic": {
          "name": "mongodb"
        }
      },
      {
        "topic": {
          "name": "nodejs"
        }
      },
      {
        "topic": {
          "name": "reactjs"
        }
      },
      {
        "topic": {
          "name": "tailwindcss"
        }
      }
    ]
  }
}
  
  export default async function ProjectPage() {

    return (
      <main className="p-6 h-[100dvh] flex items-center justify-center">
        <ProjectCard {...projectDetails}/>
      </main>
    );
  }  