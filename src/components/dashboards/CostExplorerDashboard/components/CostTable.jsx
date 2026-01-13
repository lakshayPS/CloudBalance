export const buildFullCostTable = (rawData) => {
  const months = [...new Set(rawData.map((d) => d.MONTH))].sort();

  const serviceMap = {};
  const columnTotals = {};
  let grandTotal = 0;

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

    columnTotals[MONTH] = (columnTotals[MONTH] || 0) + TOTAL_COST;

    grandTotal += TOTAL_COST;
  });

  const rows = Object.values(serviceMap).sort((a, b) => b.total - a.total);

  return {
    months,
    rows,
    columnTotals,
    grandTotal,
  };
};

const CostTable = ({ data, groupBy }) => {
  const {
    months = [],
    rows = [],
    columnTotals = {},
    grandTotal = 0,
  } = data || {};

  return (
    <div className="border rounded-lg max-h-full overflow-y-auto">
      <table className="min-w-full text-sm table-fixed">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-2 text-left w-[240px] sticky top-0 z-10 bg-gray-50">
              {groupBy}
            </th>

            {months.map((m) => (
              <th
                key={m}
                className="px-3 py-2 text-right w-[140px] sticky top-0 z-10 bg-gray-50"
              >
                {m}
              </th>
            ))}

            <th className="px-3 py-2 text-right w-[160px] font-semibold text-blue-600 sticky top-0 z-10 bg-gray-50">
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
                  })}
                </td>
              ))}

              <td className="px-3 py-2 text-right font-semibold text-blue-600">
                {(row.total ?? 0).toLocaleString(undefined, {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot className="bg-gray-100">
          <tr className="border-t font-semibold sticky bottom-0 z-10">
            <td className="px-3 py-2">Total</td>

            {months.map((m) => (
              <td key={m} className="px-3 py-2 text-right">
                {(columnTotals[m] ?? 0).toLocaleString(undefined, {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
            ))}

            <td className="px-3 py-2 text-right text-blue-700">
              {grandTotal.toLocaleString(undefined, {
                style: "currency",
                currency: "USD",
              })}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CostTable;
