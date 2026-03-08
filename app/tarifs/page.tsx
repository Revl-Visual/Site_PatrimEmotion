import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs | PatrimEmotion®",
  description: "Grille tarifaire PatrimEmotion® V2026. Licences LIGHT, CORE, PREMIUM et options (HT).",
};

const LIGHT_FEATURES = [
  "Questionnaire officiel PatrimEmotion®",
  "Bilan PatrimEmotion® V2026 (standard)",
  "Outil de scoring verrouillé",
  "Formation initiale distanciel",
  "Support email standard",
  "Droit d'usage de la marque PatrimEmotion®",
  "Badge « Licencié Certifié »",
];

const CORE_FEATURES = [
  "Tout LIGHT",
  "Dashboard Looker verrouillé",
  "Matrices pédagogiques élargies",
  "Kit conformité entretien (supports, mentions, lexique)",
  "Support prioritaire",
  "Branding cabinet (logo, coordonnées, charte légère)",
  "Badge « Licencié Confirmé »",
];

const PREMIUM_FEATURES = [
  "Tout CORE",
  "Accès matrices avancées",
  "Paramétrage visuel répartition pédagogique",
  "Reporting cabinet avancé",
  "Formation approfondie",
  "Supports stratégiques (déploiement, qualité, usage)",
  "Mention « Cabinet Expert PatrimEmotion® »",
  "Badge « Licencié Expert »",
];

