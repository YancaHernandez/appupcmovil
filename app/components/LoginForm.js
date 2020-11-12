import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Paragraph, Dialog, Portal, Text } from "react-native-paper";

import { globalStyle } from "../styles/general";
import colors from "../styles/colors";
import Loading from "../components/Loading";
import authContext from "../context/auth/authContext";

const LoginForm = ({ navigation }) => {
  const { login } = useContext(authContext);

  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const hideDialog = () => setVisible(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    setLoading(true);
    const res = await login({ email, password });

    if (res.status) {
      setLoading(true);
      navigation.navigate("home");
    } else {
      setLoading(false);
      setVisible(true);
    }
  };

  // {
  //   loading && return (<Loading visible={true} />);
  // }

  if (loading) return <Loading visible={true} text="Cargando..." />;

  return (
    <View>
      <TextInput
        label="Correo electrónico"
        placeholder="Correo electrónico"
        mode="outlined"
        selectionColor={colors.SELECTION_COLOR}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="Contraseña"
        mode="outlined"
        style={[styles.inpuForm, { marginBottom: 40 }]}
        passWord={true}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button
        mode="contained"
        color={colors.BUTTON_ACTIVO}
        onPress={() => submit()}
        style={globalStyle.buttonContent}
        labelStyle={globalStyle.labelButtonContent}
      >
        Ingresar
      </Button>

      <Text style={[globalStyle.buttonText, { marginTop: 8 }]}>
        ¿Has olvidado la contraseña?
      </Text>

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Content>
            <Paragraph style={{ textAlign: "center" }}>
              Credenciales incorrectas
            </Paragraph>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  inpuForm: {
    // width: "90%",
    marginTop: 20,
  },
});

export default LoginForm;
