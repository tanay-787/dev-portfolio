"use client"
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { motion } from "motion/react"
import { TechCloud } from "@/components/tech-cloud";

export default function Tools(){
    return (
        <section id="tools" className="relative w-full px-4 pt-28 md:pt-40 pb-24 md:pb-36">

          <div className="mx-auto w-full max-w-[1440px] text-center flex flex-col items-center justify-center gap-14">

            <div className="max-w-[655px] mx-auto">
              <TextEffect
                preset="fade"
                per="char"
                as="h3"
                className="text-scale-18 lg:text-scale-25 text-muted-foreground"
              >
                My evolving toolbox — ever growing, ever learning.
              </TextEffect>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <TechCloud />
            </motion.div>

          </div>
        </section>
    )
}