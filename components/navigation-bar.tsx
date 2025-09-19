"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "next-themes";
import { Circle, Sun, Moon, Menu, X } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";
import { useIsMobile } from "@/hooks/use-mobile";


function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface NavigationBarProps {
  className?: string;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isMobile = useIsMobile();
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    if (resolvedTheme) {
      setIsDarkMode(resolvedTheme === "dark");
    }
  }, [resolvedTheme]);

  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => {
        setIsCompact(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsCompact(false);
    }
  }, [isMobile]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    const next = isDarkMode ? "light" : "dark";
    setTheme(next);
    setIsDarkMode(next === "dark");
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    };
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { label: "About Me", href: "#about-me" },
    { label: "My Work", href: "#projects" },
    { label: "Contact Me", href: "#contact-me" },
  ];

  return (
    <div className={cn("max-w-7xl", className)}>
      <motion.nav
  initial={{
    y: -100,
    opacity: 0,
    left: "50%",
    x: "-50%",
    width: "calc(100% - 2rem)",
    maxWidth: "384px",
  }}
  animate={
    isCompact && isMobile
      ? {
          y: 0,
          opacity: 1,
          left: "auto",      // 👈 release left
          right: "1rem",     // 👈 anchor to right properly
          x: 0,              // 👈 no translate
          width: "fit-content",
          maxWidth: "fit-content",
        }
      : {
          y: 0,
          opacity: 1,
          left: "50%",       // 👈 anchor to center
          x: "-50%",         // 👈 center by shifting back
          right: "auto",
          width: "calc(100% - 2rem)",
          maxWidth: "384px",
        }
  }
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="fixed top-4 z-50"
>
        <div className="navbar-glass border border-border rounded-full shadow-lg px-4 py-2">
          <GlowingEffect
            blur={0}
            borderWidth={1}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className={cn("flex items-center h-10", isCompact && isMobile ? "justify-end" : "justify-between")}>
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 1, width: "auto", overflow: "hidden", pointerEvents: "auto" }}
              animate={isCompact && isMobile ? { opacity: 0, width: 0, pointerEvents: "none" } : { opacity: 1, width: "auto", pointerEvents: "auto" }}
              transition={{ duration: 0.8 }} 
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-scale-25 italic font-playfair font-semibold text-foreground">TG</span>
            </motion.div>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-2">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {!isDarkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-4 h-4 text-muted-foreground" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-4 h-4 text-muted-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={toggleMobileMenu}
                className="p-2 rounded-full hover:bg-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 navbar-glass z-40"
              onClick={toggleMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md"
            >
              <div className="navbar-glass-menu border border-border rounded-2xl shadow-xl p-6">
                {/* Menu Items */}
                <div className="space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.1 }}
                    >
                      <a
                        href={item.href}
                        onClick={toggleMobileMenu}
                        className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                      >
                        {item.label}
                      </a>
                      {index < menuItems.length - 1 && <div className="h-px bg-border mx-4" />}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
