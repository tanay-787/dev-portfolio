import type { Metadata } from 'next';
import { StackProvider, StackTheme } from '@stackframe/stack';
import { stackServerApp } from '../stack';
import { DM_Sans, DM_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/theme-provider';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
});



export const metadata: Metadata = {
  title: 'Neon Auth example app',
  description: 'Neon Auth example app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${dmSans.className} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <StackProvider app={stackServerApp}>
            <StackTheme>
              {children}
            </StackTheme>
          </StackProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
