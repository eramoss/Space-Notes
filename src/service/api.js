import axios from "axios";

const PORT = process.env.PORT || 5000

export const api = axios.create({
    baseURL: `http://localhost:${PORT}`,
})

export const createSession = async (email,password) => {
    return api.post("/users", {email, password})
}

export const getUsers = async (email,password) => {
    return api.get("/users", {email, password})
}