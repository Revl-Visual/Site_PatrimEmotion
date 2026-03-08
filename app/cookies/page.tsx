import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique des cookies | PatrimEmotion®",
  description: "Politique de gestion des cookies du site PatrimEmotion®.",
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white text-center mb-4">
              Politique des <span className="text-[#f4ca3a]">cookies</span>
            </h1>
          </div>
        </section>

        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8 text-[#003662]/90 text-lg leading-relaxed">
              <p>
                Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur.
              </p>
              <div>
                <h2 className="text-2xl font-serif font-semibold text-[#003662] mb-4">Types de cookies utilisés</h2>
                <p>Cookies techniques nécessaires au fonctionnement du site.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
