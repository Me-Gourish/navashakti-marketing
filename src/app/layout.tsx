import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Navashakti Marketing — Inspire Better Learning",
  description: "Navashakti Marketing (GSTIN: 29BJLPM4916QZA) — Premium Green Boards, Magnetic Surfaces, Whiteboards, Notice Boards, Smart Panels & Board Stands in Belagavi, Karnataka.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className="min-h-screen bg-slate-50 antialiased selection:bg-emerald-100 selection:text-emerald-900">
        {children}
      </body>
    </html>
  );
}
