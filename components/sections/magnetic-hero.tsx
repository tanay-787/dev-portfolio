'use client';
import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import GithubIcon from "../icons/socials/github";
import LinkedinIcon from "../icons/socials/linkedin";
import ScrollArrow from "./scroll-arrow";
import AnimatedButton from "../animated-button";
import { Download } from "../ui/animate-ui/icons/download";
import { Status, StatusIndicator, StatusLabel } from "@/components/kibo-ui/status";

type MagneticHeroProps = {
  description?: string;
  className?: string;
};

export default function MagneticHero({
  description = "Where code meets creativity, and possibilities become reality.",
  className = "",
}: MagneticHeroProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animations for smooth magnetic attraction
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const translateX = useSpring(mouseX, springConfig);
  const translateY = useSpring(mouseY, springConfig);

  // Parallax transforms for depth
  const titleY = useTransform(mouseY, [-200, 200], [-10, 10]);
  const subtitleY = useTransform(mouseY, [-200, 200], [5, -5]);
  const orbitRotate = useTransform(mouseX, [-400, 400], [-15, 15]);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setDimensions({ width: clientWidth, height: clientHeight });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    
    mouseX.set(x * 0.1);
    mouseY.set(y * 0.1);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  // Floating particles for ambient interaction
  const FloatingOrb = ({ delay, scale, duration }: { delay: number; scale: number; duration: number }) => (
    <motion.div
      className="absolute w-2 h-2 bg-brand/20 rounded-full blur-sm"
      initial={{ 
        x: Math.random() * 400 - 200,
        y: Math.random() * 300 - 150,
        scale: 0 
      }}
      animate={{
        y: [null, Math.random() * 100 - 50],
        scale: [0, scale, 0],
        opacity: [0, 0.6, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        x: translateX,
        y: translateY,
        rotate: orbitRotate,
      }}
    />
  );

  return (
    <section 
      aria-label="Hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background/50"
    >
      {/* Ambient background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
        className="relative w-full max-w-[90vw] xl:max-w-[85vw] 2xl:max-w-[80vw] mx-auto px-fluid-m lg:px-fluid-l cursor-none"
      >
        {/* Floating orbs that respond to mouse */}
        {Array.from({ length: 12 }).map((_, i) => (
          <FloatingOrb 
            key={i} 
            delay={i * 0.2} 
            scale={Math.random() * 0.5 + 0.5}
            duration={Math.random() * 3 + 3}
          />
        ))}

        {/* Main content */}
        <div className="relative z-10 text-center space-y-fluid-l">
          {/* Status badge with magnetic attraction */}
          <motion.div
            style={{ y: titleY }}
            className="flex justify-center"
          >
            <Status status="degraded" className="w-fit backdrop-blur-sm">
              <StatusIndicator />
              <StatusLabel>Crafting Something Extraordinary</StatusLabel>
            </Status>
          </motion.div>

          {/* Hero title with staggered magnetic response */}
          <motion.div 
            style={{ y: titleY }}
            className="space-y-fluid-xs"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-display-hero font-neo"
            >
              <motion.span 
                className="block italic font-light tracking-tighter leading-none text-muted-foreground"
                whileHover={{ 
                  color: "hsl(var(--foreground))",
                  transition: { duration: 0.3 }
                }}
              >
                Tanay Gupte
              </motion.span>
              
              <motion.span 
                className="block font-bold tracking-tighter leading-none mt-fluid-xs bg-gradient-to-r from-brand via-brand-secondary to-brand bg-clip-text text-transparent"
                style={{ y: subtitleY }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                Full-Stack Architect
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Interactive subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ y: subtitleY }}
            className="max-w-2xl mx-auto text-muted-foreground leading-relaxed text-step-1 px-fluid-s"
          >
            {description}
          </motion.p>

          {/* Magnetic action buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex gap-fluid-s items-center justify-center flex-wrap"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ x: translateX, y: translateY }}
            >
              <AnimatedButton 
                text="Download Resume"
                href="https://drive.google.com/uc?export=download&id=19raxk9FxgccvNEPfiJk4SPbbelht0TuA" 
                icon={<Download className="ml-2" />}
                isExternal
              />
            </motion.div>

            <div className="flex gap-fluid-xs">
              <motion.a
                href="https://github.com/tanay-787"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground hover:border-brand/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "hsl(var(--brand) / 0.1)",
                  boxShadow: "0 0 20px hsl(var(--brand) / 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
                style={{ x: translateX, y: translateY }}
              >
                <GithubIcon className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/tanay-gupte"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground hover:border-brand/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "hsl(var(--brand) / 0.1)",
                  boxShadow: "0 0 20px hsl(var(--brand) / 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
                style={{ x: translateX, y: translateY }}
              >
                <LinkedinIcon className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Scroll indicator with magnetic attraction */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="pt-fluid-xl flex justify-center"
            style={{ x: translateX, y: translateY }}
          >
            <ScrollArrow
              href="#about-me"
              size="lg"
              className="text-foreground hover:text-brand transition-colors"
              duration={2}
              spacing={16}
            />
          </motion.div>
        </div>

        {/* Custom cursor for magnetic area */}
        {isHovered && (
          <motion.div
            className="fixed pointer-events-none z-50 w-4 h-4 bg-brand rounded-full mix-blend-difference"
            style={{
              x: translateX,
              y: translateY,
              scale: isHovered ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
          />
        )}
      </div>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40 pointer-events-none" />
    </section>
  );
}