'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';

const UtopiaDemo = () => {
  const [showUtopia, setShowUtopia] = useState(false);

  const demoContent = {
    hero: "Crafting End-to-End Solutions",
    subtitle: "A passionate developer learning to build reliable, user-focused products across the stack.",
    cardTitle: "Featured Project", 
    cardDescription: "This project showcases modern web development with responsive design and fluid typography.",
    bodyText: "Experience the difference between manual clamp values and mathematically perfect Utopia scaling. Notice how smoothly everything scales as you resize your browser."
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Toggle Controls */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-center gap-4 p-4 bg-card border rounded-lg">
          <span className="text-sm font-medium">Typography System:</span>
          <Button
            variant={!showUtopia ? "default" : "outline"}
            size="sm"
            onClick={() => setShowUtopia(false)}
          >
            Current Manual
          </Button>
          <Button
            variant={showUtopia ? "default" : "outline"}
            size="sm"
            onClick={() => setShowUtopia(true)}
          >
            Perfect Utopia ✨
          </Button>
        </div>
      </div>

      {/* Demo Content */}
      <div className={`max-w-6xl mx-auto transition-all duration-500 ${showUtopia ? 'utopia-typography' : ''}`}>
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className={showUtopia ? 'text-step-4 font-neo' : 'text-scale-72 font-neo'}>
            {demoContent.hero}
          </h1>
          <p className={`mt-4 max-w-2xl mx-auto text-muted-foreground ${showUtopia ? 'text-step-0' : 'text-scale-18'}`}>
            {demoContent.subtitle}
          </p>
        </section>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 bg-card border rounded-lg">
            <h3 className={showUtopia ? 'text-step-2 mb-3' : 'text-scale-40 mb-3'}>
              {demoContent.cardTitle}
            </h3>
            <p className={`text-muted-foreground ${showUtopia ? 'text-step--1' : 'text-scale-18'}`}>
              {demoContent.cardDescription}
            </p>
          </div>
          
          <div className="p-6 bg-card border rounded-lg">
            <h3 className={showUtopia ? 'text-step-2 mb-3' : 'text-scale-40 mb-3'}>
              Spacing Demo
            </h3>
            <div className={`grid grid-cols-3 gap-2 ${showUtopia ? 'utopia-spacing' : ''}`}>
              <div className="h-12 bg-primary/20 rounded" />
              <div className="h-12 bg-primary/40 rounded" />
              <div className="h-12 bg-primary/60 rounded" />
            </div>
          </div>
        </div>

        {/* Typography Showcase */}
        <section className="space-y-6 mb-16">
          <h2 className={showUtopia ? 'text-step-3' : 'text-scale-60'}>Typography Scale Comparison</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className={`mb-4 ${showUtopia ? 'text-step-1' : 'text-scale-25'}`}>Size Progression</h4>
              <div className="space-y-2">
                <p className={showUtopia ? 'text-step--2' : 'text-base'}>Step -2: Small text</p>
                <p className={showUtopia ? 'text-step--1' : 'text-lg'}>Step -1: Body text</p>
                <p className={showUtopia ? 'text-step-0' : 'text-xl'}>Step 0: Base size</p>
                <p className={showUtopia ? 'text-step-1' : 'text-2xl'}>Step 1: Subheading</p>
                <p className={showUtopia ? 'text-step-2' : 'text-3xl'}>Step 2: Heading</p>
              </div>
            </div>
            
            <div>
              <h4 className={`mb-4 ${showUtopia ? 'text-step-1' : 'text-scale-25'}`}>Responsive Behavior</h4>
              <p className={`${showUtopia ? 'text-step--1' : 'text-scale-18'}`}>
                {demoContent.bodyText}
              </p>
            </div>
          </div>
        </section>

        {/* Current vs Utopia Info Panel */}
        <div className="bg-muted/50 border rounded-lg p-6">
          <h3 className={`mb-4 ${showUtopia ? 'text-step-1' : 'text-scale-25'}`}>
            {showUtopia ? '✨ Perfect Utopia System' : '⚠️ Current Manual System'}
          </h3>
          
          {showUtopia ? (
            <div className="space-y-2 text-step--1">
              <p>✅ <strong>320px → 1920px</strong> perfect scaling</p>
              <p>✅ <strong>Mathematical harmony</strong> with 1.2→1.25 scale ratios</p>
              <p>✅ <strong>Fluid spacing</strong> system included</p>
              <p>✅ <strong>8 perfectly related</strong> typography steps</p>
              <p>✅ <strong>WCAG compliant</strong> accessibility</p>
            </div>
          ) : (
            <div className="space-y-2 text-scale-18">
              <p>⚠️ <strong>Limited range</strong> ~320px-1200px scaling</p>
              <p>⚠️ <strong>Manual calculations</strong> with inconsistent ratios</p>
              <p>⚠️ <strong>No spacing system</strong> - typography only</p>
              <p>⚠️ <strong>Large size gaps</strong> between scales</p>
              <p>⚠️ <strong>Potential accessibility</strong> issues on extreme sizes</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UtopiaDemo;