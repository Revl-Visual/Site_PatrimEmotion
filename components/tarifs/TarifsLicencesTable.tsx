type LicenceRow = {
  color: string;
  name: string;
  annual: string;
  monthly: string;
  commitment: string;
  users: string;
};

export const LICENCE_ROWS: LicenceRow[] = [
  {
    color: "#1a1a1a",
    name: "Licence FONDATEUR",
    annual: "2 900 €",
    monthly: "—",
    commitment: "12 mois",
    users: "Selon CORE",
  },
  {
    color: "#9FB620",
    name: "Licence LIGHT",
    annual: "1 490 €",
    monthly: "149 €",
    commitment: "12 mois",
    users: "1 nominatif",
  },
  {
    color: "#f4ca3a",
    name: "Licence CORE",
    annual: "3 900 €",
    monthly: "390 €",
    commitment: "12 mois",
    users: "Jusqu'à 5",
  },
  {
    color: "#003662",
    name: "Licence PREMIUM",
    annual: "9 800 €",
    monthly: "980 €",
    commitment: "12 mois",
    users: "Jusqu'à 15",
  },
  {
    color: "#64748b",
    name: "Licence INSTITUTIONNELLE",
    annual: "Ticket 25k–75k €",
    monthly: "—",
    commitment: "Sur devis",
    users: "Selon volumétrie",
  },
];

function LicenceDetail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-[#003662]/8 py-2.5 last:border-0">
      <span className="shrink-0 text-sm text-[#003662]/65">{label}</span>
      <span className="text-right text-sm font-medium leading-snug text-[#003662]">{value}</span>
    </div>
  );
}

export function TarifsLicencesMobileCards() {
  return (
    <div className="lg:hidden divide-y divide-[#003662]/10">
      {LICENCE_ROWS.map((row) => (
        <article key={row.name} className="p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2.5">
            <span
              className="inline-block h-3 w-3 shrink-0 rounded-full"
              style={{ backgroundColor: row.color }}
              aria-hidden
            />
            <h3 className="text-base font-semibold leading-snug" style={{ color: row.color }}>
              {row.name}
            </h3>
          </div>
          <div>
            <LicenceDetail label="Tarif annuel HT" value={row.annual} />
            <LicenceDetail label="Tarif mensuel HT" value={row.monthly} />
            <LicenceDetail label="Engagement" value={row.commitment} />
            <LicenceDetail label="Utilisateurs inclus" value={row.users} />
          </div>
        </article>
      ))}
    </div>
  );
}

export function TarifsLicencesDesktopTable() {
  return (
    <div className="hidden lg:block">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left">
          <thead>
            <tr className="bg-[#003662] text-white">
              <th className="w-8 px-3 py-4 text-base font-semibold" scope="col">
                <span className="sr-only">Couleur</span>
              </th>
              <th className="px-5 py-4 text-base font-semibold" scope="col">
                Offre
              </th>
              <th className="px-5 py-4 text-base font-semibold" scope="col">
                Tarif annuel HT
              </th>
              <th className="px-5 py-4 text-base font-semibold" scope="col">
                Tarif mensuel HT
              </th>
              <th className="px-5 py-4 text-base font-semibold" scope="col">
                Engagement
              </th>
              <th className="px-5 py-4 text-base font-semibold" scope="col">
                Utilisateurs inclus
              </th>
            </tr>
          </thead>
          <tbody>
            {LICENCE_ROWS.map((row) => (
              <tr
                key={row.name}
                className="border-b border-[#003662]/10 text-[#003662] transition-colors last:border-0 hover:bg-[#003662]/5"
              >
                <td className="w-8 px-3 py-4">
                  <span
                    className="inline-block h-3 w-3 shrink-0 rounded-full"
                    style={{ backgroundColor: row.color }}
                    aria-hidden
                  />
                </td>
                <td className="px-5 py-4 font-medium" style={{ color: row.color }}>
                  {row.name}
                </td>
                <td className="px-5 py-4">{row.annual}</td>
                <td className="px-5 py-4">{row.monthly}</td>
                <td className="px-5 py-4">{row.commitment}</td>
                <td className="px-5 py-4">{row.users}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
