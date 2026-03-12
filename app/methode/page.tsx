import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

// Lien Google Forms du questionnaire PatrimEmotion_V2026 — remplacer par l'URL réelle du formulaire
const QUESTIONNAIRE_URL = "https://forms.google.com/";
// Lien Contact (page contact du site ou site AM Courtage et Patrimoine)
const CONTACT_AMCP_URL = "/contact";
// URL du site AM Courtage & Patrimoine (onglet PatrimEmotion) — à adapter si besoin
const SITE_AMCP_URL = "https://amcourtagepatrimoine.fr";

export const metadata: Metadata = {
  title: "La méthode | PatrimEmotion®",
  description: "La méthode qui remet l'humain au cœur des décisions patrimoniales. Approche comportementale appliquée au patrimoine.",
};

export default function MethodePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-[#003662] py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(244,202,58,0.08),transparent)] pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6 leading-tight">
                    La méthode qui remet <span className="text-[#f4ca3a]">l&apos;humain</span> au cœur des <span className="text-[#f4ca3a]">décisions patrimoniales</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                    Parce que les choix patrimoniaux ne sont pas uniquement financiers : ils doivent aussi être cohérents avec votre personnalité, votre manière de décider et votre parcours de vie.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={QUESTIONNAIRE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 text-base shadow-lg hover:shadow-xl hover:scale-[1.02]"
                    >
                      Faire le test / pré-diagnostic
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                    <Link
                      href={CONTACT_AMCP_URL}
                      className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 text-base border-2 border-white/40 hover:border-white/60"
                    >
                      Prendre rendez-vous
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#9FB620]/20 to-[#003662]/20 flex items-center justify-center">
                      <p className="text-white/50 text-sm">Image à ajouter</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Une approche comportementale */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-center text-[#f4ca3a] text-sm font-semibold uppercase tracking-widest mb-4">Le concept</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#003662] mb-8 text-center">
              Une approche comportementale appliquée aux décisions patrimoniales
            </h2>
            <div className="space-y-6 text-[#003662]/90 text-lg leading-relaxed">
              <p>
                <strong className="text-[#003662]">PatrimEmotion®</strong> est une méthode d&apos;analyse comportementale appliquée aux décisions patrimoniales.
              </p>
              <p>
                Elle vise à mettre en lumière les dimensions émotionnelles et décisionnelles qui peuvent influencer la manière d&apos;aborder l&apos;argent, le risque, le temps et les projets patrimoniaux.
              </p>
              <p>
                Cette lecture permet d&apos;apporter un éclairage complémentaire dans la compréhension des décisions patrimoniales.
              </p>
            </div>
          </div>
        </section>

        {/* Le constat */}
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-[#f4ca3a] text-sm font-semibold uppercase tracking-widest mb-4">Contexte</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6">Le constat</h2>
            <p className="text-white/95 text-lg mb-8 leading-relaxed">
              Les décisions patrimoniales ne reposent pas uniquement sur des raisonnements financiers.<br />
              De nombreux facteurs interviennent dans les arbitrages :
            </p>
            <ul className="space-y-3 text-white/95 text-lg mb-8">
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
            <p className="text-white/95 text-lg leading-relaxed">
              Ces éléments peuvent expliquer les écarts entre les décisions théoriquement optimales et les décisions réellement prises.
            </p>
          </div>
        </section>

        {/* La démarche PatrimEmotion® */}
        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-center text-[#f4ca3a] text-sm font-semibold uppercase tracking-widest mb-4">Notre méthode</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#003662] mb-6 text-center">
              La démarche <span className="text-[#f4ca3a]">PatrimEmotion®</span>
            </h2>
            <p className="text-[#003662]/90 text-lg mb-8 leading-relaxed">
              La méthode PatrimEmotion® vise à apporter une lecture structurée de ces dimensions comportementales afin d&apos;éclairer les décisions patrimoniales.<br />
              Elle permet notamment de :
            </p>
            <ul className="space-y-3 text-[#003662]/90 text-lg mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                <span>mieux comprendre la manière dont les décisions patrimoniales sont abordées</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                <span>identifier certaines préférences décisionnelles</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                <span>apporter des repères pour structurer la réflexion patrimoniale</span>
              </li>
            </ul>
            <p className="text-[#003662]/90 text-lg mb-8 leading-relaxed">
              PatrimEmotion® constitue ainsi un outil pédagogique d&apos;aide à la compréhension et au dialogue patrimonial.
            </p>
          </div>
        </section>

        {/* Les fondements de la méthode */}
        <section className="py-20 md:py-28 overflow-hidden bg-[#003662]">
          <div className="section-alt-blue py-16 md:py-24 -skew-y-2" style={{ boxShadow: "inset 0 14px 32px rgba(0, 54, 98, 0.2), inset 0 -14px 32px rgba(0, 54, 98, 0.2)" }}>
            <div className="container mx-auto px-4 max-w-4xl skew-y-2">
              <p className="text-[#f4ca3a] text-sm font-semibold uppercase tracking-widest mb-4">Références</p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#003662] mb-6">
                Les fondements de la méthode
              </h2>
              <p className="text-[#003662]/90 text-lg mb-6">
                La méthode s&apos;appuie notamment sur des approches issues :
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-[#003662]/90 text-lg mb-8">
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
                  <span>de la perception émotionnelle du risque</span>
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
              <p className="text-[#003662]/90 text-lg mb-6">
                Ces éléments permettent d&apos;observer certaines dynamiques décisionnelles liées aux choix patrimoniaux.
              </p>
              <Link href="/cadre-ethique-scientifique" className="inline-flex items-center gap-2 text-[#003662] font-semibold hover:text-[#f4ca3a] transition-colors">
                En savoir plus : Méthode Scientifique
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Les profils PatrimEmotion® */}
        <section id="profils" className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <p className="text-[#f4ca3a] text-sm font-semibold uppercase tracking-widest mb-4">Les 8 profils</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6">
              Les profils <span className="text-[#f4ca3a]">PatrimEmotion®</span>
            </h2>
            <p className="text-white/95 text-lg mb-4 leading-relaxed">
              Il n&apos;existe ni bon ni mauvais profil patrimonial.
            </p>
            <p className="text-white/95 text-lg mb-8 leading-relaxed">
              Chaque profil traduit une manière spécifique d&apos;aborder les décisions patrimoniales, notamment face : à l&apos;incertitude, au temps, à la sécurité, aux projets de vie.
            </p>

            <p className="text-white font-semibold text-lg mb-4">La méthode identifie 8 profils émotionnels patrimoniaux :</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                ["Sécuritaire", "Harmonieux"],
                ["Visionnaire", "Structuré"],
                ["Explorateur", "Raisonné"],
                ["Protecteur", "Engagé"],
                ["Décideur", "Contrôlant"],
                ["Prudent", "Ambivalent"],
                ["Résilient", "Adaptatif"],
                ["Visionnaire", "Intuitif"],
              ].map(([main, sub], i) => (
                <div key={i} className="rounded-2xl bg-white/10 border border-white/20 p-5 hover:bg-white/15 transition-all">
                  <p className="text-sm font-semibold text-[#f4ca3a] uppercase tracking-wider mb-1">{main}</p>
                  <p className="text-white text-sm">{sub}</p>
                </div>
              ))}
            </div>

            {/* Image des 8 profils — à remplacer par l'image fournie */}
            <div className="rounded-2xl bg-white/5 border-2 border-dashed border-white/20 p-12 mb-10 flex items-center justify-center min-h-[200px]">
              <p className="text-white/60 text-sm">Image des 8 profils à insérer</p>
            </div>

            <div className="bg-[#9FB620] rounded-2xl p-6 md:p-8 mb-6">
              <p className="text-white text-lg mb-4 font-semibold">Chaque profil met en évidence :</p>
              <ul className="space-y-3 text-white text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-xl font-semibold shrink-0">✓</span>
                  <span>certaines dynamiques émotionnelles dominantes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl font-semibold shrink-0">✓</span>
                  <span>des préférences décisionnelles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl font-semibold shrink-0">✓</span>
                  <span>des points d&apos;attention possibles dans la réflexion patrimoniale</span>
                </li>
              </ul>
            </div>
            <p className="text-white/95 text-lg mb-8 leading-relaxed">
              Les profils ne sont ni figés ni exclusifs : ils peuvent évoluer avec l&apos;âge, les projets de vie ou le contexte patrimonial.
            </p>
            <Link href="/methode#profils" className="inline-flex items-center gap-2 text-[#f4ca3a] font-semibold hover:text-white transition-colors">
              Découvrir les profils en détail
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </section>

        {/* Les axes d'analyse */}
        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-center text-[#f4ca3a] text-sm font-semibold uppercase tracking-widest mb-4">Dimensions</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#003662] mb-6 text-center">
              Les axes d&apos;analyse
            </h2>
            <p className="text-[#003662]/90 text-lg mb-6 text-center">
              La méthode PatrimEmotion® s&apos;appuie sur plusieurs axes d&apos;observation, notamment :
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-[#003662]/90 text-lg mb-10">
              <li className="flex items-start gap-3">
                <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                <span>le rapport à l&apos;argent</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                <span>la perception émotionnelle de l&apos;incertitude</span>
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
            <p className="text-[#003662]/90 text-lg mb-8 leading-relaxed text-center">
              L&apos;analyse croisée de ces dimensions permet de mettre en évidence certaines cohérences ou tensions dans la manière d&apos;aborder les décisions patrimoniales.
            </p>
            {/* Image Radar Emotionnel PatrimEmotion — à insérer */}
            <div className="rounded-2xl bg-[#003662]/5 border-2 border-dashed border-[#003662]/20 p-12 flex items-center justify-center min-h-[280px]">
              <p className="text-[#003662]/60 text-sm">Image du Radar Emotionnel PatrimEmotion à insérer</p>
            </div>
          </div>
        </section>

        {/* Comment se déroule l'accompagnement ? */}
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <p className="text-center text-[#f4ca3a] text-sm font-semibold uppercase tracking-widest mb-4">Le parcours</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4 text-center">
              Comment se déroule l&apos;accompagnement ?
            </h2>
            <p className="text-white/90 text-lg mb-12 text-center max-w-2xl mx-auto">
              La démarche PatrimEmotion® se déroule généralement en trois étapes :
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="rounded-2xl bg-white/10 border border-white/20 p-6 md:p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#f4ca3a] text-[#003662] flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-serif font-semibold text-white mb-2">Questionnaire PatrimEmotion® _2026</h3>
                <p className="text-white/90 text-sm leading-relaxed">36 questions psychométriques permettant de déterminer votre profil émotionnel patrimonial.</p>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/20 p-6 md:p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#f4ca3a] text-[#003662] flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-serif font-semibold text-white mb-2">Analyse et restitution avec un conseiller</h3>
                <p className="text-white/90 text-sm leading-relaxed">Présentation du profil émotionnel patrimonial et des principaux repères issus de l&apos;analyse.</p>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/20 p-6 md:p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#f4ca3a] text-[#003662] flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-serif font-semibold text-white mb-2">Échanges et structuration de la réflexion patrimoniale</h3>
                <p className="text-white/90 text-sm leading-relaxed">Mise en perspective des éléments identifiés afin d&apos;éclairer les décisions patrimoniales futures.</p>
              </div>
            </div>

            {/* La restitution PatrimEmotion® */}
            <p className="text-center text-[#f4ca3a] text-sm font-semibold uppercase tracking-widest mb-4">Ce que vous recevez</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6 text-center">
              La restitution <span className="text-[#f4ca3a]">PatrimEmotion®</span>
            </h2>
            <p className="text-white/95 text-lg mb-6">La restitution repose notamment sur :</p>
            <ul className="space-y-3 text-white/95 text-lg mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#f4ca3a] text-xl font-semibold shrink-0">✓</span>
                <span>une analyse multi-axes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f4ca3a] text-xl font-semibold shrink-0">✓</span>
                <span>l&apos;identification d&apos;un ou plusieurs profils dominants</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f4ca3a] text-xl font-semibold shrink-0">✓</span>
                <span>l&apos;observation de certaines cohérences ou tensions décisionnelles</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f4ca3a] text-xl font-semibold shrink-0">✓</span>
                <span>la mise en évidence de repères pour structurer la réflexion patrimoniale</span>
              </li>
            </ul>
            <p className="text-white/95 text-lg mb-4 leading-relaxed">
              La méthode ne propose pas de produits financiers.
            </p>
            <p className="text-white/95 text-lg mb-10 leading-relaxed">
              Elle vise à fournir un cadre de compréhension et de dialogue autour des décisions patrimoniales.
            </p>
            {/* Image site AM Courtage & Patrimoine + lien onglet PatrimEmotion */}
            <div className="rounded-2xl bg-white/5 border-2 border-dashed border-white/20 p-12 flex flex-col items-center justify-center min-h-[200px] gap-4">
              <p className="text-white/60 text-sm">Image du site AM Courtage & Patrimoine à insérer</p>
              <a href={SITE_AMCP_URL} target="_blank" rel="noopener noreferrer" className="text-[#f4ca3a] font-semibold hover:text-white transition-colors inline-flex items-center gap-2">
                Découvrir l&apos;onglet PatrimEmotion sur le site AMCP
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
        </section>

        {/* Ce que vous recevez (détail) */}
        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-center text-[#f4ca3a] text-sm font-semibold uppercase tracking-widest mb-4">Votre accompagnement</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#003662] mb-6 text-center">
              Ce que vous <span className="text-[#f4ca3a]">recevez</span>
            </h2>
            <p className="text-[#003662]/90 text-lg mb-8 text-center">
              Selon le niveau d&apos;accompagnement choisi, la restitution peut comprendre :
            </p>
            <ul className="space-y-4 text-[#003662]/90 text-lg mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                <span>une lecture synthétique du Profil Émotionnel Patrimonial</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                <span>un Indice Émotionnel Patrimonial global</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                <span>un Rapport PatrimEmotion® Synthétique</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9FB620] text-xl font-semibold shrink-0">✓</span>
                <span>des repères permettant d&apos;éclairer la réflexion patrimoniale</span>
              </li>
            </ul>
            <p className="text-[#003662]/90 text-lg leading-relaxed">
              Sur option, un Bilan PatrimEmotion® complet peut être proposé afin d&apos;approfondir l&apos;analyse.
            </p>
          </div>
        </section>

        {/* Cadre réglementaire et conformité */}
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-[#f4ca3a] text-sm font-semibold uppercase tracking-widest mb-4">Conformité</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-8">
              Un cadre réglementé
            </h2>
            <p className="text-white/95 text-lg mb-6 leading-relaxed">
              Le cabinet <strong>AM Courtage & Patrimoine (AMCP)</strong>, situé à Amiens et représenté par <strong>Aurélie MONTEIL</strong>, exploite la licence PatrimEmotion®.
            </p>
            <p className="text-white/95 text-lg mb-8 leading-relaxed">
              Le cabinet est inscrit à l&apos;ORIAS sous le numéro <strong className="text-[#f4ca3a]">19004843</strong>, est adhérent à la CNCEF et exerce dans le respect des cadres réglementaires applicables à ses différents statuts, notamment celui de Conseiller en Investissements Financiers (CIF).
            </p>
            <p className="text-white/95 text-lg mb-8 leading-relaxed">
              La méthode PatrimEmotion® constitue un outil d&apos;analyse comportementale et pédagogique d&apos;aide à la réflexion patrimoniale.
            </p>
            <p className="text-white/95 text-lg mb-4 font-semibold">Elle ne constitue ni :</p>
            <ul className="space-y-2 text-white/95 text-lg mb-8">
              <li className="flex items-start gap-2">
                <span className="text-[#f4ca3a] shrink-0">•</span>
                <span>un conseil financier automatisé</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f4ca3a] shrink-0">•</span>
                <span>une recommandation d&apos;investissement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f4ca3a] shrink-0">•</span>
                <span>un outil de vente de produits financiers.</span>
              </li>
            </ul>
            <p className="text-white/95 text-lg leading-relaxed">
              Les décisions patrimoniales relèvent exclusivement de la responsabilité du client et du professionnel habilité qui l&apos;accompagne.
            </p>
          </div>
        </section>

        {/* L'esprit de la méthode PatrimEmotion® */}
        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-center text-[#f4ca3a] text-sm font-semibold uppercase tracking-widest mb-4">Notre philosophie</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#003662] mb-8 text-center">
              L&apos;esprit de la méthode <span className="text-[#f4ca3a]">PatrimEmotion®</span>
            </h2>
            <div className="space-y-6 text-[#003662]/90 text-lg leading-relaxed">
              <p>
                PatrimEmotion® vient compléter l&apos;approche patrimoniale traditionnelle en apportant une lecture comportementale des décisions.
              </p>
              <p>
                Elle ne remplace pas les obligations réglementaires liées à la connaissance client et à l&apos;analyse d&apos;adéquation.
              </p>
              <p>
                Son objectif est d&apos;enrichir le dialogue entre le client et son conseiller afin de faciliter une compréhension mutuelle et une réflexion patrimoniale plus cohérente dans le temps.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
