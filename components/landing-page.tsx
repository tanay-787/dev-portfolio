import React from "react";
// Import Shadcn UI components you might use, assuming they are installed
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function LandingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Your Next.js Template with Neon Auth and Shadcn UI
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          A powerful starting point for your web applications.
        </p>
        <Button size="lg">Get Started</Button>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
          
          <Card>
            <CardHeader>
              <CardTitle>Next.js Power</CardTitle>
            </CardHeader>
            <CardContent>
              Leverage the full power of the Next.js framework.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Neon Auth Integration</CardTitle>
            </CardHeader>
            <CardContent>
              Easily implement authentication with Neon Auth.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Shadcn UI Components</CardTitle>
            </CardHeader>
            <CardContent>
              Build beautiful interfaces with pre-built UI components.
            </CardContent>
          </Card>
        </div>
      </section>

  
      <Separator className="my-12" />

      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to build?</h2>
        
        <Button size="lg">Get Started</Button>
      </section>
    </div>
  );
}
