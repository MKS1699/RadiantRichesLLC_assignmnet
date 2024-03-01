import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, TitleBar } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Radiant Riches LLC",
  description: "Radian Riches LLC internship assignment by Coder Mehul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/builder-icon.svg" sizes="any" />
      </head>
      <body className={`${inter.className} w-full h-auto overscroll-x-none`}>
        <TitleBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
