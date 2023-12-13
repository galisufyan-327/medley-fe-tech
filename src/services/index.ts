import axios from "axios";

export const BASE_API_URL = process.env.REACT_APP_API_GATEWAY_URL + "/api/v1";  

export const AuthorizedService = (url: string) => {
  return axios.create({
    baseURL: BASE_API_URL + url
  });;
};
