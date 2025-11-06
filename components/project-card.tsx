import { Button } from "./ui/moving-border";
import Image from "next/image";
import { getBlurDataURL } from "@/lib/image-blur";

type Project = {
    title: string;
    description: string;
    image: string;
    features: string[];
    technologies: React.ReactNode[]; // icons
    codeLink: string;
    liveLink?: string;
  };
  
  export function ProjectCard({
    title,
    description,
    image,
    features,
    technologies,
    codeLink,
    liveLink,
  }: Project) {
    return (
      <div className="grid lg:grid-cols-2 items-center gap-fluid-l px-fluid-s">
        {/* Image */}
        <div className="overflow-hidden rounded-xl border bg-card/30 shadow-lg">
          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            className="w-full h-full object-cover object-center image-fade-in"
            placeholder="blur"
            blurDataURL={getBlurDataURL(800, 600)}
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="text-left max-w-xl mx-auto space-y-fluid-s">
          <h3 className="text-step-1 font-semibold text-primary">{title}</h3>
          <p className="text-step--1 text-muted-foreground">{description}</p>

          <ul className="list-disc pl-fluid-s text-step--1 text-foreground">
            {features.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-fluid-xs items-center">
            {technologies.map((Icon, i) => (
              <div key={i} className="w-6 h-6 text-muted-foreground">
                {Icon}
              </div>
            ))}
          </div>
  
          <div className="flex gap-fluid-s pt-fluid-s">
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Code</Button>
            </a>
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <Button>Live Demo</Button>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
  