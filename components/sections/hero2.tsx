import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import { TypingText } from "@/components/animate-ui/text/typing";
import React from "react";

const Hero02 = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-10 items-center justify-center px-6 py-16">
      <div className="text-center max-w-2xl">
        <Badge className="bg-accent text-accent-foreground rounded-full py-1 border-none">
          Hello, I'm Tanay!
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
        <>
      Crafting
      <br />
      End-to-End<TypingText text={''} cursor/>
    </>
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
        A passionate developer learning to build reliable, user-focused products across the stack.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            Get Started <ArrowUpRight className="!h-5 !w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <CirclePlay className="!h-5 !w-5" /> Watch Demo
          </Button>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto aspect-video bg-accent rounded-xl" />
    </div>
  );
};

export default Hero02;
