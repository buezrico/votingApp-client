export const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://naija-online-voting.herokuapp.com/"
    : "http://localhost:8000";

// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: "https://chibueze-voting-app.herokuapp.com/",
// });
