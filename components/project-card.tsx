import { Button } from "./ui/moving-border";

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
      <div className="grid lg:grid-cols-2 items-center gap-10 px-4">
        {/* Image */}
        <div className="overflow-hidden rounded-xl border bg-card/30 shadow-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        </div>
  
        {/* Content */}
        <div className="text-left max-w-xl mx-auto space-y-4">
          <h3 className="text-scale-24 font-semibold text-primary">{title}</h3>
          <p className="text-scale-16 text-muted-foreground">{description}</p>
  
          <ul className="list-disc pl-4 text-scale-16 text-foreground">
            {features.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
  
          <div className="flex flex-wrap gap-3 items-center">
            {technologies.map((Icon, i) => (
              <div key={i} className="w-6 h-6 text-muted-foreground">
                {Icon}
              </div>
            ))}
          </div>
  
          <div className="flex gap-4 pt-4">
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
  