import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConstatInteractif from "@/components/ConstatInteractif";
import { AMCP_CONTACT_URL, PATRIMEMOTION_QUESTIONNAIRE_URL } from "@/lib/amcp";
import type { Metadata } from "next";

const AMCP_PATRIMEMOTION_URL = "https://www.am-courtage-et-patrimoine.fr/patrimemotion";

export const metadata: Metadata = {
  title: "Particuliers & Dirigeants | PatrimEmotion®",
  description:
    "Bilan PatrimEmotion® pour particuliers et dirigeants : comprenez vos décisions financières, dialoguez mieux avec votre conseiller, sécurisez vos choix.",
};

const BENEFICES = [
  "mieux comprendre ses décisions financières",
  "mettre des mots sur ses hésitations ou blocages",
  "dialoguer plus efficacement avec son conseiller",
  "sécuriser ses choix dans la durée",
];

const TROIS_BENEFICES = [
  "Décider avec plus de clarté (moins d'hésitations, moins de regrets)",
  "Comprendre ce qui vous freine ou vous stresse vraiment",
  "Recevoir des recommandations qui vous ressemblent",
];

const POUR_QUI = [
  "Vous hésitez souvent avant d'investir",
  "Vous voulez sécuriser vos décisions (et votre sommeil)",
  "Vous avez vécu une mauvaise expérience (perte, stress, pression)",
  "Vous voulez construire une stratégie cohérente, durable",
  "Vous souhaitez un conseil patrimonial plus humain",
];

const ETAPES = [
  {
    titre: "Étape 1 : Questionnaire (simple, guidé)",
    texte: "Un questionnaire structuré permet d'explorer différentes dimensions liées à votre rapport à l'argent, à l'incertitude, au temps et aux décisions patrimoniales.",
  },
  {
    titre: "Analyse et lecture des résultats",
    texte: "Les réponses sont analysées selon plusieurs axes afin de faire apparaître certaines tendances comportementales et préférences décisionnelles.",
  },
  {
    titre: "Restitution pédagogique (compréhension et déclic)",
    texte: "Les résultats sont présentés sous la forme d'un profil émotionnel patrimonial et d'une lecture synthétique permettant de mieux comprendre votre manière d'aborder les décisions patrimoniales.",
  },
  {
    titre: "Échanges et repères d'accompagnement adaptés à vous",
    texte: "Cette restitution sert de base de dialogue afin d'éclairer la réflexion patrimoniale et d'identifier des repères utiles dans la structuration des décisions.",
  },
];

const LIVRABLES = [
  "Votre profil émotionnel patrimonial (dominant + secondaire)",
  "Une synthèse claire et lisible",
  "Les points de vigilance (ce qui peut vous faire dévier)",
  "Vos leviers (ce qui vous rassure et vous aide à avancer)",
  "Des recommandations de posture & de décisions et pistes d'actions.",
];

const FAQ = [
  {
    q: "Est-ce un test psychologique ?",
    r: "Non. PatrimEmotion® est un outil d'aide à la compréhension et à la décision patrimoniale.",
  },
  {
    q: "Est-ce que ça remplace un audit patrimonial ?",
    r: "Non. Cela complète l'audit, on comprend comment vous décidez, pour adapter la stratégie.",
  },
  {
    q: "Et si je n'aime pas mon profil ?",
    r: "Il n'y a pas de « bon » ou « mauvais » profil. C'est une grille de lecture bienveillante.",
  },
  {
    q: "Mes données sont-elles confidentielles ?",
    r: "Oui. Elles sont traitées de manière confidentielle et dans le respect du RGPD.",
  },
];

const POLITIQUE_CONFIDENTIALITE_POINTS = [
  "Méthode propriétaire basée sur une expérience de plus de 20 ans dans le domaine de la gestion de patrimoine et des affaires dans le milieu des banques et assurances et en tant qu'indépendante, sur une clientèle de particuliers et chefs d'entreprise.",
  "Marque et licence déposées auprès de l'INPI.",
  "Activité exercée dans le cadre réglementaire applicable aux Conseillers en Investissements Financiers, sous le contrôle de l'Autorité des Marchés Financiers. PatrimEmotion® est exploitée par des cabinets partenaires selon un cadre contractuel strict. Toute demande de bilan ou de licence est soumise à validation.",
];

