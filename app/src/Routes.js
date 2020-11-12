import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import Navigation from "../navigations/Navigation";
import NavigationDrawer from "../navigations/NavigationDrawer";
import AccountStack from "../navigations/AccountStack";
import Loading from "../components/Loading";
import authContext from "../context/auth/authContext";

const Routes = () => {
  const { loggued } = useContext(authContext);

  return (
    <NavigationContainer>
      {/* <Navigation /> */}
      {/* <NavigationDrawer /> */}

      {loggued == null ? (
        <Loading visible={true} text="..." />
      ) : loggued ? (
        <NavigationDrawer />
      ) : (
        <AccountStack />
      )}
    </NavigationContainer>
  );
};

export default Routes;
