import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="section-dark py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-gray-900 text-center mb-6">
              Politique des cookies
            </h1>
          </div>
        </section>

        <section className="py-16 section-light">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6 text-gray-700">
              <p>
                Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur.
              </p>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Types de cookies utilisés</h2>
                <p>Cookies techniques nécessaires au fonctionnement du site.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
