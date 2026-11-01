import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-delta-blush-7k4xnw80xa.vercel.app"), 
  
  title: "Ali Haider | Full-Stack & AI Developer",
  description: "Portfolio of Ali Haider, specializing in Next.js, Node.js, and AI/LLM integration.",
  keywords: ["Full Stack Developer", "Next.js Developer", "React Developer", "AI Developer", "Pakistan"],
  authors: [{ name: "Ali Haider" }],

  icons: {
    icon: "/icon.ico", 
  },
  openGraph: {
    title: "Ali Haider | Full-Stack & AI Developer",
    description: "I build production-ready SaaS applications and integrate AI/LLMs.",
    url: "/",
    siteName: "Ali Haider Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Haider Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 antialiased transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}