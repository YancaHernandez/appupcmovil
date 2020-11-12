import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

import Homepage from "../screens/Homepage";
import Account from "../navigations/AccountStack";
import News from "../screens/News";
import LogoBar from "../components/LogoBar";

const Stack = createStackNavigator();

const HomepageStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homepage"
        component={Homepage}
        options={({ navigation, route }) => ({
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

      <Stack.Screen
        name="news"
        component={News}
        options={() => ({
          // headerTitle: () => <LogoBar />,
          title: "Noticia",
          headerTitleAlign: "center",
        })}
      />
    </Stack.Navigator>
  );
};

export default HomepageStack;
