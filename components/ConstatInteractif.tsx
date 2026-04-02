"use client";

import { useState } from "react";
import { AMCP_CONTACT_URL } from "@/lib/amcp";

const CONSTATS = [
  "Trop d'informations, trop de produits",
  "J'ai peur de me tromper",
  "Je n'y connais rien en produits financiers",
  "Je suis mal à l'aise avec les aléas liés à mes investissements",
  "Je ne sais pas ce que j'ai et pourquoi je l'ai",
  "Je ne gère pas mon argent dans le temps",
  "J'ai du mal à me projeter",
];

export default function ConstatInteractif() {
  const [checked, setChecked] = useState<boolean[]>(CONSTATS.map(() => false));
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
      ? "Beaucoup de personnes se retrouvent dans cette situation. PatrimEmotion® vous aide à mettre des mots sur ce que vous ressentez et à avancer sereinement."
      : count === 2
        ? "Ces questionnements sont très fréquents. Le bilan PatrimEmotion® vous guide pour y voir plus clair et aligner vos choix avec qui vous êtes."
        : "Quand plusieurs de ces points nous concernent, il est utile de prendre du recul. Le bilan PatrimEmotion® vous aide à structurer votre réflexion et à dialoguer plus sereinement avec votre conseiller.";

  return (
    <section className="py-16 md:py-24 section-alt-blue" aria-labelledby="constat-title">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="rounded-2xl bg-[#f4ca3a] p-6 md:p-8 mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
          <h2
            id="constat-title"
            className="pe-heading-section text-[#003662] mb-2"
          >
            Quelle est votre situation ?
          </h2>
          <p className="pe-body-lead text-[#003662]/90 leading-relaxed">
            De nombreuses situations complexes sont courantes, nous sommes là pour vous accompagner.
          </p>
        </div>
        <p className="pe-body-lead text-[#003662]/90 mb-6 leading-relaxed">
          Cochez ce qui vous parle :
        </p>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-10 items-start">
          {/* Colonne gauche : affirmations cochables */}
          <div className="space-y-3">
            {CONSTATS.map((texte, i) => (
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

          {/* Colonne droite : encart interactif */}
          <div className="rounded-2xl bg-white p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#003662]/10 sticky top-24">
            {count === 0 ? (
              <>
                <div className="flex justify-center mb-4">
                  <div className="h-14 w-14 rounded-full border-2 border-[#f4ca3a] flex items-center justify-center bg-[#f4ca3a]/10">
                    <svg className="w-7 h-7 text-[#003662]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="pe-heading-card text-[#003662] text-center mb-3">
                  Identifiez ce qui vous concerne
                </h3>
                <p className="text-[#003662]/80 text-sm text-center leading-relaxed">
                  Cochez les affirmations qui résonnent avec votre situation. L&apos;encart à droite s&apos;adaptera pour vous guider.
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
                <a
                  href={AMCP_CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] font-semibold py-3.5 px-6 rounded-lg transition-colors"
                >
                  Nous contacter
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
