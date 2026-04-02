import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sécurité | PatrimEmotion®",
  description:
    "Sécurité et confidentialité des données, cadre réglementé ORIAS / CNCEF — AM Courtage & Patrimoine (AMCP).",
};

export default function SecuritePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="pe-heading-hero text-white text-center mb-4">
              <span className="text-[#f4ca3a]">Sécurité</span>
            </h1>
            <p className="pe-body-lead text-white/90 text-center max-w-2xl mx-auto leading-relaxed">
              La protection de vos données est notre priorité
            </p>
          </div>
        </section>

        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8 pe-body-lead text-[#003662]/90 leading-relaxed">
              <p>
                AM Courtage & Patrimoine (AMCP) met en œuvre tous les moyens nécessaires pour assurer la sécurité et la confidentialité de vos données.
              </p>
              <div className="pt-2">
                <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 p-8 md:p-10 rounded-2xl bg-white border-2 border-[#003662]/10 shadow-lg shadow-[#003662]/5">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#003662] flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="pe-heading-section text-[#003662] mb-3">
                      Un cadre sûr
                    </h2>
                    <p className="pe-body-lead text-[#003662]/90 leading-relaxed">
                      PatrimEmotion® est une méthode propriétaire, structurée et documentée, exploitée par des cabinets partenaires dans un cadre contractuel strict (format licence associée à différents niveaux d&apos;accréditation avec une habilitation préalable à obtenir).
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="pe-heading-section text-[#003662] mb-4">Mesures de sécurité</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Chiffrement des données</li>
                  <li>Accès sécurisé</li>
                  <li>Surveillance continue</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="pe-heading-section mb-8 text-center text-balance text-[#003662]">
              Cadre d&apos;usage et conformité
            </h2>
            <p className="mb-6 text-[#003662]/85 leading-[1.75]">
              PatrimEmotion® est une méthode pédagogique d&apos;aide à l&apos;entretien et à la restitution. Elle vise à améliorer la compréhension du client, la qualité des échanges et la cohérence de certains supports de restitution.
            </p>
            <p className="mb-4 font-medium text-[#003662]/85">Elle ne constitue pas :</p>
            <ul className="mb-6 space-y-2 text-[#003662]/85">
              <li>• une recommandation personnalisée automatisée</li>
              <li>• un outil de profil de risque réglementaire</li>
              <li>• un dispositif se substituant aux obligations de connaissance client</li>
              <li>• un mécanisme d&apos;adéquation ou de recommandations au sens réglementaire</li>
            </ul>
            <p className="font-medium text-[#003662]/85">
              Le professionnel demeure seul responsable de ses obligations réglementaires, de ses analyses, de ses recommandations et du cadre juridique applicable à son activité.
            </p>
          </div>
        </section>

        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="pe-heading-section text-white mb-8 text-center">
              Un cadre réglementé
            </h2>
            <p className="pe-body-lead text-white/95 mb-6 leading-relaxed">
              Le cabinet <strong>AM Courtage & Patrimoine (AMCP)</strong>, situé à Amiens et représenté par <strong>Aurélie MONTEIL</strong>, exploite la licence PatrimEmotion®.
            </p>
            <p className="pe-body-lead text-white/95 mb-8 leading-relaxed">
              Le cabinet est inscrit à l&apos;ORIAS sous le numéro <strong className="text-[#f4ca3a]">19004843</strong>, est adhérent à la CNCEF et exerce dans le respect des cadres réglementaires applicables à ses différents statuts, notamment celui de Conseiller en Investissements Financiers (CIF).
            </p>
            <p className="pe-body-lead text-white/95 mb-8 leading-relaxed">
              La méthode PatrimEmotion® constitue un outil d&apos;analyse comportementale et pédagogique d&apos;aide à la réflexion patrimoniale.
            </p>
            <p className="pe-body-lead text-white/95 mb-4 font-semibold">Elle ne constitue ni :</p>
            <ul className="space-y-2 pe-body-lead text-white/95 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-[#f4ca3a] shrink-0">•</span>
                <span>un conseil financier automatisé</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f4ca3a] shrink-0">•</span>
                <span>une recommandation d&apos;investissement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f4ca3a] shrink-0">•</span>
                <span>un outil de vente de produits financiers.</span>
              </li>
            </ul>
            <p className="pe-body-lead text-white/95 leading-relaxed">
              Les décisions patrimoniales relèvent exclusivement de la responsabilité du client et du professionnel habilité qui l&apos;accompagne.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
