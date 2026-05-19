import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CtaButton } from "@/components/CtaButton";
import { CtaRow } from "@/components/CtaRow";
import {
  TarifsLicencesDesktopTable,
  TarifsLicencesMobileCards,
} from "@/components/tarifs/TarifsLicencesTable";
import {
  TarifsOptionsDesktopTable,
  TarifsOptionsMobileCards,
} from "@/components/tarifs/TarifsOptionsTable";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Licences et tarification | PatrimEmotion®",
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
    "https://docs.google.com/forms/d/e/1FAIpQLSfYua3beU09XUzd2DqzM-eQA8eHeRCDeZ3NwvHwZX0dZFBKUg/viewform";
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
                <h1 className="pe-heading-hero mb-4 text-balance text-[#f4ca3a]">
                  Licences et tarification
                </h1>
                <p className="pe-body-lead pe-lead-centered mb-4 leading-relaxed text-white/90">
                  Grille tarifaire officielle PatrimEmotion® V2026. Licences professionnelles.
                </p>
                <p className="pe-lead-centered mx-auto max-w-2xl text-sm italic leading-relaxed text-white/70">
                  Tarifs indicatifs HT – hors formation présentielle spécifique et prestations sur devis
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vue d'ensemble — table des licences */}
        <section id="licences" className="scroll-mt-28 bg-white py-24 md:py-32 transition-colors">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="pe-heading-section mb-4 text-balance text-center text-[#003662]">
                Vue d&apos;ensemble des <span className="text-[#f4ca3a]">tarifs</span>
              </h2>
              <p className="pe-body-lead pe-lead-centered mx-auto mb-12 max-w-2xl text-balance leading-relaxed text-[#003662]/80">
                Choisissez la formule adaptée à la taille et aux besoins de votre cabinet
              </p>
              <div className="overflow-hidden rounded-2xl border border-[#003662]/10 bg-white shadow-[0_4px_24px_rgba(0,54,98,0.08)]">
                <TarifsLicencesMobileCards />
                <TarifsLicencesDesktopTable />
                <p className="border-t border-[#003662]/10 px-4 py-3 text-center text-sm text-[#003662]/60 sm:px-5">
                  INSTITUTIONNELLE (non disponible pour le moment)
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
                <div className="flex items-center gap-3 bg-[#1a1a1a] px-6 py-5">
                  <span className="text-2xl" aria-hidden>⚫</span>
                  <div>
                    <h2 className="pe-heading-section text-white">
                      Licence Fondateur <span className="text-[#f4ca3a]">(Early Partners)</span>
                    </h2>
                    <p className="mt-1 text-sm text-white/80">Réservée aux 10 premiers cabinets – lancement réseau</p>
                  </div>
                </div>
                <div className="bg-[#e8ecf0] p-8 md:p-10 text-[#1a1a1a]">
                  <p className="pe-body-lead mb-4 font-semibold leading-relaxed text-[#f4ca3a]">
                    Tarif 2 900 € HT / an (base CORE)
                  </p>
                  <ul className="mb-6 space-y-2 pe-body-lead leading-relaxed text-[#1a1a1a]">
                    <li className="flex items-start gap-2"><span className="shrink-0 text-[#1a1a1a]">✓</span> Licence CORE (« socle opérationnel »)</li>
                    <li className="flex items-start gap-2"><span className="shrink-0 text-[#1a1a1a]">✓</span> Badge « Licencié Fondateur »</li>
                    <li className="flex items-start gap-2"><span className="shrink-0 text-[#1a1a1a]">✓</span> Tarif bloqué 3 ans (voir règle Fondateur)</li>
                    <li className="flex items-start gap-2"><span className="shrink-0 text-[#1a1a1a]">✓</span> Intégration des évolutions V2026 (selon contrat)</li>
                  </ul>
                  <div className="rounded-xl bg-white/80 border border-[#1a1a1a]/10 p-5">
                    <p className="pe-body-lead leading-relaxed text-[#1a1a1a]">
                      <span className="font-semibold text-[#1a1a1a]">Règle Fondateur</span> – La Licence Fondateur est une licence CORE au tarif préférentiel, <strong>tarif bloqué 3 ans</strong>, réservée aux <strong>10 premiers cabinets</strong>, sous réserve du respect des conditions du Contrat (paiement, usage marque, conformité, limites d&apos;usage).
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
            <h2 className="pe-heading-section mb-4 text-balance text-center text-[#003662]">
              Choisissez votre <span className="text-[#f4ca3a]">licence</span>
            </h2>
            <p className="pe-body-lead pe-lead-centered mx-auto mb-16 max-w-2xl text-balance leading-relaxed text-[#003662]/80">
              LIGHT, CORE ou PREMIUM selon la taille de votre cabinet et vos besoins
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* LIGHT — en-tête vert + corps « Les fondements » */}
              <a
                href={LICENCE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#9FB620]/35 bg-white shadow-md transition-all hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="border-b border-[#8aa61d] bg-[#9FB620] px-6 py-4">
                  <h3 className="pe-heading-card text-white">Licence LIGHT</h3>
                  <p className="mt-1 text-sm text-white/90">L&apos;essentiel pour démarrer</p>
                </div>
                <div className="flex flex-1 flex-col bg-gradient-to-br from-[#9FB620]/[0.18] to-[#9FB620]/[0.08] p-6">
                  <p className="mb-3 text-sm font-bold leading-snug text-[#9FB620]">
                    Utilisation individuelle
                    <br />
                    Cabinet indépendant
                  </p>
                  <div className="mb-4">
                    <span className="text-2xl font-semibold text-[#9FB620]">1 490 €</span>
                    <span className="font-bold text-[#9FB620]"> HT / an</span>
                    <p className="mt-0.5 text-sm text-[#9FB620]">ou 149 € HT / mois (engagement 12 mois)</p>
                  </div>
                  <p className="mb-2 text-sm font-semibold text-[#9FB620]">Inclut</p>
                  <ul className="mb-4 flex-1 space-y-1.5 text-sm text-[#9FB620]">
                    {LIGHT_FEATURES.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="shrink-0 text-xl font-semibold text-[#9FB620]" aria-hidden>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-medium text-[#9FB620]">1 conseiller nominatif</p>
                  <p className="mt-2 text-xs sm:text-sm text-[#9FB620] leading-relaxed">
                    Options : utilisateur supp. 390 €/an, formation avancée 490 €, audit restitution 350 €
                  </p>
                </div>
              </a>

              {/* CORE — en-tête jaune + corps « La démarche » */}
              <a
                href={LICENCE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#9FB620]/25 bg-white shadow-md transition-all hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="border-b border-[#dcb026] bg-[#f4ca3a] px-6 py-4">
                  <h3 className="pe-heading-card text-[#003662]">Licence CORE</h3>
                  <p className="mt-1 text-sm text-[#003662]/85">Le socle opérationnel (standard pro)</p>
                </div>
                <div className="flex flex-1 flex-col bg-gradient-to-br from-[#9FB620]/[0.08] to-transparent p-6">
                  <p className="mb-3 text-sm font-bold text-[#f4ca3a]">Cabinet structuré (2-5 conseillers)</p>
                  <div className="mb-4">
                    <span className="text-2xl font-semibold text-[#f4ca3a]">3 900 €</span>
                    <span className="font-bold text-[#f4ca3a]"> HT / an</span>
                    <p className="mt-0.5 text-sm text-[#f4ca3a]">ou 390 € HT / mois (engagement 12 mois)</p>
                  </div>
                  <p className="mb-2 text-sm font-semibold text-[#f4ca3a]">Inclut</p>
                  <ul className="mb-4 flex-1 space-y-1.5 text-sm text-[#f4ca3a]">
                    {CORE_FEATURES.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="shrink-0 text-xl font-semibold text-[#f4ca3a]" aria-hidden>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-medium text-[#f4ca3a]">Jusqu&apos;à 5 conseillers</p>
                  <p className="mt-2 text-xs sm:text-sm text-[#f4ca3a] leading-relaxed">
                    Options : utilisateur supp. 490 €/an, formation sur site sur devis, audit conformité 790 €
                  </p>
                </div>
              </a>

              {/* PREMIUM — en-tête bleu + corps « Le constat » */}
              <a
                href={LICENCE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#003662]/10 bg-white shadow-md transition-all hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="border-b border-[#002949] bg-[#003662] px-6 py-4">
                  <h3 className="pe-heading-card text-white">Licence PREMIUM</h3>
                  <p className="mt-1 text-sm text-white/85">La version avancée</p>
                </div>
                <div className="flex flex-1 flex-col bg-gradient-to-br from-[#003662]/[0.05] to-transparent p-6">
                  <p className="mb-3 text-sm font-bold text-[#003662]">Cabinet expert / multisites</p>
                  <div className="mb-4">
                    <span className="text-2xl font-semibold text-[#003662]">9 800 €</span>
                    <span className="font-bold text-[#003662]"> HT / an</span>
                    <p className="mt-0.5 text-sm text-[#003662]/90">ou 980 € HT / mois (engagement 12 mois)</p>
                  </div>
                  <p className="mb-2 text-sm font-semibold text-[#003662]">Inclut</p>
                  <ul className="mb-4 flex-1 space-y-1.5 text-sm text-[#003662]/90">
                    {PREMIUM_FEATURES.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="shrink-0 text-xl font-semibold text-[#003662]" aria-hidden>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#003662] text-sm font-medium">Jusqu&apos;à 15 conseillers</p>
                  <p className="mt-2 text-xs sm:text-sm text-[#003662]/90 leading-relaxed">Options : utilisateur supp. 590 €/an, intervention événement sur devis, audit méthodologique 1 200 €</p>
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
              <h2 className="pe-heading-section mb-4 text-center text-[#f4ca3a]">
                Options (HT)
              </h2>
              <p className="pe-body-lead pe-lead-centered text-[#003662]/80 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
                Complétez votre licence selon vos besoins
              </p>
              <div className="overflow-hidden rounded-2xl border border-[#003662]/10 bg-white shadow-[0_4px_24px_rgba(0,54,98,0.08)]">
                <TarifsOptionsMobileCards />
                <TarifsOptionsDesktopTable />
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
