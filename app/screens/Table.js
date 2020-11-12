import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

import {
  TextInput,
  Button,
  Avatar,
  IconButton,
  Card,
  Divider,
} from "react-native-paper";

import { globalStyle } from "../styles/general";
import colors from "../styles/colors";
import TableForm from "../components/TableForm";
import { tables } from "../data/Data";

const Table = ({ navigation }) => {
  const [visibleForm, setVisibleForm] = useState(false);
  const [update, setUpdate] = useState(false);

  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [selectedTable, setSelectedTable] = useState({});

  const modify = (item) => {
    setVisibleForm(true);
    setUpdate(true);
    console.log(item.name);
    setSelectedTable(item);
  };

  return (
    <View style={{ flex: 1 }}>
      <Card.Title
        title="Mesas"
        titleNumberOfLines={2}
        titleStyle={styles.titleCard}
        subtitleStyle={styles.subtitleCard}
        style={{ backgroundColor: "#fff" }}
        left={(props) => (
          <IconButton
            {...props}
            icon="plus"
            onPress={() => {
              setVisibleForm(true);
              setUpdate(false);
              setSelectedTable({ name: "", capacity: "" });
            }}
            color={colors.WHITE}
            size={26}
            style={{ backgroundColor: colors.BUTTON_ACTIVO }}
          />
        )}
      />
      <Divider style={{ marginBottom: 8 }} />

      {visibleForm ? (
        <View style={{ marginHorizontal: 16 }}>
          <TableForm
            setVisibleForm={setVisibleForm}
            update={update}
            setUpdate={setUpdate}
            selectedTable={selectedTable}
          />
        </View>
      ) : null}

      <ScrollView centerContent={true}>
        <View style={{ marginHorizontal: 16 }}>
          {tables.length == 0 ? (
            <Text style={[globalStyle.title, styles.title]}>
              No hay mesas registradas
            </Text>
          ) : (
            <FlatList
              data={tables}
              keyExtractor={(tables) => tables.id.toString()}
              renderItem={({ item }) => (
                <Card.Title
                  title={item.name}
                  subtitle={`Capacidad para ${item.capacity}`}
                  titleStyle={styles.titleCardTable}
                  subtitleStyle={styles.subtitleCard}
                  style={styles.containerCardTable}
                  right={(props) => {
                    return (
                      <View style={{ flexDirection: "row" }}>
                        <IconButton
                          {...props}
                          icon="pencil-outline"
                          onPress={() => modify(item)}
                        />
                        <IconButton
                          {...props}
                          icon="trash-can-outline"
                          onPress={() => console.log("Eliminar")}
                        />
                      </View>
                    );
                  }}
                />
              )}
            />
          )}
        </View>
      </ScrollView>
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
    textAlign: "center",
    marginTop: 16,
    marginBottom: 16,
  },
  titleCardTable: {
    fontFamily: "Montserrat-Medium",
  },
  containerCardTable: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 8,
  },
  inpuForm: {
    marginTop: 10,
  },
});

export default Table;
