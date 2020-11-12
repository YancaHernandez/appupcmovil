import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";

import PQRDS from "../screens/PQRDS";
import LogoBar from "../components/LogoBar";

const Stack = createStackNavigator();

const PQRDSStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="pqrds"
        component={PQRDS}
        options={() => ({
          headerTitle: () => <LogoBar />,
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

export default PQRDSStack;
