import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ContentView from "../src/ContentView";

const PQRDS = () => {
  return (
    <View style={styles.container}>
      <ContentView uri="http://vuv.minjusticia.gov.co/Publico/FindIndexWeb" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default PQRDS;
