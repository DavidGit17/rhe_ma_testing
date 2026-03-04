import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

/* -- Fonts -------------------------------------------------- */
const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

/* -- SEO Metadata ------------------------------------------- */
export const metadata: Metadata = {
  title: "HopeTransTech | Text Translation & Accessibility Resources",
  description:
    "Making important texts accessible to every person through translation services, educational publications, audio recordings, and ASL communication support.",
};

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
};

/* -- Root Layout -------------------------------------------- */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* Shared navigation bar */}
        <Navbar />

        {/* Main page content */}
        {children}

        {/* Shared footer */}
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
