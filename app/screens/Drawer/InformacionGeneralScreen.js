import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

import InformacionGeneral from "./InformacionGeneral";
import LogoBar from "../../components/LogoBar";

const Stack = createStackNavigator();

const InformacionGeneralScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="informacionGeneral"
        component={InformacionGeneral}
        options={({ navigation, route }) => ({
          headerTitle: () => <LogoBar />,
          headerLeft: () => (
            <Button
              onPress={() => navigation.goBack()}
              style={{ marginHorizontal: -8 }}
            >
              <AntDesign name="arrowleft" size={24} color="#666" />
            </Button>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default InformacionGeneralScreen;
