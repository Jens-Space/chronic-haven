import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Chronic Haven",
  description: "A safe, welcoming space for people with chronic invisible illnesses.",
  metadataBase: new URL('https://jens-space.github.io'),
  manifest: "/chronic-haven/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Chronic Haven",
  },
  formatDetection: {
    telephone: false,
  },
  icons: [
    { rel: "icon", url: "/favicon.ico", sizes: "any" },
    { rel: "icon", type: "image/png", url: "/chronic-haven/icons/icon-72x72.png", sizes: "72x72" },
    { rel: "icon", type: "image/png", url: "/chronic-haven/icons/icon-96x96.png", sizes: "96x96" },
    { rel: "icon", type: "image/png", url: "/chronic-haven/icons/icon-128x128.png", sizes: "128x128" },
    { rel: "icon", type: "image/png", url: "/chronic-haven/icons/icon-144x144.png", sizes: "144x144" },
    { rel: "icon", type: "image/png", url: "/chronic-haven/icons/icon-150x150.png", sizes: "150x150" },
    { rel: "icon", type: "image/png", url: "/chronic-haven/icons/icon-152x152.png", sizes: "152x152" },
    { rel: "icon", type: "image/png", url: "/chronic-haven/icons/icon-192x192.png", sizes: "192x192" },
    { rel: "icon", type: "image/png", url: "/chronic-haven/icons/icon-310x310.png", sizes: "310x310" },
    { rel: "icon", type: "image/png", url: "/chronic-haven/icons/icon-384x384.png", sizes: "384x384" },
    { rel: "icon", type: "image/png", url: "/chronic-haven/icons/icon-512x512.png", sizes: "512x512" },
    { rel: "apple-touch-icon", url: "/chronic-haven/icons/icon-72x72.png", sizes: "72x72" },
    { rel: "apple-touch-icon", url: "/chronic-haven/icons/icon-96x96.png", sizes: "96x96" },
    { rel: "apple-touch-icon", url: "/chronic-haven/icons/icon-128x128.png", sizes: "128x128" },
    { rel: "apple-touch-icon", url: "/chronic-haven/icons/icon-144x144.png", sizes: "144x144" },
    { rel: "apple-touch-icon", url: "/chronic-haven/icons/icon-150x150.png", sizes: "150x150" },
    { rel: "apple-touch-icon", url: "/chronic-haven/icons/icon-152x152.png", sizes: "152x152" },
    { rel: "apple-touch-icon", url: "/chronic-haven/icons/icon-192x192.png", sizes: "192x192" },
    { rel: "apple-touch-icon", url: "/chronic-haven/icons/icon-310x310.png", sizes: "310x310" },
    { rel: "apple-touch-icon", url: "/chronic-haven/icons/icon-384x384.png", sizes: "384x384" },
    { rel: "apple-touch-icon", url: "/chronic-haven/icons/icon-512x512.png", sizes: "512x512" },
    { rel: "maskable-icon", url: "/chronic-haven/icons/icon-512x512.png", sizes: "512x512" },
  ],
  other: {
    "msapplication-config": "/browserconfig.xml",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#8b5cf6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// PWA Service Worker registration
function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered:', registration.scope);
        })
        .catch((error) => {
          console.log('SW registration failed:', error);
        });
    });
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/chronic-haven/sw.js')
                      .then(function(registration) {
                        console.log('SW registered:', registration.scope);
                      })
                      .catch(function(error) {
                        console.log('SW registration failed:', error);
                      });
                  });
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
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
              © 2026 Jens-Space | All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
