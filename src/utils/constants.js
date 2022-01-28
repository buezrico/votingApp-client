import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://naija-online-voting.herokuapp.com/",
});
