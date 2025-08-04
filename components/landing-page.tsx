"use client"

import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react"
import { NavigationBar } from "./navigation-bar"
import { NAV_ITEMS } from "@/config/nav";

const personalInfo = {
  name: "Tanay Gupte",
  title: "Fullstack Web Developer",
  email: "tanayyyyy7@gmail.com",
  phone: "+91 9321818049",
  location: "Dombivli, India",
  github: "https://github.com/tanay-787",
  linkedin: "https://linkedin.com/in/tanay-gupte-841685309",
}

const experience = [
  {
    title: "Frontend Development Hackathon - Winner",
    company: "KnowledgeHut upGrad",
    period: "September 2024",
    type: "Award",
    description:
      "Won the frontend development hackathon demonstrating exceptional skills in React and modern web technologies.",
  },
  {
    title: "Full Stack Development Bootcamp",
    company: "KnowledgeHut upGrad",
    period: "February 2024 – August 2024",
    type: "Training",
    description:
      "Completed comprehensive full-stack development training covering modern web technologies and best practices.",
  },
]

const projects = [
  {
    name: "CleatCentral",
    description: "E-commerce platform for football cleats with advanced filtering and cart functionality",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    link: "https://cleat-central.onrender.com",
  },
  {
    name: "Question Paper Archives System",
    description: "Educational platform with role-based dashboards for managing examination resources",
    technologies: ["React", "Firebase", "Express", "Tailwind CSS", "Tanstack Query"],
    link: "https://qpas.vercel.app",
  },
  {
    name: "ActFour Fitness",
    description: "Fitness tracking application with goal setting and progress monitoring",
    technologies: ["React", "Tailwind CSS", "React Router", "Vite"],
    link: "https://act4-fitness.surge.sh/",
  },
]

const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "Prisma"],
  tools: ["Git", "GitHub", "Docker", "Vite", "Render"],
}

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Royal College of Science and Commerce",
    period: "2022 – 2025 (Expected)",
    location: "Dombivli, India",
  },
]

export function ResumeLandingPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen p-6">
        <NavigationBar
          />
    <section id="resume" className="py-20 relative overflow-hidden bg-[#0a0a0a]" ref={ref}>
      {/* Hex-inspired background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #d4a574 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <Badge
              variant="outline"
              className="px-4 py-1 text-sm font-medium rounded-full border-[#d4a574] text-[#d4a574] bg-[#d4a574]/5"
            >
              Professional Resume
            </Badge>
          </div>

          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-white">
            <span className="bg-gradient-to-r from-[#d4a574] to-[#f4d4a4] bg-clip-text text-transparent">Resume</span>
          </h2>

          <div className="flex justify-center mb-8">
            <Button
              className="bg-transparent border border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-black transition-all duration-300"
              onClick={() => window.print()}
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants}>
            <Card className="bg-[#111111] border-[#d4a574]/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h1 className="text-4xl font-bold text-white mb-2">{personalInfo.name}</h1>
                  <p className="text-xl text-[#d4a574] mb-4">{personalInfo.title}</p>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Passionate web developer with a strong foundation in full-stack development. Eager to contribute to
                    impactful projects and deliver scalable solutions.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center text-gray-300">
                    <Mail className="h-4 w-4 text-[#d4a574] mr-2" />
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-[#d4a574] transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="h-4 w-4 text-[#d4a574] mr-2" />
                    <a href={`tel:${personalInfo.phone}`} className="hover:text-[#d4a574] transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 text-[#d4a574] mr-2" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#d4a574] transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#d4a574] transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants}>
            <Card className="bg-[#111111] border-[#d4a574]/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#d4a574] flex items-center">
                  <span className="w-2 h-2 bg-[#d4a574] rounded-full mr-3"></span>
                  Experience & Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-[#d4a574]/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-[#d4a574] rounded-full"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                      <Badge className="bg-[#d4a574]/10 text-[#d4a574] border-[#d4a574]/30 w-fit">{exp.type}</Badge>
                    </div>
                    <p className="text-[#d4a574] font-medium mb-1">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                    <p className="text-gray-300 text-sm">{exp.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Projects Section */}
          <motion.div variants={itemVariants}>
            <Card className="bg-[#111111] border-[#d4a574]/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#d4a574] flex items-center">
                  <span className="w-2 h-2 bg-[#d4a574] rounded-full mr-3"></span>
                  Featured Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="border border-[#d4a574]/10 rounded-lg p-4 hover:border-[#d4a574]/30 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#d4a574] hover:text-[#f4d4a4] transition-colors flex items-center text-sm"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View Project
                      </a>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} className="bg-[#d4a574]/5 text-[#d4a574] border-[#d4a574]/20 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <Card className="bg-[#111111] border-[#d4a574]/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#d4a574] flex items-center">
                  <span className="w-2 h-2 bg-[#d4a574] rounded-full mr-3"></span>
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold text-white mb-3 capitalize">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <Badge key={index} className="bg-[#d4a574]/10 text-[#d4a574] border-[#d4a574]/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <Card className="bg-[#111111] border-[#d4a574]/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#d4a574] flex items-center">
                  <span className="w-2 h-2 bg-[#d4a574] rounded-full mr-3"></span>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-[#d4a574]/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-[#d4a574] rounded-full"></div>
                    <h3 className="text-lg font-semibold text-white mb-1">{edu.degree}</h3>
                    <p className="text-[#d4a574] font-medium mb-1">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-1">{edu.period}</p>
                    <p className="text-gray-300 text-sm">{edu.location}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </div>
  )
}
