import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Image, Text } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { globalStyle } from "../../styles/general";
import LoginForm from "../../components/LoginForm";

const Login = ({ navigation }) => {
  return (
    <ScrollView centerContent={true} style={globalStyle.fondo}>
      <View style={{ marginHorizontal: 40 }}>
        <View style={globalStyle.center}>
          <Image
            source={require("../../../assets/img/logoInicioSesion.png")}
            resizeMode="contain"
            style={styles.logo}
          />

          <Text style={[globalStyle.title, styles.title]}>INICIAR SESIÓN</Text>
        </View>

        <View style={{ marginBottom: 24 }}>
          <LoginForm navigation={navigation} />
        </View>
        {/* <CreateAccount navigation={navigation} /> */}
      </View>
    </ScrollView>
  );
};

function CreateAccount({ navigation }) {
  // const navigation = useNavigation();
  const [buttonDisabled, setbuttonDisabled] = useState(false);

  return (
    <View style={[globalStyle.center, { marginBottom: 16 }]}>
      <Button
        mode="outlined"
        disabled={buttonDisabled}
        style={[globalStyle.buttonOutlined, { width: "100%" }]}
        labelStyle={
          !buttonDisabled
            ? globalStyle.labelButtonOutlined
            : globalStyle.labelButtonOutlinedDisabled
        }
        onPress={() => navigation.navigate("home")}
      >
        Usuario invitado
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: "45%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
  },
});

export default Login;
