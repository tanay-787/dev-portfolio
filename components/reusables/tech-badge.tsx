/**
 * @library Internal
 * @inspired-from https://www.kibo-ui.com/components/status
 */

import type { ComponentProps, HTMLAttributes } from "react";
import { Badge } from "@/components/reusables/primitives/badge";
import { cn } from "@/lib/utils";
import { techStack } from "@/lib/techStack";
import NPM from "@/components/icons/assets/colored/npm";
import GithubIcon from "@/components/icons/assets/socials/github"

export type TechBadgeProps = ComponentProps<typeof Badge> & {
  icon: string;
  packageUrl?: string;
  repoUrl?: string;
};

export const TechBadge = ({ className, icon, packageUrl, repoUrl, ...props }: TechBadgeProps) => {
  const tech = techStack.find((t) => t.name === icon);
  const Icon = repoUrl ? GithubIcon : packageUrl ? NPM : tech?.Icon;
  const url = repoUrl || packageUrl || tech?.url;

  const badgeContent = (
    <>
      {Icon && <Icon className="h-3 w-3" />}
      <span className="text-sm">{icon}</span>
    </>
  );

  return (
    <Badge
      className={cn("inline-flex items-center gap-1.5 align-middle", className)}
      variant="secondary"
      {...props}
      asChild={!!url}
    >
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {badgeContent}
        </a>
      ) : (
        badgeContent
      )}
    </Badge>
  );
};

export type TechBadgeLabelProps = HTMLAttributes<HTMLSpanElement>;

export const TechBadgeLabel = ({
  className,
  children,
  ...props
}: TechBadgeLabelProps) => (
  <span className={cn("text-muted-foreground", className)} {...props}>
    {children}
  </span>
);
