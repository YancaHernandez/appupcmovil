import React, { useState, useEffect, useContext } from "react";
import * as Font from "expo-font";
import { View } from "react-native";

import AuthState from "../context/auth/authState";
import TableState from "../context/tables/tableState";
import { Provider as PaperProvider } from "react-native-paper";

import { theme } from "../styles/defaultTheme";
import Routes from "./Routes";

const Providers = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  }, []);

  // Cargue de las fuentes
  const loadFonts = async () => {
    await Font.loadAsync({
      "Montserrat-Bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-Medium": require("../../assets/fonts/Montserrat-Medium.ttf"),
      "Montserrat-Regular": require("../../assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-SemiBold": require("../../assets/fonts/Montserrat-SemiBold.ttf"),
      "WorkSans-Bold": require("../../assets/fonts/WorkSans-Bold.ttf"),
      "WorkSans-Medium": require("../../assets/fonts/WorkSans-Medium.ttf"),
      "WorkSans-Regular": require("../../assets/fonts/WorkSans-Regular.ttf"),
      "WorkSans-SemiBold": require("../../assets/fonts/WorkSans-SemiBold.ttf"),
    });
    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <TableState>
      <AuthState>
        <PaperProvider theme={theme}>
          <Routes />
        </PaperProvider>
      </AuthState>
    </TableState>
  );
};

export default Providers;
