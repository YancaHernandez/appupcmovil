import React, { useReducer } from "react";
import { AsyncStorage } from "react-native";
import tableContext from "./tableContext";
import tableReducer from "./tableReducer";
import { table_remove, table_getList, table_postCreate, table_putCreate } from "../../service/api";

import { TABLE_LIST, TABLE_CREATE, TABLE_UPDATE, TABLE_DELETE } from "./types";

const TableState = (props) => {
  const initialState = {
    tables: [],
  };
  const [state, dispatch] = useReducer(tableReducer, initialState);

  //VALIDAR QUE EL USUAIRO ESTE LOGUEADO
  // async function validloggued() {
  //   const user = await AsyncStorage.getItem("user");
  //   if (user)
  //     dispatch({
  //       type: AUTH_LOGUIN,
  //       payload: user,
  //     });
  //   else
  //     dispatch({
  //       type: AUTH_LOGUOT,
  //       payload: null,
  //     });
  // }

  const TABLECREATE = async (data) => {
    const res = await table_postCreate(data);
    if (res.ok) {
      dispatch({
        type: TABLE_CREATE,
        payload: res.data,
      });
      return { status: true };
    } else {
      return { status: false, error: res.error};
    }
  };
  const TABLEUPDATE = async ({data,id}) => {
    const res = await table_putCreate(data,id);
    if (res.ok) {
      dispatch({
        type: TABLE_UPDATE,
        payload: data,
      });
      return { status: true };
    } else {
      return { status: false, error: res.error };
    }
  };
  const TABLEGETLIST = async () => {
    const res = await table_getList();
    if (res.ok) {
      dispatch({
        type: TABLE_LIST,
        payload: res.data,
      });
      return { status: true };
    } else {
      return { status: false, error: res.error };
    }
  };

  const TABLEDELETE = async (id) => {
    const res = await table_remove(id);
    if (res.ok) {
      dispatch({
        type: TABLE_DELETE,
        payload: res.data._id,
      });
      return { status: true };
    } else {
      return { status: false, error: res.error };
    }
  };

  return (
    <tableContext.Provider
      value={{
        tables: state.tables,
        TABLEGETLIST,
        TABLECREATE,
        TABLEUPDATE,
        TABLEDELETE
      }}
    >
      {props.children}
    </tableContext.Provider>
  );
};
export default TableState;
