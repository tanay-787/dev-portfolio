"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";

interface AnimatedButtonProps {
  text: string;
  href: string;
  icon: React.ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ text, href, icon }) => {
  return (
    <Button className="mt-6 rounded-full min-w-40 text-[15px]" asChild>
      <Link href={href} passHref>
        <AnimateIcon animation="default-loop" loop animate>
          <span className="inline-flex items-center">
            {text}
            {icon}
          </span>
        </AnimateIcon>
      </Link>
    </Button>

  );
};

export default AnimatedButton;