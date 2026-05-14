import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConstatInteractifPro from "@/components/ConstatInteractifPro";
import { PatrimEmotionMark } from "@/components/PatrimEmotionMark";
import { CtaButton } from "@/components/CtaButton";
import { CtaRow } from "@/components/CtaRow";
import {
  LICENCE_HERO_BADGE_FRAME_CLASS,
  LICENCE_HERO_ROW_FONDATEUR,
  LICENCE_HERO_ROW_INSTITUTIONNEL,
  LICENCE_HERO_ROW_TROIS,
} from "@/lib/licenceHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professionnels du patrimoine | PatrimEmotion®",
  description:
    "Licence PatrimEmotion® pour CGP et courtiers : structurer la relation client, objectiver l'émotionnel, renforcer vos stratégies et vous différencier.",
};

const APPROCHE_STRUCTUREE = [
  "Un questionnaire comportemental structuré",
  "Une analyse multi-axes des préférences décisionnelles",
  "L’identification d’un ou plusieurs profils émotionnels patrimoniaux",
  "Une restitution pédagogique pour éclairer la réflexion patrimoniale",
];

/** Libellés courts — encart « 5 apports concrets pour le conseil » (page Professionnels). */
const CINQ_APPORTS_METHODE = [
  "Une analyse comportementale structurée",
  "Une mise en évidence de profils émotionnels patrimoniaux",
  "Des supports d'aide à la compréhension et au dialogue patrimonial",
  "Une lecture globale du patrimoine et des équilibres patrimoniaux",
  "Un outil d'accompagnement du conseil patrimonial",
];

const IMPACTS_ORGANISATIONNELS = [
  "Renforcer la qualité de l'entretien découverte client",
  "Structurer le parcours client",
  "Faciliter la pédagogie patrimoniale avec des supports lisibles",
  "Soutenir des décisions plus cohérentes dans la durée",
  "Planifier les actions dans le temps",
  "Intégration facile et personnalisable de la méthode",
  "Faciliter le suivi client",
  "Améliorer la traçabilité des échanges",
];

const IMPACTS_RELATIONNELS = [
  "Fluidifier le discours client",
  "Objectiver l'émotionnel dans l'approche des besoins, des objectifs et des solutions possibles",
  "Lever les freins et les objections pour faciliter la prise de décision",
  "Renforcer la qualité de la relation",
  "Définir le style d'accompagnement propre au client",
  "Effectuer une validation contradictoire avec le client",
];

const IMPACTS_STRATEGIQUES = [
  "Renforcer la notoriété du cabinet par une méthode unique",
  "Renforcer la pertinence des stratégies proposées",
  "Se différencier durablement",
  "Créer un effet de levier sur l'ensemble des solutions possibles",
  "Adopter une approche pédagogique holistique pour renforcer son image premium",
  "Garder une avance sur l'IA",
];

const CADRE_SUR = [
  "Une méthode AMF Safe",
  "Méthode propriétaire issue de plus de 20 ans d'expérience terrain en conseil patrimonial.",
  "Marque et licence déposées auprès de l'INPI.",
  "Utilisation dans le cadre réglementaire applicable ; PatrimEmotion® complète l’analyse du professionnel sans s’y substituer.",
];

const LIVRE_BLANC_PRO_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfPknfoAKF-t-O4L_Bv9pIuh7l_t1AbCywGbes-zCKCtg1qOg/viewform";
const DEMO_PRO_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScJDYDqoi6B59UMs-f2Oj1PzTqHgIjwUTkJgYbvFzhRTtJpTA/viewform";
const DEVIS_PRO_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd9lGfavCwwP547D-iYKthIfvM_O8MesFoamQZACQY4FJUjAA/viewform";
const CARTE_ZONE_SECURITE_URL = "/images/Carte_mentale_zone_secu_institutionnels.png";

