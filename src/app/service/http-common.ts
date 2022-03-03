import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:6869/api",
  headers: {
    "Content-type": "application/json",
  },
});
