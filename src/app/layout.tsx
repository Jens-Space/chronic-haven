import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chronic Haven",
  description: "A safe, welcoming space for people with chronic invisible illnesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <main className="min-h-screen bg-[var(--background)]">
          <div className="container mx-auto p-6 max-w-5xl">
            {children}
          </div>
        </main>
        <footer className="bg-white border-t border-gray-100 py-8">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <p className="text-gray-600 text-sm mb-2">
              Remember: This site provides information and tools but is not a substitute for professional medical advice.
            </p>
            <p className="text-gray-500 text-xs">
              © 2026 Jen's Space. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
