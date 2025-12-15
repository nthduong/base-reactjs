import { Table } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import UpdateUserModal from "./update.user.modal";
import ViewUserDetail from "./view.user.detail";

const UserTable = (props) => {
    const { dataUser } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [isDrawOpen, setIsDrawOpen] = useState(false);
    const [dataDetailUser, setDataDetailUser] = useState(null);

    const columns = [
        {
            title: "Id",
            dataIndex: "_id",
            render: (_, record) => (
                <>
                    <a
                        href="#"
                        onClick={() => {
                            setIsDrawOpen(true);
                            setDataDetailUser(record);
                        }}
                    >
                        {record._id}
                    </a>
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
                    <EditOutlined
                        onClick={() => {
                            setDataUpdate(record);
                            setIsModalOpen(true);
                        }}
                    />
                    <DeleteOutlined />
                </div>
            ),
        },
    ];

    return (
        <>
            <Table columns={columns} dataSource={dataUser} />;
            <UpdateUserModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
            />
            <ViewUserDetail
                isDrawOpen={isDrawOpen}
                setIsDrawOpen={setIsDrawOpen}
                dataDetailUser={dataDetailUser}
                setDataDetailUser={setDataDetailUser}
            />
        </>
    );
};

export default UserTable;
