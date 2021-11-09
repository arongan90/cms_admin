import React, {useState} from 'react';
import AdminPresentation from "./AdminPresentation";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {toast} from "react-toastify";
import {isLogout} from "../../modules/auth";

const AdminContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [tabMenu, setTabMenu] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [changePwdOpen, setChangePwdOpen] = useState(false);
    const [updateAdminData, setUpdateAdminData] = useState(null);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    const handleTabMenu = value => setTabMenu(value);
    const handleUpdateModalOpen = data => {
        setUpdateModalOpen(true);
        setUpdateAdminData(data);
    }
    const handleUpdateModalClose = () => setUpdateModalOpen(false);
    const handleChangePwdOpen = () => setChangePwdOpen(true);
    const handleChangePwdClose = () => setChangePwdOpen(false);

    function createData(num, name, user_id, type, role, login) {
        return { num, name, user_id, type, role, login};
    }

    const adminData = [
        createData(1, '한습관', 'han', '슈퍼관리자', 'all', true),
        createData(2, '홍길동', 'kildong', '계정관리자', 'all', true),
        createData(3, '한성민', 'min', '일반관리자', 'ico', true),
        createData(4, '이성재', 'sung', '일반관리자', 'currency', false),
        createData(5, '이경민', 'kkmin', '일반관리자', 'error_report', true),
    ];

    const handleMemberDelete = () => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            console.info('삭제');
        }

        handleUpdateModalClose();
    }

    return (
        <AdminPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            handleDrawerToggle={handleDrawerToggle}
            adminData={adminData}

            updateAdminData={updateAdminData}
            updateModalOpen={updateModalOpen}
            handleUpdateModalOpen={handleUpdateModalOpen}
            handleUpdateModalClose={handleUpdateModalClose}
            changePwdOpen={changePwdOpen}
            handleChangePwdOpen={handleChangePwdOpen}
            handleChangePwdClose={handleChangePwdClose}

            handleMemberDelete={handleMemberDelete}
        />
    )
}

export default AdminContainer;