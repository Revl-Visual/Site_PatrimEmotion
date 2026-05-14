import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PatrimEmotionMark } from "@/components/PatrimEmotionMark";
import { CtaButton } from "@/components/CtaButton";
import { CtaRow } from "@/components/CtaRow";
import {
  AMCP_CONTACT_URL,
  PATRIMEMOTION_DEMO_URL,
  PATRIMEMOTION_LICENCE_FORM_URL,
  PATRIMEMOTION_LIVRE_BLANC_URL,
} from "@/lib/amcp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devenez Licencié PatrimEmotion® | Licences",
  description:
    "Intégrez une méthode patrimoniale premium : questionnaire, scoring, bilan, plan d'actions, dashboard. Licences LIGHT, CORE, PREMIUM et cadre d'usage professionnel.",
};

const TARIFS_URL = "/tarifs";

/** Visuels hero — `public/images/licences/` */
const LICENCE_HERO_IMAGES = [
  {
    src: "/images/licences/Licencie_fondateur.png",
    alt: "Licencié fondateur PatrimEmotion®",
  },
  {
    src: "/images/licences/licencie_certifie.png",
    alt: "Licencié certifié PatrimEmotion®",
  },
  {
    src: "/images/licences/licencie_confirme.png",
    alt: "Licencié confirmé PatrimEmotion®",
  },
  {
    src: "/images/licences/cabinet_expert.png",
    alt: "Cabinet expert PatrimEmotion®",
  },
  {
    src: "/images/licences/licencie_institutionnel.png",
    alt: "Licencié institutionnel PatrimEmotion®",
  },
] as const;

/** Hero : 1) fondateur seul, 2) certifié / confirmé / expert, 3) institutionnel seul */
const LICENCE_HERO_ROW_FONDATEUR = LICENCE_HERO_IMAGES[0];
const LICENCE_HERO_ROW_TROIS = LICENCE_HERO_IMAGES.slice(1, 4);
const LICENCE_HERO_ROW_INSTITUTIONNEL = LICENCE_HERO_IMAGES[4];

/** Même taille pour tous les badges hero (alignée sur la ligne centrale à 3 colonnes) */
const LICENCE_HERO_BADGE_FRAME_CLASS =
  "relative h-[92px] w-full max-w-[120px] sm:h-[112px] sm:max-w-[168px] md:h-[124px] md:max-w-[190px] lg:h-[132px] lg:max-w-[200px]";

const POINTS_CLES = [
  "Une méthode structurée et homogène",
  "Des outils prêts à l'emploi : questionnaire, scoring, bilan, plan d'actions, dashboard",
  "Une démarche de restitution plus fluide, plus lisible et plus différenciante",
  "Un cadre d'usage clair, compatible avec les exigences de conformité du professionnel",
];

const CITATIONS_CLIENT = [
  "« Je préfère réfléchir… »",
  "« Je ne le sens pas encore… »",
  "« On va attendre un peu… »",
  "« J'ai peur de me tromper… »",
];

const BENEFICES_PRO = [
  "Une restitution plus claire et plus pédagogique",
  "Moins de blocages émotionnels dans la relation client",
  "Moins de procrastination et d'hésitation",
  "Un discours plus homogène au sein du cabinet",
  "Une expérience client plus premium",
  "Une différenciation forte dans votre pratique",
  "Une meilleure traçabilité de certains échanges et validations pédagogiques",
];

const CONTENU_LICENCE_GROUPES = [
  {
    titre: "Accès méthode et ",
    titreAccent: "cadre d'usage",
    panelClass:
      "rounded-2xl bg-gradient-to-br from-[#003662]/[0.05] to-transparent border border-[#003662]/10 px-5 py-7 md:px-8 md:py-8",
    items: [
      "Droit d'usage encadré de la marque PatrimEmotion®",
      "Accès à la méthode officielle PatrimEmotion®",
      "Questionnaire officiel",
      "Outil de scoring verrouillé",
      "Fiches profils et matrices pédagogiques",
      "Formation certifiante donnant accès à un badge",
    ],
  },
  {
    titre: "Restitution et ",
    titreAccent: "pilotage",
    panelClass:
      "rounded-2xl bg-gradient-to-br from-[#9FB620]/[0.08] to-transparent border border-[#9FB620]/25 px-5 py-7 md:px-8 md:py-8",
    items: [
      "Bilan PatrimEmotion®",
      "Plan d'actions PatrimEmotion®",
      "Dashboard Looker verrouillé selon formule",
      "Trames et supports de restitution",
      "Éléments de présentation et de communication professionnelle",
      "Suivi avec les KPI principaux",
    ],
  },
  {
    titre: "Évolutions et ",
    titreAccent: "accompagnement",
    panelClass:
      "rounded-2xl bg-gradient-to-br from-[#003662]/[0.06] to-[#9FB620]/[0.05] border border-[#003662]/10 px-5 py-7 md:px-8 md:py-8",
    items: [
      "Mises à jour méthodologiques",
      "Support selon niveau de licence",
      "Options d'accompagnement, d'audit ou de formation",
    ],
  },
] as const;

