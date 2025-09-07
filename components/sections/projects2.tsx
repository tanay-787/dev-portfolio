import { Button } from "@/components/ui/button";
import { ArrowRight, Repo } from "lucide-react";
import Link from "next/link";

const features = [
  {
    repo: "tanay-787/cleat-central",
    title: "Cleat-Central",
    details:
      "The Idea behind CleatCentral is creating a modern e-commerce platform designed providing an exlusive collection of football cleats which the users can buy from.",
    tutorialLink: "https://cleat-central.vercel.app",
  },
  {
    repo: "Project Management",
    title: "Streamline your workflows effortlessly",
    details:
      "Organize tasks, deadlines, and team collaboration in one place. Use customizable boards to manage projects efficiently and automate routine updates.",
    tutorialLink: "#",
  },
  {
    repo: "Customer Support",
    title: "Deliver seamless customer experiences",
    details:
      "Track and resolve customer queries faster with an integrated ticketing system. Set priorities, automate follow-ups, and enhance satisfaction with personalized responses.",
    tutorialLink: "#",
  },
  {
    repo: "Team Collaboration",
    title: "Stay connected with your team",
    details:
      "Simplify communication and align team efforts with shared boards and real-time updates. Enable transparent goal tracking and instant feedback for better results.",
    tutorialLink: "#",
  },
  {
    repo: "Product Development",
    title: "Accelerate innovation with ease",
    details:
      "Bring your product ideas to life by managing prototypes, feedback, and iterations in one place. Collaborate with your team to refine features and release with confidence.",
    tutorialLink: "#",
  },
];

const Projects2 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen w-full py-10 px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
          My Projects
        </h2>
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {features.map((feature) => (
            <div
              key={feature.repo}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse"
            >
              <div className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2" />
              <div className="basis-1/2 shrink-0">
                <span className="lowercase font-semibold text-sm text-muted-foreground">
                   {feature.repo}
                </span>
                <h4 className="mb-3 text-3xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  {feature.details}
                </p>
                <Button
                  asChild
                  className="mt-6 rounded-full min-w-40 text-[15px]"
                >
                  <Link href={feature.tutorialLink}>
                    Learn More <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects2;