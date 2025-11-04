"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TechStackItem {
  id?: string
  name: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> // <- accept an SVG component
  color?: string
}

interface TechStackCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  items: TechStackItem[]
  maxItems?: number
  size?: "sm" | "md" | "lg"
  overlap?: number
  className?: string
}

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
}

export function TechStackCircles({
  items,
  maxItems = 10,
  size = "md",
  overlap = 15,
  className,
  ...props
}: TechStackCirclesProps) {
  const visibleItems = items.slice(0, maxItems)
  const remainingCount = Math.max(0, items.length - maxItems)
  const sizeClass = sizeMap[size]

  return (
    <div className={cn("flex items-center", className)} {...props}>
      <div className="flex">
        {visibleItems.map((item, index) => {
          const Icon = item.Icon
          return (
            <div
              key={item.id ?? item.name}
              className={cn(
                "flex items-center justify-center rounded-full bg-muted border-none border-background",
                sizeClass,
                "transition-transform hover:scale-110 hover:z-10",
                "shadow-sm",
                {
                  "-ml-3 first:ml-0": overlap > 0,
                }
              )}
              style={{
                marginLeft: index > 0 ? `-${overlap}%` : 0,
              }}
              title={item.name}
            >
              <Icon className={cn("w-1/2 h-1/2", item.color)} />
            </div>
          )
        })}
        {remainingCount > 0 && (
          <div
            className={cn(
              "flex items-center justify-center rounded-full bg-muted border-2 border-background text-xs font-medium",
              sizeClass,
              "-ml-3"
            )}
            title={`${remainingCount} more`}
          >
            +{remainingCount}
          </div>
        )}
      </div>
    </div>
  )
}
