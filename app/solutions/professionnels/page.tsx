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
        {/* Hero Section (même structure que l'accueil) */}
        <section className="-mt-2 md:-mt-3 pt-0 pb-0 px-4">
          <div className="hero-encart pt-16 pb-0 md:pt-20 md:pb-0 px-6 md:px-12">
            <div className="container mx-auto relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[420px] md:min-h-[480px]">
                  <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans text-white mb-5 leading-[1.15] tracking-tight">
                      <span className="font-normal">Professionnels </span>
                      <span className="font-bold text-[#f4ca3a]">CGP / Courtiers</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
                      Obtenez la licence PatrimEmotion® et différenciez votre conseil.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-6 py-3.5 rounded-lg transition-all text-base"
                    >
                      Demandez une démo personnalisée <span className="text-sm font-normal">(15 min)</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <p className="text-sm text-white/80 mt-4">
                      Vous bénéficierez d&apos;un échange personnalisé sans engagement.
                    </p>
                  </div>
                  <div className="hidden lg:flex justify-center items-center">
                    <div className="relative w-full max-w-md">
                      <div className="bg-white/95 rounded-2xl shadow-2xl overflow-hidden" style={{ transform: "perspective(800px) rotateY(-8deg) rotateX(2deg)" }}>
                        <div className="aspect-video bg-neutral-100 rounded-t-2xl p-4 flex flex-col gap-3">
                          <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-neutral-300" />
                            <div className="w-2 h-2 rounded-full bg-neutral-300" />
                            <div className="w-2 h-2 rounded-full bg-neutral-300" />
                          </div>
                          <div className="grid grid-cols-2 gap-3 flex-1">
                            <div className="bg-white rounded-lg p-3">
                              <p className="text-xs font-medium text-[#003662] mb-2">Profil</p>
                              <div className="h-12 w-12 rounded-full border-2 border-[#003662] border-t-[#f4ca3a] mx-auto" />
                              <p className="text-center text-xs font-semibold text-[#003662] mt-2">PatrimEmotion®</p>
                            </div>
                            <div className="bg-white rounded-lg p-3">
                              <p className="text-xs font-medium text-[#003662] mb-2">Priorités</p>
                              <div className="space-y-1">
                                <div className="h-1.5 rounded bg-[#f4ca3a]/80 w-full" />
                                <div className="h-1.5 rounded bg-[#9FB620]/60 w-4/5" />
                                <div className="h-1.5 rounded bg-[#003662]/30 w-3/5" />
                              </div>
                            </div>
                            <div className="col-span-2 bg-white rounded-lg p-3">
                              <p className="text-xs font-medium text-[#003662] mb-2">Résultat</p>
                              <p className="text-xs text-[#003662]">Stratégie alignée avec vos émotions et objectifs</p>
                            </div>
                          </div>
                        </div>
                        <div className="h-3 bg-neutral-200 rounded-b-2xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/10 mt-12 md:mt-16 pt-8 pb-6 md:pb-8">
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    <div>
                      <p className="text-3xl md:text-4xl font-bold text-[#f4ca3a]">+20</p>
                      <p className="text-white/90 text-sm md:text-base mt-1">années d&apos;expertise</p>
                    </div>
                    <div>
                      <p className="text-3xl md:text-4xl font-bold text-[#f4ca3a]">+500</p>
                      <p className="text-white/90 text-sm md:text-base mt-1">profils réalisés</p>
                    </div>
                    <div>
                      <p className="text-3xl md:text-4xl font-bold text-[#f4ca3a]">3</p>
                      <p className="text-white/90 text-sm md:text-base mt-1">niveaux de certification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
