import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Snackbar } from "react-native-paper";

import colors from "../../styles/colors";

const SnackbarMessage = ({ visibleSnackbar, setVisibleSnackbar, message }) => {
  //   const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  //   const onToggleSnackBar = () => setVisibleSnackbar(!visibleSnackbar);
  const onDismissSnackBar = () => setVisibleSnackbar(false);

  return (
    <View style={styles.containerSnackbar}>
      {/* <Button onPress={onToggleSnackBar}>
      {visibleSnackbar ? "Hide" : "Show"}
    </Button> */}
      <Snackbar
        visible={visibleSnackbar}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Ok",
          onPress: () => {
            // Do something
          },
        }}
      >
        {message}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  containerSnackbar: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default SnackbarMessage;
