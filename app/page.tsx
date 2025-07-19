"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/dashboard');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Instantly Generate Modern Backend Boilerplates
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Say goodbye to tedious setup and focus on building your application.
        </p>
        <Button size="lg" onClick={handleGetStarted}>Get Started</Button>
      </section>

      <Separator className="my-12" />

      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Flexible Stack Selection</CardTitle>
            </CardHeader>
            <CardContent>
              Choose your preferred technologies to build your backend.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Intuitive Data Modeling</CardTitle>
            </CardHeader>
            <CardContent>
              Easily define your data models and API endpoints.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Comprehensive Output</CardTitle>
            </CardHeader>
            <CardContent>
              Receive production-ready code with validation, Dockerfiles, and deployment configurations.
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />

      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Built with
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
          <div className="flex flex-col items-center">
            <img src="/next.svg" alt="Next.js" className="h-12 mb-2" />
            <p className="text-sm font-medium">Next.js</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/vercel.svg" alt="Vercel" className="h-12 mb-2" />
            <p className="text-sm font-medium">Vercel</p>
          </div>
          <div className="flex flex-col items-center">
            {/* Replace with Neon logo if available */}
            <span className="text-4xl mb-2">🐘</span>
            <p className="text-sm font-medium text-center">Neon Serverless Postgres</p>
          </div>
          <div className="flex flex-col items-center">
            {/* Replace with Drizzle logo if available */}
            <span className="text-4xl mb-2">💧</span>
            <p className="text-sm font-medium">Drizzle</p>
          </div>
           <div className="flex flex-col items-center">
            {/* Replace with Neon Auth logo if available */}
            <span className="text-4xl mb-2">🔑</span>
            <p className="text-sm font-medium">Neon Auth</p>
          </div>
           <div className="flex flex-col items-center">
            {/* Replace with Docker logo if available */}
            <span className="text-4xl mb-2">🐳</span>
            <p className="text-sm font-medium">Docker</p>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to build faster?</h2>
        <Button size="lg" onClick={handleGetStarted}>Start Generating</Button>
      </section>
    </div>
  );
}
