import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Particuliers & Dirigeants | PatrimEmotion®",
  description: "Un bilan patrimonial personnalisé qui révèle votre profil émotionnel.",
};

export default function ParticuliersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-4">
              Particuliers & <span className="text-[#f4ca3a]">Dirigeants</span>
            </h1>
            <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
              Un bilan patrimonial personnalisé qui révèle votre profil émotionnel
            </p>
          </div>
        </section>

        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-[#003662] mb-8">
              Pourquoi choisir <span className="text-[#f4ca3a]">PatrimEmotion®</span> ?
            </h2>
            <div className="space-y-6 text-[#003662]/90 text-lg leading-relaxed">
              <p>
                En tant que particulier ou dirigeant, vous êtes confronté à de nombreuses décisions patrimoniales complexes. PatrimEmotion® vous aide à prendre des décisions alignées avec qui vous êtes vraiment.
              </p>
              <p>
                Notre méthode vous permet de comprendre votre relation à l&apos;argent et au risque, pour construire une stratégie patrimoniale qui vous ressemble et que vous pourrez assumer sur le long terme.
              </p>
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#f4ca3a] text-[#003662] hover:bg-[#f5d055] px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
              >
                Demander un bilan patrimonial
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
