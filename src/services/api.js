import axios from "axios";

const digitalBillApi = axios.create({
    baseURL: "http://localhost:8001/"
})

export default digitalBillApi;