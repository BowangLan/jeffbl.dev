import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobalProviders } from "./providers";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

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

          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
          />
        </head>
        {children}
      </html>
    </GlobalProviders>
  );
}
