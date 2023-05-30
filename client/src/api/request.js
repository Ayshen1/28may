// import { BASE_URL } from "./base_url"
import { BASE_URL } from "./base_url"
import axios from "axios"

export const GetAll = async () => {
    let globalData
    await axios.get(`${BASE_URL}/users`).then((res) => {
        globalData = res.data
    })
    return globalData
}


export const GetID = async (ID) => {
    let globalData
    await axios.get(`${BASE_URL}/users/${ID}`).then((res) => {
        globalData = res.data
    })
    return globalData
}

export const DeleteId = async (ID) => {
    let DeletedData
    await axios.delete(`${BASE_URL}/users/${ID}`).then((res) => {
        DeletedData = res.data
    })
    return DeletedData
}

export const Post = (newUser) => {
    axios.post(`${BASE_URL}/users`, newUser)
}

export const Put = async (ID, newUser) => {
    await axios.put(`${BASE_URL}/users/${ID}`, newUser)
}