import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import Navbar from "@/layouts/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRED Garage Dashboard",
  description: "A modern garage dashboard inspired by CRED's design, featuring car management, service tracking, and rewards system.",
  keywords: "garage dashboard, car management, service tracking, rewards, CRED inspired",
  authors: [{ name: "Garage Dashboard Team" }],
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" }
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon.svg" }
    ],
    shortcut: [
      { url: "/favicon.svg" }
    ]
  },
  manifest: "/manifest.json"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} antialiased
          text-gray-900 dark:text-gray-100
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen w-full">
            {/* Sidebar - Fixed on the left */}
            
            {/* Main content area - Takes remaining width */}
            <div className="flex flex-col flex-1 min-w-0">
              {/* Navbar - Fixed at the top of the content area */}
              <Navbar />
              
              {/* Page content - Scrollable */}
              <main className="flex-1 p-4 bg-white dark:bg-gray-950">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
