import type { Metadata } from 'next';
import { DM_Sans, DM_Mono, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/global/theme-provider';
import './globals.css';
import { Toaster } from '@/components/reusables/primitives/sonner';

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
  description: 'A portfolio website featuring the work done by Tanay Gupte',
  authors: { name: 'Tanay Gupte', url: 'https://github.com/tanay-787'}
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
        <ThemeProvider attribute="class" enableSystem defaultTheme="dark">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}