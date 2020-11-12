import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Svg, { Text as TextSvg } from "react-native-svg";
import { VictoryPie } from "victory-native";

import { reportStyle } from "../../styles/general";
import colors from "../../styles/colors";

const data = {
  value: [
    { x: 1, y: 5 },
    { x: 2, y: 10 },
  ],
  color: [colors.TEXT_SECUNDARIO, colors.BUTTON_ACTIVO],
};

const dataColors = data.value.map(() =>
  ("#" + ((Math.random() * 0xffffff) << 0).toString(16) + "000000").slice(0, 7)
);

const Pie = () => {
  return (
    <VictoryPie
      colorScale={data.value.length == 2 ? data.color : dataColors}
      data={data.value}
      standalone={true}
      width={100}
      height={100}
      innerRadius={50}
      style={{ labels: { fontSize: 16, fill: "transparent" } }}
    />
  );
};

const styles = StyleSheet.create({});

export default Pie;
