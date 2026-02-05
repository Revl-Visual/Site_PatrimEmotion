import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sécurité | PatrimEmotion®",
  description: "Sécurité et confidentialité des données - AM Courtage & Patrimoine (AMCP).",
};

export default function SecuritePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-4">
              <span className="text-[#f4ca3a]">Sécurité</span>
            </h1>
            <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
              La protection de vos données est notre priorité
            </p>
          </div>
        </section>

        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8 text-[#003662]/90 text-lg leading-relaxed">
              <p>
                AM Courtage & Patrimoine (AMCP) met en œuvre tous les moyens nécessaires pour assurer la sécurité et la confidentialité de vos données.
              </p>
              <div>
                <h2 className="text-2xl font-serif font-bold text-[#003662] mb-4">Mesures de sécurité</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Chiffrement des données</li>
                  <li>Accès sécurisé</li>
                  <li>Surveillance continue</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
