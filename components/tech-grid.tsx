// components/TechGrid.tsx
import { techStack } from "@/lib/techStack";

export default function TechGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-7 gap-x-10 gap-y-12 place-items-center">
      {techStack.map(({ name, Icon }) => (
        <div
          key={name}
          className="group relative flex items-center justify-center text-muted-foreground hover:text-foreground transition duration-300"
          title={name}
        >
          <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 group-hover:scale-[1.15] transition-transform duration-300 ease-in-out" />
        </div>
      ))}
    </div>
  );
}