export default function ProfessionnelsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="-mt-2 md:-mt-3 pt-0 pb-0 px-4">
          <div className="hero-encart pt-16 pb-12 md:pt-20 md:pb-16 px-6 md:px-12">
            <div className="container mx-auto relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center min-h-[260px] md:min-h-[320px]">
                  <div>
                    <h1 className="pe-heading-hero mb-5 text-white">
                      <PatrimEmotionMark />
                      <br />
                      Une méthode pour enrichir la relation client
                    </h1>
                    <p className="pe-body-lead text-white/95 max-w-xl leading-relaxed mb-6">
                      PatrimEmotion® est une méthode d&apos;analyse comportementale appliquée aux décisions patrimoniales. Elle permet d&apos;apporter un éclairage complémentaire sur la manière dont les clients perçoivent l&apos;argent, le risque, le temps et l&apos;incertitude.
                    </p>
                    <CtaRow spacing="none" className="gap-3 sm:justify-start">
                      <CtaButton
                        href={LIVRE_BLANC_PRO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="yellow-elevated"
                        className="text-base font-semibold"
                      >
                        Recevoir le livre blanc professionnel
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </CtaButton>
                    </CtaRow>
                  </div>
                  <div className="hidden min-h-0 flex-col items-center justify-center lg:flex">
                    <div
                      className="flex w-full max-w-md flex-col gap-5 sm:gap-6 lg:max-w-none xl:max-w-lg"
                      role="group"
                      aria-label="Formules de licence PatrimEmotion"
                    >
                      <div className="flex justify-center">
                        <div className={LICENCE_HERO_BADGE_FRAME_CLASS}>
                          <Image
                            src={LICENCE_HERO_ROW_FONDATEUR.src}
                            alt={LICENCE_HERO_ROW_FONDATEUR.alt}
                            fill
                            className="object-contain object-center drop-shadow-[0_12px_36px_rgba(0,0,0,0.32)]"
                            sizes="(max-width: 1024px) 0px, 200px"
                          />
                        </div>
                      </div>
                      <div className="grid w-full grid-cols-3 gap-x-2 gap-y-3 sm:gap-x-4 sm:gap-y-0 md:gap-x-5">
                        {LICENCE_HERO_ROW_TROIS.map(({ src, alt }) => (
                          <div key={src} className="flex min-w-0 justify-center">
                            <div className={LICENCE_HERO_BADGE_FRAME_CLASS}>
                              <Image
                                src={src}
                                alt={alt}
                                fill
                                className="object-contain object-center drop-shadow-[0_12px_36px_rgba(0,0,0,0.32)]"
                                sizes="(max-width: 1024px) 0px, 200px"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex shrink-0 justify-center pt-0.5">
                        <div className={LICENCE_HERO_BADGE_FRAME_CLASS}>
                          <Image
                            src={LICENCE_HERO_ROW_INSTITUTIONNEL.src}
                            alt={LICENCE_HERO_ROW_INSTITUTIONNEL.alt}
                            fill
                            className="object-contain object-center drop-shadow-[0_12px_36px_rgba(0,0,0,0.32)]"
                            sizes="(max-width: 1024px) 0px, 200px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Constats — interactif */}
        <ConstatInteractifPro />

        {/* Pourquoi c'est utile — 3 cartes */}
        <section className="pt-8 md:pt-10 pb-4 md:pb-6 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="pe-heading-section text-[#003662] mb-12 text-center">
              Comprendre les mécanismes qui
              <br />
              influencent vos clients
            </h2>
            <div className="no-justify grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="rounded-2xl bg-[#003662]/5 border-2 border-[#003662]/10 p-6 md:p-8 hover:shadow-lg hover:border-[#003662]/20 transition-all">
                <h3 className="pe-heading-tight text-[#003662] mb-3">Les clients peuvent…</h3>
                <ul className="space-y-2 mb-4 text-[#003662]/90 text-sm">
                  {["retarder certaines décisions importantes", "modifier leur position (contexte, émotions)", "réagir aux événements de marché", "changer d'avis face à l'incertitude"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#f4ca3a] shrink-0">•</span> {item}</li>
                  ))}
                </ul>
                <p className="text-[#003662]/80 text-sm italic">Ces comportements ne sont pas irrationnels, ils sont humains.</p>
              </div>
              <div className="rounded-2xl bg-[#003662]/5 border-2 border-[#003662]/10 p-6 md:p-8 hover:shadow-lg hover:border-[#003662]/20 transition-all">
                <h3 className="pe-heading-tight text-[#003662] mb-3">La limite des bilans classiques</h3>
                <p className="text-[#003662]/90 text-sm mb-2">Ils analysent bien la situation, la fiscalité, la structure et les objectifs, mais rarement la dimension émotionnelle et comportementale.</p>
                <p className="text-[#003662]/90 text-sm">Or c&apos;est souvent elle qui explique hésitations, changements de stratégie ou décisions sous l&apos;effet du contexte.</p>
              </div>
              <div className="rounded-2xl bg-[#003662]/5 border-2 border-[#003662]/10 p-6 md:p-8 hover:shadow-lg hover:border-[#003662]/20 transition-all">
                <h3 className="pe-heading-tight text-[#003662] mb-3">L&apos;approche comportementale</h3>
                <p className="text-[#003662]/90 text-sm mb-2">Les décisions sont influencées par le rapport à l&apos;argent, la perception du risque, la projection dans le temps, les biais cognitifs et l&apos;expérience de vie.</p>
                <p className="text-[#003662]/90 text-sm mb-4">L&apos;approche comportementale permet d&apos;apporter des repères utiles.</p>
                <p className="text-[#003662] font-semibold text-sm">PatrimEmotion® intègre cette dimension dans la relation client.</p>
              </div>
            </div>
            <CtaRow spacing="none" className="mt-6 md:mt-8 -mb-16">
              <CtaButton
                href="/cadre-ethique-scientifique"
                variant="outline-navy"
                className="text-base font-semibold"
              >
                Cadre éthique et scientifique
              </CtaButton>
            </CtaRow>
          </div>
        </section>

        {/* Section 4 : Approche structurelle */}
        <section className="-mt-8 md:-mt-10 pt-4 pb-10 md:pt-6 md:pb-14 section-alt-blue">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="rounded-[2rem] border-2 border-[#9FB620]/35 bg-[#9FB620] p-6 md:p-10 shadow-[0_18px_40px_-18px_rgba(0,54,98,0.35)]">
              <h2 className="pe-heading-section text-white mb-4 text-center">
                Une approche structurelle et reproductible
              </h2>
              <p className="pe-body-lead pe-lead-centered text-white mb-10 text-center leading-relaxed md:text-[1.2rem] max-w-4xl mx-auto">
                L&apos;objectif est d&apos;intégrer la lecture comportementale dans votre pratique sans alourdir l&apos;expérience client, avec un parcours clair, séquencé et directement exploitable en rendez-vous.
              </p>
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                <div className="no-justify rounded-2xl bg-white/95 p-6 md:p-8 border border-[#8aa61d]/25">
                  <h3 className="pe-heading-card text-[#003662] mb-6 text-center">Une approche en 4 étapes</h3>
                  <div className="space-y-4">
                    {APPROCHE_STRUCTUREE.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 rounded-xl bg-[#f7fbe8] border border-[#9FB620]/25 p-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#9FB620] text-sm text-white font-bold md:h-10 md:w-10 md:text-base">
                          {i + 1}
                        </span>
                        <p className="pe-body-lead min-w-0 flex-1 !text-left text-[#003662] leading-relaxed !hyphens-none break-words">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="no-justify rounded-2xl bg-white/95 p-6 md:p-8 border border-[#8aa61d]/25">
                  <h3 className="pe-heading-card text-[#003662] mb-6 text-center">
                    5 apports concrets pour le conseil
                  </h3>
                  <div className="space-y-4">
                    {CINQ_APPORTS_METHODE.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 rounded-xl bg-[#f7fbe8] border border-[#9FB620]/25 p-4"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#9FB620] text-sm text-white font-bold md:h-10 md:w-10 md:text-base">
                          {i + 1}
                        </span>
                        <p className="pe-body-lead min-w-0 flex-1 !text-left text-[#003662] leading-relaxed !hyphens-none break-words">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <CtaRow spacing="none" className="mt-8 md:mt-10">
                <CtaButton
                  href={DEVIS_PRO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="white"
                  className="text-base font-semibold"
                >
                  Demander un devis
                </CtaButton>
              </CtaRow>
            </div>
          </div>
        </section>

        {/* Section 5 : Impacts */}
        <section className="!pt-3 !pb-10 md:!pt-5 md:!pb-14 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="pe-heading-section text-[#f4ca3a] mb-6 text-center">
              Les bénéfices pour votre cabinet
            </h2>
            <p className="pe-body-lead pe-lead-centered text-[#003662]/90 text-center max-w-4xl mx-auto mb-10">
              PatrimEmotion® aide à mieux qualifier les besoins, fluidifier le discours et renforcer la valeur perçue de l&apos;accompagnement patrimonial.
            </p>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-[#003662]/12 bg-[#003662]/[0.03] p-6 md:p-7">
                <h3 className="pe-heading-card text-[#003662] mb-4">Impacts organisationnels</h3>
                <ul className="space-y-3">
                  {IMPACTS_ORGANISATIONNELS.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#003662] text-lg font-semibold shrink-0 leading-none" aria-hidden>
                        ✓
                      </span>
                      <span className="pe-body text-[#003662]/90 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[#003662]/12 bg-[#003662]/[0.03] p-6 md:p-7">
                <h3 className="pe-heading-card text-[#003662] mb-4">Impacts relationnels</h3>
                <ul className="space-y-3">
                  {IMPACTS_RELATIONNELS.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#003662] text-lg font-semibold shrink-0 leading-none" aria-hidden>
                        ✓
                      </span>
                      <span className="pe-body text-[#003662]/90 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[#003662]/12 bg-[#003662]/[0.03] p-6 md:p-7">
                <h3 className="pe-heading-card text-[#003662] mb-4">Impacts stratégiques</h3>
                <ul className="space-y-3">
                  {IMPACTS_STRATEGIQUES.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#003662] text-lg font-semibold shrink-0 leading-none" aria-hidden>
                        ✓
                      </span>
                      <span className="pe-body text-[#003662]/90 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <CtaRow spacing="none" className="mt-10">
              <CtaButton href="/tarifs" variant="blue" className="text-base font-semibold">
                Voir les licences
              </CtaButton>
            </CtaRow>
          </div>
        </section>

        {/* Cadre sûr / conformité */}
        <section className="!pt-4 !pb-24 md:!pt-6 md:!pb-32 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="rounded-2xl bg-[#9FB620] p-8 md:p-12 shadow-xl border-2 border-[#8aa61d]/30">
              <h2 className="pe-heading-section text-white mb-6 text-center">Un cadre sûr</h2>
              <p className="pe-body-lead pe-lead-centered mx-auto mb-8 max-w-3xl text-balance font-bold leading-relaxed text-white">
                La méthode s&apos;inscrit dans un usage professionnel encadré. Elle complète votre analyse patrimoniale sans se substituer à vos obligations réglementaires ni à votre responsabilité de conseil.
              </p>
              <ul className="space-y-4">
                {CADRE_SUR.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-white text-xl font-semibold shrink-0">✓</span>
                    <span className="pe-body-lead text-white/95 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <CtaRow spacing="none" className="mt-8 md:mt-10">
                <CtaButton
                  href={CARTE_ZONE_SECURITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="white"
                  className="text-base font-semibold"
                >
                  La carte zone de sécurité
                </CtaButton>
              </CtaRow>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
