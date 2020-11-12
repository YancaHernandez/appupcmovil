import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { reportStyle } from "../../styles/general";
import colors from "../../styles/colors";
import Pie from "../ui/Pie";

const PopulationProjection = () => {
  return (
    <View style={reportStyle.container}>
      <View style={reportStyle.subContainer}>
        <Text style={reportStyle.title}>
          Población total del Departamento (2019)
        </Text>
        <Text style={reportStyle.textBig}>6.768.362p</Text>
      </View>

      <View style={reportStyle.subContainer}>
        <Text style={reportStyle.title}>Extensión territorial</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={[reportStyle.textBig, { marginRight: 0 }]}>
            63.612 km
          </Text>
          <Text style={[reportStyle.textBig, { fontSize: 13 }]}>2</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Pie />

          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Text
              style={[reportStyle.textBig, { color: colors.TEXT_SECUNDARIO }]}
            >
              21% Rural
            </Text>
            <Text style={reportStyle.textBig}>79% Urbano</Text>
          </View>
        </View>
      </View>

      <Text style={reportStyle.textFuente}>
        Fuente: DANE, Proyecciones de población, 2019
      </Text>
      {/* <Text style={reportStyle.textFuente}>
        Fuente: DANE, Proyecciones de población1
      </Text>
      <Text style={reportStyle.textFuente}>
        Fuente: DANE, Proyecciones de población2
      </Text>
      <Text style={reportStyle.textFuente}>
        Fuente: DANE, Proyecciones de población3
      </Text>
      <Text style={reportStyle.textFuente}>
        Fuente: DANE, Proyecciones de población4
      </Text>
      <Text style={reportStyle.textFuente}>
        Fuente: DANE, Proyecciones de población5
      </Text>
      <Text style={reportStyle.textFuente}>
        Fuente: DANE, Proyecciones de población6
      </Text>
      <Text style={reportStyle.textFuente}>
        Fuente: DANE, Proyecciones de población7
      </Text>
      <Text style={reportStyle.textFuente}>
        Fuente: DANE, Proyecciones de población8
      </Text>
      <Text style={reportStyle.textFuente}>
        Fuente: DANE, Proyecciones de población9
      </Text>
      <Text style={reportStyle.textFuente}>
        Fuente: DANE, Proyecciones de población10
      </Text>
      <Text style={reportStyle.textFuente}>
        Fuente: DANE, Proyecciones de población11
      </Text>
      <Text style={reportStyle.textFuente}>
        Fuente: DANE, Proyecciones de población12
      </Text>
      <Text style={reportStyle.textFuente}>
        Fuente: DANE, Proyecciones de población13
      </Text>
      <Text style={reportStyle.textFuente}>
        Fuente: DANE, Proyecciones de población14
      </Text>
      <Text style={reportStyle.textFuente}>
        Fuente: DANE, Proyecciones de población15
      </Text>
      <Text style={reportStyle.textFuente}>
        Fuente: DANE, Proyecciones de población16
      </Text>
      <Text style={reportStyle.textFuente}>
        Fuente: DANE, Proyecciones de población17
      </Text>
      <Text style={reportStyle.textFuente}>
        Fuente: DANE, Proyecciones de población18
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default PopulationProjection;
