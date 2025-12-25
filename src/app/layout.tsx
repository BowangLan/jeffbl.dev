import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import Particles from "@/components/Particles";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobalWrapper } from "@/components/GlobalWrapper";
import dynamic from "next/dynamic";
import { GlobalProviders } from "./providers";
import { TopBlur } from "@/components/TopBlur";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
// const Particles = dynamic(() => import("@/components/Particles"), {
//   ssr: false,
// });

export const metadata = {
  title: "Jeffrey Lan",
  description:
    "Jeffrey Lan is a software engineer, founder, and student at University of Washington based in Seattle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalProviders>
      <html lang="en" className="dark">
        <head>
          {/* umami analytics */}
          {process.env.NODE_ENV === "production" && (
            <script
              defer
              src="https://umami-production-252d.up.railway.app/script.js"
              data-website-id="6f8d7dc6-7169-4301-bafa-ef4347014341"
            ></script>
          )}
        </head>
        <body
          className={`${fontSans.variable} ${fontMono.variable} bg-neutral-900 min-h-screen max-w-screen overflow-x-hidden flex flex-col font-light antialiased relative`}
        >
          {/* background overlay */}
          {/* <div className="fixed inset-0 bg-linear-to-b from-neutral-800/90 to-neutral-800/50 pointer-events-none" /> */}
          {/* <Header /> */}
          {/* <TopBlur /> */}
          {children}
          <Footer />
          <Analytics />
        </body>
      </html>
    </GlobalProviders>
  );
}
