import React from "react";
import { Button } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import Table from "../screens/Table";
import LogoBar from "../components/LogoBar";

const Stack = createStackNavigator();

const TableStack = ({ navigation }) => {
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerTitleAlign: "center",
    // }}
    >
      <Stack.Screen
        name="table"
        component={Table}
        options={() => ({
          headerTitle: () => <LogoBar />,
          // title: "Inicio de sesión",
          headerLeft: () => (
            <Button
              onPress={() => navigation.openDrawer()}
              style={{ marginHorizontal: -8 }}
            >
              <FontAwesome5 name="bars" size={24} color="#666" />
            </Button>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default TableStack;
