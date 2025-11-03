import React from 'react';
import { TypingText } from '../ui/animate-ui/text/typing';
import type { RepositoryItem } from '@/lib/git-types';
import { ProjectGridCard } from '@/components/project-grid-card';
import { ProjectCard } from '@/components/project-card-02'
export default function Projects1({ projects }: { projects: RepositoryItem[] }) {
  return (
    <section id='projects' className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="mb-12">
          <h1 className="mt-4 text-[44px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-[0.95] font-extrabold tracking-tight">
            My <TypingText text={'Projects'} cursor />
          </h1>
        </div>
        <ul className="pt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {projects?.map((proj, idx) => (
            <li key={idx} className="">
              {/* <ProjectGridCard project={proj} /> */}
              <ProjectCard {...proj} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}