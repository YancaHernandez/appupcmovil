import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Account/Login";
import colors from "../styles/colors";

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        // headerStyle: { backgroundColor: "#000" },
      }}
    >
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: "Iniciar sesión",
          headerTitleStyle: { color: colors.TEXT },
        }}
      />
    </Stack.Navigator>
  );
};

export default LoginStack;
