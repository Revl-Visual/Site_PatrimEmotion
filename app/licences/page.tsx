import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  PATRIMEMOTION_DEMO_URL,
  PATRIMEMOTION_DEVIS_URL,
  PATRIMEMOTION_LICENCE_FORM_URL,
} from "@/lib/amcp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devenez Licencié PatrimEmotion® | Licences",
  description:
    "Intégrez une méthode patrimoniale premium : questionnaire, scoring, bilan, plan d'actions, dashboard. Licences LIGHT, CORE, PREMIUM et cadre d'usage professionnel.",
};

const TARIFS_URL = "/tarifs";

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
    <div className="group relative flex h-full items-center overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-br from-white via-white to-slate-50/90 p-5 shadow-[0_14px_44px_-18px_rgba(0,54,98,0.42)] ring-1 ring-[#003662]/8 transition duration-300 hover:-translate-y-1 hover:border-[#f4ca3a]/55 hover:shadow-[0_22px_52px_-18px_rgba(0,54,98,0.48)] md:p-6">
      <div className="flex w-full items-center gap-4 md:gap-4">
        <span className="relative flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#9FB620]/25 text-[#9FB620] ring-1 ring-[#9FB620]/35 shadow-md shadow-[#9FB620]/15 transition duration-300 group-hover:scale-105 group-hover:bg-[#9FB620]/35 md:size-12">
          <svg className="size-[1.15rem] md:size-5" fill="none" stroke="currentColor" strokeWidth={2.25} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="relative min-w-0 flex-1 text-sm font-medium leading-snug text-[#003662] antialiased md:text-[0.95rem] md:leading-relaxed">
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
        <section className="-mt-2 md:-mt-3 pt-0 pb-0 px-4">
          <div className="hero-encart pt-16 pb-14 md:pt-20 md:pb-18 px-6 md:px-12">
            <div className="container mx-auto relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="pe-heading-hero text-white mb-4 text-center text-balance">
                  Devenez <span className="text-[#f4ca3a]">Licencié PatrimEmotion®</span>
                </h1>
                <p className="pe-body-lead text-white/90 font-medium mb-6 leading-relaxed">
                  Intégrez une méthode patrimoniale premium conçue pour enrichir la qualité des échanges, fluidifier la restitution et renforcer l&apos;adhésion du client.
                </p>
                <ul className="space-y-2 text-white/90 pe-body-lead text-left max-w-2xl mx-auto mb-10 leading-relaxed">
                  {POINTS_CLES.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#f4ca3a] shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={PATRIMEMOTION_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:scale-[1.02]"
                  >
                    Demander une démonstration professionnelle
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-dark pt-24 md:pt-32 pb-16 md:pb-20 transition-colors overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="pe-heading-section text-[#003662] mb-6 text-center text-balance">
                Vos clients ne bloquent pas toujours sur la technique. Ils bloquent souvent sur la décision.
              </h2>
              <p className="pe-body-lead text-[#003662]/90 mb-8 leading-relaxed">
                Dans la pratique, de nombreux échanges s&apos;interrompent parce que le client hésite, temporise ou n&apos;arrive pas à se projeter :
              </p>
              <ul className="mb-8 grid list-none gap-4 p-0 sm:grid-cols-2 sm:gap-5">
                {CITATIONS_CLIENT.map((citation) => (
                  <li key={citation}>
                    <blockquote className="h-full rounded-2xl border border-[#003662]/12 bg-gradient-to-br from-slate-50 to-white py-5 pl-6 pr-5 shadow-[0_4px_24px_-6px_rgba(0,54,98,0.14)] md:py-6 md:pl-7 md:pr-6 border-l-4 border-l-[#f4ca3a]">
                      <p className="font-serif text-lg font-semibold italic leading-snug text-[#003662] md:text-xl">{citation}</p>
                    </blockquote>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl bg-gradient-to-br from-[#003662] to-[#004a7a] p-6 md:p-8 border-l-4 border-[#f4ca3a]">
                <p className="pe-body-lead text-white/95 leading-relaxed">
                  PatrimEmotion® aide à mieux comprendre ces freins comportementaux afin d&apos;améliorer la qualité de la restitution et la pédagogie de l&apos;échange.
                </p>
              </div>
              <div className="mt-24 md:mt-32 flex justify-center">
                <a
                  href={PATRIMEMOTION_DEVIS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:scale-[1.02]"
                >
                  Prendre contact
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-16 md:pt-20 pb-20 md:pb-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="pe-heading-section text-[#003662] mb-8 text-center text-balance">
              PatrimEmotion® : une méthode d&apos;éclairage comportemental appliquée à la relation patrimoniale
            </h2>
            <p className="text-[#003662]/85 mb-6 leading-[1.75]">
              PatrimEmotion® est une méthode structurée d&apos;aide à l&apos;entretien et à la restitution, destinée aux professionnels souhaitant adapter leur pédagogie et leur posture.
            </p>
            <div className="rounded-xl border-2 border-[#f4ca3a]/40 bg-[#f4ca3a]/5 p-6">
              <p className="text-[#003662] font-semibold mb-2">Important</p>
              <p className="text-[#003662]/90 text-sm leading-relaxed">
                PatrimEmotion® s&apos;inscrit dans une logique pédagogique et méthodologique. Le professionnel demeure seul responsable de ses obligations réglementaires.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center bg-[#003662] py-16 md:min-h-[32rem] md:py-24 lg:min-h-[36rem]">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="pe-heading-section text-white mb-4 text-center text-balance">Ce que PatrimEmotion® change dans votre pratique</h2>
            <p className="text-white/85 text-center mb-10 max-w-2xl mx-auto text-balance">
              Une méthode qui améliore la qualité de vos restitutions
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
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="rounded-[2rem] bg-gradient-to-br from-[#9FB620] via-[#f4ca3a] to-[#9FB620] p-[3px] shadow-[0_28px_70px_rgba(0,54,98,0.14)]">
              <div className="rounded-[calc(2rem-3px)] bg-white px-7 py-10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)] md:px-11 md:py-12 lg:px-14 lg:py-16">
                <header className="mb-8 text-center md:mb-10">
                  <h2 className="pe-heading-section mx-auto max-w-4xl text-balance text-[#003662]">
                    Ce que contient la <span className="text-[#f4ca3a]">licence</span>
                  </h2>
                </header>
                <div className="space-y-10 md:space-y-12">
                  {CONTENU_LICENCE_GROUPES.map((groupe) => (
                    <div key={groupe.titreAccent} className={groupe.panelClass}>
                      <h3 className="pe-heading-card-lg mb-6 text-center text-balance text-[#003662] md:mb-7">
                        {groupe.titre}
                        <span className="text-[#f4ca3a]">{groupe.titreAccent}</span>
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
                <div className="mt-10 md:mt-12 flex min-h-[5rem] md:min-h-[6rem] items-center justify-center">
                  <a
                    href={PATRIMEMOTION_LICENCE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4ca3a] px-6 py-3.5 font-semibold text-[#003662] shadow-lg shadow-black/20 transition hover:scale-[1.02] hover:bg-[#f5d055]"
                  >
                    Demander ma licence
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-alt-blue py-24 md:py-32">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="pe-heading-section text-[#003662] mb-4 text-center text-balance">Les différents niveaux de licence</h2>
            <p className="text-[#003662]/80 text-center mb-12 max-w-2xl mx-auto">
              Un système de licences professionnelles graduées pour garantir l&apos;homogénéité de la méthode.
            </p>
            <div className="text-center mt-10">
              <Link href={TARIFS_URL} className="inline-flex items-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-6 py-3.5 rounded-xl transition-colors">
                Voir la grille tarifaire
              </Link>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#9FB620] py-24 md:py-32 [clip-path:polygon(0_4%,100%_0,100%_96%,0_100%)] md:[clip-path:polygon(0_6%,100%_0,100%_94%,0_100%)]">
          <div className="container relative z-10 mx-auto max-w-5xl px-4">
            <header className="mb-10 text-center md:mb-12">
              <h2 className="pe-heading-section mx-auto max-w-3xl text-balance">
                <span className="text-white">À qui s&apos;adresse </span>
                <span className="text-[#f4ca3a]">PatrimEmotion® ?</span>
              </h2>
            </header>
            <ul className="mx-auto grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {POUR_QUI.slice(0, 6).map((item) => (
                <li key={item} className="h-full min-h-0">
                  <PourQuiAudienceCard label={item} />
                </li>
              ))}
              <li className="col-span-full h-full min-h-0 sm:col-span-2 lg:col-span-3">
                <div className="mx-auto flex h-full w-full max-w-3xl flex-col gap-4 sm:flex-row sm:justify-center sm:gap-5 sm:items-stretch">
                  {POUR_QUI.slice(6).map((item) => (
                    <div key={item} className="h-full w-full min-h-0 sm:max-w-sm">
                      <PourQuiAudienceCard label={item} />
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="pe-heading-section text-[#003662] mb-10 text-center text-balance">La FAQ</h2>
            <div className="space-y-2">
              {FAQ_ITEMS.map((item) => (
                <details key={item.q} className="group rounded-xl border border-[#003662]/15 bg-slate-50/50 overflow-hidden">
                  <summary className="px-5 py-4 pr-11 cursor-pointer list-none font-semibold text-[#003662] relative flex items-center justify-center text-center">
                    <span className="text-balance">{item.q}</span>
                  </summary>
                  <div className="px-5 pb-4 pt-0 text-[#003662]/85 text-sm leading-relaxed border-t border-[#003662]/10">{item.a}</div>
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
