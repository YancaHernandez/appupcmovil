import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "../screens/DrawerContent";

import Navigation from "../navigations/Navigation";
import AccountStack from "../navigations/AccountStack";
import MinistroScreen from "../screens/Drawer/MinistroScreen";
import InformacionGeneralScreen from "../screens/Drawer/InformacionGeneralScreen";

const Drawer = createDrawerNavigator();

const NavigationDrawer = () => {
  return (
    // <Drawer.Navigator initialRouteName="home">
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="home" component={Navigation} />
      <Drawer.Screen name="account" component={AccountStack} />
      <Drawer.Screen name="ministro" component={MinistroScreen} />
      <Drawer.Screen
        name="informacionGeneral"
        component={InformacionGeneralScreen}
      />
    </Drawer.Navigator>
  );
};

export default NavigationDrawer;
