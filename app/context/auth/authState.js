import React, { useReducer } from "react";
import { AsyncStorage } from "react-native";
import authContext from "./authContext";
import authReducer from "./authReducer";
import { postLogin } from "../../service/api";

import { AUTH_LOGUIN, AUTH_LOGUOT } from "./types";

const AuthState = (props) => {
  const initialState = {
    user: null,
    loggued: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState, validloggued);

  //VALIDAR QUE EL USUAIRO ESTE LOGUEADO
  async function validloggued() {
    const user = await AsyncStorage.getItem("user");
    if (user)
      dispatch({
        type: AUTH_LOGUIN,
        payload: user,
      });
    else
      dispatch({
        type: AUTH_LOGUOT,
        payload: null,
      });
  }

  const login = async (data) => {
    const res = await postLogin(data);
    if (res.ok) {
      try {
        await AsyncStorage.setItem("user", JSON.stringify(res.data.user));
        await AsyncStorage.setItem("token", res.data.token);
        // await AsyncStorage.setItem("uxpiration", res.data.uxpiration);
      } catch (error) {
        console.log(error);
      }
      dispatch({
        type: AUTH_LOGUIN,
        payload: res.data.user,
      });
      return { status: true };
    } else {
      return { status: false, error: res.errors };
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("user");
    await AsyncStorage.removeItem("token");
    dispatch({
      type: AUTH_LOGUOT,
      payload: null,
    });
  };

  return (
    <authContext.Provider
      value={{
        user: state.user,
        loggued: state.loggued,
        initing: state.initing,
        login,
        logout,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};
export default AuthState;
