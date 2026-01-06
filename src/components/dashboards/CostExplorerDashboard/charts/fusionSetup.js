import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import GammelTheme from "fusioncharts/themes/fusioncharts.theme.gammel";
import UmberTheme from "fusioncharts/themes/fusioncharts.theme.umber";

ReactFusioncharts.fcRoot(
  FusionCharts,
  Charts,
  CandyTheme,
  GammelTheme,
  UmberTheme
);

export default ReactFusioncharts;
