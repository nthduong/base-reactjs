import { Input, Drawer } from "antd";

const ViewUserDetail = (props) => {
    const { isDrawOpen, setIsDrawOpen, dataDetailUser, setDataDetailUser } = props;

    const closeModal = () => {
        setIsDrawOpen(false);
        setDataDetailUser(null);
    };

    return (
        <Drawer
            title="User Detail"
            closable={{ "aria-label": "Custom Close Button" }}
            open={isDrawOpen}
            onClose={() => closeModal()}
        >
        {
            dataDetailUser ? 
            <>
                <p>{dataDetailUser._id}</p>
                <p>{dataDetailUser.fullName}</p>
                <p>{dataDetailUser.email}</p>
            </>:
            <>
                <p>không có dữ liệu</p>
            </>
        }
        </Drawer>
    );
};

export default ViewUserDetail;
