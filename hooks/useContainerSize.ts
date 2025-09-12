"use client";

import { useState, useEffect, useRef } from 'react';
import React from 'react';

type Dimensions = {
  width: number;
  height: number;
};

export const useContainerSize = <T extends HTMLElement>(): [React.RefObject<T | null>, Dimensions] => {
  const ref = useRef<T | null>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Set initial dimensions
    setDimensions({
      width: element.offsetWidth,
      height: element.offsetHeight,
    });

    const resizeObserver = new ResizeObserver(entries => {
      if (!entries || entries.length === 0) return;
      const contentRect = entries[0].contentRect;
      setDimensions({
        width: contentRect.width,
        height: contentRect.height
      });
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.unobserve(element);
    };
  }, []);

  return [ref, dimensions];
};
