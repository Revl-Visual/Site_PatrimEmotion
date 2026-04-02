import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AMCP_CONTACT_URL, PATRIMEMOTION_QUESTIONNAIRE_URL } from "@/lib/amcp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institutions, réseaux et plateformes | PatrimEmotion®",
  description:
    "PatrimEmotion® pour institutionnels : une approche comportementale structurée et intégrable au service de la relation patrimoniale.",
};

const LICENCES_URL = "/certification-licences";
const METHODE_SCIENTIFIQUE_URL = "/methode";

const METHODE_STRUCTUREE = [
  "structurée et reproductible",
  "adaptable à différents environnements professionnels",
  "intégrable dans des parcours clients existants",
  "compatible avec les exigences de conformité et de connaissance client",
];

const LECTURE_ANALYSE = [
  "le rapport à l'argent",
  "la perception de l'incertitude",
  "la projection dans le temps",
  "le rapport à la sécurité et au contrôle",
  "les mécanismes de décision ou de délégation",
  "les enjeux de transmission et de sens patrimonial",
];

const RESTITUTION_POINTS = [
  "des tendances comportementales dominantes",
  "un ou plusieurs profils émotionnels patrimoniaux",
  "certaines cohérences ou tensions dans la manière d'aborder les décisions patrimoniales",
];

const METHODE_PROPRIETAIRE = [
  "un questionnaire multi-axes",
  "une analyse structurée des réponses",
  "un système de restitution pédagogique",
  "des outils de visualisation et de synthèse",
];

const NI_CONSEIL = [
  "ni un conseil financier automatisé",
  "ni une recommandation d'investissement",
  "ni un outil de vente de produits financiers",
];

const INNOVATION_VISE = [
  "enrichir la connaissance client",
  "faciliter la pédagogie patrimoniale",
  "améliorer la compréhension des réactions face aux décisions patrimoniales",
  "structurer la réflexion patrimoniale dans la durée",
];

const ACTEURS_INSTITUTIONNELS = [
  "de réseaux de conseillers en gestion de patrimoine",
  "de banques privées",
  "d'assureurs",
  "de plateformes patrimoniales",
  "de family offices",
];

const LEVIER_AMELIORATION = [
  "d'identifier certaines préférences décisionnelles",
  "de mieux comprendre les réactions des clients face à l'incertitude",
  "d'apporter des repères dans la manière d'aborder les décisions patrimoniales",
  "de structurer les échanges autour des projets patrimoniaux",
];

const OUTIL_PEDAGOGIQUE_POINTS = [
  "certaines tendances comportementales",
  "des préférences décisionnelles",
  "des points d'attention dans la manière d'aborder les décisions patrimoniales",
];

const INTEGRATION_ENVIRONNEMENTS = [
  "réseaux de conseillers en gestion de patrimoine",
  "banques privées",
  "assureurs",
  "plateformes patrimoniales",
  "structures de conseil patrimonial indépendantes",
  "family offices",
];

const METHODE_REPRODUCTIBLE = [
  "un questionnaire comportemental structuré",
  "une analyse multi-axes des préférences décisionnelles",
  "une restitution pédagogique synthétique",
  "des supports de dialogue patrimonial",
];

const PAVES_CTA = [
  { question: "Vous souhaitez en savoir plus sur nos différentes licences ?", cta: "Devenir licencié PatrimEmotion", href: LICENCES_URL },
  { question: "Vous souhaitez réaliser un devis ?", cta: "Demander une tarification", href: AMCP_CONTACT_URL },
  { question: "Vous souhaitez une démo (15 minutes) ?", cta: "Demander une démo (15 minutes)", href: PATRIMEMOTION_QUESTIONNAIRE_URL },
  { question: "Vous souhaitez en savoir plus sur l'intégration de PatrimEmotion® dans votre organisation ?", cta: "Nous contacter", href: AMCP_CONTACT_URL },
];

