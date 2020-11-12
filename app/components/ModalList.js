import React, { useState } from "react";
import { ScrollView, View, StyleSheet, FlatList } from "react-native";
import {
  Dialog,
  Portal,
  Searchbar,
  Title,
  Button,
  List,
} from "react-native-paper";

import colors from "../styles/colors";
import { globalStyle } from "../styles/general";

const ModalList = ({
  visible,
  setVisible,
  title,
  list,
  searchQuery,
  setSearchQuery,
  setSelectItem,
}) => {
  //   const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);
  // const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  // const filtro = list.filter((nameCategory) => nameCategory.name == "General");

  const selectItem = (id, name) => {
    setSelectItem(id, name);
    hideDialog();
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.ScrollArea style={{ height: "90%" }}>
          <Title style={styles.title}>{title}</Title>
          {searchQuery == null ? null : (
            <Searchbar
              placeholder="Buscar..."
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={{ marginBottom: 16 }}
              inputStyle={styles.input}
            />
          )}
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: 4,
            }}
          >
            <FlatList
              data={list}
              keyExtractor={(list) => list.id.toString()}
              renderItem={({ item }) => (
                <List.Item
                  title={item.name}
                  titleNumberOfLines={5}
                  titleStyle={styles.listText}
                  style={styles.contentTitle}
                  onPress={() => selectItem(item.id, item.name)}
                />
              )}
            />
          </ScrollView>
          <View style={{ marginTop: 16, marginBottom: 32 }}>
            <Button
              mode="contained"
              onPress={hideDialog}
              style={globalStyle.buttonContent}
            >
              Cancelar
            </Button>
          </View>
        </Dialog.ScrollArea>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Montserrat-Bold",
    color: colors.TEXT,
    fontSize: 20,
    marginTop: 32,
    marginBottom: 16,
    lineHeight: 20,
  },
  input: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
  },
  contentTitle: {
    backgroundColor: "#F2F2F2",
    marginBottom: 8,
    borderRadius: 8,
  },
  listText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 15,
    lineHeight: 20,
  },
});

export default ModalList;
