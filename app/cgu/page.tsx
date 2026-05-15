import LegalPageLayout from "@/components/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation | PatrimEmotion®",
  description:
    "CGU du site PatrimEmotion® – conditions d'accès, propriété intellectuelle, données personnelles et responsabilité.",
};

export default function CGUPage() {
  return (
    <LegalPageLayout
      version="Version 15/05/2026"
      title={
        <>
          Conditions générales
          <br />
          d&apos;utilisation (CGU)
        </>
      }
    >
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">1. Présentation du site</h2>
                <p className="mb-4">Le site PatrimEmotion® est édité par :</p>
                <ul className="list-none space-y-1 mb-4 pl-0">
                  <li><strong className="text-[#003662]">AM Courtage &amp; Patrimoine</strong></li>
                  <li>SASU au capital de 5000 €</li>
                  <li>RCS : Amiens N° 851 316 513</li>
                  <li>Siège social : 10 rue Edgar Degas 80 080 AMIENS</li>
                  <li>
                    Email :{" "}
                    <a href="mailto:cabinet.amcp@gmail.com" className="text-[#003662] underline hover:text-[#9FB620]">
                      cabinet.amcp@gmail.com
                    </a>
                  </li>
                  <li>
                    Téléphone :{" "}
                    <a href="tel:+33661546344" className="text-[#003662] underline hover:text-[#9FB620]">
                      06.61.54.63.44
                    </a>
                  </li>
                  <li>Directrice de la publication : Aurélie MONTEIL</li>
                </ul>
                <p>
                  Le site a pour objet la présentation de la méthode PatrimEmotion®, de ses contenus, de ses outils, de ses publications, de ses services d&apos;accompagnement, ainsi que des dispositifs de licence et de formation associés.
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">2. Acceptation des CGU</h2>
                <p className="mb-4">
                  L&apos;accès et l&apos;utilisation du site impliquent l&apos;acceptation pleine et entière des présentes Conditions Générales d&apos;Utilisation.
                </p>
                <p>
                  Tout utilisateur reconnaît avoir pris connaissance des présentes CGU et s&apos;engage à les respecter sans réserve.
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">3. Objet du site</h2>
                <p className="mb-3">Le site PatrimEmotion® a notamment pour finalités :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>la présentation de la méthode PatrimEmotion® ;</li>
                  <li>la diffusion de contenus pédagogiques ;</li>
                  <li>la mise à disposition d&apos;informations relatives à la psychologie patrimoniale ;</li>
                  <li>l&apos;accès à des questionnaires, bilans ou supports d&apos;analyse ;</li>
                  <li>la prise de contact ou de rendez-vous ;</li>
                  <li>la présentation des licences, formations et partenariats institutionnels.</li>
                </ul>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">4. Positionnement et limites de la méthode</h2>
                <p className="mb-4">
                  PatrimEmotion® constitue une approche psychométrique et pédagogique d&apos;aide à la compréhension des comportements patrimoniaux.
                </p>
                <p className="mb-3">La méthode :</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>ne constitue ni un diagnostic médical, psychologique ou psychiatrique ;</li>
                  <li>ne constitue pas un conseil financier automatisé ;</li>
                  <li>ne remplace pas une analyse patrimoniale complète ;</li>
                  <li>ne se substitue pas aux obligations réglementaires applicables aux professionnels concernés.</li>
                </ul>
                <p className="mb-4">
                  Les contenus et profils fournis sur le site ont une finalité exclusivement informative, pédagogique et comportementale.
                </p>
                <p>
                  Aucune garantie de résultat, de performance financière ou de prédiction comportementale n&apos;est donnée.
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">5. Accès au site</h2>
                <p className="mb-3">Le site est accessible 24h/24 et 7j/7, sauf interruption liée :</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>à la maintenance ;</li>
                  <li>à des contraintes techniques ;</li>
                  <li>à des cas de force majeure ;</li>
                  <li>à des mises à jour.</li>
                </ul>
                <p>
                  AM Courtage &amp; Patrimoine ne saurait être tenue responsable d&apos;une indisponibilité temporaire du site.
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">6. Utilisation du site</h2>
                <p className="mb-3">L&apos;utilisateur s&apos;engage à :</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>utiliser le site de manière loyale et conforme à sa destination ;</li>
                  <li>ne pas perturber le fonctionnement du site ;</li>
                  <li>ne pas tenter d&apos;accéder aux systèmes ou données non autorisés ;</li>
                  <li>ne pas utiliser le site à des fins frauduleuses, illicites ou malveillantes.</li>
                </ul>
                <p>
                  Toute utilisation abusive pourra entraîner la suspension ou l&apos;interdiction d&apos;accès au site.
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-6">7. Propriété intellectuelle – PatrimEmotion®</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="pe-heading-card text-[#003662] mb-2">7.1 Protection générale</h3>
                    <p className="mb-3">PatrimEmotion® constitue une méthode originale protégée au titre :</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>du droit d&apos;auteur ;</li>
                      <li>du droit des marques ;</li>
                      <li>du droit des affaires ;</li>
                      <li>du savoir-faire méthodologique et psychométrique.</li>
                    </ul>
                    <p className="mb-3">L&apos;ensemble des éléments présents sur le site est protégé, notamment :</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>la méthode PatrimEmotion® ;</li>
                      <li>les questionnaires ;</li>
                      <li>les profils ;</li>
                      <li>les axes d&apos;analyse ;</li>
                      <li>les scores ;</li>
                      <li>les restitutions ;</li>
                      <li>les logiques méthodologiques ;</li>
                      <li>les textes ;</li>
                      <li>les visuels ;</li>
                      <li>les logos ;</li>
                      <li>les schémas ;</li>
                      <li>les supports ;</li>
                      <li>les contenus pédagogiques ;</li>
                      <li>les bases documentaires.</li>
                    </ul>
                    <p>
                      Toute reproduction, représentation, diffusion, extraction, adaptation ou exploitation, totale ou partielle, sans autorisation écrite préalable est strictement interdite.
                    </p>
                  </div>
                  <div>
                    <h3 className="pe-heading-card text-[#003662] mb-2">7.2 Interdiction d&apos;appropriation méthodologique et algorithmique</h3>
                    <p className="mb-3">Il est strictement interdit :</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>de copier ou reproduire la méthode ;</li>
                      <li>de reconstituer les logiques de scoring ;</li>
                      <li>de pratiquer toute forme de reverse engineering ;</li>
                      <li>d&apos;extraire ou déduire les mécanismes internes de fonctionnement ;</li>
                      <li>de créer un outil dérivé ou concurrent inspiré de PatrimEmotion®.</li>
                    </ul>
                    <p>
                      Toute tentative d&apos;appropriation méthodologique ou algorithmique pourra donner lieu à des poursuites judiciaires.
                    </p>
                  </div>
                  <div>
                    <h3 className="pe-heading-card text-[#003662] mb-2">7.3 Interdiction d&apos;usage IA / Data / Machine Learning</h3>
                    <p className="mb-3">
                      Les contenus, questionnaires, résultats, données et structures méthodologiques présents sur le site ne peuvent être utilisés, directement ou indirectement, pour :
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>entraîner une intelligence artificielle ;</li>
                      <li>alimenter un système de machine learning ;</li>
                      <li>constituer des jeux de données ;</li>
                      <li>tester ou calibrer des modèles algorithmiques ;</li>
                      <li>développer un outil concurrent.</li>
                    </ul>
                    <p className="mb-3">Cette interdiction s&apos;applique y compris :</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>aux usages internes ;</li>
                      <li>aux environnements de recherche ;</li>
                      <li>aux traitements anonymisés ou agrégés.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="pe-heading-card text-[#003662] mb-2">7.4 Absence de licence implicite</h3>
                    <p className="mb-4">
                      L&apos;accès au site ne confère aucun droit de propriété ou d&apos;exploitation sur PatrimEmotion®.
                    </p>
                    <p>
                      Toute utilisation professionnelle, commerciale, institutionnelle ou intégrée nécessite une licence écrite préalable.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">8. Données personnelles</h2>
                <p className="mb-4">
                  Les données personnelles collectées via le site sont traitées conformément à la{" "}
                  <a href="/politique-confidentialite" className="text-[#003662] font-semibold underline hover:text-[#9FB620]">
                    Politique de confidentialité
                  </a>{" "}
                  et au RGPD.
                </p>
                <p className="mb-3">Les utilisateurs disposent notamment des droits suivants :</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>accès ;</li>
                  <li>rectification ;</li>
                  <li>opposition ;</li>
                  <li>limitation ;</li>
                  <li>suppression ;</li>
                  <li>portabilité.</li>
                </ul>
                <p>
                  Toute demande peut être adressée à :{" "}
                  <a href="mailto:contact@patrimemotion.fr" className="text-[#003662] underline hover:text-[#9FB620]">
                    contact@patrimemotion.fr
                  </a>
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">9. Cookies</h2>
                <p className="mb-3">Le site peut utiliser des cookies ou technologies similaires à des fins :</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>statistiques ;</li>
                  <li>techniques ;</li>
                  <li>d&apos;amélioration de l&apos;expérience utilisateur.</li>
                </ul>
                <p>
                  L&apos;utilisateur peut gérer ses préférences via le bandeau cookies prévu à cet effet. Voir aussi la page{" "}
                  <a href="/cookies" className="text-[#003662] font-semibold underline hover:text-[#9FB620]">
                    Cookies
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">10. Responsabilité</h2>
                <p className="mb-4">
                  AM Courtage &amp; Patrimoine met en œuvre des moyens raisonnables afin d&apos;assurer la fiabilité des informations diffusées.
                </p>
                <p className="mb-3">Toutefois :</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>les contenus sont fournis à titre informatif ;</li>
                  <li>aucune garantie d&apos;exactitude absolue ou d&apos;exhaustivité n&apos;est donnée ;</li>
                  <li>l&apos;utilisateur demeure seul responsable de ses décisions.</li>
                </ul>
                <p className="mb-3">La responsabilité d&apos;AM Courtage &amp; Patrimoine ne saurait être engagée en cas :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>d&apos;utilisation inappropriée du site ;</li>
                  <li>d&apos;interprétation erronée des contenus ;</li>
                  <li>de dommage indirect ou immatériel.</li>
                </ul>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">11. Liens externes</h2>
                <p className="mb-4">Le site peut contenir des liens vers des sites tiers.</p>
                <p>
                  AM Courtage &amp; Patrimoine n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leur politique de confidentialité.
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">12. Modification des CGU</h2>
                <p className="mb-4">
                  AM Courtage &amp; Patrimoine se réserve le droit de modifier les présentes CGU à tout moment.
                </p>
                <p>Les nouvelles versions entrent en vigueur dès leur mise en ligne.</p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">13. Droit applicable et juridiction</h2>
                <p className="mb-4">Les présentes CGU sont soumises au droit français.</p>
                <p>
                  Tout litige relatif à leur interprétation ou exécution relèvera de la compétence des juridictions françaises territorialement compétentes.
                </p>
              </div>

    </LegalPageLayout>
  );
}
