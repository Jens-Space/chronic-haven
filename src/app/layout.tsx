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
  title: "Fibro Support Hub",
  description: "A website to help people with fibromyalgia through information, community, and AI support.",
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
        <main className="min-h-screen bg-gray-50">
          <div className="container mx-auto p-6 max-w-4xl">
            {children}
          </div>
        </main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span>🌿</span>
                  Fibro Support Hub
                </h3>
                <p className="text-gray-300 text-sm">
                  Comprehensive support for fibromyalgia through information, community, and AI assistance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="/about" className="hover:text-white transition-colors">About Fibromyalgia</a></li>
                  <li><a href="/symptoms" className="hover:text-white transition-colors">Symptoms</a></li>
                  <li><a href="/treatments" className="hover:text-white transition-colors">Treatments</a></li>
                  <li><a href="/resources" className="hover:text-white transition-colors">Resources</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Tools</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="/tracker" className="hover:text-white transition-colors">Symptom Tracker</a></li>
                  <li><a href="/chatbot" className="hover:text-white transition-colors">AI Assistant</a></li>
                  <li><a href="/community" className="hover:text-white transition-colors">Community</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
              <p>&copy; 2024 Fibro Support Hub. Providing compassionate support for fibromyalgia management.</p>
              <p className="mt-2">Remember: This site provides information and tools but is not a substitute for professional medical advice.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
