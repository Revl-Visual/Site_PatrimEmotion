import LegalPageLayout from "@/components/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sécurité | PatrimEmotion®",
  description:
    "Sécurité et confidentialité des données, cadre réglementé ORIAS / CNCEF — AM Courtage & Patrimoine (AMCP).",
};

export default function SecuritePage() {
  return (
    <LegalPageLayout
      title="Sécurité"
      afterContent={
        <>
          <section className="bg-slate-50 py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="pe-heading-section mb-8 text-[#003662]">
                Cadre d&apos;usage et conformité
              </h2>
              <div className="space-y-6 pe-body-lead text-[#003662]/90 leading-relaxed">
                <p>
                  PatrimEmotion® est une méthode pédagogique d&apos;aide à l&apos;entretien et à la restitution. Elle vise à améliorer la compréhension du client, la qualité des échanges et la cohérence de certains supports de restitution.
                </p>
                <p className="font-medium text-[#003662]">Elle ne constitue pas :</p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>une recommandation personnalisée automatisée</li>
                  <li>un outil de profil de risque réglementaire</li>
                  <li>un dispositif se substituant aux obligations de connaissance client</li>
                  <li>un mécanisme d&apos;adéquation ou de recommandations au sens réglementaire</li>
                </ul>
                <p>
                  Le professionnel demeure seul responsable de ses obligations réglementaires, de ses analyses, de ses recommandations et du cadre juridique applicable à son activité.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#003662] py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="pe-heading-section text-white mb-8">
                Un cadre réglementé
              </h2>
              <div className="space-y-6 pe-body-lead text-white/95 leading-relaxed">
                <p>
                  Le cabinet <strong>AM Courtage & Patrimoine (AMCP)</strong>, situé à Amiens et représenté par <strong>Aurélie MONTEIL</strong>, exploite la licence PatrimEmotion®.
                </p>
                <p>
                  Le cabinet est inscrit à l&apos;ORIAS sous le numéro <strong className="text-[#f4ca3a]">19004843</strong>, est adhérent à la CNCEF et exerce dans le respect des cadres réglementaires applicables à ses différents statuts, notamment celui de Conseiller en Investissements Financiers (CIF).
                </p>
                <p>
                  La méthode PatrimEmotion® constitue un outil d&apos;analyse comportementale et pédagogique d&apos;aide à la réflexion patrimoniale.
                </p>
                <p className="font-semibold">Elle ne constitue ni :</p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>un conseil financier automatisé</li>
                  <li>une recommandation d&apos;investissement</li>
                  <li>un outil de vente de produits financiers.</li>
                </ul>
                <p>
                  Les décisions patrimoniales relèvent exclusivement de la responsabilité du client et du professionnel habilité qui l&apos;accompagne.
                </p>
              </div>
            </div>
          </section>
        </>
      }
    >
      <p className="font-semibold text-[#003662]">
        La protection de vos données est notre priorité
      </p>
      <p>
        AM Courtage & Patrimoine (AMCP) met en œuvre tous les moyens nécessaires pour assurer la sécurité et la confidentialité de vos données.
      </p>
      <div className="rounded-xl border border-[#003662]/15 bg-white p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#003662] flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h2 className="pe-heading-section text-[#003662] mb-3">Un cadre sûr</h2>
            <p>
              PatrimEmotion® est une méthode propriétaire, structurée et documentée, exploitée par des cabinets partenaires dans un cadre contractuel strict (format licence associée à différents niveaux d&apos;accréditation avec une habilitation préalable à obtenir).
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="pe-heading-section text-[#003662] mb-4">Mesures de sécurité</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Chiffrement des données</li>
          <li>Accès sécurisé</li>
          <li>Surveillance continue</li>
        </ul>
      </div>
    </LegalPageLayout>
  );
}
