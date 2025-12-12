import { useState } from "react";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const items = [
    {
        label: <Link to='/'>Home</Link>,
        key: "home",
        icon: <MailOutlined />,
    },
    {
        label: <Link to='/users'>Users</Link>,
        key: "users",
        icon: <AppstoreOutlined />,
    },
    {
        label: <Link to='/book'>book</Link>,
        key: "book",
        icon: <SettingOutlined />,
    },
];
const Header = () => {
    const [current, setCurrent] = useState("");
    const onClick = (e) => {
        setCurrent(e.key);
    };
    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    );
};

export default Header;
