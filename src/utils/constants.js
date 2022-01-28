import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chibueze-voting-app.herokuapp.com/",
});
