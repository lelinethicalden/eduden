import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eduden — Skills that move your career forward",
  description:
    "Hands-on courses led by industry mentors. Real projects, verified assignments, career-focused training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-fg">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
