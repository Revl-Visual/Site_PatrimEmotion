import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institutionnels & Réseaux | PatrimEmotion®",
  description: "Déployez la méthode en marque blanche dans votre organisation.",
};

export default function InstitutionnelsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-4">
              Institutionnels & <span className="text-[#f4ca3a]">Réseaux</span>
            </h1>
            <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
              Déployez la méthode en marque blanche dans votre organisation
            </p>
          </div>
        </section>

        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-[#003662] mb-8">
              Partenariats <span className="text-[#f4ca3a]">institutionnels</span>
            </h2>
            <div className="space-y-6 text-[#003662]/90 text-lg leading-relaxed">
              <p>
                Pour les institutions financières, réseaux de conseil et organisations patrimoniales, PatrimEmotion® propose des solutions de partenariat en marque blanche.
              </p>
              <p>
                Intégrez notre méthode dans votre écosystème pour offrir à vos clients une approche innovante et différenciante, tout en conservant votre identité de marque.
              </p>
              <p className="font-semibold text-[#003662]">Solutions proposées :</p>
              <ul className="list-disc list-inside space-y-2 text-[#003662]/90 ml-4">
                <li>Licence en marque blanche</li>
                <li>Formation de vos équipes</li>
                <li>Support technique et méthodologique</li>
                <li>Accompagnement au déploiement</li>
              </ul>
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#f4ca3a] text-[#003662] hover:bg-[#f5d055] px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
              >
                Découvrir les partenariats
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
