import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Card } from "react-native-paper";

import colors from "../styles/colors";

const DepartmentMunicipalityBar = ({ navigation, route }) => {
  const { department, municipality } = route.params;

  return (
    <View
      style={{
        // flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 24,
      }}
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
            size={32}
            color={colors.WHITE}
            style={{
              backgroundColor: colors.BUTTON_ACTIVO,
              marginLeft: 0,
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleCard: {
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
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
    // marginBottom: 80,
  },
});

export default DepartmentMunicipalityBar;
