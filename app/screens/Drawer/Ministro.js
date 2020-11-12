import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableHighlight,
  FlatList,
  Linking,
} from "react-native";
import {
  Avatar,
  IconButton,
  Card,
  Divider,
  List,
  RadioButton,
  Text,
} from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

import { globalStyle } from "../../styles/general";
import colors from "../../styles/colors";
import { infoMinistro } from "../../data/Data";
import { reportStyle } from "../../styles/general";

const Ministro = () => {
  const [valueRadioButton, setValueRadioButton] = useState("perfil");

  const { name, perfil, objetivoContactoFunciones } = infoMinistro;
  return (
    <View style={globalStyle.fondo}>
      <Card.Title
        onPress={() => setVisible(true)}
        title="Wilson Ruiz Orejuela"
        subtitle="Ministro de Justicia y del Derecho"
        titleStyle={styles.titleCard}
        subtitleStyle={styles.subtitleCard}
        style={{ marginVertical: 8 }}
        titleNumberOfLines={2}
        left={(props) => (
          <Avatar.Icon
            {...props}
            icon="account"
            color="#FFF"
            style={{ backgroundColor: colors.BUTTON_ACTIVO }}
          />
        )}
      />
      <Divider style={{ marginBottom: 8 }} />

      <View style={{ marginHorizontal: 16 }}>
        <RadioButton.Group
          onValueChange={(value) => setValueRadioButton(value)}
          value={valueRadioButton}
        >
          <View style={styles.contentRadioButton}>
            <RadioButton.Item
              label="Perfil"
              value="perfil"
              color={colors.BUTTON_ACTIVO}
              style={styles.radioButton}
              labelStyle={styles.labelRadioButton}
            />

            <RadioButton.Item
              label="Objetivo, Contacto, Funciones"
              value="objetivoContactoFunciones"
              color={colors.BUTTON_ACTIVO}
              style={styles.radioButton}
              labelStyle={styles.labelRadioButton}
            />
          </View>
        </RadioButton.Group>
      </View>
      <ScrollView
        centerContent={true}
        style={{ marginHorizontal: 16, marginBottom: 32 }}
      >
        {valueRadioButton == "perfil" ? (
          <View>
            <Text style={styles.text}>
              Ruíz es abogado especialista en Derecho Administrativo y cuenta
              con una amplia experiencia en el sector público, incluso en agosto
              fue ternado por la Corte Suprema de Justicia para el cargo de
              procurador.
            </Text>
            <Text style={styles.text}>
              El nuevo ministro de Justicia se graduó de la Universidad Libre,
              realizó estudios en Derecho Administrativo en la Universidad de
              San Buenaventura, la Universidad Pontificia Bolivariana y la
              Universidad de Salamanca. Además, tiene un doctorado en Derecho y
              le fue otorgada la mención summa cum laude de la Universidad
              Alfonso X el Sabio en España.
            </Text>
            <Text style={styles.text}>
              En lo que respecta al sector público, ha sido conjuez de la
              república, magistrado de la Sala Disciplinaria del Consejo
              Superior de la Judicatura entre 2012 y 2015, año en el que llegó a
              la presidencia de esta misma sala. Ruíz ha sido también procurador
              delegado ante el Consejo de Estado y en las cámaras de Comercio de
              Bogotá, Cali y Barranquilla se ha enfocado en el ejercicio del
              Derecho Administrativo.
            </Text>
            <Text style={styles.text}>
              Por otra parte, el nuevo ministro de justicia se ha desempeñado
              como docente en universidades del país y del exterior. En el
              ámbito académico también ha sido autor de obras jurídicas
              relacionadas con Derechos Humanos, responsabilidad del Estado,
              salud y medio ambiente.
            </Text>
            <Text
              style={reportStyle.textFuente}
              onPress={() =>
                Linking.openURL(
                  "https://360radio.com.co/quien-es-wilson-ruiz-el-nuevo-ministro-de-justicia/"
                )
              }
            >
              Por: Redacción 360 Radio
            </Text>
          </View>
        ) : (
          <View>
            <Text style={styles.textTitle}>Objetivo</Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <FontAwesome
                name="circle"
                size={8}
                color={colors.BUTTON_ACTIVO}
                style={styles.bulletPoint}
              />
              <Text style={styles.text2}>
                Hacer presencia permanente en el Congreso de la República, con
                el fin de acompañar el trámite y el desarrollo legislativo de
                los proyectos de Ley de competencia del Ministerio
              </Text>
            </View>

            <Text style={styles.textTitle}>Contacto</Text>

            <View
              style={{
                flexDirection: "row",
              }}
            >
              <FontAwesome
                name="circle"
                size={8}
                color={colors.BUTTON_ACTIVO}
                style={styles.bulletPoint}
              />
              <Text style={styles.text2}>Teléfono: 443100 ext. 1963</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
              }}
            >
              <FontAwesome
                name="circle"
                size={8}
                color={colors.BUTTON_ACTIVO}
                style={styles.bulletPoint}
              />
              <Text style={styles.text2}>Correo electrónico:</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  titleCard: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
  },
  subtitleCard: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
  },
  contentTitle: {
    backgroundColor: "#F2F2F2",
    marginBottom: 8,
    borderRadius: 8,
  },
  contentRadioButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  radioButton: {
    backgroundColor: "#eee",
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  labelRadioButton: {
    fontFamily: "Montserrat-Medium",
    color: colors.TEXT,
    fontSize: 14,
  },
  textTitle: {
    fontFamily: "Montserrat-Medium",
    color: colors.BUTTON_ACTIVO,
    marginVertical: 8,
    fontSize: 14,
    lineHeight: 24,
  },
  text: {
    fontFamily: "WorkSans-Regular",
    color: colors.TEXT,
    marginVertical: 8,
    fontSize: 14,
    lineHeight: 24,
  },
  text2: {
    fontFamily: "WorkSans-Regular",
    color: colors.TEXT,
    paddingHorizontal: 8,
    fontSize: 14,
    lineHeight: 24,
  },
  bulletPoint: {
    marginTop: 9,
  },
});

export default Ministro;
