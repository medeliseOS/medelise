import type { Metadata } from "next";
import { DM_Sans, Poppins, Michroma, Montserrat } from "next/font/google";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="ro" className={`${dmSans.variable} ${poppins.variable} ${michroma.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