const POUR_QUI = [
  "conseillers en gestion de patrimoine",
  "cabinets indépendants",
  "courtiers",
  "cabinets multi-conseillers",
  "agents immobiliers haut de gamme",
  "réseaux commerciaux",
  "organismes de formation",
  "structures souhaitant harmoniser leurs restitutions et améliorer l'adhésion client",
];

const FAQ_ITEMS = [
  {
    q: "Est-ce une franchise ?",
    a: "Non. Il s'agit d'une licence d'usage de marque et de méthode, dans un cadre contractuel défini.",
  },
  {
    q: "Puis-je modifier librement le questionnaire ?",
    a: "Non, sauf cas expressément prévus au contrat. Le maintien d'un cadre homogène protège la cohérence, la lisibilité et la crédibilité de la méthode.",
  },
  {
    q: "En combien de temps puis-je être opérationnel ?",
    a: "En pratique, après la formation initiale et quelques restitutions d'appropriation, l'utilisation devient rapidement fluide.",
  },
  {
    q: "Y a-t-il une exclusivité territoriale ?",
    a: "Non, sauf stipulation écrite spécifique.",
  },
];

function PourQuiAudienceCard({ label }: { label: string }) {
  const displayLabel = label.charAt(0).toLocaleUpperCase("fr-FR") + label.slice(1);
  return (
    <div className="group relative flex h-full items-center overflow-hidden rounded-2xl border border-[#9FB620]/25 bg-[#e4efd4] p-5 shadow-[0_14px_44px_-18px_rgba(0,54,98,0.16)] ring-1 ring-[#9FB620]/15 transition duration-300 hover:-translate-y-1 hover:border-[#9FB620]/40 hover:bg-[#d8e9c4] hover:shadow-[0_22px_52px_-18px_rgba(0,54,98,0.2)] md:p-6">
      <div className="flex w-full items-center gap-4 md:gap-4">
        <span className="relative flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#c4db98] text-[#003662] ring-1 ring-[#9FB620]/35 shadow-sm transition duration-300 group-hover:scale-105 group-hover:bg-[#b8d388] md:size-12">
          <svg className="size-[1.15rem] md:size-5" fill="none" stroke="currentColor" strokeWidth={2.25} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="pe-body-lead relative min-w-0 flex-1 font-medium leading-relaxed text-[#003662] antialiased">
          {displayLabel}
        </span>
      </div>
    </div>
  );
}

