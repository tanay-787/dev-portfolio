/**
 * @library Internal
 * @description Optimized image component for MDX content with Next.js Image support and responsive sizing
 */

// components/mdx/MdxImage.tsx
"use client";

import Image from "next/image";

interface MdxImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
}

export function MdxImage({
  src,
  alt = "",
  width,
  height,
  fill,
  className,
}: MdxImageProps) {
  if (fill) {
    return (
      <div className="relative w-full h-64 rounded-lg">
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-contain rounded-lg ${className ?? ""}`}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 0}
      height={height || 0}
      sizes="100vw"
      style={{ width: "auto", height: "auto" }} // keeps natural aspect ratio
      unoptimized
      className={`my-8 rounded-lg border border-border/50 shadow-sm ${className ?? ""}`}
    />
  );
}
