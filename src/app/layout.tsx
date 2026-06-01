import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@opencosmos/ui/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const VALUE_PROP =
  "Run calibrated synthetic expert users against your early designs, prototypes, and PRDs — surfacing deep workflow friction, graded against the foundational UX frameworks human researchers trust, before you write a line of production code.";

export const metadata: Metadata = {
  metadataBase: new URL("https://preflightux.com"),
  title: {
    default: "PreflightUX — Empirical Signal Before the Build",
    template: "%s — PreflightUX",
  },
  description: VALUE_PROP,
  keywords: [
    "synthetic UX testing",
    "usability heuristics",
    "Nielsen heuristics",
    "heuristic evaluation",
    "UX research",
    "B2B usability",
    "pre-launch validation",
  ],
  authors: [{ name: "Shalom Ormsby" }],
  openGraph: {
    type: "website",
    url: "https://preflightux.com",
    siteName: "PreflightUX",
    title: "PreflightUX — Empirical Signal Before the Build",
    description: VALUE_PROP,
  },
  twitter: {
    card: "summary_large_image",
    title: "PreflightUX — Empirical Signal Before the Build",
    description: VALUE_PROP,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
