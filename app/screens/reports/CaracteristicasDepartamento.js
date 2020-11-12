import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { Avatar, IconButton, Card, Divider } from "react-native-paper";

import { globalStyle } from "../../styles/general";
import colors from "../../styles/colors";
import { reportStyle } from "../../styles/general";
import PopulationProjection from "../../components/reports/PopulationProjection";

const CaracteristicasDepartamento = ({ navigation, route }) => {
  return (
    <View>
      <Text
        style={[
          reportStyle.reportTitleContainer,
          { backgroundColor: colors.OPCION1 },
        ]}
      >
        CARACTERISTICAS GENERALES DEL DEPARTAMENTO
      </Text>
      <ScrollView centerContent={true}>
        <View style={{ marginHorizontal: 8 }}>
          <PopulationProjection />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CaracteristicasDepartamento;
