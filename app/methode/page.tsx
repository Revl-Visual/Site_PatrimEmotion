import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfilsFlipCards from "@/components/ProfilsFlipCards";
import { PatrimEmotionMark } from "@/components/PatrimEmotionMark";
import { CtaButton } from "@/components/CtaButton";
import { CtaRow } from "@/components/CtaRow";
import { PATRIMEMOTION_LIVRE_EDITEUR_FORM_URL, PATRIMEMOTION_QUESTIONNAIRE_URL } from "@/lib/amcp";
import type { Metadata } from "next";

const PATRIMEMOTION_LIVRE_BLANC_GLE_URL = "https://forms.gle/RjV87qPN7wXGqaWJ7";

/** Ancienne vidéo d’accueil — `public/video/video_prez_patrim_emotion.mp4` */
const VIDEO_PREZ_PATRIM_EMOTION = "/video/video_prez_patrim_emotion.mp4";

/** Visuels par profil — `public/images/8_Profils/` (sensible à la casse sous Linux). */
const PROFILS_EMOTIONNELS = [
  {
    main: "Sécuritaire",
    sub: "Harmonieux",
    def: "Tendance prudente et stable, besoin de repères, priorité à la protection et à la sérénité.",
    image: "/images/8_Profils/securitaire_harmonieux.png",
  },
  {
    main: "Visionnaire",
    sub: "Structuré",
    def: "Se projette, planifie, recherche cohérence et clarté des étapes ; besoin de cadre.",
    image: "/images/8_Profils/visionnaire_structure.png",
  },
  {
    main: "Explorateur",
    sub: "Raisonné",
    def: "Curieux et ouvert, besoin de comprendre ; avance avec méthode et vérifications.",
    image: "/images/8_Profils/explorateur_raisonne.png",
  },
  {
    main: "Protecteur",
    sub: "Engagé",
    def: "Priorité aux proches, sens du devoir ; décisions guidées par protection et cohérence familiale.",
    image: "/images/8_Profils/Protecteur_engage.png",
  },
  {
    main: "Décideur",
    sub: "Contrôlant",
    def: "Besoin de maîtrise, décisions structurées ; recherche de contrôle et de visibilité.",
    image: "/images/8_Profils/decideur_controlant.png",
  },
  {
    main: "Prudent",
    sub: "Ambivalent",
    def: "Hésitant(e) face au risque, besoin d’être rassuré(e) ; avance mieux avec paliers et repères.",
    image: "/images/8_Profils/prudent_ambivalent.png",
  },
  {
    main: "Résilient",
    sub: "Adaptatif",
    def: "Flexible, s’adapte, avance malgré l’incertitude ; sait ajuster en cours de route.",
    image: "/images/8_Profils/resilient_adaptatif.png",
  },
  {
    main: "Visionnaire",
    sub: "Intuitif",
    def: "Décide vite à l’intuition, vision long terme ; besoin d’un cadre léger pour sécuriser.",
    image: "/images/8_Profils/visionnaire_intuitif.png",
  },
] as const;

export const metadata: Metadata = {
  title: "La méthode | PatrimEmotion®",
  description:
    "La méthode qui relie les émotions aux décisions patrimoniales. Approche comportementale appliquée au patrimoine.",
};

