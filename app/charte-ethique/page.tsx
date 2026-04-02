import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charte éthique | PatrimEmotion®",
  description:
    "Charte éthique PatrimEmotion® – finalité, principes, engagements client, conformité et communication responsable.",
};

export default function CharteEthiquePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-center text-white/80 text-sm uppercase tracking-wider mb-4 font-semibold">
              Méthode PatrimEmotion®
            </p>
            <h1 className="pe-heading-hero text-white text-center text-balance">
              Charte <span className="text-[#f4ca3a]">éthique</span>
            </h1>
          </div>
        </section>

        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="rounded-xl border border-[#003662]/15 bg-white p-6 md:p-8 shadow-sm mb-12 text-sm md:text-base text-[#003662]/90 leading-relaxed">
              <p className="font-semibold text-[#003662] mb-2">Version : V1 – Date : 09/02/2026</p>
              <p>
                <span className="font-semibold text-[#003662]">Objet :</span> encadrer l&apos;usage de
                PatrimEmotion® comme approche psychométrique appliquée au conseil patrimonial et financier.
              </p>
            </div>

            <div className="space-y-12 pe-body-lead text-[#003662]/90 leading-relaxed">
              {/* 1 */}
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">1) Finalité et positionnement</h2>
                <p className="mb-4">
                  PatrimEmotion® est une méthode d&apos;analyse psychométrique visant à mieux comprendre le
                  rapport d&apos;une personne à l&apos;argent, au risque, à la décision et au temps, afin de
                  mieux accompagner ses choix patrimoniaux.
                </p>
                <p>
                  PatrimEmotion® n&apos;est pas un outil médical, psychiatrique, ni un dispositif de diagnostic
                  clinique. Il ne se substitue ni au conseil réglementé, ni à l&apos;analyse de situation
                  patrimoniale, ni aux obligations légales du conseiller.
                </p>
              </div>

              {/* 2 */}
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">2) Principes fondamentaux</h2>
                <p className="mb-4">PatrimEmotion® repose sur 6 principes non négociables :</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong className="text-[#003662]">Primauté de l&apos;intérêt du client :</strong>{" "}
                    l&apos;accompagnement sert le client, pas le produit.
                  </li>
                  <li>
                    <strong className="text-[#003662]">Libre arbitre et autonomie :</strong> la méthode éclaire
                    la décision, elle ne décide pas à la place du client.
                  </li>
                  <li>
                    <strong className="text-[#003662]">Transparence :</strong> explication claire de ce que
                    mesure (et ne mesure pas) l&apos;outil, et de ses limites.
                  </li>
                  <li>
                    <strong className="text-[#003662]">Non-discrimination :</strong> aucun profil ne « vaut
                    mieux » qu&apos;un autre ; aucun usage excluant ou stigmatisant.
                  </li>
                  <li>
                    <strong className="text-[#003662]">Confidentialité et protection des données :</strong>{" "}
                    respect strict de la vie privée et des règles RGPD.
                  </li>
                  <li>
                    <strong className="text-[#003662]">Intégrité professionnelle :</strong> loyauté,
                    indépendance de jugement, gestion des conflits d&apos;intérêts.
                  </li>
                </ul>
              </div>

              {/* 3 */}
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">3) Engagements envers le client</h2>
                <p className="mb-4">Les utilisateurs professionnels de PatrimEmotion® s&apos;engagent à :</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong className="text-[#003662]">Expliquer la démarche :</strong> objectifs, fonctionnement
                    général, limites, et rôle du questionnaire.
                  </li>
                  <li>
                    <strong className="text-[#003662]">Restituer les résultats avec prudence :</strong> les
                    scores sont des indications et non des vérités absolues.
                  </li>
                  <li>
                    <strong className="text-[#003662]">Refuser toute manipulation :</strong> ne pas utiliser le
                    profil pour pousser une vente, créer de la peur, ou forcer une décision.
                  </li>
                  <li>
                    <strong className="text-[#003662]">Adapter la pédagogie :</strong> rendre le conseil
                    compréhensible, proportionné, et actionnable.
                  </li>
                  <li>
                    <strong className="text-[#003662]">Respecter le consentement :</strong> possibilité de ne pas
                    répondre à certaines questions et de stopper la démarche.
                  </li>
                </ul>
              </div>

              {/* 4 */}
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">4) Usage responsable des profils</h2>
                <p className="mb-4">
                  Les profils PatrimEmotion® sont des repères conversationnels et pédagogiques.
                </p>
                <p className="mb-3 font-semibold text-[#003662]">Ils ne doivent jamais être utilisés pour :</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>étiqueter une personne (« vous êtes comme ça »),</li>
                  <li>prédire son avenir,</li>
                  <li>juger sa valeur, sa compétence, ou sa crédibilité,</li>
                  <li>refuser un accompagnement ou dégrader la qualité de service.</li>
                </ul>
                <p>
                  Une restitution éthique inclut toujours : nuance, contextualisation et droit à l&apos;évolution
                  (un profil peut varier selon la période, les événements, et le contexte financier).
                </p>
              </div>

              {/* 5 */}
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">
                  5) Conformité, conseil et devoirs professionnels
                </h2>
                <p className="mb-4">
                  PatrimEmotion® complète l&apos;analyse patrimoniale ; il ne la remplace pas.
                </p>
                <p className="mb-3">Le professionnel reste responsable de :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    l&apos;évaluation du profil investisseur, des objectifs, de l&apos;horizon, de la capacité de
                    perte, de la situation financielle ;
                  </li>
                  <li>
                    la cohérence des préconisations avec le cadre applicable (conseil, assurance, banque,
                    immobilier, etc.) ;
                  </li>
                  <li>la traçabilité et la justification des recommandations.</li>
                </ul>
              </div>

              {/* 6 */}
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">6) Indépendance et conflits d&apos;intérêts</h2>
                <p className="mb-4">
                  Tout conflit d&apos;intérêts (rémunérations, rétrocommissions, avantages, liens capitalistiques,
                  objectifs commerciaux) doit être déclaré et géré.
                </p>
                <p>
                  PatrimEmotion® ne doit pas être instrumentalisé pour orienter un client vers une solution plus
                  rémunératrice au détriment de son intérêt.
                </p>
              </div>

              {/* 7 */}
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">
                  7) Protection des données et confidentialité
                </h2>
                <p className="mb-4 font-semibold text-[#003662]">Engagements minimaux :</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong className="text-[#003662]">Minimisation :</strong> ne collecter que ce qui est utile.
                  </li>
                  <li>
                    <strong className="text-[#003662]">Finalité :</strong> utiliser les données uniquement pour
                    l&apos;accompagnement patrimonial et l&apos;amélioration du suivi.
                  </li>
                  <li>
                    <strong className="text-[#003662]">Sécurité :</strong> accès restreint, mots de passe, droits
                    Drive/Workspace, gestion des partages.
                  </li>
                  <li>
                    <strong className="text-[#003662]">Durées de conservation :</strong> définies, limitées et
                    justifiées.
                  </li>
                  <li>
                    <strong className="text-[#003662]">Droits des personnes :</strong> accès, rectification,
                    suppression, opposition, portabilité (selon les cas).
                  </li>
                </ul>
                <p className="mt-4">
                  Aucun partage des résultats à un tiers sans consentement explicite, sauf obligation légale.
                </p>
              </div>

              {/* 8 */}
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">
                  8) Qualité, formation et amélioration continue
                </h2>
                <p className="mb-4">
                  Les licenciés s&apos;engagent à maintenir un niveau de compétence suffisant : compréhension des
                  biais, posture d&apos;entretien, restitution, limites psychométriques, et bonnes pratiques.
                </p>
                <p>
                  Toute dérive, plainte récurrente, ou usage non conforme entraîne une action corrective
                  (formation, audit, suspension).
                </p>
              </div>

              {/* 9 */}
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">9) Communication éthique (marketing)</h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong className="text-[#003662]">Interdiction des promesses trompeuses :</strong> « méthode
                    infaillible », « prédit vos performances », « garantit vos résultats ».
                  </li>
                  <li>
                    <strong className="text-[#003662]">Obligation de discours fidèle :</strong> PatrimEmotion® est
                    une approche psychométrique d&apos;aide à la décision au service d&apos;un bilan patrimonial.
                  </li>
                  <li>
                    <strong className="text-[#003662]">Interdiction</strong> d&apos;utiliser un profil pour des
                    messages culpabilisants, anxiogènes ou humiliants.
                  </li>
                </ul>
              </div>

              {/* 10 */}
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">10) Dispositif d&apos;alerte et sanctions</h2>
                <p className="mb-4">
                  Tout utilisateur (client, collaborateur, licencié) peut signaler un usage contraire à la présente
                  charte.
                </p>
                <p>
                  Selon la gravité, les mesures peuvent inclure : rappel à l&apos;ordre, formation obligatoire,
                  audit, suspension temporaire, ou retrait du droit d&apos;usage de la marque/méthode conformément
                  aux contrats applicables.
                </p>
              </div>

              {/* 11 */}
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">11) Signature et opposabilité</h2>
                <p className="mb-4">
                  Cette charte s&apos;applique à tout usage de PatrimEmotion® (cabinet, partenaires, licenciés,
                  formateurs).
                </p>
                <p className="mb-8">
                  Elle peut être annexée aux contrats de licence et aux supports de formation.
                </p>

                <div className="rounded-xl border border-[#f4ca3a]/40 bg-[#003662]/5 p-6 md:p-8 text-center">
                  <p className="pe-heading-card text-[#003662] mb-2">
                    PatrimEmotion® – « Votre Personnalité. Vos Émotions. Votre Patrimoine. »
                  </p>
                  <p className="text-[#003662]/85 text-sm md:text-base">
                    Émetteur / Titulaire : AM Courtage & Patrimoine (AMCP) – Aurélie MONTEIL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
