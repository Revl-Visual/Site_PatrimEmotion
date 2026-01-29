import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CGUPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="section-dark py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-gray-900 text-center mb-6">
              Conditions générales d&apos;utilisation
            </h1>
          </div>
        </section>

        <section className="py-16 section-light">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6 text-gray-700">
              <p>
                Les présentes conditions générales d&apos;utilisation régissent l&apos;utilisation du site PatrimEmotion®.
              </p>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptation des CGU</h2>
                <p>L&apos;utilisation du site implique l&apos;acceptation pleine et entière des présentes conditions générales d&apos;utilisation.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
