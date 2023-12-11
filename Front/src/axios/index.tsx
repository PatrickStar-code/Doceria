import axios from "axios";

export const instance = axios.create({
    "baseURL": "http://26.123.76.114:4000",
    // "baseURL": "http://localhost:4000/",
})