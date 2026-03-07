import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section - Inspiré Capital Explorer : gauche texte + CTA orange, droite visuel, bas stats */}
      <section className="-mt-2 md:-mt-3 pt-0 pb-0 px-4">
        <div className="hero-encart pt-16 pb-0 md:pt-20 md:pb-0 px-6 md:px-12">
          <div className="container mx-auto relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[420px] md:min-h-[480px]">
                {/* Gauche : titre, description, CTA */}
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans text-white mb-5 leading-[1.15] tracking-tight">
                    <span className="font-normal">La </span>
                    <span className="font-bold text-[#f4ca3a]">méthode patrimoniale</span>
                    <span className="font-normal"> qui remet l&apos;</span>
                    <span className="font-bold text-[#f4ca3a]">humain</span>
                    <span className="font-normal"> au cœur des décisions</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
                    Qui simplifie vos choix, assure la cohérence avec votre personnalité et donne du sens à votre patrimoine.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-6 py-3.5 rounded-lg transition-all text-base"
                  >
                    Demandez une démo personnalisée <span className="text-sm font-normal">(15 min)</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <p className="text-sm text-white/80 mt-4">
                    Vous bénéficierez d&apos;un échange personnalisé sans engagement.
                  </p>
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
            <div className="border-t border-white/10 mt-12 md:mt-16 pt-8 pb-6 md:pb-8">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-[#f4ca3a]">+20</p>
                    <p className="text-white/90 text-sm md:text-base mt-1">années d&apos;expertise</p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-[#f4ca3a]">+500</p>
                    <p className="text-white/90 text-sm md:text-base mt-1">profils réalisés</p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-[#f4ca3a]">3</p>
                    <p className="text-white/90 text-sm md:text-base mt-1">niveaux de certification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 : Le problème - Pourquoi ? - Fond blanc, texte bleu à gauche, encart bleu à droite */}
      <section className="section-dark py-24 md:py-32 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#003662] mb-6 leading-tight">
                  Trop d&apos;informations, trop de produits, trop de <span className="text-[#f4ca3a]">peur de se tromper</span>
                </h2>
                <p className="text-xl md:text-2xl text-[#003662]/90 leading-relaxed">
                  Vos décisions patrimoniales sont souvent reportées, prises au mauvais timing, ou génèrent un inconfort au moindre aléa de marché.
                </p>
              </div>
              <div className="bg-[#003662] rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8"><span className="text-[#f4ca3a]">Pourquoi ?</span></h3>
                <div className="space-y-0 border-t border-white/20">
                  <div className="py-5 border-b border-white/20">
                    <p className="text-sm font-medium text-white/80 uppercase tracking-wide mb-2">Au-delà du rationnel</p>
                    <p className="text-lg text-white leading-relaxed">
                      Parce que les choix financiers ne sont pas que rationnels
                    </p>
                  </div>
                  <div className="py-5 border-b border-white/20">
                    <p className="text-sm font-medium text-white/80 uppercase tracking-wide mb-2">Vos repères personnels</p>
                    <p className="text-lg text-white leading-relaxed">
                      Parce que votre rapport à l&apos;argent, au risque, au temps influence tout
                    </p>
                  </div>
                  <div className="py-5 border-b border-white/20">
                    <p className="text-sm font-medium text-white/80 uppercase tracking-wide mb-2">Produits vs. stratégie</p>
                    <p className="text-lg text-white leading-relaxed">
                      Parce qu&apos;on vous vend des produits, pas une stratégie alignée avec qui vous êtes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections produit : alternance bleu / blanc */}
      <div className="my-0">
          {/* Section 2 : PatrimEmotion : le... - FOND BLEU */}
          <section className="bg-[#003662] py-24 md:py-32 transition-colors">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6 leading-tight">
                      <span className="text-[#f4ca3a]">PatrimEmotion® :</span> le profilage émotionnel patrimonial qui transforme votre relation à votre patrimoine
                    </h2>
                    <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed">
                      PatrimEmotion® analyse votre <span className="text-[#f4ca3a] font-bold">personnalité financière</span> et vos <span className="text-[#f4ca3a] font-bold">émotions</span> pour les traduire en une <span className="font-bold">stratégie claire</span> :
                    </p>
                    <p className="text-xl md:text-2xl font-semibold text-white">
                      <span className="text-[#f4ca3a]">Résultat :</span> des décisions que vous comprenez, que vous assumez, et qui vous ressemblent.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="min-h-[88px] flex items-center p-6 rounded-xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all hover:shadow-md">
                    <p className="text-lg md:text-xl text-[#003662] flex items-center gap-3">
                      <span className="text-[#9FB620] font-bold">✓</span>
                      Horizon de temps adapté
                    </p>
                  </div>
                  <div className="min-h-[88px] flex items-center p-6 rounded-xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all hover:shadow-md">
                    <p className="text-lg md:text-xl text-[#003662] flex items-center gap-3">
                      <span className="text-[#9FB620] font-bold">✓</span>
                      Niveau de risque que vous vivrez bien
                    </p>
                  </div>
                  <div className="min-h-[88px] flex items-center p-6 rounded-xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all hover:shadow-md">
                    <p className="text-lg md:text-xl text-[#003662] flex items-center gap-3">
                      <span className="text-[#9FB620] font-bold">✓</span>
                      Arbitrages cohérents avec vos valeurs
                    </p>
                  </div>
                  <div className="min-h-[88px] flex items-center p-6 rounded-xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all hover:shadow-md">
                    <p className="text-lg md:text-xl text-[#003662] flex items-center gap-3">
                      <span className="text-[#9FB620] font-bold">✓</span>
                      Plan d&apos;actions concret
                    </p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 : Nos 3 solutions - FOND BLANC */}
          <section className="bg-white py-24 md:py-32 transition-colors">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-4xl md:text-6xl font-serif font-medium text-center text-[#003662] mb-4 leading-tight">
                Nos <span className="text-[#f4ca3a]">3 solutions</span>
              </h2>
              <p className="text-xl text-[#003662] text-center mb-16 max-w-2xl mx-auto">
                Choisissez la solution qui correspond à <span className="text-[#f4ca3a] font-semibold">votre profil</span>
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Link href="/solutions/particuliers" className="relative flex flex-col rounded-2xl p-8 bg-white shadow-lg transition-all group hover:shadow-xl hover:scale-105 h-full">
                  <div className="relative z-10 text-6xl mb-6">👤</div>
                  <h3 className="relative z-10 text-2xl md:text-3xl font-serif font-medium text-[#003662] mb-4 group-hover:text-[#004a7a] transition-colors">
                    Particuliers & Dirigeants
                  </h3>
                  <p className="relative z-10 text-[#003662] mb-6 text-lg leading-relaxed flex-1">
                    Un bilan patrimonial personnalisé qui révèle votre profil émotionnel
                  </p>
                  <span className="relative z-10 text-[#003662] group-hover:text-[#9FB620] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all mt-auto">
                    Découvrir
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                <Link href="/solutions/professionnels" className="relative flex flex-col rounded-2xl p-8 bg-white shadow-lg transition-all group hover:shadow-xl hover:scale-105 h-full">
                  <div className="relative z-10 text-6xl mb-6">💼</div>
                  <h3 className="relative z-10 text-2xl md:text-3xl font-serif font-medium text-[#003662] mb-4 group-hover:text-[#004a7a] transition-colors">
                    Professionnels CGP/Courtiers
                  </h3>
                  <p className="relative z-10 text-[#003662] mb-6 text-lg leading-relaxed flex-1">
                    Obtenez la licence PatrimEmotion® et différenciez votre conseil
                  </p>
                  <span className="relative z-10 text-[#003662] group-hover:text-[#9FB620] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all mt-auto">
                    Devenir licencié
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                <Link href="/solutions/institutionnels" className="relative flex flex-col rounded-2xl p-8 bg-white shadow-lg transition-all group hover:shadow-xl hover:scale-105 h-full">
                  <div className="relative z-10 text-6xl mb-6">🏢</div>
                  <h3 className="relative z-10 text-2xl md:text-3xl font-serif font-medium text-[#003662] mb-4 group-hover:text-[#004a7a] transition-colors">
                    Institutionnels & Réseaux
                  </h3>
                  <p className="relative z-10 text-[#003662] mb-6 text-lg leading-relaxed flex-1">
                    Déployez la méthode en marque blanche dans votre organisation
                  </p>
                  <span className="relative z-10 text-[#003662] group-hover:text-[#9FB620] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all mt-auto">
                    Découvrir les partenariats
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </section>

          {/* Section 4 : Comment ça se passe - FOND BLEU */}
          <section className="bg-[#003662] py-24 md:py-32 transition-colors">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-4xl md:text-6xl font-serif font-medium text-center text-white mb-4 leading-tight">
                Comment ça se passe ?
              </h2>
              <p className="text-xl text-white/90 text-center mb-16 max-w-2xl mx-auto">
                Un processus simple en <span className="text-[#f4ca3a] font-semibold">3 étapes</span> pour transformer votre relation au patrimoine
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="relative text-center p-8 rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all hover:shadow-md">
                  <div className="relative z-10 bg-[#f4ca3a] text-[#003662] rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold mx-auto mb-6 border-2 border-[#f4ca3a]">
                    1
                  </div>
                  <h3 className="relative z-10 text-2xl md:text-3xl font-serif font-medium text-[#003662] mb-4">
                    Entretien découverte
                  </h3>
                  <p className="relative z-10 text-[#003662] text-lg leading-relaxed">
                    Un échange humain pour comprendre votre situation, vos objectifs, vos craintes.
                  </p>
                </div>
                <div className="relative text-center p-8 rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all hover:shadow-md">
                  <div className="relative z-10 bg-[#f4ca3a] text-[#003662] rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold mx-auto mb-6 border-2 border-[#f4ca3a]">
                    2
                  </div>
                  <h3 className="relative z-10 text-2xl md:text-3xl font-serif font-medium text-[#003662] mb-4">
                    Profil + lecture
                  </h3>
                  <p className="relative z-10 text-[#003662] text-lg leading-relaxed">
                    Votre profil émotionnel patrimonial est établi et décrypté avec vous.
                  </p>
                </div>
                <div className="relative text-center p-8 rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all hover:shadow-md">
                  <div className="relative z-10 bg-[#f4ca3a] text-[#003662] rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold mx-auto mb-6 border-2 border-[#f4ca3a]">
                    3
                  </div>
                  <h3 className="relative z-10 text-2xl md:text-3xl font-serif font-medium text-[#003662] mb-4">
                    Plan d&apos;actions + mise en œuvre
                  </h3>
                  <p className="relative z-10 text-[#003662] text-lg leading-relaxed">
                    Un plan concret, des priorités claires, un suivi personnalisé.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 : Ce que vous recevez - FOND BLANC */}
          <section className="bg-white py-24 md:py-32 transition-colors">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-4xl md:text-6xl font-serif font-medium text-center text-[#003662] mb-4 leading-tight">
                Ce que vous <span className="text-[#f4ca3a]">recevez</span>
              </h2>
              <p className="text-xl text-[#003662] text-center mb-16 max-w-2xl mx-auto">
                Un accompagnement <span className="text-[#f4ca3a] font-semibold">complet</span> pour transformer votre approche patrimoniale
              </p>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative min-h-[88px] flex items-center p-6 rounded-xl bg-[#003662] transition-all hover:shadow-md">
                    <div className="relative z-10 flex items-center gap-4">
                      <span className="text-[#9FB620] text-3xl font-bold shrink-0">✓</span>
                      <span className="text-xl text-white">Une lecture synthétique (1 page) + une lecture détaillée</span>
                    </div>
                  </div>
                  <div className="relative min-h-[88px] flex items-center p-6 rounded-xl bg-[#003662] transition-all hover:shadow-md">
                    <div className="relative z-10 flex items-center gap-4">
                      <span className="text-[#9FB620] text-3xl font-bold shrink-0">✓</span>
                      <span className="text-xl text-white">3 priorités patrimoniales classées</span>
                    </div>
                  </div>
                  <div className="relative min-h-[88px] flex items-center p-6 rounded-xl bg-[#003662] transition-all hover:shadow-md">
                    <div className="relative z-10 flex items-center gap-4">
                      <span className="text-[#9FB620] text-3xl font-bold shrink-0">✓</span>
                      <span className="text-xl text-white">Un plan d&apos;action concret</span>
                    </div>
                  </div>
                  <div className="relative min-h-[88px] flex items-center p-6 rounded-xl bg-[#003662] transition-all hover:shadow-md">
                    <div className="relative z-10 flex items-center gap-4">
                      <span className="text-[#9FB620] text-3xl font-bold shrink-0">✓</span>
                      <span className="text-xl text-white">Un cadre de décision pour éviter les regrets</span>
                    </div>
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
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
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

      {/* Section 6 : Preuves sociales - Encart */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto rounded-2xl bg-[#003662] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
          <div className="px-6 md:px-12 pt-12 md:pt-16 pb-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-center text-white mb-4 leading-tight">
              <span className="text-[#f4ca3a]">Preuves sociales</span>
            </h2>
            <p className="text-xl text-white/90 text-center mb-12 max-w-2xl mx-auto">
              Découvrez ce que nos clients disent de <span className="text-[#f4ca3a] font-semibold">PatrimEmotion®</span>
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="p-8 md:p-10 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <blockquote className="text-2xl md:text-3xl lg:text-4xl text-[#003662] italic mb-8 leading-relaxed font-serif">
                  &quot;Grâce à <span className="text-[#f4ca3a] not-italic">PatrimEmotion®,</span> j&apos;ai enfin compris pourquoi certaines décisions me mettaient mal à l&apos;aise. Aujourd&apos;hui, je sais où je vais.&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#003662]/10 flex items-center justify-center text-[#003662] font-bold text-lg">
                    C
                  </div>
                  <div>
                    <p className="text-[#003662] font-semibold text-lg">Client particulier</p>
                    <p className="text-[#003662]">48 ans</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 : Pourquoi différent - Refonte cartes */}
      <section className="section-alt-blue py-24 md:py-32 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#003662] mb-4 text-center leading-tight">
              Pourquoi PatrimEmotion est <span className="text-[#f4ca3a]">différent</span>
            </h2>
            <p className="text-lg md:text-xl text-[#003662] mb-4 text-center max-w-2xl mx-auto">
              Pas un simple questionnaire de risque, mais une <span className="text-[#f4ca3a] font-semibold">méthode psychométrique</span> qui mesure ce qui compte vraiment pour vos décisions.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-12">
              <div className="rounded-xl bg-[#003662] p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <p className="text-xs font-semibold text-[#f4ca3a] uppercase tracking-wider mb-2">Relation à l&apos;argent</p>
                <p className="text-white leading-relaxed">Votre relation émotionnelle à l&apos;argent</p>
              </div>
              <div className="rounded-xl bg-[#003662] p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <p className="text-xs font-semibold text-[#f4ca3a] uppercase tracking-wider mb-2">Incertitude</p>
                <p className="text-white leading-relaxed">Votre capacité à supporter l&apos;incertitude</p>
              </div>
              <div className="rounded-xl bg-[#003662] p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <p className="text-xs font-semibold text-[#f4ca3a] uppercase tracking-wider mb-2">Contrôle / délégation</p>
                <p className="text-white leading-relaxed">Votre besoin de contrôle ou de délégation</p>
              </div>
              <div className="rounded-xl bg-[#003662] p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <p className="text-xs font-semibold text-[#f4ca3a] uppercase tracking-wider mb-2">Intergénérationnel</p>
                <p className="text-white leading-relaxed">Votre projection intergénérationnelle</p>
              </div>
              <div className="rounded-xl bg-[#003662] p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <p className="text-xs font-semibold text-[#f4ca3a] uppercase tracking-wider mb-2">Résilience</p>
                <p className="text-white leading-relaxed">Votre capacité de résilience face aux crises</p>
              </div>
              <div className="rounded-xl bg-[#003662] p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <p className="text-xs font-semibold text-[#f4ca3a] uppercase tracking-wider mb-2">Cohérence</p>
                <p className="text-white leading-relaxed">Votre cohérence décisionnelle</p>
              </div>
            </div>
            <p className="text-xl md:text-2xl font-semibold text-[#003662] text-center mt-12 max-w-2xl mx-auto">
              <span className="text-[#f4ca3a]">Résultat :</span> un conseil patrimonial qui vous ressemble.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
