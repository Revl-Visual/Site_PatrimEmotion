import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConstatInteractifPro from "@/components/ConstatInteractifPro";
import { CtaButton } from "@/components/CtaButton";
import { CtaRow } from "@/components/CtaRow";
import {
  PATRIMEMOTION_DEMO_URL,
  PATRIMEMOTION_LICENCE_FORM_URL,
} from "@/lib/amcp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professionnels du patrimoine | PatrimEmotion®",
  description:
    "Licence PatrimEmotion® pour CGP et courtiers : structurer la relation client, objectiver l'émotionnel, renforcer vos stratégies et vous différencier.",
};

const PERMET_DE = [
  "Structurer la relation client",
  "Objectiver l'émotionnel dans le conseil",
  "Renforcer la pertinence des stratégies proposées",
  "Se différencier durablement",
];

const METHODE_COMPLEMENTAIRE = [
  "PatrimEmotion® ne se substitue pas à l'analyse réglementaire ni aux obligations liées à la connaissance client.",
  "La méthode constitue un outil pédagogique d'analyse comportementale, permettant d'éclairer la réflexion patrimoniale et de renforcer la qualité du dialogue entre le conseiller et son client.",
  "Les décisions patrimoniales et les recommandations d'investissement demeurent exclusivement du ressort du professionnel habilité dans le cadre réglementaire applicable.",
];

const APPORTE_AUX_PRO = [
  "Une analyse comportementale structurée permettant d'identifier un profil émotionnel patrimonial dominant et certaines préférences décisionnelles du client.",
  "Une mise en évidence de profils émotionnels patrimoniaux accompagnés d'un Indice Émotionnel Patrimonial global, apportant un éclairage synthétique sur la dynamique décisionnelle du client.",
  "Des supports d'aide à la compréhension et au dialogue patrimonial, facilitant la mise en cohérence des projets dans la durée et l'identification de priorités d'accompagnement (notamment prévoyance, organisation patrimoniale ou délégation).",
  "Une lecture globale du patrimoine et des équilibres patrimoniaux, permettant d'apporter des repères dans la structuration des différentes composantes du patrimoine, y compris l'immobilier.",
  "Un outil d'accompagnement du conseil patrimonial, venant enrichir l'analyse du professionnel et soutenir la pédagogie auprès du client dans la présentation des solutions et des stratégies envisagées.",
];

const BENEFICES_CABINET = [
  "Renforcer la qualité de la découverte client",
  "Faciliter la pédagogie patrimoniale",
  "Mieux comprendre les réactions des clients face aux marchés et aux décisions",
  "Structurer le dialogue autour des projets patrimoniaux",
  "Apporter une approche différenciante dans l'accompagnement",
];

const APPROCHE_STRUCTUREE = [
  "un questionnaire comportemental structuré",
  "une analyse multi-axes des préférences décisionnelles",
  "l'identification d'un ou plusieurs profils émotionnels patrimoniaux",
  "une restitution pédagogique permettant d'éclairer la réflexion patrimoniale",
];

const EN_PRATIQUE = [
  "un outil de découverte client enrichi",
  "un support pédagogique de dialogue patrimonial",
  "un levier de différenciation dans la relation de conseil",
  "un outil structurant pour accompagner les décisions dans le temps.",
];

