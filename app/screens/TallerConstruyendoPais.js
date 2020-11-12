import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from "react-native";

import { Button, Avatar, IconButton, Card, Divider } from "react-native-paper";
import { globalStyle } from "../styles/general";
import colors from "../styles/colors";
import MenuOptionsButton from "../components/MenuOptionsButton";
import ModalDepartmentCity from "../components/ModalDepartmentCity";
import { departments } from "../data/Data";
import { municipalities } from "../data/Data";

const TallerConstruyendoPais = ({ navigation }) => {
  const [visibleModalDepartmentCity, setVisibleModalDepartmentCity] = useState(
    false
  );

  // const [department, setDepartment] = useState("Antioquia");
  // const [municipality, setMunicipality] = useState("Medellín");
  const [department, setDepartment] = useState("");
  const [municipality, setMunicipality] = useState("");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    storeData();
  }, [department, municipality]);

  const getData = async () => {
    try {
      const valueDepartment = await AsyncStorage.getItem("department");
      const valueMunicipality = await AsyncStorage.getItem("municipality");

      if (valueDepartment && valueMunicipality) {
        setDepartment(valueDepartment);
        setMunicipality(valueMunicipality);
      } else {
        setDepartment("Antioquia");
        setMunicipality("Medellín");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("department", department);
      await AsyncStorage.setItem("municipality", municipality);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={globalStyle.fondo}>
      <TouchableHighlight
        onPress={() => setVisibleModalDepartmentCity(true)}
        activeOpacity={1}
        underlayColor="#FFF"
      >
        <Card.Title
          title={department}
          subtitle={municipality}
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
          right={(props) => <IconButton {...props} icon="magnify" />}
        />
      </TouchableHighlight>
      <Divider />
      <ScrollView centerContent={true}>
        <View style={{ marginHorizontal: 16 }}>
          <Text style={[globalStyle.title, styles.title]}>
            FICHA DEPARTAMENTAL Y MUNICIPAL
          </Text>

          <MenuOptionsButton
            title={"CARACTERISTICAS GENERALES DEL DEPARTAMENTO"}
            color={colors.OPCION1}
            navigation={navigation}
            report="caracteristicasDepartamento"
            department={department}
            municipality={municipality}
          />

          <MenuOptionsButton
            title={"OFERTA DE JUSTICIA"}
            color={colors.OPCION2}
            navigation={navigation}
            report="caracteristicasDepartamento"
            department={department}
            municipality={municipality}
          />

          <MenuOptionsButton
            title={"NECESIDADES DE JUSTICIA"}
            color={colors.OPCION3}
            navigation={navigation}
            report="caracteristicasDepartamento"
            department={department}
            municipality={municipality}
          />

          <MenuOptionsButton
            title={"SUPERNOTARIADO Y REGISTRO"}
            color={colors.OPCION4}
            navigation={navigation}
            report="caracteristicasDepartamento"
            department={department}
            municipality={municipality}
          />

          <MenuOptionsButton
            title={"INPEC"}
            color={colors.OPCION5}
            navigation={navigation}
            report="caracteristicasDepartamento"
            department={department}
            municipality={municipality}
          />

          <MenuOptionsButton
            title={"USPEC"}
            color={colors.OPCION6}
            navigation={navigation}
            report="caracteristicasDepartamento"
            department={department}
            municipality={municipality}
          />

          <MenuOptionsButton
            title={"CARACTERISTICAS GENERALES DEL MUNICIPIO"}
            color={colors.OPCION7}
            navigation={navigation}
            report="caracteristicasDepartamento"
            department={department}
            municipality={municipality}
          />

          <MenuOptionsButton
            title={"OFERTA DE JUSTICA MUNICIPAL"}
            color={colors.OPCION8}
            navigation={navigation}
            report="caracteristicasDepartamento"
            department={department}
            municipality={municipality}
          />

          <MenuOptionsButton
            title={"NECESIDADES DE JUSTICIA MUNICIPAL"}
            color={colors.OPCION9}
            navigation={navigation}
            report="caracteristicasDepartamento"
            department={department}
            municipality={municipality}
          />

          <Text style={[globalStyle.title, styles.title]}>
            PROGRAMAS DE OFERTA
          </Text>

          <MenuOptionsButton
            title={"PROGRAMA DE OFERTA JUSTICA"}
            color={colors.OPCION10}
            navigation={navigation}
            report="caracteristicasDepartamento"
            department={department}
            municipality={municipality}
          />

          <Text style={[globalStyle.title, styles.title]}>PODER POLÍTICO</Text>

          <MenuOptionsButton
            title={"PODER POLÍTICO DEL DEPARTAMENTO"}
            color={colors.OPCION11}
            navigation={navigation}
            report="caracteristicasDepartamento"
            department={department}
            municipality={municipality}
          />
        </View>
      </ScrollView>
      <ModalDepartmentCity
        visible={visibleModalDepartmentCity}
        setVisible={setVisibleModalDepartmentCity}
        departments={departments}
        municipalities={municipalities}
        setDepartment={setDepartment}
        setMunicipality={setMunicipality}
      />
    </View>
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
  title: {
    marginTop: 16,
    marginBottom: 16,
  },
  text: {
    textAlign: "center",
  },
});

export default TallerConstruyendoPais;
