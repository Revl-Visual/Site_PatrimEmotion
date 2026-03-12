import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devenez Licencié PatrimEmotion® | Certification et Licences",
  description:
    "Intégrez une méthode patrimoniale premium : questionnaire, scoring, bilan, plan d'actions, dashboard. Licences LIGHT, CORE, PREMIUM, badges et cadre d'usage professionnel.",
};

const CONTACT_URL = "/contact";
const TARIFS_URL = "/tarifs";

const POINTS_CLES = [
  "Une méthode structurée et homogène",
  "Des outils prêts à l'emploi : questionnaire, scoring, bilan, plan d'actions, dashboard",
  "Une démarche de restitution plus fluide, plus lisible et plus différenciante",
  "Un cadre d'usage clair, compatible avec les exigences de conformité du professionnel",
];

const CITATIONS_CLIENT = [
  "« Je préfère réfléchir… »",
  "« Je ne le sens pas encore… »",
  "« On va attendre un peu… »",
  "« J'ai peur de me tromper… »",
];

const BENEFICES_PRO = [
  "Une restitution plus claire et plus pédagogique",
  "Moins de blocages émotionnels dans la relation client",
  "Moins de procrastination et d'hésitation",
  "Un discours plus homogène au sein du cabinet",
  "Une expérience client plus premium",
  "Une différenciation forte dans votre pratique",
  "Une meilleure traçabilité de certains échanges et validations pédagogiques",
];

const CONTENU_LICENCE = [
  "droit d'usage encadré de la marque PatrimEmotion®",
  "accès à la méthode officielle PatrimEmotion®",
  "questionnaire officiel",
  "outil de scoring verrouillé",
  "fiches profils et matrices pédagogiques",
  "bilan PatrimEmotion®",
  "plan d'actions PatrimEmotion®",
  "dashboard Looker verrouillé selon formule",
  "trames et supports de restitution",
  "éléments de présentation et de communication professionnelle",
  "mises à jour méthodologiques",
  "support selon niveau de licence",
  "options d'accompagnement, d'audit ou de formation",
];

const BADGES_ACTUELS = [
  "Licencié Fondateur",
  "Licencié Certifié",
  "Licencié Confirmé",
  "Licencié Expert",
  "Licencié Formateur (ou mention institutionnelle spécifique selon les cas)",
];

const POUR_QUI = [
  "conseillers en gestion de patrimoine",
  "cabinets indépendants",
  "courtiers",
  "cabinets multi-conseillers",
  "agents immobiliers haut de gamme",
  "réseaux commerciaux",
  "organismes de formation",
  "structures souhaitant harmoniser leurs restitutions et améliorer l'adhésion client",
];

const PREMIUM_BENEFICES = [
  "Restitution homogène — Même structure, même niveau d'exigence, même logique pédagogique.",
  "Traçabilité renforcée — Un cadre de validation plus lisible, plus documenté et plus cohérent dans le temps.",
  "Production documentaire plus fluide — Une logique de restitution plus industrialisée pour les cabinets souhaitant standardiser certains supports.",
];

const PREMIUM_CONTENU = [
  "scoring et priorisation",
  "plans d'actions structurés",
  "restitution enrichie",
  "dashboard Looker verrouillé",
  "reporting avancé",
  "variantes de supports",
  "logique de validation contradictoire selon process du cabinet",
  "accompagnement plus poussé",
];

