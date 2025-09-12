"use client";

import { techStack } from "@/lib/techStack";
import dynamic from "next/dynamic";
import React from 'react';

const DynamicIconCloud = dynamic(
  () => import("./magicui/icon-cloud").then((mod) => mod.IconCloud),
  { ssr: false }
);

// FLAT ICON GRID
// export default function TechGrid() {
//   return (
//     <div className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-6 xl:grid-cols-7 gap-x-10 gap-y-12 place-items-center">
//       {techStack.map(({ name, Icon }) => (
//         <div
//           key={name}
//           className="group relative flex items-center justify-center text-muted-foreground hover:text-foreground transition duration-300"
//           title={name}
//         >
//           <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 group-hover:scale-[1.15] transition-transform duration-300 ease-in-out" />
//         </div>
//       ))}
//     </div>
//   );
// }

type TechCloudProps = {
  width?: number;
  height?: number;
};

export function TechCloud({ width, height }: TechCloudProps){
  return(
    <div className="relative flex h-full w-full items-center justify-center rounded-lg bg-background">
        <DynamicIconCloud icons={techStack} height={height} width={width}/>
    </div>
  )
}
