import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

import { globalStyle } from "../../styles/general";
import authContext from "../../context/auth/authContext";

const UserLogged = () => {
  const { logout } = useContext(authContext);

  return (
    <View style={globalStyle.center}>
      <Button
        mode="contained"
        // color={colors.BUTTON_ACTIVO}
        onPress={() => logout()}
        style={globalStyle.buttonContent}
        labelStyle={globalStyle.labelButtonContent}
      >
        Cerrar sesión
      </Button>
    </View>
  );
};

export default UserLogged;
