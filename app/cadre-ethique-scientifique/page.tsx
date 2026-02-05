import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadre Éthique et Scientifique | PatrimEmotion®",
  description: "Cadre éthique, méthode scientifique et méthode opérationnelle de PatrimEmotion®.",
};

export default function CadreEthiqueScientifiquePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-4">
              Cadre <span className="text-[#f4ca3a]">Éthique</span> et Scientifique
            </h1>
            <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
              Les fondements éthiques et scientifiques de la méthode PatrimEmotion®.
            </p>
          </div>
        </section>

        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-[#003662] mb-8">
              Cadre éthique
            </h2>
            <p className="text-[#003662] leading-relaxed mb-6">
              PatrimEmotion® s&apos;inscrit dans un cadre éthique strict : respect de la personne, confidentialité des données, non-jugement et neutralité dans l&apos;analyse. La méthode ne vise pas à orienter le client vers une solution prédéfinie mais à éclairer ses choix en cohérence avec son profil émotionnel et ses objectifs.
            </p>
            <p className="text-[#003662] leading-relaxed">
              Les professionnels formés et certifiés s&apos;engagent à utiliser les outils dans ce cadre et à ne pas détourner les résultats à des fins commerciales ou de pression. L&apos;éthique est au cœur de la relation conseiller–client.
            </p>
          </div>
        </section>

        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-white mb-8">
              Méthode scientifique
            </h2>
            <p className="text-white/90 leading-relaxed mb-6">
              La méthode PatrimEmotion® repose sur des bases psychométriques reconnues : construction d&apos;échelles, validation statistique, cohérence interne des dimensions mesurées. Les dimensions (relation à l&apos;argent, incertitude, contrôle/délégation, intergénérationnel, résilience, cohérence) ont été définies et testées pour leur pertinence dans le contexte patrimonial.
            </p>
            <p className="text-white/90 leading-relaxed">
              Les outils sont régulièrement mis à jour et confrontés aux retours de terrain et à la littérature en psychologie et en finance comportementale, afin de garantir une rigueur scientifique et une utilité pratique.
            </p>
          </div>
        </section>

        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-[#003662] mb-8">
              Méthode opérationnelle
            </h2>
            <p className="text-[#003662] leading-relaxed mb-6">
              La méthode opérationnelle décrit comment déployer PatrimEmotion® au quotidien : passation du questionnaire, analyse des résultats, restitution au client, traduction en recommandations stratégiques et suivi. Des protocoles et supports (grilles, livrables, scripts d&apos;entretien) sont fournis aux certifiés pour assurer une mise en œuvre homogène et de qualité.
            </p>
            <p className="text-[#003662] leading-relaxed">
              L&apos;objectif est de permettre au conseiller d&apos;intégrer la dimension émotionnelle sans alourdir le processus d&apos;accompagnement, tout en offrant au client une expérience claire et valorisante.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
