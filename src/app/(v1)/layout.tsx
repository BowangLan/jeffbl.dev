import { Open_Sans } from "next/font/google";
import { CustomCursor } from "./v1/custom-cursor";
import "./v1.css";

const fontSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Open_Sans({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function V1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body
      className={`${fontSans.variable} ${fontMono.variable} bg-neutral-900 min-h-screen max-w-screen overflow-x-hidden flex flex-col antialiased selection:bg-blue-800 selection:text-white`}
    >
      <CustomCursor />
      {children}
    </body>
  )
}