import type { Metadata } from 'next';
import Script from "next/script";
import { DM_Sans, DM_Mono, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/theme-provider';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

const dmSans = DM_Sans({
  subsets: ['latin'],
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: "500",
  display: 'swap'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})



export const metadata: Metadata = {
  title: "Tanay's Portfolio",
  description: 'A portfolio website featuring the work done by Tanay',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className={`${dmSans.className} ${dmMono.variable} ${playfair.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}