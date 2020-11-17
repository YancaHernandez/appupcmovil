import { httpClient } from "./index";
// const entity = "auth";
const entity = "auth";

export const postLogin = (data) => {
  return new Promise(async (resolve, reject) => {
    console.log(data)
    httpClient
      .post(`${entity}/login`, data)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
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
