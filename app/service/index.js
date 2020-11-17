// import AsyncStorage from "@react-native-community/async-storage";
import { AsyncStorage } from "react-native";

//Direccion de la api del backend
export const ENDPOINT = "https://appupcmovil.herokuapp.com";

//Encabezados de la peticiones
let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
//Agregar token si existe
const token = AsyncStorage.getItem("token");
headers = !token ? headers : { ...headers, Authentication: `Bearer ${token}` };

//Metodos generales para utilizar
export const httpClient = {
  get: (path) => {    
    return fetch(`${ENDPOINT}/${path}`, { headers })
  },
  post: (path, data) => {
    return fetch(`${ENDPOINT}/${path}`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });
  },
  put: (path, data) =>
    fetch(`${ENDPOINT}/${path}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(data),
    }),
  delete: (path, data) =>
    fetch(`${ENDPOINT}/${path}`, { method: "DELETE", headers }),
};
