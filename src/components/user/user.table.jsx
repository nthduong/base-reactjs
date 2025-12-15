import { Table } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import UpdateUserModal from "./update.user.modal";

const UserTable = (props) => {
    const { dataUser } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const data = [
        {
            _id: "1",
            fullName: "duong",
            email: "abc@gmail.com",
        },
        {
            _id: "2",
            fullName: "huy",
            email: "huy@gmail.com",
        },
    ];
    const columns = [
        {
            title: "Id",
            dataIndex: "_id",
            render: (_, record) => (
                <>
                    <a href="#">{record._id}</a>
                </>
            ),
        },
        {
            title: "Full Name",
            dataIndex: "fullName",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <div style={{ display: "flex", gap: "10px" }}>
                    <EditOutlined onClick={() => {
                        setDataUpdate(record)
                        setIsModalOpen(true)
                    }} />
                    <DeleteOutlined />
                </div>
            ),
        },
    ];
    console.log(1);
    

    return (
        <>
            <Table columns={columns} dataSource={data} />;
            <UpdateUserModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
            />
        </>
    );
};

export default UserTable;
