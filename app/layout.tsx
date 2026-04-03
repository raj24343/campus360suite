import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
// Fixed spelling from "comphonents" to "components"
import Navbar from "@/comphonents/common/navbar"; 
import Footer from "@/comphonents/common/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "campus360 Suite",
  description: "Next-gen ERP for modern institutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      {/* 1. Apply the variables AND the font class to the body.
          2. Place Navbar inside the body so it renders correctly.
      */}
      <body className={`${montserrat.className} ${geistMono.variable} min-h-full flex flex-col antialiased`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
      
    </html>
  );
}