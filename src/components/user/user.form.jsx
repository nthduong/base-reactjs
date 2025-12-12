import { useState } from "react";
import { Button, Input, notification, Modal } from "antd";
import { CreateUser } from "../../service/api.service";

const UserForm = (props) => {
    const {loadUsers} = props
    const [api, contextHolder] = notification.useNotification();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const onSubmit = async () => {
        const res = await CreateUser(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "User created successfully",
            });
            await loadUsers();
        } else {
            api.error({
                message: "Error creating user",
                description: res.message,
            });
        }
    };

    return (
        <div>
            {contextHolder}
            <div style={{ display: "flex", justifyContent: "space-between", margin: "40px 0" }}>
                <h3>Table User</h3>
                <Button type="primary" onClick={() => setIsModalOpen(true)}>
                    Create User
                </Button>
            </div>

            <Modal
                title="Create User"
                closable={{ "aria-label": "Custom Close Button" }}
                open={isModalOpen}
                onOk={() => onSubmit()}
                onCancel={() => setIsModalOpen(false)}
                okText="Submit"
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
                    <div>
                        <span>Password</span>
                        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <span>Phone number</span>
                        <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default UserForm;
