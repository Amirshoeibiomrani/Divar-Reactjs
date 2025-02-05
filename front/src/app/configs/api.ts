import axios from "axios"

const api = axios.create({
    baseURL:import.meta.env.NEXT_BASE_URL,
    headers:{
        "Content_Type":"application/json",
    }
})


export default api