// components/BlogPage.tsx
import React from "react";
import ReactMarkdown from "react-markdown";

export default function BlogPage({ project, blogMarkdown }: { project: any; blogMarkdown: string }) {
  return (
    <div className="max-w-3xl mx-auto p-6">
       
      <h1 className="capitalize text-8xl tracking-tighter">{project.name}</h1>
      <img className="w-full object-contain bg-muted rounded-xl border border-border/50 basis-1/2" src={project.showcaseImage!} />

      <div className="mt-8 prose">
        <ReactMarkdown>{blogMarkdown}</ReactMarkdown>
      </div>
    </div>
  );
}
