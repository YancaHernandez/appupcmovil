import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import {
  ScrollView,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  Dialog,
  Portal,
  Text,
  Button,
  Avatar,
  Card,
  RadioButton,
  Divider,
} from "react-native-paper";

import { globalStyle } from "../styles/general";
import colors from "../styles/colors";
import SnackbarMessage from "./ui/SnackbarMessage";

const ModalDepartmentCity = ({
  visible,
  setVisible,
  departments,
  municipalities,
  setDepartment,
  setMunicipality,
}) => {
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  const [menssageSnackbar, setMenssageSnackbar] = useState("");

  const hideDialog = () => setVisible(false);
  const onChangeSearch = (query) => setSearchQuery(query);

  const [buttonEnabled, setButtonEnabled] = useState("Departamento");
  const [valueDepartment, setValueDepartment] = useState({
    id: 0,
    name: "Antioquia",
  });
  const [valueMunicipality, setValueMunicipality] = useState("Medellin");
  const [listMunicipalities, setListMunicipalities] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const valueDepartment = await AsyncStorage.getItem("department");
      const valueMunicipality = await AsyncStorage.getItem("municipality");

      if (valueDepartment && valueMunicipality) {
        setValueDepartment({ id: 0, name: valueDepartment });
        setValueMunicipality(valueMunicipality);
      } else {
        setValueDepartment({ id: 0, name: "Antioquia" });
        setValueMunicipality("Medellín");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const selectedDepartment = (item) => {
    setValueDepartment(item);

    setListMunicipalities(
      municipalities.filter(
        (municipality) => municipality.idDepartment == item.id
      )
    );
    setValueMunicipality("");
    setButtonEnabled("Municipio");
  };

  const submit = () => {
    if (valueMunicipality == "") {
      setVisibleSnackbar(true);
      setMenssageSnackbar("Seleccione el municipio");
    } else {
      setDepartment(valueDepartment.name);
      setMunicipality(valueMunicipality);
      hideDialog();
    }
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Card.Title
          title={valueDepartment.name}
          subtitle={valueMunicipality}
          titleNumberOfLines={2}
          titleStyle={styles.titleCard}
          subtitleStyle={styles.subtitleCard}
          left={(props) => (
            <Avatar.Icon
              {...props}
              icon="map-marker-outline"
              color={colors.WHITE}
              style={{ backgroundColor: colors.BUTTON_ACTIVO }}
            />
          )}
        />
        <Dialog.ScrollArea style={{ height: "85%" }}>
          <View style={styles.containerToggle}>
            {/* Botón Departamento */}
            <TouchableOpacity
              onPress={() => setButtonEnabled("Departamento")}
              style={[
                styles.departmentButton,
                buttonEnabled == "Departamento"
                  ? styles.buttonEnabled
                  : styles.buttonDisabled,
              ]}
            >
              <Text
                style={
                  buttonEnabled == "Departamento"
                    ? styles.enabledLabelDepartmentMunicipality
                    : styles.disabledLabelDepartmentMunicipality
                }
              >
                Departamento
              </Text>
            </TouchableOpacity>

            {/* Botón Municipio*/}
            <TouchableOpacity
              onPress={() => setButtonEnabled("Municipio")}
              style={[
                styles.municipalityButton,
                buttonEnabled == "Municipio"
                  ? styles.buttonEnabled
                  : styles.buttonDisabled,
              ]}
            >
              <Text
                style={
                  buttonEnabled == "Municipio"
                    ? styles.enabledLabelDepartmentMunicipality
                    : styles.disabledLabelDepartmentMunicipality
                }
              >
                Municipio
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: 4,
            }}
          >
            {buttonEnabled == "Departamento" ? (
              <RadioButton.Group
                onValueChange={(value) => selectedDepartment(value)}
                value={valueDepartment}
              >
                <FlatList
                  data={departments}
                  keyExtractor={(departments) => departments.id.toString()}
                  renderItem={({ item }) => (
                    <RadioButton.Item
                      label={item.name}
                      value={item}
                      style={{ width: 300 }}
                      labelStyle={styles.labelRadioButton}
                      color={colors.BUTTON_ACTIVO}
                    />
                  )}
                  on
                />
              </RadioButton.Group>
            ) : (
              <RadioButton.Group
                onValueChange={(value) => setValueMunicipality(value)}
                value={valueMunicipality}
              >
                <FlatList
                  data={listMunicipalities}
                  keyExtractor={(listMunicipalities) =>
                    listMunicipalities.id.toString()
                  }
                  renderItem={({ item }) => (
                    <View>
                      <RadioButton.Item
                        label={item.name}
                        value={item.name}
                        style={{ width: 300 }}
                        labelStyle={styles.labelRadioButton}
                        color={colors.BUTTON_ACTIVO}
                      />
                    </View>
                  )}
                />
              </RadioButton.Group>
            )}
          </ScrollView>
          <Divider />

          <SnackbarMessage
            visibleSnackbar={visibleSnackbar}
            setVisibleSnackbar={setVisibleSnackbar}
            message={menssageSnackbar}
          />

          <View style={styles.contentButton}>
            <Button
              mode="outlined"
              onPress={hideDialog}
              style={globalStyle.buttonOutlined}
              labelStyle={globalStyle.labelButtonOutlined}
            >
              Cancelar
            </Button>
            <Button
              mode="contained"
              onPress={() => submit()}
              style={globalStyle.buttonContent}
              labelStyle={globalStyle.labelButtonContent}
            >
              Aceptar
            </Button>
          </View>
        </Dialog.ScrollArea>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  titleCard: {
    fontFamily: "Montserrat-Bold",
  },
  subtitleCard: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
  },
  containerToggle: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 16,
  },
  departmentButton: {
    width: "50%",
    paddingVertical: 8,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    borderRightWidth: 1,
    borderWidth: 1,
    borderColor: "#DFDFDF",
    alignItems: "center",
  },
  municipalityButton: {
    width: "50%",
    paddingVertical: 8,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#DFDFDF",
    alignItems: "center",
  },
  buttonEnabled: {
    backgroundColor: "#EBEBEB",
  },
  buttonDisabled: {
    backgroundColor: "#FFF",
  },

  enabledLabelDepartmentMunicipality: {
    fontFamily: "WorkSans-Medium",
    color: colors.BUTTON_ACTIVO,
    fontSize: 15,
  },
  disabledLabelDepartmentMunicipality: {
    fontFamily: "WorkSans-Regular",
    color: colors.TEXT,
    fontSize: 15,
  },
  labelRadioButton: {
    fontFamily: "WorkSans-Regular",
    fontSize: 16,
    color: colors.TEXT,
  },
  contentButton: {
    marginTop: 16,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ModalDepartmentCity;
