import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AMCP_CONTACT_URL, PATRIMEMOTION_QUESTIONNAIRE_URL } from "@/lib/amcp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devenez Licencié PatrimEmotion® | Certification et Licences",
  description:
    "Intégrez une méthode patrimoniale premium : questionnaire, scoring, bilan, plan d'actions, dashboard. Licences LIGHT, CORE, PREMIUM, badges et cadre d'usage professionnel.",
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

const CONTENU_LICENCE_GROUPES: {
  titre: string;
  titreAccent: string;
  panelClass: string;
  items: string[];
}[] = [
  {
    titre: "Accès méthode et ",
    titreAccent: "cadre d'usage",
    panelClass:
      "rounded-2xl bg-gradient-to-br from-[#003662]/[0.05] to-transparent border border-[#003662]/10 px-5 py-7 md:px-8 md:py-8",
    items: [
      "droit d'usage encadré de la marque PatrimEmotion®",
      "accès à la méthode officielle PatrimEmotion®",
      "questionnaire officiel",
      "outil de scoring verrouillé",
      "fiches profils et matrices pédagogiques",
    ],
  },
  {
    titre: "Restitution et ",
    titreAccent: "pilotage",
    panelClass:
      "rounded-2xl bg-gradient-to-br from-[#9FB620]/[0.08] to-transparent border border-[#9FB620]/25 px-5 py-7 md:px-8 md:py-8",
    items: [
      "bilan PatrimEmotion®",
      "plan d'actions PatrimEmotion®",
      "dashboard Looker verrouillé selon formule",
      "trames et supports de restitution",
      "éléments de présentation et de communication professionnelle",
    ],
  },
  {
    titre: "Évolutions et ",
    titreAccent: "accompagnement",
    panelClass:
      "rounded-2xl bg-gradient-to-br from-[#003662]/[0.06] to-[#9FB620]/[0.05] border border-[#003662]/10 px-5 py-7 md:px-8 md:py-8",
    items: [
      "mises à jour méthodologiques",
      "support selon niveau de licence",
      "options d'accompagnement, d'audit ou de formation",
    ],
  },
];

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

