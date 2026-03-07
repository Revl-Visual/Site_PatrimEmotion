import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certification et Licences | PatrimEmotion®",
  description: "3 niveaux de licence (Essentielle, Premium, Premium +), offres LIGHT / CORE / PREMIUM, certification, grille tarifaire V2026 et badges.",
};

export default function CertificationLicencesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-4">
              Certification et <span className="text-[#f4ca3a]">Licences</span>
            </h1>
            <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
              Parcours de formation, niveaux de certification (Essentielle, Premium, Premium +) et offres commerciales LIGHT, CORE, PREMIUM.
            </p>
          </div>
        </section>

        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#003662] mb-12 text-center">
              3 niveaux de <span className="text-[#f4ca3a]">licence</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Licence LIGHT — Essentielle / Badge Bronze */}
              <div className="bg-white rounded-2xl shadow-lg border border-[#003662]/10 overflow-hidden flex flex-col">
                <div className="bg-[#003662] px-6 py-5 flex items-center gap-3">
                  <span className="text-3xl" aria-hidden>🥉</span>
                  <div>
                    <h3 className="text-xl font-sans font-bold text-white">Licence LIGHT</h3>
                    <p className="text-white/90 text-sm">Essentielle · Utilisateur Certifié · Badge Bronze</p>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col gap-5">
                  <div>
                    <h4 className="text-[#003662] font-medium mb-2 text-base">Positionnement</h4>
                    <p className="text-[#003662]/90 text-sm leading-relaxed">L&apos;essentiel pour démarrer. Cabinet indépendant, 1 conseiller nominatif.</p>
                  </div>
                  <div>
                    <h4 className="text-[#003662] font-medium mb-2 text-base">Contenu</h4>
                    <ul className="space-y-1.5 text-[#003662]/90 text-sm">
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Questionnaire officiel PatrimEmotion®</li>
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Bilan PatrimEmotion® V2026 (standard)</li>
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Outil de scoring verrouillé</li>
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Formation initiale distanciel</li>
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Support email standard</li>
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Droit d&apos;usage de la marque PatrimEmotion®</li>
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Badge « Licencié Certifié »</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#003662] font-medium mb-2 text-base">Conditions d&apos;obtention</h4>
                    <ul className="space-y-1.5 text-[#003662]/90 text-sm">
                      <li className="flex items-start gap-2"><span className="text-[#003662] shrink-0">•</span> Être professionnel du patrimoine ou assimilé</li>
                      <li className="flex items-start gap-2"><span className="text-[#003662] shrink-0">•</span> Formation initiale PatrimEmotion® validée</li>
                      <li className="flex items-start gap-2"><span className="text-[#003662] shrink-0">•</span> Signature du contrat de licence</li>
                      <li className="flex items-start gap-2"><span className="text-[#003662] shrink-0">•</span> Respect de la charte d&apos;utilisation</li>
                    </ul>
                  </div>
                  <Link href="/tarifs" className="text-[#003662] text-sm font-semibold mt-2 hover:text-[#f4ca3a] transition-colors inline-flex items-center gap-1">
                    Voir tarifs et options →
                  </Link>
                </div>
              </div>

              {/* Licence CORE — Premium / Badge Argent */}
              <div className="bg-white rounded-2xl shadow-lg border border-[#003662]/10 overflow-hidden flex flex-col">
                <div className="bg-[#003662] px-6 py-5 flex items-center gap-3">
                  <span className="text-3xl" aria-hidden>🥈</span>
                  <div>
                    <h3 className="text-xl font-sans font-bold text-white">Licence CORE</h3>
                    <p className="text-white/90 text-sm">Premium · Praticien Confirmé · Badge Argent</p>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col gap-5">
                  <div>
                    <h4 className="text-[#003662] font-medium mb-2 text-base">Positionnement</h4>
                    <p className="text-[#003662]/90 text-sm leading-relaxed">Le socle opérationnel (standard pro). Cabinet structuré, jusqu&apos;à 5 conseillers.</p>
                  </div>
                  <div>
                    <h4 className="text-[#003662] font-medium mb-2 text-base">Contenu</h4>
                    <ul className="space-y-1.5 text-[#003662]/90 text-sm">
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Tout LIGHT</li>
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Dashboard Looker verrouillé</li>
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Matrices pédagogiques élargies</li>
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Kit conformité entretien (supports, mentions, lexique)</li>
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Support prioritaire</li>
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Branding cabinet (logo, coordonnées, charte légère)</li>
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Badge « Licencié Confirmé »</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#003662] font-medium mb-2 text-base">Conditions d&apos;obtention</h4>
                    <ul className="space-y-1.5 text-[#003662]/90 text-sm">
                      <li className="flex items-start gap-2"><span className="text-[#003662] shrink-0">•</span> Volume minimum de bilans annuels</li>
                      <li className="flex items-start gap-2"><span className="text-[#003662] shrink-0">•</span> Audit de conformité</li>
                      <li className="flex items-start gap-2"><span className="text-[#003662] shrink-0">•</span> Respect du référentiel méthodologique</li>
                      <li className="flex items-start gap-2"><span className="text-[#003662] shrink-0">•</span> Engagement de qualité</li>
                    </ul>
                  </div>
                  <Link href="/tarifs" className="text-[#003662] text-sm font-semibold mt-2 hover:text-[#f4ca3a] transition-colors inline-flex items-center gap-1">
                    Voir tarifs et options →
                  </Link>
                </div>
              </div>

              {/* Licence PREMIUM — Premium + / Badge Or */}
              <div className="bg-white rounded-2xl shadow-lg border border-[#003662]/10 overflow-hidden flex flex-col">
                <div className="bg-[#003662] px-6 py-5 flex items-center gap-3">
                  <span className="text-3xl" aria-hidden>🥇</span>
                  <div>
                    <h3 className="text-xl font-sans font-bold text-white">Licence PREMIUM</h3>
                    <p className="text-white/90 text-sm">Premium + · Cabinet Expert · Badge Or</p>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col gap-5">
                  <div>
                    <h4 className="text-[#003662] font-medium mb-2 text-base">Positionnement</h4>
                    <p className="text-[#003662]/90 text-sm leading-relaxed">La version avancée. Cabinet expert / multisites, jusqu&apos;à 15 conseillers.</p>
                  </div>
                  <div>
                    <h4 className="text-[#003662] font-medium mb-2 text-base">Contenu</h4>
                    <ul className="space-y-1.5 text-[#003662]/90 text-sm">
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Tout CORE</li>
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Accès matrices avancées</li>
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Paramétrage visuel répartition pédagogique</li>
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Reporting cabinet avancé</li>
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Formation approfondie</li>
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Supports stratégiques (déploiement, qualité, usage)</li>
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Mention « Cabinet Expert PatrimEmotion® »</li>
                      <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Badge « Licencié Expert »</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#003662] font-medium mb-2 text-base">Conditions d&apos;obtention</h4>
                    <ul className="space-y-1.5 text-[#003662]/90 text-sm">
                      <li className="flex items-start gap-2"><span className="text-[#003662] shrink-0">•</span> Expérience significative</li>
                      <li className="flex items-start gap-2"><span className="text-[#003662] shrink-0">•</span> Audit renforcé</li>
                      <li className="flex items-start gap-2"><span className="text-[#003662] shrink-0">•</span> Validation comité PatrimEmotion®</li>
                      <li className="flex items-start gap-2"><span className="text-[#003662] shrink-0">•</span> Engagement contractuel spécifique</li>
                    </ul>
                  </div>
                  <Link href="/tarifs" className="text-[#003662] text-sm font-semibold mt-2 hover:text-[#f4ca3a] transition-colors inline-flex items-center gap-1">
                    Voir tarifs et options →
                  </Link>
                </div>
              </div>
            </div>
            <p className="text-[#003662]/70 text-xs md:text-sm text-center mt-8 max-w-2xl mx-auto">
              Certification interne délivrée par l&apos;éditeur de la méthode. Ne constitue pas une certification d&apos;État ni un agrément réglementaire.
            </p>
            <p className="text-[#003662]/90 text-center mt-6 max-w-2xl mx-auto">
              La grille tarifaire détaillée (V2026), les options et la licence Fondateur sont sur la page <Link href="/tarifs" className="text-[#003662] font-semibold underline decoration-[#f4ca3a] hover:text-[#f4ca3a] transition-colors">Tarifs</Link>.
            </p>
          </div>
        </section>

        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-white mb-8">
              Certification
            </h2>
            <p className="text-white/90 leading-relaxed mb-6">
              La certification PatrimEmotion® atteste de la maîtrise de la méthode et du cadre éthique et scientifique. Elle est délivrée après validation des épreuves et du parcours de formation. Les certifiés peuvent utiliser les outils et le positionnement PatrimEmotion® dans le respect du référentiel.
            </p>
            <p className="text-white/90 leading-relaxed">
              Le renouvellement et la mise à jour des compétences sont assurés par des sessions de formation continue et l&apos;accès aux évolutions de la méthode.
            </p>
          </div>
        </section>

        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-[#003662] mb-8">
              Tarification
            </h2>
            <p className="text-[#003662] leading-relaxed mb-6">
              La grille tarifaire officielle <strong>PatrimEmotion® V2026</strong> propose plusieurs offres adaptées à la taille de votre cabinet : <strong>Licence Fondateur</strong> (avantages Early Partners, 10 premiers cabinets), <strong>Licence LIGHT</strong> (cabinet indépendant, 1 conseiller), <strong>Licence CORE</strong> (2 à 5 conseillers, socle opérationnel), <strong>Licence PREMIUM</strong> (jusqu&apos;à 15 conseillers, version avancée) et <strong>Licence Institutionnelle / Embedded</strong> (banques, assureurs, fintech – non disponible pour le moment). Les tarifs sont indicatifs HT ; des options (utilisateur supplémentaire, formations, audits) complètent chaque offre.
            </p>
            <p className="text-[#003662] leading-relaxed mb-8">
              Pour consulter les montants, les options et les conditions, rendez-vous sur la page Tarifs. Pour un devis personnalisé ou les modalités de prise en charge, contactez-nous via le formulaire de contact ou par email et téléphone.
            </p>
            <Link
              href="/tarifs"
              className="inline-flex items-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Voir la grille tarifaire
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-white mb-8">
              Badges et épreuves
            </h2>
            <p className="text-white/90 leading-relaxed mb-6">
              La certification s&apos;appuie sur des épreuves théoriques et pratiques : quiz de connaissance de la méthode, analyse de profils types et mise en situation d&apos;entretien. Les badges PatrimEmotion® permettent de valoriser les niveaux atteints (formation initiale, certification, expert).
            </p>
            <p className="text-white/90 leading-relaxed">
              Les épreuves sont organisées à l&apos;issue du parcours de formation. Un accompagnement est proposé pour la préparation et le passage des épreuves.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
