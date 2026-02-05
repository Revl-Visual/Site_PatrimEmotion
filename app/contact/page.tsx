import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | PatrimEmotion®",
  description: "Formulaire de contact PatrimEmotion® et AM Courtage & Patrimoine (AMCP).",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-4">
              Formulaire de <span className="text-[#f4ca3a]">contact</span>
            </h1>
            <p className="text-xl text-white/90 text-center max-w-3xl mx-auto mb-4">
              Nous sommes là pour répondre à vos questions
            </p>
            <p className="text-sm text-white/80 text-center max-w-2xl mx-auto">
              Ce formulaire est commun au site <span className="text-[#f4ca3a] font-semibold">AM Courtage & Patrimoine</span> et à <span className="text-[#f4ca3a] font-semibold">PatrimEmotion®</span>. Une seule demande pour échanger avec l&apos;équipe AMCP.
            </p>
          </div>
        </section>

        <section className="section-alt-blue py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <form className="space-y-6" action="#" method="post">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#003662] mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#003662] focus:border-transparent text-[#003662]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#003662] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#003662] focus:border-transparent text-[#003662]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#003662] mb-2">
                  Téléphone (optionnel)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#003662] focus:border-transparent text-[#003662]"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#003662] mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#003662] focus:border-transparent text-[#003662] bg-white"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="bilan">Demande de bilan patrimonial</option>
                  <option value="licence">Devenir licencié</option>
                  <option value="partenariat">Partenariat institutionnel</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#003662] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#003662] focus:border-transparent text-[#003662] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#f4ca3a] text-[#003662] hover:bg-[#f5d055] font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
