import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConstatInteractif from "@/components/ConstatInteractif";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Particuliers & Dirigeants | PatrimEmotion®",
  description:
    "Bilan PatrimEmotion® pour particuliers et dirigeants : comprenez vos décisions financières, dialoguez mieux avec votre conseiller, sécurisez vos choix.",
};

const BENEFICES = [
  "Mieux comprendre ses décisions financières",
  "Mettre des mots sur ses hésitations ou blocages",
  "Dialoguer plus efficacement avec son conseiller",
  "Sécuriser ses choix dans la durée",
];

export default function ParticuliersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero — jaune dominant */}
        <section className="-mt-2 md:-mt-3 pt-0 pb-0 px-4">
          <div className="hero-encart pt-16 pb-12 md:pt-20 md:pb-16 px-6 md:px-12">
            <div className="container mx-auto relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[320px] md:min-h-[360px]">
                  <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-5 leading-tight">
                      Particuliers & <span className="text-[#f4ca3a]">Dirigeants</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/95 max-w-xl leading-relaxed">
                      Un bilan patrimonial personnalisé qui révèle votre profil émotionnel et aligne vos choix avec qui vous êtes.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-6 py-3.5 rounded-lg transition-all text-base mt-6"
                    >
                      Nous contacter
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                  <div className="hidden lg:flex justify-center items-center">
                    <div className="w-full max-w-sm rounded-2xl bg-[#f4ca3a]/20 border-2 border-[#f4ca3a]/40 p-8 shadow-xl">
                      <p className="text-white font-semibold text-center text-lg mb-4">Bilan PatrimEmotion®</p>
                      <div className="space-y-3">
                        <div className="h-2 rounded-full bg-[#f4ca3a]" style={{ width: "90%" }} />
                        <div className="h-2 rounded-full bg-[#f4ca3a]/80" style={{ width: "75%" }} />
                        <div className="h-2 rounded-full bg-[#f4ca3a]/60" style={{ width: "85%" }} />
                      </div>
                      <p className="text-white text-sm text-center mt-4">Profil · Priorités · Stratégie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Le constat — interactif (checkboxes + encart dynamique) */}
        <ConstatInteractif />

        {/* PatrimEmotion® permet de — full width */}
        <section className="py-16 md:py-24 bg-[#f4ca3a] w-full">
          <div className="container mx-auto px-4 max-w-6xl">
            <header className="text-center mb-12 md:mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-[#003662] mb-4 tracking-tight">
                PatrimEmotion® permet de
              </h2>
              <p className="text-[#003662]/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Reprendre la main sur votre patrimoine en clarifiant ce qui compte pour vous.
              </p>
            </header>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {BENEFICES.map((benefice, i) => (
                <li
                  key={i}
                  className="flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-white text-[#003662] shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 border border-[#003662]/10"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#003662] text-[#f4ca3a] font-semibold text-xl mb-4">
                    {i + 1}
                  </span>
                  <span className="font-semibold text-base md:text-lg leading-relaxed">{benefice}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#003662] text-center mt-10 text-lg font-medium">
              Un bilan personnalisé pour des décisions alignées avec qui vous êtes.
            </p>
          </div>
        </section>

        {/* CTA principal + lien AMCP — encart */}
        <section className="py-16 md:py-24 section-alt-blue">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="rounded-2xl bg-[#003662] p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-l-4 border-[#f4ca3a] text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-6">
                Faire un bilan PatrimEmotion®
              </h2>
              <p className="text-white/90 mb-8 leading-relaxed">
                Répondez au questionnaire et découvrez comment aligner votre patrimoine avec votre profil émotionnel.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-8 py-4 rounded-lg transition-all text-lg"
              >
                Nous contacter
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <p className="mt-10 text-white/80 text-sm">
                Retrouvez aussi PatrimEmotion® sur le site{" "}
                <a
                  href="https://amcourtagepatrimoine.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f4ca3a] font-semibold hover:underline"
                >
                  AM Courtage & Patrimoine
                </a>
                , onglet PatrimEmotion.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
