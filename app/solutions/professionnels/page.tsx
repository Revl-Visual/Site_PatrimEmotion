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

const APPROCHE_STRUCTUREE = [
  "Un questionnaire comportemental structuré",
  "Une analyse multi-axes des préférences décisionnelles",
  "L’identification d’un ou plusieurs profils émotionnels patrimoniaux",
  "Une restitution pédagogique pour éclairer la réflexion patrimoniale",
];

const BENEFICES_CABINET_UNIFIES = [
  "Renforcer la qualité de la découverte client et des entretiens.",
  "Faciliter la pédagogie patrimoniale avec des supports lisibles.",
  "Mieux comprendre les réactions des clients face à l'incertitude.",
  "Structurer les échanges autour des projets patrimoniaux.",
  "Apporter une approche différenciante dans la relation de conseil.",
  "Soutenir des décisions plus cohérentes dans la durée.",
];

const BENEFICES_CABINET_POINTS = [
  "un outil de découverte client enrichi",
  "un support pédagogique de dialogue patrimonial",
  "un levier de différenciation dans la relation de conseil",
  "une meilleure continuité entre diagnostic, restitution et accompagnement",
];

const CADRE_SUR = [
  "Méthode propriétaire issue de plus de 20 ans d'expérience terrain en conseil patrimonial.",
  "Marque et licence déposées auprès de l'INPI.",
  "Utilisation dans le cadre réglementaire applicable ; PatrimEmotion® complète l’analyse du professionnel sans s’y substituer.",
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

        {/* Comment ça marche */}
        <section className="-mt-8 md:-mt-10 pt-4 pb-10 md:pt-6 md:pb-14 section-alt-blue">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="rounded-[2rem] border-2 border-[#003662]/15 bg-white p-6 md:p-10 shadow-[0_18px_40px_-18px_rgba(0,54,98,0.35)]">
              <h2 className="pe-heading-section text-[#003662] mb-6 text-center">
                Comment ça marche ?
              </h2>
              <p className="pe-body-lead text-[#003662]/90 mb-10 text-center leading-relaxed">
                Une approche structurée et reproductible, en quatre étapes.
              </p>
              <p className="text-[#003662]/85 mb-8 text-center leading-relaxed max-w-3xl mx-auto">
                L&apos;objectif est d&apos;intégrer la lecture comportementale dans votre pratique sans alourdir l&apos;expérience client, avec un parcours clair, séquencé et directement exploitable en rendez-vous.
              </p>
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
            </div>
          </div>
        </section>

        {/* Bénéfices cabinet (fusionné) */}
        <section className="py-16 md:py-24 bg-[#003662]">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="pe-heading-section text-[#f4ca3a] mb-8 text-center">
              Les bénéfices pour votre cabinet
            </h2>
            <p className="pe-body-lead text-white/90 text-center max-w-3xl mx-auto mb-10">
              PatrimEmotion® aide à mieux qualifier les besoins, fluidifier la restitution et renforcer la valeur perçue de l&apos;accompagnement patrimonial.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {BENEFICES_CABINET_UNIFIES.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/10 border border-white/20 p-5 md:p-6 transition-all hover:bg-white/15 hover:border-white/30"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f4ca3a] text-[#003662] font-bold">
                      {i + 1}
                    </span>
                    <p className="text-white/95 font-medium">Impact opérationnel</p>
                  </div>
                  <p className="text-white/90 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border border-white/20 bg-white/5 p-6 md:p-8">
              <h3 className="pe-heading-tight text-white mb-4 text-center">En pratique pour vos équipes</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {BENEFICES_CABINET_POINTS.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#f4ca3a] shrink-0 font-semibold">•</span>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Cadre sûr / conformité */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="rounded-2xl bg-[#9FB620] p-8 md:p-12 shadow-xl border-2 border-[#8aa61d]/30">
              <h2 className="pe-heading-section text-white mb-6 text-center">Un cadre sûr</h2>
              <p className="text-white/95 text-center leading-relaxed mb-6 max-w-3xl mx-auto">
                La méthode s&apos;inscrit dans un usage professionnel encadré. Elle complète votre analyse patrimoniale sans se substituer à vos obligations réglementaires ni à votre responsabilité de conseil.
              </p>
              <ul className="space-y-4">
                {CADRE_SUR.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#1a3310] text-xl font-semibold shrink-0">✓</span>
                    <span className="pe-body-lead text-white/95 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 md:py-24 bg-[#003662]">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="pe-heading-section text-white mb-4">
              Prêt à déployer PatrimEmotion® dans
              <br />
              votre cabinet ?
            </h2>
            <p className="pe-body-lead text-white/90 max-w-2xl mx-auto">
              Échangeons sur votre contexte pour identifier le bon niveau de licence et le cadre de mise en œuvre.
            </p>
            <CtaRow layout="split">
              <CtaButton
                href={PATRIMEMOTION_LICENCE_FORM_URL}
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
