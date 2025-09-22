"use client"

import { TechStackCircles } from "@/components/tech-stack-circles"
import { techStack } from "@/lib/techStack"

export default function TechCircles() {
  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-3xl font-bold mb-6">Tech Stack Circles</h1>
        <p className="text-muted-foreground mb-8">
          A responsive component for displaying tech stack items as overlapping circles with SVG icons.
        </p>

        <TechStackCircles items={techStack} size="md"  overlap={15} className="mb-8" />
      </div>
    </div>
  )
}
