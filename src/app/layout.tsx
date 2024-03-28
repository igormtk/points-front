import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import "./globals.css";

import { cn } from "@/lib/utils"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Cs:GO Games",
  description: "A dedicated website for cs:go games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
        {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
