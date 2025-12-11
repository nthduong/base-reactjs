import { useState } from "react";
import { Button, Checkbox, Form, Input, notification } from "antd";
import {CreateUser} from "../../service/api.service";

const UserForm = () => {
    const [api, contextHolder] = notification.useNotification();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const onSubmit = async () => {
        const res = await CreateUser(fullName, email, password, phone);
        if(res.data) {
            notification.success({
                message: 'User created successfully',
            });
        } else {
            api.error({
                message: 'Error creating user',
                description: res.message,
            });
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", margin: "40px auto", width: "600px" }}>
             {contextHolder}
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
            <div>
                <Button type="primary" onClick={onSubmit}>
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default UserForm;
