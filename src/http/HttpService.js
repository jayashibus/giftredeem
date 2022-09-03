import { http } from "./interceptors";

export const getStaffDetails = () => {
  return http
    .get("/api/getStaffDetails")
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const addRedemption = (payload) => {
  return http
    .post("/api/addRedemption", payload)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const getRedemption = () => {
  return http
    .get("/api/getRedemption")
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
