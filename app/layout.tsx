import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-delta-blush-7k4xnw80xa.vercel.app"),

  title: {
    default: "Ali Haider | Full-Stack & AI Developer",
    template: "%s | Ali Haider",
  },
  description:
    "Portfolio of Ali Haider, specializing in Next.js, Node.js, and AI/LLM integration. Available for freelance and full-time opportunities.",
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "AI Developer",
    "RAG Developer",
    "SaaS Developer",
    "Pakistan",
  ],
  authors: [
    {
      name: "Ali Haider",
      url: "https://portfolio-delta-blush-7k4xnw80xa.vercel.app",
    },
  ],
  creator: "Ali Haider",

  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/icon.ico",
  },

  openGraph: {
    title: "Ali Haider | Full-Stack & AI Developer",
    description:
      "I build production-ready SaaS applications and integrate AI/LLMs.",
    url: "/",
    siteName: "Ali Haider Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Ali Haider Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ali Haider | Full-Stack & AI Developer",
    description:
      "I build production-ready SaaS applications and integrate AI/LLMs.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 antialiased transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
