import { Button } from "@/components/ui/button";
import { TypingText } from "@/components/animate-ui/text/typing";
import Typewriter from 'typewriter-effect';

export default function Hero2() {
  return (
    <section id="hero2" className="relative w-full px-4 pt-28 md:pt-40 pb-12 md:pb-20">

      <div className="mx-auto w-full max-w-[1440px] text-center">

        {/* Animated Heading */}
        <div className="mb-4 max-w-[1128px] 2xl:max-w-[1880px] mx-auto">
          <Typewriter
            options={{
              strings: 'Crafting End-to-End',
              autoStart: true,
              loop: false,
              cursor: '_',
              cursorClassName: 'text-scale-72 md:text-scale-72 font-semibold',
              wrapperClassName: 'text-scale-72 md:text-scale-72 font-semibold'
            }}
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
          <Button size="lg" className="">
            Get Started
          </Button>
        </div>

      </div>
    </section>
  )
}