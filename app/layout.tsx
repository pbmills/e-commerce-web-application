"use client";

import localFont from "next/font/local";
import "./globals.css";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { CountProvider } from "@/context/CountContext";
import Header from "@/components/header";

interface CartItem {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  qty: number;
}

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
      <CountProvider>
        <html lang="en">
          <ReactLenis root>
            <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
            >
              <Header />
              <div className="min-h-dvh relative z-0 bg-slate-50">
                {children}
              </div>
            </body>
          </ReactLenis>
        </html>
      </CountProvider>
    </QueryClientProvider>
  );
}
