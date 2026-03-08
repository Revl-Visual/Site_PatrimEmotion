import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | PatrimEmotion®",
  description: "PatrimEmotion® est une méthode psychométrique développée par AM Courtage & Patrimoine (AMCP).",
};

export default function AProposPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white text-center mb-4">
              À <span className="text-[#f4ca3a]">propos</span>
            </h1>
            <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
              La méthode qui remet l&apos;humain au cœur des décisions patrimoniales
            </p>
          </div>
        </section>

        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6 text-[#003662]/90 text-lg leading-relaxed">
              <p>
                <span className="font-semibold text-[#003662]">PatrimEmotion®</span> est une méthode psychométrique propriétaire développée par AM Courtage & Patrimoine (AMCP), appliquée à la finance patrimoniale.
              </p>
              <p>
                Notre mission est de remettre l&apos;<span className="text-[#f4ca3a] font-semibold">humain</span> au cœur des décisions patrimoniales en intégrant la dimension émotionnelle dans l&apos;analyse et la stratégie patrimoniale.
              </p>
              <p className="pt-4 border-t border-[#003662]/10">
                <span className="text-[#f4ca3a] font-semibold">Notre baseline :</span> Donner du sens à vos décisions patrimoniales
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
