import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institutionnels & Réseaux | PatrimEmotion®",
  description:
    "Méthode PatrimEmotion® pour institutionnels : structurée, standardisable, intégrable et compatible conformité. Psychométrie patrimoniale et finance comportementale.",
};

const CONSTITUE = [
  "Une méthode structurée",
  "Standardisable",
  "Intégrable dans des parcours existants",
  "Compatible avec les exigences de conformité",
];

const PILIERS_PSYCHOMETRIE = [
  {
    titre: "Une structure multi-axes",
    texte: "Rapport à l'argent, tolérance au risque, vision & temporalité, sécurité vs liberté, famille & transmission, délégation & contrôle, résilience émotionnelle, rapport à l'incertitude, projection long terme. Un profil multidimensionnel, à la logique des grilles de personnalité.",
  },
  {
    titre: "Des items selon les standards psychométriques",
    texte: "Affirmations projectives, échelles type Likert, questions comportementales, limitation des biais de désirabilité sociale. Aligné avec les bonnes pratiques en finance comportementale et psychologie décisionnelle.",
  },
  {
    titre: "Un système de pondération et de scoring",
    texte: "Coefficients par axe, scores normalisés, profils principaux et secondaires, zones de vigilance émotionnelle, indicateurs de cohérence décisionnelle. Même logique que les outils de diagnostic utilisés en coaching, orientation ou profiling investisseurs.",
  },
  {
    titre: "Une finalité opérationnelle",
    texte: "Le profil est relié directement à l'allocation d'actifs, aux recommandations financières, aux vigilances comportementales, au style de relation conseiller-client et au mode de prise de décision patrimoniale. Pont entre psychologie et ingénierie patrimoniale.",
  },
];

const AUJOURDHUI = [
  "Méthodologiquement solide",
  "Différenciant sur le marché",
  "Structuré comme un vrai référentiel",
  "Exploitable commercialement et scalable",
  "Défendable face aux institutionnels",
  "Compatible avec les exigences AMF / adéquation",
  "Aligné avec l'évolution du conseil patrimonial moderne",
  "Recentré sur les émotions humaines face à l'IA",
];

const ACTEURS = [
  "Réseaux CGP",
  "Banques privées",
  "Assureurs",
  "Plateformes patrimoniales",
  "Family offices",
];

