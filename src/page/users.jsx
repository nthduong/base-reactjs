import UserTable from "../components/user/user.table";
import UserForm from "../components/user/user.form";
import { useState, useEffect } from "react";
import { fetchAllUsers } from "../service/api.service";

const UsersPage = () => {
    const [dataUser, setDataUser] = useState([]);
    const [currenPage, setCurrenPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [totalPage, setTotalPage] = useState(0);

    // const data = [
    //     {
    //         _id: "1",
    //         fullName: "duong",
    //         email: "abc@gmail.com",
    //     },
    //     {
    //         _id: "2",
    //         fullName: "huy",
    //         email: "huy@gmail.com",
    //     },
    // ];

    const loadUsers = async () => {
        const res = await fetchAllUsers(currenPage, pageSize);
        if (res.data) {
            setDataUser(res.data.result);
            setCurrenPage(res.data.meta.current);
            setPageSize(res.data.meta.pageSize);
            setTotalPage(res.data.meta.total);
        }
    };

    useEffect(() => {
        (async () => {
            await loadUsers();
        })();
    }, [currenPage]);

    return (
        <div>
            <UserForm loadUsers={loadUsers} />
            <UserTable
                dataUser={dataUser}
                loadUsers={loadUsers}
                currenPage={currenPage}
                pageSize={pageSize}
                totalPage={totalPage}
                setCurrenPage={setCurrenPage}
                setPageSize={setPageSize}
            />
        </div>
    );
};

export default UsersPage;
