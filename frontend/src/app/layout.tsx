import type { Metadata } from "next";
import { DM_Sans, Inter, Michroma, Montserrat } from "next/font/google";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});
import "./globals.css";
import Navbar from "@layout/Navbar";
import Footer from "@layout/Footer";
import Providers from "./Providers";
import AuthListener from "@/components/AuthListener";

export const metadata: Metadata = {
  title: {
    default: "Medelise · Soluții Medicale Premium",
    template: "%s · Medelise",
  },
  description:
    "Medelise Health Solutions — servicii medicale premium, vizite la domiciliu și abonamente EasyCare. Programează online.",
  openGraph: {
    title: "Medelise · Soluții Medicale Premium",
    description:
      "Servicii medicale premium, vizite la domiciliu și abonamente EasyCare.",
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${dmSans.variable} ${inter.variable} ${michroma.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <Providers>
          <Navbar />
          <AuthListener />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
