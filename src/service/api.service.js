import axios from "./axios.custom";

const CreateUser = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user";

    const data = { fullName, email, password, phone };
    
    return axios.post(URL_BACKEND, data);
};

const fetchAllUsers = () => {
    const URL_BACKEND = "/api/v1/user";
    return axios.get(URL_BACKEND);
};

export { CreateUser, fetchAllUsers };
