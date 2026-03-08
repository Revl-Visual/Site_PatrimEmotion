import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le concept | PatrimEmotion®",
  description: "Remettons l'humain au cœur des décisions patrimoniales. Le concept PatrimEmotion®.",
};

export default function MethodePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Colonne gauche : texte et CTA */}
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6 leading-tight">
                Remettons <span className="text-[#f4ca3a]">l&apos;humain</span> au cœur des décisions patrimoniales.
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Parce que les <span className="text-[#f4ca3a]">meilleurs choix</span> ne sont pas seulement <span className="text-[#f4ca3a]">financiers</span> : ils doivent être <span className="text-[#f4ca3a]">compatibles</span> avec <span className="text-[#f4ca3a]">votre personnalité, vos émotions, votre vie.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-8 py-3.5 rounded-lg transition-all text-base"
                >
                  Nous contacter
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-[#003662] font-semibold px-8 py-3.5 rounded-lg transition-all text-base border-2 border-white"
                >
                  Prendre RDV
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
                </div>
                {/* Colonne droite : image */}
                <div className="hidden lg:block">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#9FB620]/20 to-[#003662]/20 flex items-center justify-center">
                      <p className="text-white/50 text-sm">Image à ajouter</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Le problème — inspi 2 colonnes : image ~40 %, fond bleu + texte ~60 % */}
        <section className="min-h-[420px] flex bg-[#003662]">
          <div className="grid w-full md:grid-cols-[2fr_2.4fr] min-h-[420px]">
            {/* Zone image */}
            <div className="relative h-[280px] md:h-auto md:min-h-[420px] bg-[#003662] rounded-tr-2xl md:rounded-tr-3xl overflow-hidden" aria-hidden>
              <div className="absolute inset-0 bg-gradient-to-br from-[#003662] via-[#004a7a] to-[#003662] flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-white/10 flex items-center justify-center border-2 border-dashed border-white/30">
                    <svg className="w-10 h-10 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-white/60 text-sm font-medium">Image à ajouter</p>
                  <p className="text-white/40 text-xs mt-1">Le problème</p>
                </div>
              </div>
            </div>
            <div className="bg-[#003662] flex items-center py-14 md:py-20 px-6 md:px-12 lg:px-16">
              <div className="w-full max-w-xl">
                <span className="inline-block px-4 py-1.5 rounded-md border border-white/30 text-white/80 text-sm font-medium tracking-widest uppercase mb-6">
                  Contexte
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-10">
                  <span className="text-[#f4ca3a]">Le</span> <span className="text-[#f4ca3a]">problème</span>
                </h2>
                <ul className="font-sans text-white/90 text-base md:text-lg space-y-0">
                  <li className="flex items-center gap-4 py-4 border-b border-white/20 first:pt-0">
                    <span className="text-red-400 text-lg font-semibold shrink-0">✗</span>
                    <span>Négligence de biais humains importants</span>
                  </li>
                  <li className="flex items-center gap-4 py-4 border-b border-white/20">
                    <span className="text-red-400 text-lg font-semibold shrink-0">✗</span>
                    <span>Rationnalité totale impossible</span>
                  </li>
                  <li className="flex items-center gap-4 py-4 border-b border-white/20">
                    <span className="text-red-400 text-lg font-semibold shrink-0">✗</span>
                    <span>Désalignement avec sa personne</span>
                  </li>
                  <li className="flex items-center gap-4 py-4 border-b border-white/20">
                    <span className="text-red-400 text-lg font-semibold shrink-0">✗</span>
                    <span>Stress, peur, perte de repères</span>
                  </li>
                  <li className="flex items-center gap-4 py-4 border-b border-white/20 last:border-0">
                    <span className="text-red-400 text-lg font-semibold shrink-0">✗</span>
                    <span>Gestion patrimoniale non alignée</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* La solution — même format */}
        <section className="min-h-[420px] flex bg-[#003662]">
          <div className="grid w-full md:grid-cols-[2fr_2.4fr] min-h-[420px]">
            <div className="relative h-[280px] md:h-auto md:min-h-[420px] order-2 md:order-1 bg-white/15 rounded-br-2xl md:rounded-br-3xl overflow-hidden" aria-hidden>
              <div className="absolute inset-0 bg-gradient-to-br from-[#003662]/90 via-[#004a7a]/80 to-[#003662]/90 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-white/10 flex items-center justify-center border-2 border-dashed border-white/30">
                    <svg className="w-10 h-10 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-white/60 text-sm font-medium">Image à ajouter</p>
                  <p className="text-white/40 text-xs mt-1">La solution</p>
                </div>
              </div>
            </div>
            <div className="bg-[#003662] flex items-center py-14 md:py-20 px-6 md:px-12 lg:px-16 order-1 md:order-2">
              <div className="w-full max-w-xl">
                <span className="inline-block px-4 py-1.5 rounded-md border border-white/30 text-white/80 text-sm font-medium tracking-widest uppercase mb-6">
                  Notre approche
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-10">
                  <span className="text-[#f4ca3a]">La</span> <span className="text-[#f4ca3a]">solution</span>
                </h2>
                <ul className="font-sans text-white/90 text-base md:text-lg space-y-0">
                  <li className="flex items-center gap-4 py-4 border-b border-white/20 first:pt-0">
                    <span className="text-[#9FB620] text-lg font-semibold shrink-0">✓</span>
                    <span>Intégration des notions émotionnelles</span>
                  </li>
                  <li className="flex items-center gap-4 py-4 border-b border-white/20">
                    <span className="text-[#9FB620] text-lg font-semibold shrink-0">✓</span>
                    <span>Acceptation de son profil au sein de sa gestion</span>
                  </li>
                  <li className="flex items-center gap-4 py-4 border-b border-white/20">
                    <span className="text-[#9FB620] text-lg font-semibold shrink-0">✓</span>
                    <span>Alignement réel avec soi</span>
                  </li>
                  <li className="flex items-center gap-4 py-4 border-b border-white/20">
                    <span className="text-[#9FB620] text-lg font-semibold shrink-0">✓</span>
                    <span>Sérénité, satisfaction</span>
                  </li>
                  <li className="flex items-center gap-4 py-4 border-b border-white/20 last:border-0">
                    <span className="text-[#9FB620] text-lg font-semibold shrink-0">✓</span>
                    <span>Gestion patrimoniale alignée</span>
                  </li>
                </ul>
                <p className="mt-8 text-white/80 text-sm md:text-base leading-relaxed">
                  Avec <span className="text-[#f4ca3a] font-semibold">PatrimEmotion®</span> et le profilage émotionnel patrimonial, traduisez vos envies en une stratégie claire.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fondements conceptuels — fond blanc en diagonal */}
        <section className="py-20 md:py-28 overflow-hidden bg-[#003662]">
          <div
            className="section-alt-blue py-16 md:py-24 -skew-y-2"
            style={{
              boxShadow: "inset 0 14px 32px rgba(0, 54, 98, 0.2), inset 0 -14px 32px rgba(0, 54, 98, 0.2)",
            }}
          >
            <div className="container mx-auto px-4 max-w-4xl skew-y-2">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#003662] mb-8">
                Fondements <span className="text-[#f4ca3a]">conceptuels</span>
              </h2>
              <p className="text-[#003662]/90 text-lg mb-6">
                La méthode s&apos;appuie notamment sur :
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-[#003662]/90 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                  <span>la psychologie comportementale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                  <span>l&apos;analyse des biais cognitifs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                  <span>le rapport à l&apos;argent</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                  <span>la tolérance émotionnelle au risque</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                  <span>la projection dans le temps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                  <span>le rapport au contrôle, à la délégation et à la transmission</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Les profils PatrimEmotion® — fond bleu */}
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6">
              Les profils <span className="text-[#f4ca3a]">PatrimEmotion®</span>
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Il n&apos;existe ni bon ni mauvais profil patrimonial.<br />
              Chaque profil traduit une manière singulière de percevoir l&apos;argent, le risque, le temps et la sécurité.
            </p>

            <h3 className="text-2xl font-serif font-semibold text-white mb-6">
              Les 8 profils
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <div className="rounded-xl bg-white p-5 shadow-lg">
                <div className="w-full h-32 mb-4 bg-[#003662]/10 rounded-lg overflow-hidden">
                  {/* Visuel profil Sécuritaire */}
                </div>
                <p className="text-sm font-semibold text-[#003662] uppercase tracking-wider mb-2">Sécuritaire</p>
                <p className="text-[#003662] text-sm">Harmonieux</p>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-lg">
                <div className="w-full h-32 mb-4 bg-[#003662]/10 rounded-lg overflow-hidden">
                  {/* Visuel profil Visionnaire */}
                </div>
                <p className="text-sm font-semibold text-[#003662] uppercase tracking-wider mb-2">Visionnaire</p>
                <p className="text-[#003662] text-sm">Structuré</p>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-lg">
                <div className="w-full h-32 mb-4 bg-[#003662]/10 rounded-lg overflow-hidden">
                  {/* Visuel profil Explorateur */}
                </div>
                <p className="text-sm font-semibold text-[#003662] uppercase tracking-wider mb-2">Explorateur</p>
                <p className="text-[#003662] text-sm">Raisonné</p>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-lg">
                <div className="w-full h-32 mb-4 bg-[#003662]/10 rounded-lg overflow-hidden">
                  {/* Visuel profil Protecteur */}
                </div>
                <p className="text-sm font-semibold text-[#003662] uppercase tracking-wider mb-2">Protecteur</p>
                <p className="text-[#003662] text-sm">Engagé</p>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-lg">
                <div className="w-full h-32 mb-4 bg-[#003662]/10 rounded-lg overflow-hidden">
                  {/* Visuel profil Décideur */}
                </div>
                <p className="text-sm font-semibold text-[#003662] uppercase tracking-wider mb-2">Décideur</p>
                <p className="text-[#003662] text-sm">Contrôlant</p>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-lg">
                <div className="w-full h-32 mb-4 bg-[#003662]/10 rounded-lg overflow-hidden">
                  {/* Visuel profil Prudent */}
                </div>
                <p className="text-sm font-semibold text-[#003662] uppercase tracking-wider mb-2">Prudent</p>
                <p className="text-[#003662] text-sm">Ambivalent</p>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-lg">
                <div className="w-full h-32 mb-4 bg-[#003662]/10 rounded-lg overflow-hidden">
                  {/* Visuel profil Résilient */}
                </div>
                <p className="text-sm font-semibold text-[#003662] uppercase tracking-wider mb-2">Résilient</p>
                <p className="text-[#003662] text-sm">Adaptatif</p>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-lg">
                <div className="w-full h-32 mb-4 bg-[#003662]/10 rounded-lg overflow-hidden">
                  {/* Visuel profil Visionnaire */}
                </div>
                <p className="text-sm font-semibold text-[#003662] uppercase tracking-wider mb-2">Visionnaire</p>
                <p className="text-[#003662] text-sm">Intuitif</p>
              </div>
            </div>

            <div className="bg-[#9FB620] rounded-xl p-6 md:p-8 mb-6">
              <p className="text-white text-lg mb-4 font-semibold leading-relaxed">
                Chaque profil est défini par :
              </p>
              <ul className="space-y-3 text-white text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-semibold shrink-0">✓</span>
                  <span>des moteurs émotionnels dominants</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-semibold shrink-0">✓</span>
                  <span>des forces naturelles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-semibold shrink-0">✓</span>
                  <span>des points de vigilance patrimoniale</span>
                </li>
              </ul>
            </div>
            <p className="text-white/90 text-lg leading-relaxed">
              Les profils ne sont ni figés ni exclusifs : ils évoluent avec l&apos;âge, les événements de vie et le contexte patrimonial.
            </p>
          </div>
        </section>

        {/* Axes analysés — encart vert */}
        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-[#9FB620] rounded-xl p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6">
                Axes <span className="text-white">analysés</span>
              </h2>
              <p className="text-white text-lg mb-6">
                La méthode PatrimEmotion® analyse plusieurs axes structurants, parmi lesquels :
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-white text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-semibold shrink-0">✓</span>
                  <span>Rapport à l&apos;argent</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-semibold shrink-0">✓</span>
                  <span>Tolérance émotionnelle au risque</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-semibold shrink-0">✓</span>
                  <span>Vision et temporalité</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-semibold shrink-0">✓</span>
                  <span>Rapport à la sécurité et au contrôle</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-semibold shrink-0">✓</span>
                  <span>Délégation, confiance et décision</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-semibold shrink-0">✓</span>
                  <span>Transmission, sens et valeurs</span>
                </li>
              </ul>
              <p className="text-white text-lg mt-6 leading-relaxed">
                Ces axes sont croisés pour identifier des cohérences, tensions et zones de vigilance.
              </p>
            </div>
          </div>
        </section>

        {/* Restitution et lecture patrimoniale — fond blanc */}
        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#003662] mb-8">
              Restitution et lecture <span className="text-[#f4ca3a]">patrimoniale</span>
            </h2>

            <h3 className="text-2xl font-serif font-semibold text-[#003662] mb-6">
              Comment ça se passe ? <span className="text-[#f4ca3a]">3 étapes :</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="rounded-xl bg-[#003662] p-6 shadow-lg">
                <div className="text-3xl font-semibold text-[#f4ca3a] mb-3">1</div>
                <p className="text-white font-semibold mb-2">Entretien découverte</p>
                <p className="text-white/90 text-sm">(humain)</p>
              </div>
              <div className="rounded-xl bg-[#003662] p-6 shadow-lg">
                <div className="text-3xl font-semibold text-[#f4ca3a] mb-3">2</div>
                <p className="text-white font-semibold mb-2">Profil + lecture</p>
                <p className="text-white/90 text-sm">(clarté)</p>
              </div>
              <div className="rounded-xl bg-[#003662] p-6 shadow-lg">
                <div className="text-3xl font-semibold text-[#f4ca3a] mb-3">3</div>
                <p className="text-white font-semibold mb-2">Plan d&apos;actions + mise en œuvre / suivi</p>
                <p className="text-white/90 text-sm">(concret)</p>
              </div>
            </div>

            <p className="text-[#003662]/90 text-lg mb-6 leading-relaxed">
              La restitution PatrimEmotion® repose sur :
            </p>
            <ul className="space-y-3 text-[#003662]/90 text-lg mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                <span>un scoring multi-axes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                <span>l&apos;identification d&apos;un ou plusieurs profils dominants</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                <span>l&apos;analyse des écarts et contradictions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                <span>une hiérarchisation des priorités patrimoniales</span>
              </li>
            </ul>
            <p className="text-[#003662]/90 text-lg leading-relaxed">
              La méthode ne fournit pas de produits, mais un cadre de lecture et d&apos;aide à la décision.
            </p>
          </div>
        </section>

        {/* Ce que vous recevez — fond bleu en diagonal (sens opposé à Fondements) */}
        <section className="py-20 md:py-28 overflow-hidden bg-white">
          <div
            className="bg-[#003662] py-16 md:py-24 skew-y-2"
            style={{
              boxShadow: "inset 0 14px 32px rgba(0, 0, 0, 0.15), inset 0 -14px 32px rgba(0, 0, 0, 0.15)",
            }}
          >
            <div className="container mx-auto px-4 max-w-4xl -skew-y-2">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-8">
                Ce que vous <span className="text-[#f4ca3a]">recevez</span>
              </h2>
              <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                  <p>
                    Une lecture synthétique (Score Emotionnel Patrimonial Global, Profil Emotionnel Patrimonial et Répartition Patrimoniale Alignée)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                  <p>
                    3 priorités + plan d&apos;action (Rapport Synthétique PatrimEmotion)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                  <p>
                    Un cadre de décision et des recommandations claires (pour éviter les regrets)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                  <p>
                    Sur option payante, un bilan PatrimEmotion complet avec le détail de la méthode et les conseils financiers et patrimoniaux alignés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi PatrimEmotion — fond blanc */}
        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#003662] mb-8">
              D&apos;où vient <span className="text-[#f4ca3a]">PatrimEmotion</span> ?
            </h2>
            <div className="space-y-6 text-[#003662]/90 text-lg leading-relaxed">
              <p>
                <span className="font-semibold text-[#003662]">PatrimEmotion®</span> est née de la volonté du cabinet <span className="font-semibold text-[#003662]">AMCP (AM Courtage & Patrimoine)</span> de proposer une <span className="text-[#f4ca3a] font-semibold">solution résolument humaine</span> au conseil patrimonial. Situé à Amiens, le cabinet est représenté par <span className="font-semibold text-[#003662]">Aurélie MONTEIL</span>, inscrit à l&apos;ORIAS sous le numéro <span className="font-semibold text-[#f4ca3a]">19004843</span>, rattaché à la CNCEF et soumis aux dispositifs réglementaires en vigueur (dont le statut de CIF, Conseiller en Investissement Financier).
              </p>
              <p>
                Face à un univers souvent perçu comme trop technique ou déshumanisé, AMCP a voulu remettre la <span className="text-[#f4ca3a] font-semibold">personne</span> au centre, comprendre ses émotions, son rapport à l&apos;argent et au risque, pour construire avec elle une stratégie patrimoniale alignée avec qui elle est vraiment. La méthode PatrimEmotion® incarne cette ambition, une approche qui allie rigueur et écoute, pour des décisions plus sereines et durables.
              </p>
              <div className="bg-[#003662] rounded-xl p-6 md:p-8 mt-8">
                <p className="text-white text-lg leading-relaxed">
                  <span className="font-semibold text-[#f4ca3a]">Notre idée,</span> compléter l&apos;approche patrimoniale par une lecture émotionnelle et personnalisée. PatrimEmotion® ne remplace pas les obligations réglementaires, elle améliore la qualité de la décision pour le client comme pour le conseiller, en faisant du dialogue et de la connaissance client le cœur de l&apos;accompagnement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
