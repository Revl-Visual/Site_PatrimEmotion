import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CtaButton } from "@/components/CtaButton";
import { CtaRow } from "@/components/CtaRow";
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
  const LICENCE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSd9lGfavCwwP547D-iYKthIfvM_O8MesFoamQZACQY4FJUjAA/viewform";
  const DEVIS_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSd9lGfavCwwP547D-iYKthIfvM_O8MesFoamQZACQY4FJUjAA/viewform";
  const CONTACT_URL = "https://www.am-courtage-et-patrimoine.fr/contact";

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero — style hero-encart comme les autres pages */}
        <section className="-mt-2 md:-mt-3 pt-0 pb-0 px-4">
          <div className="hero-encart pt-16 pb-14 md:pt-20 md:pb-16 px-6 md:px-12">
            <div className="container mx-auto relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="pe-heading-hero text-white mb-4">
                  <span className="text-[#f4ca3a]">Tarifs</span>
                </h1>
                <p className="pe-body-lead text-white/90 leading-relaxed mb-4">
                  Grille tarifaire officielle PatrimEmotion® V2026. Licences professionnelles.
                </p>
                <p className="text-white/70 text-sm italic">
                  Tarifs indicatifs HT – hors formation présentielle spécifique et prestations sur devis
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vue d'ensemble — table des licences */}
        <section className="bg-white py-24 md:py-32 transition-colors">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="pe-heading-section text-center text-[#003662] mb-4">
                Vue d&apos;ensemble des <span className="text-[#f4ca3a]">licences</span>
              </h2>
              <p className="pe-body-lead text-[#003662]/80 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
                Choisissez la formule adaptée à la taille et aux besoins de votre cabinet
              </p>
              <div className="rounded-2xl shadow-[0_4px_24px_rgba(0,54,98,0.08)] border border-[#003662]/10 overflow-hidden bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[560px]">
                    <thead>
                      <tr className="bg-[#003662] text-white">
                        <th className="px-5 py-4 font-semibold text-base w-8"></th>
                        <th className="px-5 py-4 font-semibold text-base">Offre</th>
                        <th className="px-5 py-4 font-semibold text-base">Tarif annuel HT</th>
                        <th className="px-5 py-4 font-semibold text-base">Tarif mensuel HT</th>
                        <th className="px-5 py-4 font-semibold text-base">Engagement</th>
                        <th className="px-5 py-4 font-semibold text-base">Utilisateurs inclus</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#003662]">
                      {[
                        ["#1a1a1a", "Licence Fondateur", "2 900 €", "—", "12 mois", "Selon CORE"],
                        ["#9FB620", "Licence LIGHT", "1 490 €", "149 €", "12 mois", "1 nominatif"],
                        ["#d4a808", "Licence CORE", "3 900 €", "390 €", "12 mois", "Jusqu'à 5"],
                        ["#003662", "Licence PREMIUM", "9 800 €", "980 €", "12 mois", "Jusqu'à 15"],
                        ["#94a3b8", "Institutionnelle / Embedded", "Ticket 25k–75k €", "—", "Sur devis", "Selon volumétrie"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#003662]/10 last:border-0 hover:bg-[#003662]/5 transition-colors">
                          <td className="px-3 py-4 w-8">
                            <span className="inline-block w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: row[0] }} aria-hidden />
                          </td>
                          <td className="px-5 py-4 font-medium">{row[1]}</td>
                          <td className="px-5 py-4">{row[2]}</td>
                          <td className="px-5 py-4">{row[3]}</td>
                          <td className="px-5 py-4">{row[4]}</td>
                          <td className="px-5 py-4">{row[5]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="px-5 py-3 text-[#003662]/60 text-sm border-t border-[#003662]/10">
                  Institutionnelle / Embedded (non disponible pour le moment)
                </p>
              </div>
              <CtaRow>
                <CtaButton
                  href={DEVIS_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="blue"
                  className="text-base font-semibold shadow-lg shadow-[#003662]/20 hover:shadow-xl hover:scale-[1.02]"
                >
                  Faire un devis
                </CtaButton>
              </CtaRow>
            </div>
          </div>
        </section>

        {/* Licence Fondateur — visuel noir (aligné page certifications-licences) */}
        <section className="py-24 md:py-32 bg-slate-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl border-2 border-[#1a1a1a]/20 bg-white overflow-hidden shadow-xl">
                <div className="bg-[#1a1a1a] px-6 py-5 flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>⚫</span>
                  <div>
                    <h2 className="pe-heading-section text-white">
                      Licence Fondateur <span className="text-[#f4ca3a]">(Early Partners)</span>
                    </h2>
                    <p className="text-white/80 text-sm mt-1">Réservée aux 10 premiers cabinets – lancement réseau</p>
                  </div>
                </div>
                <div className="p-8 md:p-10 text-[#003662]">
                  <p className="pe-body-lead font-semibold text-[#003662] mb-4 leading-relaxed">
                    <span className="text-[#f4ca3a]">Tarif</span> 2 900 € HT / an (base CORE)
                  </p>
                  <ul className="space-y-2 pe-body-lead text-[#003662]/90 mb-6 leading-relaxed">
                    <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Licence CORE (« socle opérationnel »)</li>
                    <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Badge « Licencié Fondateur »</li>
                    <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Tarif bloqué 3 ans (voir règle Fondateur)</li>
                    <li className="flex items-start gap-2"><span className="text-[#9FB620] shrink-0">✓</span> Intégration des évolutions V2026 (selon contrat)</li>
                  </ul>
                  <div className="rounded-xl bg-slate-50 border border-[#003662]/10 p-5">
                    <p className="pe-body-lead text-[#003662]/90 leading-relaxed">
                      <span className="font-semibold text-[#003662]">Règle Fondateur</span> – La Licence Fondateur est une licence CORE au tarif préférentiel, <strong>tarif bloqué 3 ans</strong>, réservée aux <strong>10 premiers cabinets</strong>, sous réserve du respect des conditions du Contrat (paiement, usage marque, conformité, limites d&apos;usage).
                    </p>
                  </div>
                  <CtaRow spacing="none" className="mt-6">
                    <CtaButton
                      href={CONTACT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="dark"
                      className="text-sm font-semibold"
                    >
                      Être contacté
                    </CtaButton>
                  </CtaRow>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 licences en cartes — style "Nos 3 solutions" */}
        <section className="bg-white py-24 md:py-32 transition-colors">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="pe-heading-section text-center text-[#003662] mb-4">
              Choisissez votre <span className="text-[#f4ca3a]">licence</span>
            </h2>
            <p className="pe-body-lead text-[#003662]/80 text-center mb-16 max-w-2xl mx-auto leading-relaxed">
              LIGHT, CORE ou PREMIUM selon la taille de votre cabinet et vos besoins
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* LIGHT */}
              <a
                href={LICENCE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col rounded-2xl bg-white shadow-md overflow-hidden transition-all hover:shadow-xl hover:scale-[1.02] h-full cursor-pointer"
              >
                <div className="bg-[#9FB620] px-6 py-4 border-b border-[#8aa61d]">
                  <h3 className="pe-heading-card text-white">Licence LIGHT</h3>
                  <p className="text-white/90 text-sm mt-1">L&apos;essentiel pour démarrer</p>
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
              </a>

              {/* CORE — mise en avant */}
              <a
                href={LICENCE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col rounded-2xl bg-[#003662] shadow-md overflow-hidden transition-all hover:shadow-xl hover:scale-[1.02] h-full relative cursor-pointer"
              >
                <div className="bg-[#f4ca3a] px-6 py-4 border-b border-[#dcb026]">
                  <h3 className="pe-heading-card text-[#003662]">Licence CORE</h3>
                  <p className="text-[#003662]/85 text-sm mt-1">Le socle opérationnel (standard pro)</p>
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
              </a>

              {/* PREMIUM */}
              <a
                href={LICENCE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col rounded-2xl bg-white shadow-md overflow-hidden transition-all hover:shadow-xl hover:scale-[1.02] h-full cursor-pointer"
              >
                <div className="bg-[#003662] px-6 py-4 border-b border-[#002949]">
                  <h3 className="pe-heading-card text-white">Licence PREMIUM</h3>
                  <p className="text-white/85 text-sm mt-1">La version avancée</p>
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
              </a>
            </div>
            <CtaRow>
              <CtaButton
                href={LICENCE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="yellow-elevated"
                className="text-base font-semibold"
              >
                Demander ma licence
              </CtaButton>
            </CtaRow>
          </div>
        </section>

        {/* Licence Institutionnelle — visuel gris, non disponible */}
        <section id="licence-institutionnelle" className="py-20 md:py-28 bg-slate-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl border-2 border-slate-300 bg-slate-50 overflow-hidden shadow-lg">
                <div className="bg-slate-400 px-6 py-4 flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>⚪</span>
                  <div>
                    <h2 className="pe-heading-section text-white">Licence Institutionnelle / Embedded</h2>
                    <p className="text-white/90 text-sm">Non disponible pour le moment</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 text-[#003662]">
                  <p className="text-[#003662]/90 mb-2">Banque / assureur / fintech / réseau national.</p>
                  <p className="text-[#003662]/80 text-sm">Ticket d&apos;entrée 25 000 € à 75 000 € HT · Redevance annuelle 15 000 € à 60 000 € HT · Intégration moteur, UX, formation conformité, audit, documentation AMF/ACPR, badge « Licencié Formateur ». Étude sur demande.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Options (HT) — table dans carte */}
        <section className="py-24 md:py-32 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="pe-heading-section text-center text-[#003662] mb-4">
                Options <span className="text-[#f4ca3a]">(HT)</span>
              </h2>
              <p className="pe-body-lead text-[#003662]/80 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
                Complétez votre licence selon vos besoins
              </p>
              <div className="rounded-2xl shadow-[0_4px_24px_rgba(0,54,98,0.08)] border border-[#003662]/10 overflow-hidden bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[420px]">
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

      </main>
      <Footer />
    </>
  );
}
