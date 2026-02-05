import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certification et Licences | PatrimEmotion®",
  description: "Parcours de formation, certification, tarification, badges et épreuves de la méthode PatrimEmotion®.",
};

export default function CertificationLicencesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-4">
              Certification et <span className="text-[#f4ca3a]">Licences</span>
            </h1>
            <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
              Devenez certifié PatrimEmotion® : parcours de formation, épreuves et reconnaissance.
            </p>
          </div>
        </section>

        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-[#003662] mb-8">
              Parcours de formation
            </h2>
            <p className="text-[#003662] leading-relaxed mb-6">
              Le parcours de formation PatrimEmotion® permet d&apos;acquérir les fondamentaux de la méthode psychométrique et son application au conseil patrimonial. Il comprend des modules théoriques et pratiques, des études de cas et des mises en situation pour garantir une maîtrise opérationnelle.
            </p>
            <p className="text-[#003662] leading-relaxed">
              La formation s&apos;adresse aux conseillers en gestion de patrimoine, aux équipes institutionnelles et à tout professionnel souhaitant intégrer la dimension émotionnelle dans son accompagnement client.
            </p>
          </div>
        </section>

        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-white mb-8">
              Certification
            </h2>
            <p className="text-white/90 leading-relaxed mb-6">
              La certification PatrimEmotion® atteste de la maîtrise de la méthode et du cadre éthique et scientifique. Elle est délivrée après validation des épreuves et du parcours de formation. Les certifiés peuvent utiliser les outils et le positionnement PatrimEmotion® dans le respect du référentiel.
            </p>
            <p className="text-white/90 leading-relaxed">
              Le renouvellement et la mise à jour des compétences sont assurés par des sessions de formation continue et l&apos;accès aux évolutions de la méthode.
            </p>
          </div>
        </section>

        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-[#003662] mb-8">
              Tarification
            </h2>
            <p className="text-[#003662] leading-relaxed mb-6">
              La tarification du parcours de formation et de la certification est adaptée selon le profil (particulier, professionnel, institutionnel) et le nombre de participants. Des formules pack et des conventions peuvent être établies pour les réseaux et les institutions.
            </p>
            <p className="text-[#003662] leading-relaxed">
              Pour obtenir un devis personnalisé et les modalités de prise en charge, contactez-nous via le formulaire de contact ou directement par email ou téléphone.
            </p>
          </div>
        </section>

        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-white mb-8">
              Badges et épreuves
            </h2>
            <p className="text-white/90 leading-relaxed mb-6">
              La certification s&apos;appuie sur des épreuves théoriques et pratiques : quiz de connaissance de la méthode, analyse de profils types et mise en situation d&apos;entretien. Les badges PatrimEmotion® permettent de valoriser les niveaux atteints (formation initiale, certification, expert).
            </p>
            <p className="text-white/90 leading-relaxed">
              Les épreuves sont organisées à l&apos;issue du parcours de formation. Un accompagnement est proposé pour la préparation et le passage des épreuves.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
