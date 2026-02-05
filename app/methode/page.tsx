import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le concept | PatrimEmotion®",
  description: "Le concept de la méthode PatrimEmotion® : approche psychométrique appliquée à la finance patrimoniale.",
};

export default function MethodePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="section-dark py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-[#003662] text-center mb-6">
              Le concept
            </h1>
            <p className="text-xl text-[#003662]/90 text-center max-w-3xl mx-auto">
              Une approche psychométrique propriétaire appliquée à la finance patrimoniale, qui relie personnalité financière, émotions et stratégie patrimoniale.
            </p>
          </div>
        </section>

        <section className="py-16 section-light">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-[#003662] mb-8">
              Comment fonctionne la méthode ?
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#003662] mb-4">
                  Une analyse approfondie de votre profil émotionnel
                </h3>
                <p className="text-[#003662]/90 mb-4">
                  PatrimEmotion® mesure plusieurs dimensions clés de votre relation au patrimoine :
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#003662]/90 ml-4">
                  <li>Votre relation émotionnelle à l&apos;argent</li>
                  <li>Votre capacité à supporter l&apos;incertitude</li>
                  <li>Votre besoin de contrôle ou de délégation</li>
                  <li>Votre projection intergénérationnelle</li>
                  <li>Votre capacité de résilience face aux crises</li>
                  <li>Votre cohérence décisionnelle</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#003662] mb-4">
                  Une traduction en stratégie concrète
                </h3>
                <p className="text-[#003662]/90">
                  Les résultats de l&apos;analyse sont traduits en recommandations pratiques : horizon de temps adapté, niveau de risque compatible avec votre profil, arbitrages cohérents avec vos valeurs, et un plan d&apos;action concret.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#003662] mb-4">
                  Un accompagnement personnalisé
                </h3>
                <p className="text-[#003662]/90">
                  Chaque profil est décrypté avec vous lors d&apos;un entretien dédié, garantissant que vous comprenez et vous appropriez les recommandations. Un suivi personnalisé vous accompagne dans la mise en œuvre.
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
