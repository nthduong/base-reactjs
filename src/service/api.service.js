import axios from "./axios.custom";

const createUser = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user";

    const data = { fullName, email, password, phone };

    return axios.post(URL_BACKEND, data);
};

const fetchAllUsers = () => {
    const URL_BACKEND = "/api/v1/user";
    return axios.get(URL_BACKEND);
};

const updateUser = (_id, fullName, email, phone) => {
    const URL_BACKEND = "/api/v1/user";

    const data = { _id, fullName, email, phone };
    return axios.put(URL_BACKEND, data);
};

const deleteUser = (_id) => {
    const URL_BACKEND = `/api/v1/user/${_id}`;

    return axios.delete(URL_BACKEND);
};

const handleUploadFile = (file,folder) => {
    const URL_BACKEND = `/api/v1/file/upload`;
    let config = {
        headers: {
            "upload-type": folder,
            "Content-Type": "multipart/form-data"
        },
    };
    const bodyFormData = new FormData()
    FormData.append("fileImg",file)



    return axios.post(URL_BACKEND, bodyFormData, config);
};

export { createUser, fetchAllUsers, updateUser, deleteUser, handleUploadFile };
