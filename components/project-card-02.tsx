import type { RepositoryTopicNode, RepositoryItem } from "@/lib/git-types"
import type * as React from "react"
import { GlowingEffect } from "./ui/glowing-effect"

// Simple GitHub icon
function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="h-5 w-5" {...props}>
      <path
        fill="currentColor"
        d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.2 3.4 9.6 8.2 11.2.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.9.9 2.6 1.3.8-.6 1.7-.8 2.6-.8s1.9.3 2.6.8c1.7-.4 1.6-1.2 2.6-1.3 0 0 .6-1 1.7-1.1 0 0 1.2 0 .1.7 0 0-.7.3-1.2 1.6 0 0-.7 2.3-4 1.6v2.2c0 .4.2.8.8.6 4.8-1.6 8.2-6 8.2-11.2A11.5 11.5 0 0 0 12 .5Z"
      />
    </svg>
  )
}
export type ProjectCardProps = RepositoryItem


/**
 * A sleek, larger Card for showcasing a GitHub repository.
 * - bg-background surface
 * - Partial snapshot preview with subtle hover pan
 * - Full-card link
 * - Distinct multi-colored bottom border with an anchor tab
 */
export function ProjectCard({
  name,
  description,
  url,
  homepageUrl,
  showcaseImage,
  repositoryTopics
}: ProjectCardProps) {
  return (
    <div
      id={`#${name}`}
      className="group relative isolate rounded-2xl bg-background ring-1 ring-border"
    >
      <GlowingEffect
        blur={0}
        borderWidth={1}
        spread={80}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      {/* Snapshot area: intentionally crops the image and reveals only a portion */}
      <div className="relative h-44 sm:h-60 overflow-hidden border-b border-muted">
        <img
          src={showcaseImage || "/placeholder.svg?height=400&width=800&query=project%20preview"}
          alt={name}
          className="h-full w-full object-cover object-top scale-110 translate-y-3"
        />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">{`"tanay-787"/${name}`}</p>
          <div className="inline-flex gap-4 text-muted-foreground" aria-hidden="true">
            <GitHubIcon />
            <GitHubIcon />
          </div>
        </div>

        <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">{name}</h3>

        {/* {description ? (
          <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">{description}</p>
        ) : null} */}

        {repositoryTopics?.nodes.length > 0 ? (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {repositoryTopics?.nodes?.map((t, idx) => (
              <span key={idx} className="rounded-full border border-muted px-2.5 py-1 text-xs text-foreground">
                {t.topic.name}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      {/* Stretched link */}
      <a href={url} className="absolute inset-0" aria-label={`Open ${name} repository`} />

      {/* Multi-colored segmented bottom border */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-2 grid grid-cols-12 overflow-hidden rounded-b-2xl">
        <div className="col-span-9 bg-blue-600" />
        <div className="col-span-2 bg-orange-600" />
        <div className="col-span-1 bg-emerald-600" />
      </div>
    </div>
  )
}
