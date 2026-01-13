import { useEffect, useState } from "react";
import ReactFusioncharts from "./fusionSetup";

const DynamicChart = ({ type, data }) => {
  const [dataSource, setDataSource] = useState({
    chart: {
      caption: "AWS Services",
      subcaption: "Monthly Costs",
      xaxisname: "Month",
      yaxisname: "Cost (in $)",
      numberprefix: "$",
      theme: "gammel",
      drawcrossline: "1",
      paletteColors: "#2498FE,#61DBFD,#FFA213,#A3DC28,#7AF0CA",
    },
    categories: [{ category: [] }],
    dataset: [],
  });

  useEffect(() => {
    if (!data || data.length === 0) {
      setDataSource((prev) => ({
        ...prev,
        categories: [{ category: [] }],
        dataset: [],
      }));
      return;
    }

    const months = [...new Set(data.map((d) => d.MONTH))]
      .sort()
      .map((m) => ({ label: m }));

    const groups = [...new Set(data.map((d) => d.GROUP_FIELD))];

    const dataMap = {};
    data.forEach((d) => {
      dataMap[`${d.GROUP_FIELD}_${d.MONTH}`] = d.TOTAL_COST;
    });

    const dataset = groups.map((grp) => ({
      seriesname: grp != null ? String(grp) : "Unknown",
      data: months.map((month) => ({
        value: dataMap[`${grp}_${month.label}`] ?? 0,
      })),
    }));

    const datasetWithTotal = dataset.map((d) => ({
      ...d,
      total: d.data.reduce((sum, m) => sum + Number(m.value), 0),
    }));

    datasetWithTotal.sort((a, b) => b.total - a.total);

    const top4 = datasetWithTotal.slice(0, 4);
    const others = datasetWithTotal.slice(4);

    if (others.length > 0) {
      const othersSeries = {
        seriesname: "Others",
        data: months.map((month, i) => ({
          value: others.reduce((sum, d) => sum + Number(d.data[i].value), 0),
        })),
      };
      top4.push(othersSeries);
    }

    setDataSource((prev) => ({
      ...prev,
      categories: [{ category: months }],
      dataset: top4,
    }));
  }, [data]);

  return (
    <ReactFusioncharts
      type={type}
      width="100%"
      height="400"
      dataFormat="JSON"
      dataSource={dataSource}
    />
  );
};

export default DynamicChart;
