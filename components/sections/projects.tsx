'use client';

import React from 'react';
import { TypingText } from '../animate-ui/text/typing';
import type { RepositoryItem } from '@/lib/git-types';
import { ProjectGridCard } from '@/components/project-grid-card';

export default function Projects({ projects }: { projects: RepositoryItem[] }) {
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
        {projects?.map((proj, idx) => (
          <li key={idx} className="relative rounded-2xl">
            <ProjectGridCard project={proj} />
          </li>
        ))}
      </ul>
    </section>
  );
}