const FAQ_ITEMS = [
  {
    q: "Est-ce une franchise ?",
    a: "Non. Il s'agit d'une licence d'usage de marque et de méthode, dans un cadre contractuel défini.",
  },
  {
    q: "Puis-je modifier librement le questionnaire ?",
    a: "Non, sauf cas expressément prévus au contrat. Le maintien d'un cadre homogène protège la cohérence, la lisibilité et la crédibilité de la méthode.",
  },
  {
    q: "En combien de temps puis-je être opérationnel ?",
    a: "En pratique, après la formation initiale et quelques restitutions d'appropriation, l'utilisation devient rapidement fluide.",
  },
  {
    q: "Y a-t-il une exclusivité territoriale ?",
    a: "Non, sauf stipulation écrite spécifique.",
  },
  {
    q: "Est-ce un outil réglementaire MIF 2 ou DDA ?",
    a: "Non. PatrimEmotion® intervient comme outil pédagogique et méthodologique complémentaire. Il ne remplace pas les obligations réglementaires du professionnel.",
  },
  {
    q: "Puis-je personnaliser les supports ?",
    a: "Oui, dans certaines limites selon la licence choisie. Les niveaux CORE et PREMIUM permettent un encadrement plus large de la personnalisation.",
  },
  {
    q: "Le Premium génère-t-il une allocation ?",
    a: "Non. Le Premium peut intégrer un visuel de répartition pédagogique issu d'une source externe, mais il ne génère ni ne recommande d'allocation d'actifs à partir des résultats PatrimEmotion®.",
  },
];

