import { Button, Checkbox, Form, Input, Row, Col } from "antd";
import { registerUser } from "../service/api.service";

const RegisterPage = () => {
    const [form] = Form.useForm();
    const onFinish = async(values) => {
        console.log("Success:", values);
        const res = await registerUser(values)
        if(res) {
            console.log(res);
            
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <Form form={form} layout='vertical' onFinish={onFinish} onFinishFailed={onFinishFailed} style={{margin: '40px'}}>
            <Row>
                <Col sm={24} xxl={13}>
                    <Form.Item
                        label="Username"
                        name="fullName"
                        rules={[{ message: "Please input your username!" }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col sm={24} xxl={13}>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ message: "Please input your password!" }]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
                <Col sm={24} xxl={13}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ message: "Please input your email!" }]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
                <Col sm={24} xxl={13}>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[{ message: "Please input your phone!" }]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegisterPage;
