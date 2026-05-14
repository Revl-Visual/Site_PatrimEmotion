import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConstatInteractif from "@/components/ConstatInteractif";
import { PatrimEmotionMark } from "@/components/PatrimEmotionMark";
import { CtaButton } from "@/components/CtaButton";
import { CtaRow } from "@/components/CtaRow";
import { AMCP_BILAN_PATRIMEMOTION_OFFERT_BOOKING_URL, PATRIMEMOTION_QUESTIONNAIRE_URL } from "@/lib/amcp";
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
  "Vous hésitez souvent\u200b avant d'investir",
  "Vous voulez sécuriser vos décisions\u200b (et\u00a0votre\u00a0sommeil)",
  "Vous avez vécu une mauvaise expérience\u200b (perte,\u202fstress,\u202fpression)",
  "Vous voulez construire\u200b une stratégie cohérente,\u200b durable",
  "Vous souhaitez\u200b un conseil patrimonial\u200b plus humain",
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

/** Styles des 4 étapes « Comment se déroule un bilan » (fond teinte, texte teinte, pastille pleine + chiffre blanc) — logique proche de « Ce que contient la licence ». */
const ETAPE_BILAN_STYLES = [
  {
    panel:
      "rounded-2xl bg-gradient-to-br from-[#f4ca3a]/20 to-[#f4ca3a]/[0.05] p-6 shadow-sm transition-shadow hover:shadow-md md:p-8",
    title: "text-[#f4ca3a]",
    body: "text-[#f4ca3a]/95",
    badge: "bg-[#f4ca3a] text-white shadow-md",
  },
  {
    panel:
      "rounded-2xl bg-gradient-to-br from-[#003662]/[0.10] to-[#003662]/[0.03] p-6 shadow-sm transition-shadow hover:shadow-md md:p-8",
    title: "text-[#003662]",
    body: "text-[#003662]/90",
    badge: "bg-[#003662] text-white shadow-md",
  },
  {
    panel:
      "rounded-2xl bg-gradient-to-br from-[#9FB620]/[0.18] to-[#9FB620]/[0.05] p-6 shadow-sm transition-shadow hover:shadow-md md:p-8",
    title: "text-[#9FB620]",
    body: "text-[#9FB620]/95",
    badge: "bg-[#9FB620] text-white shadow-md",
  },
  {
    panel:
      "rounded-2xl bg-gradient-to-br from-[#64748b]/16 to-[#64748b]/[0.05] p-6 shadow-sm transition-shadow hover:shadow-md md:p-8",
    title: "text-[#64748b]",
    body: "text-[#64748b]/90",
    badge: "bg-[#64748b] text-white shadow-md",
  },
] as const;

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
                    <h1 className="pe-heading-hero mb-5 text-white">
                      <PatrimEmotionMark /> : votre{" "}
                      <span className="text-white">profil émotionnel patrimonial</span>
                    </h1>
                    <p className="pe-body-lead text-white/95 max-w-xl leading-relaxed">
                      Comprenez votre relation à l&apos;argent, au risque et à la décision pour construire un patrimoine aligné et durable.
                    </p>
                    <div className="mt-6">
                      <CtaButton
                        href={AMCP_BILAN_PATRIMEMOTION_OFFERT_BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="yellow-elevated"
                        className="text-base font-semibold"
                      >
                        Découvrir mon profil
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </CtaButton>
                    </div>
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

        {/* À qui s'adresse — fond blanc, cartes numérotées (maquette) */}
        <section className="no-justify bg-white !py-7 md:!py-9">
          <div className="container mx-auto max-w-6xl px-4 sm:px-5">
            <h2 className="pe-heading-section mb-6 text-center text-balance text-[#003662] md:mb-8">
              À qui s&apos;adresse <PatrimEmotionMark suffix=" ?" />
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {POUR_QUI.slice(0, 3).map((label, i) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-2xl border border-[#003662]/18 bg-white p-5 shadow-[0_2px_12px_rgba(0,54,98,0.06)] md:gap-5 md:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4ca3a] text-lg font-bold text-[#003662] shadow-sm md:h-14 md:w-14 md:text-xl">
                    {i + 1}
                  </span>
                  <p className="min-w-0 flex-1 !text-left text-base font-bold leading-[1.55] text-[#003662] antialiased !hyphens-none break-words text-pretty md:text-[1.0625rem] md:leading-[1.6]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mx-auto mt-4 flex w-full flex-col gap-4 sm:mt-5 sm:flex-row sm:gap-5 lg:mt-5">
              {POUR_QUI.slice(3).map((label, i) => (
                <div
                  key={label}
                  className="flex min-w-0 w-full flex-1 items-start gap-4 rounded-2xl border border-[#003662]/18 bg-white p-5 shadow-[0_2px_12px_rgba(0,54,98,0.06)] md:gap-5 md:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4ca3a] text-lg font-bold text-[#003662] shadow-sm md:h-14 md:w-14 md:text-xl">
                    {i + 4}
                  </span>
                  <p className="min-w-0 flex-1 !text-left text-base font-bold leading-[1.55] text-[#003662] antialiased !hyphens-none break-words text-pretty md:text-[1.0625rem] md:leading-[1.6]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Le constat — interactif (cases à cocher) */}
        <ConstatInteractif />

        {/* PatrimEmotion® permet de + CTAs */}
        <section className="py-16 md:py-24 bg-[#003662]">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="pe-heading-section mb-10 text-center text-white md:mb-12">
              <PatrimEmotionMark /> permet de :
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 mb-12 md:mb-14">
              {BENEFICES.map((benefice, i) => (
                <li key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white/20">
                  <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                  <span className="pe-body-lead text-white leading-relaxed">{benefice}</span>
                </li>
              ))}
            </ul>
            <CtaRow>
              <CtaButton href="/methode" variant="white" className="group text-base font-semibold">
                Découvrir la méthode
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </CtaButton>
            </CtaRow>
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
            <h2 className="pe-heading-section mb-6 text-center text-white">
              La solution <PatrimEmotionMark />
            </h2>
            <div className="mx-auto mb-10 max-w-3xl space-y-4">
              <p className="pe-body-lead text-white/95 leading-relaxed text-left lg:text-justify [text-align-last:left]">
                PatrimEmotion® est une méthode qui identifie votre profil émotionnel patrimonial pour vous aider à décider avec clarté et sérénité en vous indiquant notamment comment vous vivez la sécurité, le risque, la décision et la projection.
              </p>
              <p className="pe-body-lead text-white/95 font-semibold leading-relaxed text-left lg:text-justify [text-align-last:left]">
                PatrimEmotion® : comprendre la personne avant de conseiller le patrimoine.
              </p>
              <p className="pe-body-lead text-white/90 leading-relaxed text-left lg:text-justify [text-align-last:left]">
                Objectif : vous aider à prendre des décisions plus alignées, plus confortables, et plus cohérentes dans le temps.
              </p>
            </div>
            <h3 className="pe-heading-section text-[#9FB620] mb-8 text-center">3 bénéfices</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {TROIS_BENEFICES.map((b, i) => (
                <div key={i} className="rounded-2xl bg-white/10 border border-white/20 p-6 md:p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-[#9FB620] text-white flex items-center justify-center text-xl font-bold mb-4">
                    {i + 1}
                  </div>
                  <p className="pe-body-lead !text-left [text-align-last:auto] text-white leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comment ça marche ? — 4 étapes */}
        <section className="!pt-14 !pb-16 md:!pt-20 md:!pb-24 section-alt-blue">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="pe-heading-section mb-12 text-center text-[#003662]">
              Comment se déroule un bilan <PatrimEmotionMark /> ?
            </h2>
            <div className="relative">
              {/* Ligne verticale sur desktop */}
              <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-[#003662]/20" />
              <div className="space-y-8">
                {ETAPES.map((etape, i) => {
                  const s = ETAPE_BILAN_STYLES[i];
                  return (
                  <div key={i} className="relative flex gap-6 md:gap-8 items-start">
                    <div
                      className={`shrink-0 z-10 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold ${s.badge}`}
                    >
                      {i + 1}
                    </div>
                    <div className={`flex-1 ${s.panel}`}>
                      <h4 className={`pe-heading-card mb-3 ${s.title}`}>{etape.titre}</h4>
                      <p className={`pe-body-lead leading-relaxed ${s.body}`}>{etape.texte}</p>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 mt-14">
              <div className="rounded-2xl bg-[#f4ca3a]/20 border-2 border-[#f4ca3a]/40 p-6 text-center">
                <p className="pe-body-lead text-[#003662] font-semibold leading-relaxed flex items-center justify-center gap-2">
                  <span className="text-[#003662] text-xl font-semibold shrink-0" aria-hidden>✓</span>
                  <span>Sans jugement, sans pression</span>
                </p>
              </div>
              <div className="rounded-2xl bg-[#f4ca3a]/20 border-2 border-[#f4ca3a]/40 p-6 text-center">
                <p className="pe-body-lead text-[#003662] font-semibold leading-relaxed flex items-center justify-center gap-2">
                  <span className="text-[#003662] text-xl font-semibold shrink-0" aria-hidden>✓</span>
                  <span>Pédagogique, concret, applicable</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ce que vous recevez + CTA — encart vert */}
        <section className="!pt-8 !pb-24 md:!pt-12 md:!pb-28 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="rounded-2xl bg-[#9FB620] p-8 md:p-12 shadow-xl border-2 border-[#8aa61d]/30">
              <h2 className="pe-heading-section text-white mb-5 text-center">
                Ce que vous recevez
              </h2>
              <ul className="space-y-4 mb-10">
                {LIVRABLES.map((livrable, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-white text-xl font-semibold shrink-0">✓</span>
                    <span className="pe-body-lead text-white/95">{livrable}</span>
                  </li>
                ))}
              </ul>
              <CtaRow spacing="none">
                <CtaButton
                  href={PATRIMEMOTION_QUESTIONNAIRE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="white"
                  className="text-base font-semibold"
                >
                  Réaliser mon bilan PatrimEmotion
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </CtaButton>
              </CtaRow>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="!pt-8 !pb-16 md:!pt-12 md:!pb-24 section-alt-blue">
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
