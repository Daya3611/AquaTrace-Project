import type { Metadata } from "next";
// import { Bricolage_Grotesque } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Toaster } from "@/components/ui/sonner"
import Footer from "./components/Footer";

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "AquaTrace",
  description: "A Platform to Calculate Water Footprint",
  icons: "./img/logo.png",
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
        <div className="bg-gradient-to-r from-blue-100 via-green-50 to-orange-100">
        <Header />
        {children}
        <Footer />
        <Toaster />
        </div>
      
        </body>
    </html>
  );
}
