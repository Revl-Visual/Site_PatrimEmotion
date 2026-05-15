import LegalPageLayout from "@/components/LegalPageLayout";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | PatrimEmotion®",
  description: "Protection des données personnelles - AM Courtage & Patrimoine (AMCP).",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPageLayout
      title={
        <>
          Politique de
          <br />
          confidentialité
        </>
      }
    >
              <p>
                AM Courtage &amp; Patrimoine, en tant que responsable de traitement, accorde une importance
                particulière à la protection de vos données personnelles.
              </p>

              <p>
                La présente politique de confidentialité a pour objet de vous informer de la manière
                dont vos données sont collectées, utilisées, conservées et protégées, conformément
                au Règlement (UE) 2016/679 du 27 avril 2016 (RGPD) et à la loi Informatique et Libertés
                modifiée.
              </p>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">1. Champ d&apos;application</h2>
                <p>
                  Cette politique s&apos;applique à l&apos;ensemble des traitements de données réalisés via
                  le site PatrimEmotion, notamment lors des prises de contact, demandes de démo,
                  prises de rendez-vous, demandes de licence et navigation.
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">2. Données collectées</h2>
                <p>
                  Selon vos interactions avec le site, nous pouvons collecter les catégories de données suivantes :
                </p>
                <ul className="mt-4 space-y-3">
                  <li>Données d&apos;identité (nom, prénom, structure, fonction).</li>
                  <li>Coordonnées de contact (e-mail, téléphone, adresse professionnelle).</li>
                  <li>Données relatives à votre demande (objet, message, besoins exprimés).</li>
                  <li>Données de navigation (pages consultées, préférences techniques, cookies).</li>
                </ul>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">3. Finalités des traitements</h2>
                <p>Les données sont utilisées pour :</p>
                <ul className="mt-4 space-y-3">
                  <li>Répondre à vos demandes de contact, d&apos;information, de démo ou de rendez-vous.</li>
                  <li>Étudier les demandes liées aux licences PatrimEmotion et proposer un accompagnement adapté.</li>
                  <li>Améliorer l&apos;expérience utilisateur et les performances du site.</li>
                  <li>Assurer la sécurité technique du site et prévenir les usages abusifs.</li>
                </ul>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">4. Bases légales</h2>
                <p>
                  Les traitements reposent, selon les cas, sur votre consentement, l&apos;exécution de mesures
                  précontractuelles, l&apos;intérêt légitime d&apos;AMCP (amélioration du service, sécurité),
                  ou le respect d&apos;obligations légales.
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">5. Durée de conservation</h2>
                <p>
                  Les données sont conservées pour une durée limitée, proportionnée à la finalité poursuivie,
                  puis archivées ou supprimées conformément à la réglementation en vigueur.
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">6. Destinataires des données</h2>
                <p>
                  Les données sont destinées aux équipes habilitées d&apos;AM Courtage &amp; Patrimoine
                  et, si nécessaire, à des sous-traitants techniques agissant pour son compte
                  (hébergement, maintenance, services formulaires), dans le strict cadre des finalités
                  décrites ci-dessus.
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">7. Cookies et traceurs</h2>
                <p>
                  Le site peut utiliser des cookies techniques, de mesure d&apos;audience et, le cas échéant,
                  de personnalisation. Les cookies non essentiels sont soumis à votre consentement préalable.
                </p>
                <p>
                  Pour plus d&apos;informations, veuillez consulter la page dédiée : Politique des cookies.
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">8. Sécurité</h2>
                <p>
                  AMCP met en œuvre des mesures techniques et organisationnelles adaptées pour protéger
                  vos données contre toute destruction, perte, altération, divulgation ou accès non autorisé.
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">9. Vos droits</h2>
                <p>
                  Conformément au RGPD, vous disposez des droits suivants : accès, rectification, effacement,
                  limitation, opposition, portabilité (selon les cas), et retrait du consentement à tout moment.
                </p>
                <p>
                  Pour exercer vos droits :{" "}
                  <a href={CONTACT_MAILTO} className="text-[#003662] underline hover:text-[#9FB620]">
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">10. Réclamation auprès de l&apos;autorité de contrôle</h2>
                <p>
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation
                  auprès de la CNIL (www.cnil.fr).
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">11. Mise à jour de la politique</h2>
                <p>
                  Cette politique peut être modifiée à tout moment afin de refléter les évolutions légales,
                  réglementaires ou techniques. Nous vous invitons à la consulter régulièrement.
                </p>
              </div>
    </LegalPageLayout>
  );
}
