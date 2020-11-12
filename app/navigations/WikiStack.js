import React from "react";
import { Button } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import Wiki from "../screens/Wiki";
import LogoBar from "../components/LogoBar";

const Stack = createStackNavigator();

const WikiStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="wiki"
        component={Wiki}
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

export default WikiStack;
