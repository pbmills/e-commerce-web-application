"use client";

import "./globals.css";

import { ReactLenis } from "lenis/react";

import { QueryClient, QueryClientProvider } from "react-query";
import { CountProvider } from "@/context/CountContext";
import Header from "@/components/header";

// interface CartItem {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   image: string;
//   qty: number;
// }

const queryClient = new QueryClient();

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
            <body className="antialiased bg-warm-gray font-poppins">
              <Header />
              <div className="min-h-dvh relative z-0">{children}</div>
            </body>
          </ReactLenis>
        </html>
      </CountProvider>
    </QueryClientProvider>
  );
}
