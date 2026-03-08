import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CGU | PatrimEmotion®",
  description: "Conditions générales d'utilisation du site PatrimEmotion®.",
};

export default function CGUPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white text-center mb-4">
              Conditions générales d&apos;<span className="text-[#f4ca3a]">utilisation</span>
            </h1>
          </div>
        </section>

        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8 text-[#003662]/90 text-lg leading-relaxed">
              <p>
                Les présentes conditions générales d&apos;utilisation régissent l&apos;utilisation du site PatrimEmotion®.
              </p>
              <div>
                <h2 className="text-2xl font-serif font-semibold text-[#003662] mb-4">Acceptation des CGU</h2>
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
