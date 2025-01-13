import "./globals.scss";
import type { Metadata } from "next";
import { Lato, Sofia, Niconne } from "next/font/google";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { NextUIProvider } from "@nextui-org/react";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

const sofia = Sofia({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-sofia",
  display: "swap",
});

const niconne = Niconne({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-niconne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akinde Pixels",
  description: "Making moments stand still, one pixel at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${sofia.variable} ${niconne.variable} antialiased`}
      >
        <ReactQueryProvider>
          <NextUIProvider>
            <Navbar />
            {children}
            <Footer />
          </NextUIProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
