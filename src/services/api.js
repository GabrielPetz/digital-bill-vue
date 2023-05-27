import axios from "axios";

const digitalBillApi = axios.create({
    baseURL: "http://192.168.15.3:8001/"
})

export default digitalBillApi;