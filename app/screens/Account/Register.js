import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { globalStyle } from "../../styles/general";

import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyle.center}>
      <Text>Registro de usuario!</Text>
      <Text style={{ marginBottom: 20 }}>Vista preliminar</Text>

      <Button
        color="#3366CC"
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate("login")}
      >
        Aceptar
      </Button>
    </View>
  );
};

export default Register;
