import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section - Encart sur fond blanc */}
      <section className="-mt-2 md:-mt-3 pt-0 pb-6 md:pb-8 px-4">
        <div className="hero-encart pt-24 pb-16 md:pt-32 md:pb-20 px-6 md:px-12">
          <div className="container mx-auto relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-sans text-white mb-6 leading-[1.1] tracking-tight">
                  <span className="font-normal italic">La méthode qui remet </span><span className="font-serif font-normal">l&apos;humain</span><span className="font-normal italic"> au cœur des </span><span className="font-serif font-normal">décisions patrimoniales</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Parce que les meilleurs choix ne sont pas seulement financiers : ils doivent être compatibles avec votre personnalité, vos émotions et votre vie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/test"
                    className="bg-white text-accent px-8 py-4 rounded-xl transition-all font-semibold text-lg hover:scale-105 hover:shadow-xl"
                  >
                    Faire le test / pré-diagnostic
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl transition-all font-semibold text-lg hover:bg-white/20 hover:scale-105"
                  >
                    Prendre RDV
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 : Le problème - Modern style */}
      <section className="section-dark py-24 md:py-32 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-neutral-900 mb-6 text-center leading-tight">
              Trop d&apos;informations, trop de produits, trop de peur de se tromper
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
              Vos décisions patrimoniales sont souvent reportées, prises au mauvais timing, ou génèrent un inconfort au moindre aléa de marché.
            </p>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-12 text-center">Pourquoi ?</h3>
              <div className="space-y-0 border-t border-neutral-200">
                <div className="py-6 border-b border-neutral-200">
                  <p className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">Au-delà du rationnel</p>
                  <p className="text-xl md:text-2xl text-neutral-900 leading-relaxed flex items-start gap-3">
                    <span className="text-neutral-900 shrink-0 mt-1" aria-hidden>→</span>
                    Parce que les choix financiers ne sont pas que rationnels
                  </p>
                </div>
                <div className="py-6 border-b border-neutral-200">
                  <p className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">Vos repères personnels</p>
                  <p className="text-xl md:text-2xl text-neutral-900 leading-relaxed flex items-start gap-3">
                    <span className="text-neutral-900 shrink-0 mt-1" aria-hidden>→</span>
                    Parce que votre rapport à l&apos;argent, au risque, au temps influence tout
                  </p>
                </div>
                <div className="py-6 border-b border-neutral-200">
                  <p className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">Produits vs. stratégie</p>
                  <p className="text-xl md:text-2xl text-neutral-900 leading-relaxed flex items-start gap-3">
                    <span className="text-neutral-900 shrink-0 mt-1" aria-hidden>→</span>
                    Parce qu&apos;on vous vend des produits, pas une stratégie alignée avec qui vous êtes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Encart produit : PatrimEmotion → Ce que vous recevez (même fond que hero, large) */}
      <div className="mx-4 md:mx-6 lg:mx-8 my-6 md:my-8 product-encart">
        <div className="relative z-10">
          {/* Section 2 : La solution */}
          <section className="py-24 md:py-32 transition-colors">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-6 text-center leading-tight">
                  PatrimEmotion® : le profilage émotionnel patrimonial qui transforme votre relation à votre patrimoine
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
                  <span className="font-bold">PatrimEmotion®</span> analyse votre <span className="font-bold">personnalité financière</span> et vos <span className="font-bold">émotions</span> pour les traduire en une <span className="font-bold">stratégie claire</span> :
                </p>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                  <div className="relative min-h-[88px] flex items-center p-6 rounded-xl bg-white/15 border border-white/30 backdrop-blur-lg shadow-[0_4px_16px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:bg-white/20 transition-all overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:opacity-60 before:pointer-events-none hover:before:opacity-80 card-glass-hover hover:bg-white/20">
                    <p className="relative z-10 text-lg md:text-xl text-white flex items-center gap-3">
                      <span className="text-accent-secondary font-bold">✓</span>
                      Horizon de temps adapté
                    </p>
                  </div>
                  <div className="relative min-h-[88px] flex items-center p-6 rounded-xl bg-white/15 border border-white/30 backdrop-blur-lg shadow-[0_4px_16px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.1)] transition-all overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:opacity-60 before:pointer-events-none hover:before:opacity-80 card-glass-hover hover:bg-white/20">
                    <p className="relative z-10 text-lg md:text-xl text-white flex items-center gap-3">
                      <span className="text-accent-secondary font-bold">✓</span>
                      Niveau de risque que vous vivrez bien
                    </p>
                  </div>
                  <div className="relative min-h-[88px] flex items-center p-6 rounded-xl bg-white/15 border border-white/30 backdrop-blur-lg shadow-[0_4px_16px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.1)] transition-all overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:opacity-60 before:pointer-events-none hover:before:opacity-80 card-glass-hover hover:bg-white/20">
                    <p className="relative z-10 text-lg md:text-xl text-white flex items-center gap-3">
                      <span className="text-accent-secondary font-bold">✓</span>
                      Arbitrages cohérents avec vos valeurs
                    </p>
                  </div>
                  <div className="relative min-h-[88px] flex items-center p-6 rounded-xl bg-white/15 border border-white/30 backdrop-blur-lg shadow-[0_4px_16px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.1)] transition-all overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:opacity-60 before:pointer-events-none hover:before:opacity-80 card-glass-hover hover:bg-white/20">
                    <p className="relative z-10 text-lg md:text-xl text-white flex items-center gap-3">
                      <span className="text-accent-secondary font-bold">✓</span>
                      Plan d&apos;actions concret
                    </p>
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-semibold text-white text-center">
                  Résultat : des décisions que vous comprenez, que vous assumez, et qui vous ressemblent.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 : Nos 3 solutions */}
          <section className="py-24 md:py-32 transition-colors">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-4xl md:text-6xl font-serif font-medium text-center text-white mb-4 leading-tight">
                Nos 3 solutions
              </h2>
              <p className="text-xl text-white/90 text-center mb-16 max-w-2xl mx-auto">
                Choisissez la solution qui correspond à votre profil
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Link href="/solutions/particuliers" className="relative flex flex-col rounded-2xl p-8 bg-white/15 border border-white/30 backdrop-blur-lg shadow-[0_4px_16px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.1)] transition-all group hover:bg-white/20 hover:scale-105 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:opacity-60 before:pointer-events-none hover:before:opacity-80 card-glass-hover h-full">
                  <div className="relative z-10 text-6xl mb-6">👤</div>
                  <h3 className="relative z-10 text-2xl md:text-3xl font-serif font-medium text-white mb-4 group-hover:text-accent-secondary transition-colors">
                    Particuliers & Dirigeants
                  </h3>
                  <p className="relative z-10 text-white/90 mb-6 text-lg leading-relaxed flex-1">
                    Un bilan patrimonial personnalisé qui révèle votre profil émotionnel
                  </p>
                  <span className="relative z-10 text-accent-secondary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all mt-auto">
                    Découvrir
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                <Link href="/solutions/professionnels" className="relative flex flex-col rounded-2xl p-8 bg-white/15 border border-white/30 backdrop-blur-lg shadow-[0_4px_16px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.1)] transition-all group hover:bg-white/20 hover:scale-105 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:opacity-60 before:pointer-events-none hover:before:opacity-80 card-glass-hover h-full">
                  <div className="relative z-10 text-6xl mb-6">💼</div>
                  <h3 className="relative z-10 text-2xl md:text-3xl font-serif font-medium text-white mb-4 group-hover:text-accent-secondary transition-colors">
                    Professionnels CGP/Courtiers
                  </h3>
                  <p className="relative z-10 text-white/90 mb-6 text-lg leading-relaxed flex-1">
                    Obtenez la licence PatrimEmotion® et différenciez votre conseil
                  </p>
                  <span className="relative z-10 text-accent-secondary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all mt-auto">
                    Devenir licencié
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                <Link href="/solutions/institutionnels" className="relative flex flex-col rounded-2xl p-8 bg-white/15 border border-white/30 backdrop-blur-lg shadow-[0_4px_16px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.1)] transition-all group hover:bg-white/20 hover:scale-105 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:opacity-60 before:pointer-events-none hover:before:opacity-80 card-glass-hover h-full">
                  <div className="relative z-10 text-6xl mb-6">🏢</div>
                  <h3 className="relative z-10 text-2xl md:text-3xl font-serif font-medium text-white mb-4 group-hover:text-accent-secondary transition-colors">
                    Institutionnels & Réseaux
                  </h3>
                  <p className="relative z-10 text-white/90 mb-6 text-lg leading-relaxed flex-1">
                    Déployez la méthode en marque blanche dans votre organisation
                  </p>
                  <span className="relative z-10 text-accent-secondary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all mt-auto">
                    Découvrir les partenariats
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </section>

          {/* Section 4 : Comment ça se passe */}
          <section className="py-24 md:py-32 transition-colors">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-4xl md:text-6xl font-serif font-medium text-center text-white mb-4 leading-tight">
                Comment ça se passe ?
              </h2>
              <p className="text-xl text-white/90 text-center mb-16 max-w-2xl mx-auto">
                Un processus simple en 3 étapes pour transformer votre relation au patrimoine
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="relative text-center p-8 rounded-2xl bg-white/15 border border-white/30 backdrop-blur-lg shadow-[0_4px_16px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.1)] transition-all overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:opacity-60 before:pointer-events-none hover:before:opacity-80 card-glass-hover hover:bg-white/20">
                  <div className="relative z-10 bg-white/20 text-white rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold mx-auto mb-6 border border-white/30">
                    1
                  </div>
                  <h3 className="relative z-10 text-2xl md:text-3xl font-serif font-medium text-white mb-4">
                    Entretien découverte
                  </h3>
                  <p className="relative z-10 text-white/90 text-lg leading-relaxed">
                    Un échange humain pour comprendre votre situation, vos objectifs, vos craintes.
                  </p>
                </div>
                <div className="relative text-center p-8 rounded-2xl bg-white/15 border border-white/30 backdrop-blur-lg shadow-[0_4px_16px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.1)] transition-all overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:opacity-60 before:pointer-events-none hover:before:opacity-80 card-glass-hover hover:bg-white/20">
                  <div className="relative z-10 bg-white/20 text-white rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold mx-auto mb-6 border border-white/30">
                    2
                  </div>
                  <h3 className="relative z-10 text-2xl md:text-3xl font-serif font-medium text-white mb-4">
                    Profil + lecture
                  </h3>
                  <p className="relative z-10 text-white/90 text-lg leading-relaxed">
                    Votre profil émotionnel patrimonial est établi et décrypté avec vous.
                  </p>
                </div>
                <div className="relative text-center p-8 rounded-2xl bg-white/15 border border-white/30 backdrop-blur-lg shadow-[0_4px_16px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.1)] transition-all overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:opacity-60 before:pointer-events-none hover:before:opacity-80 card-glass-hover hover:bg-white/20">
                  <div className="relative z-10 bg-white/20 text-white rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold mx-auto mb-6 border border-white/30">
                    3
                  </div>
                  <h3 className="relative z-10 text-2xl md:text-3xl font-serif font-medium text-white mb-4">
                    Plan d&apos;actions + mise en œuvre
                  </h3>
                  <p className="relative z-10 text-white/90 text-lg leading-relaxed">
                    Un plan concret, des priorités claires, un suivi personnalisé.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 : Ce que vous recevez */}
          <section className="py-24 md:py-32 transition-colors">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-4xl md:text-6xl font-serif font-medium text-center text-white mb-4 leading-tight">
                Ce que vous recevez
              </h2>
              <p className="text-xl text-white/90 text-center mb-16 max-w-2xl mx-auto">
                Un accompagnement complet pour transformer votre approche patrimoniale
              </p>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative min-h-[88px] flex items-center p-6 rounded-xl bg-white/15 border border-white/30 backdrop-blur-lg shadow-[0_4px_16px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.1)] transition-all overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:opacity-60 before:pointer-events-none hover:before:opacity-80 card-glass-hover hover:bg-white/20">
                    <div className="relative z-10 flex items-center gap-4">
                      <span className="text-accent-secondary text-3xl font-bold shrink-0">✓</span>
                      <span className="text-xl text-white">Une lecture synthétique (1 page) + une lecture détaillée</span>
                    </div>
                  </div>
                  <div className="relative min-h-[88px] flex items-center p-6 rounded-xl bg-white/15 border border-white/30 backdrop-blur-lg shadow-[0_4px_16px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.1)] transition-all overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:opacity-60 before:pointer-events-none hover:before:opacity-80 card-glass-hover hover:bg-white/20">
                    <div className="relative z-10 flex items-center gap-4">
                      <span className="text-accent-secondary text-3xl font-bold shrink-0">✓</span>
                      <span className="text-xl text-white">3 priorités patrimoniales classées</span>
                    </div>
                  </div>
                  <div className="relative min-h-[88px] flex items-center p-6 rounded-xl bg-white/15 border border-white/30 backdrop-blur-lg shadow-[0_4px_16px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.1)] transition-all overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:opacity-60 before:pointer-events-none hover:before:opacity-80 card-glass-hover hover:bg-white/20">
                    <div className="relative z-10 flex items-center gap-4">
                      <span className="text-accent-secondary text-3xl font-bold shrink-0">✓</span>
                      <span className="text-xl text-white">Un plan d&apos;action concret</span>
                    </div>
                  </div>
                  <div className="relative min-h-[88px] flex items-center p-6 rounded-xl bg-white/15 border border-white/30 backdrop-blur-lg shadow-[0_4px_16px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.1)] transition-all overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:opacity-60 before:pointer-events-none hover:before:opacity-80 card-glass-hover hover:bg-white/20">
                    <div className="relative z-10 flex items-center gap-4">
                      <span className="text-accent-secondary text-3xl font-bold shrink-0">✓</span>
                      <span className="text-xl text-white">Un cadre de décision pour éviter les regrets</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Section 6 : Témoignages - Modern style */}
      <section className="section-dark py-24 md:py-32 transition-colors">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-center text-neutral-900 mb-4 leading-tight">
            Preuves sociales
          </h2>
          <p className="text-xl text-neutral-600 text-center mb-16 max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de PatrimEmotion®
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="p-10 rounded-2xl bg-neutral-50 border border-neutral-200">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl text-neutral-900 italic mb-8 leading-relaxed font-serif">
                &quot;Grâce à PatrimEmotion®, j&apos;ai enfin compris pourquoi certaines décisions me mettaient mal à l&apos;aise. Aujourd&apos;hui, je sais où je vais.&quot;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-secondary/20 flex items-center justify-center text-accent-secondary font-bold text-lg">
                  C
                </div>
                <div>
                  <p className="text-neutral-900 font-semibold text-lg">Client particulier</p>
                  <p className="text-neutral-600">48 ans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 : Pourquoi différent - même style que "Trop d'informations" */}
      <section className="section-dark py-24 md:py-32 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-neutral-900 mb-6 text-center leading-tight">
              Pourquoi PatrimEmotion est différent
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
              PatrimEmotion® n&apos;est pas un simple questionnaire de risque réglementaire. C&apos;est une méthode structurée qui mesure :
            </p>
            <div className="max-w-5xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-12 text-center">Une approche psychométrique appliquée au patrimoine</h3>
              <div className="grid md:grid-cols-2 gap-0 border-t border-neutral-200">
                <div className="py-6 pr-6 md:pr-8 border-b border-r border-neutral-200">
                  <p className="text-sm font-medium text-accent-secondary uppercase tracking-wide mb-2">Relation à l&apos;argent</p>
                  <p className="text-xl md:text-2xl text-neutral-900 leading-relaxed flex items-start gap-3">
                    <span className="text-neutral-900 shrink-0 mt-1" aria-hidden>→</span>
                    Votre relation émotionnelle à l&apos;argent
                  </p>
                </div>
                <div className="py-6 pl-6 md:pl-8 border-b border-neutral-200">
                  <p className="text-sm font-medium text-accent-secondary uppercase tracking-wide mb-2">Incertitude</p>
                  <p className="text-xl md:text-2xl text-neutral-900 leading-relaxed flex items-start gap-3">
                    <span className="text-neutral-900 shrink-0 mt-1" aria-hidden>→</span>
                    Votre capacité à supporter l&apos;incertitude
                  </p>
                </div>
                <div className="py-6 pr-6 md:pr-8 border-b border-r border-neutral-200">
                  <p className="text-sm font-medium text-accent-secondary uppercase tracking-wide mb-2">Contrôle / délégation</p>
                  <p className="text-xl md:text-2xl text-neutral-900 leading-relaxed flex items-start gap-3">
                    <span className="text-neutral-900 shrink-0 mt-1" aria-hidden>→</span>
                    Votre besoin de contrôle ou de délégation
                  </p>
                </div>
                <div className="py-6 pl-6 md:pl-8 border-b border-neutral-200">
                  <p className="text-sm font-medium text-accent-secondary uppercase tracking-wide mb-2">Intergénérationnel</p>
                  <p className="text-xl md:text-2xl text-neutral-900 leading-relaxed flex items-start gap-3">
                    <span className="text-neutral-900 shrink-0 mt-1" aria-hidden>→</span>
                    Votre projection intergénérationnelle
                  </p>
                </div>
                <div className="py-6 pr-6 md:pr-8 border-b border-r border-neutral-200 md:border-b-0">
                  <p className="text-sm font-medium text-accent-secondary uppercase tracking-wide mb-2">Résilience</p>
                  <p className="text-xl md:text-2xl text-neutral-900 leading-relaxed flex items-start gap-3">
                    <span className="text-neutral-900 shrink-0 mt-1" aria-hidden>→</span>
                    Votre capacité de résilience face aux crises
                  </p>
                </div>
                <div className="py-6 pl-6 md:pl-8 border-b md:border-b-0 border-neutral-200">
                  <p className="text-sm font-medium text-accent-secondary uppercase tracking-wide mb-2">Cohérence</p>
                  <p className="text-xl md:text-2xl text-neutral-900 leading-relaxed flex items-start gap-3">
                    <span className="text-neutral-900 shrink-0 mt-1" aria-hidden>→</span>
                    Votre cohérence décisionnelle
                  </p>
                </div>
              </div>
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-neutral-900 text-center mt-12">
              Résultat : un conseil patrimonial qui vous ressemble.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