const CREDIBILITE = [
  "Méthode propriétaire basée sur une expérience de plus de 20 ans dans le domaine de la gestion de patrimoine et des affaires dans le milieu des banques et assurances et en tant qu'indépendante, sur une clientèle de particuliers et chefs d'entreprise.",
  "Marque et licence déposées auprès de l'INPI.",
  "Activité exercée dans le cadre réglementaire applicable aux Conseillers en Investissements Financiers, sous le contrôle de l'Autorité des Marchés Financiers. PatrimEmotion® est exploitée par des cabinets partenaires selon un cadre contractuel strict. Toute demande de bilan ou de licence est soumise à validation.",
];

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
                    <h1 className="pe-heading-hero text-white mb-5">
                      <span className="text-[#f4ca3a]">PatrimEmotion®</span>
                      <br />
                      Une méthode pour enrichir la relation client patrimoniale pour les professionnels du patrimoine
                    </h1>
                    <p className="pe-body-lead text-white/95 max-w-xl leading-relaxed mb-6">
                      PatrimEmotion® est une méthode d&apos;analyse comportementale appliquée aux décisions patrimoniales. Elle permet d&apos;apporter un éclairage complémentaire sur la manière dont les clients perçoivent l&apos;argent, le risque, le temps et l&apos;incertitude.
                    </p>
                    <CtaRow spacing="none" className="gap-3 sm:justify-start">
                      <CtaButton
                        href={PATRIMEMOTION_DEMO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="yellow-elevated"
                        className="text-base font-semibold"
                      >
                        Demander une démo
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </CtaButton>
                    </CtaRow>
                  </div>
                  <div className="hidden lg:flex justify-center items-center">
                    <div className="w-full max-w-sm">
                      <div className="overflow-hidden rounded-2xl shadow-[0_12px_40px_-8px_rgba(0,54,98,0.35)]">
                        <Image
                          src="/images/licences_PatrimEmotion.png"
                          alt="Licence PatrimEmotion"
                          width={640}
                          height={480}
                          className="h-auto w-full"
                          sizes="(max-width: 1024px) 0px, 384px"
                        />
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

        {/* Contexte — 3 cartes pour alléger la lecture */}
        <section className="pt-8 md:pt-10 pb-16 md:pb-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="pe-heading-section text-[#003662] mb-12 text-center">
              Comprendre les mécanismes qui influencent vos clients
            </h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
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
                <h3 className="pe-heading-tight text-[#003662] mb-3">Bilans classiques : une limite</h3>
                <p className="text-[#003662]/90 text-sm mb-2">Ils analysent bien situation, fiscalité, structure, objectifs — mais rarement la dimension émotionnelle et comportementale.</p>
                <p className="text-[#003662]/90 text-sm">Or c&apos;est souvent elle qui explique hésitations, changements de stratégie ou décisions sous l&apos;effet du contexte.</p>
              </div>
              <div className="rounded-2xl bg-[#003662]/5 border-2 border-[#003662]/10 p-6 md:p-8 hover:shadow-lg hover:border-[#003662]/20 transition-all">
                <h3 className="pe-heading-tight text-[#003662] mb-3">L&apos;approche comportementale</h3>
                <p className="text-[#003662]/90 text-sm mb-2">Les décisions sont influencées par : rapport à l&apos;argent, perception du risque, projection dans le temps, biais cognitifs, expérience de vie.</p>
                <p className="text-[#003662]/90 text-sm mb-4">L&apos;approche comportementale permet d&apos;apporter des repères utiles.</p>
                <p className="text-[#003662] font-semibold text-sm">PatrimEmotion® intègre cette dimension dans la relation client.</p>
              </div>
            </div>
            <CtaRow>
              <CtaButton
                href={PATRIMEMOTION_LICENCE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-navy"
                className="text-base font-semibold"
              >
                Demander un devis
              </CtaButton>
            </CtaRow>
          </div>
        </section>

        {/* PatrimEmotion® permet de — 4 bénéfices en cards */}
        <section className="py-16 md:py-24 bg-[#003662]">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="pe-heading-section text-white mb-10 text-center">
              PatrimEmotion® permet de :
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {PERMET_DE.map((item, i) => (
                <div key={i} className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/25 p-6 md:p-7 hover:bg-white/15 hover:border-[#f4ca3a]/40 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <div className="w-14 h-14 rounded-xl bg-[#f4ca3a] text-[#003662] flex items-center justify-center text-xl font-bold mb-4 shadow-md">{i + 1}</div>
                  <p className="pe-body-lead text-white font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Une méthode complémentaire du conseil patrimonial */}
        <section className="py-16 md:py-24 section-alt-blue">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="pe-heading-section text-[#003662] mb-8 text-center">
              Une méthode complémentaire du conseil patrimonial
            </h2>
            <div className="grid gap-4 md:gap-5">
              {METHODE_COMPLEMENTAIRE.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white border-2 border-[#003662]/10 shadow-md hover:shadow-lg hover:border-[#9FB620]/30 transition-all">
                  <span className="w-10 h-10 rounded-xl bg-[#9FB620]/20 text-[#9FB620] flex items-center justify-center shrink-0 font-bold text-lg">✓</span>
                  <p className="text-[#003662]/90 leading-relaxed pt-0.5">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ce que PatrimEmotion apporte aux professionnels — 5 cards */}
        <section className="py-16 md:py-24 bg-[#003662]">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="pe-heading-section text-white mb-10 text-center">
              Ce que PatrimEmotion® apporte aux professionnels
            </h2>
            <div className="flex flex-wrap justify-center gap-5 md:gap-6">
              {APPORTE_AUX_PRO.map((item, i) => (
                <div key={i} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] min-w-0 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/25 p-6 md:p-7 hover:bg-white/15 hover:border-[#f4ca3a]/40 hover:-translate-y-0.5 transition-all duration-300 shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-[#f4ca3a] text-[#003662] flex items-center justify-center font-bold text-lg mb-4 shadow-md">{i + 1}</div>
                  <p className="text-white/95 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Profil outil de dialogue + Structuration + Outil différenciant */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="pe-heading-section text-[#003662] mb-6 text-center">
              Profil, structuration et différenciation
            </h2>
            <p className="pe-body-lead text-[#003662]/90 mb-8 leading-relaxed text-center max-w-2xl mx-auto">
              Le profil émotionnel patrimonial constitue un outil de dialogue permettant d&apos;expliquer plus facilement les arbitrages et les orientations patrimoniales.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-2xl border-2 border-[#003662]/10 bg-[#003662]/5 p-6 hover:shadow-lg hover:border-[#003662]/20 transition-all">
                <h3 className="pe-heading-tight text-[#003662] mb-2">Structuration de la réflexion patrimoniale</h3>
                <p className="text-[#003662]/90 text-sm">La restitution permet d&apos;identifier des repères et des priorités d&apos;accompagnement, facilitant la mise en perspective des projets dans la durée.</p>
              </div>
              <div className="rounded-2xl border-2 border-[#003662]/10 bg-[#003662]/5 p-6 hover:shadow-lg hover:border-[#003662]/20 transition-all">
                <h3 className="pe-heading-tight text-[#003662] mb-2">Outil différenciant dans la relation client</h3>
                <p className="text-[#003662]/90 text-sm">PatrimEmotion® enrichit l&apos;entretien de découverte et renforce la qualité de la connaissance client, avec une dimension comportementale souvent absente des approches classiques.</p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#003662]/5 border-l-4 border-[#9FB620] p-6 md:p-8">
              <h3 className="pe-heading-card text-[#003662] mb-4">La méthode permet notamment de :</h3>
              <ul className="grid sm:grid-cols-2 gap-3 mb-4">
                {["enrichir l'entretien de découverte", "mieux comprendre réactions ou hésitations des clients", "faciliter la pédagogie patrimoniale", "structurer les échanges autour des projets patrimoniaux"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#9FB620] shrink-0 font-bold">✓</span>
                    <span className="text-[#003662]/90">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="pe-body-lead text-[#003662]/90 leading-relaxed">
                Le profil émotionnel patrimonial constitue ainsi <strong className="text-[#003662]">un support de dialogue et de compréhension</strong>, venant compléter l&apos;analyse patrimoniale classique.
              </p>
            </div>
          </div>
        </section>

        {/* Les bénéfices pour le cabinet — 5 cards */}
        <section className="py-16 md:py-24 bg-[#003662]">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="pe-heading-section text-[#f4ca3a] mb-8 text-center">Les bénéfices pour le cabinet</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {BENEFICES_CABINET.map((item, i) => (
                <div key={i} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)] min-w-0 rounded-2xl bg-white/10 border border-white/20 p-5 md:p-6 hover:bg-white/15 hover:border-white/30 transition-all flex items-center gap-3">
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-[#f4ca3a] text-[#003662] flex items-center justify-center font-bold text-lg">{i + 1}</span>
                  <p className="pe-body-lead text-white/95 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Une approche structurée et reproductible — 4 étapes */}
        <section className="py-16 md:py-24 section-alt-blue">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="pe-heading-section text-[#003662] mb-6 text-center">
              Une approche structurée et reproductible
            </h2>
            <p className="pe-body-lead text-[#003662]/90 mb-10 text-center leading-relaxed">La méthode PatrimEmotion® repose sur :</p>
            <div className="relative">
              <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-[#003662]/20" />
              <div className="space-y-8">
                {APPROCHE_STRUCTUREE.map((item, i) => (
                  <div key={i} className="relative flex gap-6 md:gap-8 items-start">
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#003662] text-white flex items-center justify-center text-2xl font-bold shadow-lg z-10">{i + 1}</div>
                    <div className="flex-1 rounded-2xl bg-white border-2 border-[#003662]/10 p-6 md:p-8 shadow-md hover:shadow-lg transition-all">
                      <p className="pe-body-lead text-[#003662] leading-relaxed">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <CtaRow>
              <CtaButton href="/licences" variant="blue-navy" className="text-base font-semibold">
                Voir les licences
              </CtaButton>
            </CtaRow>
          </div>
        </section>

        {/* PatrimEmotion® en pratique pour les professionnels */}
        <section className="py-16 md:py-24 bg-[#003662]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="pe-heading-section text-white mb-4 text-center">
              PatrimEmotion® en pratique pour les professionnels
            </h2>
            <p className="pe-body-lead text-white/90 mb-8 text-center leading-relaxed">Pour le conseiller, la méthode devient :</p>
            <ul className="space-y-4 mb-8">
              {EN_PRATIQUE.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/95">
                  <span className="text-[#f4ca3a] shrink-0">•</span>
                  <span className="pe-body-lead leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="pe-body-lead text-white/90 leading-relaxed text-center">
              Elle permet d&apos;intégrer une lecture comportementale dans l&apos;accompagnement patrimonial tout en restant pleinement compatible avec les cadres réglementaires applicables.
            </p>
          </div>
        </section>

        {/* En résumé */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="pe-heading-section text-[#003662] mb-8 text-center">En résumé</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-[#003662]/5 border-2 border-[#003662]/10 p-6 md:p-8">
                <h3 className="pe-heading-card text-[#003662] mb-2">Une meilleure compréhension du client</h3>
                <p className="text-[#003662]/90">La méthode met en évidence certaines préférences décisionnelles et dynamiques émotionnelles qui peuvent influencer les choix patrimoniaux.</p>
              </div>
              <div className="rounded-2xl bg-[#003662]/5 border-2 border-[#003662]/10 p-6 md:p-8">
                <h3 className="pe-heading-card text-[#003662] mb-2">Un support pédagogique puissant</h3>
                <p className="text-[#003662]/90">PatrimEmotion® renforce la qualité du dialogue et de la pédagogie auprès du client.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Un cadre sûr — encart vert */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="rounded-2xl bg-[#9FB620] p-8 md:p-12 shadow-xl border-2 border-[#8aa61d]/30">
              <h2 className="pe-heading-section text-white mb-8 text-center">Un cadre sûr</h2>
              <ul className="space-y-4">
                {CREDIBILITE.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#1a3310] text-xl font-semibold shrink-0">✓</span>
                    <span className="pe-body-lead text-white/95 leading-relaxed">{item}</span>
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
