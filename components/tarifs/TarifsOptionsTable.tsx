type OptionRow = {
  option: string;
  light: string;
  core: string;
  premium: string;
};

export const OPTION_ROWS: OptionRow[] = [
  {
    option: "Utilisateur supplémentaire / an",
    light: "390 €",
    core: "490 €",
    premium: "590 €",
  },
  {
    option: "Formation avancée (distanciel)",
    light: "490 €",
    core: "—",
    premium: "—",
  },
  {
    option: "Audit restitution (qualité restitution)",
    light: "350 €",
    core: "—",
    premium: "—",
  },
  {
    option: "Formation équipe sur site",
    light: "—",
    core: "Sur devis (1 200–2 500 €)",
    premium: "Sur devis",
  },
  {
    option: "Audit conformité annuel",
    light: "—",
    core: "790 €",
    premium: "—",
  },
  {
    option: "Audit méthodologique",
    light: "—",
    core: "—",
    premium: "1 200 €",
  },
  {
    option: "Intervention événement cabinet",
    light: "—",
    core: "—",
    premium: "Sur devis",
  },
];

const TIER_LABELS = [
  { key: "light" as const, label: "LIGHT", color: "#9FB620" },
  { key: "core" as const, label: "CORE", color: "#f4ca3a" },
  { key: "premium" as const, label: "PREMIUM", color: "#003662" },
];

export function TarifsOptionsMobileCards() {
  return (
    <div className="lg:hidden divide-y divide-[#003662]/10">
      {OPTION_ROWS.map((row) => (
        <article key={row.option} className="p-4 sm:p-5">
          <p className="mb-3 text-sm font-semibold leading-snug text-[#003662]">{row.option}</p>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {TIER_LABELS.map((tier) => (
              <div
                key={tier.key}
                className="rounded-xl border border-[#003662]/10 bg-[#003662]/[0.03] px-2 py-2.5 text-center sm:px-3 sm:py-3"
              >
                <p
                  className="mb-1 text-[0.65rem] font-bold uppercase tracking-wide sm:text-xs"
                  style={{ color: tier.color }}
                >
                  {tier.label}
                </p>
                <p className="break-words text-xs font-medium leading-snug text-[#003662] sm:text-sm">
                  {row[tier.key]}
                </p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export function TarifsOptionsDesktopTable() {
  return (
    <div className="hidden lg:block">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-[#003662] text-white">
            <th className="px-5 py-4 text-base font-semibold" scope="col">
              Option
            </th>
            <th className="px-5 py-4 text-base font-semibold" scope="col">
              LIGHT
            </th>
            <th className="px-5 py-4 text-base font-semibold" scope="col">
              CORE
            </th>
            <th className="px-5 py-4 text-base font-semibold" scope="col">
              PREMIUM
            </th>
          </tr>
        </thead>
        <tbody className="text-[#003662]">
          {OPTION_ROWS.map((row) => (
            <tr
              key={row.option}
              className="border-b border-[#003662]/10 transition-colors last:border-0 hover:bg-[#003662]/5"
            >
              <td className="px-5 py-3.5">{row.option}</td>
              <td className="px-5 py-3.5 font-medium">{row.light}</td>
              <td className="px-5 py-3.5 font-medium">{row.core}</td>
              <td className="px-5 py-3.5 font-medium">{row.premium}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
