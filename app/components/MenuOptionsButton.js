import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";

import { globalStyle } from "../styles/general";

const MenuOptionsButton = ({
  title,
  color,
  navigation,
  report,
  department,
  municipality,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      underlayColor={color}
      style={[globalStyle.opcionMenu, { backgroundColor: color }]}
      // onPress={() => console.log("Hola mundo")}
      onPress={() =>
        navigation.navigate(report, {
          department,
          municipality,
        })
      }
    >
      {/* <View style={styles.containerButton}>
        <Image
          source={require("../../assets/img/caracteristicasGeneralesDepartamento.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={globalStyle.labelOpcionMenu}>{title}</Text>
      </View> */}
      <Text style={globalStyle.labelOpcionMenu}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 54,
    height: 59,
    // backgroundColor: "#000",
  },
  // containerButton: {
  //   flex: 1,
  //   flexDirection: "row",
  //   justifyContent: "space-evenly",
  //   alignItems: "center",
  //   paddingHorizontal: 16,
  //   marginVertical: 16,
  // },
});

export default MenuOptionsButton;
