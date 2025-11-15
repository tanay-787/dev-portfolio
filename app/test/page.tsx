'use client';

import { useState, useEffect } from 'react';

export default function FluidSystemTest() {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [cssValues, setCssValues] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateViewport = () => {
      setViewportWidth(window.innerWidth);
      
      // Get computed CSS values
      const root = getComputedStyle(document.documentElement);
      setCssValues({
        'step--2': root.getPropertyValue('--step--2').trim(),
        'step--1': root.getPropertyValue('--step--1').trim(),
        'step-0': root.getPropertyValue('--step-0').trim(),
        'step-1': root.getPropertyValue('--step-1').trim(),
        'step-2': root.getPropertyValue('--step-2').trim(),
        'space-xs': root.getPropertyValue('--space-xs').trim(),
        'space-s': root.getPropertyValue('--space-s').trim(),
        'space-m': root.getPropertyValue('--space-m').trim(),
        'space-l': root.getPropertyValue('--space-l').trim(),
        'space-xl': root.getPropertyValue('--space-xl').trim(),
        'display-hero': root.getPropertyValue('--display-hero').trim(),
        'display-section': root.getPropertyValue('--display-section').trim(),
        'phi': root.getPropertyValue('--phi').trim(),
      });
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-fluid-m">
      {/* Viewport Info */}
      <div className="fixed top-4 right-4 bg-black text-white p-4 rounded-lg text-sm z-10">
        <div>Viewport: {viewportWidth}px</div>
        <div>Golden Ratio: φ = 1.618</div>
        <div className="mt-2 space-y-1">
          {Object.entries(cssValues).map(([key, value]) => (
            <div key={key} className="text-xs">
              --{key}: {value}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-fluid-l">
        {/* Header */}
        <div className="bg-white p-fluid-l rounded-lg shadow-sm">
          <h1 className="text-step-4 font-neo mb-fluid-s">🎯 Mathematical Fluid System Test</h1>
          <p className="text-step-0 text-gray-600">
            Resize your browser to see the harmonized scaling in action. All values derive from mathematical relationships.
          </p>
        </div>

        {/* Typography Scale Test */}
        <div className="bg-white p-fluid-l rounded-lg shadow-sm">
          <h2 className="text-step-3 font-neo mb-fluid-m">Typography Scale Test</h2>
          <div className="space-y-fluid-s">
            <div className="bg-blue-50 p-fluid-s rounded border-l-4 border-blue-400">
              <div className="text-step--2">Step -2: Mathematical base ÷ ratio²</div>
            </div>
            <div className="bg-blue-50 p-fluid-s rounded border-l-4 border-blue-400">
              <div className="text-step--1">Step -1: Mathematical base ÷ ratio</div>
            </div>
            <div className="bg-blue-50 p-fluid-s rounded border-l-4 border-blue-400">
              <div className="text-step-0">Step 0: Mathematical base (clamp formula)</div>
            </div>
            <div className="bg-blue-50 p-fluid-s rounded border-l-4 border-blue-400">
              <div className="text-step-1">Step 1: Mathematical base × ratio</div>
            </div>
            <div className="bg-blue-50 p-fluid-s rounded border-l-4 border-blue-400">
              <div className="text-step-2">Step 2: Mathematical base × ratio²</div>
            </div>
            <div className="bg-blue-50 p-fluid-s rounded border-l-4 border-blue-400">
              <div className="text-step-3">Step 3: Mathematical base × ratio³</div>
            </div>
          </div>
        </div>

        {/* Golden Ratio Spacing Test */}
        <div className="bg-white p-fluid-l rounded-lg shadow-sm">
          <h2 className="text-step-3 font-neo mb-fluid-m">Golden Ratio Spacing Test</h2>
          <div className="space-y-fluid-xs">
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded" style={{ padding: 'var(--space-3xs)' }}>
              <div className="text-step--1">3XS: Base ÷ φ³</div>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded" style={{ padding: 'var(--space-2xs)' }}>
              <div className="text-step--1">2XS: Base ÷ φ²</div>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded" style={{ padding: 'var(--space-xs)' }}>
              <div className="text-step--1">XS: Base ÷ φ</div>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded" style={{ padding: 'var(--space-s)' }}>
              <div className="text-step--1">S: Base</div>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded" style={{ padding: 'var(--space-m)' }}>
              <div className="text-step--1">M: Base × φ</div>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded" style={{ padding: 'var(--space-l)' }}>
              <div className="text-step--1">L: Base × φ²</div>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded" style={{ padding: 'var(--space-xl)' }}>
              <div className="text-step--1">XL: Base × φ³</div>
            </div>
          </div>
        </div>

        {/* Continuous Viewport Scaling Test */}
        <div className="bg-white p-fluid-l rounded-lg shadow-sm">
          <h2 className="text-step-3 font-neo mb-fluid-m">Continuous Viewport Scaling Test</h2>
          <div className="space-y-2">
            <div className="bg-green-50 p-fluid-s border-l-4 border-green-400 rounded" style={{ margin: 'var(--space-viewport-xs) 0' }}>
              <div className="text-step-0">Viewport XS: No hard caps</div>
            </div>
            <div className="bg-green-50 p-fluid-s border-l-4 border-green-400 rounded" style={{ margin: 'var(--space-viewport-s) 0' }}>
              <div className="text-step-0">Viewport S: Scales infinitely</div>
            </div>
            <div className="bg-green-50 p-fluid-s border-l-4 border-green-400 rounded" style={{ margin: 'var(--space-viewport-m) 0' }}>
              <div className="text-step-0">Viewport M: Mathematical relationship</div>
            </div>
          </div>
        </div>

        {/* Display Typography Test */}
        <div className="bg-white p-fluid-l rounded-lg shadow-sm">
          <h2 className="text-step-3 font-neo mb-fluid-m">Display Typography with Exponential Scaling</h2>
          <div className="space-y-fluid-m">
            <div className="bg-purple-50 p-fluid-s border-l-4 border-purple-400 rounded">
              <div className="font-neo" style={{ fontSize: 'var(--display-hero)', lineHeight: '1.1' }}>
                Hero Display
              </div>
            </div>
            <div className="bg-purple-50 p-fluid-s border-l-4 border-purple-400 rounded">
              <div className="font-neo" style={{ fontSize: 'var(--display-section)', lineHeight: '1.2' }}>
                Section Display
              </div>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-400 rounded" style={{ padding: 'var(--space-s)' }}>
              <div className="font-neo" style={{ fontSize: 'var(--display-subtitle)', lineHeight: '1.3' }}>
                Subtitle Display
              </div>
            </div>
          </div>
        </div>

        {/* Spacing Utilities Test */}
        <div className="bg-white p-fluid-l rounded-lg shadow-sm">
          <h2 className="text-step-3 font-neo mb-fluid-m">Fluid Spacing Utilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-fluid-m">
            <div className="bg-red-50 p-fluid-xs rounded">
              <div className="text-step--1">.p-fluid-xs</div>
            </div>
            <div className="bg-red-50 p-fluid-s rounded">
              <div className="text-step--1">.p-fluid-s</div>
            </div>
            <div className="bg-red-50 p-fluid-m rounded">
              <div className="text-step--1">.p-fluid-m</div>
            </div>
            <div className="bg-red-50 p-fluid-l rounded">
              <div className="text-step--1">.p-fluid-l</div>
            </div>
            <div className="bg-red-50 p-fluid-xl rounded">
              <div className="text-step--1">.p-fluid-xl</div>
            </div>
            <div className="bg-red-50 p-fluid-2xl rounded">
              <div className="text-step--1">.p-fluid-2xl</div>
            </div>
          </div>
        </div>

        {/* Harmonized Pairs Test */}
        <div className="bg-white p-fluid-l rounded-lg shadow-sm">
          <h2 className="text-step-3 font-neo mb-fluid-m">Harmonized Spacing Pairs</h2>
          <div className="space-y-fluid-xs">
            <div className="bg-cyan-50 border-l-4 border-cyan-400 rounded" style={{ padding: 'var(--space-s-m)' }}>
              <div className="text-step-0">S-M Pair: Mathematically averaged</div>
            </div>
            <div className="bg-cyan-50 border-l-4 border-cyan-400 rounded" style={{ padding: 'var(--space-m-l)' }}>
              <div className="text-step-0">M-L Pair: Golden ratio harmony</div>
            </div>
            <div className="bg-cyan-50 border-l-4 border-cyan-400 rounded" style={{ padding: 'var(--space-l-xl)' }}>
              <div className="text-step-0">L-XL Pair: Perfect proportion</div>
            </div>
          </div>
        </div>

        {/* Container System Test */}
        <div className="bg-white p-fluid-l rounded-lg shadow-sm">
          <h2 className="text-step-3 font-neo mb-fluid-m">Adaptive Container System</h2>
          <div className="space-y-fluid-s">
            <div className="container-fluid-sm bg-indigo-50 p-fluid-s rounded border-2 border-indigo-300">
              <div className="text-step-0">.container-fluid-sm: min(90vw, 1200px) = 90% width, max 1200px</div>
            </div>
            <div className="container-fluid-md bg-blue-50 p-fluid-s rounded border-2 border-blue-300">
              <div className="text-step-0">.container-fluid-md: min(85vw, 1400px) = 85% width, max 1400px</div>
            </div>
            <div className="container-fluid-lg bg-purple-50 p-fluid-s rounded border-2 border-purple-300">
              <div className="text-step-0">.container-fluid-lg: min(80vw, 1600px) = 80% width, max 1600px</div>
            </div>
            <div className="container-fluid-xl bg-pink-50 p-fluid-s rounded border-2 border-pink-300">
              <div className="text-step-0">.container-fluid-xl: min(75vw, 1800px) = 75% width, max 1800px</div>
            </div>
          </div>
        </div>

        {/* Debug Section */}
        <div className="bg-gray-900 text-white p-fluid-l rounded-lg shadow-sm">
          <h2 className="text-step-3 font-neo mb-fluid-m text-white">🔧 Debug Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-fluid-m text-sm font-mono">
            <div>
              <h3 className="text-step-1 mb-fluid-xs text-blue-300">Typography Steps:</h3>
              <div className="space-y-1">
                <div>--step--2: <span className="text-yellow-300">{cssValues['step--2'] || 'loading...'}</span></div>
                <div>--step--1: <span className="text-yellow-300">{cssValues['step--1'] || 'loading...'}</span></div>
                <div>--step-0: <span className="text-yellow-300">{cssValues['step-0'] || 'loading...'}</span></div>
                <div>--step-1: <span className="text-yellow-300">{cssValues['step-1'] || 'loading...'}</span></div>
                <div>--step-2: <span className="text-yellow-300">{cssValues['step-2'] || 'loading...'}</span></div>
              </div>
            </div>
            <div>
              <h3 className="text-step-1 mb-fluid-xs text-green-300">Spacing Values:</h3>
              <div className="space-y-1">
                <div>--space-xs: <span className="text-yellow-300">{cssValues['space-xs'] || 'loading...'}</span></div>
                <div>--space-s: <span className="text-yellow-300">{cssValues['space-s'] || 'loading...'}</span></div>
                <div>--space-m: <span className="text-yellow-300">{cssValues['space-m'] || 'loading...'}</span></div>
                <div>--space-l: <span className="text-yellow-300">{cssValues['space-l'] || 'loading...'}</span></div>
                <div>--space-xl: <span className="text-yellow-300">{cssValues['space-xl'] || 'loading...'}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
