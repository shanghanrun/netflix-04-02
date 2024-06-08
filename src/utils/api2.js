import axios from "axios";
// 상황따라 주소 다름
// const LOCAL_BACKEND = process.env.REACT_APP_LOCAL_BACKEND;
// const CLOUD_DB = process.env.REACT_APP_CLOUD_DB+"/api";
// const PROD_BACKEND = process.env.REACT_APP_PROD_BACKEND;
// const BACKEND_PROXY = process.env.REACT_APP_BACKEND_PROXY;
const PROXY = process.env.REACT_APP_PROXY+"/api"

const api2 = axios.create({
  // baseURL: LOCAL_BACKEND,
  baseURL: PROXY,
  headers: {
    authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});
/**
 * console.log all requests and responses
 */
api2.interceptors.request.use(
  (request) => {
    console.log("Starting Request", request);
    request.headers.authorization = `Bearer ${sessionStorage.getItem("token")}`;
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
  }
);

api2.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    error = error.response.data;
    console.log("RESPONSE ERROR", error);
    return Promise.reject(error);
  }
);

export default api2;