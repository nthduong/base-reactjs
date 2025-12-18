import { Table, message, Popconfirm, notification } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import UpdateUserModal from "./update.user.modal";
import ViewUserDetail from "./view.user.detail";
import { deleteUser } from "../../service/api.service";

const UserTable = (props) => {
    const { dataUser, loadUsers, currenPage, pageSize, totalPage, setCurrenPage, setPageSize } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [isDrawOpen, setIsDrawOpen] = useState(false);
    const [dataDetailUser, setDataDetailUser] = useState(null);

    const handleDeleteUser = async (userId) => {
        const res = await deleteUser(userId);
        if (res && res.data) {
            message.success("Xóa user thành công");
            loadUsers();
        } else {
            notification.error({
                message: "Có lỗi xảy ra",
                description: res.message,
            });
        }
    };

    const columns = [
        {
            title: "STT",
            render: (_, record, index) => (
                <>
                    <p>{(index + 1) + ((currenPage-1) * pageSize)}</p>
                </>
            ),
        },
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

                    <Popconfirm
                        title="Delete the user"
                        description="Are you sure to delete this user?"
                        onConfirm={() => {
                            handleDeleteUser(record._id);
                        }}
                    >
                        <DeleteOutlined />
                    </Popconfirm>
                </div>
            ),
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        setCurrenPage(+pagination.current)
        setPageSize(+pagination.pageSize)
    };

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUser}
                pagination={{
                    current: currenPage,
                    pageSize: pageSize,
                    total: totalPage,
                    showSizeChanger: true,
                    pageSizeOptions: ["5", "10", "20"],
                }}
                onChange={onChange}
            />
            <UpdateUserModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUsers={loadUsers}
            />
            <ViewUserDetail
                isDrawOpen={isDrawOpen}
                setIsDrawOpen={setIsDrawOpen}
                dataDetailUser={dataDetailUser}
                setDataDetailUser={setDataDetailUser}
                loadUsers={loadUsers}
            />
        </>
    );
};

export default UserTable;
