import { http } from "./interceptors";

export const getStaffDetails = () => {
  return http
    .get("/api/getStaffDetails")
    .then((result: any) => {
      return result.data;
    })
    .catch((error: any) => {
      return Promise.reject(error);
    });
};

export const addRedemption = (payload: any) => {
  return http
    .post("/api/addRedemption", payload)
    .then((result: any) => {
      return result.data;
    })
    .catch((error: any) => {
      return Promise.reject(error);
    });
};

export const getRedemption = () => {
  return http
    .get("/api/getRedemption")
    .then((result: any) => {
      return result.data;
    })
    .catch((error: any) => {
      return Promise.reject(error);
    });
};
