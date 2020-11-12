import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

import Ministro from "./Ministro";
import LogoBar from "../../components/LogoBar";

const Stack = createStackNavigator();

const MinistroScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ministro"
        component={Ministro}
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

export default MinistroScreen;
