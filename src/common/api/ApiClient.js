import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export const api = async (url, method, data) => {
    const body = await axios({
        url, method, data
    })
    return body.data
}
