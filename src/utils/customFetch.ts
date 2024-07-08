import axios, { AxiosInstance } from "axios";

const customFetch: AxiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com",
    headers: {
        'Content-Type': 'application/json'
    }
})

export default customFetch