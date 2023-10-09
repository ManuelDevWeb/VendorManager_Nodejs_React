import axios from "axios";

const clientAxios = axios.create({
  // set URL in .env file
  baseURL: "http://localhost:3001",
});

export { clientAxios };
