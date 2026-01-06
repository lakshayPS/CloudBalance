import React from "react";
import ReactFusioncharts from "./fusionSetup";

// const dataSource = {
//   chart: {
//     caption: "Yearly Energy Production Rate",
//     subcaption: "Top 5 Developed Countries",
//     numbersuffix: " TWh",
//     showsum: "1",
//     plottooltext:
//       "$label produces <b>$dataValue</b> of energy from $seriesName",
//     theme: "gammel",
//     drawcrossline: "1",
//   },
//   categories: [
//     {
//       category: [
//         { label: "Canada" },
//         { label: "China" },
//         { label: "Russia" },
//         { label: "Australia" },
//         { label: "United States" },
//         { label: "France" },
//       ],
//     },
//   ],
//   dataset: [
//     {
//       seriesname: "Coal",
//       data: [
//         { value: "400" },
//         { value: "830" },
//         { value: "500" },
//         { value: "420" },
//         { value: "790" },
//         { value: "380" },
//       ],
//     },
//     {
//       seriesname: "Hydro",
//       data: [
//         { value: "350" },
//         { value: "620" },
//         { value: "410" },
//         { value: "370" },
//         { value: "720" },
//         { value: "310" },
//       ],
//     },
//     {
//       seriesname: "Nuclear",
//       data: [
//         { value: "210" },
//         { value: "400" },
//         { value: "450" },
//         { value: "180" },
//         { value: "570" },
//         { value: "270" },
//       ],
//     },
//     {
//       seriesname: "Gas",
//       data: [
//         { value: "180" },
//         { value: "330" },
//         { value: "230" },
//         { value: "160" },
//         { value: "440" },
//         { value: "350" },
//       ],
//     },
//     {
//       seriesname: "Oil",
//       data: [
//         { value: "60" },
//         { value: "200" },
//         { value: "200" },
//         { value: "50" },
//         { value: "230" },
//         { value: "150" },
//       ],
//     },
//   ],
// };

const dataSource = {
  chart: {
    caption: "AWS Services",
    subcaption: "2018-2022",
    xaxisname: "Months",
    yaxisname: "Cost (in $)",
    formatnumberscale: "1",
    numberprefix: "$",
    plottooltext: "<b>$seriesName</b>&nbsp;&nbsp;$<b>$dataValue</b>",
    theme: "gammel",
    drawcrossline: "1",
    paletteColors: "#2498FE,#61DBFD,#FFA213,#A3DC28,#7AF0CA,#F2CB00",
  },
  categories: [
    {
      category: [
        { label: "July 2025" },
        { label: "Aug 2025" },
        { label: "Sep 2025" },
        { label: "Oct 2025" },
        { label: "Nov 2025" },
      ],
    },
  ],
  dataset: [
    {
      seriesname: "Amazon Elastic Compute Cloud",
      data: [
        { value: "3962576" },
        { value: "4798024" },
        { value: "1961897" },
        { value: "6903654" },
        { value: "8642759" },
      ],
    },
    {
      seriesname: "Savings Plans for AWS Compute Cloud",
      data: [
        { value: "2108450" },
        { value: "2469894" },
        { value: "2868084" },
        { value: "4229856" },
        { value: "3553050" },
      ],
    },
    {
      seriesname: "Amazon Relational Database Service",
      data: [
        { value: "3452054" },
        { value: "4287083" },
        { value: "9455873" },
        { value: "7467823" },
        { value: "6483328" },
      ],
    },
    {
      seriesname: "Amazon Marketplace",
      data: [
        { value: "5520540" },
        { value: "6870830" },
        { value: "3558732" },
        { value: "6678203" },
        { value: "5833289" },
      ],
    },
    {
      seriesname: "CK Discounts",
      data: [
        { value: "4520540" },
        { value: "4870830" },
        { value: "4558703" },
        { value: "4678230" },
        { value: "4833208" },
      ],
    },
    {
      seriesname: "Others",
      data: [
        { value: "9520541" },
        { value: "7870830" },
        { value: "5558731" },
        { value: "1678231" },
        { value: "2833987" },
      ],
    },
  ],
};
const StackedColumnChart = () => (
  <ReactFusioncharts
    type="stackedcolumn2d"
    width="100%"
    height="400"
    dataFormat="JSON"
    dataSource={dataSource}
  />
);

export default StackedColumnChart;