export default function MethodePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="-mt-2 md:-mt-3 pt-0 pb-0 px-4">
          <div className="hero-encart pt-14 pb-10 md:pt-16 md:pb-12 px-6 md:px-12">
            <div className="container mx-auto relative z-10">
            <h1 className="pe-heading-hero w-full xl:text-[3.25rem] text-white mb-10 md:mb-12 text-center">
              La méthode qui relie les <span className="text-[#f4ca3a]">émotions</span> aux
              <br />
              <span className="text-[#9FB620]">décisions patrimoniales</span>
            </h1>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <p className="max-w-2xl mx-auto pe-body-lead pe-lead-centered lg:text-[1.35rem] text-white font-medium leading-relaxed text-center mb-8 md:mb-10 rounded-2xl border border-white/20 bg-white/[0.07] px-6 py-6 md:px-8 md:py-7 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-[2px]">
                    Parce que les choix patrimoniaux ne sont pas uniquement financiers, ils doivent aussi être cohérents avec votre personnalité, votre manière de décider et votre parcours de vie.
                  </p>
                  <CtaRow spacing="none" className="mt-3 md:mt-4 w-full flex-col gap-3">
                    <CtaButton
                      href="/Docs/Prez_methode_PatrimEmotion_Site_Internet.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="green"
                      className="text-base font-semibold"
                    >
                      Présentation de la méthode
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </CtaButton>
                    <CtaButton
                      href={PATRIMEMOTION_LIVRE_BLANC_GLE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="white"
                      className="text-base font-semibold md:mt-1"
                    >
                      Recevoir le livre blanc de la méthode
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </CtaButton>
                  </CtaRow>
                </div>
                <div className="block">
                  <div className="relative w-full max-w-[34rem] mx-auto">
                    <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
                      <Image
                        src="/images/Silhouette_Geo_Colors.png"
                        alt="Silhouette colorée PatrimEmotion"
                        fill
                        className="object-contain object-bottom scale-[1.12]"
                        sizes="(max-width: 1024px) 100vw, 42vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Une approche comportementale */}
        <section className="bg-white py-5 md:py-7">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="pe-heading-section text-[#003662] mb-8 text-center">
              Une <span className="text-[#f4ca3a]">approche</span> comportementale appliquée aux{" "}
              <span className="text-[#9FB620]">décisions patrimoniales</span>
            </h2>
            <div className="space-y-6 pe-body-lead text-[#003662]/90 leading-relaxed">
              <p className="pe-lead-centered text-center">
                <strong>
                  <PatrimEmotionMark />
                </strong>{" "}
                est une méthode d&apos;analyse comportementale appliquée aux décisions patrimoniales.
              </p>
              <p className="pe-lead-centered text-center">
                Elle vise à mettre en lumière les dimensions émotionnelles et décisionnelles qui peuvent influencer la manière d&apos;aborder l&apos;argent, le risque, le temps et les projets patrimoniaux.
              </p>
              <p className="pe-lead-centered text-center">
                Cette lecture permet d&apos;apporter un éclairage complémentaire dans la compréhension des décisions patrimoniales.
              </p>
            </div>
          </div>
        </section>

        {/* Carte : trois regards (constat, démarche, fondements) */}
        <section className="pt-8 md:pt-10 pb-20 md:pb-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="rounded-[2rem] p-[3px] bg-gradient-to-br from-[#9FB620] via-[#f4ca3a] to-[#9FB620] shadow-[0_28px_70px_rgba(0,54,98,0.14)]">
              <div className="rounded-[calc(2rem-3px)] bg-white px-7 py-10 md:px-11 md:py-12 lg:px-14 lg:py-16 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)]">
              <header className="mb-10 md:mb-14 text-center">
                <h2 className="pe-heading-section text-[#003662] max-w-4xl mx-auto">
                  Trois regards sur notre{" "}
                  <span className="text-[#003662]">méthode</span>
                </h2>
                <div
                  aria-hidden
                  className="mx-auto mt-5 md:mt-7 h-[3px] w-24 sm:w-28 md:w-32 rounded-full bg-gradient-to-r from-[#9FB620] via-[#f4ca3a] to-[#9FB620] shadow-[0_2px_12px_rgba(159,182,32,0.35)]"
                />
              </header>

              <div className="space-y-12 md:space-y-14">
                <div className="rounded-2xl bg-gradient-to-br from-[#003662]/[0.05] to-transparent border border-[#003662]/10 px-5 py-7 md:px-8 md:py-8">
                  <h3 className="pe-heading-feature text-[#003662] mb-6 text-center">
                    Le constat
                  </h3>
                  <p className="pe-body-lead text-[#003662]/90 mb-3 leading-relaxed !text-left [text-align-last:auto] max-w-2xl mx-auto">
                    Les décisions patrimoniales ne reposent pas uniquement sur des raisonnements financiers.
                    De nombreux facteurs interviennent dans les arbitrages :
                  </p>
                  <ul className="space-y-3 pe-body-lead text-[#003662]/90 mb-8 max-w-xl mx-auto">
                    <li className="flex items-center gap-3">
                      <span className="text-[#003662] text-xl font-semibold shrink-0" aria-hidden>
                        ✓
                      </span>
                      <span>perception du risque</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#003662] text-xl font-semibold shrink-0" aria-hidden>
                        ✓
                      </span>
                      <span>rapport personnel à l&apos;argent</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#003662] text-xl font-semibold shrink-0" aria-hidden>
                        ✓
                      </span>
                      <span>temporalité des projets</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#003662] text-xl font-semibold shrink-0" aria-hidden>
                        ✓
                      </span>
                      <span>expérience de vie</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#003662] text-xl font-semibold shrink-0" aria-hidden>
                        ✓
                      </span>
                      <span>biais cognitifs et émotionnels</span>
                    </li>
                  </ul>
                  <p className="pe-body-lead text-[#003662]/90 leading-relaxed !text-left [text-align-last:auto] max-w-2xl mx-auto">
                    Ces éléments peuvent expliquer les écarts entre les décisions théoriquement optimales et les décisions réellement prises.
                  </p>
                  <div className="flex justify-center pt-10 pb-3 md:pt-12 md:pb-4">
                    <CtaButton
                      href="https://youtu.be/hl4XuN-ezho"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="blue"
                      className="text-sm font-semibold md:text-base"
                    >
                      Présentation en vidéo
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </CtaButton>
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-[#9FB620]/[0.08] to-transparent border border-[#9FB620]/25 px-5 py-7 md:px-8 md:py-8">
                  <h3 className="pe-heading-feature mb-6 text-center text-[#003662]">
                    <span className="text-[#f4ca3a]">La démarche</span> <PatrimEmotionMark />
                  </h3>
                  <p className="pe-body-lead text-[#f4ca3a] mb-3 leading-relaxed !text-left [text-align-last:auto] max-w-2xl mx-auto">
                    La méthode PatrimEmotion® vise à apporter une lecture structurée de ces dimensions comportementales afin d&apos;éclairer les décisions patrimoniales.
                    Elle permet notamment de :
                  </p>
                  <ul className="space-y-3 pe-body-lead text-[#f4ca3a] mb-8 max-w-xl mx-auto">
                    <li className="flex items-start gap-3">
                      <span className="text-[#f4ca3a] text-xl font-semibold shrink-0" aria-hidden>
                        ✓
                      </span>
                      <span>mieux comprendre la manière dont les décisions patrimoniales sont abordées</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#f4ca3a] text-xl font-semibold shrink-0" aria-hidden>
                        ✓
                      </span>
                      <span>identifier certaines préférences décisionnelles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#f4ca3a] text-xl font-semibold shrink-0" aria-hidden>
                        ✓
                      </span>
                      <span>apporter des repères pour structurer la réflexion patrimoniale</span>
                    </li>
                  </ul>
                  <p className="pe-body-lead text-[#f4ca3a] leading-relaxed !text-left [text-align-last:auto] max-w-2xl mx-auto">
                    PatrimEmotion® constitue ainsi un outil pédagogique d&apos;aide à la compréhension et au dialogue patrimonial.
                  </p>
                  <div className="flex justify-center pt-10 pb-3 md:pt-12 md:pb-4">
                    <CtaButton href="/#modele-rapport" variant="yellow" className="text-sm font-semibold md:text-base">
                      Modèle de rapport
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </CtaButton>
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-[#9FB620]/[0.18] to-[#9FB620]/[0.08] border border-[#9FB620]/35 px-5 py-7 md:px-8 md:py-8">
                  <h3 className="pe-heading-feature text-[#9FB620] mb-6 text-center">
                    Les fondements de la méthode
                  </h3>
                  <p className="pe-body-lead text-[#4a6510] mb-3 !text-left [text-align-last:auto] max-w-2xl mx-auto">
                    La méthode s&apos;appuie notamment sur des approches issues :
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4 pe-body-lead text-[#4a6510] mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-[#5a8018] text-xl font-semibold shrink-0" aria-hidden>
                        ✓
                      </span>
                      <span>de la psychologie comportementale</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#5a8018] text-xl font-semibold shrink-0" aria-hidden>
                        ✓
                      </span>
                      <span>de l&apos;étude des biais cognitifs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#5a8018] text-xl font-semibold shrink-0" aria-hidden>
                        ✓
                      </span>
                      <span>de l&apos;analyse du rapport à l&apos;argent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#5a8018] text-xl font-semibold shrink-0" aria-hidden>
                        ✓
                      </span>
                      <span>de la gestion de l&apos;incertitude</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#5a8018] text-xl font-semibold shrink-0" aria-hidden>
                        ✓
                      </span>
                      <span>de la projection dans le temps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#5a8018] text-xl font-semibold shrink-0" aria-hidden>
                        ✓
                      </span>
                      <span>des mécanismes de décision et de délégation</span>
                    </li>
                  </ul>
                  <p className="pe-body-lead text-[#4a6510] !text-left [text-align-last:auto] max-w-2xl mx-auto">
                    Ces éléments permettent d&apos;observer certaines dynamiques décisionnelles liées aux choix patrimoniaux.
                  </p>
                  <div className="flex justify-center pt-10 pb-3 md:pt-12 md:pb-4">
                    <CtaButton href="/cadre-ethique-scientifique" variant="green-dark-text" className="text-sm font-semibold md:text-base">
                      Base scientifique
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </CtaButton>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Les profils PatrimEmotion® */}
        <section id="profils" className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 text-center">
            <h2 className="pe-heading-section mb-6 text-balance text-white">
              Les profils <PatrimEmotionMark />
            </h2>
            <p className="pe-body-lead pe-lead-centered mx-auto mb-4 max-w-3xl text-balance leading-relaxed text-white/95">
              Il n&apos;existe ni bon ni mauvais profil patrimonial.
            </p>
            <p className="pe-body-lead pe-lead-centered mx-auto mb-8 max-w-3xl text-balance leading-relaxed text-white/95">
              Chaque profil traduit une manière spécifique d&apos;aborder les décisions patrimoniales, notamment face : à l&apos;incertitude, au temps, à la sécurité, aux projets de vie.
            </p>

            <p className="pe-body-lead pe-lead-centered mb-2 font-semibold text-balance text-white">
              La méthode identifie 8 profils émotionnels patrimoniaux :
            </p>
            <p className="pe-lead-centered mx-auto mb-6 max-w-2xl text-balance text-sm text-white/80">
              Cliquez sur une carte pour la retourner et lire la définition sur le verso.
            </p>
            <ProfilsFlipCards profiles={PROFILS_EMOTIONNELS} />

            <div className="mb-6 rounded-2xl bg-[#9FB620] p-6 text-center md:p-8">
              <p className="pe-body-lead pe-lead-centered mx-auto mb-4 max-w-3xl text-balance font-semibold text-white">
                Chaque profil met en évidence :
              </p>
              <ul className="mx-auto max-w-3xl space-y-3 pe-body-lead text-white">
                <li className="text-balance">
                  <span className="text-[#1a3310] font-semibold" aria-hidden>
                    ✓{" "}
                  </span>
                  certaines dynamiques émotionnelles dominantes
                </li>
                <li className="text-balance">
                  <span className="text-[#1a3310] font-semibold" aria-hidden>
                    ✓{" "}
                  </span>
                  des préférences décisionnelles
                </li>
                <li className="text-balance">
                  <span className="text-[#1a3310] font-semibold" aria-hidden>
                    ✓{" "}
                  </span>
                  des points d&apos;attention possibles dans la réflexion patrimoniale
                </li>
              </ul>
            </div>
            <p className="pe-body-lead pe-lead-centered mx-auto max-w-3xl text-balance leading-relaxed text-white/95">
              Les profils ne sont ni figés ni exclusifs : ils peuvent évoluer avec l&apos;âge, les projets de vie ou le contexte patrimonial.
            </p>
            <CtaRow className="-mb-1">
              <CtaButton
                href={PATRIMEMOTION_LIVRE_EDITEUR_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="white"
                className="text-base font-semibold"
              >
                Recevoir le livre éditeur PatrimEmotion
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </CtaButton>
            </CtaRow>
          </div>
        </section>

        {/* Les axes d'analyse — padding bas = écart image ↔ CTA pour symétrie verticale */}
        <section className="section-alt-blue pt-16 md:pt-24 pb-10 md:pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="pe-heading-section text-[#003662] mb-6 text-center">
              Les 6 axes d&apos;analyse
            </h2>
            <p className="pe-body-lead pe-lead-centered mb-6 text-center text-[#003662]/90">
              La méthode <PatrimEmotionMark /> s&apos;appuie sur plusieurs axes d&apos;observation, notamment :
            </p>
            <ul className="grid md:grid-cols-2 gap-4 pe-body-lead text-[#003662]/90 mb-10">
              <li className="flex items-start gap-3">
                <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                <span>le rapport à l&apos;argent</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                <span>la gestion de l&apos;incertitude</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                <span>la vision et la temporalité des projets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                <span>le rapport à la sécurité et au contrôle</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                <span>la manière de décider ou de déléguer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                <span>les enjeux de transmission et de sens</span>
              </li>
            </ul>
            <p className="pe-body-lead pe-lead-centered text-[#003662]/90 mb-8 leading-relaxed text-center">
              L&apos;analyse croisée de ces dimensions permet de mettre en évidence certaines cohérences ou tensions dans la manière d&apos;aborder les décisions patrimoniales.
            </p>
            {/* Image + CTA : même écart vertical entre image, bouton et bord bas de section */}
            <div className="flex flex-col items-center gap-10 md:gap-12">
              <div className="mx-auto w-fit rounded-2xl bg-white p-3 md:p-4">
                <div className="relative w-full max-w-3xl overflow-hidden rounded-xl">
                  <Image
                    src="/images/radar_patrimonial.png"
                    alt="Radar patrimonial PatrimEmotion"
                    width={1240}
                    height={820}
                    className="h-auto w-full object-contain"
                    sizes="(max-width: 768px) 100vw, 900px"
                  />
                </div>
              </div>
              <CtaRow spacing="none" className="w-full">
                <CtaButton
                  href={PATRIMEMOTION_QUESTIONNAIRE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="blue"
                  className="text-base font-semibold shadow-lg shadow-[#003662]/20"
                >
                  Réaliser mon bilan
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </CtaButton>
              </CtaRow>
            </div>
          </div>
        </section>

        {/* Comment se déroule l'accompagnement ? */}
        <section className="bg-[#9FB620] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="pe-heading-section text-[#003662] mb-4 text-center">
              Comment se déroule l&apos;accompagnement ?
            </h2>
            <p className="pe-body-lead pe-lead-centered mx-auto mb-12 max-w-2xl text-center text-[#003662]/90">
              La démarche{" "}
              <PatrimEmotionMark patrimClassName="!text-[#003662]" emotionClassName="!text-[#003662]" /> se déroule
              généralement en trois étapes :
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="rounded-2xl bg-[#b9cf4e] shadow-[0_10px_28px_rgba(0,54,98,0.18)] p-6 md:p-8 text-left">
                <div className="w-14 h-14 rounded-2xl bg-[#f4ca3a] text-[#003662] flex items-center justify-center text-2xl font-bold mb-4">1</div>
                <h3 className="pe-heading-card text-[#003662] mb-2 !text-left [text-align-last:auto]">Questionnaire PatrimEmotion</h3>
                <p className="text-[#003662]/90 text-sm leading-relaxed !text-left [text-align-last:auto]">36 questions psychométriques permettant de déterminer votre profil émotionnel patrimonial.</p>
              </div>
              <div className="rounded-2xl bg-[#b9cf4e] shadow-[0_10px_28px_rgba(0,54,98,0.18)] p-6 md:p-8 text-left">
                <div className="w-14 h-14 rounded-2xl bg-[#f4ca3a] text-[#003662] flex items-center justify-center text-2xl font-bold mb-4">2</div>
                <h3 className="pe-heading-card text-[#003662] mb-2 !text-left [text-align-last:auto]">Analyse et restitution avec un conseiller</h3>
                <p className="text-[#003662]/90 text-sm leading-relaxed !text-left [text-align-last:auto]">Présentation du profil émotionnel patrimonial et des principaux repères issus de l&apos;analyse.</p>
              </div>
              <div className="rounded-2xl bg-[#b9cf4e] shadow-[0_10px_28px_rgba(0,54,98,0.18)] p-6 md:p-8 text-left">
                <div className="w-14 h-14 rounded-2xl bg-[#f4ca3a] text-[#003662] flex items-center justify-center text-2xl font-bold mb-4">3</div>
                <h3 className="pe-heading-card text-[#003662] mb-2 !text-left [text-align-last:auto]">Échanges et structuration de la réflexion patrimoniale</h3>
                <p className="text-[#003662]/90 text-sm leading-relaxed !text-left [text-align-last:auto]">Mise en perspective des éléments identifiés afin d&apos;éclairer les décisions patrimoniales futures.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
