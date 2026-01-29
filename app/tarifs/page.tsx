import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TarifsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="section-dark py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
                Tarifs
              </h1>
              <p className="text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto">
                Des solutions adaptées à vos besoins. Choisissez la formule qui correspond à votre profil ou contactez-nous pour un devis personnalisé.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section-light py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {/* Plan Particuliers */}
              <div className="glass-card rounded-xl p-8 transition-all">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Particuliers</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">Sur devis</span>
                </div>
                <p className="text-foreground-muted mb-8">
                  Pour les particuliers et dirigeants souhaitant un bilan patrimonial personnalisé.
                </p>
                <ul className="space-y-4 mb-8 text-foreground-muted">
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span>Bilan patrimonial complet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span>Profil émotionnel détaillé</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span>Plan d&apos;action personnalisé</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span>Suivi personnalisé</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full glass-button text-white text-center px-6 py-3 rounded-lg transition-all font-semibold"
                >
                  Demander un devis
                </Link>
              </div>

              {/* Plan Professionnels */}
              <div className="glass-card border-2 border-accent rounded-xl p-8 hover:border-accent-hover transition-all relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Populaire
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Professionnels</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">Licence</span>
                  <span className="text-foreground-muted"> /an</span>
                </div>
                <p className="text-foreground-muted mb-8">
                  Pour les CGP, courtiers et conseillers souhaitant intégrer la méthode dans leur pratique.
                </p>
                <ul className="space-y-4 mb-8 text-foreground-muted">
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span>Licence PatrimEmotion®</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span>Formation complète</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span>Support technique</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span>Outils et ressources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span>Mises à jour régulières</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full bg-accent text-white text-center px-6 py-3 rounded-lg hover:bg-accent-hover transition-colors font-semibold"
                >
                  Devenir licencié
                </Link>
              </div>

              {/* Plan Institutionnels */}
              <div className="glass-card rounded-xl p-8 transition-all">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Institutionnels</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">Sur mesure</span>
                </div>
                <p className="text-foreground-muted mb-8">
                  Pour les institutions, réseaux et organisations souhaitant déployer la méthode en marque blanche.
                </p>
                <ul className="space-y-4 mb-8 text-foreground-muted">
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span>Licence en marque blanche</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span>Formation des équipes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span>Support dédié</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span>Accompagnement au déploiement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span>Personnalisation</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full bg-transparent border-2 border-foreground-muted text-foreground text-center px-6 py-3 rounded-lg hover:border-foreground hover:text-foreground transition-all font-semibold"
                >
                  Nous contacter
                </Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-foreground-muted mb-6">
                Besoin d&apos;aide pour choisir ? Notre équipe est là pour vous conseiller.
              </p>
              <Link
                href="/contact"
                className="inline-block glass-button text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg"
              >
                Parler à un conseiller
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-dark py-20 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-foreground mb-16">
              Questions fréquentes
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Comment obtenir un devis personnalisé ?
                </h3>
                <p className="text-foreground-muted text-lg">
                  Contactez-nous via le formulaire de contact ou prenez rendez-vous. Nous analyserons vos besoins et vous proposerons une solution adaptée avec un devis détaillé.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  La licence professionnelle inclut-elle la formation ?
                </h3>
                <p className="text-foreground-muted text-lg">
                  Oui, la licence professionnelle inclut une formation complète à la méthode PatrimEmotion®, ainsi qu&apos;un support technique et des ressources pour vous accompagner dans votre pratique.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Peut-on personnaliser les solutions pour les institutionnels ?
                </h3>
                <p className="text-foreground-muted text-lg">
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
