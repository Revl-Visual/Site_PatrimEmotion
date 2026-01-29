import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function InstitutionnelsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="section-dark py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-gray-900 text-center mb-6">
              Institutionnels & Réseaux
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              Déployez la méthode en marque blanche dans votre organisation
            </p>
          </div>
        </section>

        <section className="py-16 section-light">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Partenariats institutionnels
            </h2>
            <div className="space-y-6 text-gray-700">
              <p>
                Pour les institutions financières, réseaux de conseil et organisations patrimoniales, PatrimEmotion® propose des solutions de partenariat en marque blanche.
              </p>
              <p>
                Intégrez notre méthode dans votre écosystème pour offrir à vos clients une approche innovante et différenciante, tout en conservant votre identité de marque.
              </p>
              <p>
                <strong>Solutions proposées :</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Licence en marque blanche</li>
                <li>Formation de vos équipes</li>
                <li>Support technique et méthodologique</li>
                <li>Accompagnement au déploiement</li>
              </ul>
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="glass-button text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg inline-block"
              >
                Découvrir les partenariats
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
