"use client";

import localFont from "next/font/local";
import "./globals.css";
import { ReactLenis } from "lenis/react";
import cart from "@/hooks/useCart";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <ReactLenis root>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
          >
            <header className="w-full bg-gradient-to-r from-sky-400 to-cyan-300 h-20">
              <div className="inner flex items-center justify-between">
                <button>{cart.length}</button>
              </div>
            </header>
            <div className="min-h-dvh relative z-0 bg-slate-50 pt-20">
              {children}
            </div>
          </body>
        </ReactLenis>
      </html>
    </QueryClientProvider>
  );
}
