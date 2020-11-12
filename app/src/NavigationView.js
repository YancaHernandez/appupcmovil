import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-paper";

import colors from "../styles/colors";

const NavigationView = ({
  onBackPress,
  onForwardPress,
  canGoBack,
  canGoForward,
}) => {
  return (
    <View>
      <View
        style={[styles.container, !canGoBack && !canGoForward && styles.$hide]}
      >
        {canGoBack && (
          <TouchableOpacity style={styles.button} onPress={onBackPress}>
            <Button style={[styles.buttonTitle, { marginHorizontal: -8 }]}>
              <AntDesign name="arrowleft" size={24} color="#FFF" />
            </Button>
          </TouchableOpacity>
        )}
        {canGoForward && (
          <TouchableOpacity style={styles.button} onPress={onForwardPress}>
            <Button style={[styles.buttonTitle, { marginHorizontal: -8 }]}>
              <AntDesign name="arrowright" size={24} color="#FFF" />
            </Button>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  $hide: { display: "none" },
  container: {
    height: 40,
    backgroundColor: colors.BUTTON_ACTIVO,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: { width: "100%" },
  buttonTitle: {
    color: "#fff",
    fontSize: 16,
    width: "100%",
  },
});

export default NavigationView;
