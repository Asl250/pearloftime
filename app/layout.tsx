import { Footer } from '@/components/home/Footer'
import Navbar from '@/components/home/Navbar'
import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from 'next/font/google'


const spaceGrotesk  = Space_Grotesk({
  subsets: ["latin"],
  weight: [ "300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Pearl of Time",
  description: "Created by Dono",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
