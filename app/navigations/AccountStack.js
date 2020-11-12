import React from "react";
import { Button } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import Account from "../screens/Account/Account";
import Login from "../screens/Account/Login";
import UserLogged from "../screens/Account/UserLogged";
import LogoBar from "../components/LogoBar";

const Stack = createStackNavigator();

const AccountStack = ({ navigation }) => {
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerTitleAlign: "center",
    // }}
    >
      <Stack.Screen
        name="account"
        component={Account}
        options={() => ({
          headerTitle: () => <LogoBar />,
          // title: "Inicio de sesión",
          // headerLeft: () => (
          //   <Button
          //     onPress={() => navigation.openDrawer()}
          //     style={{ marginHorizontal: -8 }}
          //   >
          //     <FontAwesome5 name="bars" size={24} color="#666" />
          //   </Button>
          // ),
        })}
      />

      {/* <Stack.Screen
        name="userLogged"
        component={UserLogged}
        options={() => ({
          title: "Perfil",
          headerLeft: () => (
            <Button
              onPress={() => navigation.openDrawer()}
              style={{ marginHorizontal: -8 }}
            >
              <FontAwesome5 name="bars" size={24} color="#666" />
            </Button>
          ),
        })}
      /> */}

      {/* <Stack.Screen
        name="login"
        component={Login}
        options={() => ({
          title: "Iniciar ",
          headerLeft: () => (
            <Button
              onPress={() => navigation.openDrawer()}
              style={{ marginHorizontal: -8 }}
            >
              <FontAwesome5 name="bars" size={24} color="#666" />
            </Button>
          ),
        })}
      /> */}
    </Stack.Navigator>
  );
};

export default AccountStack;
