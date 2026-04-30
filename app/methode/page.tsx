import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfilsFlipCards from "@/components/ProfilsFlipCards";
import { PATRIMEMOTION_QUESTIONNAIRE_URL } from "@/lib/amcp";
import type { Metadata } from "next";

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
                  <p className="max-w-2xl mx-auto pe-body-lead lg:text-[1.35rem] text-white font-medium leading-relaxed text-center mb-8 md:mb-10 rounded-2xl border border-white/20 bg-white/[0.07] px-6 py-6 md:px-8 md:py-7 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-[2px]">
                    Parce que les choix patrimoniaux ne sont pas uniquement financiers, ils doivent aussi être cohérents avec votre personnalité, votre manière de décider et votre parcours de vie.
                  </p>
                  <div className="mt-3 md:mt-4 flex justify-center items-center w-full flex-col gap-3">
                    <a
                      href="/Docs/Prez_methode_PatrimEmotion_Site_Internet.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#9FB620] hover:bg-[#a8c025] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 text-base shadow-lg hover:shadow-xl hover:scale-[1.02]"
                    >
                      Présentation de la méthode
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfOrySU_8-rIqNw_YZ9cBGsbCtine9Oridsqg0Mk7HtZGWKyg/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 text-base border border-white/35 md:mt-3"
                    >
                      Recevoir mon livre
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  </div>
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
        <section className="bg-white py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="pe-heading-section text-[#003662] mb-8 text-center">
              Une approche <span className="text-[#f4ca3a]">compertementale</span> appliquée aux <span className="text-[#9FB620]">décisions patrimoniales</span>
            </h2>
            <div className="space-y-6 pe-body-lead text-[#003662]/90 leading-relaxed">
              <p className="text-center">
                <strong><span className="text-[#003662]">Patrim</span><span className="text-[#f4ca3a]">EmotionR</span></strong> est une méthode d&apos;analyse comportementale appliquée aux décisions patrimoniales.
              </p>
              <p className="text-center">
                Elle vise à mettre en lumière les dimensions émotionnelles et décisionnelles qui peuvent influencer la manière d&apos;aborder l&apos;argent, le risque, le temps et les projets patrimoniaux.
              </p>
              <p className="text-center">
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
                  <p className="pe-body-lead text-[#003662]/90 mb-3 leading-relaxed text-left max-w-2xl mx-auto">
                    Les décisions patrimoniales ne reposent pas uniquement sur des raisonnements financiers.
                    De nombreux facteurs interviennent dans les arbitrages :
                  </p>
                  <ul className="space-y-3 pe-body-lead text-[#003662]/90 mb-8 max-w-xl mx-auto">
                    <li className="flex items-center gap-3">
                      <span className="text-[#f4ca3a] shrink-0">•</span>
                      <span>perception du risque</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#f4ca3a] shrink-0">•</span>
                      <span>rapport personnel à l&apos;argent</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#f4ca3a] shrink-0">•</span>
                      <span>temporalité des projets</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#f4ca3a] shrink-0">•</span>
                      <span>expérience de vie</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#f4ca3a] shrink-0">•</span>
                      <span>biais cognitifs et émotionnels</span>
                    </li>
                  </ul>
                  <p className="pe-body-lead text-[#003662]/90 leading-relaxed text-left max-w-2xl mx-auto">
                    Ces éléments peuvent expliquer les écarts entre les décisions théoriquement optimales et les décisions réellement prises.
                  </p>
                  <div className="flex justify-center pt-10 pb-3 md:pt-12 md:pb-4">
                    <Link
                      href="#presentation-patrimemotion-video"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#f4ca3a] px-5 py-2.5 text-sm font-semibold text-[#003662] shadow-md transition-colors hover:bg-[#f7d45c] md:text-base"
                    >
                      Présentation en vidéo
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-[#9FB620]/[0.08] to-transparent border border-[#9FB620]/25 px-5 py-7 md:px-8 md:py-8">
                  <h3 className="pe-heading-feature text-[#003662] mb-6 text-center">
                    <span className="text-[#f4ca3a]">La démarche</span> <span className="text-[#003662]">Patrim</span>Emotion®
                  </h3>
                  <p className="pe-body-lead text-[#003662]/90 mb-3 leading-relaxed text-left max-w-2xl mx-auto">
                    La méthode PatrimEmotion® vise à apporter une lecture structurée de ces dimensions comportementales afin d&apos;éclairer les décisions patrimoniales.
                    Elle permet notamment de :
                  </p>
                  <ul className="space-y-3 pe-body-lead text-[#003662]/90 mb-8 max-w-xl mx-auto">
                    <li className="flex items-start gap-3">
                      <span className="text-[#f4ca3a] text-xl font-semibold shrink-0">✓</span>
                      <span>mieux comprendre la manière dont les décisions patrimoniales sont abordées</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#f4ca3a] text-xl font-semibold shrink-0">✓</span>
                      <span>identifier certaines préférences décisionnelles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#f4ca3a] text-xl font-semibold shrink-0">✓</span>
                      <span>apporter des repères pour structurer la réflexion patrimoniale</span>
                    </li>
                  </ul>
                  <p className="pe-body-lead text-[#003662]/90 leading-relaxed text-left max-w-2xl mx-auto">
                    PatrimEmotion® constitue ainsi un outil pédagogique d&apos;aide à la compréhension et au dialogue patrimonial.
                  </p>
                  <div className="flex justify-center pt-10 pb-3 md:pt-12 md:pb-4">
                    <Link
                      href="/#modele-rapport"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#f4ca3a] px-5 py-2.5 text-sm font-semibold text-[#003662] shadow-md transition-colors hover:bg-[#f5d055] md:text-base"
                    >
                      Modèle de rapport
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-[#9FB620]/[0.18] to-[#9FB620]/[0.08] border border-[#9FB620]/35 px-5 py-7 md:px-8 md:py-8">
                  <h3 className="pe-heading-feature text-[#9FB620] mb-6 text-center">
                    Les fondements de la méthode
                  </h3>
                  <p className="pe-body-lead text-[#003662]/90 mb-3 text-left max-w-2xl mx-auto">
                    La méthode s&apos;appuie notamment sur des approches issues :
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4 pe-body-lead text-[#003662]/90 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                      <span>de la psychologie comportementale</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                      <span>de l&apos;étude des biais cognitifs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                      <span>de l&apos;analyse du rapport à l&apos;argent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                      <span>de la gestion de l&apos;incertitude</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                      <span>de la projection dans le temps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                      <span>des mécanismes de décision et de délégation</span>
                    </li>
                  </ul>
                  <p className="pe-body-lead text-[#003662]/90 text-left max-w-2xl mx-auto">
                    Ces éléments permettent d&apos;observer certaines dynamiques décisionnelles liées aux choix patrimoniaux.
                  </p>
                  <div className="flex justify-center pt-10 pb-3 md:pt-12 md:pb-4">
                    <a
                      href="/cadre-ethique-scientifique"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#9FB620] px-5 py-2.5 text-sm font-semibold text-[#003662] shadow-md transition-colors hover:bg-[#a8c025] md:text-base"
                    >
                      Base scientifique
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
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
              Les profils <span className="text-[#9FB620]">Patrim</span><span className="text-[#f4ca3a]">Emotion®</span>
            </h2>
            <p className="pe-body-lead mx-auto mb-4 max-w-3xl text-balance leading-relaxed text-white/95">
              Il n&apos;existe ni bon ni mauvais profil patrimonial.
            </p>
            <p className="pe-body-lead mx-auto mb-8 max-w-3xl text-balance leading-relaxed text-white/95">
              Chaque profil traduit une manière spécifique d&apos;aborder les décisions patrimoniales, notamment face : à l&apos;incertitude, au temps, à la sécurité, aux projets de vie.
            </p>

            <p className="pe-body-lead mb-2 font-semibold text-balance text-white">
              La méthode identifie 8 profils émotionnels patrimoniaux :
            </p>
            <p className="mx-auto mb-6 max-w-2xl text-balance text-sm text-white/80">
              Cliquez sur une carte pour la retourner et lire la définition sur le verso.
            </p>
            <ProfilsFlipCards profiles={PROFILS_EMOTIONNELS} />

            <div className="mb-6 rounded-2xl bg-[#9FB620] p-6 text-center md:p-8">
              <p className="pe-body-lead mx-auto mb-4 max-w-3xl text-balance font-semibold text-white">
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
            <p className="pe-body-lead mx-auto max-w-3xl text-balance leading-relaxed text-white/95">
              Les profils ne sont ni figés ni exclusifs : ils peuvent évoluer avec l&apos;âge, les projets de vie ou le contexte patrimonial.
            </p>
            <div className="mt-8 flex justify-center translate-y-4 md:translate-y-6">
              <a
                href="https://forms.gle/CbJhpd3Ph4GjSGji7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#f4ca3a] px-6 py-3 font-semibold text-[#003662] shadow-md transition-colors hover:bg-[#f5d055]"
              >
                Recevoir le livre blanc
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Les axes d'analyse */}
        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="pe-heading-section text-[#003662] mb-6 text-center">
              Les 6 axes d&apos;analyse
            </h2>
            <p className="pe-body-lead text-[#003662]/90 mb-6 text-center">
              La méthode PatrimEmotion® s&apos;appuie sur plusieurs axes d&apos;observation, notamment :
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
            <p className="pe-body-lead text-[#003662]/90 mb-8 leading-relaxed text-center">
              L&apos;analyse croisée de ces dimensions permet de mettre en évidence certaines cohérences ou tensions dans la manière d&apos;aborder les décisions patrimoniales.
            </p>
            {/* Image Radar Emotionnel PatrimEmotion — à insérer */}
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
          </div>
        </section>

        {/* Comment se déroule l'accompagnement ? */}
        <section className="bg-[#9FB620] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="pe-heading-section text-[#003662] mb-4 text-center">
              Comment se déroule l&apos;accompagnement ?
            </h2>
            <p className="pe-body-lead text-[#003662]/90 mb-12 text-center max-w-2xl mx-auto">
              La démarche PatrimEmotion® se déroule généralement en trois étapes :
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="rounded-2xl bg-[#b9cf4e] shadow-[0_10px_28px_rgba(0,54,98,0.18)] p-6 md:p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#f4ca3a] text-[#003662] flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="pe-heading-card text-[#003662] mb-2 text-center">Questionnaire Patrim&apos;Emotion</h3>
                <p className="text-[#003662]/90 text-sm leading-relaxed">36 questions psychométriques permettant de déterminer votre profil émotionnel patrimonial.</p>
              </div>
              <div className="rounded-2xl bg-[#b9cf4e] shadow-[0_10px_28px_rgba(0,54,98,0.18)] p-6 md:p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#f4ca3a] text-[#003662] flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="pe-heading-card text-[#003662] mb-2 text-center">Analyse et restitution avec un conseiller</h3>
                <p className="text-[#003662]/90 text-sm leading-relaxed">Présentation du profil émotionnel patrimonial et des principaux repères issus de l&apos;analyse.</p>
              </div>
              <div className="rounded-2xl bg-[#b9cf4e] shadow-[0_10px_28px_rgba(0,54,98,0.18)] p-6 md:p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#f4ca3a] text-[#003662] flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="pe-heading-card text-[#003662] mb-2 text-center">Échanges et structuration de la réflexion patrimoniale</h3>
                <p className="text-[#003662]/90 text-sm leading-relaxed">Mise en perspective des éléments identifiés afin d&apos;éclairer les décisions patrimoniales futures.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Présentation PatrimEmotion en vidéo */}
        <section
          id="presentation-patrimemotion-video"
          className="relative z-20 bg-white py-16 md:py-24"
          aria-labelledby="presentation-patrimemotion-video-title"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2
              id="presentation-patrimemotion-video-title"
              className="pe-heading-section mb-8 text-center text-balance text-[#003662] text-4xl md:text-5xl"
            >
              Présentation <span className="text-[#f4ca3a]">PatrimEmotion</span> en vidéo
            </h2>
            <div className="mx-auto flex max-w-5xl justify-center overflow-hidden rounded-2xl border border-[#003662]/10 bg-[#003662]/5 px-6 py-10 shadow-[0_12px_40px_-8px_rgba(0,54,98,0.2)]">
              <a
                href="https://www.youtube.com/watch?v=hl4XuN-ezho"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#003662] px-6 py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-[#004a7a]"
              >
                Ouvrir la vidéo dans un nouvel onglet
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
