import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Oteng Isaac — Cloud & Data Engineer",
    template: "%s | Oteng Isaac",
  },
  description:
    "Technical Solutions Consultant specializing in AWS Cloud, Databricks, Data Engineering, and AI. Practical tutorials and real-world projects.",
  keywords: [
    "AWS",
    "Databricks",
    "Data Engineering",
    "Cloud Architecture",
    "AI",
    "LLM",
    "Big Data",
  ],
  authors: [{ name: "Oteng Isaac" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Oteng Isaac",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-[var(--background)] text-[var(--foreground)] antialiased">
        <Nav />
        <main className="flex-1 mx-auto w-full max-w-7xl px-10 sm:px-16 lg:px-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
