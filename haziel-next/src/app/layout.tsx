import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Announce from "@/components/announce";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
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
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
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
