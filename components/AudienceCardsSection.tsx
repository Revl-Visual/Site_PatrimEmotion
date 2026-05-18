import { PatrimEmotionMark } from "@/components/PatrimEmotionMark";

type AudienceCardsSectionProps = {
  items: readonly string[];
  /** Grille uniforme : mêmes largeurs de colonne et hauteurs alignées par rangée */
  uniformCards?: boolean;
  /** Classes additionnelles sur la section (ex. ajuster le padding bas) */
  className?: string;
};

const cardClassName =
  "flex h-full min-h-[5rem] items-start gap-3 rounded-2xl border border-[#003662]/18 bg-white p-4 shadow-[0_2px_12px_rgba(0,54,98,0.06)] sm:min-h-[5.5rem] sm:gap-4 sm:p-5 md:min-h-[6rem] md:gap-5 md:p-6";

function cardColumnClass(index: number, total: number): string {
  const remainder = total % 3;
  if (remainder === 1 && index === total - 1) {
    return "lg:col-start-2";
  }
  if (remainder === 2 && index === total - 2) {
    return "lg:col-start-2";
  }
  if (remainder === 2 && index === total - 1) {
    return "lg:col-start-3";
  }
  return "";
}

function AudienceCard({ label, number }: { label: string; number: number }) {
  return (
    <div className={cardClassName}>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f4ca3a] text-base font-bold text-[#003662] shadow-sm sm:h-12 sm:w-12 sm:text-lg md:h-14 md:w-14 md:text-xl">
        {number}
      </span>
      <p className="min-w-0 flex-1 !text-left text-base font-bold leading-[1.55] text-[#003662] antialiased !hyphens-none break-words text-pretty md:text-[1.0625rem] md:leading-[1.6]">
        {label}
      </p>
    </div>
  );
}

function chunkRows<T>(items: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
}

function rowGridClass(count: number): string {
  if (count === 1) return "grid-cols-1 max-w-md mx-auto";
  if (count === 2) return "grid-cols-1 sm:grid-cols-2";
  return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
}

export function AudienceCardsSection({
  items,
  uniformCards = false,
  className = "",
}: AudienceCardsSectionProps) {
  const total = items.length;

  return (
    <section className={`no-justify bg-white !py-7 md:!py-9 ${className}`.trim()}>
      <div className="container mx-auto max-w-6xl px-4 sm:px-5">
        <h2 className="pe-heading-section mb-6 text-center text-balance text-[#003662] md:mb-8">
          À qui s&apos;adresse <PatrimEmotionMark suffix=" ?" />
        </h2>
        {uniformCards ? (
          <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {items.map((label, i) => (
              <div key={label} className={`h-full ${cardColumnClass(i, total)}`}>
                <AudienceCard label={label} number={i + 1} />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-5">
            {chunkRows([...items], 3).map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`grid auto-rows-fr gap-4 lg:gap-5 ${rowGridClass(row.length)}`}
              >
                {row.map((label, i) => (
                  <AudienceCard key={label} label={label} number={rowIndex * 3 + i + 1} />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
