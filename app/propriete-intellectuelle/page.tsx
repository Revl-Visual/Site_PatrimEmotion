import LegalPageLayout from "@/components/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propriété intellectuelle | PatrimEmotion®",
  description:
    "Protection de la méthode PatrimEmotion®, droits d'auteur, marques et conditions d'utilisation professionnelle.",
};

export default function ProprieteIntellectuellePage() {
  return (
    <LegalPageLayout title="Propriété intellectuelle">
      <div className="space-y-6">
        <p>
          PatrimEmotion® est une méthode protégée développée par Aurélie MONTEIL dans le cadre de
          l&apos;activité du cabinet AM Courtage &amp; Patrimoine.
        </p>
        <p>
          L&apos;ensemble des contenus, questionnaires, profils, scores, logiques méthodologiques, textes,
          visuels, supports et structures associés à PatrimEmotion® est protégé au titre du droit
          d&apos;auteur, du droit des marques, du savoir-faire et du droit des affaires.
        </p>
        <p>
          Toute reproduction, extraction, adaptation, reverse engineering, exploitation commerciale,
          entraînement d&apos;intelligence artificielle ou utilisation non autorisée, totale ou partielle, est
          strictement interdite sans autorisation écrite préalable.
        </p>
        <p>
          Toute utilisation professionnelle ou institutionnelle de PatrimEmotion® nécessite une licence
          officielle.
        </p>
      </div>
    </LegalPageLayout>
  );
}