export default function TarifsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero — style accueil */}
        <section className="bg-[#003662] py-24 md:py-32 transition-colors">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6 leading-tight">
                <span className="text-[#f4ca3a]">Tarifs</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-4">
                Grille tarifaire officielle PatrimEmotion® V2026. Licences professionnelles.
              </p>
              <p className="text-white/70 text-sm italic">
                Tarifs indicatifs HT – hors formation présentielle spécifique et prestations sur devis
              </p>
            </div>
          </div>
        </section>

        {/* Vue d'ensemble — table des licences */}
        <section className="bg-white py-24 md:py-32 transition-colors">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-center text-[#003662] mb-4 leading-tight">
                Vue d&apos;ensemble des <span className="text-[#f4ca3a]">licences</span>
              </h2>
              <p className="text-xl text-[#003662]/80 text-center mb-12 max-w-2xl mx-auto">
                Choisissez la formule adaptée à la taille et aux besoins de votre cabinet
              </p>
              <div className="rounded-2xl shadow-[0_4px_24px_rgba(0,54,98,0.08)] border border-[#003662]/10 overflow-hidden bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[640px]">
                    <thead>
                      <tr className="bg-[#003662] text-white">
                        <th className="px-5 py-4 font-semibold text-base">Offre</th>
                        <th className="px-5 py-4 font-semibold text-base">Tarif annuel HT</th>
                        <th className="px-5 py-4 font-semibold text-base">Tarif mensuel HT</th>
                        <th className="px-5 py-4 font-semibold text-base">Engagement</th>
                        <th className="px-5 py-4 font-semibold text-base">Utilisateurs inclus</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#003662]">
                      {[
                        ["Licence Fondateur", "2 900 €", "—", "12 mois", "Selon CORE"],
                        ["Licence LIGHT", "1 490 €", "149 €", "12 mois", "1 nominatif"],
                        ["Licence CORE", "3 900 €", "390 €", "12 mois", "Jusqu'à 5"],
                        ["Licence PREMIUM", "9 800 €", "980 €", "12 mois", "Jusqu'à 15"],
                        ["Institutionnelle / Embedded", "Ticket 25k–75k €", "—", "Sur devis", "Selon volumétrie"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#003662]/10 last:border-0 hover:bg-[#003662]/5 transition-colors">
                          <td className="px-5 py-4 font-medium">{row[0]}</td>
                          <td className="px-5 py-4">{row[1]}</td>
                          <td className="px-5 py-4">{row[2]}</td>
                          <td className="px-5 py-4">{row[3]}</td>
                          <td className="px-5 py-4">{row[4]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="px-5 py-3 text-[#003662]/60 text-sm border-t border-[#003662]/10">
                  Institutionnelle / Embedded (non disponible pour le moment)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Licence Fondateur — encart bleu style accueil */}
        <section className="bg-[#003662] py-24 md:py-32 transition-colors">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl bg-white/10 border border-white/20 p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">
                  Licence Fondateur <span className="text-[#f4ca3a]">(avantages Early Partners)</span>
                </h2>
                <p className="text-white/90 mb-4">Réservée aux 10 premiers cabinets – lancement réseau.</p>
                <p className="text-white text-lg mb-6">
                  <span className="text-[#f4ca3a] font-semibold">Tarif</span> 2 900 € HT / an (base CORE)
                </p>
                <ul className="space-y-2 text-white/90 mb-6">
                  <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Licence CORE (« socle opérationnel »)</li>
                  <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Badge « Licencié Fondateur »</li>
                  <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Tarif bloqué 3 ans (voir règle Fondateur)</li>
                  <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Intégration des évolutions V2026 (selon contrat)</li>
                </ul>
                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    <span className="font-semibold text-[#f4ca3a]">Règle Fondateur</span> – La Licence Fondateur est une licence CORE au tarif préférentiel, <strong>tarif bloqué 3 ans</strong>, réservée aux <strong>10 premiers cabinets</strong>, sous réserve du respect des conditions du Contrat (paiement, usage marque, conformité, limites d&apos;usage).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 licences en cartes — style "Nos 3 solutions" */}
        <section className="bg-white py-24 md:py-32 transition-colors">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-center text-[#003662] mb-4 leading-tight">
              Choisissez votre <span className="text-[#f4ca3a]">licence</span>
            </h2>
            <p className="text-xl text-[#003662]/80 text-center mb-16 max-w-2xl mx-auto">
              LIGHT, CORE ou PREMIUM selon la taille de votre cabinet et vos besoins
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* LIGHT */}
              <div className="flex flex-col rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,54,98,0.08)] border border-[#003662]/10 overflow-hidden transition-all hover:shadow-xl hover:scale-[1.02] h-full">
                <div className="bg-[#9FB620]/15 px-6 py-4 border-b border-[#9FB620]/30">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#003662]">Licence LIGHT</h3>
                  <p className="text-[#003662]/80 text-sm mt-1">L&apos;essentiel pour démarrer</p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-[#003662]/80 text-sm mb-3 flex items-center gap-2">
                    <span className="text-[#9FB620]">✓</span> Utilisation individuelle – cabinet indépendant
                  </p>
                  <div className="mb-4">
                    <span className="text-2xl font-semibold text-[#003662]">1 490 €</span>
                    <span className="text-[#003662]/70"> HT / an</span>
                    <p className="text-sm text-[#003662]/70 mt-0.5">ou 149 € HT / mois (engagement 12 mois)</p>
                  </div>
                  <p className="text-[#003662] font-semibold text-sm mb-2">Inclut</p>
                  <ul className="space-y-1.5 text-[#003662]/90 text-sm mb-4 flex-1">
                    {LIGHT_FEATURES.map((f, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span>{f}</li>
                    ))}
                  </ul>
                  <p className="text-[#003662] text-sm font-medium">1 conseiller nominatif</p>
                  <p className="text-[#003662]/80 text-xs mt-2">Options : utilisateur supp. 390 €/an, formation avancée 490 €, audit restitution 350 €</p>
                </div>
              </div>

              {/* CORE — mise en avant */}
              <div className="flex flex-col rounded-2xl bg-[#003662] shadow-[0_4px_24px_rgba(0,54,98,0.2)] overflow-hidden transition-all hover:shadow-xl hover:scale-[1.02] h-full relative">
                <div className="absolute top-4 right-4 bg-[#f4ca3a] text-[#003662] px-3 py-1 rounded-full text-xs font-semibold">Populaire</div>
                <div className="bg-[#f4ca3a]/20 px-6 py-4 border-b border-[#f4ca3a]/30">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-white">Licence CORE</h3>
                  <p className="text-white/80 text-sm mt-1">Le socle opérationnel (standard pro)</p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-white/90 text-sm mb-3 flex items-center gap-2">
                    <span className="text-[#9FB620]">✓</span> Cabinet structuré (2-5 conseillers)
                  </p>
                  <div className="mb-4">
                    <span className="text-2xl font-semibold text-[#f4ca3a]">3 900 €</span>
                    <span className="text-white/80"> HT / an</span>
                    <p className="text-sm text-white/70 mt-0.5">ou 390 € HT / mois (engagement 12 mois)</p>
                  </div>
                  <p className="text-white font-semibold text-sm mb-2">Inclut</p>
                  <ul className="space-y-1.5 text-white/90 text-sm mb-4 flex-1">
                    {CORE_FEATURES.map((f, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span>{f}</li>
                    ))}
                  </ul>
                  <p className="text-white/90 text-sm font-medium">Jusqu&apos;à 5 conseillers</p>
                  <p className="text-white/70 text-xs mt-2">Options : utilisateur supp. 490 €/an, formation sur site sur devis, audit conformité 790 €</p>
                </div>
              </div>

              {/* PREMIUM */}
              <div className="flex flex-col rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,54,98,0.08)] border border-[#003662]/10 overflow-hidden transition-all hover:shadow-xl hover:scale-[1.02] h-full">
                <div className="bg-[#003662]/10 px-6 py-4 border-b border-[#003662]/20">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#003662]">Licence PREMIUM</h3>
                  <p className="text-[#003662]/80 text-sm mt-1">La version avancée</p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-[#003662]/80 text-sm mb-3">Cabinet expert / multisites</p>
                  <div className="mb-4">
                    <span className="text-2xl font-semibold text-[#003662]">9 800 €</span>
                    <span className="text-[#003662]/70"> HT / an</span>
                    <p className="text-sm text-[#003662]/70 mt-0.5">ou 980 € HT / mois (engagement 12 mois)</p>
                  </div>
                  <p className="text-[#003662] font-semibold text-sm mb-2">Inclut</p>
                  <ul className="space-y-1.5 text-[#003662]/90 text-sm mb-4 flex-1">
                    {PREMIUM_FEATURES.map((f, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span>{f}</li>
                    ))}
                  </ul>
                  <p className="text-[#003662] text-sm font-medium">Jusqu&apos;à 15 conseillers</p>
                  <p className="text-[#003662]/80 text-xs mt-2">Options : utilisateur supp. 590 €/an, intervention événement sur devis, audit méthodologique 1 200 €</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Licence Institutionnelle — bandeau compact */}
        <section className="bg-[#003662] py-16 md:py-20 transition-colors">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-serif font-semibold text-white mb-2">Licence Institutionnelle / Embedded</h2>
              <p className="text-white/60 text-sm mb-4">Intégration au SI – non disponible pour le moment</p>
              <p className="text-white/90 mb-1">Banque / assureur / fintech / réseau national.</p>
              <p className="text-white/90 text-sm">Ticket d&apos;entrée 25 000 € à 75 000 € HT · Redevance annuelle 15 000 € à 60 000 € HT · Intégration moteur, UX, formation conformité, audit, documentation AMF/ACPR, badge « Licencié Formateur »</p>
            </div>
          </div>
        </section>

        {/* Options (HT) — table dans carte */}
        <section className="bg-white py-24 md:py-32 transition-colors">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-center text-[#003662] mb-4 leading-tight">
                Options <span className="text-[#f4ca3a]">(HT)</span>
              </h2>
              <p className="text-xl text-[#003662]/80 text-center mb-12 max-w-2xl mx-auto">
                Complétez votre licence selon vos besoins
              </p>
              <div className="rounded-2xl shadow-[0_4px_24px_rgba(0,54,98,0.08)] border border-[#003662]/10 overflow-hidden bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[480px]">
                    <thead>
                      <tr className="bg-[#003662] text-white">
                        <th className="px-5 py-4 font-semibold text-base">Option</th>
                        <th className="px-5 py-4 font-semibold text-base">LIGHT</th>
                        <th className="px-5 py-4 font-semibold text-base">CORE</th>
                        <th className="px-5 py-4 font-semibold text-base">PREMIUM</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#003662]">
                      {[
                        ["Utilisateur supplémentaire / an", "390 €", "490 €", "590 €"],
                        ["Formation avancée (distanciel)", "490 €", "—", "—"],
                        ["Audit restitution (qualité restitution)", "350 €", "—", "—"],
                        ["Formation équipe sur site", "—", "Sur devis (1 200–2 500 €)", "Sur devis"],
                        ["Audit conformité annuel", "—", "790 €", "—"],
                        ["Audit méthodologique", "—", "—", "1 200 €"],
                        ["Intervention événement cabinet", "—", "—", "Sur devis"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#003662]/10 last:border-0 hover:bg-[#003662]/5 transition-colors">
                          <td className="px-5 py-3.5">{row[0]}</td>
                          <td className="px-5 py-3.5 font-medium">{row[1]}</td>
                          <td className="px-5 py-3.5 font-medium">{row[2]}</td>
                          <td className="px-5 py-3.5 font-medium">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="px-5 py-4 text-[#003662]/70 text-sm italic border-t border-[#003662]/10">
                  Les prestations sur devis font l&apos;objet d&apos;un bon de commande spécifique (périmètre, date, livrables, frais éventuels).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA — style accueil */}
        <section className="bg-[#003662] py-24 md:py-32 transition-colors">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Besoin d&apos;un devis ou d&apos;échanger sur la formule adaptée à votre cabinet ?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-8 py-4 rounded-lg transition-all text-lg shadow-lg"
            >
              Nous contacter
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
