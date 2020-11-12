import React, { useState, useEffect } from "react";
import { View } from "react-native";
import * as Font from "expo-font";

const loadFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  }, []);

  // Cargue de las fuentes
  const loadFonts = async () => {
    await Font.loadAsync({
      "Montserrat-Bold": require("./fonts/Montserrat-Bold.ttf"),
      "Montserrat-Medium": require("./fonts/Montserrat-Medium.ttf"),
      "Montserrat-Regular": require("./fonts/Montserrat-Regular.ttf"),
      "Montserrat-SemiBold": require("./fonts/Montserrat-SemiBold.ttf"),
      "WorkSans-Bold": require("./fonts/WorkSans-Bold.ttf"),
      "WorkSans-Medium": require("./fonts/WorkSans-Medium.ttf"),
      "WorkSans-Regular": require("./fonts/WorkSans-Regular.ttf"),
      "WorkSans-SemiBold": require("./fonts/WorkSans-SemiBold.ttf"),
    });
    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return <View />;
  }
};

export default loadFonts;
