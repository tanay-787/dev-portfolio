import { TextEffect } from "@/components/motion-primitives/text-effect";
import { Button } from "@/components/ui/button";
import { TypingText } from "@/components/animate-ui/text/typing";
import { cn } from "@/lib/utils"
import { RippleButton } from "../animate-ui/buttons/ripple";
import ScrollArrow from "./scroll-arrow";

export default function Hero1(className: any) {
  return (
    <section id="hero1" className={cn("relative w-full px-4 pt-28 md:pt-40 pb-12 md:pb-20",)}>

      <div className="mx-auto w-full max-w-[1440px] text-center">

        {/* Animated Heading */}
        <div className="mb-4 max-w-[1128px] 2xl:max-w-[1880px] mx-auto">
        <TypingText
      className="text-scale-72 md:text-scale-72 font-semibold"
      text="Tanay Gupte"
      cursor
      cursorClassName="font-semibold"
    />
        </div>

        {/* Subtitle Paragraph */}
        <div className="mx-auto flex justify-center items-center mb-6 lg:mb-10">
          <div className="max-w-[655px]">
            <p className="text-scale-16 lg:text-scale-18 text-muted-foreground">
              A developer learning to build reliable, user-focused products across the stack.
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-center items-center gap-4">
        <ScrollArrow
  href="#hero2"
  size="lg"
  className="text-foreground"
  duration={1.4}
  spacing={14}
/>

        </div>

      </div>
    </section>
  )
}