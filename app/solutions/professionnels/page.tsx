import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConstatInteractifPro from "@/components/ConstatInteractifPro";
import { PatrimEmotionMark } from "@/components/PatrimEmotionMark";
import { CtaButton } from "@/components/CtaButton";
import { CtaRow } from "@/components/CtaRow";
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

const APPORTS_PROFESSIONNELS = [
  "Un outil de découverte client enrichi.",
  "Un support pédagogique de dialogue patrimonial.",
  "Un levier de différenciation dans la relation de conseil.",
  "Une meilleure continuité entre diagnostic, restitution et accompagnement.",
  "Une méthode structurée, personnalisable et facilement intégrable.",
];

const IMPACTS_ORGANISATIONNELS = [
  "Renforcer la qualité de l'entretien découverte client",
  "Structurer le parcours client",
  "Faciliter la pédagogie patrimoniale avec des supports livrables",
  "Soutenir des décisions plus cohérentes dans la durée et faciliter le suivi client",
  "Plan d'actions formalisé dans le temps",
  "Une méthode facilement intégrable et personnalisable",
];

const IMPACTS_RELATIONNELS = [
  "Fluidifier le discours client",
  "Objectiver l'émotionnel dans l'approche des besoins, des objectifs et des solutions possibles",
  "Lever les freins et les objections pour faciliter la prise de décision",
  "Renforcer la qualité de la relation",
  "Définir le style d'accompagnement propre au client",
];

const IMPACTS_STRATEGIQUES = [
  "Renforcer la notoriété du cabinet par une méthode unique",
  "Renforcer la pertinence des stratégies proposées",
  "Se différencier durablement",
  "Créer un effet de levier sur l'ensemble des solutions possibles",
  "Adopter une approche pédagogique pour renforcer son image",
  "Garder une avance sur l'IA",
];

const CADRE_SUR = [
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
                  <div className="hidden lg:flex justify-center items-center">
                    <div className="w-full max-w-sm">
                      <div className="overflow-hidden rounded-2xl shadow-[0_12px_40px_-8px_rgba(0,54,98,0.35)]">
                        <Image
                          src="/images/badges/badges_PatrimEmotion.png"
                          alt="Badges de certification PatrimEmotion"
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
                <div className="rounded-2xl bg-white/95 p-6 md:p-8 border border-[#8aa61d]/25">
                  <h3 className="pe-heading-card text-[#003662] mb-6 text-center">Une approche en 4 étapes</h3>
                  <div className="space-y-4">
                    {APPROCHE_STRUCTUREE.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 rounded-xl bg-[#f7fbe8] border border-[#9FB620]/25 p-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#9FB620] text-white font-bold">
                          {i + 1}
                        </span>
                        <p className="pe-body-lead !text-left [text-align-last:auto] text-[#003662] leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-white/95 p-6 md:p-8 border border-[#8aa61d]/25">
                  <h3 className="pe-heading-card text-[#003662] mb-6 text-center">
                    Ce que PatrimEmotion® apporte aux professionnels
                  </h3>
                  <ul className="space-y-3">
                    {APPORTS_PROFESSIONNELS.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                        <span className="pe-body-lead !text-left [text-align-last:auto] text-[#003662]/90 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
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
        <section className="!pt-8 !pb-10 md:!pt-12 md:!pb-14 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="pe-heading-section text-[#003662] mb-6 text-center">
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
                      <span className="text-[#9FB620] shrink-0 font-semibold">•</span>
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
                      <span className="text-[#9FB620] shrink-0 font-semibold">•</span>
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
                      <span className="text-[#9FB620] shrink-0 font-semibold">•</span>
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
              <p className="pe-body-lead !text-left [text-align-last:auto] text-white mb-4">
                Une méthode AMF Safe
              </p>
              <p className="pe-body-lead !text-left [text-align-last:auto] text-white/95 leading-relaxed mb-6">
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

        {/* CTA final */}
        <section className="py-16 md:py-24 bg-[#003662]">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="pe-heading-section mb-6 text-white max-w-2xl mx-auto">
              Échangeons sur votre contexte pour identifier le bon niveau de licence et le cadre de mise en œuvre.
            </h2>
            <CtaRow layout="split">
              <CtaButton
                href={DEVIS_PRO_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="yellow-elevated"
                className="text-base font-semibold"
              >
                Demander un devis
              </CtaButton>
              <CtaButton href="/licences" variant="white" className="text-base font-semibold">
                Voir les licences
              </CtaButton>
            </CtaRow>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
