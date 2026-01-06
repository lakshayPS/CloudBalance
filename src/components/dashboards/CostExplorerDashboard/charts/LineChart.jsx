import React from "react";
import ReactFusioncharts from "./fusionSetup";

// const dataSource = {
//   chart: {
//     caption: "Reach of Social Media Platforms among Adults",
//     subcaption: "2018-2023",
//     yaxisname: "% of Adults on this platform",
//     numbersuffix: "%",
//     plottooltext: "<b>$dataValue</b> of Adults were on $seriesName",
//     drawcrossline: "1",
//     theme: "gammel",
//   },
//   categories: [
//     {
//       category: [
//         { label: "2018" },
//         { label: "2019" },
//         { label: "2021" },
//         { label: "2023" },
//       ],
//     },
//   ],
//   dataset: [
//     {
//       seriesname: "Facebook",
//       data: [
//         { value: "68" },
//         { value: "69" },
//         { value: "69" },
//         { value: "68" },
//       ],
//     },
//     {
//       seriesname: "Instagram",
//       data: [
//         { value: "35" },
//         { value: "37" },
//         { value: "40" },
//         { value: "47" },
//       ],
//     },
//     {
//       seriesname: "LinkedIn",
//       data: [
//         { value: "25" },
//         { value: "27" },
//         { value: "28" },
//         { value: "30" },
//       ],
//     },
//     {
//       seriesname: "Twitter",
//       data: [
//         { value: "24" },
//         { value: "22" },
//         { value: "23" },
//         { value: "22" },
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
const LineChart = () => (
  <ReactFusioncharts
    type="msline"
    width="100%"
    height="400"
    dataFormat="JSON"
    dataSource={dataSource}
  />
);

export default LineChart;
