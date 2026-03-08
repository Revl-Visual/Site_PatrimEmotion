import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | PatrimEmotion®",
  description: "Protection des données personnelles - AM Courtage & Patrimoine (AMCP).",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white text-center mb-4">
              Politique de <span className="text-[#f4ca3a]">confidentialité</span>
            </h1>
          </div>
        </section>

        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8 text-[#003662]/90 text-lg leading-relaxed">
              <p>
                AM Courtage & Patrimoine (AMCP) s&apos;engage à protéger la confidentialité de vos données personnelles.
              </p>
              <div>
                <h2 className="text-2xl font-serif font-semibold text-[#003662] mb-4">Collecte des données</h2>
                <p>Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes.</p>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-semibold text-[#003662] mb-4">Utilisation des données</h2>
                <p>Vos données personnelles ne sont pas vendues, échangées ou transférées à des tiers sans votre consentement.</p>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-semibold text-[#003662] mb-4">Vos droits</h2>
                <p>Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
