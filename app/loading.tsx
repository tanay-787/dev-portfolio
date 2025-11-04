'use client';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="text-sm text-muted-foreground tracking-wider">Now visiting:</p>
        <p className="text-base font-medium">
          <span className="text-brand">TanayCodes</span>
          <span className="text-foreground"> | A developer portfolio</span>
        </p>
      </div>
    </div>
  );
}