function PourQuiAudienceCard({ label }: { label: string }) {
  const displayLabel =
    label.length === 0
      ? label
      : label.charAt(0).toLocaleUpperCase("fr-FR") + label.slice(1);

  return (
    <div className="group relative flex h-full items-center overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-br from-white via-white to-slate-50/90 p-5 shadow-[0_14px_44px_-18px_rgba(0,54,98,0.42)] ring-1 ring-[#003662]/8 transition duration-300 hover:-translate-y-1 hover:border-[#f4ca3a]/55 hover:shadow-[0_22px_52px_-18px_rgba(0,54,98,0.48)] md:p-6">
      <div className="flex w-full items-center gap-4 md:gap-4">
        <span
          className="relative flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#9FB620]/25 text-[#9FB620] ring-1 ring-[#9FB620]/35 shadow-md shadow-[#9FB620]/15 transition duration-300 group-hover:scale-105 group-hover:bg-[#9FB620]/35 md:size-12"
          aria-hidden
        >
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
  {
    q: "Est-ce un outil réglementaire MIF 2 ou DDA ?",
    a: "Non. PatrimEmotion® intervient comme outil pédagogique et méthodologique complémentaire. Il ne remplace pas les obligations réglementaires du professionnel.",
  },
  {
    q: "Puis-je personnaliser les supports ?",
    a: "Oui, dans certaines limites selon la licence choisie. Les niveaux CORE et PREMIUM permettent un encadrement plus large de la personnalisation.",
  },
  {
    q: "Le Premium génère-t-il une allocation ?",
    a: "Non. Le Premium peut intégrer un visuel de répartition pédagogique issu d'une source externe, mais il ne génère ni ne recommande d'allocation d'actifs à partir des résultats PatrimEmotion®.",
  },
];

export default function CertificationLicencesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="-mt-2 md:-mt-3 pt-0 pb-0 px-4">
          <div className="hero-encart pt-16 pb-14 md:pt-20 md:pb-18 px-6 md:px-12">
            <div className="container mx-auto relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="pe-heading-hero text-white mb-4 text-center text-balance">
                  Devenez <span className="text-[#f4ca3a]">Licencié PatrimEmotion®</span>
                </h1>
                <p className="pe-body-lead text-white/90 font-medium mb-6 leading-relaxed">
                  Intégrez une méthode patrimoniale premium conçue pour enrichir la qualité des échanges, fluidifier la restitution et renforcer l&apos;adhésion du client dans un cadre strictement pédagogique et professionnel.
                </p>
                <ul className="space-y-2 text-white/90 pe-body-lead text-left max-w-2xl mx-auto mb-10 leading-relaxed">
                  {POINTS_CLES.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#f4ca3a] shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={PATRIMEMOTION_QUESTIONNAIRE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:scale-[1.02]"
                  >
                    Demander une démonstration professionnelle
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1 — Le constat pro */}
        <section className="section-dark pt-24 md:pt-32 pb-10 md:pb-12 transition-colors overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="pe-heading-section text-[#003662] mb-6 text-center text-balance">
                Vos clients ne bloquent pas toujours sur la technique. Ils bloquent souvent sur la décision.
              </h2>
              <p className="pe-body-lead text-[#003662]/90 mb-8 leading-relaxed">
                Dans la pratique, de nombreux échanges s&apos;interrompent non pas par manque de compétence du professionnel, mais parce que le client hésite, temporise ou n&apos;arrive pas à se projeter :
              </p>
              <ul className="mb-8 grid list-none gap-4 p-0 sm:grid-cols-2 sm:gap-5">
                {CITATIONS_CLIENT.map((citation, i) => (
                  <li key={i}>
                    <blockquote className="h-full rounded-2xl border border-[#003662]/12 bg-gradient-to-br from-slate-50 to-white py-5 pl-6 pr-5 shadow-[0_4px_24px_-6px_rgba(0,54,98,0.14)] md:py-6 md:pl-7 md:pr-6 border-l-4 border-l-[#f4ca3a]">
                      <p className="font-serif text-lg font-semibold italic leading-snug text-[#003662] md:text-xl">
                        {citation}
                      </p>
                    </blockquote>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl bg-gradient-to-br from-[#003662] to-[#004a7a] p-6 md:p-8 border-l-4 border-[#f4ca3a]">
                <p className="pe-body-lead text-white/95 leading-relaxed">
                  PatrimEmotion® aide à mieux comprendre ces freins comportementaux afin d&apos;améliorer la qualité de la restitution, la pédagogie de l&apos;échange et la lisibilité du dialogue patrimonial.
                </p>
              </div>
              <div className="flex justify-center mt-8">
                <a
                  href={AMCP_CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:scale-[1.02]"
                >
                  Faire un devis
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Positionnement */}
        <section className="pt-10 md:pt-12 pb-20 md:pb-28 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="pe-heading-section text-[#003662] mb-8 text-center text-balance">
              PatrimEmotion® : une méthode d&apos;éclairage comportemental appliquée à la relation patrimoniale
            </h2>
            <p className="text-[#003662]/85 mb-6 leading-[1.75]">
              PatrimEmotion® est une méthode structurée d&apos;aide à l&apos;entretien et à la restitution, destinée aux professionnels souhaitant :
            </p>
            <ul className="space-y-2 mb-8">
              {["mieux comprendre certains ressorts comportementaux du client", "adapter leur pédagogie et leur posture de restitution", "améliorer la cohérence du dialogue dans le temps", "renforcer la compréhension, la satisfaction et la fidélisation."].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#9FB620] shrink-0">•</span>
                  <span className="text-[#003662]/85">{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-xl border-2 border-[#f4ca3a]/40 bg-[#f4ca3a]/5 p-6">
              <p className="text-[#003662] font-semibold mb-2">Important</p>
              <p className="text-[#003662]/90 text-sm leading-relaxed">
                PatrimEmotion® n&apos;est ni un profil de risque réglementaire, ni un outil de recommandation automatisée, ni un mécanisme de détermination d&apos;adéquation. La méthode s&apos;inscrit dans une logique pédagogique, relationnelle et méthodologique. Le professionnel demeure seul responsable de ses obligations réglementaires et de son devoir de conseil.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 — Ce que PatrimEmotion® change */}
        <section className="flex flex-col justify-center bg-[#003662] py-20 md:min-h-[38rem] md:py-28 lg:min-h-[42rem]">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="pe-heading-section text-white mb-4 text-center text-balance">
              Ce que PatrimEmotion® change dans votre pratique
            </h2>
            <p className="text-white/85 text-center mb-10 max-w-2xl mx-auto text-balance">
              Une méthode qui améliore la qualité de vos restitutions
            </p>
            <div className="mx-auto w-full max-w-3xl">
            <ul className="mb-10 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 sm:gap-5 sm:items-stretch">
              {BENEFICES_PRO.map((item, i) => {
                const isLast = i === BENEFICES_PRO.length - 1;
                const cardClass = [
                  "group h-full w-full rounded-2xl border border-white/15 bg-white/[0.07] p-4 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.35)] ring-1 ring-white/10 transition duration-200 hover:border-[#9FB620]/50 hover:bg-white/[0.11] md:p-5",
                  isLast
                    ? "flex max-w-md flex-col items-center justify-center gap-4 text-center md:gap-5"
                    : "flex items-center gap-4 md:gap-5",
                ].join(" ");
                return (
                  <li
                    key={i}
                    className={
                      isLast
                        ? "flex h-full min-h-0 items-center justify-center sm:col-span-2"
                        : "flex h-full min-h-0 items-stretch"
                    }
                  >
                    <div className={cardClass}>
                      <span className="flex size-11 shrink-0 items-center justify-center self-center rounded-xl bg-[#9FB620]/25 text-[#9FB620] shadow-inner shadow-black/10 transition group-hover:bg-[#9FB620]/35 md:size-12">
                        <svg className="size-5 md:size-6" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="min-w-0 self-center text-base font-medium leading-snug text-white/95 md:text-lg">
                        {item}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="flex justify-center">
              <a
                href={AMCP_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4ca3a] px-6 py-3.5 font-semibold text-[#003662] shadow-lg shadow-black/20 transition hover:scale-[1.02] hover:bg-[#f5d055]"
              >
                Je demande ma licence
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            </div>
          </div>
        </section>

        {/* Section 4 — Ce que contient la licence (même esprit carte « Trois regards », page Méthode) */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="rounded-[2rem] bg-gradient-to-br from-[#9FB620] via-[#f4ca3a] to-[#9FB620] p-[3px] shadow-[0_28px_70px_rgba(0,54,98,0.14)]">
              <div className="rounded-[calc(2rem-3px)] bg-white px-7 py-10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)] md:px-11 md:py-12 lg:px-14 lg:py-16">
                <header className="mb-8 text-center md:mb-10">
                  <h2 className="pe-heading-section mx-auto max-w-4xl text-balance text-[#003662]">
                    Ce que contient la <span className="text-[#f4ca3a]">licence</span>
                  </h2>
                  <div
                    aria-hidden
                    className="mx-auto mt-5 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#9FB620] via-[#f4ca3a] to-[#9FB620] shadow-[0_2px_12px_rgba(159,182,32,0.35)] sm:w-28 md:mt-7 md:w-32"
                  />
                </header>
                <p className="mx-auto mb-8 max-w-2xl text-center text-balance text-base leading-relaxed text-[#003662]/90 md:mb-10 md:text-lg">
                  Licence PatrimEmotion® PRO — Selon le niveau de licence choisi, l&apos;environnement peut inclure tout ou partie des éléments suivants :
                </p>
                <div className="space-y-10 md:space-y-12">
                  {CONTENU_LICENCE_GROUPES.map((groupe, gi) => (
                    <div key={gi} className={groupe.panelClass}>
                      <h3 className="pe-heading-card-lg mb-6 text-center text-balance text-[#003662] md:mb-7">
                        {groupe.titre}
                        <span className="text-[#f4ca3a]">{groupe.titreAccent}</span>
                      </h3>
                      <ul
                        className={`grid gap-3 md:gap-4 ${groupe.items.length > 4 ? "sm:grid-cols-2" : groupe.items.length === 3 ? "sm:grid-cols-1 md:grid-cols-3" : "sm:grid-cols-2"}`}
                      >
                        {groupe.items.map((item, i) => (
                          <li
                            key={`${gi}-${i}`}
                            className="flex items-start gap-3 rounded-xl border border-[#003662]/10 bg-white/95 px-4 py-3.5 shadow-sm transition hover:border-[#9FB620]/35 hover:shadow-md md:px-5 md:py-4"
                          >
                            <span className="mt-0.5 shrink-0 text-lg font-semibold leading-none text-[#9FB620]">✓</span>
                            <span className="text-sm leading-snug text-[#003662]/90 md:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — Visuels et badges (sans tableau des correspondances) */}
        <section className="relative overflow-hidden bg-[#003662] py-20 md:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(244,202,58,0.1),transparent_55%)]"
          />
          <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center">
            <h2 className="pe-heading-section mb-8 text-balance text-white">
              Un système clair - Certification PatrimEmotion
            </h2>
            <p className="mb-6 text-balance text-white/90 leading-[1.75]">
              PatrimEmotion® distingue volontairement le <strong className="text-white">niveau de licence</strong>{" "}
              (équipement et déploiement du cabinet) et le <strong className="text-white">badge</strong> (niveau
              d&apos;habilitation du professionnel). Cette distinction permet une communication plus lisible et plus
              cohérente.
            </p>
            <p className="text-balance text-sm italic leading-relaxed text-white/85 md:text-base">
              Le visuel de licence valorise le statut du cabinet. Le badge valorise le niveau d&apos;usage reconnu dans
              le cadre PatrimEmotion®.
            </p>
          </div>
        </section>

        {/* Section 6 — Niveaux de licence */}
        <section className="section-alt-blue py-24 md:py-32">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="pe-heading-section text-[#003662] mb-4 text-center text-balance">
              Les différents niveaux de licence
            </h2>
            <p className="text-[#003662]/80 text-center mb-12 max-w-2xl mx-auto">
              Un système de licences professionnelles graduées pour garantir l&apos;homogénéité de la méthode, la cohérence des supports et le respect du cadre d&apos;usage.
            </p>

            {/* Fondateur */}
            <div className="mb-10 rounded-2xl border-2 border-[#003662]/20 bg-white overflow-hidden shadow-lg">
              <div className="bg-[#1a1a1a] px-6 py-4 flex flex-col items-center text-center gap-2">
                <span className="text-2xl" aria-hidden>⚫</span>
                <div>
                  <h3 className="text-xl font-semibold text-white text-center text-balance">LICENCE FONDATEUR — Early Partners</h3>
                  <p className="text-white/80 text-sm text-center text-balance">Les 10 premiers cabinets partenaires du lancement PatrimEmotion®</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[#003662]/80 mb-4"><strong>Pour qui ?</strong> Les 10 premiers cabinets partenaires souhaitant rejoindre le lancement du réseau PatrimEmotion®.</p>
                <p className="text-[#003662]/80 mb-4"><strong>Positionnement :</strong> Formule de lancement fondée sur la licence CORE, avec des avantages spécifiques.</p>
                <ul className="space-y-1 mb-4 text-[#003662]/85">
                  <li>• base Licence CORE</li>
                  <li>• badge Licencié Fondateur</li>
                  <li>• tarif préférentiel bloqué pendant 3 ans</li>
                  <li>• intégration des évolutions prévues au contrat</li>
                </ul>
                <p className="text-[#003662] font-semibold mb-2">Tarif : 2 900 € HT / an</p>
                <a href={AMCP_CONTACT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#003662] font-semibold hover:text-[#f4ca3a] transition-colors">Candidater à l&apos;offre Fondateur →</a>
              </div>
            </div>

            {/* Light */}
            <div className="mb-10 rounded-2xl border-2 border-[#9FB620]/40 bg-white overflow-hidden shadow-lg">
              <div className="bg-[#9FB620] px-6 py-4 flex flex-col items-center text-center gap-2">
                <span className="text-2xl" aria-hidden>🟢</span>
                <div>
                  <h3 className="text-xl font-semibold text-white text-center text-balance">LICENCE LIGHT — L&apos;essentiel pour démarrer</h3>
                  <p className="text-white/90 text-sm text-center text-balance">Cabinet indépendant ou professionnel individuel</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[#003662]/80 mb-4"><strong>Pour qui ?</strong> Cabinet indépendant ou professionnel souhaitant démarrer avec un cadre simple, structuré et individuel.</p>
                <ul className="space-y-1 mb-4 text-[#003662]/85 text-sm">
                  <li>• questionnaire officiel, bilan PatrimEmotion® V2026 standard, outil de scoring verrouillé</li>
                  <li>• formation initiale distancielle, support email standard</li>
                  <li>• droit d&apos;usage de la marque, badge Licencié Certifié</li>
                  <li>• 1 conseiller nominatif inclus</li>
                </ul>
                <p className="text-[#003662] font-semibold mb-2">Tarif : 1 490 € HT / an ou 149 € HT / mois (engagement 12 mois)</p>
                <p className="text-[#003662]/70 text-sm mb-2">Options : utilisateur supplémentaire 390 € HT/an, formation avancée 490 € HT, audit restitution 350 € HT</p>
                <a href={PATRIMEMOTION_QUESTIONNAIRE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#003662] font-semibold hover:text-[#f4ca3a] transition-colors">Demander une démo →</a>
              </div>
            </div>

            {/* Core */}
            <div className="mb-10 rounded-2xl border-2 border-[#f4ca3a]/50 bg-white overflow-hidden shadow-lg">
              <div className="bg-[#d4a808] px-6 py-4 flex flex-col items-center text-center gap-2">
                <span className="text-2xl" aria-hidden>🟡</span>
                <div>
                  <h3 className="text-xl font-semibold text-white text-center text-balance">LICENCE CORE — Le socle opérationnel</h3>
                  <p className="text-white/90 text-sm text-center text-balance">Cabinet structuré 2 à 5 conseillers</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[#003662]/80 mb-4"><strong>Pour qui ?</strong> Cabinet structuré de 2 à 5 conseillers souhaitant intégrer PatrimEmotion® de façon plus complète.</p>
                <ul className="space-y-1 mb-4 text-[#003662]/85 text-sm">
                  <li>• tout le contenu LIGHT + dashboard Looker verrouillé, matrices pédagogiques élargies</li>
                  <li>• kit conformité entretien, support prioritaire, branding cabinet encadré</li>
                  <li>• badge Licencié Confirmé — jusqu&apos;à 5 conseillers</li>
                </ul>
                <p className="text-[#003662] font-semibold mb-2">Tarif : 3 900 € HT / an ou 390 € HT / mois (engagement 12 mois)</p>
                <p className="text-[#003662]/70 text-sm mb-2">Options : utilisateur supplémentaire 490 € HT/an, formation équipe sur site (devis), audit conformité annuel 790 € HT</p>
                <a href={PATRIMEMOTION_QUESTIONNAIRE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#003662] font-semibold hover:text-[#f4ca3a] transition-colors">Demander une démo →</a>
              </div>
            </div>

            {/* Premium */}
            <div className="mb-10 rounded-2xl border-2 border-[#003662]/30 bg-white overflow-hidden shadow-lg">
              <div className="bg-[#003662] px-6 py-4 flex flex-col items-center text-center gap-2">
                <span className="text-2xl" aria-hidden>🔵</span>
                <div>
                  <h3 className="text-xl font-semibold text-white text-center text-balance">LICENCE PREMIUM — Version avancée</h3>
                  <p className="text-white/90 text-sm text-center text-balance">Cabinet expert, multisites ou structure avancée</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[#003662]/80 mb-4"><strong>Pour qui ?</strong> Cabinet expert, cabinet multisites ou structure souhaitant aller plus loin dans la personnalisation et le pilotage.</p>
                <ul className="space-y-1 mb-4 text-[#003662]/85 text-sm">
                  <li>• tout le contenu CORE + matrices avancées, paramétrage visuel répartition pédagogique</li>
                  <li>• reporting cabinet avancé, formation approfondie, supports stratégiques</li>
                  <li>• mention Cabinet Expert PatrimEmotion®, badge Licencié Expert — jusqu&apos;à 15 conseillers</li>
                </ul>
                <p className="text-[#003662] font-semibold mb-2">Tarif : 9 800 € HT / an ou 980 € HT / mois (engagement 12 mois)</p>
                <p className="text-[#003662]/70 text-sm mb-2">Options : utilisateur supplémentaire 590 € HT/an, intervention événement cabinet (devis), audit méthodologique 1 200 € HT</p>
                <a href={PATRIMEMOTION_QUESTIONNAIRE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#003662] font-semibold hover:text-[#f4ca3a] transition-colors">Demander une démo →</a>
              </div>
            </div>

            {/* Institutionnelle */}
            <div className="rounded-2xl border-2 border-slate-300 bg-slate-50 overflow-hidden">
              <div className="bg-slate-400 px-6 py-4 flex flex-col items-center text-center gap-2">
                <span className="text-2xl" aria-hidden>⚪</span>
                <div>
                  <h3 className="text-xl font-semibold text-white text-center text-balance">LICENCE INSTITUTIONNELLE / EMBEDDED</h3>
                  <p className="text-white/90 text-sm text-center text-balance">(non disponible pour le moment)</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[#003662]/80 mb-4"><strong>Pour qui ?</strong> Banques, assureurs, fintechs, plateformes ou réseaux nationaux souhaitant une intégration plus large.</p>
                <p className="text-[#003662]/70 text-sm mb-2">Tarification indicative : ticket d&apos;entrée 25 000 € à 75 000 € HT, redevance annuelle 15 000 € à 60 000 € HT. Offre non ouverte à ce jour. Étude sur demande.</p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link href={TARIFS_URL} className="inline-flex items-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-6 py-3.5 rounded-xl transition-colors">
                Voir la grille tarifaire
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 7 — Pour qui ? (fond vert en biseau diagonal haut / bas) */}
        <section
          className="relative overflow-hidden bg-[#9FB620] py-24 md:py-32 [clip-path:polygon(0_4%,100%_0,100%_96%,0_100%)] md:[clip-path:polygon(0_6%,100%_0,100%_94%,0_100%)]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(255,255,255,0.22),transparent_55%)]"
          />
          <div className="container relative z-10 mx-auto max-w-5xl px-4">
            <header className="mb-10 text-center md:mb-12">
              <h2 className="pe-heading-section mx-auto max-w-3xl text-balance">
                <span className="text-white">À qui s&apos;adresse </span>
                <span className="text-[#f4ca3a]">PatrimEmotion® ?</span>
              </h2>
              <div
                aria-hidden
                className="mx-auto mt-5 h-[3px] w-20 rounded-full bg-gradient-to-r from-white/50 via-white to-white/50 shadow-[0_2px_12px_rgba(0,54,98,0.2)] sm:w-24 md:mt-6 md:w-28"
              />
            </header>
            <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed text-white/95 md:mb-11 md:text-lg">
              PatrimEmotion® s&apos;adresse aux professionnels et structures souhaitant enrichir la qualité de leur
              relation client dans un cadre méthodologique structuré :
            </p>
            <ul className="mx-auto grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {POUR_QUI.slice(0, 6).map((item, i) => (
                <li key={i} className="h-full min-h-0">
                  <PourQuiAudienceCard label={item} />
                </li>
              ))}
              <li className="col-span-full h-full min-h-0 sm:col-span-2 lg:col-span-3">
                <div className="mx-auto flex h-full w-full max-w-3xl flex-col gap-4 sm:flex-row sm:justify-center sm:gap-5 sm:items-stretch">
                  {POUR_QUI.slice(6).map((item, i) => (
                    <div key={i + 6} className="h-full w-full min-h-0 sm:max-w-sm">
                      <PourQuiAudienceCard label={item} />
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 8 — FAQ */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="pe-heading-section text-[#003662] mb-10 text-center text-balance">
              Questions fréquentes
            </h2>
            <div className="space-y-2">
              {FAQ_ITEMS.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-[#003662]/15 bg-slate-50/50 overflow-hidden"
                >
                  <summary className="px-5 py-4 pr-11 cursor-pointer list-none font-semibold text-[#003662] relative flex items-center justify-center text-center">
                    <span className="text-balance">{item.q}</span>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#003662]/50 group-open:rotate-180 transition-transform shrink-0 pointer-events-none" aria-hidden>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-4 pt-0 text-[#003662]/85 text-sm leading-relaxed border-t border-[#003662]/10">
                    {item.a}
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
