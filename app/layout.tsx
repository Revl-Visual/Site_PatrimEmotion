import type { Metadata } from "next";
import ContentProtection from "@/components/ContentProtection";
import { LOGO_SRC } from "@/lib/branding";
import "./globals.css";

export const metadata: Metadata = {
  title: "PatrimEmotion® - Donner du sens à vos décisions patrimoniales",
  description: "La méthode qui remet l'humain au cœur des décisions patrimoniales",
  icons: {
    icon: LOGO_SRC,
    shortcut: LOGO_SRC,
    apple: LOGO_SRC,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="relative bg-white pe-protect-content" suppressHydrationWarning>
        <ContentProtection />
        <div className="site-root relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