export default function LicencesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="-mt-2 md:-mt-3 px-4 pb-12 pt-0 md:pb-16">
          <div className="hero-encart pt-16 pb-14 md:pt-20 md:pb-16 px-6 md:px-12">
            <div className="container mx-auto relative z-10">
              <div className="mx-auto max-w-6xl">
                <h1 className="pe-heading-hero mb-8 text-balance text-center md:mb-10">
                  <span className="text-white">Devenez Licencié </span>
                  <PatrimEmotionMark />
                </h1>

                <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
                  <div className="flex h-full min-h-0 flex-col text-left">
                    <p className="pe-body-lead text-white/90 font-medium mb-6 leading-relaxed">
                      Intégrez une méthode patrimoniale premium conçue pour enrichir la qualité des échanges, fluidifier la restitution et renforcer l&apos;adhésion du client.
                    </p>
                    <ul className="list-none space-y-2.5 pe-body-lead leading-relaxed text-white/90">
                      {POINTS_CLES.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="flex h-full min-h-0 w-full flex-col justify-between gap-6 sm:gap-7 lg:gap-8 lg:mx-0 lg:max-w-none"
                    role="group"
                    aria-label="Formules de licence PatrimEmotion"
                  >
                    {/* Ligne 1 — Licencié fondateur */}
                    <div className="flex justify-center">
                      <div className={LICENCE_HERO_BADGE_FRAME_CLASS}>
                        <Image
                          src={LICENCE_HERO_ROW_FONDATEUR.src}
                          alt={LICENCE_HERO_ROW_FONDATEUR.alt}
                          fill
                          className="object-contain object-center drop-shadow-[0_12px_36px_rgba(0,0,0,0.32)]"
                          sizes="(max-width: 640px) 28vw, 200px"
                        />
                      </div>
                    </div>
                    {/* Ligne 2 — Certifié, confirmé, cabinet expert */}
                    <div className="grid w-full grid-cols-3 gap-x-2 gap-y-3 sm:gap-x-4 sm:gap-y-0 md:gap-x-5">
                      {LICENCE_HERO_ROW_TROIS.map(({ src, alt }) => (
                        <div key={src} className="flex min-w-0 justify-center">
                          <div className={LICENCE_HERO_BADGE_FRAME_CLASS}>
                            <Image
                              src={src}
                              alt={alt}
                              fill
                              className="object-contain object-center drop-shadow-[0_12px_36px_rgba(0,0,0,0.32)]"
                              sizes="(max-width: 640px) 28vw, 200px"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Ligne 3 — Institutionnel */}
                    <div className="flex shrink-0 justify-center pt-0.5">
                      <div className={LICENCE_HERO_BADGE_FRAME_CLASS}>
                        <Image
                          src={LICENCE_HERO_ROW_INSTITUTIONNEL.src}
                          alt={LICENCE_HERO_ROW_INSTITUTIONNEL.alt}
                          fill
                          className="object-contain object-center drop-shadow-[0_12px_36px_rgba(0,0,0,0.32)]"
                          sizes="(max-width: 640px) 28vw, 200px"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <CtaRow spacing="none" layout="split" className="mt-10 justify-center md:mt-12">
                  <CtaButton
                    href={PATRIMEMOTION_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="yellow-elevated"
                    className="font-semibold"
                  >
                    Demander une démo (15 min)
                  </CtaButton>
                  <CtaButton
                    href={PATRIMEMOTION_LICENCE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="green"
                    className="font-semibold"
                  >
                    Faire un devis
                  </CtaButton>
                </CtaRow>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#9FB620] !pb-10 !pt-16 md:!pb-14 md:!pt-24 [clip-path:polygon(0_4%,100%_0,100%_96%,0_100%)] md:[clip-path:polygon(0_6%,100%_0,100%_94%,0_100%)]">
          <div className="container relative z-10 mx-auto max-w-5xl px-4">
            <header className="mb-8 text-center md:mb-10">
              <h2 className="pe-heading-section mx-auto max-w-3xl text-balance text-[#003662]">
                À qui s&apos;adresse PatrimEmotion® ?
              </h2>
            </header>
            <ul className="mx-auto grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {POUR_QUI.slice(0, 6).map((item) => (
                <li key={item} className="h-full min-h-0">
                  <PourQuiAudienceCard label={item} />
                </li>
              ))}
              <li className="col-span-full h-full min-h-0 sm:col-span-2 lg:col-span-3">
                <div className="mx-auto flex h-full w-full max-w-3xl flex-col gap-4 sm:flex-row sm:items-stretch sm:justify-center sm:gap-5">
                  {POUR_QUI.slice(6).map((item) => (
                    <div key={item} className="h-full w-full min-h-0 sm:max-w-sm">
                      <PourQuiAudienceCard label={item} />
                    </div>
                  ))}
                </div>
              </li>
            </ul>
            <CtaRow spacing="none" className="mt-10 justify-center md:mt-12">
              <CtaButton
                href={AMCP_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="blue"
                className="font-semibold shadow-md shadow-[#003662]/20 hover:bg-[#004a7a] hover:shadow-lg"
              >
                Formulaire de contact
              </CtaButton>
            </CtaRow>
          </div>
        </section>

        <section className="section-dark !pb-0 !pt-8 transition-colors md:!pt-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="pe-heading-section text-[#003662] mb-6 text-center text-balance">
                Vos clients ne bloquent pas toujours sur la technique. Ils bloquent souvent sur la décision.
              </h2>
              <p className="pe-body-lead pe-lead-centered mx-auto max-w-3xl text-[#003662]/90 mb-8 leading-relaxed">
                Dans la pratique, de nombreux échanges s&apos;interrompent parce que le client hésite, temporise ou n&apos;arrive pas à se projeter :
              </p>
              <ul className="mb-8 grid list-none gap-4 p-0 sm:grid-cols-2 sm:gap-5">
                {CITATIONS_CLIENT.map((citation) => (
                  <li key={citation}>
                    <blockquote className="h-full rounded-2xl border border-[#003662]/12 bg-gradient-to-br from-slate-50 to-white py-5 pl-6 pr-5 shadow-[0_4px_24px_-6px_rgba(0,54,98,0.14)] md:py-6 md:pl-7 md:pr-6 border-l-4 border-l-[#9FB620]">
                      <p className="font-serif text-lg font-semibold italic leading-snug text-[#003662] md:text-xl">{citation}</p>
                    </blockquote>
                  </li>
                ))}
              </ul>
              <div className="mb-8 rounded-2xl border-l-4 border-l-[#9FB620] bg-gradient-to-br from-[#003662] to-[#004a7a] p-6 md:p-8 md:mb-10">
                <p className="pe-body-lead text-white/95 leading-relaxed">
                  PatrimEmotion® aide à mieux comprendre ces freins comportementaux afin d&apos;améliorer la qualité de la restitution et la pédagogie de l&apos;échange.
                </p>
              </div>
              <CtaRow spacing="none">
                <CtaButton href="/methode" variant="yellow-elevated" className="group font-semibold">
                  Découvrir la méthode
                  <svg
                    className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </CtaButton>
              </CtaRow>
            </div>
          </div>

          {/* Suite immédiate sous le CTA : même section pour supprimer l’écart entre deux <section> */}
          <div className="bg-white pb-10 pt-20 md:pb-12 md:pt-24">
            <div className="container mx-auto max-w-3xl px-4">
              <h2 className="pe-heading-section mb-8 text-center text-balance text-[#003662]">
                <PatrimEmotionMark />
                <span className="text-[#003662]"> : </span>
                une méthode
                <span className="text-[#003662]"> d&apos;</span>
                <span className="text-[#f4ca3a]">éclairage comportemental</span> appliquée à la relation patrimoniale
              </h2>
              <p className="pe-body-lead pe-lead-centered mx-auto max-w-3xl mb-6 text-center leading-relaxed text-[#003662]/90">
                PatrimEmotion® est une méthode structurée d&apos;aide à l&apos;entretien et à la restitution, destinée aux professionnels souhaitant adapter leur pédagogie et leur posture.
              </p>
              <div className="rounded-xl border-2 border-[#f4ca3a]/40 bg-[#f4ca3a]/5 p-6 text-left">
                <p className="mb-2 font-semibold text-[#003662]">Important</p>
                <p className="pe-body-lead leading-relaxed text-[#003662]/90">
                  PatrimEmotion® s&apos;inscrit dans une logique pédagogique et méthodologique. Le professionnel demeure seul responsable de ses obligations réglementaires.
                </p>
              </div>
              <CtaRow spacing="none" className="mt-8 justify-center md:mt-10">
                <CtaButton href={`${TARIFS_URL}#licences`} variant="blue" className="group font-semibold">
                  Les différentes licences
                  <svg className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </CtaButton>
              </CtaRow>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center bg-[#003662] py-16 md:min-h-[32rem] md:py-24 lg:min-h-[36rem]">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="pe-heading-section mb-5 text-center text-balance text-white md:mb-6">
              Ce que <PatrimEmotionMark /> change dans votre pratique
            </h2>
            <p className="pe-body-lead pe-lead-centered mx-auto mb-10 max-w-4xl leading-relaxed text-white/90">
              Une méthode qui renforce la qualité de vos restitutions,
              <br />
              fluidifie la relation client et valorise votre accompagnement
            </p>
            <ul className="mb-10 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 sm:gap-5 sm:items-stretch">
              {BENEFICES_PRO.map((item, i) => (
                <li key={item} className={i === BENEFICES_PRO.length - 1 ? "flex h-full min-h-0 items-center justify-center sm:col-span-2" : "flex h-full min-h-0 items-stretch"}>
                  <div className={`group h-full w-full rounded-2xl border border-white/15 bg-white/[0.07] p-4 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.35)] ring-1 ring-white/10 transition duration-200 hover:border-[#9FB620]/50 hover:bg-white/[0.11] md:p-5 ${i === BENEFICES_PRO.length - 1 ? "flex max-w-md flex-col items-center justify-center gap-4 text-center" : "flex items-center gap-4"}`}>
                    <span className="flex size-11 shrink-0 items-center justify-center self-center rounded-xl bg-[#9FB620]/25 text-[#9FB620]">✓</span>
                    <span className="min-w-0 self-center text-base font-medium leading-snug text-white/95 md:text-lg">{item}</span>
                  </div>
                </li>
              ))}
            </ul>
            <CtaRow spacing="none" className="justify-center">
              <CtaButton
                href={PATRIMEMOTION_LIVRE_BLANC_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="yellow-elevated"
                className="font-semibold"
              >
                Demander le livre blanc de la méthode
                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </CtaButton>
            </CtaRow>
          </div>
        </section>

        {/* Une seule section : évite le double padding global (site-root main > section) entre tarifs et contenu licence */}
        <section
          className="section-alt-blue"
          style={{ paddingTop: 0, paddingBottom: 0 }}
        >
          <div className="bg-white pb-16 pt-24 md:pb-20 md:pt-32">
            <div className="container mx-auto max-w-4xl px-4">
              <div className="rounded-[2rem] bg-gradient-to-br from-[#9FB620] via-[#f4ca3a] to-[#9FB620] p-[3px] shadow-[0_28px_70px_rgba(0,54,98,0.14)]">
                <div className="rounded-[calc(2rem-3px)] bg-white px-7 py-10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)] md:px-11 md:py-12 lg:px-14 lg:py-16">
                  <header className="mb-8 text-center md:mb-10">
                    <h2 className="pe-heading-section mx-auto max-w-4xl text-balance text-[#003662]">
                      Ce que contient la licence
                    </h2>
                  </header>
                  <div className="space-y-10 md:space-y-12">
                    {CONTENU_LICENCE_GROUPES.map((groupe, index) => (
                      <div key={groupe.titreAccent} className={groupe.panelClass}>
                        <h3
                          className={`pe-heading-card-lg mb-6 text-center text-balance md:mb-7 ${
                            index === 0
                              ? "text-[#003662]"
                              : index === 1
                                ? "text-[#f4ca3a]"
                                : "text-[#9FB620]"
                          }`}
                        >
                          {groupe.titre}
                          {groupe.titreAccent}
                        </h3>
                        <ul className={`grid gap-3 md:gap-4 ${groupe.items.length > 4 ? "sm:grid-cols-2" : "sm:grid-cols-2"}`}>
                          {groupe.items.map((item) => (
                            <li key={item} className="flex items-center gap-3.5 rounded-xl border border-[#003662]/10 bg-white/95 px-4 py-3.5 shadow-sm">
                              <span className="shrink-0 text-lg font-semibold leading-none text-[#9FB620]">✓</span>
                              <span className="text-sm leading-relaxed text-[#003662]/90 md:text-base">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <CtaRow>
                    <CtaButton
                      href={PATRIMEMOTION_LICENCE_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="blue"
                      className="font-semibold"
                    >
                      Demander ma licence
                    </CtaButton>
                  </CtaRow>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-12 pt-16 md:pb-14 md:pt-20">
            <div className="container mx-auto max-w-6xl px-4">
              <h2 className="pe-heading-section mb-5 text-center text-balance text-[#003662] md:mb-6">
                Les différents niveaux de licence
              </h2>
              <p className="pe-body-lead pe-lead-centered mx-auto mb-8 max-w-2xl text-[#003662]/80 md:mb-10">
                Un système de licences professionnelles graduées pour garantir l&apos;homogénéité de la méthode.
              </p>
              <CtaRow spacing="none" className="text-center">
                <CtaButton href={TARIFS_URL} variant="yellow" className="font-semibold">
                  Voir la grille tarifaire
                </CtaButton>
              </CtaRow>
            </div>
          </div>
        </section>

        <section className="!pt-0 bg-white !pb-20 md:!pt-2 md:!pb-24">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="pe-heading-section mb-8 text-center text-balance text-[#003662] md:mb-10">
              La FAQ
            </h2>
            <div className="space-y-3 md:space-y-4">
              {FAQ_ITEMS.map((item) => (
                <details
                  key={item.q}
                  className="group overflow-hidden rounded-2xl border border-[#003662]/10 bg-white shadow-[0_4px_20px_-4px_rgba(0,54,98,0.08)] transition-shadow open:border-[#003662]/18 open:shadow-[0_8px_28px_-6px_rgba(0,54,98,0.12)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 pe-body-lead font-semibold leading-snug text-[#003662] outline-none transition-colors hover:bg-slate-50/80 md:p-6 [&::-webkit-details-marker]:hidden focus-visible:ring-2 focus-visible:ring-[#9FB620]/50 focus-visible:ring-offset-2">
                    <span className="min-w-0 flex-1 text-pretty pr-2 text-left">{item.q}</span>
                    <svg
                      className="h-5 w-5 shrink-0 text-[#9FB620] transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="border-t border-[#003662]/10 px-5 pb-5 pt-0 md:px-6 md:pb-6">
                    <p className="pe-body-lead pe-lead-centered pt-4 leading-relaxed text-[#003662]/90">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
