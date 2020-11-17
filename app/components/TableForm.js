import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { TextInput, Button } from "react-native-paper";
import { globalStyle } from "../styles/general";
import colors from "../styles/colors";
import { table as dataTable } from "../data/Data";
import tableContext from "../context/tables/tableContext";

const TableForm = ({
  navigation,
  setVisibleForm,
  update,
  setUpdate,
  selectedTable,
  updateList
}) => {
  //   const [name, setName] = useState("");
  //   const [capacity, setCapacity] = useState("");
  const { tables, TABLECREATE, TABLEUPDATE } = useContext(tableContext);

  const [table, setTable] = useState({ name: "", capacity: 0 });

  useEffect(() => {
    const viewInfo = () => {
      setTable(selectedTable);
    };
    viewInfo();

    console.log("table");
    console.log(table);
  }, [selectedTable]);

  const submit = async () => {
    if (!update) {
      if (table.name.trim() == "" && table.capacity.trim() == "") {
        console.log("Todos los campos son obligatorios");
      } else {
        await TABLECREATE(table);
        // updateList();
        console.log("Mesa registrada correctamente");
      }
    }else{
        if (table.name.trim() == "" && table.capacity.trim() == "") {
          console.log("Todos los campos son obligatorios");
        } else {
          await TABLEUPDATE({data: table, id: table._id})
          // updateList();
          console.log("Mesa editada correctamente");
        }
    }
    // setVisibleForm(false);
  };

  return (
    <View
      style={{
        backgroundColor: "#fff8df",
        paddingHorizontal: 16,
        marginBottom: 16,
        borderRadius: 8,
      }}
    >
      <Text style={[globalStyle.title, { marginVertical: 8 }]}>
        {!update ? "Nueva mesa" : "Modificar mesa"}
      </Text>

      <TextInput
        label="Nombre"
        placeholder="Nombre"
        mode="outlined"
        dense={true}
        selectionColor={colors.SELECTION_COLOR}
        value={table.name}
        onChangeText={(text) => setTable({ ...table, name: text })}
      />

      <TextInput
        label="Capacidad"
        mode="outlined"
        dense={true}
        style={[styles.inpuForm, { marginBottom: 16 }]}
        keyboardType="numeric"
        value={table.capacity.toString()}
        onChangeText={(text) => setTable({ ...table, capacity: text })}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button
          mode="outlined"
          color={colors.BUTTON_ACTIVO}
          onPress={() => {
            setVisibleForm(false);
            setUpdate(false);
          }}
          style={[globalStyle.buttonOutlined, { marginBottom: 16 }]}
          labelStyle={globalStyle.labelButtonOutlined}
        >
          Cancelar
        </Button>

        <Button
          mode="contained"
          color={colors.BUTTON_ACTIVO}
          onPress={() => submit()}
          style={[globalStyle.buttonContent, { marginBottom: 16 }]}
          labelStyle={globalStyle.labelButtonContent}
        >
          {!update ? "Registrar" : "Actualizar"}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleCardTable: {
    fontFamily: "Montserrat-Medium",
  },
  inpuForm: {
    marginTop: 10,
  },
});

export default TableForm;
