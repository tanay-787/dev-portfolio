/**
 * @library Internal
 * @description Component that extracts and displays matched tech stack from repository topics
 */

"use client"

import { FC } from "react";
import { RepositoryItem } from "@/lib/git-types";
import { techStack } from "@/lib/techStack";
import { TechStackCircles } from "./tech-stack-circles";

interface RepoTechStackProps {
  repo: RepositoryItem;
}

export const RepoTechStack: FC<RepoTechStackProps> = ({ repo }) => {
  const topics = repo.repositoryTopics.nodes.map(
    (t: any) => t.topic.name.toLowerCase()
  );

  const matchedStack = techStack.filter(item =>
    topics.includes(item.name.toLowerCase())
  );

  return (
    <>
      {matchedStack.length > 0 ? (
        <TechStackCircles items={matchedStack} overlap={7} size="md" />
      ) : (
        <p className="text-muted-foreground">Not specified</p>
      )}
    </>
  );
};
