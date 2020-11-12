import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Dialog, Portal } from "react-native-paper";
import colors from "../styles/colors";

const Loading = (props) => {
  const { visible, text } = props;

  return (
    <Portal>
      <Dialog visible={visible} style={styles.overlay}>
        <Dialog.Content style={styles.view}>
          <ActivityIndicator size="large" color={colors.PRIMARY} />
          {text && <Text style={styles.text}>{text}</Text>}
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    height: 100,
    backgroundColor: colors.WHITE,
    borderColor: colors.WHITE,
    borderWidth: 2,
    borderRadius: 8,
    marginHorizontal: 100,
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewGeneral: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  text: {
    color: colors.TEXT,
    textTransform: "uppercase",
    marginTop: 10,
  },
});

export default Loading;