export default function CertificationLicencesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="-mt-2 md:-mt-3 pt-0 pb-0 px-4">
          <div className="hero-encart pt-16 pb-14 md:pt-20 md:pb-18 px-6 md:px-12">
            <div className="container mx-auto relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-4 leading-[1.2] tracking-tight">
                  Devenez <span className="text-[#f4ca3a]">Licencié PatrimEmotion®</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 font-medium mb-6 leading-relaxed">
                  Intégrez une méthode patrimoniale premium conçue pour enrichir la qualité des échanges, fluidifier la restitution et renforcer l&apos;adhésion du client dans un cadre strictement pédagogique et professionnel.
                </p>
                <ul className="space-y-2 text-white/90 text-base md:text-lg text-left max-w-2xl mx-auto mb-10">
                  {POINTS_CLES.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#f4ca3a] shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href={CONTACT_URL}
                    className="inline-flex items-center justify-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:scale-[1.02]"
                  >
                    Demander une démonstration professionnelle
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href={CONTACT_URL}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition-all border-2 border-white/30"
                  >
                    Recevoir le dossier de licence
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1 — Le constat pro */}
        <section className="section-dark py-24 md:py-32 transition-colors overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-[#f4ca3a] text-sm font-semibold uppercase tracking-widest mb-4">Le constat pro</p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#003662] mb-6 leading-tight">
                Vos clients ne bloquent pas toujours sur la technique. Ils bloquent souvent sur la décision.
              </h2>
              <p className="text-xl text-[#003662]/90 mb-8 leading-relaxed">
                Dans la pratique, de nombreux échanges s&apos;interrompent non pas par manque de compétence du professionnel, mais parce que le client hésite, temporise ou n&apos;arrive pas à se projeter :
              </p>
              <ul className="space-y-3 mb-8">
                {CITATIONS_CLIENT.map((citation, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#003662]/50">—</span>
                    <span className="text-[#003662] font-medium italic">{citation}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl bg-gradient-to-br from-[#003662] to-[#004a7a] p-6 md:p-8 border-l-4 border-[#f4ca3a]">
                <p className="text-white/95 text-lg leading-relaxed">
                  PatrimEmotion® aide à mieux comprendre ces freins comportementaux afin d&apos;améliorer la qualité de la restitution, la pédagogie de l&apos;échange et la lisibilité du dialogue patrimonial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Positionnement */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-center text-[#003662]/50 text-xs font-medium tracking-[0.2em] uppercase mb-6">Positionnement</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#003662] mb-8 text-center">
              PatrimEmotion® : une méthode d&apos;éclairage comportemental appliquée à la relation patrimoniale
            </h2>
            <p className="text-[#003662]/85 mb-6 leading-[1.75]">
              PatrimEmotion® est une méthode structurée d&apos;aide à l&apos;entretien et à la restitution, destinée aux professionnels souhaitant :
            </p>
            <ul className="space-y-2 mb-8">
              {["mieux comprendre certains ressorts comportementaux du client", "adapter leur pédagogie et leur posture de restitution", "améliorer la cohérence du dialogue dans le temps", "renforcer la compréhension, la satisfaction et la fidélisation."].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#9FB620] shrink-0">•</span>
                  <span className="text-[#003662]/85">{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-xl border-2 border-[#f4ca3a]/40 bg-[#f4ca3a]/5 p-6">
              <p className="text-[#003662] font-semibold mb-2">Important</p>
              <p className="text-[#003662]/90 text-sm leading-relaxed">
                PatrimEmotion® n&apos;est ni un profil de risque réglementaire, ni un outil de recommandation automatisée, ni un mécanisme de détermination d&apos;adéquation. La méthode s&apos;inscrit dans une logique pédagogique, relationnelle et méthodologique. Le professionnel demeure seul responsable de ses obligations réglementaires et de son devoir de conseil.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 — Ce que PatrimEmotion® change */}
        <section className="py-20 md:py-28 bg-[#003662]">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-white/50 text-xs font-medium tracking-[0.2em] uppercase mb-6 text-center">Bénéfices professionnels</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4 text-center">
              Ce que PatrimEmotion® change dans votre pratique
            </h2>
            <p className="text-white/85 text-center mb-10">
              Une méthode qui améliore la qualité de vos restitutions
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
              {BENEFICES_PRO.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#f4ca3a] shrink-0">✅</span>
                  <span className="text-white/95 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 4 — Ce que contient la licence */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-center text-[#003662]/50 text-xs font-medium tracking-[0.2em] uppercase mb-6">Contenu</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#003662] mb-4 text-center">
              Ce que contient la licence
            </h2>
            <p className="text-[#003662]/80 text-center mb-8">
              Licence PatrimEmotion® PRO — Selon le niveau de licence choisi, l&apos;environnement peut inclure tout ou partie des éléments suivants :
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 max-w-2xl mx-auto">
              {CONTENU_LICENCE.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#003662]/40 shrink-0">—</span>
                  <span className="text-[#003662]/85 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 5 — Visuels et badges */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-center text-[#003662]/50 text-xs font-medium tracking-[0.2em] uppercase mb-6">Visuels & badges</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#003662] mb-8 text-center">
              Un système clair : licence du cabinet + badge du professionnel
            </h2>
            <p className="text-[#003662]/85 mb-6 leading-[1.75]">
              PatrimEmotion® distingue volontairement le <strong>niveau de licence</strong> (équipement et déploiement du cabinet) et le <strong>badge</strong> (niveau d&apos;habilitation du professionnel). Cette distinction permet une communication plus lisible et plus cohérente.
            </p>
            <div className="rounded-xl border border-[#003662]/15 bg-slate-50/80 p-6 mb-8">
              <h3 className="text-[#003662] font-semibold mb-4">Correspondances actuelles</h3>
              <ul className="space-y-2 text-sm text-[#003662]/85">
                <li><strong>Licence Fondateur</strong> → visuel noir → Badge &quot;Licencié Fondateur&quot;</li>
                <li><strong>Licence Light</strong> → visuel vert → Badge &quot;Licencié Certifié&quot;</li>
                <li><strong>Licence Core</strong> → visuel jaune → Badge &quot;Licencié Confirmé&quot;</li>
                <li><strong>Licence Premium</strong> → visuel bleu → Badge &quot;Licencié Expert&quot; + mention possible &quot;Cabinet Expert PatrimEmotion®&quot;</li>
                <li><strong>Licence Institutionnelle / Embedded</strong> → visuel gris → Badge &quot;Licencié Formateur&quot; ou mention institutionnelle dédiée selon contrat</li>
              </ul>
            </div>
            <p className="text-[#003662]/80 text-center text-sm italic">
              Le visuel de licence valorise le statut du cabinet. Le badge valorise le niveau d&apos;usage reconnu dans le cadre PatrimEmotion®.
            </p>
          </div>
        </section>

        {/* Section 6 — Niveaux de licence */}
        <section className="section-alt-blue py-24 md:py-32">
          <div className="container mx-auto px-4 max-w-6xl">
            <p className="text-center text-[#f4ca3a] text-sm font-semibold uppercase tracking-widest mb-4">Licences V2026</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#003662] mb-4 text-center">
              Les différents niveaux de licence
            </h2>
            <p className="text-[#003662]/80 text-center mb-12 max-w-2xl mx-auto">
              Un système de licences professionnelles graduées pour garantir l&apos;homogénéité de la méthode, la cohérence des supports et le respect du cadre d&apos;usage.
            </p>

            {/* Fondateur */}
            <div className="mb-10 rounded-2xl border-2 border-[#003662]/20 bg-white overflow-hidden shadow-lg">
              <div className="bg-[#1a1a1a] px-6 py-4 flex items-center gap-3">
                <span className="text-2xl" aria-hidden>⚫</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">LICENCE FONDATEUR — Early Partners</h3>
                  <p className="text-white/80 text-sm">Les 10 premiers cabinets partenaires du lancement PatrimEmotion®</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[#003662]/80 mb-4"><strong>Pour qui ?</strong> Les 10 premiers cabinets partenaires souhaitant rejoindre le lancement du réseau PatrimEmotion®.</p>
                <p className="text-[#003662]/80 mb-4"><strong>Positionnement :</strong> Formule de lancement fondée sur la licence CORE, avec des avantages spécifiques.</p>
                <ul className="space-y-1 mb-4 text-[#003662]/85">
                  <li>• base Licence CORE</li>
                  <li>• badge Licencié Fondateur</li>
                  <li>• tarif préférentiel bloqué pendant 3 ans</li>
                  <li>• intégration des évolutions prévues au contrat</li>
                </ul>
                <p className="text-[#003662] font-semibold mb-2">Tarif : 2 900 € HT / an</p>
                <Link href={CONTACT_URL} className="inline-flex items-center gap-2 text-[#003662] font-semibold hover:text-[#f4ca3a] transition-colors">Candidater à l&apos;offre Fondateur →</Link>
              </div>
            </div>

            {/* Light */}
            <div className="mb-10 rounded-2xl border-2 border-[#9FB620]/40 bg-white overflow-hidden shadow-lg">
              <div className="bg-[#9FB620] px-6 py-4 flex items-center gap-3">
                <span className="text-2xl" aria-hidden>🟢</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">LICENCE LIGHT — L&apos;essentiel pour démarrer</h3>
                  <p className="text-white/90 text-sm">Cabinet indépendant ou professionnel individuel</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[#003662]/80 mb-4"><strong>Pour qui ?</strong> Cabinet indépendant ou professionnel souhaitant démarrer avec un cadre simple, structuré et individuel.</p>
                <ul className="space-y-1 mb-4 text-[#003662]/85 text-sm">
                  <li>• questionnaire officiel, bilan PatrimEmotion® V2026 standard, outil de scoring verrouillé</li>
                  <li>• formation initiale distancielle, support email standard</li>
                  <li>• droit d&apos;usage de la marque, badge Licencié Certifié</li>
                  <li>• 1 conseiller nominatif inclus</li>
                </ul>
                <p className="text-[#003662] font-semibold mb-2">Tarif : 1 490 € HT / an ou 149 € HT / mois (engagement 12 mois)</p>
                <p className="text-[#003662]/70 text-sm mb-2">Options : utilisateur supplémentaire 390 € HT/an, formation avancée 490 € HT, audit restitution 350 € HT</p>
                <Link href={CONTACT_URL} className="inline-flex items-center gap-2 text-[#003662] font-semibold hover:text-[#f4ca3a] transition-colors">Demander une démo →</Link>
              </div>
            </div>

            {/* Core */}
            <div className="mb-10 rounded-2xl border-2 border-[#f4ca3a]/50 bg-white overflow-hidden shadow-lg">
              <div className="bg-[#d4a808] px-6 py-4 flex items-center gap-3">
                <span className="text-2xl" aria-hidden>🟡</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">LICENCE CORE — Le socle opérationnel</h3>
                  <p className="text-white/90 text-sm">Cabinet structuré 2 à 5 conseillers</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[#003662]/80 mb-4"><strong>Pour qui ?</strong> Cabinet structuré de 2 à 5 conseillers souhaitant intégrer PatrimEmotion® de façon plus complète.</p>
                <ul className="space-y-1 mb-4 text-[#003662]/85 text-sm">
                  <li>• tout le contenu LIGHT + dashboard Looker verrouillé, matrices pédagogiques élargies</li>
                  <li>• kit conformité entretien, support prioritaire, branding cabinet encadré</li>
                  <li>• badge Licencié Confirmé — jusqu&apos;à 5 conseillers</li>
                </ul>
                <p className="text-[#003662] font-semibold mb-2">Tarif : 3 900 € HT / an ou 390 € HT / mois (engagement 12 mois)</p>
                <p className="text-[#003662]/70 text-sm mb-2">Options : utilisateur supplémentaire 490 € HT/an, formation équipe sur site (devis), audit conformité annuel 790 € HT</p>
                <Link href={CONTACT_URL} className="inline-flex items-center gap-2 text-[#003662] font-semibold hover:text-[#f4ca3a] transition-colors">Demander une démo →</Link>
              </div>
            </div>

            {/* Premium */}
            <div className="mb-10 rounded-2xl border-2 border-[#003662]/30 bg-white overflow-hidden shadow-lg">
              <div className="bg-[#003662] px-6 py-4 flex items-center gap-3">
                <span className="text-2xl" aria-hidden>🔵</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">LICENCE PREMIUM — Version avancée</h3>
                  <p className="text-white/90 text-sm">Cabinet expert, multisites ou structure avancée</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[#003662]/80 mb-4"><strong>Pour qui ?</strong> Cabinet expert, cabinet multisites ou structure souhaitant aller plus loin dans la personnalisation et le pilotage.</p>
                <ul className="space-y-1 mb-4 text-[#003662]/85 text-sm">
                  <li>• tout le contenu CORE + matrices avancées, paramétrage visuel répartition pédagogique</li>
                  <li>• reporting cabinet avancé, formation approfondie, supports stratégiques</li>
                  <li>• mention Cabinet Expert PatrimEmotion®, badge Licencié Expert — jusqu&apos;à 15 conseillers</li>
                </ul>
                <p className="text-[#003662] font-semibold mb-2">Tarif : 9 800 € HT / an ou 980 € HT / mois (engagement 12 mois)</p>
                <p className="text-[#003662]/70 text-sm mb-2">Options : utilisateur supplémentaire 590 € HT/an, intervention événement cabinet (devis), audit méthodologique 1 200 € HT</p>
                <Link href={CONTACT_URL} className="inline-flex items-center gap-2 text-[#003662] font-semibold hover:text-[#f4ca3a] transition-colors">Demander une démo →</Link>
              </div>
            </div>

            {/* Institutionnelle */}
            <div className="rounded-2xl border-2 border-slate-300 bg-slate-50 overflow-hidden">
              <div className="bg-slate-400 px-6 py-4 flex items-center gap-3">
                <span className="text-2xl" aria-hidden>⚪</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">LICENCE INSTITUTIONNELLE / EMBEDDED</h3>
                  <p className="text-white/90 text-sm">(non disponible pour le moment)</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[#003662]/80 mb-4"><strong>Pour qui ?</strong> Banques, assureurs, fintechs, plateformes ou réseaux nationaux souhaitant une intégration plus large.</p>
                <p className="text-[#003662]/70 text-sm mb-2">Tarification indicative : ticket d&apos;entrée 25 000 € à 75 000 € HT, redevance annuelle 15 000 € à 60 000 € HT. Offre non ouverte à ce jour. Étude sur demande.</p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link href={TARIFS_URL} className="inline-flex items-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-6 py-3.5 rounded-xl transition-colors">
                Voir la grille tarifaire
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 7 — Formation et reconnaissance */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-center text-[#003662]/50 text-xs font-medium tracking-[0.2em] uppercase mb-6">Formation & badges</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#003662] mb-8 text-center">
              Formation initiale, accompagnement et badges
            </h2>
            <p className="text-[#003662]/85 mb-6 leading-[1.75]">
              L&apos;usage homogène de PatrimEmotion® suppose un cadre commun de compréhension, de vocabulaire et de restitution. Selon le niveau de licence et le parcours suivi, des formations et audits peuvent être proposés pour une bonne appropriation de la méthode, une utilisation homogène des supports et le respect des limites d&apos;usage.
            </p>
            <p className="text-[#003662]/85 mb-4 leading-[1.75]">
              Les badges PatrimEmotion® sont des signes internes d&apos;usage encadré. Ils ne constituent ni une certification d&apos;État, ni un agrément réglementaire, ni une validation AMF.
            </p>
            <div className="rounded-lg border border-[#003662]/15 bg-slate-50/80 p-4 text-sm text-[#003662]/80 italic mb-6">
              &quot;Badge interne délivré dans le cadre de la méthode PatrimEmotion®. Il ne constitue ni une certification d&apos;État, ni un agrément réglementaire, ni une validation AMF.&quot;
            </div>
            <p className="text-[#003662]/80 text-sm">Badges actuellement utilisés : {BADGES_ACTUELS.join(", ")}.</p>
          </div>
        </section>

        {/* Section 8 — Pour qui ? */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-center text-[#003662]/50 text-xs font-medium tracking-[0.2em] uppercase mb-6">Cibles</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#003662] mb-8 text-center">
              À qui s&apos;adresse PatrimEmotion® ?
            </h2>
            <p className="text-[#003662]/85 mb-6 leading-[1.75] text-center">
              PatrimEmotion® s&apos;adresse aux professionnels et structures souhaitant enrichir la qualité de leur relation client dans un cadre méthodologique structuré :
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {POUR_QUI.map((item, i) => (
                <span key={i} className="inline-block px-4 py-2 rounded-lg bg-white border border-[#003662]/10 text-[#003662]/90 text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9 — Version Premium */}
        <section className="py-20 md:py-28 bg-[#003662]">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-white/50 text-xs font-medium tracking-[0.2em] uppercase mb-6 text-center">Niveau avancé</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4 text-center">
              Version Premium : ce que le niveau avancé apporte
            </h2>
            <p className="text-white/85 text-center mb-10">
              PatrimEmotion® Premium — Standardisez vos restitutions clients
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {PREMIUM_BENEFICES.map((item, i) => (
                <div key={i} className="p-5 rounded-xl bg-white/10 border border-white/20">
                  <span className="text-[#f4ca3a] block mb-2">✅</span>
                  <p className="text-white/95 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-white/85 text-center mb-4">Ce que contient le Premium :</p>
            <ul className="flex flex-wrap justify-center gap-2">
              {PREMIUM_CONTENU.map((item, i) => (
                <li key={i} className="px-3 py-1.5 rounded-lg bg-white/10 text-white/90 text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 10 — Comment ça marche */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-center text-[#f4ca3a] text-sm font-semibold uppercase tracking-widest mb-4">Processus</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#003662] mb-10 text-center">
              Comment ça marche ?
            </h2>
            <p className="text-[#003662]/80 text-center mb-10">Un parcours simple en 3 étapes</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-2xl bg-slate-50 border border-[#003662]/10">
                <div className="w-14 h-14 rounded-full bg-[#f4ca3a] text-[#003662] font-bold text-xl flex items-center justify-center mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold text-[#003662] mb-2">Le client répond au questionnaire</h3>
                <p className="text-[#003662]/80 text-sm">Les axes et indicateurs sont structurés par la méthode.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-slate-50 border border-[#003662]/10">
                <div className="w-14 h-14 rounded-full bg-[#f4ca3a] text-[#003662] font-bold text-xl flex items-center justify-center mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold text-[#003662] mb-2">Le professionnel réalise sa restitution</h3>
                <p className="text-[#003662]/80 text-sm">Il utilise les supports PatrimEmotion® dans le respect du cadre d&apos;usage.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-slate-50 border border-[#003662]/10">
                <div className="w-14 h-14 rounded-full bg-[#f4ca3a] text-[#003662] font-bold text-xl flex items-center justify-center mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold text-[#003662] mb-2">Le cabinet produit un support clair</h3>
                <p className="text-[#003662]/80 text-sm">Bilan, plan d&apos;actions, restitution enrichie, selon le niveau de licence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 11 — Encadré conformité */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="container mx-auto px-4 max-w-2xl">
            <p className="text-center text-[#003662]/50 text-xs font-medium tracking-[0.2em] uppercase mb-6">Cadre d&apos;usage</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#003662] mb-8 text-center">
              Cadre d&apos;usage et conformité
            </h2>
            <p className="text-[#003662]/85 mb-6 leading-[1.75]">
              PatrimEmotion® est une méthode pédagogique d&apos;aide à l&apos;entretien et à la restitution. Elle vise à améliorer la compréhension du client, la qualité des échanges et la cohérence de certains supports de restitution.
            </p>
            <p className="text-[#003662]/85 mb-4 font-medium">Elle ne constitue pas :</p>
            <ul className="space-y-2 mb-6 text-[#003662]/85">
              <li>• une recommandation personnalisée automatisée</li>
              <li>• un outil de profil de risque réglementaire</li>
              <li>• un dispositif se substituant aux obligations de connaissance client</li>
              <li>• un mécanisme d&apos;adéquation ou de recommandations au sens réglementaire</li>
            </ul>
            <p className="text-[#003662]/85 font-medium">Le professionnel demeure seul responsable de ses obligations réglementaires, de ses analyses, de ses recommandations et du cadre juridique applicable à son activité.</p>
          </div>
        </section>

        {/* Section 12 — FAQ */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-2xl">
            <p className="text-center text-[#f4ca3a] text-sm font-semibold uppercase tracking-widest mb-4">FAQ Pro</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#003662] mb-10 text-center">
              Questions fréquentes
            </h2>
            <div className="space-y-2">
              {FAQ_ITEMS.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-[#003662]/15 bg-slate-50/50 overflow-hidden"
                >
                  <summary className="px-5 py-4 cursor-pointer list-none font-semibold text-[#003662] flex items-center justify-between gap-2">
                    <span>{item.q}</span>
                    <span className="text-[#003662]/50 group-open:rotate-180 transition-transform shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-4 pt-0 text-[#003662]/85 text-sm leading-relaxed border-t border-[#003662]/10">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Section 13 — SEO / Conclusion + CTA final */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#003662] mb-6">
              Pourquoi rejoindre PatrimEmotion® ?
            </h2>
            <p className="text-[#003662]/85 mb-8 leading-[1.75]">
              Rejoindre PatrimEmotion®, c&apos;est intégrer une méthode patrimoniale premium pensée pour les professionnels qui veulent mieux structurer leurs restitutions, fluidifier certains échanges sensibles, apporter plus de pédagogie à leur pratique, se différencier avec une démarche haut de gamme, tout en conservant un cadre d&apos;usage clair et rigoureux.
            </p>
            <div className="rounded-2xl border-2 border-[#003662]/15 bg-white p-8 md:p-10 shadow-lg">
              <h3 className="text-xl font-serif font-semibold text-[#003662] mb-4">Demandez une démonstration et recevez le dossier de licence</h3>
              <p className="text-[#003662]/80 mb-6">
                Découvrez les niveaux de licence PatrimEmotion®, les visuels associés, les badges, les conditions d&apos;accès et le cadre d&apos;usage professionnel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={CONTACT_URL}
                  className="inline-flex items-center justify-center gap-2 bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-6 py-3.5 rounded-xl transition-all"
                >
                  Demander une démonstration professionnelle
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link
                  href={CONTACT_URL}
                  className="inline-flex items-center justify-center gap-2 bg-[#003662] hover:bg-[#004a7a] text-white font-semibold px-6 py-3.5 rounded-xl transition-all"
                >
                  Recevoir le dossier complet
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
