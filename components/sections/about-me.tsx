import React from "react";
import ScrollArrow from "./scroll-arrow"; // Import ScrollArrow

export default function AboutMe() {
  return (
    <section aria-label="About Me" id="about-me" className="py-16 pb-24"> {/* Removed relative from here */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Section */}
          <div className="col-span-1 lg:col-span-7">
            <h2 className="text-scale-72">
              About Me
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed">
              Hey, I’m <span className="font-playfair italic font-semibold leading-[none]">Tanay</span>, an
              innovative and curious developer passionate about building
              user-centered applications. I enjoy solving problems, designing
              smooth user experiences, and bringing creative ideas to life with
              modern web technologies.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold">🎓 Education</h3>
                <p className="text-muted-foreground">
                  Bachelor of Science in Information Technology (BSc. IT), Royal
                  College of Science and Commerce (2022 – 2025)
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">📚 Courses</h3>
                <p className="text-muted-foreground">
                  Full Stack Development Bootcamp – KnowledgeHut UpGrad (Aug
                  2024)
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">🏆 Awards</h3>
                <p className="text-muted-foreground">
                  Winner, Frontend Development Hackathon 2024 – KnowledgeHut
                  UpGrad
                </p>
              </div>
            </div>
          </div>

          {/* Avatar / Graphic Art */}
          <div className="col-span-1 lg:col-span-5 flex items-center justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-primary/30">
              {/* Replace this div with your graphic art / avatar image */}
              <img
                src="/avatar.png"
                alt="Tanay Gupte Avatar"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        {/* ScrollArrow moved outside the grid but within the max-w-7xl container */}
        <div className="mt-12 flex justify-center">
          <ScrollArrow
            href="#projects"
            size="lg"
            className="text-foreground"
            duration={1.4}
            spacing={14}
          />
        </div>
      </div>
    </section>
  );
}