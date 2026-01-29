import type { Metadata } from "next";
import AnimatedBackground from "@/components/AnimatedBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "PatrimEmotion® - Donner du sens à vos décisions patrimoniales",
  description: "La méthode qui remet l'humain au cœur des décisions patrimoniales",
  icons: {
    icon: "/Logo_PNG.png",
    shortcut: "/Logo_PNG.png",
    apple: "/Logo_PNG.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="relative bg-white" suppressHydrationWarning>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
