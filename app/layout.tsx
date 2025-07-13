import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import { ThemeProvider } from "./components/ThemeProvider"


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gal Ben Ami | Computer Science Student',
  description: 'Portfolio website showcasing my projects and skills as a Computer Science student',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}