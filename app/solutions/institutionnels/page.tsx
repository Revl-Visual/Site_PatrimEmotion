import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CtaButton } from "@/components/CtaButton";
import { CtaRow } from "@/components/CtaRow";
import { AudienceCardsSection } from "@/components/AudienceCardsSection";
import { AMCP_CONTACT_URL, PATRIMEMOTION_DEMO_URL, PATRIMEMOTION_LICENCE_FORM_URL, PATRIMEMOTION_LIVRE_BLANC_INSTITUTIONNEL_FORM_URL } from "@/lib/amcp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institutions, réseaux et plateformes | PatrimEmotion®",
  description:
    "PatrimEmotion® pour institutionnels : une approche comportementale structurée et intégrable au service de la relation patrimoniale.",
};

const LICENCES_URL = "/licences";
const METHODE_SCIENTIFIQUE_URL = "/methode";
const PATRIMEMOTION_ARTICLE_URL =
  "https://www.linkedin.com/pulse/patrimemotion-une-m%C3%A9thode-innovante-et-unique-bas%C3%A9-sur-monteil--xhspe/";
const PARCOURS_CLIENT_DOC_URL = "/Docs/fiche_patrimemotion_parcours_cif-2.html";

const POUR_QUI = [
  "Banques Privées",
  "Réseaux bancaires",
  "Compagnies d'assurance et mutuelles",
  "Plateformes patrimoniales et financières",
  "Réseaux de CGP, courtiers et mandataires",
  "Sociétés de gestion et Asset Managers",
  "Promoteurs, opérateurs immobiliers et plateformes immobilières",
  "Organismes de formations et écoles spécialisées",
  "Directions innovation, conformité et expérience client",
];

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

