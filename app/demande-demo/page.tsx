import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demande de démo | PatrimEmotion®",
  description: "Demandez une démo personnalisée de la méthode PatrimEmotion® (15 min).",
};

export default function DemandeDemoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero + formulaire démo - même style que la section accueil */}
        <section className="pt-24 pb-32 md:pt-32 md:pb-40 relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.2),0_4px_15px_rgba(0,0,0,0.15)]" style={{ clipPath: "polygon(0 8%, 100% 0%, 100% 92%, 0% 100%)" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#9FB620] via-[#a5c023] to-[#8aa61d]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-4 leading-tight">
                Demande de <span className="text-[#003662]">démo</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Remplissez le formulaire et nous vous recontactons sous 48 h pour convenir d&apos;un créneau (15 min).
              </p>
            </div>
            <div className="max-w-lg mx-auto">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <h2 className="text-xl font-semibold text-[#003662] mb-6">Demander une démo</h2>
                <form className="space-y-4" action="#" method="post">
                  <div>
                    <label htmlFor="demo-entreprise" className="block text-sm font-medium text-[#003662] mb-1">Nom entreprise *</label>
                    <input type="text" id="demo-entreprise" name="entreprise" required className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="demo-effectif" className="block text-sm font-medium text-[#003662] mb-1">Effectif *</label>
                    <input type="text" id="demo-effectif" name="effectif" required placeholder="Ex. 10-50 salariés" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="demo-activite" className="block text-sm font-medium text-[#003662] mb-1">Activité *</label>
                    <input type="text" id="demo-activite" name="activite" required placeholder="Ex. Conseil en gestion de patrimoine" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="demo-dirigeant" className="block text-sm font-medium text-[#003662] mb-1">Nom du dirigeant *</label>
                    <input type="text" id="demo-dirigeant" name="dirigeant" required className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="demo-phone" className="block text-sm font-medium text-[#003662] mb-1">Téléphone *</label>
                    <input type="tel" id="demo-phone" name="phone" required className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="demo-email" className="block text-sm font-medium text-[#003662] mb-1">Email *</label>
                    <input type="email" id="demo-email" name="email" required className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="demo-dispo" className="block text-sm font-medium text-[#003662] mb-1">Dates de disponibilités *</label>
                    <textarea id="demo-dispo" name="disponibilites" rows={3} required placeholder="Ex. Semaine du 15 mars, matinées uniquement" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-[#003662] hover:bg-[#004a7a] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                    Envoyer la demande
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
