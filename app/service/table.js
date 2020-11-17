import { httpClient } from "./index";
// const entity = "auth";
const entity = "tables";

export const table_postCreate = (data) => {
  return new Promise(async (resolve, reject) => {
    httpClient
      .post(`${entity}`, data)
      .then((res) => res.json())
      .then((data) => {
        resolve({ ok: true, data });
      })
      .catch((error) => {
        reject({ ok: false, error });
      });
  });
};
export const table_putCreate = (data,id) => {
  return new Promise(async (resolve, reject) => {
    httpClient
      .put(`${entity}/${id}`, data)
      .then((res) => res.json())
      .then((data) => {
        resolve({ ok: true, data });
      })
      .catch((error) => {
        resolve({ ok: false, error });
      });
  });
};

export const table_getList = () => {
  return new Promise(async (resolve, reject) => {
    httpClient
      .get(`${entity}`)
      .then((res) => res.json())
      .then((data) => {
        resolve({ ok: true, data });
      })
      .catch((error) => {
        reject({ ok: false, error });
      });
  });
};

export const table_remove = (id) => {
  return new Promise(async (resolve, reject) => {
    httpClient
      .delete(`${entity}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        resolve({ ok: true, data });
      })
      .catch((error) => {
        resolve({ ok: false, error });
      });
  });
};