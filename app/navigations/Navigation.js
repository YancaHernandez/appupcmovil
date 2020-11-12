import React, { useState, useContext } from "react";
import { Text } from "react-native";
import { IconButton } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import colors from "../styles/colors";

import HomepageStack from "../navigations/HomepageStack";
import TallerConstruyendoPaisStack from "../navigations/TallerConstruyendoPaisStack";
import TableStack from "../navigations/TableStack";
import PQRDSStack from "../navigations/PQRDSStack";
import SocialNetworksStack from "../navigations/SocialNetworksStack";
// import AccountStack from "../navigations/AccountStack";

import authContext from "../context/auth/authContext";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const { loggued } = useContext(authContext);

  return (
    <>
      <Tab.Navigator
        initialRouteName="homepage"
        tabBarOptions={{
          inactiveTintColor: colors.INACTIVE_TINT,
          activeTintColor: colors.BUTTON_ACTIVO,
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
          headerStyle: {
            backgroundColor: colors.WHITE,
          },
          headerTitleStyle: {
            fontWeight: "100",
          },
        })}
      >
        <Tab.Screen
          name="homepage"
          component={HomepageStack}
          options={() => ({
            title: "Inicio",
          })}
        />

        {/* {loggued ? (
          <Tab.Screen
            name="tallerConstruyendoPais"
            component={TallerConstruyendoPaisStack}
            options={() => ({
              title: "Taller",
            })}
          />
        ) : null} */}

        <Tab.Screen
          name="table"
          component={TableStack}
          options={{ title: "Mesas" }}
        />

        {/* <Tab.Screen
          name="pqrds"
          component={PQRDSStack}
          options={{ title: "PQRDS" }}
        /> */}

        {/* <Tab.Screen
          name="socialNetworks"
          component={SocialNetworksStack}
          options={{ title: "Redes sociales" }}
        /> */}
      </Tab.Navigator>
    </>
  );
};

export default Navigation;

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "homepage":
      iconName = "home-outline";
      break;
    case "tallerConstruyendoPais":
      iconName = "city-variant-outline";
      break;
    case "table":
      iconName = "table";
      break;
    case "pqrds":
      iconName = "account-question-outline";
      break;
    case "socialNetworks":
      iconName = "wan";
      break;

    default:
      break;
  }

  return <IconButton icon={iconName} color={color} size={22} />;
}
