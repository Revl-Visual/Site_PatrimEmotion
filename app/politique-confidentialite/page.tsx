import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="section-dark py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-gray-900 text-center mb-6">
              Politique de confidentialité
            </h1>
          </div>
        </section>

        <section className="py-16 section-light">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6 text-gray-700">
              <p>
                AM Courtage & Patrimoine (AMCP) s&apos;engage à protéger la confidentialité de vos données personnelles.
              </p>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Collecte des données</h2>
                <p>Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes.</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Utilisation des données</h2>
                <p>Vos données personnelles ne sont pas vendues, échangées ou transférées à des tiers sans votre consentement.</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Vos droits</h2>
                <p>Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