export default function InstitutionnelsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="-mt-2 md:-mt-3 pt-0 pb-0 px-4">
          <div className="hero-encart pt-16 pb-14 md:pt-20 md:pb-18 px-6 md:px-12">
            <div className="container mx-auto relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="pe-heading-hero text-white mb-4">
                  Institutions, réseaux et plateformes
                </h1>
                <p className="pe-body-lead text-white/90 font-normal mb-10 leading-relaxed">
                  Une approche comportementale au service de la relation patrimoniale
                </p>
                <div className="space-y-5 pe-body-lead text-white/90 leading-relaxed max-w-2xl mx-auto">
                  <p>PatrimEmotion® est une méthode d&apos;analyse comportementale appliquée aux décisions patrimoniales.</p>
                  <p>Elle vise à apporter une lecture complémentaire de la manière dont les individus perçoivent l&apos;argent, le temps, l&apos;incertitude et les projets patrimoniaux.</p>
                  <p>Cette approche permet d&apos;éclairer les mécanismes décisionnels qui peuvent influencer les choix patrimoniaux et d&apos;enrichir la compréhension du client dans le cadre d&apos;un accompagnement patrimonial global.</p>
                </div>
                <div className="mt-10">
                  <a
                    href={AMCP_CONTACT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-[#003662] hover:bg-white/95 font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm tracking-wide"
                  >
                    Prendre contact
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Une méthode structurée et intégrable — fond blanc */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="pe-heading-section text-[#003662] mb-10 text-center">
              Une méthode structurée et intégrable
            </h2>
            <p className="pe-body-lead text-[#003662]/80 mb-8 text-center leading-relaxed">
              PatrimEmotion® constitue une méthode :
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-10 max-w-2xl mx-auto">
              {METHODE_STRUCTUREE.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#003662]/40 shrink-0 mt-0.5">—</span>
                  <span className="pe-body-lead text-[#003662]/85 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#003662]/80 text-center mb-10 leading-[1.75] max-w-2xl mx-auto">
              Elle peut être utilisée comme un outil pédagogique d&apos;aide à la compréhension du comportement patrimonial, venant compléter les dispositifs de connaissance client existants.
            </p>
            <div className="text-center">
              <a
                href={AMCP_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#003662] hover:bg-[#002a4a] text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Prendre contact
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </section>

        {/* Une lecture comportementale — fond gris très léger */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="pe-heading-section text-[#003662] mb-8 text-center">
              Une lecture comportementale du patrimoine
            </h2>
            <p className="text-[#003662]/80 text-center mb-8 leading-[1.75]">
              La méthode PatrimEmotion® repose sur un questionnaire structuré permettant d&apos;explorer différentes dimensions liées aux décisions patrimoniales. L&apos;analyse porte notamment sur :
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8 max-w-2xl mx-auto">
              {LECTURE_ANALYSE.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#003662]/40 shrink-0 mt-0.5">—</span>
                  <span className="pe-body-lead text-[#003662]/85 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#003662]/80 text-center leading-[1.75]">
              Ces axes permettent d&apos;identifier certaines préférences décisionnelles et dynamiques comportementales.
            </p>
          </div>
        </section>

        {/* Une restitution pédagogique — fond bleu */}
        <section className="py-20 md:py-28 bg-[#003662]">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="pe-heading-section text-white mb-8 text-center">
              Une restitution pédagogique et structurée
            </h2>
            <p className="text-white/85 text-center mb-6 leading-[1.75]">
              L&apos;analyse PatrimEmotion® permet notamment de mettre en évidence :
            </p>
            <ul className="space-y-4 mb-8 max-w-xl mx-auto">
              {RESTITUTION_POINTS.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-white/50 shrink-0 mt-0.5">—</span>
                  <span className="pe-body-lead text-white/95 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/85 text-center leading-[1.75]">
              La restitution constitue un support pédagogique permettant d&apos;éclairer la réflexion patrimoniale et de faciliter les échanges entre le professionnel et son client.
            </p>
          </div>
        </section>

        {/* Positionnement — fond blanc */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="pe-heading-section text-[#003662] mb-10 text-center">
              Positionnement de la méthode PatrimEmotion®
            </h2>
            <div className="space-y-8 pe-body-lead text-[#003662]/85 leading-relaxed">
              <p>PatrimEmotion® se positionne comme un outil d&apos;analyse comportementale destiné aux professionnels du patrimoine souhaitant intégrer la dimension humaine et décisionnelle dans leur démarche d&apos;accompagnement.</p>
              <p>La méthode vient compléter les approches patrimoniales traditionnelles en apportant une lecture supplémentaire des mécanismes qui peuvent influencer les décisions patrimoniales.</p>
              <p>Elle ne se substitue pas aux analyses réglementaires ni aux obligations liées à la connaissance client.</p>
            </div>
          </div>
        </section>

        {/* Sciences comportementales — fond gris léger */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="pe-heading-section text-[#003662] mb-8 text-center">
              Une approche inspirée des sciences comportementales
            </h2>
            <p className="text-[#003662]/80 text-center mb-6 leading-[1.75]">
              La démarche PatrimEmotion® s&apos;inspire notamment de travaux issus :
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8 max-w-2xl mx-auto">
              {["de la psychologie comportementale", "de la psychologie de la décision", "de l'analyse des biais cognitifs", "de la finance comportementale"].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#003662]/40 shrink-0 mt-0.5">—</span>
                  <span className="pe-body-lead text-[#003662]/85 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#003662]/80 text-center mb-10 leading-[1.75]">
              Ces approches permettent d&apos;observer certains mécanismes liés à la manière dont les individus prennent leurs décisions face aux enjeux financiers et patrimoniaux.
            </p>
            <div className="text-center">
              <Link href={METHODE_SCIENTIFIQUE_URL} className="inline-flex items-center gap-2 text-[#003662] font-medium hover:underline underline-offset-4 text-sm">
                Découvrir la méthode scientifique
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Méthode propriétaire — fond bleu */}
        <section className="py-20 md:py-28 bg-[#003662]">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="pe-heading-section text-white mb-8 text-center">
              Une méthode propriétaire structurée
            </h2>
            <p className="text-white/85 text-center mb-6 leading-[1.75]">
              PatrimEmotion® constitue une méthode propriétaire développée pour proposer une lecture comportementale des décisions patrimoniales. Elle s&apos;appuie sur :
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8 max-w-2xl mx-auto">
              {METHODE_PROPRIETAIRE.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-white/50 shrink-0 mt-0.5">—</span>
                  <span className="pe-body-lead text-white/95 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/85 text-center leading-[1.75]">
              Cette approche permet de proposer un cadre d&apos;analyse reproductible et adaptable à différents environnements professionnels.
            </p>
          </div>
        </section>

        {/* Méthode complémentaire — fond blanc */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="pe-heading-section text-[#003662] mb-10 text-center">
              Une méthode complémentaire du conseil patrimonial
            </h2>
            <p className="text-[#003662]/80 text-center mb-6 leading-[1.75]">
              PatrimEmotion® constitue un outil d&apos;analyse comportementale et pédagogique. La méthode ne constitue :
            </p>
            <ul className="space-y-3 mb-8 max-w-xl mx-auto">
              {NI_CONSEIL.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#003662]/50 shrink-0 mt-0.5">—</span>
                  <span className="pe-body-lead text-[#003662]/85 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#003662]/80 text-center leading-[1.75] border-t border-[#003662]/10 pt-8">
              Les décisions patrimoniales et les recommandations d&apos;investissement relèvent exclusivement du professionnel habilité dans le cadre réglementaire applicable.
            </p>
          </div>
        </section>

        {/* Innovation — fond gris léger */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="pe-heading-section text-[#003662] mb-8 text-center">
              Une innovation au service du conseil patrimonial
            </h2>
            <p className="text-[#003662]/80 text-center mb-6 leading-[1.75]">
              En intégrant une lecture comportementale dans l&apos;accompagnement patrimonial, PatrimEmotion® vise à :
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8 max-w-2xl mx-auto">
              {INNOVATION_VISE.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#003662]/40 shrink-0 mt-0.5">—</span>
                  <span className="pe-body-lead text-[#003662]/85 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#003662]/80 text-center leading-[1.75]">
              La méthode contribue ainsi à renforcer la dimension humaine du conseil patrimonial dans un environnement financier de plus en plus complexe.
            </p>
          </div>
        </section>

        {/* Acteurs institutionnels — fond bleu */}
        <section className="py-20 md:py-28 bg-[#003662]">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="pe-heading-section text-white mb-8 text-center">
              Une approche adaptée aux acteurs institutionnels
            </h2>
            <p className="text-white/85 text-center mb-8 leading-[1.75]">
              PatrimEmotion® peut être déployé auprès :
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {ACTEURS_INSTITUTIONNELS.map((item, i) => (
                <span key={i} className="inline-block px-4 py-2 rounded-lg bg-white/10 text-white/95 text-sm font-medium border border-white/10">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-white/85 text-center leading-[1.75]">
              L&apos;objectif est d&apos;apporter une lecture comportementale complémentaire dans les parcours clients et les démarches d&apos;accompagnement patrimonial.
            </p>
          </div>
        </section>

        {/* Outil compréhension client — fond blanc */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="pe-heading-section text-[#003662] mb-10 text-center">
              Un outil au service de la compréhension client
            </h2>
            <p className="text-[#003662]/80 text-center mb-6 leading-[1.75]">
              Dans un environnement financier et réglementaire de plus en plus exigeant, la compréhension du comportement décisionnel devient un enjeu central de la relation patrimoniale.
            </p>
            <p className="text-[#003662]/80 text-center mb-10 leading-[1.75]">
              PatrimEmotion® propose une approche structurée permettant d&apos;intégrer cette dimension comportementale dans l&apos;accompagnement des clients.
            </p>
            <div className="rounded-lg border border-[#003662]/15 bg-slate-50/50 p-8 text-center">
              <p className="pe-body-lead text-[#003662] font-medium mb-5 leading-relaxed">
                Vous souhaitez intégrer PatrimEmotion® dans votre organisation ou en savoir plus sur les modalités de déploiement ?
              </p>
              <a
                href={AMCP_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#003662] hover:bg-[#002a4a] text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Prendre contact
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </section>

        {/* Pourquoi intégrer PatrimEmotion® dans votre organisation ? */}
        <section className="py-16 md:py-24 section-alt-blue">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="pe-heading-section text-[#003662] mb-12 text-center">
              Pourquoi intégrer PatrimEmotion® dans votre organisation ?
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="pe-heading-card text-[#003662] mb-4 text-center">
                  Une approche comportementale au service de la relation patrimoniale
                </h3>
                <p className="text-[#003662]/90 text-center mb-4 leading-relaxed">
                  Les décisions patrimoniales ne reposent pas uniquement sur des éléments financiers ou fiscaux. Elles sont également influencées par la manière dont les individus perçoivent l&apos;incertitude, le temps, la sécurité ou leurs projets de vie.
                </p>
                <p className="text-[#003662]/90 text-center mb-4 leading-relaxed">
                  Dans ce contexte, PatrimEmotion® propose une méthode d&apos;analyse comportementale permettant d&apos;apporter un éclairage complémentaire sur les mécanismes décisionnels liés aux choix patrimoniaux. L&apos;objectif est d&apos;enrichir la compréhension du client et de faciliter le dialogue entre le professionnel et son interlocuteur.
                </p>
              </div>

              <div className="rounded-2xl bg-white border-2 border-[#003662]/10 p-6 md:p-8">
                <h3 className="pe-heading-tight text-[#003662] mb-4">Un levier d&apos;amélioration de la connaissance client</h3>
                <p className="text-[#003662]/90 mb-4">PatrimEmotion® peut contribuer à renforcer la qualité des échanges lors des entretiens de découverte. La méthode permet notamment :</p>
                <ul className="space-y-2 mb-4">
                  {LEVIER_AMELIORATION.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#9FB620] shrink-0 font-bold">•</span>
                      <span className="text-[#003662]/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#003662]/90">Cette lecture comportementale constitue un support pédagogique facilitant la compréhension mutuelle entre le conseiller et son client.</p>
              </div>

              <div className="rounded-2xl bg-white border-2 border-[#003662]/10 p-6 md:p-8">
                <h3 className="pe-heading-tight text-[#003662] mb-4">Un outil pédagogique pour accompagner les décisions</h3>
                <p className="text-[#003662]/90 mb-4">La restitution PatrimEmotion® propose une lecture synthétique du fonctionnement décisionnel patrimonial. Elle permet notamment de mettre en évidence :</p>
                <ul className="space-y-2 mb-4">
                  {OUTIL_PEDAGOGIQUE_POINTS.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#9FB620] shrink-0 font-bold">•</span>
                      <span className="text-[#003662]/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#003662]/90">Ces éléments peuvent contribuer à améliorer la pédagogie du conseil et à faciliter les échanges avec le client.</p>
              </div>

              <div className="rounded-2xl bg-white border-2 border-[#003662]/10 p-6 md:p-8">
                <h3 className="pe-heading-tight text-[#003662] mb-4">Une méthode compatible avec les cadres réglementaires</h3>
                <p className="text-[#003662]/90 mb-2">PatrimEmotion® constitue un outil d&apos;analyse comportementale et pédagogique.</p>
                <p className="text-[#003662]/90">La méthode ne se substitue pas aux obligations réglementaires liées à la connaissance client ni aux analyses d&apos;adéquation requises dans le cadre du conseil patrimonial. Elle vient au contraire compléter les démarches existantes en apportant un éclairage supplémentaire sur la dimension comportementale des décisions.</p>
              </div>

              <div className="rounded-2xl bg-white border-2 border-[#003662]/10 p-6 md:p-8">
                <h3 className="pe-heading-tight text-[#003662] mb-4">Une intégration possible dans différents environnements professionnels</h3>
                <p className="text-[#003662]/90 mb-4">PatrimEmotion® peut être intégré dans différents contextes d&apos;utilisation :</p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {INTEGRATION_ENVIRONNEMENTS.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#9FB620] shrink-0 font-bold">•</span>
                      <span className="text-[#003662]/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#003662]/90">La méthode peut être déployée comme un outil pédagogique complémentaire dans les parcours clients.</p>
              </div>

              <div className="rounded-2xl bg-white border-2 border-[#003662]/10 p-6 md:p-8">
                <h3 className="pe-heading-tight text-[#003662] mb-4">Une méthode structurée et reproductible</h3>
                <p className="text-[#003662]/90 mb-4">PatrimEmotion® repose sur :</p>
                <ul className="space-y-2 mb-4">
                  {METHODE_REPRODUCTIBLE.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#9FB620] shrink-0 font-bold">•</span>
                      <span className="text-[#003662]/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#003662]/90">Cette approche permet de proposer un cadre d&apos;analyse cohérent et adaptable à différents environnements professionnels.</p>
              </div>

              <div className="rounded-2xl bg-[#003662]/5 border-l-4 border-[#003662] p-6 md:p-8">
                <h3 className="pe-heading-tight text-[#003662] mb-4">Une approche centrée sur la dimension humaine du patrimoine</h3>
                <p className="text-[#003662]/90 mb-2">Dans un environnement patrimonial de plus en plus technique et réglementé, la dimension humaine des décisions reste essentielle.</p>
                <p className="text-[#003662]/90">PatrimEmotion® propose d&apos;intégrer cette dimension comportementale afin d&apos;améliorer la compréhension des mécanismes décisionnels et d&apos;enrichir la relation entre le professionnel et son client.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pavés : image, question, CTA */}
        <section className="py-16 md:py-24 bg-[#003662]">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="pe-heading-section text-white mb-12 text-center">
              Comment aller plus loin ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {PAVES_CTA.map((pave, i) => (
                <div key={i} className="rounded-2xl bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                  {/* Emplacement image — remplacer par <Image> ou img avec le chemin souhaité */}
                  <div className="aspect-video bg-[#003662]/10 flex items-center justify-center text-[#003662]/40 text-sm font-medium">
                    Image à insérer
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="pe-body-lead text-[#003662] font-semibold mb-4 leading-relaxed">{pave.question}</p>
                    {pave.href.startsWith("http") ? (
                      <a
                        href={pave.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-5 py-2.5 rounded-xl transition-all text-sm"
                      >
                        {pave.cta}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </a>
                    ) : (
                      <Link
                        href={pave.href}
                        className="inline-flex items-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-5 py-2.5 rounded-xl transition-all text-sm"
                      >
                        {pave.cta}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="rounded-2xl border-2 border-[#003662]/15 bg-white shadow-lg p-8 md:p-10 text-center">
              <h2 className="pe-heading-section text-[#003662] mb-6">Intégrer PatrimEmotion® dans votre organisation</h2>
              <p className="text-[#003662]/90 mb-8 leading-relaxed">Vous souhaitez en savoir plus sur les modalités de déploiement ou prendre contact ?</p>
              <a
                href={AMCP_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-8 py-4 rounded-xl transition-all shadow-lg hover:scale-[1.02]"
              >
                Prendre contact
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
