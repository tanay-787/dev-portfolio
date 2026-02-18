import React from "react";
import ScrollArrow from "../scroll-arrow";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section aria-label="About Me" id="about-me" className="pt-fluid-3xl pb-fluid-2xl">
      {/* Enhanced container for better large screen utilization */}
      <div className="w-full max-w-[90vw] xl:max-w-[85vw] 2xl:max-w-[80vw] mx-auto px-fluid-m lg:px-fluid-l">
        {/* Section header - enhanced scaling */}
        <h2 className="text-display-section w-full text-center mb-fluid-l">
          <span className="inline font-neo italic font-semibold">{'About '}</span>
          <span className="inline text-brand">Me</span>
        </h2>
        
        {/* Enhanced content grid with better proportions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-fluid-l xl:gap-fluid-xl items-center">

          {/* Avatar / Graphic Art */}
          <div className="col-span-1 lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full h-full max-w-[465px] rounded-full overflow-hidden shadow-xl border-4 border-primary/30 p-fluid-s">
              <Image
                src="/my-avatar.png"
                alt="Tanay Gupte Avatar"
                width={465}
                height={465}
                className="object-cover w-full h-full image-fade-in"
                priority
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="col-span-1 lg:col-span-7">
            <p className="mt-fluid-m max-w-xl text-muted-foreground text-step-0 leading-relaxed">
              Hey, I’m <span className="font-neo italic font-semibold leading-[none] text-brand">Tanay</span>, an
              innovative and curious developer passionate about building
              user-centered applications. I enjoy solving problems, designing
              smooth user experiences, and bringing creative ideas to life with
              modern web technologies.
            </p>

            {/* Achievement sections - subtle but structured hierarchy */}
            <div className="mt-fluid-m space-y-fluid-s">
              <div>
                <h3 className="text-step-0 font-semibold">🎓 Education</h3>
                <p className="text-muted-foreground text-step--1 mb-fluid-s">
                  Bachelor of Science in Information Technology (BSc. IT), Royal
                  College of Science and Commerce (2022 – 2025)
                </p>
              </div>

              <div>
                <h3 className="text-step-0 font-semibold mb-fluid-3xs">📚 Courses</h3>
                <p className="text-muted-foreground text-step--1 mb-fluid-s">
                  Full Stack Development Bootcamp – KnowledgeHut UpGrad (Aug
                  2024)
                </p>
              </div>

              <div>
                <h3 className="text-step-0 font-semibold mb-fluid-3xs">🏆 Awards</h3>
                <p className="text-muted-foreground text-step--1">
                  Winner, Frontend Development Hackathon 2024 – KnowledgeHut
                  UpGrad
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="mt-fluid-xl flex justify-center">
          <ScrollArrow
            href="#projects"
            size="md"
            className="text-foreground"
            duration={1.4}
            spacing={14}
          />
        </div>
      </div>
    </section>
  );
}