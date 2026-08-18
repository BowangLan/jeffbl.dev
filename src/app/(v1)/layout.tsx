import { Lato } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { CustomCursor } from "./v1/custom-cursor";
import "./v1.css";

const fontSans = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-sans",
});

export default function V1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body
      className={`${fontSans.variable} ${GeistMono.variable} v1-cursor-root font-sans bg-neutral-900 min-h-screen max-w-screen overflow-x-hidden flex flex-col antialiased selection:bg-blue-800 selection:text-white`}
    >
      <CustomCursor />
      {children}
    </body>
  );
}
