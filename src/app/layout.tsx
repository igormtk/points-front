import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header/Header";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Pointigor",
  description: "A dedicated website for trade points for products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Header />
            {children}
          </div>
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
