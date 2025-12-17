import { Input, Drawer, Button } from "antd";
import { useRef, useState } from "react";
import { handleUploadFile, updateAvatar } from "../../service/api.service";

const ViewUserDetail = (props) => {
    const { isDrawOpen, setIsDrawOpen, dataDetailUser, setDataDetailUser, loadUsers } = props;
    const inputRef = useRef(null);
    const [selectFile, setSelectFile] = useState(null);
    const [preView, setPreView] = useState(null);

    const closeModal = () => {
        setIsDrawOpen(false);
        setDataDetailUser(null);
    };

    const handleOnChangeFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectFile(null);
            setPreView(null);
            return;
        }
        const file = e.target.files[0];
        if (file) {
            setSelectFile(file);
            setPreView(URL.createObjectURL(file));
        }
    };

    const UploadFile = async () => {
        if (!selectFile) return;

        const res = await handleUploadFile(selectFile, "avatar");
        if (res.data) {
            const resUpdateAvatar = await updateAvatar(
                dataDetailUser._id,
                dataDetailUser.fullName,
                dataDetailUser.phone,
                res.data.fileUploaded
            );

            if (resUpdateAvatar.data) {
                setIsDrawOpen(false);
                setSelectFile(null);
                setPreView(null);
                await loadUsers();
            }
        }
    };

    return (
        <Drawer
            title="User Detail"
            closable={{ "aria-label": "Custom Close Button" }}
            open={isDrawOpen}
            onClose={() => closeModal()}
        >
            {dataDetailUser ? (
                <>
                    <p>{dataDetailUser._id}</p>
                    <p>{dataDetailUser.fullName}</p>
                    <p>{dataDetailUser.email}</p>
                    <img
                        height={250}
                        width={300}
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetailUser.avatar}`}
                        alt=""
                    />
                    <div>
                        <label htmlFor="avatar-input">
                            <Button type="primary" onClick={() => inputRef.current.click()}>
                                Chose avatar
                            </Button>
                        </label>
                        <input type="file" ref={inputRef} id="avatar-input" hidden onChange={handleOnChangeFile} />
                    </div>
                    {selectFile && (
                        <div>
                            <img height={250} width={300} src={preView} alt="" />
                            <Button type="primary" onClick={UploadFile}>
                                Update
                            </Button>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <p>không có dữ liệu</p>
                </>
            )}
        </Drawer>
    );
};

export default ViewUserDetail;
