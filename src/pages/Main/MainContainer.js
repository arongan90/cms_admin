import React, {useEffect, useState} from 'react';
import MainPresentational from "./MainPresentational";
import axios from "axios";
import * as constants from "../../utils/constants";
import {toast} from "react-toastify";
import {isLogout} from "../../modules/auth";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const MainContainer = () => {
    const drawerWidth = 256;
    const dispatch = useDispatch();
    const history = useHistory();
    const [tabMenu, setTabMenu] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openAddress, setOpenAddress] = useState(false);
    const [corpList, setCorpList] = useState([]);
    const [searchType, setSearchType] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [searchDate, setSearchDate] = useState({
        start: new Date(),
        finish: new Date(),
    });
    const [usedPeriod, setUsedPeriod] = useState({
        start: new Date(),
        finish: new Date(),
    });
    const [memberInfo, setMemberInfo] = useState({
        bizName: '',
        bizNum: '',
        bizAddress: '',
        bizDetailAddress: '',
        bizTel: '',
        ceoName: '',
        phone: '',
    });
    const infoInputChange = e => {
        const { name, value } = e.target;
        setMemberInfo({
            ...memberInfo,
            [name]: value,
        });
    }

    const handleAddressComplete = data => {
        setMemberInfo({
            ...memberInfo,
            bizAddress: data.address,
        });
        setOpenAddress(false);
    }
    const handleTabMenu = value => setTabMenu(value);
    const onLogout = () => {
        toast.info('정상적으로 로그아웃 되었습니다.');
        dispatch(isLogout());
        history.push(`/`);
    }
    const handleDateChange = (value, type) => {
        switch (type) {
            case 'START':
                setSearchDate({
                    ...searchDate,
                    start: value,
                });
                break;
            case 'FINISH':
                setSearchDate({
                    ...searchDate,
                    finish: value,
                });
                break;
            case 'START_USING':
                setUsedPeriod({
                    ...usedPeriod,
                    start: value,
                });
                break;
            case 'FINISH_USING':
                setUsedPeriod({
                    ...usedPeriod,
                    finish: value,
                });
        }
    }

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    const handleSearchType = e => setSearchType(e.target.value);
    const handleGoodsType = e => setServiceType(e.target.value);
    const fetchData = async () => {
        const res = await axios.get(`${serverProtocol}${serverURL}/corp_list`);
        setCorpList(res.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <MainPresentational
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
            drawerWidth={drawerWidth}
            corpList={corpList}
            searchType={searchType}
            handleSearchType={handleSearchType}
            handleGoodsType={handleGoodsType}
            serviceType={serviceType}
            setServiceType={setServiceType}
            openAddress={openAddress}
            setOpenAddress={setOpenAddress}
            searchDate={searchDate}
            usedPeriod={usedPeriod}
            handleDateChange={handleDateChange}
            handleAddressComplete={handleAddressComplete}
            onLogout={onLogout}
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}

            memberInfo={memberInfo}
            infoInputChange={infoInputChange}
        />
    )
}

export default MainContainer;