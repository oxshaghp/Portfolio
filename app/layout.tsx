import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import LenisProvider from "@/Components/LenisProvider";
import PageTransitionWrapper from "@/Components/PageTransitionWrapper";
import CustomCursor from "@/Components/CustomCursor";
import NavBar from "@/Components/ui/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OxShaghp",
  description: "This is my personal website",
  icons: {
    icon: "/WhatsApp Image 2025-05-24 at 23.02.46_ddd9b5f8.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <LenisProvider>
            <CustomCursor />
            <PageTransitionWrapper>{children}</PageTransitionWrapper>
            <NavBar />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
