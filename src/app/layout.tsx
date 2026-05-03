import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

  export const metadata: Metadata = {
    title: "Chronic Haven",
    description: "A safe, welcoming space for people with chronic invisible illnesses.",
    manifest: "/manifest.json",
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "Chronic Haven",
    },
    formatDetection: {
      telephone: false,
    },
    icons: [
      { rel: "icon", url: "/chronic-haven-icon.png", sizes: "any" },
    ],
    other: {
      "msapplication-config": "/browserconfig.xml",
      "mobile-web-app-capable": "yes",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "default",
    },
  };

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

  // PWA Service Worker registration - DISABLED FOR DEVELOPMENT
  function registerServiceWorker() {
    // Service worker registration disabled to prevent caching issues during development
    console.log('Service worker registration disabled for development');
  }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Service worker registration disabled to prevent caching issues during development */}
      </head>
      <body className="antialiased">
        <Nav />
        <main className="min-h-screen bg-[var(--background)]">
          {children}
        </main>
        <footer className="bg-white border-t border-gray-100 py-8">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <p className="text-gray-600 text-sm mb-2">
              Remember: This site provides information and tools but is not a substitute for professional medical advice.
            </p>
            <p className="text-gray-500 text-xs">
              © 2026 Jens-Space | All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
