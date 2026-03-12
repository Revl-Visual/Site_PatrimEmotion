import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section - Bilan Emotionnel Patrimonial */}
      <section className="-mt-2 md:-mt-3 pt-0 pb-0 px-4">
        <div className="hero-encart pt-16 pb-0 md:pt-20 md:pb-0 px-6 md:px-12">
          <div className="container mx-auto relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[420px] md:min-h-[480px]">
                {/* Gauche : titre, description, CTA */}
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#f4ca3a]/20 text-[#f4ca3a] text-sm font-semibold tracking-wide mb-6">
                    Bilan Emotionnel Patrimonial
                  </span>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 leading-[1.12] tracking-tight">
                    <span className="font-semibold text-[#f4ca3a]">PatrimEmotion®</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-white font-medium mb-4 max-w-xl leading-tight">
                    La méthode qui relie personnalité, émotions et décisions patrimoniales.
                  </p>
                  <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
                    PatrimEmotion® est une méthode d&apos;analyse psychométrique appliquée au patrimoine.
                    Elle permet de mieux comprendre le rapport à l&apos;argent, les mécanismes émotionnels et les comportements décisionnels afin de construire des stratégies patrimoniales cohérentes, durables et assumées.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/methode"
                      className="inline-flex items-center justify-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 text-base shadow-lg shadow-[#f4ca3a]/25 hover:shadow-xl hover:shadow-[#f4ca3a]/30 hover:scale-[1.02]"
                    >
                      Découvrir la méthode
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <Link
                      href="/solutions/particuliers"
                      className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 text-base border-2 border-white/30 hover:border-white/50 hover:scale-[1.02]"
                    >
                      Répondre au questionnaire
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
                {/* Droite : effet computer dashboard — 2 fenêtres */}
                <div className="hidden lg:flex justify-center items-center">
                  <div className="relative w-full max-w-md" style={{ transform: "perspective(800px) rotateY(-8deg) rotateX(2deg)" }}>
                    <div className="grid grid-cols-2 gap-2">
                      {/* Fenêtre 1 : graphique */}
                      <div className="bg-white/95 rounded-xl shadow-xl overflow-hidden border border-neutral-200/80">
                        <div className="flex gap-1.5 px-2 py-1.5 bg-neutral-100 border-b border-neutral-200">
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                        </div>
                        <div className="p-2 flex flex-col justify-end h-[180px] bg-white">
                          <div className="flex items-end gap-0.5 h-20">
                            <div className="flex-1 rounded-t bg-[#003662]/80" style={{ height: "45%" }} />
                            <div className="flex-1 rounded-t bg-[#003662]/60" style={{ height: "65%" }} />
                            <div className="flex-1 rounded-t bg-[#f4ca3a]" style={{ height: "55%" }} />
                            <div className="flex-1 rounded-t bg-[#9FB620]/80" style={{ height: "80%" }} />
                            <div className="flex-1 rounded-t bg-[#003662]" style={{ height: "90%" }} />
                            <div className="flex-1 rounded-t bg-[#f4ca3a]/90" style={{ height: "70%" }} />
                          </div>
                        </div>
                      </div>
                      {/* Fenêtre 2 : silhouette */}
                      <div className="bg-white/95 rounded-xl shadow-xl overflow-hidden border border-neutral-200/80">
                        <div className="flex gap-1.5 px-2 py-1.5 bg-neutral-100 border-b border-neutral-200">
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                        </div>
                        <div className="relative h-[180px] bg-white">
                          <Image
                            src="/Silhouette_Geo_Colors.png"
                            alt=""
                            fill
                            className="object-contain object-center p-1"
                            sizes="(max-width: 1024px) 0vw, 25vw"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Barre de statistiques */}
            <div className="border-t border-white/15 mt-12 md:mt-16 pt-8 pb-6 md:pb-8">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                  <div className="relative py-2">
                    <p className="text-3xl md:text-4xl font-bold text-[#f4ca3a] tabular-nums">+20</p>
                    <p className="text-white/90 text-sm md:text-base mt-1 font-medium">années d&apos;expertise</p>
                  </div>
                  <div className="relative py-2 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-10 before:w-px before:bg-white/20 sm:before:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-10 after:w-px after:bg-white/20 sm:after:content-['']">
                    <p className="text-3xl md:text-4xl font-bold text-[#f4ca3a] tabular-nums">+500</p>
                    <p className="text-white/90 text-sm md:text-base mt-1 font-medium">profils réalisés</p>
                  </div>
                  <div className="relative py-2">
                    <p className="text-3xl md:text-4xl font-bold text-[#f4ca3a] tabular-nums">3</p>
                    <p className="text-white/90 text-sm md:text-base mt-1 font-medium">niveaux de certification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 : Pourquoi PatrimEmotion® existe ? */}
      <section className="section-dark py-24 md:py-32 transition-colors overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="inline-block text-sm font-semibold text-[#f4ca3a] uppercase tracking-widest mb-4">
                  Le constat
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#003662] mb-6 leading-tight">
                  Pourquoi PatrimEmotion® existe ?
                </h2>
                <p className="text-xl md:text-2xl text-[#003662]/90 leading-relaxed">
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
                <p className="text-sm font-semibold text-[#f4ca3a] uppercase tracking-wider mb-3">
                  La méthode PatrimEmotion® est née<br />de ce constat :
                </p>
                <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
                  Un patrimoine mal aligné avec la personnalité et les émotions génère des arbitrages incohérents, de l&apos;anxiété, des renoncements… et souvent de mauvaises décisions dans le temps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections produit : alternance bleu / blanc */}
      <div className="my-0">
          {/* Section 2 : Ce que permet PatrimEmotion® - FOND BLEU */}
          <section className="relative bg-[#003662] py-24 md:py-32 transition-colors overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(244,202,58,0.08),transparent)] pointer-events-none" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="max-w-6xl mx-auto">
                <p className="text-center text-[#f4ca3a] text-sm font-semibold uppercase tracking-widest mb-4">
                  Les bénéfices
                </p>
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-16 text-center leading-tight">
                  Ce que permet PatrimEmotion®
                </h2>
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                  <div className="group p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-[#f4ca3a]/20 flex items-center justify-center mb-5">
                      <svg className="w-6 h-6 text-[#f4ca3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                      Mieux comprendre son rapport aux décisions patrimoniales
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      Identifier les dimensions émotionnelles et comportementales qui peuvent influencer la manière d&apos;aborder l&apos;argent, l&apos;incertitude et les choix patrimoniaux.
                    </p>
                  </div>
                  <div className="group p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-[#f4ca3a]/20 flex items-center justify-center mb-5">
                      <svg className="w-6 h-6 text-[#f4ca3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                      Mettre en perspective ses choix patrimoniaux
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      Relier les objectifs patrimoniaux, les valeurs personnelles et les horizons de vie afin d&apos;éclairer les décisions et leur donner davantage de cohérence.
                    </p>
                  </div>
                  <div className="group p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-[#f4ca3a]/20 flex items-center justify-center mb-5">
                      <svg className="w-6 h-6 text-[#f4ca3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                      Structurer la réflexion dans la durée
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      Apporter des repères permettant d&apos;aborder les décisions patrimoniales avec davantage de recul, de compréhension et de stabilité dans le temps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 : À qui s'adresse PatrimEmotion® ? + Navigation (3 cartes) - FOND BLANC */}
          <section className="bg-white py-24 md:py-32 transition-colors">
            <div className="container mx-auto px-4 md:px-6">
              <p className="text-center text-[#f4ca3a] text-sm font-semibold uppercase tracking-widest mb-4">
                Vos profils
              </p>
              <h2 className="text-4xl md:text-6xl font-serif font-medium text-center text-[#003662] mb-4 leading-tight">
                À qui s&apos;adresse <span className="text-[#f4ca3a]">PatrimEmotion® ?</span>
              </h2>
              <p className="text-xl text-[#003662]/80 text-center mb-16 max-w-3xl mx-auto">
                PatrimEmotion® s&apos;adresse à différents publics souhaitant intégrer une lecture comportementale et émotionnelle dans la compréhension des décisions patrimoniales.
              </p>
              <div className="max-w-6xl mx-auto space-y-6">
                <div className="group grid lg:grid-cols-12 gap-6 items-center rounded-2xl p-6 md:p-8 bg-neutral-50/80 border-l-4 border-[#f4ca3a] border border-neutral-100 hover:border-[#f4ca3a]/50 hover:shadow-lg hover:shadow-[#f4ca3a]/10 transition-all duration-300">
                  <div className="lg:col-span-1 flex justify-center lg:justify-start">
                    <div className="w-14 h-14 rounded-xl bg-[#f4ca3a]/20 border-2 border-[#f4ca3a]/40 shadow-sm flex items-center justify-center text-2xl shrink-0">👤</div>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="text-xl md:text-2xl font-serif font-medium text-[#003662] mb-2">Particuliers, dirigeants et professions libérales</h3>
                    <p className="text-[#003662]/90 leading-relaxed mb-2">
                      Pour les personnes souhaitant mieux comprendre la manière dont leurs émotions influencent leurs décisions patrimoniales.
                    </p>
                    <p className="text-[#003662]/90 leading-relaxed text-sm">
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
                    <h3 className="text-xl md:text-2xl font-serif font-medium text-[#003662] mb-2">Professionnels du patrimoine</h3>
                    <p className="text-[#003662]/90 leading-relaxed mb-2">
                      Pour les conseillers, CGP, assureurs, experts-comptables souhaitant intégrer une lecture comportementale structurée et une prise en compte des biais dans la relation client.
                    </p>
                    <p className="text-[#003662]/90 leading-relaxed text-sm">
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
                    <h3 className="text-xl md:text-2xl font-serif font-medium text-[#003662] mb-2">Institutions et plateformes</h3>
                    <p className="text-[#003662]/90 leading-relaxed mb-2">
                      Pour les acteurs institutionnels, réseaux patrimoniaux ou plateformes souhaitant une approche comportementale structurée et reproductible dans leurs parcours clients.
                    </p>
                    <p className="text-[#003662]/90 leading-relaxed text-sm">
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
            </div>
          </section>

          {/* Section Un cadre sûr */}
          <section className="section-alt-blue py-20 md:py-24 transition-colors relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#003662]/[0.03] to-transparent pointer-events-none" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 p-8 md:p-10 rounded-2xl bg-white border-2 border-[#003662]/10 shadow-lg shadow-[#003662]/5">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#003662] flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#003662] mb-3 leading-tight">
                      Un cadre sûr
                    </h2>
                    <p className="text-lg md:text-xl text-[#003662]/90 leading-relaxed">
                      PatrimEmotion® est une méthode propriétaire, structurée et documentée, exploitée par des cabinets partenaires dans un cadre contractuel strict (format licence associée à différents niveaux d&apos;accréditation avec une habilitation préalable à obtenir).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 : Comment ça se passe - FOND BLEU */}
          <section className="relative bg-[#003662] py-24 md:py-32 transition-colors overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(244,202,58,0.08),transparent)] pointer-events-none" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <p className="text-center text-[#f4ca3a] text-sm font-semibold uppercase tracking-widest mb-4">
                Le processus
              </p>
              <h2 className="text-4xl md:text-6xl font-serif font-medium text-center text-white mb-4 leading-tight">
                Comment ça se passe ?
              </h2>
              <p className="text-xl text-white/90 text-center mb-16 max-w-2xl mx-auto">
                Un processus simple en <span className="text-[#f4ca3a] font-semibold">3 étapes</span> pour transformer votre relation au patrimoine
              </p>
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                <div className="group relative text-center p-8 rounded-2xl bg-white/95 backdrop-blur-sm border-2 border-white/20 shadow-xl shadow-black/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#f4ca3a]/20 hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-2xl bg-[#f4ca3a] text-[#003662] flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    1
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-medium text-[#003662] mb-4">
                    Entretien découverte
                  </h3>
                  <p className="text-[#003662]/90 text-lg leading-relaxed">
                    Un échange humain pour comprendre votre situation, vos objectifs, vos craintes.
                  </p>
                </div>
                <div className="group relative text-center p-8 rounded-2xl bg-white/95 backdrop-blur-sm border-2 border-white/20 shadow-xl shadow-black/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#f4ca3a]/20 hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-2xl bg-[#f4ca3a] text-[#003662] flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    2
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-medium text-[#003662] mb-4">
                    Profil + lecture
                  </h3>
                  <p className="text-[#003662]/90 text-lg leading-relaxed">
                    Votre profil émotionnel patrimonial est établi et décrypté avec vous.
                  </p>
                </div>
                <div className="group relative text-center p-8 rounded-2xl bg-white/95 backdrop-blur-sm border-2 border-white/20 shadow-xl shadow-black/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#f4ca3a]/20 hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-2xl bg-[#f4ca3a] text-[#003662] flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    3
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-medium text-[#003662] mb-4">
                    Plan d&apos;actions + mise en œuvre
                  </h3>
                  <p className="text-[#003662]/90 text-lg leading-relaxed">
                    Un plan concret, des priorités claires, un suivi personnalisé.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 : Ce que vous recevez - FOND BLANC */}
          <section className="bg-white py-24 md:py-32 transition-colors">
            <div className="container mx-auto px-4 md:px-6">
              <p className="text-center text-[#f4ca3a] text-sm font-semibold uppercase tracking-widest mb-4">
                Votre accompagnement
              </p>
              <h2 className="text-4xl md:text-6xl font-serif font-medium text-center text-[#003662] mb-4 leading-tight">
                Ce que vous <span className="text-[#f4ca3a]">recevez</span>
              </h2>
              <p className="text-xl text-[#003662]/80 text-center mb-16 max-w-2xl mx-auto">
                Un accompagnement <span className="text-[#f4ca3a] font-semibold">complet</span> pour transformer votre approche patrimoniale
              </p>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group flex items-center gap-4 p-6 rounded-2xl bg-[#003662] border-2 border-[#003662] hover:border-[#f4ca3a]/50 hover:shadow-xl hover:shadow-[#003662]/20 hover:-translate-y-0.5 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[#f4ca3a]/20 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[#f4ca3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-lg md:text-xl text-white font-medium">Une lecture synthétique (1 page) + une lecture détaillée</span>
                  </div>
                  <div className="group flex items-center gap-4 p-6 rounded-2xl bg-[#003662] border-2 border-[#003662] hover:border-[#f4ca3a]/50 hover:shadow-xl hover:shadow-[#003662]/20 hover:-translate-y-0.5 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[#f4ca3a]/20 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[#f4ca3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-lg md:text-xl text-white font-medium">3 priorités patrimoniales classées</span>
                  </div>
                  <div className="group flex items-center gap-4 p-6 rounded-2xl bg-[#003662] border-2 border-[#003662] hover:border-[#f4ca3a]/50 hover:shadow-xl hover:shadow-[#003662]/20 hover:-translate-y-0.5 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[#f4ca3a]/20 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[#f4ca3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-lg md:text-xl text-white font-medium">Un plan d&apos;action concret</span>
                  </div>
                  <div className="group flex items-center gap-4 p-6 rounded-2xl bg-[#003662] border-2 border-[#003662] hover:border-[#f4ca3a]/50 hover:shadow-xl hover:shadow-[#003662]/20 hover:-translate-y-0.5 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[#f4ca3a]/20 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[#f4ca3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-lg md:text-xl text-white font-medium">Un cadre de décision pour éviter les regrets</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>

      {/* Section Demander une démo - Fond vert */}
      <section className="pt-24 pb-32 md:pt-32 md:pb-40 mb-12 md:mb-16 relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.2),0_4px_15px_rgba(0,0,0,0.15)]" style={{ clipPath: 'polygon(0 8%, 100% 0%, 100% 92%, 0% 100%)' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#9FB620] via-[#a5c023] to-[#8aa61d]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-4 leading-tight">
                  Prêt à <span className="text-[#003662]">échanger ?</span>
                </h2>
                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  Prenez rendez-vous avec un expert pour découvrir comment <span className="text-[#003662] font-semibold">PatrimEmotion®</span> peut transformer votre relation au patrimoine.
                </p>
                <p className="text-white/80">
                  Remplissez le formulaire et nous vous recontactons sous 48 h pour convenir d&apos;un créneau.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <h3 className="text-xl font-semibold text-[#003662] mb-6">Demander une démo</h3>
                <form className="space-y-4" action="#" method="post">
                  <div>
                    <label htmlFor="demo-entreprise" className="block text-sm font-medium text-[#003662] mb-1">Nom entreprise *</label>
                    <input type="text" id="demo-entreprise" name="entreprise" required className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="demo-effectif" className="block text-sm font-medium text-[#003662] mb-1">Effectif *</label>
                    <input type="text" id="demo-effectif" name="effectif" required placeholder="Ex. 10-50 salariés" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="demo-activite" className="block text-sm font-medium text-[#003662] mb-1">Activité *</label>
                    <input type="text" id="demo-activite" name="activite" required placeholder="Ex. Conseil en gestion de patrimoine" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="demo-dirigeant" className="block text-sm font-medium text-[#003662] mb-1">Nom du dirigeant *</label>
                    <input type="text" id="demo-dirigeant" name="dirigeant" required className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="demo-phone" className="block text-sm font-medium text-[#003662] mb-1">Téléphone *</label>
                    <input type="tel" id="demo-phone" name="phone" required className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="demo-email" className="block text-sm font-medium text-[#003662] mb-1">Email *</label>
                    <input type="email" id="demo-email" name="email" required className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="demo-dispo" className="block text-sm font-medium text-[#003662] mb-1">Dates de disponibilités *</label>
                    <textarea id="demo-dispo" name="disponibilites" rows={3} required placeholder="Ex. Semaine du 15 mars, matinées uniquement" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-[#003662] hover:bg-[#004a7a] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                    Envoyer la demande
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 : Pourquoi différent */}
      <section className="section-alt-blue py-24 md:py-32 transition-colors relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#003662]/[0.03] to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-[#f4ca3a] text-sm font-semibold uppercase tracking-widest mb-4">
              Notre approche
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#003662] mb-4 text-center leading-tight">
              Pourquoi PatrimEmotion est <span className="text-[#f4ca3a]">différent</span>
            </h2>
            <p className="text-lg md:text-xl text-[#003662]/90 mb-12 text-center max-w-2xl mx-auto">
              Pas un simple questionnaire de risque, mais une <span className="text-[#f4ca3a] font-semibold">méthode psychométrique</span> qui mesure ce qui compte vraiment pour vos décisions.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              <div className="group rounded-2xl bg-[#003662] p-6 md:p-6 border-2 border-[#003662] hover:border-[#f4ca3a]/40 hover:shadow-xl hover:shadow-[#003662]/20 hover:-translate-y-1 transition-all duration-300">
                <p className="text-xs font-semibold text-[#f4ca3a] uppercase tracking-wider mb-3">Relation à l&apos;argent</p>
                <p className="text-white/95 leading-relaxed">Votre relation émotionnelle à l&apos;argent</p>
              </div>
              <div className="group rounded-2xl bg-[#003662] p-6 md:p-6 border-2 border-[#003662] hover:border-[#f4ca3a]/40 hover:shadow-xl hover:shadow-[#003662]/20 hover:-translate-y-1 transition-all duration-300">
                <p className="text-xs font-semibold text-[#f4ca3a] uppercase tracking-wider mb-3">Incertitude</p>
                <p className="text-white/95 leading-relaxed">Votre capacité à supporter l&apos;incertitude</p>
              </div>
              <div className="group rounded-2xl bg-[#003662] p-6 md:p-6 border-2 border-[#003662] hover:border-[#f4ca3a]/40 hover:shadow-xl hover:shadow-[#003662]/20 hover:-translate-y-1 transition-all duration-300">
                <p className="text-xs font-semibold text-[#f4ca3a] uppercase tracking-wider mb-3">Contrôle / délégation</p>
                <p className="text-white/95 leading-relaxed">Votre besoin de contrôle ou de délégation</p>
              </div>
              <div className="group rounded-2xl bg-[#003662] p-6 md:p-6 border-2 border-[#003662] hover:border-[#f4ca3a]/40 hover:shadow-xl hover:shadow-[#003662]/20 hover:-translate-y-1 transition-all duration-300">
                <p className="text-xs font-semibold text-[#f4ca3a] uppercase tracking-wider mb-3">Intergénérationnel</p>
                <p className="text-white/95 leading-relaxed">Votre projection intergénérationnelle</p>
              </div>
              <div className="group rounded-2xl bg-[#003662] p-6 md:p-6 border-2 border-[#003662] hover:border-[#f4ca3a]/40 hover:shadow-xl hover:shadow-[#003662]/20 hover:-translate-y-1 transition-all duration-300">
                <p className="text-xs font-semibold text-[#f4ca3a] uppercase tracking-wider mb-3">Résilience</p>
                <p className="text-white/95 leading-relaxed">Votre capacité de résilience face aux crises</p>
              </div>
              <div className="group rounded-2xl bg-[#003662] p-6 md:p-6 border-2 border-[#003662] hover:border-[#f4ca3a]/40 hover:shadow-xl hover:shadow-[#003662]/20 hover:-translate-y-1 transition-all duration-300">
                <p className="text-xs font-semibold text-[#f4ca3a] uppercase tracking-wider mb-3">Cohérence</p>
                <p className="text-white/95 leading-relaxed">Votre cohérence décisionnelle</p>
              </div>
            </div>
            <div className="mt-14 p-6 md:p-8 rounded-2xl bg-white border-2 border-[#003662]/10 shadow-lg shadow-[#003662]/5 max-w-2xl mx-auto text-center">
              <p className="text-xl md:text-2xl font-semibold text-[#003662]">
                <span className="text-[#f4ca3a]">Résultat :</span> un conseil patrimonial qui vous ressemble.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
