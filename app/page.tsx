import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReportModelMarquee from "@/components/ReportModelMarquee";

/** Accueil — `public/video/Émotion_&_Conseil_Patrimonial.mp4` */
const VIDEO_EMOTION_CONSEIL_PATRIMONIAL =
  "/video/" + encodeURIComponent("Émotion_&_Conseil_Patrimonial.mp4");

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section — z-index au-dessus de la section « Le constat » qui remonte en dessous */}
      <section className="relative z-30 -mt-2 md:-mt-3 pt-0 pb-0 px-4">
        <div className="hero-encart relative z-30 pt-16 pb-0 md:pt-20 md:pb-0 px-6 md:px-12">
          <div className="container mx-auto relative z-30">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-0 lg:grid-rows-[auto_auto_auto_auto_auto] lg:items-start">
                {/* Ligne 1 : baseline (largeur = contenu) */}
                <span className="pe-eyebrow w-fit max-w-full px-4 py-2 rounded-full bg-[#f4ca3a]/20 text-[#f4ca3a] mb-6 italic lg:col-start-1 lg:row-start-1">
                  &quot;Vos émotions s&apos;alignent, votre patrimoine s&apos;élève&quot;
                </span>
                <div className="hidden lg:block lg:col-start-2 lg:row-start-1" aria-hidden />
                {/* Ligne 2 : titre */}
                <h1 className="pe-heading-hero text-white mb-4 lg:col-start-1 lg:row-start-2">
                  <span className="font-medium">
                    <span className="text-[#9FB620]">Patrim</span>
                    <span className="text-[#f4ca3a]">Emotion®</span>
                  </span>
                </h1>
                <div className="hidden lg:block lg:col-start-2 lg:row-start-2" aria-hidden />
                {/* Lignes 3–4 : texte blanc + mockups alignés sur ce bloc uniquement */}
                <p className="pe-body-lead text-white font-medium mb-4 max-w-xl lg:col-start-1 lg:row-start-3 lg:self-start">
                  La méthode qui relie personnalité, émotions et décisions patrimoniales.
                </p>
                <div
                  className="hidden lg:flex lg:col-start-2 lg:row-start-3 lg:row-span-2 justify-center items-stretch min-h-0 self-stretch w-full max-w-xl justify-self-end"
                  style={{ transform: "perspective(800px) rotateY(-8deg) rotateX(2deg)" }}
                >
                  <div className="grid grid-cols-2 gap-3 w-full min-h-0 h-full">
                    {/* Fenêtre 1 : graphique */}
                    <div className="bg-white/95 rounded-xl shadow-xl overflow-hidden border border-neutral-200/80 flex flex-col min-h-0 h-full">
                      <div className="flex gap-1.5 px-2 py-1.5 bg-neutral-100 border-b border-neutral-200 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                      </div>
                      <div className="relative flex-1 min-h-[130px] bg-white">
                        <Image
                          src="/images/Hero_chart.jpg"
                          alt="Graphique PatrimEmotion"
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 1024px) 0vw, 25vw"
                        />
                      </div>
                    </div>
                    {/* Fenêtre 2 : silhouette */}
                    <div className="bg-white/95 rounded-xl shadow-xl overflow-hidden border border-neutral-200/80 flex flex-col min-h-0 h-full">
                      <div className="flex gap-1.5 px-2 py-1.5 bg-neutral-100 border-b border-neutral-200 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                      </div>
                      <div className="relative flex-1 min-h-[130px] bg-white">
                        <Image
                          src="/images/Silhouette_Geo_Colors.png"
                          alt=""
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 1024px) 0vw, 25vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="pe-body-lead text-white/90 mb-8 max-w-xl text-justify lg:col-start-1 lg:row-start-4 lg:self-start">
                  PatrimEmotion® est une méthode d&apos;analyse psychométrique appliquée au patrimoine.
                  Elle permet de mieux comprendre le rapport à l&apos;argent, les mécanismes émotionnels et les comportements décisionnels afin de construire des stratégies patrimoniales cohérentes, durables et assumées.
                </p>
                {/* Ligne 5 : CTA */}
                <div className="lg:col-start-1 lg:row-start-5">
                  <Link
                    href="/methode"
                    className="inline-flex items-center justify-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 text-base shadow-lg shadow-[#f4ca3a]/25 hover:shadow-xl hover:shadow-[#f4ca3a]/30 hover:scale-[1.02]"
                  >
                    Découvrir la méthode
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className="hidden lg:block lg:col-start-2 lg:row-start-5" aria-hidden />
              </div>
            </div>
            {/* Barre de statistiques */}
            <div className="border-t border-white/15 mt-12 md:mt-16 pt-8 pb-6 md:pb-8">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                  <div className="relative py-2">
                    <p className="pe-stat-value text-[#f4ca3a]">+20</p>
                    <p className="pe-stat-label text-white/90 mt-1">années d&apos;expertise</p>
                  </div>
                  <div className="relative py-2 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-10 before:w-px before:bg-white/20 sm:before:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-10 after:w-px after:bg-white/20 sm:after:content-['']">
                    <p className="pe-stat-value text-[#f4ca3a]">+500</p>
                    <p className="pe-stat-label text-white/90 mt-1">profils réalisés</p>
                  </div>
                  <div className="relative py-2">
                    <p className="pe-stat-value text-[#f4ca3a]">3</p>
                    <p className="pe-stat-label text-white/90 mt-1">niveaux de certification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 : Pourquoi PatrimEmotion® existe ? (remontée pour apparaître en partie sous le hero) */}
      <section className="section-dark relative z-10 -mt-12 md:-mt-16 pt-20 pb-12 md:pt-24 md:pb-14 transition-colors overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-6">
                  Pourquoi <span className="text-[#9FB620]">Patrim</span><span className="text-[#f4ca3a]">Emotion®</span> existe ?
                </h2>
                <p className="pe-body-lead text-[#003662]/90 text-justify">
                  Les décisions patrimoniales ne sont jamais uniquement rationnelles.
                  Elles sont influencées par l&apos;histoire personnelle, les émotions, les biais cognitifs, la perception du risque, la temporalité et le besoin de sécurité ou de liberté.
                </p>
              </div>
              <div className="relative bg-gradient-to-br from-[#003662] to-[#004a7a] rounded-2xl p-6 md:p-8 shadow-xl shadow-[#003662]/20 border-l-4 border-[#f4ca3a] pr-16 md:pr-10">
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#f4ca3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <p className="pe-kicker text-[#f4ca3a] mb-3">
                  La méthode PatrimEmotion® est née<br />de ce constat :
                </p>
                <p className="pe-body-lead font-semibold text-white text-justify">
                  Un patrimoine mal aligné avec la personnalité et les émotions génère des arbitrages incohérents, de l&apos;anxiété, des renoncements… et souvent de mauvaises décisions dans le temps.
                </p>
              </div>
            </div>
            <div className="mt-10 md:mt-12">
              <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[#003662]/10 bg-[#003662]/5 shadow-[0_12px_40px_-8px_rgba(0,54,98,0.2)]">
                <video
                  className="aspect-video w-full bg-black object-contain"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label="Vidéo Émotion et conseil patrimonial"
                >
                  <source src={VIDEO_EMOTION_CONSEIL_PATRIMONIAL} type="video/mp4" />
                  Votre navigateur ne prend pas en charge la lecture de cette vidéo.
                </video>
              </div>
            </div>
            <div className="mt-10 md:mt-12 flex justify-center">
              <Link
                href="/cadre-ethique-scientifique"
                className="inline-flex items-center justify-center gap-2 bg-[#003662] hover:bg-[#004a7a] text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 text-base shadow-md shadow-[#003662]/15 hover:shadow-lg hover:scale-[1.02]"
              >
                Approche scientifique
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sections produit : alternance bleu / blanc */}
      <div className="my-0">
          {/* Section 2 : Ce que permet PatrimEmotion® - FOND BLEU */}
          <section className="relative bg-[#003662] py-16 md:py-24 transition-colors overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(244,202,58,0.08),transparent)] pointer-events-none" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="max-w-6xl mx-auto">
                <h2 className="pe-heading-section text-white mb-16 text-center">
                  Ce que permet PatrimEmotion®
                </h2>
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                  <div className="group p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-[#9FB620]/20 flex items-center justify-center mb-5">
                      <svg className="w-6 h-6 text-[#9FB620]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="pe-heading-card text-white mb-3">
                      Mieux comprendre son rapport aux décisions patrimoniales
                    </h3>
                    <p className="pe-body text-white/90">
                      Identifier les dimensions émotionnelles et comportementales qui peuvent influencer la manière d&apos;aborder l&apos;argent, l&apos;incertitude et les choix patrimoniaux.
                    </p>
                  </div>
                  <div className="group p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-[#9FB620]/20 flex items-center justify-center mb-5">
                      <svg className="w-6 h-6 text-[#9FB620]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="pe-heading-card text-white mb-3">
                      Mettre en perspective ses choix patrimoniaux
                    </h3>
                    <p className="pe-body text-white/90">
                      Relier les objectifs patrimoniaux, les valeurs personnelles et les horizons de vie afin d&apos;éclairer les décisions et leur donner davantage de cohérence.
                    </p>
                  </div>
                  <div className="group p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-[#9FB620]/20 flex items-center justify-center mb-5">
                      <svg className="w-6 h-6 text-[#9FB620]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="pe-heading-card text-white mb-3">
                      Structurer la réflexion dans la durée
                    </h3>
                    <p className="pe-body text-white/90">
                      Apporter des repères permettant d&apos;aborder les décisions patrimoniales avec davantage de recul, de compréhension et de stabilité dans le temps.
                    </p>
                  </div>
                </div>
                <ReportModelMarquee />
              </div>
            </div>
          </section>

          {/* Section 4 : Notre accompagnement - FOND VERT */}
          <section className="relative pt-24 pb-12 md:pt-32 md:pb-14 transition-colors overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9FB620] via-[#a5c023] to-[#8aa61d]" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <h2 className="pe-heading-section text-center text-white mb-4">
                Découvrir le méthode
              </h2>
              <p className="pe-body-lead text-white/90 text-center mb-16 max-w-2xl mx-auto">
                Un processus simple en <span className="text-[#003662] font-semibold">4 étapes</span> pour transformer votre relation au patrimoine
              </p>

              <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                <div className="group relative flex flex-col h-full text-center p-8 rounded-2xl bg-white/95 backdrop-blur-sm border-2 border-white/20 shadow-xl shadow-black/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#f4ca3a]/20 hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-2xl bg-[#f4ca3a] text-[#003662] flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    1
                  </div>
                  <h3 className="pe-heading-card-lg text-[#003662] mb-4">
                    Entretien découverte
                  </h3>
                  <p className="pe-body-lead text-[#003662]/90 flex-1 min-h-[5rem]">
                    Un échange humain pour comprendre votre situation, vos objectifs, vos craintes.
                  </p>
                </div>

                <div className="group relative flex flex-col h-full text-center p-8 rounded-2xl bg-white/95 backdrop-blur-sm border-2 border-white/20 shadow-xl shadow-black/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#f4ca3a]/20 hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-2xl bg-[#f4ca3a] text-[#003662] flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    2
                  </div>
                  <h3 className="pe-heading-card-lg text-[#003662] mb-4">
                    Profil plus lecture
                  </h3>
                  <p className="pe-body-lead text-[#003662]/90 flex-1 min-h-[5rem]">
                    Votre profil émotionnel patrimonial est établi et décrypté avec vous, grâce à une lecture simple et détaillée.
                  </p>
                </div>

                <div className="group relative flex flex-col h-full text-center p-8 rounded-2xl bg-white/95 backdrop-blur-sm border-2 border-white/20 shadow-xl shadow-black/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#f4ca3a]/20 hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-2xl bg-[#f4ca3a] text-[#003662] flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    3
                  </div>
                  <h3 className="pe-heading-card-lg text-[#003662] mb-4">
                    Validation contradictoire
                  </h3>
                  <p className="pe-body-lead text-[#003662]/90 flex-1 min-h-[5rem]">
                    Un cadre de décision validé pour éviter les regrets
                  </p>
                </div>

                <div className="group relative flex flex-col h-full text-center p-8 rounded-2xl bg-white/95 backdrop-blur-sm border-2 border-white/20 shadow-xl shadow-black/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#f4ca3a]/20 hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-2xl bg-[#f4ca3a] text-[#003662] flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    4
                  </div>
                  <h3 className="pe-heading-card-lg text-[#003662] mb-4">
                    Plan d&apos;action
                  </h3>
                  <p className="pe-body-lead text-[#003662]/90 flex-1 min-h-[5rem]">
                    3 priorités patrimoniales claires + suivi personnalisé dans le temps
                  </p>
                </div>
              </div>

              <div className="mt-12 md:mt-14 flex justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScJDYDqoi6B59UMs-f2Oj1PzTqHgIjwUTkJgYbvFzhRTtJpTA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#003662] hover:bg-[#004a85] text-[#f4ca3a] font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-[#003662]/25 hover:shadow-xl hover:shadow-[#003662]/30 hover:scale-[1.02]"
                >
                  Répondre au questionnaire
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* Section 3 : À qui s'adresse PatrimEmotion® ? + Navigation (3 cartes) - FOND BLANC */}
          <section className="bg-white py-16 md:py-24 transition-colors">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="pe-heading-section text-center text-[#003662] mb-4">
                À qui s&apos;adresse <span className="text-[#9FB620]">Patrim</span><span className="text-[#f4ca3a]">Emotion® ?</span>
              </h2>
              <p className="pe-body-lead text-[#003662]/80 text-center text-justify mb-16 max-w-3xl mx-auto">
                PatrimEmotion® s&apos;adresse à différents publics souhaitant intégrer une lecture comportementale et émotionnelle dans la compréhension des décisions patrimoniales.
              </p>
              <div className="max-w-6xl mx-auto space-y-6">
                <div className="group grid lg:grid-cols-12 gap-6 items-center rounded-2xl p-6 md:p-8 bg-neutral-50/80 border-l-4 border-[#f4ca3a] border border-neutral-100 hover:border-[#f4ca3a]/50 hover:shadow-lg hover:shadow-[#f4ca3a]/10 transition-all duration-300">
                  <div className="lg:col-span-1 flex justify-center lg:justify-start">
                    <div className="w-14 h-14 rounded-xl bg-[#f4ca3a]/20 border-2 border-[#f4ca3a]/40 shadow-sm flex items-center justify-center text-2xl shrink-0">👤</div>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="pe-heading-card text-[#003662] mb-2">Particuliers, dirigeants et professions libérales</h3>
                    <p className="pe-body text-[#003662]/90 mb-2 text-justify">
                      Pour les personnes souhaitant mieux comprendre la manière dont leurs émotions influencent leurs décisions patrimoniales.
                    </p>
                    <p className="pe-body-small text-[#003662]/90 text-justify">
                      La démarche PatrimEmotion® permet de mettre en lumière vos préférences décisionnelles et votre rapport à l&apos;incertitude, à la sécurité et à la projection dans le temps. Selon l&apos;accompagnement choisi : Indice et Profil Émotionnel Patrimonial, Rapport PatrimEmotion® ou Bilan complet — un outil pédagogique pour éclairer vos décisions.
                    </p>
                  </div>
                  <div className="lg:col-span-2 flex justify-center lg:justify-end">
                    <Link href="/solutions/particuliers" className="inline-flex items-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02]">
                      Découvrir
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </div>
                </div>
                <div className="group grid lg:grid-cols-12 gap-6 items-center rounded-2xl p-6 md:p-8 bg-neutral-50/80 border-l-4 border-[#9FB620] border border-neutral-100 hover:border-[#9FB620]/50 hover:shadow-lg hover:shadow-[#9FB620]/10 transition-all duration-300">
                  <div className="lg:col-span-1 flex justify-center lg:justify-start">
                    <div className="w-14 h-14 rounded-xl bg-[#9FB620]/20 border-2 border-[#9FB620]/40 shadow-sm flex items-center justify-center text-2xl shrink-0">💼</div>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="pe-heading-card text-[#003662] mb-2">Professionnels du patrimoine</h3>
                    <p className="pe-body text-[#003662]/90 mb-2 text-justify">
                      Pour les conseillers, CGP, assureurs, experts-comptables souhaitant intégrer une lecture comportementale structurée et une prise en compte des biais dans la relation client.
                    </p>
                    <p className="pe-body-small text-[#003662]/90 text-justify">
                      La licence PatrimEmotion® enrichit la connaissance client et améliore la qualité du dialogue patrimonial, avec plusieurs niveaux selon vos besoins.
                    </p>
                  </div>
                  <div className="lg:col-span-2 flex justify-center lg:justify-end">
                    <Link href="/solutions/professionnels" className="inline-flex items-center gap-2 bg-[#9FB620] hover:bg-[#a8c025] text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02]">
                      Découvrir
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </div>
                </div>
                <div className="group grid lg:grid-cols-12 gap-6 items-center rounded-2xl p-6 md:p-8 bg-neutral-50/80 border-l-4 border-[#003662] border border-neutral-100 hover:border-[#003662]/50 hover:shadow-lg hover:shadow-[#003662]/10 transition-all duration-300">
                  <div className="lg:col-span-1 flex justify-center lg:justify-start">
                    <div className="w-14 h-14 rounded-xl bg-[#003662]/10 border-2 border-[#003662]/30 shadow-sm flex items-center justify-center text-2xl shrink-0">🏢</div>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="pe-heading-card text-[#003662] mb-2">Institutions et plateformes</h3>
                    <p className="pe-body text-[#003662]/90 mb-2 text-justify">
                      Pour les acteurs institutionnels, réseaux patrimoniaux ou plateformes souhaitant une approche comportementale structurée et reproductible dans leurs parcours clients.
                    </p>
                    <p className="pe-body-small text-[#003662]/90 text-justify">
                      Déploiement en solution intégrée, licence marque blanche ou module d&apos;aide — pour compléter vos outils existants avec un éclairage comportemental et pédagogique.
                    </p>
                  </div>
                  <div className="lg:col-span-2 flex justify-center lg:justify-end">
                    <Link href="/solutions/institutionnels" className="inline-flex items-center gap-2 bg-[#003662] hover:bg-[#004a7a] text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02]">
                      Découvrir
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-12 md:mt-14 flex justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfPknfoAKF-t-O4L_Bv9pIuh7l_t1AbCywGbes-zCKCtg1qOg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#f4ca3a] px-8 py-4 text-base font-semibold text-[#003662] shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-[#f5d055] hover:shadow-xl md:text-lg rounded-xl"
                >
                  Recevoir le livre PatrimEmotion
                  <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

      </div>

      {/* Section Demander une démo - Fond vert */}
      <section className="py-16 md:py-24 mb-0 relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.2),0_4px_15px_rgba(0,0,0,0.15)]" style={{ clipPath: 'polygon(0 8%, 100% 0%, 100% 98%, 0% 100%)' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#9FB620] via-[#a5c023] to-[#8aa61d]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="pe-heading-section text-white mb-4">
                  Prêt à <span className="text-[#003662]">échanger ?</span>
                </h2>
                <p className="pe-body-lead text-white/90 mb-6">
                  Prenez rendez-vous avec un expert pour découvrir comment <span className="text-[#003662] font-semibold">PatrimEmotion®</span> peut transformer votre relation au patrimoine.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <div className="relative h-72 sm:h-[22rem] md:h-[28rem] w-full">
                  <Image
                    src="/images/AMCP_shooting_studio_01.jpg"
                    alt="Studio photo AMCP"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
                    quality={92}
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://www.am-courtage-et-patrimoine.fr/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#003662] hover:bg-[#004a7a] text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-[#003662]/20 hover:shadow-xl hover:shadow-[#003662]/30 hover:scale-[1.02]"
              >
                Prenez contact avec un expert
              </a>
              <a
                href="https://www.am-courtage-et-patrimoine.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/90 px-10 py-4 font-semibold text-[#003662] transition-all duration-200 hover:scale-[1.02] hover:bg-white rounded-xl"
              >
                La fondatrice
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="-mt-8 relative z-50">
        <Footer />
      </div>
    </>
  );
}