export default function InstitutionnelsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="-mt-2 md:-mt-3 pt-0 pb-0 px-4">
          <div className="hero-encart px-6 pb-12 pt-16 md:px-12 md:pb-16 md:pt-20">
            <div className="container mx-auto relative z-10">
              <div className="max-w-6xl mx-auto">
                <h1 className="pe-heading-hero text-white mb-4 text-center">
                  Institutions, réseaux et plateformes
                </h1>
                <p className="pe-body-lead pe-lead-centered text-white font-semibold text-center mb-12 leading-relaxed max-w-4xl mx-auto md:mb-14">
                  Une approche comportementale au service de la relation patrimoniale
                </p>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch min-h-[280px] md:min-h-[340px]">
                  <div className="no-justify">
                    <div className="space-y-6 pe-body-lead max-w-2xl text-left text-white/90 leading-relaxed md:space-y-7">
                      <p className="!hyphens-none break-words !text-left">
                        PatrimEmotion® est une méthode d&apos;analyse comportementale appliquée aux décisions patrimoniales.
                      </p>
                      <p className="!hyphens-none break-words !text-left">
                        Elle vise à apporter une lecture complémentaire de la manière dont les individus perçoivent l&apos;argent, le temps, l&apos;incertitude et les projets patrimoniaux.
                      </p>
                      <p className="!hyphens-none break-words !text-left">
                        Cette approche permet d&apos;éclairer les mécanismes décisionnels qui peuvent influencer les choix patrimoniaux et d&apos;enrichir la compréhension du client dans le cadre d&apos;un accompagnement patrimonial global.
                      </p>
                    </div>
                  </div>
                  <div className="hidden lg:flex justify-center items-stretch">
                    <div className="w-full max-w-md">
                      <div className="relative h-full min-h-[220px] sm:min-h-[280px] md:min-h-[360px] overflow-hidden rounded-2xl shadow-[0_12px_40px_-8px_rgba(0,54,98,0.35)]">
                        <Image
                          src="/images/institutionnels_hero_2.jpeg"
                          alt="Illustration institutionnels PatrimEmotion"
                          fill
                          className="object-cover"
                          sizes="(max-width: 1279px) 0px, 40vw"
                          unoptimized
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <CtaRow spacing="none" className="mt-12 justify-center md:mt-14">
                  <CtaButton
                    href={PATRIMEMOTION_ARTICLE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="white"
                    className="text-sm font-semibold tracking-wide"
                  >
                    Lire l&apos;article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </CtaButton>
                </CtaRow>
              </div>
            </div>
          </div>
        </section>

        <AudienceCardsSection items={POUR_QUI} className="!pb-6 md:!pb-7" />

        {/* Une méthode structurée et intégrable — fond blanc */}
        <section className="pt-10 !pb-10 md:pt-14 md:!pb-14 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="pe-heading-section text-[#003662] mb-10 text-center">
              Une méthode structurée, intégrable et personnalisable
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-10 max-w-2xl mx-auto">
              {METHODE_STRUCTUREE.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 text-xl font-semibold text-[#003662]">✓</span>
                  <span className="pe-body-lead font-semibold text-[#003662]/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="pe-body-lead pe-lead-centered text-[#003662]/85 text-center mb-10 leading-relaxed max-w-2xl mx-auto md:text-[1.15rem]">
              La méthode PatrimEmotion® peut être utilisée comme un outil pédagogique d&apos;aide à la compréhension du comportement patrimonial, venant compléter les dispositifs de connaissance client existants.
            </p>
          </div>
          <div className="container mx-auto mt-4 max-w-6xl px-4 lg:max-w-7xl">
              <div className="group block overflow-hidden rounded-[2rem] bg-white shadow-[0_12px_40px_-12px_rgba(0,54,98,0.25)]">
                <Image
                  src="/images/methode_institutionnels.jpeg"
                  alt="Méthode institutionnels PatrimEmotion"
                  width={1600}
                  height={900}
                  quality={95}
                  unoptimized
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1600px"
                />
              </div>
          </div>
          <div className="container mx-auto px-4 max-w-3xl">
            <CtaRow spacing="none" className="mt-12 md:mt-14">
              <CtaButton
                href="/images/Carte_mentale_zone_secu_institutionnels.png"
                target="_blank"
                rel="noopener noreferrer"
                variant="blue"
                className="text-base font-semibold"
              >
                Un cadre sécurisé
              </CtaButton>
            </CtaRow>
          </div>
        </section>

        {/* Une lecture comportementale — fond gris très léger */}
        <section className="!pt-8 pb-16 md:!pt-12 md:pb-24 section-alt-blue">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="pe-heading-section text-[#003662] mb-8 text-center">
              Une lecture comportementale du patrimoine
            </h2>
            <p className="pe-body-lead pe-lead-centered font-semibold text-[#003662]/85 text-center mb-8 leading-relaxed md:text-[1.15rem]">
              La méthode PatrimEmotion® repose sur un questionnaire structuré permettant d&apos;explorer différentes dimensions liées aux décisions patrimoniales. L&apos;analyse porte notamment sur :
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8 max-w-2xl mx-auto">
              {LECTURE_ANALYSE.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="shrink-0 mt-0.5 font-bold text-[#003662]">—</span>
                  <span className="pe-body-lead text-[#003662]/85 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="pe-body-lead pe-lead-centered font-semibold text-[#003662]/85 text-center leading-relaxed md:text-[1.15rem]">
              Ces axes permettent d&apos;identifier certaines préférences décisionnelles et dynamiques comportementales.
            </p>
            <CtaRow className="mt-8 md:mt-10 gap-4 md:gap-6">
              <CtaButton
                href="https://docs.google.com/forms/d/e/1FAIpQLSeTPr-JYqXwOzYJ8DFr2ci8Q5po8Xx_62_tG6oQ890eCnZf7Q/viewform"
                target="_blank"
                rel="noopener noreferrer"
                variant="white"
                className="!shadow-none border-2 border-[#003662] font-semibold hover:shadow-md"
              >
                Recevoir le livre blanc institutionnel
              </CtaButton>
              <CtaButton
                href="https://docs.google.com/forms/d/e/1FAIpQLSfw5hwFu057nGoqt7UBNpHXFvIcd-In8GZkEAQZr7n9Oh5L-Q/viewform"
                target="_blank"
                rel="noopener noreferrer"
                variant="blue"
                className="font-semibold"
              >
                Demande d&apos;accès au manuel secure
              </CtaButton>
            </CtaRow>
          </div>
        </section>

        {/* Une restitution pédagogique — fond bleu */}
        <section className="py-16 md:py-24 bg-[#003662]">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="pe-heading-section text-white mb-8 text-center">
              Une restitution pédagogique, structurée et personnalisable
            </h2>
            <p className="pe-body-lead pe-lead-centered font-semibold text-white/95 text-center mb-6 leading-relaxed md:text-[1.15rem]">
              L&apos;analyse PatrimEmotion® permet notamment de mettre en évidence :
            </p>
            <ul className="space-y-4 mb-8 max-w-xl mx-auto">
              {RESTITUTION_POINTS.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 font-bold text-white">—</span>
                  <span className="pe-body-lead text-white/95 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="pe-body-lead pe-lead-centered font-semibold text-white/95 text-center leading-relaxed md:text-[1.15rem]">
              La restitution constitue un support pédagogique permettant d&apos;éclairer la réflexion patrimoniale et faciliter les échanges entre le professionnel et son client par une validation contradictoire et une transparence des échanges.
            </p>
            <CtaRow>
              <CtaButton
                href={PATRIMEMOTION_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="white"
                className="font-semibold"
              >
                Demander une démo
              </CtaButton>
            </CtaRow>
          </div>
        </section>

        {/* Positionnement — fond blanc */}
        <section className="bg-white !pt-16 !pb-8 md:!pt-24 md:!pb-10">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="pe-heading-section text-[#003662] mb-10 text-center">
              Positionnement de la méthode PatrimEmotion®
            </h2>
            <div className="space-y-8 pe-body-lead text-[#003662]/85 leading-relaxed">
              <p>PatrimEmotion® se positionne comme un outil d&apos;analyse comportementale destiné aux professionnels du patrimoine souhaitant intégrer la dimension humaine et décisionnelle dans leur démarche d&apos;accompagnement.</p>
              <p>La méthode vient compléter les approches patrimoniales traditionnelles en apportant une lecture supplémentaire des mécanismes qui peuvent influencer les décisions patrimoniales.</p>
              <p>PatrimEmotion® s&apos;intègre parfaitement dans la phase d&apos;entretien découverte du client et ensuite dans le parcours CIF du conseiller, ne se substituant pas aux analyses réglementaires ni aux obligations liées à la connaissance client.</p>
              <p>Il s&apos;agit d&apos;une méthode complémentaire du conseil patrimonial, elle ne se substitue pas à MIF II.</p>
              <p>
                Les décisions patrimoniales et les recommandations d&apos;investissement relèvent exclusivement de la responsabilité du professionnel habilité dans le cadre réglementaire applicable.
              </p>
              <div>
                <p className="mb-2">La méthode PatrimEmotion® ne constitue :</p>
                <ul className="mx-auto max-w-xl space-y-1">
                  {NI_CONSEIL.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="shrink-0 text-[#003662]/70">{i + 1}.</span>
                      <span className="pe-body-lead leading-snug text-[#003662]/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <CtaRow spacing="none" layout="split" className="mt-8 md:mt-10 gap-4 md:gap-6">
              <CtaButton
                href={PATRIMEMOTION_LIVRE_BLANC_INSTITUTIONNEL_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="white"
                className="!shadow-none border-2 border-[#003662] font-semibold hover:shadow-md"
              >
                Demander le livre blanc institutionnel
              </CtaButton>
              <CtaButton
                href={PATRIMEMOTION_LICENCE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="blue"
                className="font-semibold"
              >
                Demander un devis
              </CtaButton>
            </CtaRow>
          </div>
        </section>

        {/* Sciences comportementales — fond gris léger */}
        <section className="section-alt-blue !pt-10 !pb-10 md:!pt-12 md:!pb-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="pe-heading-section text-[#003662] mb-8 text-center">
              Une approche inspirée des sciences comportementales
            </h2>
            <p className="pe-body-lead pe-lead-centered font-semibold text-[#003662]/85 mb-8 text-center leading-relaxed md:text-[1.15rem]">
              La démarche PatrimEmotion® s&apos;inspire notamment de travaux issus :
            </p>
            <ul className="mx-auto mb-8 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2 sm:gap-y-2">
              {["de la psychologie comportementale", "de la psychologie de la décision", "de l'analyse des biais cognitifs", "de la finance comportementale"].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="shrink-0 mt-0.5 font-bold text-[#003662]">—</span>
                  <span className="pe-body-lead text-[#003662]/85 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="pe-body-lead pe-lead-centered font-semibold text-[#003662]/85 mb-0 text-center leading-relaxed md:text-[1.15rem]">
              Ces approches permettent d&apos;observer certains mécanismes liés à la manière dont les individus prennent leurs décisions face aux enjeux financiers et patrimoniaux, afin de faciliter et accélérer la prise de décision et renforcer la pertinence du conseil en cas de litige.
            </p>
            <CtaRow spacing="none" className="mt-10 md:mt-12">
              <CtaButton href={METHODE_SCIENTIFIQUE_URL} variant="blue" className="text-base md:text-lg font-semibold shadow-lg shadow-[#003662]/20 hover:shadow-xl">
                Découvrir la méthode scientifique
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </CtaButton>
            </CtaRow>
          </div>
        </section>

        {/* Pourquoi intégrer PatrimEmotion® dans votre organisation ? */}
        <section className="section-alt-blue !pt-10 !pb-16 md:!pt-12 md:!pb-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="pe-heading-section text-[#003662] mb-12 text-center">
              Pourquoi intégrer PatrimEmotion® dans votre organisation ?
            </h2>

            <div className="space-y-10">
              <div>
                <h3 className="pe-heading-card text-[#003662] mb-4 text-center">
                  Une approche comportementale au service de la relation patrimoniale
                </h3>
                <p className="text-[#003662]/90 text-justify mb-4 leading-relaxed">
                  Les décisions patrimoniales ne reposent pas uniquement sur des éléments financiers ou fiscaux. Elles sont également influencées par la manière dont les individus perçoivent l&apos;incertitude, le temps, la sécurité ou leurs projets de vie.
                </p>
                <p className="text-[#003662]/90 text-justify mb-4 leading-relaxed">
                  Dans ce contexte, PatrimEmotion® propose une méthode d&apos;analyse comportementale permettant d&apos;apporter un éclairage complémentaire sur les mécanismes décisionnels liés aux choix patrimoniaux. L&apos;objectif est d&apos;enrichir la compréhension du client et de faciliter le dialogue entre le professionnel et son interlocuteur.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-[#003662]/5 border-l-4 border-[#003662] p-6 md:p-8">
                  <h3 className="pe-heading-tight text-[#003662] mb-4">Un levier d&apos;amélioration de la connaissance client</h3>
                  <p className="text-[#003662]/90 text-justify mb-4">PatrimEmotion® peut contribuer à renforcer la qualité des échanges lors des entretiens de découverte. La méthode permet notamment :</p>
                  <ul className="space-y-2 mb-4">
                    {LEVIER_AMELIORATION.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#9FB620] shrink-0 font-bold">•</span>
                        <span className="text-[#003662]/90 text-justify">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#003662]/90 text-justify">Cette lecture comportementale constitue un support pédagogique facilitant la compréhension mutuelle entre le conseiller et son client.</p>
                </div>

                <div className="rounded-2xl bg-[#003662]/5 border-l-4 border-[#003662] p-6 md:p-8">
                  <h3 className="pe-heading-tight text-[#003662] mb-4">Un outil pédagogique pour accompagner les décisions</h3>
                  <p className="text-[#003662]/90 text-justify mb-4">La restitution PatrimEmotion® propose une lecture synthétique du fonctionnement décisionnel patrimonial. Elle permet notamment de mettre en évidence :</p>
                  <ul className="space-y-2 mb-4">
                    {OUTIL_PEDAGOGIQUE_POINTS.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#9FB620] shrink-0 font-bold">•</span>
                        <span className="text-[#003662]/90 text-justify">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#003662]/90 text-justify">Ces éléments peuvent contribuer à améliorer la pédagogie du conseil et à faciliter les échanges avec le client.</p>
                </div>

                <div className="rounded-2xl bg-[#003662]/5 border-l-4 border-[#003662] p-6 md:p-8">
                  <h3 className="pe-heading-tight text-[#003662] mb-4">Une méthode compatible avec les cadres réglementaires</h3>
                  <p className="text-[#003662]/90 text-justify mb-2">PatrimEmotion® constitue un outil d&apos;analyse comportementale et pédagogique.</p>
                  <p className="text-[#003662]/90 text-justify">La méthode ne se substitue pas aux obligations réglementaires liées à la connaissance client ni aux analyses d&apos;adéquation requises dans le cadre du conseil patrimonial. Elle vient au contraire compléter les démarches existantes en apportant un éclairage supplémentaire sur la dimension comportementale des décisions.</p>
                </div>

                <div className="rounded-2xl bg-[#003662]/5 border-l-4 border-[#003662] p-6 md:p-8">
                  <h3 className="pe-heading-tight text-[#003662] mb-4">Une intégration possible dans différents environnements professionnels</h3>
                  <p className="text-[#003662]/90 text-justify mb-4">PatrimEmotion® peut être intégré dans différents contextes d&apos;utilisation :</p>
                  <ul className="grid gap-2 mb-4">
                    {INTEGRATION_ENVIRONNEMENTS.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#9FB620] shrink-0 font-bold">•</span>
                        <span className="text-[#003662]/90 text-justify">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#003662]/90 text-justify">La méthode peut être déployée comme un outil pédagogique complémentaire dans les parcours clients.</p>
                </div>

                <div className="rounded-2xl bg-[#003662]/5 border-l-4 border-[#003662] p-6 md:p-8 md:col-span-2">
                  <h3 className="pe-heading-tight text-[#003662] mb-4">Une méthode structurée et reproductible</h3>
                  <p className="text-[#003662]/90 text-justify mb-4">PatrimEmotion® repose sur :</p>
                  <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                    {METHODE_REPRODUCTIBLE.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#9FB620] shrink-0 font-bold">•</span>
                        <span className="text-[#003662]/90 text-justify">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#003662]/90 text-justify">Cette approche permet de proposer un cadre d&apos;analyse cohérent et adaptable à différents environnements professionnels.</p>
                </div>
              </div>

              <div className="rounded-2xl bg-[#003662]/5 border-l-4 border-[#003662] p-6 md:p-8">
                <h3 className="pe-heading-tight text-[#003662] mb-4">Une approche centrée sur la dimension humaine du patrimoine</h3>
                <p className="text-[#003662]/90 text-justify mb-2">Dans un environnement patrimonial de plus en plus technique et réglementé, la dimension humaine des décisions reste essentielle.</p>
                <p className="text-[#003662]/90 text-justify">PatrimEmotion® propose d&apos;intégrer cette dimension comportementale afin d&apos;améliorer la compréhension des mécanismes décisionnels et d&apos;enrichir la relation entre le professionnel et son client.</p>
              </div>
            </div>
            <CtaRow
              spacing="none"
              layout="split"
              className="-mb-4 mt-10 md:mt-12 min-h-[3.5rem] items-center justify-center gap-4 md:gap-6"
            >
              <CtaButton
                href="/tarifs"
                variant="blue-navy"
                className="text-base font-semibold shadow-lg shadow-[#003662]/20 hover:shadow-xl"
              >
                Voir les tarifs
              </CtaButton>
              <CtaButton
                href={PARCOURS_CLIENT_DOC_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="white"
                className="text-base font-semibold !shadow-none border-2 border-[#003662] hover:shadow-md"
              >
                Découvrir le parcours client
              </CtaButton>
            </CtaRow>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
