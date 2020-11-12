import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

import { globalStyle } from "../../styles/general";
import Loading from "../../components/Loading";
import UserLogged from "../../screens/Account/UserLogged";
import Login from "../../screens/Account/Login";
import authContext from "../../context/auth/authContext";

const Account = ({ navigation }) => {
  const { loggued } = useContext(authContext);

  return (
    <>
      {loggued == null ? (
        <Loading visible={true} text="..." />
      ) : loggued ? (
        <UserLogged />
      ) : (
        <Login navigation={navigation} />
      )}
    </>
  );
};

export default Account;
