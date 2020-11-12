import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import {
  Card,
  Avatar,
  Dialog,
  Portal,
  Searchbar,
  Title,
  Text,
  Caption,
  Paragraph,
  Button,
  Divider,
} from "react-native-paper";

import DrawerList from "./DrawerList";
import colors from "../styles/colors";
import { globalStyle } from "../styles/general";

const ModalWiki = ({ visible, setVisible, selectedQuestion }) => {
  //   const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);
  const { question, answer, category } = selectedQuestion;

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.ScrollArea style={{ height: "90%" }}>
          <Text style={styles.question}>{question}</Text>
          <Divider />

          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: 8,
            }}
          >
            <Text style={styles.answer}>{answer}</Text>
          </ScrollView>
          <View style={{ marginTop: 16, marginBottom: 32 }}>
            <Button
              mode="contained"
              onPress={hideDialog}
              style={globalStyle.buttonContent}
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
  question: {
    fontFamily: "Montserrat-Bold",
    color: colors.TEXT,
    fontSize: 16,
    marginTop: 32,
    marginBottom: 16,
    lineHeight: 20,
  },
  answer: {
    fontFamily: "WorkSans-Regular",
    color: colors.TEXT,
    fontSize: 15,
    marginVertical: 16,
    lineHeight: 24,
    // textAlign: "justify",
  },
});

export default ModalWiki;
