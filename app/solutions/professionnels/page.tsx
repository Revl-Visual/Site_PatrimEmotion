import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professionnels CGP | PatrimEmotion®",
  description: "Obtenez la licence PatrimEmotion® et différenciez votre conseil.",
};

export default function ProfessionnelsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-4">
              Professionnels <span className="text-[#f4ca3a]">CGP / Courtiers</span>
            </h1>
            <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
              Obtenez la licence PatrimEmotion® et différenciez votre conseil
            </p>
          </div>
        </section>

        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-[#003662] mb-8">
              Devenez <span className="text-[#f4ca3a]">licencié</span> PatrimEmotion®
            </h2>
            <div className="space-y-6 text-[#003662]/90 text-lg leading-relaxed">
              <p>
                En tant que conseiller en gestion de patrimoine ou courtier, vous cherchez constamment à différencier votre approche et à offrir une valeur ajoutée à vos clients.
              </p>
              <p>
                La licence PatrimEmotion® vous permet d&apos;intégrer cette méthode unique dans votre pratique professionnelle, offrant à vos clients une approche innovante qui prend en compte leur dimension émotionnelle.
              </p>
              <p className="font-semibold text-[#003662]">Bénéfices pour votre activité :</p>
              <ul className="list-disc list-inside space-y-2 text-[#003662]/90 ml-4">
                <li>Différenciation de votre conseil</li>
                <li>Meilleure compréhension de vos clients</li>
                <li>Décisions patrimoniales plus durables</li>
                <li>Formation et support inclus</li>
              </ul>
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#f4ca3a] text-[#003662] hover:bg-[#f5d055] px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
              >
                Devenir licencié
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
