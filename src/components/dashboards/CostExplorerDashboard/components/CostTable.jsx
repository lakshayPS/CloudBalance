export const buildFullCostTable = (rawData) => {
  const months = [...new Set(rawData.map((d) => d.MONTH))].sort();

  const serviceMap = {};

  rawData.forEach(({ GROUP_FIELD, MONTH, TOTAL_COST }) => {
    const service = GROUP_FIELD ?? "Unknown";

    if (!serviceMap[service]) {
      serviceMap[service] = {
        service,
        monthly: {},
        total: 0,
      };
    }

    serviceMap[service].monthly[MONTH] =
      (serviceMap[service].monthly[MONTH] || 0) + TOTAL_COST;

    serviceMap[service].total += TOTAL_COST;
  });

  const rows = Object.values(serviceMap).sort((a, b) => b.total - a.total);

  return { months, rows };
};

const CostTable = ({ data }) => {
  const { months, rows } = data;

  return (
    <div className="border rounded-lg max-h-[60vh] overflow-y-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-2 text-left sticky top-0 z-10 bg-gray-50">
              Service
            </th>

            {months.map((m) => (
              <th
                key={m}
                className="px-3 py-2 text-right sticky top-0 z-10 bg-gray-50"
              >
                {m}
              </th>
            ))}

            <th className="px-3 py-2 text-right font-semibold sticky top-0 z-10 bg-gray-50">
              Total
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.service} className="border-t hover:bg-gray-50">
              <td className="px-3 py-2 font-medium whitespace-nowrap">
                {row.service}
              </td>

              {months.map((m) => (
                <td key={m} className="px-3 py-2 text-right">
                  {(row.monthly[m] ?? 0).toLocaleString(undefined, {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                  })}
                </td>
              ))}

              <td className="px-3 py-2 text-right font-semibold text-blue-600">
                {(row.total ?? 0).toLocaleString(undefined, {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CostTable;
