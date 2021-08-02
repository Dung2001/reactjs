import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:4003/api",
  headers: { "Content-Type": "multipart/from-data; charset=UTF-8"},
})
