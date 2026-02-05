import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs | PatrimEmotion®",
  description: "Des solutions adaptées à vos besoins. Particuliers, professionnels, institutionnels.",
};

export default function TarifsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                Tarifs
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Des solutions adaptées à vos besoins. Choisissez la formule qui correspond à votre profil ou contactez-nous pour un devis personnalisé.
              </p>
            </div>
          </div>
        </section>

        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              <div className="rounded-xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <h3 className="text-2xl font-serif font-bold text-[#003662] mb-2">Particuliers</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#003662]">Sur devis</span>
                </div>
                <p className="text-[#003662]/80 mb-8">
                  Pour les particuliers et dirigeants souhaitant un bilan patrimonial personnalisé.
                </p>
                <ul className="space-y-4 mb-8 text-[#003662]/90">
                  <li className="flex items-start gap-3">
                    <span className="text-[#f4ca3a] text-xl">✓</span>
                    <span>Bilan patrimonial complet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f4ca3a] text-xl">✓</span>
                    <span>Profil émotionnel détaillé</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f4ca3a] text-xl">✓</span>
                    <span>Plan d&apos;action personnalisé</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f4ca3a] text-xl">✓</span>
                    <span>Suivi personnalisé</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full bg-[#f4ca3a] text-[#003662] hover:bg-[#f5d055] text-center px-6 py-3 rounded-lg transition-colors font-semibold"
                >
                  Demander un devis
                </Link>
              </div>

              <div className="rounded-xl bg-[#003662] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#f4ca3a] text-[#003662] px-4 py-1 rounded-full text-sm font-semibold">
                  Populaire
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Professionnels</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#f4ca3a]">Licence</span>
                  <span className="text-white/80"> /an</span>
                </div>
                <p className="text-white/90 mb-8">
                  Pour les CGP, courtiers et conseillers souhaitant intégrer la méthode dans leur pratique.
                </p>
                <ul className="space-y-4 mb-8 text-white/90">
                  <li className="flex items-start gap-3">
                    <span className="text-[#f4ca3a] text-xl">✓</span>
                    <span>Licence PatrimEmotion®</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f4ca3a] text-xl">✓</span>
                    <span>Formation complète</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f4ca3a] text-xl">✓</span>
                    <span>Support technique</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f4ca3a] text-xl">✓</span>
                    <span>Outils et ressources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f4ca3a] text-xl">✓</span>
                    <span>Mises à jour régulières</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full bg-[#f4ca3a] text-[#003662] hover:bg-[#f5d055] text-center px-6 py-3 rounded-lg transition-colors font-semibold"
                >
                  Devenir licencié
                </Link>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <h3 className="text-2xl font-serif font-bold text-[#003662] mb-2">Institutionnels</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#003662]">Sur mesure</span>
                </div>
                <p className="text-[#003662]/80 mb-8">
                  Pour les institutions, réseaux et organisations souhaitant déployer la méthode en marque blanche.
                </p>
                <ul className="space-y-4 mb-8 text-[#003662]/90">
                  <li className="flex items-start gap-3">
                    <span className="text-[#f4ca3a] text-xl">✓</span>
                    <span>Licence en marque blanche</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f4ca3a] text-xl">✓</span>
                    <span>Formation des équipes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f4ca3a] text-xl">✓</span>
                    <span>Support dédié</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f4ca3a] text-xl">✓</span>
                    <span>Accompagnement au déploiement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f4ca3a] text-xl">✓</span>
                    <span>Personnalisation</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full bg-white border-2 border-[#003662] text-[#003662] hover:bg-[#003662] hover:text-white text-center px-6 py-3 rounded-lg transition-colors font-semibold"
                >
                  Nous contacter
                </Link>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-[#003662]/90 mb-6">
                Besoin d&apos;aide pour choisir ? Notre équipe est là pour vous conseiller.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#f4ca3a] text-[#003662] hover:bg-[#f5d055] px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
              >
                Parler à un conseiller
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-white mb-12">
              Questions fréquentes
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[#f4ca3a] mb-3">
                  Comment obtenir un devis personnalisé ?
                </h3>
                <p className="text-white/90 text-lg">
                  Contactez-nous via le formulaire de contact ou prenez rendez-vous. Nous analyserons vos besoins et vous proposerons une solution adaptée avec un devis détaillé.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#f4ca3a] mb-3">
                  La licence professionnelle inclut-elle la formation ?
                </h3>
                <p className="text-white/90 text-lg">
                  Oui, la licence professionnelle inclut une formation complète à la méthode PatrimEmotion®, ainsi qu&apos;un support technique et des ressources pour vous accompagner dans votre pratique.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#f4ca3a] mb-3">
                  Peut-on personnaliser les solutions pour les institutionnels ?
                </h3>
                <p className="text-white/90 text-lg">
                  Absolument. Nous proposons des solutions sur mesure pour les institutions, avec possibilité de marque blanche, personnalisation de l&apos;interface, et accompagnement au déploiement selon vos besoins spécifiques.
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
