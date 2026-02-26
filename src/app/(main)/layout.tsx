import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body
      className={`${fontSans.variable} ${fontMono.variable} bg-neutral-900 min-h-screen max-w-screen overflow-x-hidden font-thin flex flex-col antialiased`}
    >
      {children}
      <Footer />
    </body>
  );
}
