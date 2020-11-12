import { httpClient } from "./index";
// const entity = "auth";
const entity = "api/v1/Cuentas";

export const postLogin = (data) => {
  return new Promise(async (resolve, reject) => {
    httpClient
      .post(`${entity}/Login`, data)
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          resolve({ ok: true, data: res });
        } else {
          resolve({ ok: false, errors: res.errors });
        }
      })
      .catch((error) => {
        reject({ ok: false, error });
      });
  });
};

export const postRegister = (data) => {
  return new Promise(async (resolve, reject) => {
    httpClient
      .post(`${entity}/register`, data)
      .then((res) => res.json())
      .then((data) => {
        resolve({ ok: true, data });
      })
      .catch((error) => {
        reject({ ok: false, error });
      });
  });
};
