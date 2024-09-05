import type { Metadata } from "next";
// import { Bricolage_Grotesque } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Toaster } from "@/components/ui/sonner"

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "AquaTrace",
  description: "A Platform to Calculate Water Footprint",
  icons: "/favi-icon.jpg",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={bricolage_grotesque.className}>
      
        {children}
        <Toaster />
        </body>
    </html>
  );
}
