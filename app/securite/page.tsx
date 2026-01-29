import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SecuritePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="section-dark py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-gray-900 text-center mb-6">
              Sécurité
            </h1>
          </div>
        </section>

        <section className="py-16 section-light">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6 text-gray-700">
              <p>
                AM Courtage & Patrimoine (AMCP) met en œuvre tous les moyens nécessaires pour assurer la sécurité et la confidentialité de vos données.
              </p>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Mesures de sécurité</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Chiffrement des données</li>
                  <li>Accès sécurisé</li>
                  <li>Surveillance continue</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
