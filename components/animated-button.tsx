"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { toast } from "sonner";

interface AnimatedButtonProps {
  text: string;
  href: string;
  icon: React.ReactNode;
  isBlogLink?: boolean; 
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ text, href, icon, isBlogLink = false }) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isBlogLink) {
      e.preventDefault();
      toast.info("Blog Pages are under construction"); // Changed to toast.info()
    }
  };

  return (
    <Button className="mt-6 rounded-full min-w-40 text-[15px]" asChild onClick={handleClick}>
      {isBlogLink ? (
        <a href="#" className="inline-flex items-center">
           <AnimateIcon animation="default-loop" loop animate>
            <span className="inline-flex items-center">
              {text}
              {icon}
            </span>
          </AnimateIcon>
        </a>
      ) : (
        <Link href={href} passHref>
          <AnimateIcon animation="default-loop" loop animate>
            <span className="inline-flex items-center">
              {text}
              {icon}
            </span>
          </AnimateIcon>
        </Link>
      )}
    </Button>
  );
};

export default AnimatedButton;