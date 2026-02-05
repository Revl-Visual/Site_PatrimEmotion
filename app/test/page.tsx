import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faire le test | PatrimEmotion®",
  description: "Découvrez votre profil émotionnel patrimonial en quelques minutes.",
};

export default function TestPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-4">
              Faire le test <span className="text-[#f4ca3a]">PatrimEmotion®</span>
            </h1>
            <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
              Découvrez votre profil émotionnel patrimonial en quelques minutes
            </p>
          </div>
        </section>

        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-[#003662] rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] mb-8">
              <p className="text-lg text-white/95 text-center mb-6">
                Le test PatrimEmotion® vous permet d&apos;obtenir un pré-diagnostic de votre profil émotionnel patrimonial.
              </p>
              <p className="text-white/80 text-center">
                Pour accéder au test complet, veuillez nous contacter. Un conseiller vous accompagnera dans la réalisation de votre profil complet.
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#f4ca3a] text-[#003662] hover:bg-[#f5d055] px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
              >
                Contacter un conseiller
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
