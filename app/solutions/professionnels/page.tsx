import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConstatInteractifPro from "@/components/ConstatInteractifPro";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professionnels du patrimoine | PatrimEmotion®",
  description:
    "Licence PatrimEmotion® pour CGP et courtiers : structurer la relation client, objectiver l'émotionnel, renforcer vos stratégies et vous différencier.",
};

const BENEFICES_PRO = [
  "Structurer la relation client",
  "Objectiver l'émotionnel dans le conseil",
  "Renforcer la pertinence des stratégies proposées",
  "Se différencier durablement",
];

const CE_QUE_FAIT = [
  "Analyse psychométrique avec profil émotionnel principal",
  "Profils patrimoniaux et score émotionnel patrimonial global",
  "Aide à la décision & à la cohérence sur long terme grâce à un plan d'actions avec priorités (prévoyance, délégation…)",
  "Allocation de répartition globale du patrimoine incluant l'immobilier direct",
  "Conseils financiers et patrimoniaux alignés",
];

export default function ProfessionnelsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero — bleu dominant, touches jaunes */}
        <section className="-mt-2 md:-mt-3 pt-0 pb-0 px-4">
          <div className="hero-encart pt-16 pb-12 md:pt-20 md:pb-16 px-6 md:px-12">
            <div className="container mx-auto relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[320px] md:min-h-[360px]">
                  <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-5 leading-tight">
                      <span className="text-[#f4ca3a]">PatrimEmotion®</span>
                      <br />
                      La méthode qui relie personnalité, émotions et décisions patrimoniales.
                    </h1>
                    <p className="text-lg md:text-xl text-white/95 max-w-xl leading-relaxed mb-6">
                      Une approche psychométrique structurée pour mieux comprendre le rapport à l&apos;argent et construire des stratégies patrimoniales alignées, durables et assumées.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-6 py-3.5 rounded-lg transition-all text-base"
                      >
                        Découvrir la méthode en 15 min
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-[#003662] font-semibold px-6 py-3.5 rounded-lg transition-all text-base border-2 border-white"
                      >
                        Demander un devis (pré-admission)
                      </Link>
                    </div>
                  </div>
                  <div className="hidden lg:flex justify-center items-center">
                    <div className="w-full max-w-sm rounded-2xl bg-[#f4ca3a]/20 border-2 border-[#f4ca3a]/40 p-8 shadow-xl">
                      <p className="text-white font-semibold text-center text-lg mb-4">Licence PatrimEmotion®</p>
                      <div className="space-y-3">
                        <div className="h-2 rounded-full bg-[#f4ca3a]" style={{ width: "90%" }} />
                        <div className="h-2 rounded-full bg-[#f4ca3a]/80" style={{ width: "75%" }} />
                        <div className="h-2 rounded-full bg-[#f4ca3a]/60" style={{ width: "85%" }} />
                      </div>
                      <p className="text-white text-sm text-center mt-4">Relation client · Stratégie · Différenciation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Le constat — interactif pro */}
        <ConstatInteractifPro />

        {/* PatrimEmotion® permet de — full width bleu */}
        <section className="py-16 md:py-24 bg-[#003662] w-full">
          <div className="container mx-auto px-4 max-w-6xl">
            <header className="text-center mb-12 md:mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-4 tracking-tight">
                PatrimEmotion® permet de
              </h2>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Donner à votre conseil un cadre structuré et différenciant.
              </p>
            </header>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {BENEFICES_PRO.map((benefice, i) => (
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
            <div className="text-center mt-10">
              <Link
                href="/certification-licences"
                className="inline-flex items-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-8 py-4 rounded-lg transition-all text-lg"
              >
                Découvrir la licence PatrimEmotion®
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Intro méthode */}
        <section className="py-16 md:py-24 section-alt-blue">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="rounded-2xl bg-[#003662] p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-l-4 border-[#f4ca3a]">
              <p className="text-white leading-relaxed mb-4">
                <strong className="text-[#f4ca3a]">PatrimEmotion®</strong> est une méthode de diagnostic patrimonial psychométrique appliquée à la finance comportementale.
              </p>
              <p className="text-white/90 leading-relaxed">
                Elle permet d&apos;analyser le profil émotionnel, décisionnel et patrimonial d&apos;un client à partir d&apos;un questionnaire structuré multi-axes, afin d&apos;aligner les stratégies patrimoniales avec sa personnalité financière, ses valeurs et sa capacité réelle à prendre des décisions dans la durée.
              </p>
            </div>
          </div>
        </section>

        {/* Ce que fait PatrimEmotion — 3 piliers / 5 points */}
        <section className="py-16 md:py-24 bg-[#003662]">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4 text-center">
              Ce que fait PatrimEmotion®
            </h2>
            <p className="text-white/80 text-center mb-10 max-w-2xl mx-auto">
              Une méthode en 3 piliers pour un conseil aligné et durable.
            </p>
            <ul className="space-y-4">
              {CE_QUE_FAIT.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white/10 border-l-4 border-[#f4ca3a] text-white"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4ca3a] text-[#003662] font-semibold text-sm">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed pt-0.5">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Un partenaire de confiance */}
        <section className="py-16 md:py-24 section-alt-blue">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif font-semibold text-[#003662] mb-8 text-center">
              Un partenaire de confiance
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-md border-l-4 border-[#003662]">
                <span className="text-[#003662] text-2xl shrink-0">✓</span>
                <p className="text-[#003662] leading-relaxed">
                  Méthode propriétaire basée sur une expérience de plus de <strong>20 ans</strong> dans la gestion de patrimoine et les affaires (banques, assurances, indépendant), auprès de particuliers et chefs d&apos;entreprise.
                </p>
              </li>
              <li className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-md border-l-4 border-[#003662]">
                <span className="text-[#003662] text-2xl shrink-0">✓</span>
                <p className="text-[#003662] leading-relaxed">
                  Marque <strong>déposée auprès de l&apos;INPI</strong> et <strong>contrôlée par l&apos;AMF</strong>.
                </p>
              </li>
              <li className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-md border-l-4 border-[#003662]">
                <span className="text-[#003662] text-2xl shrink-0">✓</span>
                <p className="text-[#003662] leading-relaxed">
                  PatrimEmotion® est exploitée par des <strong>cabinets partenaires</strong> selon un cadre contractuel strict. Toute demande de bilan ou de licence est soumise à validation.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA final — encart bleu */}
        <section className="py-16 md:py-24 section-alt-blue">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="rounded-2xl bg-[#003662] p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-l-4 border-[#f4ca3a] text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-6">
                Découvrir la licence PatrimEmotion®
              </h2>
              <p className="text-white/90 mb-8 leading-relaxed">
                Formez-vous à la méthode et intégrez le profilage émotionnel patrimonial dans votre pratique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demande-demo"
                  className="inline-flex items-center justify-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-8 py-4 rounded-lg transition-all"
                >
                  Demander une démo
                </Link>
                <Link
                  href="/certification-licences"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-[#003662] font-semibold px-8 py-4 rounded-lg transition-all border-2 border-white"
                >
                  Voir les licences
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