export default function ParticuliersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero — PatrimEmotion® : votre profil émotionnel patrimonial */}
        <section className="-mt-2 md:-mt-3 pt-0 pb-0 px-4">
          <div className="hero-encart pt-16 pb-12 md:pt-20 md:pb-16 px-6 md:px-12">
            <div className="container mx-auto relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center min-h-[260px] md:min-h-[320px]">
                  <div>
                    <h1 className="pe-heading-hero text-white mb-5">
                      PatrimEmotion® : votre <span className="text-[#f4ca3a]">profil émotionnel patrimonial</span>
                    </h1>
                    <p className="pe-body-lead text-white/95 max-w-xl leading-relaxed">
                      Comprenez votre relation à l&apos;argent, au risque et à la décision pour construire un patrimoine aligné et durable.
                    </p>
                    <a
                      href={AMCP_CONTACT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-6 py-3.5 rounded-xl transition-all text-base mt-6 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                    >
                      Réserver mon Bilan Découverte
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                  <div className="hidden lg:flex justify-center items-center">
                    <div className="w-full max-w-sm rounded-2xl bg-white/10 p-1 overflow-hidden">
                      <div className="relative w-full aspect-square">
                        <Image
                          src="/images/Rond_8_profils.png"
                          alt="Rond des 8 profils PatrimEmotion"
                          fill
                          className="object-contain scale-[1.08]"
                          sizes="(max-width: 1024px) 0vw, 380px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Le constat — interactif (cases à cocher) */}
        <ConstatInteractif />

        {/* PatrimEmotion® permet de + CTAs */}
        <section className="py-16 md:py-24 bg-[#003662]">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="pe-heading-section text-white mb-8 text-center">
              PatrimEmotion® permet de :
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 mb-12">
              {BENEFICES.map((benefice, i) => (
                <li key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/10 border border-white/20">
                  <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                  <span className="text-white">{benefice}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={PATRIMEMOTION_QUESTIONNAIRE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-6 py-3.5 md:px-8 md:py-4 rounded-xl transition-all shadow-lg hover:scale-[1.02]"
              >
                Répondre au questionnaire
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
        </section>

        {/* Pourquoi le patrimoine est souvent difficile */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="pe-heading-section text-[#003662] mb-8 text-center">
              Pourquoi le patrimoine est souvent difficile … même quand « tout est clair » ?
            </h2>
            <div className="space-y-6 pe-body-lead text-[#003662]/90 leading-relaxed">
              <p>
                Parce que les décisions patrimoniales ne sont pas uniquement rationnelles.
                Elles touchent à la sécurité, au contrôle, à la peur de perdre, à la projection, à la famille, au temps… Elles sont aussi émotionnelles.
              </p>
              <p>
                Deux personnes avec le même patrimoine peuvent prendre des décisions opposées.
                Ce n&apos;est pas un problème de chiffres. C&apos;est une question d&apos;émotions.
              </p>
            </div>
          </div>
        </section>

        {/* La solution PatrimEmotion® + 3 bénéfices */}
        <section className="py-16 md:py-24 bg-[#003662]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="pe-heading-section text-white mb-6 text-center">
              La solution <span className="text-[#f4ca3a]">PatrimEmotion®</span>
            </h2>
            <p className="pe-body-lead text-white/95 mb-4 leading-relaxed">
              PatrimEmotion® est une méthode qui identifie votre profil émotionnel patrimonial pour vous aider à décider avec clarté et sérénité en vous indiquant notamment comment vous vivez la sécurité, le risque, la décision et la projection.
            </p>
            <p className="pe-body-lead text-white/95 font-semibold mb-6">
              PatrimEmotion® : comprendre la personne avant de conseiller le patrimoine.
            </p>
            <p className="pe-body-lead text-white/90 mb-10">
              Objectif : vous aider à prendre des décisions plus alignées, plus confortables, et plus cohérentes dans le temps.
            </p>
            <h3 className="pe-heading-card text-[#f4ca3a] mb-6 text-center">3 bénéfices</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {TROIS_BENEFICES.map((b, i) => (
                <div key={i} className="rounded-2xl bg-white/10 border border-white/20 p-6 md:p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-[#f4ca3a] text-[#003662] flex items-center justify-center text-xl font-bold mb-4">
                    {i + 1}
                  </div>
                  <p className="pe-body-lead text-white leading-relaxed font-medium">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comment ça marche ? — 4 étapes */}
        <section className="py-16 md:py-24 section-alt-blue">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="pe-heading-section text-[#003662] mb-4 text-center">
              Comment ça marche ?
            </h2>
            <h3 className="pe-heading-card text-[#003662]/90 mb-12 text-center">
              Comment se déroule un Bilan PatrimEmotion® ?
            </h3>
            <div className="relative">
              {/* Ligne verticale sur desktop */}
              <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-[#003662]/20" />
              <div className="space-y-8">
                {ETAPES.map((etape, i) => (
                  <div key={i} className="relative flex gap-6 md:gap-8 items-start">
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#003662] text-white flex items-center justify-center text-2xl font-bold shadow-lg z-10">
                      {i + 1}
                    </div>
                    <div className="flex-1 rounded-2xl bg-white border-2 border-[#003662]/10 p-6 md:p-8 shadow-md hover:shadow-lg hover:border-[#003662]/20 transition-all">
                      <h4 className="pe-heading-card text-[#003662] mb-3">{etape.titre}</h4>
                      <p className="pe-body-lead text-[#003662]/90 leading-relaxed">{etape.texte}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 mt-14">
              <div className="rounded-2xl bg-[#f4ca3a]/20 border-2 border-[#f4ca3a]/40 p-6 text-center">
                <p className="pe-body-lead text-[#003662] font-semibold leading-relaxed flex items-center justify-center gap-2">
                  <span className="text-[#9FB620] text-xl shrink-0" aria-hidden>✓</span>
                  <span>Sans jugement, sans pression</span>
                </p>
              </div>
              <div className="rounded-2xl bg-[#f4ca3a]/20 border-2 border-[#f4ca3a]/40 p-6 text-center">
                <p className="pe-body-lead text-[#003662] font-semibold leading-relaxed flex items-center justify-center gap-2">
                  <span className="text-[#9FB620] text-xl shrink-0" aria-hidden>✓</span>
                  <span>Pédagogique, concret, applicable</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ce que vous recevez + CTA — encart vert */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="rounded-2xl bg-[#9FB620] p-8 md:p-12 shadow-xl border-2 border-[#8aa61d]/30">
              <h2 className="pe-heading-section text-white mb-4 text-center">
                Ce que vous recevez
              </h2>
              <p className="pe-body-lead text-white/95 mb-8 text-center">
                Vos livrables PatrimEmotion® :
              </p>
              <ul className="space-y-4 mb-10">
                {LIVRABLES.map((livrable, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#1a3310] text-xl font-semibold shrink-0">✓</span>
                    <span className="pe-body-lead text-white/95">{livrable}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <a
                  href={PATRIMEMOTION_QUESTIONNAIRE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-white/95 text-[#003662] font-semibold px-6 py-3.5 md:px-8 md:py-4 rounded-xl transition-all shadow-lg hover:scale-[1.02]"
                >
                  Recevoir mon Bilan PatrimEmotion
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* C'est pour vous */}
        <section className="py-16 md:py-24 bg-[#003662]">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="pe-heading-section text-white mb-4 text-center">
              Pour qui / Pour quoi ?
            </h2>
            <h3 className="pe-heading-card text-white/90 mb-12 text-center">
              À qui s&apos;adresse PatrimEmotion® ?
            </h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {POUR_QUI.map((item, i) => (
                <div key={i} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)] min-w-0 rounded-2xl bg-white/10 border border-white/20 p-5 md:p-6 hover:bg-white/15 hover:border-white/30 transition-all duration-300 flex items-center gap-3">
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-[#f4ca3a] text-[#003662] flex items-center justify-center font-bold text-lg">
                    {i + 1}
                  </span>
                  <p className="pe-body-lead text-white/95 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — encart avant FAQ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="rounded-2xl bg-[#003662] p-8 md:p-10 text-center shadow-xl">
              <h3 className="pe-heading-card-lg text-white mb-4">
                Prêt(e) à décider autrement ?
              </h3>
              <a
                href={PATRIMEMOTION_QUESTIONNAIRE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-6 py-3.5 md:px-8 md:py-4 rounded-xl transition-all shadow-lg hover:scale-[1.02]"
              >
                Réaliser mon bilan patrimonial émotionnel PatrimEmotion
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 section-alt-blue">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="pe-heading-section text-[#003662] mb-10 text-center">
              Questions fréquentes
            </h2>
            <div className="space-y-3 md:space-y-4">
              {FAQ.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-2xl bg-white border border-[#003662]/10 shadow-sm open:shadow-md open:border-[#003662]/20 transition-shadow"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 md:p-6 pe-body-lead font-semibold text-[#003662] leading-snug [&::-webkit-details-marker]:hidden">
                    <span className="text-pretty pr-2">{item.q}</span>
                    <svg
                      className="h-5 w-5 shrink-0 text-[#003662] transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="border-t border-[#003662]/10 px-5 pb-5 pt-0 md:px-6 md:pb-6">
                    <p className="pt-4 pe-body-lead text-[#003662]/90 leading-relaxed">{item.r}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Politique de confidentialité (contenu « Un cadre sûr ») + CTA final — fond vert */}
        <section className="py-16 md:py-24 bg-[#9FB620]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="pe-heading-section text-white mb-8 text-center">
              Politique de Confidentialité
            </h2>
            <div className="rounded-2xl bg-white/95 p-6 md:p-10 shadow-xl border-2 border-white/50 mb-10">
              <p className="pe-body-lead text-[#003662]/90 mb-6 text-center leading-relaxed">
                PatrimEmotion® est un outil d&apos;aide à la décision ; vos données sont traitées dans le respect du RGPD et dans un cadre sécurisé.
              </p>
              <ul className="space-y-4">
                {POLITIQUE_CONFIDENTIALITE_POINTS.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                    <span className="pe-body-lead text-[#003662]/95 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
