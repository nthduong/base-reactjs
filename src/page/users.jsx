import UserTable from "../components/user/user.table";
import UserForm from "../components/user/user.form";
import { useState, useEffect } from "react";
import { fetchAllUsers } from "../service/api.service";

const UsersPage = () => {
    const [dataUser, setDataUser] = useState([]);

    const loadUsers = async () => {
        const res = await fetchAllUsers();
        setDataUser(res.data);
    };

    useEffect(() => {
        (async () => {
            await loadUsers();
        })();
    }, []);

    return (
        <div>
            <UserForm loadUsers={loadUsers} />
            <UserTable dataUser={dataUser} />
        </div>
    );
};

export default UsersPage;
