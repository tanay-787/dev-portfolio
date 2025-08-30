'use client';

import React from 'react';
import {
  Box,
  Lock,
  Search,
  Settings,
  Sparkles
} from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { TypingText } from '@/components/animate-ui/text/typing';
import { ProjectCard } from '@/components/project-card';

export default function Projects({ projects }: { projects: any[] }) {
  console.log(projects);
  return (
    <section id='#projects' className="py-12 px-4 md:px-8 lg:px-12 mx-auto w-full max-w-[1440px] text-center">
      <div className="mb-4 max-w-[1128px] 2xl:max-w-[1880px] mx-auto">
        <TypingText

          className="text-scale-72 md:text-scale-72 font-semibold"
          text="Projects"
          cursor
          cursorClassName="font-semibold"
        />
      </div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects?.map((proj: any, idx: number) => (
          <li key={idx} className="relative rounded-2xl">
            <div className="relative h-full rounded-2xl">
              <GlowingEffect
                blur={0}
                borderWidth={1}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative flex flex-col justify-between gap-4 rounded-xl border p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    {proj.name}
                  </h3>
                </div>
                <p className="text-base text-gray-700 dark:text-neutral-400">
                  {proj.description}
                </p>
                
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
