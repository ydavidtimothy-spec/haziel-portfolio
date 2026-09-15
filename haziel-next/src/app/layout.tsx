import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Announce from "@/components/announce";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haziel Nablo — Customer Support & Vendor Escalations Specialist",
  description:
    "Portfolio of Haziel Nablo, Customer Service Representative from Davao City. Ibex Global Solutions chat support and vendor escalations. Top Agent and Chat Warrior Awardee 2023.",
};

const themeInit = `(function(){try{var t=localStorage.getItem('hn-theme');document.documentElement.setAttribute('data-theme', t==='dark'?'dark':'light');}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className={`${bricolage.variable} ${instrument.variable} ${jetbrainsMono.variable}`}>
        <Providers>
          <div className="site-top">
            <Announce />
            <Navbar />
          </div>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
