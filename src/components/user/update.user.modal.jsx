import { useState } from "react";
import { Button, Input, Modal } from "antd";
const UpdateUserModal = (props) => {
    const {isModalOpen, setIsModalOpen} = props

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    const editUser = () => {
        console.log();
    };
     const closeModal = () => {
        setIsModalOpen(false);
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
                    <span>Full Name</span>
                    <Input value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div>
                    <span>Email</span>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>
        </Modal>
    );
};

export default UpdateUserModal;
