'use client';

import React from 'react';
import Image from 'next/image';
import type { RepositoryItem } from '@/lib/git-types';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getBlurDataURL } from '@/lib/image-blur';

export function ProjectGridCard({ project }: { project: RepositoryItem }) {
  return (
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
    
      <div className="relative flex flex-col justify-between gap-4 rounded-xl border p-6 hover:shadow-lg transition-shadow h-full">
      <div className="relative h-44 sm:h-60 overflow-hidden border-b border-muted">
        <Image
          src={project.showcaseImage || "/placeholder.svg?height=400&width=800&query=project%20preview"}
          alt={project.name}
          width={800}
          height={240}
          className="h-full w-full object-cover object-top scale-110 translate-y-3 transition-transform duration-500 ease-out group-hover:translate-y-0 group-hover:scale-105 image-fade-in"
          placeholder="blur"
          blurDataURL={getBlurDataURL(800, 240)}
          loading="lazy"
        />
      </div>
        <div className="flex-grow">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-semibold text-black dark:text-white">
              {project.name}
            </h3>
          </div>
          <p className="text-base text-gray-700 dark:text-neutral-400 mt-2">
            {project.description}
          </p>
          {project.repositoryTopics.nodes.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {project.repositoryTopics.nodes.map((topicNode, topicIdx) => (
                <Badge key={topicIdx} variant="secondary">{topicNode.topic.name}</Badge>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-4 mt-4">
          {project.homepageUrl && (
            <a href={project.homepageUrl} target="_blank" rel="noopener noreferrer" className='w-full'>
              <Button className='w-full'>Live Demo</Button>
            </a>
          )}
          <a href={project.url} target="_blank" rel="noopener noreferrer" className='w-full'>
            <Button variant="outline" className='w-full'>GitHub</Button>
          </a>
          
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-2 grid grid-cols-12 overflow-hidden rounded-b-2xl">
        <div className="col-span-9 bg-blue-600" />
        <div className="col-span-2 bg-orange-600" />
        <div className="col-span-1 bg-emerald-600" />
      </div>
      </div>
    </div>
  );
}
