import LegalPageLayout from "@/components/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | PatrimEmotion®",
  description: "Mentions légales du site PatrimEmotion®.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPageLayout title="Mentions légales">
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">Éditeur du site</h2>
                <p>AM Courtage &amp; Patrimoine (AMCP)</p>
                <p>Siège social : 10 rue Edgar Degas, 80080 Amiens, France</p>
                <p>Téléphone : 06 61 54 63 44</p>
                <p>E-mail : aurelie.monteil@am-courtage-et-patrimoine.fr</p>
                <p>Site : www.am-courtage-et-patrimoine.fr</p>
                <p>Forme juridique : SAS au capital de 5 000 EUR</p>
                <p>SIREN : 851 316 513</p>
                <p>TVA intracommunautaire : FR79851316513</p>
                <p>RCS : Amiens</p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">Directeur de publication</h2>
                <p>Aurelie Monteil, Présidente.</p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">Hébergement</h2>
                <p>Site PatrimEmotion hébergé sur infrastructure cloud sécurisée.</p>
                <p>Les services techniques peuvent mobiliser des prestataires tiers pour l&apos;hébergement, la diffusion et la supervision.</p>
                <p>
                  Site realise par{" "}
                  <a
                    href="https://arthurmonteil.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#003662] underline underline-offset-4 hover:text-[#004a7a]"
                  >
                    Arthur Monteil
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">Statut réglementaire et habilitations</h2>
                <p>ORIAS : 19004843 (www.orias.fr)</p>
                <p>Membre CNCEF : D0190209</p>
                <p>Assurance RC professionnelle : RC PORUS ndeg RCPA278459691</p>
                <p>Carte professionnelle immobiliere : CPI 80012019000043777 (CCI Amiens)</p>
                <p>Formatrice professionnelle pour adultes : ndeg 32800203080</p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">Propriété intellectuelle</h2>
                <p>
                  L&apos;ensemble des contenus publiés sur ce site (textes, logos, chartes graphiques,
                  visuels, documents, videos, structure, marque PatrimEmotion et elements associes)
                  est protege au titre du droit de la propriete intellectuelle.
                </p>
                <p>
                  Toute reproduction, diffusion, extraction ou reutilisation, totale ou partielle,
                  sans autorisation ecrite prealable, est interdite.
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">Protection des données personnelles (RGPD)</h2>
                <p>
                  Les informations collectees via les formulaires du site sont traitees par
                  AM Courtage &amp; Patrimoine dans le cadre du suivi de la relation et de l&apos;etude
                  des demandes (contact, bilan, demonstration, licence).
                </p>
                <p>
                  Conformement a la reglementation applicable, vous disposez d&apos;un droit d&apos;acces,
                  de rectification, d&apos;opposition, d&apos;effacement et de limitation du traitement
                  de vos donnees.
                </p>
                <p>
                  Pour exercer vos droits : aurelie.monteil@am-courtage-et-patrimoine.fr
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">Cookies</h2>
                <p>
                  Le site peut utiliser des cookies techniques et de mesure d&apos;audience afin de
                  faciliter la navigation, ameliorer l&apos;experience utilisateur et analyser la
                  frequentation.
                </p>
                <p>
                  Vous pouvez parametrer ou desactiver les cookies depuis votre navigateur.
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">Limitation de responsabilité</h2>
                <p>
                  Les informations publiees sur ce site sont fournies a titre informatif.
                  PatrimEmotion constitue un outil d&apos;analyse comportementale et pedagogique :
                  il ne constitue ni un conseil en investissement, ni une recommandation
                  financiere personnalisee.
                </p>
                <p>
                  Les decisions patrimoniales et d&apos;investissement relevent exclusivement du
                  professionnel habilite et du client, dans le respect du cadre reglementaire.
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">Liens hypertextes</h2>
                <p>
                  Le site peut contenir des liens vers des sites tiers. AMCP ne peut etre tenue
                  responsable du contenu ou du fonctionnement de ces services externes.
                </p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">Réclamations</h2>
                <p>Responsable reclamations clients : Aurelie Monteil</p>
                <p>
                  Adresse postale : AM Courtage &amp; Patrimoine, 10 rue Edgar Degas, 80080 Amiens
                </p>
                <p>E-mail : aurelie.monteil@am-courtage-et-patrimoine.fr</p>
                <p>Delai indicatif d&apos;accuse de reception : 10 jours</p>
                <p>Delai indicatif de reponse : 2 mois</p>
              </div>

              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">Médiation et droit applicable</h2>
                <p>
                  En cas de litige, une tentative de resolution amiable est privilegiee avant
                  toute action judiciaire.
                </p>
                <p>
                  Mediation de la consommation : CMAP (39 avenue Franklin D. Roosevelt, 75008 Paris).
                </p>
                <p>
                  Le present site est soumis au droit francais. En cas de litige, competence
                  attribuee aux juridictions du ressort de la Cour d&apos;appel d&apos;Amiens.
                </p>
              </div>
    </LegalPageLayout>
  );
}
