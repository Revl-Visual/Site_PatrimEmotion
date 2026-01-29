import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="section-dark py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-gray-900 text-center mb-6">
              Mentions légales
            </h1>
          </div>
        </section>

        <section className="py-16 section-light">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6 text-gray-700">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Éditeur du site</h2>
                <p>AM Courtage & Patrimoine (AMCP)</p>
                <p>[Adresse à compléter]</p>
                <p>[SIRET à compléter]</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Directeur de publication</h2>
                <p>Aurélie - AM Courtage & Patrimoine (AMCP)</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hébergement</h2>
                <p>OVH - [Détails à compléter]</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
