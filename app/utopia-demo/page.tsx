import React from 'react';
import UtopiaDemo from '@/components/utopia-demo';
import { NavigationBar } from '@/components/navigation-bar';

export default function UtopiaTestPage() {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <UtopiaDemo />
    </div>
  );
}

export const metadata = {
  title: 'Utopia Fluid Scaling Demo',
  description: 'Compare manual clamp values with perfect Utopia fluid scaling system',
};