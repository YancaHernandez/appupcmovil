import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Button } from "react-native-paper";

import { globalStyle } from "../../styles/general";

import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const UserGuest = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAwareScrollView centerContent={true} style={globalStyle.fondo}>
      <View style={globalStyle.marginHorizontal32}>
        <Image
          source={require("../../../assets/illustrations/welcome.png")}
          style={styles.image}
        />
        <Text style={[globalStyle.title, styles.title]}>
          TALLER CONSTRUYENDO PAÍS
        </Text>
        <Text style={[globalStyle.text, styles.text]}>
          Tiene como objetivo promover el diálogo social y la interacción
          permanente con las regiones, para generar participación e inclusión
          ciudadana en la ejecución de las políticas públicas.
        </Text>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("login")}
          style={globalStyle.buttonContent}
          labelStyle={globalStyle.buttonContent}
        >
          Iniciar sesión
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 216,
    width: "100%",
    marginTop: 24,
    marginBottom: 40,
    resizeMode: "contain",
  },
  title: {
    marginBottom: 16,
    textAlign: "center",
    marginBottom: 56,
  },
  text: {
    textAlign: "center",
    marginBottom: 80,
    lineHeight: 32,
    // fontSize: 20,
  },
});

export default UserGuest;
