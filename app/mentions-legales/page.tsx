import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | PatrimEmotion®",
  description: "Mentions légales du site PatrimEmotion®.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="pe-heading-hero text-white text-center mb-4">
              Mentions <span className="text-[#f4ca3a]">légales</span>
            </h1>
          </div>
        </section>

        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8 pe-body-lead text-[#003662]/90 leading-relaxed">
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">Éditeur du site</h2>
                <p>AM Courtage & Patrimoine (AMCP)</p>
                <p>[Adresse à compléter]</p>
                <p>[SIRET à compléter]</p>
              </div>
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">Directeur de publication</h2>
                <p>Aurélie - AM Courtage & Patrimoine (AMCP)</p>
              </div>
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">Hébergement</h2>
                <p>OVH - [Détails à compléter]</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
