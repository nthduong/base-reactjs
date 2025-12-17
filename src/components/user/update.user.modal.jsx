import { useEffect, useState } from "react";
import { Input, Modal } from "antd";
import { updateUser } from "../../service/api.service";
const UpdateUserModal = (props) => {
    const { isModalOpen, setIsModalOpen, dataUpdate, setDataUpdate, loadUsers } = props;

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (dataUpdate) {
            setFullName(dataUpdate.fullName);
            setEmail(dataUpdate.email);
            setPhone(dataUpdate.phone);
        }
    }, [dataUpdate]);

    const editUser = async () => {
        const res = await updateUser(dataUpdate._id, fullName, email, phone);

        if (res.data) {
            loadUsers();
            setIsModalOpen(false);
            setDataUpdate(null);
        }
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setFullName("");
        setEmail("");
        setDataUpdate(null);
    };

    return (
        <Modal
            title="Edit User"
            closable={{ "aria-label": "Custom Close Button" }}
            open={isModalOpen}
            onOk={() => editUser()}
            onCancel={() => closeModal()}
            okText="Edit"
            maskClosable={false}
        >
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div>
                    <span>ID</span>
                    <Input value={dataUpdate?._id} disabled />
                </div>
                <div>
                    <span>Full Name</span>
                    <Input value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div>
                    <span>Email</span>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <span>Phone</span>
                    <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
            </div>
        </Modal>
    );
};

export default UpdateUserModal;
