import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TestPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="section-dark py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-gray-900 text-center mb-6">
              Faire le test PatrimEmotion®
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              Découvrez votre profil émotionnel patrimonial en quelques minutes
            </p>
          </div>
        </section>

        <section className="py-16 section-light">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-700 text-center mb-6">
                Le test PatrimEmotion® vous permet d&apos;obtenir un pré-diagnostic de votre profil émotionnel patrimonial.
              </p>
              <p className="text-gray-600 text-center">
                Pour accéder au test complet, veuillez nous contacter. Un conseiller vous accompagnera dans la réalisation de votre profil complet.
              </p>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="glass-button text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg inline-block"
              >
                Contacter un conseiller
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
