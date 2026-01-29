import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProfessionnelsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="section-dark py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-gray-900 text-center mb-6">
              Professionnels CGP/Courtiers
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              Obtenez la licence PatrimEmotion® et différenciez votre conseil
            </p>
          </div>
        </section>

        <section className="py-16 section-light">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Devenez licencié PatrimEmotion®
            </h2>
            <div className="space-y-6 text-gray-700">
              <p>
                En tant que conseiller en gestion de patrimoine ou courtier, vous cherchez constamment à différencier votre approche et à offrir une valeur ajoutée à vos clients.
              </p>
              <p>
                La licence PatrimEmotion® vous permet d&apos;intégrer cette méthode unique dans votre pratique professionnelle, offrant à vos clients une approche innovante qui prend en compte leur dimension émotionnelle.
              </p>
              <p>
                <strong>Bénéfices pour votre activité :</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Différenciation de votre conseil</li>
                <li>Meilleure compréhension de vos clients</li>
                <li>Décisions patrimoniales plus durables</li>
                <li>Formation et support inclus</li>
              </ul>
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="glass-button text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg inline-block"
              >
                Devenir licencié
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
