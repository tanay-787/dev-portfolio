"use client";

import { NavigationBar } from "@/components/navigation-bar"; // Assuming NavigationBar is used for navigation
import { Button } from "@/components/ui/button"; // Using Shadcn Button
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"; // Using Shadcn Card

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Site Header (Navigation Bar) */}
      <NavigationBar /> {/* This should be the actual NavigationBar component */}

      {/* Main content area */}
      <main className="flex-1">
      <Spotlight />
        {/* Hero Section */}
        <section id="hero" className="flex items-center justify-center h-screen">
         
          <div className="container mx-auto text-center px-4">
            <TextEffect preset="fade" per="char" as="h1" className=" mb-6">
                Revolutionize Your Workflow
            </TextEffect>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-foreground">
              {/* Placeholder for Hero Subtitle */}
              Experience the future of productivity with our cutting-edge solution.
            </p>
            {/* Placeholder for Call to Action Button */}
            <Button size="lg">Get Started Today</Button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="flex items-center justify-center h-screen">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
              {/* Placeholder for Features Title */}
              Discover Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Placeholder Feature 1 */}
              <Card>
                <CardHeader>
                  <CardTitle>Feature 1</CardTitle>
                  <CardDescription>Short description of feature 1.</CardDescription>
                </CardHeader>
                <CardContent>{/* Placeholder for Feature 1 content/icon */}</CardContent>
              </Card>
              {/* Placeholder Feature 2 */}
              <Card>
                <CardHeader>
                  <CardTitle>Feature 2</CardTitle>
                  <CardDescription>Short description of feature 2.</CardDescription>
                </CardHeader>
                <CardContent>{/* Placeholder for Feature 2 content/icon */}</CardContent>
              </Card>
              {/* Placeholder Feature 3 */}
              <Card>
                <CardHeader>
                  <CardTitle>Feature 3</CardTitle>
                  <CardDescription>Short description of feature 3.</CardDescription>
                </CardHeader>
                <CardContent>{/* Placeholder for Feature 3 content/icon */}</CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="flex items-center justify-center h-screen">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
              {/* Placeholder for Testimonials Title */}
              What Our Customers Say
            </h2>
            {/* Placeholder Testimonial */}
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <p className="text-lg italic mb-4 text-foreground">"This is an amazing product that has transformed the way I work!"</p>
                <p className="text-base font-semibold">- Satisfied Customer</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground">
        <div className="container mx-auto">&copy; {new Date().getFullYear()} Your Company</div>
        {/* Placeholder for Footer Links/Content */}
      </footer>
    </div>
  );
}
