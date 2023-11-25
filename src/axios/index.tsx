import axios from "axios";

export const instance = axios.create({
    // "baseURL": "https://26.123.76.114:3000/",
    "baseURL": "http://localhost:3000/",
})