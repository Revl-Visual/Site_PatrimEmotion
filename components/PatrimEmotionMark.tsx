import { PE_MARK_EMOTION_CLASS, PE_MARK_PATRIM_CLASS } from "@/lib/peBrand";

type PatrimEmotionMarkProps = {
  /** Texte collé après « Emotion® » (ex. « ? » pour « À qui s'adresse … ? ») */
  suffix?: string;
  patrimClassName?: string;
  emotionClassName?: string;
};

function merge(...parts: (string | undefined)[]) {
  return parts.filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
}

/** Affiche « Patrim » en vert et « Emotion® » en jaune (titres et accroches marque). */
export function PatrimEmotionMark({
  suffix,
  patrimClassName,
  emotionClassName,
}: PatrimEmotionMarkProps) {
  return (
    <>
      <span className={merge(PE_MARK_PATRIM_CLASS, patrimClassName)}>Patrim</span>
      <span className={merge(PE_MARK_EMOTION_CLASS, emotionClassName)}>
        Emotion®
        {suffix}
      </span>
    </>
  );
}
