import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PATRIMEMOTION_DEMO_URL } from "@/lib/amcp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadre Éthique et Scientifique | PatrimEmotion®",
  description:
    "Fondements scientifiques de PatrimEmotion® : psychologie des traits, finance comportementale, théorie de la décision et scoring psychométrique. Méthode d'éclairage comportemental appliquée au patrimoine.",
  openGraph: {
    title: "Cadre Éthique et Scientifique | PatrimEmotion®",
    description:
      "Les 4 piliers scientifiques de la méthode PatrimEmotion® et son positionnement : outil pédagogique d'éclairage comportemental, sans prétention académique.",
  },
};

export default function CadreEthiqueScientifiquePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero — même structure que l&apos;accueil */}
        <section className="-mt-2 md:-mt-3 pt-0 pb-0 px-4">
          <div className="hero-encart pt-14 pb-10 md:pt-16 md:pb-12 px-6 md:px-12">
            <div className="container mx-auto relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[300px] md:min-h-[340px]">
                  <div>
                    <h1 className="pe-heading-hero text-white mb-5">
                      Cadre <span className="text-[#9FB620]">éthique</span> et <span className="text-[#f4ca3a]">scientifique</span>
                    </h1>
                    <p className="pe-body-lead text-white/90 max-w-xl leading-relaxed">
                      Les fondements éthiques et les bases scientifiques réelles sur lesquelles repose la méthode PatrimEmotion®.
                    </p>
                  </div>
                  <div className="hidden lg:flex justify-center items-center">
                    <div className="relative w-full max-w-md" style={{ transform: "perspective(800px) rotateY(-8deg) rotateX(2deg)" }}>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden border-l-4 border-[#9FB620] p-5 flex flex-col items-center justify-center min-h-[160px] text-center">
                          <p className="text-[#003662] font-semibold text-base mb-1.5">Éthique</p>
                          <p className="text-[#003662]/90 text-xs leading-snug">
                            <strong>Respect</strong> de la personne, <strong>confidentialité</strong>, neutralité. Au cœur de la relation conseiller–client.
                          </p>
                        </div>
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden border-l-4 border-[#f4ca3a] p-5 flex flex-col items-center justify-center min-h-[160px] text-center">
                          <p className="text-[#003662] font-semibold text-base mb-1.5">Scientifique</p>
                          <p className="text-[#003662]/90 text-xs leading-snug">
                            <strong>4 piliers</strong> : psychologie des traits, <strong>finance comportementale</strong>, décision sous incertitude, scoring.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cadre éthique + Base scientifique — deux encarts bleus côte à côte */}
        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#003662] rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-l-4 border-[#9FB620]">
                <h2 className="pe-heading-section text-white mb-6">
                  Cadre éthique
                </h2>
                <p className="pe-body-lead text-white leading-relaxed mb-6">
                  PatrimEmotion® s&apos;inscrit dans un cadre éthique strict : <strong className="text-[#9FB620]">respect</strong> de la personne, <strong className="text-[#9FB620]">confidentialité</strong> des données, <strong className="text-[#9FB620]">non-jugement</strong> et <strong className="text-[#9FB620]">neutralité</strong> dans l&apos;analyse. La méthode ne vise pas à orienter le client vers une solution prédéfinie mais à <strong className="text-[#9FB620]">éclairer ses choix</strong> en cohérence avec son profil émotionnel et ses objectifs.
                </p>
                <p className="pe-body-lead text-white leading-relaxed">
                  Les professionnels formés et certifiés s&apos;engagent à utiliser les outils dans ce cadre et à ne pas détourner les résultats à des fins commerciales ou de pression. L&apos;éthique est au <strong className="text-[#9FB620]">cœur de la relation</strong> conseiller–client.
                </p>
              </div>
              <div className="bg-[#003662] rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-l-4 border-[#f4ca3a]">
                <h2 className="pe-heading-section text-white mb-6">
                  Base scientifique
                </h2>
                <p className="pe-body-lead text-white leading-relaxed mb-4">
                  La méthode PatrimEmotion® repose sur <strong className="text-[#f4ca3a]">quatre piliers théoriques</strong> solides : <strong className="text-[#f4ca3a]">psychologie des différences individuelles</strong>, <strong className="text-[#f4ca3a]">finance comportementale</strong>, théorie de la décision sous incertitude et <strong className="text-[#f4ca3a]">scoring psychométrique</strong> classique.
                </p>
                <p className="pe-body-lead text-white leading-relaxed">
                  Ces fondements permettent d&apos;<strong className="text-[#f4ca3a]">objectiver les dimensions</strong> qui influencent les décisions patrimoniales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pilier 1 : Psychologie des différences individuelles */}
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="pe-heading-section text-white mb-2">
              Psychologie des différences individuelles
            </h2>
            <p className="pe-body-lead text-white leading-relaxed mb-8">
              Les individus ont des <strong className="text-[#f4ca3a]">tendances relativement stables</strong> dans leur manière de décider ; PatrimEmotion® applique ce principe au patrimoine. La méthode s&apos;appuie notamment sur les travaux de la <strong className="text-[#f4ca3a]">psychologie des traits</strong>.
            </p>

            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6 border-l-4 border-[#f4ca3a]">
                <h3 className="pe-heading-card text-[#f4ca3a] mb-3">
                  Gordon Allport
                </h3>
                <p className="pe-body-lead text-white leading-relaxed">
                  Pionnier de l&apos;approche par les traits : la personnalité se décrit par des <strong className="text-[#f4ca3a]">dispositions stables (traits)</strong> qui influencent les comportements. Il distingue les <strong className="text-[#f4ca3a]">traits cardinaux</strong> (rares et dominants), <strong className="text-[#f4ca3a]">centraux</strong> (caractéristiques majeures) et <strong className="text-[#f4ca3a]">secondaires</strong> (plus contextuels), et insiste sur l&apos;étude de la personne dans sa singularité (<strong className="text-[#f4ca3a]">approche idiographique</strong>).
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border-l-4 border-[#f4ca3a]">
                <h3 className="pe-heading-card text-[#f4ca3a] mb-3">
                  Raymond Cattell
                </h3>
                <p className="pe-body-lead text-white leading-relaxed">
                  <strong className="text-[#f4ca3a]">Approche factorielle</strong> et mesure scientifique : analyse factorielle pour identifier les dimensions fondamentales de la personnalité. Distinction entre <strong className="text-[#f4ca3a]">traits de surface</strong> (observables) et <strong className="text-[#f4ca3a]">traits source</strong> (dimensions profondes). Modèle à <strong className="text-[#f4ca3a]">16 facteurs (16 PF)</strong> et méthode multi-sources (L-data, Q-data, T-data), fondation des modèles modernes dont le Big Five.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border-l-4 border-[#f4ca3a]">
                <h3 className="pe-heading-card text-[#f4ca3a] mb-3">
                  Paul Costa et Robert McCrae — Big Five
                </h3>
                <p className="pe-body-lead text-white leading-relaxed">
                  Consolidation du modèle à <strong className="text-[#f4ca3a]">5 grands facteurs (OCEAN)</strong> : Ouverture, Conscienciosité, Extraversion, Agréabilité, Neuroticisme, avec des <strong className="text-[#f4ca3a]">facettes</strong> pour affiner la description. Outils de référence (NEO-PI / NEO-PI-R). Le modèle est <strong className="text-[#f4ca3a]">stable à l&apos;âge adulte</strong>, prédictif pour certains comportements (travail, santé, relations) et largement répliqué.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pilier 2 : Finance comportementale */}
        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="pe-heading-section text-[#003662] mb-2">
              Finance comportementale
            </h2>
            <p className="pe-body-lead text-[#003662] leading-relaxed mb-8">
              Les décisions financières ne sont pas <strong className="text-[#003662]">purement rationnelles</strong> : elles sont influencées par des <strong className="text-[#9FB620]">biais</strong> (aversion à la perte, surconfiance, statu quo, heuristiques). PatrimEmotion® <strong className="text-[#9FB620]">cartographie ces tendances</strong> pour mieux piloter son patrimoine. Identifier ces biais permet de décider avec plus de <strong className="text-[#9FB620]">lucidité</strong>.
            </p>

            <h3 className="pe-heading-card text-[#003662] mb-4">
              Biais majeurs pris en compte
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 p-4 rounded-xl bg-[#003662]/5 border-l-4 border-[#9FB620]">
                <span className="text-[#9FB620] font-semibold shrink-0 text-lg">•</span>
                <span className="pe-body-lead text-[#003662] leading-relaxed"><strong className="text-[#9FB620]">Aversion à la perte</strong> — Réaction face à une baisse d&apos;actif (vendre trop tôt ou conserver trop longtemps une moins-value) ; la décision est souvent guidée par le soulagement de la tension plutôt que par la stratégie.</span>
              </li>
              <li className="flex items-start gap-3 p-4 rounded-xl bg-[#003662]/5 border-l-4 border-[#9FB620]">
                <span className="text-[#9FB620] font-semibold shrink-0 text-lg">•</span>
                <span className="pe-body-lead text-[#003662] leading-relaxed"><strong className="text-[#9FB620]">Surconfiance</strong> — Surestimer sa capacité d&apos;anticipation, privilégier l&apos;intuition ou une concentration excessive sur un secteur « maîtrisé » ; le conseil joue un rôle de contrepoint pour une allocation cohérente.</span>
              </li>
              <li className="flex items-start gap-3 p-4 rounded-xl bg-[#003662]/5 border-l-4 border-[#9FB620]">
                <span className="text-[#9FB620] font-semibold shrink-0 text-lg">•</span>
                <span className="pe-body-lead text-[#003662] leading-relaxed"><strong className="text-[#9FB620]">Biais de confirmation</strong> — Rechercher les informations qui vont dans le sens de l&apos;option envisagée ; le conseiller aide à envisager tous les scénarios pour une décision éclairée.</span>
              </li>
              <li className="flex items-start gap-3 p-4 rounded-xl bg-[#003662]/5 border-l-4 border-[#9FB620]">
                <span className="text-[#9FB620] font-semibold shrink-0 text-lg">•</span>
                <span className="pe-body-lead text-[#003662] leading-relaxed"><strong className="text-[#9FB620]">Court terme</strong> — Réagir à l&apos;actualité plutôt que piloter ; la fiscalité ou les annonces peuvent orienter la décision sans que l&apos;impact global soit mesuré.</span>
              </li>
              <li className="flex items-start gap-3 p-4 rounded-xl bg-[#003662]/5 border-l-4 border-[#9FB620]">
                <span className="text-[#9FB620] font-semibold shrink-0 text-lg">•</span>
                <span className="pe-body-lead text-[#003662] leading-relaxed"><strong className="text-[#9FB620]">Ancrage, disponibilité, effet de disposition</strong> — Donner trop de poids à une référence ou à l&apos;information disponible ; garder trop longtemps des moins-values et réaliser trop tôt les plus-values. PatrimEmotion® aide à en prendre conscience.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Pilier 3 : Théorie de la décision sous incertitude */}
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="pe-heading-section text-white mb-2">
              Théorie de la décision sous incertitude
            </h2>
            <p className="pe-body-lead text-white leading-relaxed mb-8">
              PatrimEmotion® ne mesure pas la performance financière : elle mesure la <strong className="text-[#f4ca3a]">posture décisionnelle</strong> face à l&apos;incertitude patrimoniale. <strong className="text-[#f4ca3a]">Trois axes</strong> sont au cœur du cadre scientifique.
            </p>

            <div className="space-y-6">
              <div className="bg-white/10 rounded-xl p-6 border-l-4 border-[#f4ca3a]">
                <h3 className="pe-heading-card text-[#f4ca3a] mb-3">
                  Théorie des perspectives (Kahneman & Tversky)
                </h3>
                <p className="pe-body-lead text-white leading-relaxed">
                  On ne décide pas en valeur absolue mais par rapport à un <strong className="text-[#f4ca3a]">point de référence</strong> (gains/pertes perçus). Les <strong className="text-[#f4ca3a]">pertes pèsent plus que les gains</strong> (aversion aux pertes). Sensibilité décroissante, <strong className="text-[#f4ca3a]">effet de cadrage</strong> et pondération subjective des probabilités : le vocabulaire et la mise en scène influencent le choix.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 border-l-4 border-[#f4ca3a]">
                <h3 className="pe-heading-card text-[#f4ca3a] mb-3">
                  Arbitrage risque / sécurité
                </h3>
                <p className="pe-body-lead text-white leading-relaxed">
                  La décision est un <strong className="text-[#f4ca3a]">compromis</strong> entre sécurité (stabilité, protection du capital) et risque (rendement, opportunité). <strong className="text-[#f4ca3a]">Tolérance au risque</strong> (trait stable) vs <strong className="text-[#f4ca3a]">capacité à prendre du risque</strong> (contraintes objectives). Risque perçu ≠ risque réel ; l&apos;ambiguïté augmente le besoin de sécurité.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 border-l-4 border-[#f4ca3a]">
                <h3 className="pe-heading-card text-[#f4ca3a] mb-3">
                  Temporalité
                </h3>
                <p className="pe-body-lead text-white leading-relaxed">
                  <strong className="text-[#f4ca3a]">Préférence temporelle</strong> : on valorise souvent le présent plus que le futur. Biais du présent, incohérences dynamiques. Plus l&apos;<strong className="text-[#f4ca3a]">horizon</strong> est long et crédible, plus on accepte la volatilité. Sécuriser la décision, c&apos;est rendre le futur concret (étapes, jalons, scénarios, règles de pilotage).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pilier 4 : Modèle psychométrique */}
        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-[#003662] rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-l-4 border-[#f4ca3a]">
              <h2 className="pe-heading-section text-white mb-2">
                Modèle de scoring psychométrique
              </h2>
              <p className="pe-body-lead text-white leading-relaxed mb-6">
                PatrimEmotion® utilise une mécanique psychométrique classique : <strong className="text-[#f4ca3a]">questionnaire à échelle de Likert</strong> (réponses graduées), <strong className="text-[#f4ca3a]">scores agrégés par dimensions</strong> (axes thématiques), <strong className="text-[#f4ca3a]">normalisation</strong> (mise à l&apos;échelle commune) et <strong className="text-[#f4ca3a]">classification par dominantes</strong> pour dégager un profil de fonctionnement et un style d&apos;accompagnement.
              </p>
              <p className="pe-body-lead text-[#f4ca3a] mb-4 leading-relaxed">
                <strong className="font-bold">
                  En bref : mesure graduée → scores par axes → mise à l&apos;échelle → lecture par dominantes.
                </strong>
              </p>
              <p className="pe-body-lead text-white/90 leading-relaxed">
                Cette chaîne correspond aux <strong className="text-[#f4ca3a]">standards usuels</strong> de la psychométrie appliquée et garantit une approche <strong className="text-[#f4ca3a]">structurée, interprétable et reproductible</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Positionnement scientifique : ce que c'est / ce que ce n'est pas */}
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="pe-heading-section text-white mb-8 text-center">
              Positionnement scientifique
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#9FB620] rounded-xl p-6 md:p-8">
                <h3 className="pe-heading-card text-white mb-4">
                  Ce que PatrimEmotion® est scientifiquement
                </h3>
                <ul className="space-y-2 pe-body-lead text-white leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a3310] font-semibold shrink-0">✓</span>
                    <span>Cohérent avec la psychologie décisionnelle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a3310] font-semibold shrink-0">✓</span>
                    <span>Structuré et interprétable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a3310] font-semibold shrink-0">✓</span>
                    <span>Reproductible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a3310] font-semibold shrink-0">✓</span>
                    <span>Un outil typologique comportemental appliqué au patrimoine</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6 md:p-8 border border-white/20">
                <h3 className="pe-heading-card text-[#f4ca3a] mb-4">
                  Ce que PatrimEmotion® n&apos;est pas
                </h3>
                <ul className="space-y-2 pe-body-lead text-white/90 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-white shrink-0">—</span>
                    <span>Un test clinique validé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white shrink-0">—</span>
                    <span>Un outil normé scientifiquement sur échantillon statistique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white shrink-0">—</span>
                    <span>Un instrument psychométrique validé académiquement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white shrink-0">—</span>
                    <span>Un outil prédictif de performance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="pe-body-lead text-white/90 leading-relaxed max-w-2xl mx-auto">
                PatrimEmotion® se positionne comme un <strong>outil pédagogique d&apos;éclairage comportemental</strong>, scientifiquement cohérent et sans prétention académique.
              </p>
            </div>
          </div>
        </section>

        {/* Méthode opérationnelle */}
        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-[#003662] rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-l-4 border-[#9FB620]">
              <h2 className="pe-heading-section text-white mb-6">
                Méthode opérationnelle
              </h2>
              <p className="pe-body-lead text-white leading-relaxed mb-6">
                La méthode opérationnelle décrit comment déployer PatrimEmotion® au quotidien :
              </p>
              <ul className="space-y-2 pe-body-lead text-white/90 mb-6 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#9FB620] font-semibold shrink-0">✓</span>
                  <span><strong className="text-[#9FB620]">Passation du questionnaire</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9FB620] font-semibold shrink-0">✓</span>
                  <span><strong className="text-[#9FB620]">Analyse des résultats</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9FB620] font-semibold shrink-0">✓</span>
                  <span><strong className="text-[#9FB620]">Restitution au client</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9FB620] font-semibold shrink-0">✓</span>
                  <span>Traduction en recommandations stratégiques et suivi</span>
                </li>
              </ul>
              <p className="pe-body-lead text-white leading-relaxed mb-6">
                Des <strong className="text-[#9FB620]">protocoles et supports</strong> (grilles, livrables, scripts d&apos;entretien) sont fournis aux certifiés pour assurer une mise en œuvre homogène et de qualité.
              </p>
              <p className="pe-body-lead text-white leading-relaxed">
                L&apos;objectif : permettre au conseiller d&apos;<strong className="text-[#9FB620]">intégrer la dimension émotionnelle</strong> sans alourdir le processus d&apos;accompagnement, tout en offrant au client une <strong className="text-[#9FB620]">expérience claire et valorisante</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* En savoir plus */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="pe-heading-section text-[#003662] mb-6 text-center">
              En savoir plus
            </h2>
            <p className="pe-body-lead text-[#003662]/85 mb-8 text-center max-w-3xl mx-auto">
              Consultez la présentation complète du cadre éthique et scientifique PatrimEmotion®.
            </p>

            <div className="rounded-2xl overflow-hidden border border-[#003662]/15 bg-[#003662]/5 shadow-[0_12px_40px_-12px_rgba(0,54,98,0.25)]">
              <iframe
                src="/Docs/Powerpoint_page_ethique_et_scientifique.pdf#toolbar=0&navpanes=0&scrollbar=0"
                title="L&apos;équilibre des forces"
                className="h-[70vh] min-h-[520px] w-full"
                loading="lazy"
              />
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href={PATRIMEMOTION_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4ca3a] px-8 py-4 text-base font-semibold text-[#003662] shadow-lg shadow-[#f4ca3a]/25 transition-all duration-200 hover:scale-[1.02] hover:bg-[#f5d055] hover:shadow-xl"
              >
                Demander une démo
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
