import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PatrimEmotionMark } from "@/components/PatrimEmotionMark";
import { CtaButton } from "@/components/CtaButton";
import { CtaRow } from "@/components/CtaRow";
import Image from "next/image";
import type { Metadata } from "next";
import { AMCP_CONTACT_URL } from "@/lib/amcp";

export const metadata: Metadata = {
  title: "Certifications PatrimEmotion®",
  description:
    "Découvrez le système de certification PatrimEmotion® : badges, niveaux, parcours et cadre de reconnaissance.",
};

const BADGES_VISUAL_SRC = "/images/badges/badges_PatrimEmotion.png";

export default function CertificationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="-mt-2 md:-mt-3 pt-0 pb-0 px-4">
          <div className="hero-encart pt-16 pb-14 md:pt-20 md:pb-18 px-6 md:px-12">
            <div className="container mx-auto relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="pe-heading-hero mb-4 text-white">
                  Certifications <PatrimEmotionMark />
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
                <p className="pe-body-lead pe-lead-centered mx-auto mb-10 max-w-3xl text-[#003662]/90 md:mb-12">
                  Une lecture visuelle simple et immédiate des niveaux de reconnaissance professionnelle.
                </p>

                <div className="relative mx-auto max-w-3xl">
                  <div className="relative overflow-hidden rounded-[1.75rem] bg-white px-5 pb-5 pt-2 md:px-8 md:pb-8 md:pt-3">
                    <div className="relative aspect-[4/3] w-full md:aspect-[16/10]">
                      <Image
                        src={BADGES_VISUAL_SRC}
                        alt="Badges de certification PatrimEmotion"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 896px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-alt-blue py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="rounded-[1.75rem] border border-[#003662]/12 bg-white p-7 shadow-[0_16px_44px_-20px_rgba(0,54,98,0.28)] md:p-10">
              <h2 className="pe-heading-section text-[#003662] mb-8 text-center">Parcours de certification</h2>
              <div className="relative grid md:grid-cols-3 gap-5 md:gap-6 no-justify">
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
                    className="relative rounded-2xl border border-[#003662]/10 bg-white p-6 text-left shadow-[0_10px_28px_-14px_rgba(0,54,98,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f4ca3a]/40 hover:shadow-[0_18px_36px_-16px_rgba(0,54,98,0.42)] md:p-7"
                  >
                    <div className="mb-4 flex justify-start">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#003662] text-white text-lg font-semibold shadow-md shadow-[#003662]/30">
                        {step}
                      </span>
                    </div>
                    <h3 className="pe-heading-card mb-2 text-left leading-tight text-[#003662]">{title}</h3>
                    <p className="pe-body-lead !text-left [text-align-last:auto] leading-relaxed text-[#003662]/85 [text-wrap:pretty]">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="!pt-8 !pb-32 md:!pt-12 md:!pb-40 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="rounded-[2rem] border-2 border-[#f4ca3a] bg-[#fff8df] px-8 py-10 text-center shadow-[0_18px_42px_-22px_rgba(0,54,98,0.28)] md:px-10 md:py-11">
                <h2 className="pe-heading-section text-[#003662] mb-4">Échanger sur les certifications</h2>
                <p className="pe-body-lead pe-lead-centered text-[#003662]/85 mb-8 md:text-[1.18rem]">
                  Vous souhaitez cadrer un parcours certifiant pour votre structure ?
                </p>
                <CtaRow spacing="none">
                  <CtaButton
                    href={AMCP_CONTACT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="yellow"
                    className="text-base font-semibold"
                  >
                    Être contacté
                  </CtaButton>
                </CtaRow>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
