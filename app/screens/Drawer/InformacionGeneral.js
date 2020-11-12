import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableHighlight,
  FlatList,
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

import { globalStyle } from "../../styles/general";
import colors from "../../styles/colors";
import { generalInformation } from "../../data/Data";

const InformacionGeneral = () => {
  const [valueRadioButton, setValueRadioButton] = useState("principios");

  const { principios, valores } = generalInformation;
  return (
    <View style={globalStyle.fondo}>
      <Card.Title
        onPress={() => setVisible(true)}
        title="Información general de la entidad"
        // subtitle="Ministro de Justicia y del Derecho2"
        titleStyle={styles.titleCard}
        // subtitleStyle={styles.subtitleCard}
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
              label="Principios"
              value="principios"
              color={colors.BUTTON_ACTIVO}
              style={styles.radioButton}
              labelStyle={styles.labelRadioButton}
            />

            <RadioButton.Item
              label="Valores"
              value="valores"
              color={colors.BUTTON_ACTIVO}
              style={styles.radioButton}
              labelStyle={styles.labelRadioButton}
            />
          </View>
        </RadioButton.Group>
      </View>
      <ScrollView centerContent={true} style={{ marginHorizontal: 16 }}>
        {valueRadioButton == "principios" ? (
          <View>
            <Text style={styles.text}>
              <Text style={styles.textTitle}>Transparencia: </Text>Hacer de
              conocimiento público la información y el actuar personal. Genera
              ambiente de confianza y seguridad.
            </Text>

            <Text style={styles.text}>
              <Text style={styles.textTitle}>Perseverancia: </Text>Es la actitud
              de ser constante en alcanzar un objetivo, en momentos que uno se
              propone llegar a un final definido.
            </Text>

            <Text style={styles.text}>
              <Text style={styles.textTitle}>Cooperación: </Text>Consiste en el
              trabajo armónico llevado a cabo por parte de un grupo para cumplir
              un objetivo compartido.
            </Text>

            <Text style={styles.text}>
              <Text style={styles.textTitle}>Efectividad: </Text>Medida del
              impacto la gestión.
            </Text>

            <Text style={styles.text}>
              <Text style={styles.textTitle}>Participación: </Text>Es el actuar
              cuando podemos ser fichas clave en un conjunto. Es aportar lo que
              podemos dar, cuando es necesario para llegar a un fin en conjunto.
            </Text>
          </View>
        ) : (
          <View>
            <Text style={styles.text}>
              <Text style={styles.textTitle}>Responsabilidad: </Text>
              Cumplimiento de los deberes en forma oportuna y efectiva para
              beneficio público, aceptando y asumiendo libremente las
              consecuencias de nuestros actos y omisiones.
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textTitle}>Respeto: </Text>
              Reconocimiento y valoración de la dignidad, los derechos y las
              creencias de los demás, como base de la convivencia.
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textTitle}>Vocación de Servicio: </Text>
              Dar para facilitar el cumplimiento de un proceso, resolver una
              necesidad, demanda o solicitud, o satisfacer una expectativa de
              alguien, de modo que tanto quien da como quien recibe puedan
              sentirse agradados.
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textTitle}>Solidaridad: </Text>
              Actuar desinteresadamente a favor de otra, mediante el apoyo
              incondicional, para el logro de los objetivos y el bienestar de
              todos y cada uno en particular.
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textTitle}>Tolerancia: </Text>
              Aceptación y comprensión de la diversidad étnica, cultural,
              social, religiosa y de opinión, reconociendo su individualidad y
              diferencias. Aceptar a los demás como son.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  titleCard: {
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
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
    justifyContent: "flex-start",
    marginBottom: 8,
  },
  radioButton: {
    backgroundColor: "#eee",
    paddingHorizontal: 12,
    borderRadius: 4,
    marginRight: 16,
  },
  labelRadioButton: {
    fontFamily: "Montserrat-Medium",
    color: colors.TEXT,
    fontSize: 14,
  },
  textTitle: {
    fontFamily: "Montserrat-Medium",
    color: colors.BUTTON_ACTIVO,
    fontSize: 14,
  },
  text: {
    fontFamily: "WorkSans-Regular",
    color: colors.TEXT,
    fontSize: 14,
    marginVertical: 8,
    lineHeight: 24,
  },
});

export default InformacionGeneral;
