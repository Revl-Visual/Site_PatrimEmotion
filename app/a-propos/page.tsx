import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AProposPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="section-dark py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-gray-900 text-center mb-6">
              À propos
            </h1>
          </div>
        </section>

        <section className="py-16 section-light">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6 text-gray-700">
              <p>
                PatrimEmotion® est une méthode psychométrique propriétaire développée par AM Courtage & Patrimoine (AMCP), appliquée à la finance patrimoniale.
              </p>
              <p>
                Notre mission est de remettre l&apos;humain au cœur des décisions patrimoniales en intégrant la dimension émotionnelle dans l&apos;analyse et la stratégie patrimoniale.
              </p>
              <p>
                <strong>Baseline :</strong> Donner du sens à vos décisions patrimoniales
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
