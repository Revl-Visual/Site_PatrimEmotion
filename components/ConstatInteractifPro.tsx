"use client";

import { useState } from "react";
import { CtaButton } from "@/components/CtaButton";

const CONSTATS_PRO = [
  "Le client ne connaît pas les termes financiers",
  "Le client ne veut pas prendre de risques",
  "J'ai mal compris les attentes de mon client",
  "J'ai du mal à comprendre certains de mes clients",
  "Le client est indécis, comment l'aider dans ses choix ?",
  "Comment prendre en compte la personnalité de mon client pour aligner ses choix patrimoniaux et être légitime quant aux décisions prises dans le temps ?",
];

export default function ConstatInteractifPro() {
  const [checked, setChecked] = useState<boolean[]>(CONSTATS_PRO.map(() => false));
  const count = checked.filter(Boolean).length;

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const titreHumain =
    count === 1
      ? "Cette situation vous parle ?"
      : count === 2
        ? "Vous vous retrouvez dans ces deux points ?"
        : count === 3
          ? "Plusieurs de ces situations résonnent avec vous ?"
          : "Tout cela vous parle ?";

  const messageAdapte =
    count === 1
      ? "Ces questionnements sont courants en conseil. La méthode PatrimEmotion® vous aide à objectiver la relation client et à proposer un cadre structuré."
      : count === 2
        ? "Ces situations appellent un outil commun. PatrimEmotion® permet de structurer le dialogue et d'aligner les stratégies avec le profil de votre client."
        : "Quand plusieurs de ces points se croisent, une approche méthodique fait la différence. La licence PatrimEmotion® vous donne les outils pour accompagner vos clients avec plus de pertinence et de légitimité.";

  return (
    <section className="no-justify py-16 md:py-24 bg-[#003662]/5" aria-labelledby="constat-pro-title">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="rounded-2xl bg-[#003662] p-6 md:p-8 mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-l-4 border-[#f4ca3a]">
          <h2
            id="constat-pro-title"
            className="pe-heading-section text-white mb-2"
          >
            Quelle est votre situation ?
          </h2>
          <p className="pe-body-lead text-white/90 leading-relaxed">
            De nombreuses situations complexes sont courantes, nous sommes là pour vous accompagner.
          </p>
        </div>
        <p className="pe-body-lead text-[#003662] mb-6 leading-relaxed">
          Cochez ce qui vous parle :
        </p>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-10 items-start">
          <div className="space-y-3">
            {CONSTATS_PRO.map((texte, i) => (
              <label
                key={i}
                className={`flex items-center gap-4 p-4 rounded-xl bg-white border-l-4 cursor-pointer transition-all shadow-sm hover:shadow-md ${
                  checked[i] ? "border-[#f4ca3a] ring-2 ring-[#f4ca3a]/30" : "border-[#003662]/20"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked[i]}
                  onChange={() => toggle(i)}
                  className="h-5 w-5 rounded border-2 border-[#003662]/40 text-[#f4ca3a] focus:ring-[#f4ca3a] focus:ring-offset-0"
                  aria-label={texte}
                />
                <span className="text-[#003662] leading-relaxed select-none">{texte}</span>
              </label>
            ))}
          </div>

          <div className="rounded-2xl bg-white p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#003662]/10 sticky top-24">
            {count === 0 ? (
              <>
                <div className="flex justify-center mb-4">
                  <div className="h-14 w-14 rounded-full border-2 border-[#003662] flex items-center justify-center bg-[#003662]/5">
                    <svg className="w-7 h-7 text-[#003662]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="pe-heading-card text-[#003662] text-center mb-3">
                  Identifiez ce qui vous concerne
                </h3>
                <p className="text-[#003662]/80 text-sm text-center leading-relaxed">
                  Cochez les situations qui résonnent avec votre pratique. L&apos;encart s&apos;adaptera pour vous orienter.
                </p>
              </>
            ) : (
              <>
                <div className="flex justify-center mb-4">
                  <div className="h-14 w-14 rounded-full border-2 border-[#f4ca3a] flex items-center justify-center bg-[#f4ca3a]/20">
                    <svg className="w-8 h-8 text-[#003662]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="pe-heading-card text-[#003662] text-center mb-3">
                  {titreHumain}
                </h3>
                <p className="text-[#003662]/80 text-sm text-center leading-relaxed mb-6">
                  {messageAdapte}
                </p>
                <CtaButton href="/licences" variant="yellow" fullWidth className="text-center font-semibold">
                  Découvrir la licence PatrimEmotion®
                </CtaButton>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
