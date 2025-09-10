"use client";

import { IconCloud } from "@/components/magicui/icon-cloud";
import { techStack } from "@/lib/techStack";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">
          Crafting <span className="">End-to-End</span>
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Building reliable, user-focused products across the stack
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button className="px-6 py-3 bg-white text-black rounded-full shadow-md hover:bg-gray-200 transition">
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition">
            See Projects
          </button>
        </div>
      </div>

      {/* Icon Cloud */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <IconCloud
          icons={techStack.map((t) => <t.Icon className="w-10 h-10" />)}
          width={800}   // adjust canvas size
          height={800}  // adjust canvas size
        />
      </div>
    </section>
  );
}
