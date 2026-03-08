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
        {/* Hero — fond bleu, forme moderne */}
        <section className="relative bg-[#003662] py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(244,202,58,0.08)_0%,transparent_50%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-5 leading-tight">
                Formulaire de <span className="text-[#f4ca3a]">contact</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Nous sommes là pour répondre à vos questions.
              </p>
            </div>
          </div>
        </section>

        {/* Formulaire — encart moderne */}
        <section className="py-16 md:py-24 section-alt-blue">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="rounded-2xl bg-white p-8 md:p-10 shadow-[0_4px_24px_rgba(0,54,98,0.08)] border border-[#003662]/5">
              <form className="space-y-6" action="#" method="post">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#003662] mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Jean Dupont"
                      className="w-full px-4 py-3 border border-[#003662]/20 rounded-xl focus:ring-2 focus:ring-[#003662] focus:border-[#003662] text-[#003662] placeholder:text-[#003662]/50 transition-shadow"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#003662] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="jean.dupont@exemple.fr"
                      className="w-full px-4 py-3 border border-[#003662]/20 rounded-xl focus:ring-2 focus:ring-[#003662] focus:border-[#003662] text-[#003662] placeholder:text-[#003662]/50 transition-shadow"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#003662] mb-2">
                    Téléphone (optionnel)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="06 12 34 56 78"
                    className="w-full px-4 py-3 border border-[#003662]/20 rounded-xl focus:ring-2 focus:ring-[#003662] focus:border-[#003662] text-[#003662] placeholder:text-[#003662]/50 transition-shadow"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-[#003662] mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-[#003662]/20 rounded-xl focus:ring-2 focus:ring-[#003662] focus:border-[#003662] text-[#003662] bg-white transition-shadow"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="bilan">Demande de bilan patrimonial</option>
                    <option value="licence">Devenir licencié</option>
                    <option value="partenariat">Partenariat institutionnel</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#003662] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Décrivez votre demande..."
                    className="w-full px-4 py-3 border border-[#003662]/20 rounded-xl focus:ring-2 focus:ring-[#003662] focus:border-[#003662] text-[#003662] placeholder:text-[#003662]/50 resize-none transition-shadow"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold px-8 py-4 rounded-xl transition-all text-lg shadow-lg hover:shadow-xl"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
