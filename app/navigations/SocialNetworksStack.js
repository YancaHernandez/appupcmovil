import React from "react";
import { Button } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import SocialNetworks from "../screens/SocialNetworks";
import colors from "../styles/colors";
import LogoBar from "../components/LogoBar";

const Stack = createStackNavigator();

const SocialNetworksStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="socialNetworks"
        component={SocialNetworks}
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

export default SocialNetworksStack;
