import LegalPageLayout from "@/components/LegalPageLayout";
import { PatrimEmotionMark } from "@/components/PatrimEmotionMark";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charte d'utilisation de l'IA | PatrimEmotion®",
  description:
    "Charte d'utilisation de l'intelligence artificielle – méthode PatrimEmotion®. Conformité, protection des données, limites et engagement éthique.",
};

export default function CharteIAPage() {
  return (
    <LegalPageLayout
      title={
        <>
          Charte d&apos;utilisation de
          <br />
          l&apos;intelligence artificielle
        </>
      }
    >
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">1. Objet</h2>
                <p className="mb-4">
                  La présente charte encadre l&apos;utilisation des outils d&apos;intelligence artificielle (IA) dans le cadre de la méthode PatrimEmotion®, développée par Aurélie MONTEIL.
                </p>
                <p className="mb-3 font-semibold text-[#003662]">Elle vise à garantir :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>la conformité réglementaire</li>
                  <li>la protection des données personnelles</li>
                  <li>la cohérence méthodologique</li>
                  <li>la transparence vis-à-vis des utilisateurs et des clients</li>
                </ul>
              </div>

              {/* 2 */}
              <div>
                <h2 className="pe-heading-section mb-4 text-[#003662]">
                  2. Positionnement de l&apos;IA dans <PatrimEmotionMark />
                </h2>
                <p className="mb-4">
                  L&apos;intelligence artificielle intervient exclusivement comme un outil d&apos;assistance pédagogique et rédactionnelle
                </p>
                <p className="mb-3 font-semibold text-[#003662]">Elle permet :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>d&apos;améliorer la lisibilité des restitutions</li>
                  <li>de structurer les analyses</li>
                  <li>de faciliter la compréhension client</li>
                </ul>
              </div>

              {/* 3 */}
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">3. Principe fondamental</h2>
                <p className="mb-4 font-semibold text-[#003662]">
                  L&apos;IA ne constitue en aucun cas le cœur de la méthode PatrimEmotion®
                </p>
                <p className="mb-3">La méthode repose sur :</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>un questionnaire structuré</li>
                  <li>un système de scoring</li>
                  <li>une interprétation humaine</li>
                </ul>
                <p className="mb-3">L&apos;IA n&apos;intervient pas dans :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>le calcul des scores</li>
                  <li>la détermination du profil</li>
                  <li>la formulation du conseil</li>
                </ul>
              </div>

              {/* 4 */}
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">4. Limites d&apos;utilisation</h2>
                <p className="mb-4">
                  Dans le cadre de PatrimEmotion®, l&apos;IA ne peut être utilisée pour :
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "générer automatiquement un profil patrimonial",
                    "produire un scoring comportemental réel",
                    "établir une recommandation financière",
                    "remplacer l'analyse du conseiller",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="text-[#b91c1c] shrink-0" aria-hidden>
                        ❌
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mb-3">Toute interprétation reste :</p>
                <ul className="space-y-3">
                  {["humaine", "contextualisée", "validée"].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="text-[#9FB620] shrink-0" aria-hidden>
                        ✔
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5 */}
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-6">5. Protection des données</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="pe-heading-card text-[#003662] mb-2">5.1 Principe de confidentialité</h3>
                    <p>
                      Aucune donnée personnelle identifiable du client n&apos;est transmise à des outils d&apos;IA externes.
                    </p>
                  </div>
                  <div>
                    <h3 className="pe-heading-card text-[#003662] mb-2">5.2 Données utilisées</h3>
                    <p className="mb-3">L&apos;IA est utilisée uniquement sur :</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>données anonymisées</li>
                      <li>profils types</li>
                      <li>résultats non identifiants</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="pe-heading-card text-[#003662] mb-2">5.3 Engagement</h3>
                    <p className="mb-3">Le cabinet s&apos;engage à respecter :</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>le RGPD</li>
                      <li>les principes de minimisation</li>
                      <li>la confidentialité des informations client</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 6 */}
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-6">6. Processus d&apos;utilisation</h2>
                <p className="mb-6">
                  Toute utilisation de l&apos;IA dans PatrimEmotion® suit le processus suivant :
                </p>
                <ol className="space-y-4 list-none pl-0">
                  {[
                    {
                      titre: "Production IA",
                      detail: "Structuration ou rédaction sur base anonymisée",
                    },
                    {
                      titre: "Interprétation humaine",
                      detail: "Analyse du profil par le conseiller",
                    },
                    { titre: "Validation", detail: "Vérification de cohérence" },
                    {
                      titre: "Restitution client",
                      detail: "Document final validé",
                    },
                  ].map((step, i) => (
                    <li
                      key={step.titre}
                      className="rounded-xl border border-[#003662]/15 bg-white p-5 shadow-sm"
                    >
                      <span className="text-[#f4ca3a] font-bold mr-2">{i + 1}.</span>
                      <span className="font-semibold text-[#003662]">{step.titre}</span>
                      <p className="mt-2 text-[#003662]/85 pl-0 md:pl-8">{step.detail}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* 7 */}
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">7. Traçabilité</h2>
                <p className="mb-3">Le cabinet assure :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>la traçabilité des méthodes utilisées</li>
                  <li>la cohérence des restitutions</li>
                  <li>la validation humaine systématique</li>
                </ul>
              </div>

              {/* 8 */}
              <div>
                <h2 className="pe-heading-section mb-4 text-[#003662]">
                  8. Nature pédagogique de <PatrimEmotionMark />
                </h2>
                <p className="mb-3">PatrimEmotion® est :</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>un outil d&apos;accompagnement</li>
                  <li>un outil de compréhension</li>
                  <li>un outil de dialogue</li>
                </ul>
                <p className="mb-3">Il ne constitue pas :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>un profil de risque réglementaire</li>
                  <li>une évaluation MIF II</li>
                  <li>une recommandation d&apos;investissement</li>
                </ul>
              </div>

              {/* 9 */}
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">9. Information du client</h2>
                <p className="mb-4">Le client est informé que :</p>
                <blockquote className="border-l-4 border-[#f4ca3a] bg-[#003662]/5 pl-6 pr-4 py-5 rounded-r-xl text-[#003662]/95 italic">
                  « La méthode PatrimEmotion® peut s&apos;appuyer sur des outils d&apos;intelligence artificielle à des fins de structuration et de restitution pédagogique.
                  Ces outils n&apos;ont pas accès aux données personnelles identifiantes et ne remplacent en aucun cas l&apos;analyse réalisée par votre conseiller.
                  PatrimEmotion® constitue un outil d&apos;accompagnement et ne se substitue pas aux obligations réglementaires en matière de conseil. »
                </blockquote>
              </div>

              {/* 10 */}
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">10. Engagement éthique</h2>
                <p className="mb-3">Dans le cadre de PatrimEmotion®, le cabinet s&apos;engage à :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>garantir une utilisation responsable de l&apos;IA</li>
                  <li>préserver la dimension humaine du conseil</li>
                  <li>éviter toute automatisation de la décision</li>
                  <li>maintenir un haut niveau d&apos;exigence professionnelle</li>
                </ul>
              </div>

              {/* 11 */}
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">11. Évolution</h2>
                <p className="mb-3">La présente charte pourra évoluer en fonction :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>des évolutions technologiques</li>
                  <li>des évolutions réglementaires</li>
                  <li>des recommandations des autorités</li>
                </ul>
              </div>
    </LegalPageLayout>
  );
}
