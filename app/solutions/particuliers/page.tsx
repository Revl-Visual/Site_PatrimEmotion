import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ParticuliersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="section-dark py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-gray-900 text-center mb-6">
              Particuliers & Dirigeants
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              Un bilan patrimonial personnalisé qui révèle votre profil émotionnel
            </p>
          </div>
        </section>

        <section className="py-16 section-light">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Pourquoi choisir PatrimEmotion® ?
            </h2>
            <div className="space-y-6 text-gray-700">
              <p>
                En tant que particulier ou dirigeant, vous êtes confronté à de nombreuses décisions patrimoniales complexes. PatrimEmotion® vous aide à prendre des décisions alignées avec qui vous êtes vraiment.
              </p>
              <p>
                Notre méthode vous permet de comprendre votre relation à l&apos;argent et au risque, pour construire une stratégie patrimoniale qui vous ressemble et que vous pourrez assumer sur le long terme.
              </p>
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="glass-button text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg inline-block"
              >
                Demander un bilan patrimonial
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
