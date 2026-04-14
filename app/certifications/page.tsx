import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";
import { AMCP_CONTACT_URL } from "@/lib/amcp";

export const metadata: Metadata = {
  title: "Certifications PatrimEmotion®",
  description:
    "Découvrez le système de certification PatrimEmotion® : badges, niveaux, parcours et cadre de reconnaissance.",
};

export default function CertificationsPage() {
  const badgeRows = [
    [{ src: "/images/badges/Licencie_fondateur.png", alt: "Badge licencié fondateur" }],
    [
      { src: "/images/badges/licencie_certifie.png", alt: "Badge licencié certifié" },
      { src: "/images/badges/licencie_confirme.png", alt: "Badge licencié confirmé" },
      { src: "/images/badges/cabinet_expert.png", alt: "Badge cabinet expert" },
    ],
    [{ src: "/images/badges/licencie_institutionnel.png", alt: "Badge licencié institutionnel" }],
  ] as const;

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="-mt-2 md:-mt-3 pt-0 pb-0 px-4">
          <div className="hero-encart pt-16 pb-14 md:pt-20 md:pb-18 px-6 md:px-12">
            <div className="container mx-auto relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="pe-heading-hero text-white mb-4">
                  Certifications <span className="text-[#f4ca3a]">PatrimEmotion</span>
                </h1>
                <h2 className="text-white mb-5 text-xl sm:text-2xl md:text-3xl font-medium">
                  Un système clair
                </h2>
                <p className="pe-body-lead text-white/90 max-w-3xl mx-auto">
                  PatrimEmotion distingue le niveau de licence (équipement du cabinet) et le badge (niveau d&apos;habilitation
                  du professionnel). Cette distinction garantit une communication plus lisible et plus cohérente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="rounded-[2rem] p-[3px] bg-gradient-to-br from-[#9FB620] via-[#f4ca3a] to-[#9FB620] shadow-[0_28px_70px_rgba(0,54,98,0.14)]">
              <div className="rounded-[calc(2rem-3px)] bg-white px-7 py-10 md:px-11 md:py-12 lg:px-14 lg:py-14 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)]">
                <h2 className="pe-heading-section text-[#003662] mb-4 text-center">Les badges de certification</h2>
                <p className="text-[#003662]/80 text-center mb-8 max-w-2xl mx-auto">
                  Une lecture visuelle simple et immédiate des niveaux de reconnaissance.
                </p>
                <div className="space-y-4">
                  {badgeRows.map((row, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-[#003662]/12 bg-gradient-to-br from-slate-50 to-white px-5 py-5 text-center text-[#003662] font-medium shadow-[0_6px_24px_-10px_rgba(0,54,98,0.2)]"
                    >
                      <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6">
                        {row.map((badge) => (
                          <div key={badge.src} className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32">
                            <Image src={badge.src} alt={badge.alt} fill className="object-contain" sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-alt-blue py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="pe-heading-section text-[#003662] mb-8 text-center">Parcours de certification</h2>
            <div className="relative grid md:grid-cols-3 gap-5 md:gap-6">
              <div
                aria-hidden
                className="hidden md:block absolute left-[16.66%] right-[16.66%] top-9 h-[2px] bg-gradient-to-r from-[#9FB620]/60 via-[#f4ca3a]/70 to-[#9FB620]/60"
              />
              {[
                ["1", "Formation", "Appropriation de la méthode et du cadre d'usage."],
                ["2", "Pratique", "Restitutions accompagnées et montée en compétence."],
                ["3", "Validation", "Attribution du badge selon le niveau reconnu."],
              ].map(([step, title, desc]) => (
                <div
                  key={title}
                  className="relative rounded-2xl bg-white border border-[#003662]/10 p-6 shadow-[0_10px_28px_-14px_rgba(0,54,98,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-16px_rgba(0,54,98,0.42)] hover:border-[#f4ca3a]/40"
                >
                  <div className="mb-4 flex justify-center">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#003662] text-white text-lg font-semibold shadow-md shadow-[#003662]/30">
                      {step}
                    </span>
                  </div>
                  <h3 className="pe-heading-card text-[#003662] mb-2 text-center">{title}</h3>
                  <p className="text-[#003662]/80 text-center">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="rounded-2xl border border-[#003662]/15 bg-[#003662]/5 p-8 md:p-10 text-center shadow-[0_10px_36px_-16px_rgba(0,54,98,0.3)]">
              <h2 className="pe-heading-section text-[#003662] mb-4">Échanger sur les certifications</h2>
              <p className="text-[#003662]/85 mb-8">
                Vous souhaitez cadrer un parcours certifiant pour votre structure ?
              </p>
              <a
                href={AMCP_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#003662] px-8 py-3.5 font-semibold text-white transition-colors hover:bg-[#004a7a]"
              >
                Être contacté
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