export default function InstitutionnelsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero — sobre, bleu */}
        <section className="-mt-2 md:-mt-3 pt-0 pb-0 px-4">
          <div className="hero-encart pt-16 pb-14 md:pt-20 md:pb-16 px-6 md:px-12">
            <div className="container mx-auto relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-white/70 text-sm font-medium tracking-widest uppercase mb-4">Institutionnels & Réseaux</p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-6 leading-tight tracking-tight">
                  <span className="text-[#f4ca3a]">PatrimEmotion®</span> pour les institutionnels
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Une méthode de profilage patrimonial psychométrique, structurée et intégrable dans vos parcours.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {CONSTITUE.map((item, i) => (
                    <span key={i} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f4ca3a]" />
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-8 py-4 rounded-xl transition-all text-base shadow-lg hover:shadow-xl"
                >
                  Prendre contact
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Définition & rôle */}
        <section className="py-20 md:py-24 section-alt-blue">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-[#003662]/60 text-sm font-medium tracking-widest uppercase mb-3">Contexte</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#003662] mb-10">
              Méthode et positionnement
            </h2>
            <div className="space-y-8 text-[#003662] text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-[#003662]">PatrimEmotion®</strong> est une méthode propriétaire de profilage patrimonial psychométrique fondée sur la finance comportementale et la psychologie décisionnelle. Elle repose sur un questionnaire structuré multi-axes mesurant les dimensions émotionnelles, comportementales et cognitives de la relation à l&apos;argent : rapport au risque, projection dans le temps, besoin de sécurité, résilience, contrôle, vision patrimoniale, transmission.
              </p>
              <p>
                Grâce à un système de scoring, pondération et interprétation, PatrimEmotion® établit un profil émotionnel patrimonial et le relie directement aux choix d&apos;allocation d&apos;actifs, aux stratégies financières, fiscales et successorales, ainsi qu&apos;au mode d&apos;accompagnement du client.
              </p>
              <p>
                PatrimEmotion® constitue un <strong>outil d&apos;aide à la décision patrimoniale avancé</strong>, complémentaire des questionnaires réglementaires de connaissance client, permettant d&apos;améliorer la pertinence, la cohérence et la durabilité des recommandations.
              </p>
            </div>
            <blockquote className="mt-10 p-6 rounded-xl bg-[#003662]/5 border-l-4 border-[#003662] text-[#003662]/90 italic">
              Outil de psychométrie patrimoniale destiné aux professionnels souhaitant intégrer la dimension comportementale et émotionnelle dans leur démarche de conseil, au-delà du seul profil de risque financier.
            </blockquote>
          </div>
        </section>

        {/* Une vraie approche psychométrique — 4 piliers */}
        <section className="py-20 md:py-24 bg-[#003662]">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-white/60 text-sm font-medium tracking-widest uppercase mb-3 text-center">Fondements</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4 text-center">
              Une approche psychométrique structurée
            </h2>
            <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto text-base leading-relaxed">
              PatrimEmotion® n&apos;est pas une approche intuitive ou narrative : questionnaire structuré, axes, scores, pondérations et grille d&apos;interprétation comportementale.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {PILIERS_PSYCHOMETRIE.map((p, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4ca3a] text-[#003662] font-semibold text-sm">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{p.titre}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">{p.texte}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ce qui distingue PatrimEmotion */}
        <section className="py-20 md:py-24 section-alt-blue">
          <div className="container mx-auto px-4 max-w-5xl">
            <p className="text-[#003662]/60 text-sm font-medium tracking-widest uppercase mb-3 text-center">Différenciation</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#003662] mb-10 text-center">
              Ce qui distingue PatrimEmotion® des questionnaires réglementaires
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 md:p-8 rounded-2xl bg-white shadow-md border border-[#003662]/10">
                <h3 className="text-[#003662] font-semibold mb-4 text-xl">Questionnaires MiFID / DDA</h3>
                <ul className="text-[#003662]/90 text-sm md:text-base space-y-3 leading-relaxed">
                  <li className="flex items-start gap-2"><span className="text-[#003662]/50 mt-1.5">•</span> Mesure de l&apos;aversion aux pertes</li>
                  <li className="flex items-start gap-2"><span className="text-[#003662]/50 mt-1.5">•</span> Évaluation de la connaissance financière</li>
                  <li className="flex items-start gap-2"><span className="text-[#003662]/50 mt-1.5">•</span> Classification en 3 ou 5 profils grossiers</li>
                  <li className="flex items-start gap-2"><span className="text-[#003662]/50 mt-1.5">•</span> Approche très normative</li>
                </ul>
              </div>
              <div className="p-6 md:p-8 rounded-2xl bg-[#003662] text-white shadow-lg border border-[#003662]">
                <h3 className="font-semibold mb-4 text-xl text-[#f4ca3a]">PatrimEmotion®</h3>
                <ul className="text-white/90 text-sm md:text-base space-y-3 leading-relaxed">
                  <li className="flex items-start gap-2"><span className="text-[#f4ca3a] mt-1.5">✓</span> Relation émotionnelle à l&apos;argent</li>
                  <li className="flex items-start gap-2"><span className="text-[#f4ca3a] mt-1.5">✓</span> Capacité à supporter l&apos;incertitude</li>
                  <li className="flex items-start gap-2"><span className="text-[#f4ca3a] mt-1.5">✓</span> Besoin de contrôle ou de délégation</li>
                  <li className="flex items-start gap-2"><span className="text-[#f4ca3a] mt-1.5">✓</span> Projection intergénérationnelle</li>
                  <li className="flex items-start gap-2"><span className="text-[#f4ca3a] mt-1.5">✓</span> Résilience face aux crises</li>
                  <li className="flex items-start gap-2"><span className="text-[#f4ca3a] mt-1.5">✓</span> Cohérence décisionnelle</li>
                </ul>
                <p className="text-white/80 text-sm mt-4 font-medium">Finance comportementale avancée.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PatrimEmotion aujourd'hui */}
        <section className="py-20 md:py-24 bg-[#003662]/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-[#003662]/60 text-sm font-medium tracking-widest uppercase mb-3 text-center">Atouts</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#003662] mb-10 text-center">
              PatrimEmotion® aujourd&apos;hui
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {AUJOURDHUI.map((item, i) => (
                <li key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#003662]/10 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#003662] text-[#f4ca3a] text-sm font-semibold">✓</span>
                  <span className="text-[#003662] font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#003662] text-center mt-8 text-base italic max-w-xl mx-auto">
              Une véritable méthode propriétaire, pas un simple argument marketing.
            </p>
          </div>
        </section>

        {/* Innovation métier */}
        <section className="py-20 md:py-24 section-alt-blue">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-[#003662]/60 text-sm font-medium tracking-widest uppercase mb-3 text-center">Marché</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#003662] mb-8 text-center">
              Innovation métier
            </h2>
            <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#003662]/10 shadow-md mb-10 max-w-3xl mx-auto">
              <p className="text-[#003662] text-center leading-relaxed">
                Très peu d&apos;acteurs disposent d&apos;un outil aussi structuré : méthode déposée (e-Soleau / INPI), certification, référentiel formateur, labellisation, approche psychométrique, moteur de scoring, Dashboard décisionnel, lien direct profil → allocation → recommandations.
              </p>
            </div>
            <p className="text-[#003662] text-center mb-5 font-semibold">
              Ce que recherchent aujourd&apos;hui :
            </p>
            <ul className="flex flex-wrap justify-center gap-3">
              {ACTEURS.map((acteur, i) => (
                <li key={i}>
                  <span className="inline-block px-5 py-2.5 rounded-full bg-[#003662] text-white text-sm font-medium hover:bg-[#003662]/90 transition-colors">
                    {acteur}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* En résumé */}
        <section className="py-20 md:py-24 bg-[#003662]">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-white/60 text-sm font-medium tracking-widest uppercase mb-4">Synthèse</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-8">
              En résumé
            </h2>
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
              PatrimEmotion® est une approche psychométrique appliquée à la gestion de patrimoine. Ce n&apos;est ni du coaching flou, ni une approche intuitive, ni un simple discours marketing : c&apos;est une méthode de profilage comportemental structurée, avec un socle méthodologique comparable aux outils utilisés en psychologie décisionnelle et en finance comportementale.
            </p>
            <p className="text-white/80 text-base font-medium">
              Innovation crédible · Valeur ajoutée conseil · Outil différenciant sur le marché français
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-24 md:py-28 section-alt-blue">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <div className="rounded-2xl bg-[#003662] p-10 md:p-14 shadow-xl border-l-4 border-[#f4ca3a]">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-6">
                Échanger avec nous
              </h2>
              <p className="text-white/90 text-lg mb-10 leading-relaxed">
                Pour un partenariat institutionnel ou une intégration dans votre organisation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-10 py-5 rounded-xl transition-all shadow-lg hover:shadow-xl text-lg"
              >
                Prendre contact
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
