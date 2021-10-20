import React, { useEffect, useState } from 'react';
import MainPresentational from "./MainPresentational";
import axios from "axios";
import * as constants from "../../utils/constants";
import { toast } from "react-toastify";
import { isLogout } from "../../modules/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { autoHyphenBizNumber, autoHyphenPhoneNumber } from "../../utils/common";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const MainContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [tabMenu, setTabMenu] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openAddress, setOpenAddress] = useState(false);
    const [initialData, setInitialData] = useState([]);
    const [corpList, setCorpList] = useState([]);
    const [searchType, setSearchType] = useState('회사명');
    const [serviceType, setServiceType] = useState('');
    const [searchText, setSearchText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [updateCorpData, setUpdateCorpData] = useState();
    const [unionService, setUnionService] = useState({
        live: {
            isService: false,
            period: {
                start: null,
                finish: null,
            },

        },
        linkBinder: {
            isService: false,
            period: {
                start: null,
                finish: null,
            },
        },
        shopping: {
            isService: false,
            period: {
                start: null,
                finish: null,
            },
        },
        gate: {
            isService: false,
            period: {
                start: null,
                finish: null,
            },
        },
    });

    const handleUnionService = e => {
        const { name, checked } = e.target;

        console.info(name, checked);
        setUnionService({
            ...unionService,
            [name]: {
                ...unionService[name],
                isService: checked
            },
        });
    }

    const [searchDate, setSearchDate] = useState({
        start: null,
        finish: null,
    });
    const [usedPeriod, setUsedPeriod] = useState({
        start: null,
        finish: null,
    });
    const [memberInfo, setMemberInfo] = useState({
        bizName: '',
        bizNum: '',
        bizAddress: '',
        bizDetailAddress: '',
        ceoName: '',
        ceoPhone: '',
        managerName: '',
        bizTel: '',
    });
    const infoInputChange = (e, type) => {
        const {name, value} = e.target;

        switch (type) {
            case 'BIZ_NAME':
                setMemberInfo({
                    ...memberInfo,
                    [name]: value,
                });
                break;
            case 'BIZ_NUM':
                setMemberInfo({
                    ...memberInfo,
                    [name]: autoHyphenBizNumber(value.slice(0, 12)),
                });
                break;
            case 'BIZ_DETAIL_ADDRESS':
                setMemberInfo({
                    ...memberInfo,
                    [name]: value,
                });
                break;
            case 'CEO_NAME':
                setMemberInfo({
                    ...memberInfo,
                    [name]: value,
                });
                break;
            case 'CEO_PHONE':
                setMemberInfo({
                    ...memberInfo,
                    [name]: autoHyphenPhoneNumber(value.slice(0, 13)),
                });
                break;
            case 'BIZ_TEL':
                setMemberInfo({
                    ...memberInfo,
                    [name]: autoHyphenPhoneNumber(value.slice(0, 12)),
                });
                break;
            case 'MANAGER_NAME':
                setMemberInfo({
                    ...memberInfo,
                    [name]: value,
                });
                break;
            default:
                throw new Error(`Unhandled type: ${type}`);
        }
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
                break;
            case 'LIVE_START':
                setUnionService({
                    ...unionService,
                    live: {
                        ...unionService.live,
                        period: {
                            ...unionService.live.period,
                            start: value,
                        },
                    }
                });
                break;
            case 'LIVE_FINISH':
                setUnionService({
                    ...unionService,
                    live: {
                        ...unionService.live,
                        period: {
                            ...unionService.live.period,
                            finish: value,
                        },
                    }
                });
                break;
            case 'LINK_BINDER_START':
                setUnionService({
                    ...unionService,
                    linkBinder: {
                        ...unionService.linkBinder,
                        period: {
                            ...unionService.live.period,
                            start: value,
                        },
                    }
                });
                break;
            case 'LINK_BINDER_FINISH':
                setUnionService({
                    ...unionService,
                    linkBinder: {
                        ...unionService.linkBinder,
                        period: {
                            ...unionService.live.period,
                            finish: value,
                        },
                    }
                });
                break;
            case 'SHOPPING_START':
                setUnionService({
                    ...unionService,
                    shopping: {
                        ...unionService.shopping,
                        period: {
                            ...unionService.live.period,
                            start: value,
                        },
                    }
                });
                break;
            case 'SHOPPING_FINISH':
                setUnionService({
                    ...unionService,
                    shopping: {
                        ...unionService.shopping,
                        period: {
                            ...unionService.live.period,
                            finish: value,
                        },
                    }
                });
                break;
            case 'GATE_START':
                setUnionService({
                    ...unionService,
                    shopping: {
                        ...unionService.shopping,
                        period: {
                            ...unionService.live.period,
                            start: value,
                        },
                    }
                });
                break;
            case 'GATE_FINISH':
                setUnionService({
                    ...unionService,
                    shopping: {
                        ...unionService.shopping,
                        period: {
                            ...unionService.live.period,
                            finish: value,
                        },
                    }
                });
                break;
            default:
                throw new Error(`Unhandled type: ${type}`);
        }
    }

    const handleSetDate = (type, service) => {
        let now = new Date();
        let year = new Date().getFullYear();
        let month = new Date().getMonth();
        let lastMonth = new Date().getMonth() - 1;
        let oneDayAgo = new Date().getDate() - 1;

        switch (type) {
            case 'TODAY':
                setSearchDate({
                    start: new Date(),
                    finish: new Date(),
                });
                break;
            case 'YESTERDAY':
                setSearchDate({
                    start: new Date(now.setDate(now.getDate() - 1 )),
                    finish: new Date(),
                });
                break;
            case 'WEEK':
                setSearchDate({
                    start: new Date(now.setDate(now.getDate() - 7 )),
                    finish: new Date(),
                });
                break;
            case 'LAST_MONTH':
                setSearchDate({
                    start: new Date(year, lastMonth, 1),
                    finish: new Date(year, lastMonth + 1, 0),
                });
                break;
            case 'ONE_MONTH':
                setSearchDate({
                    start: new Date(now.setMonth(now.getMonth() - 1 )),
                    finish: new Date(),
                });
                break;
            case 'THREE_MONTH':
                setSearchDate({
                    start: new Date(now.setMonth(now.getMonth() - 3 )),
                    finish: new Date(),
                });
                break;
            case 'ALL':
                setSearchDate({
                    start: null,
                    finish: null,
                });
                break;
            case '6_MONTH':
                if (!!service) {
                    setUnionService({
                        ...unionService,
                        [service]: {
                            ...unionService[service],
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 6, oneDayAgo),
                            }
                        }
                    });
                } else {
                    setUsedPeriod({
                        start: new Date(),
                        finish: new Date(year, month + 6, oneDayAgo),
                    });
                }
                break;
            case '12_MONTH':
                if (!!service) {
                    setUnionService({
                        ...unionService,
                        [service]: {
                            ...unionService[service],
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 12, oneDayAgo),
                            }
                        }
                    });
                } else {
                    setUsedPeriod({
                        start: new Date(),
                        finish: new Date(year, month + 12, oneDayAgo),
                    });
                }

                break;
            case '18_MONTH':
                if (!!service) {
                    setUnionService({
                        ...unionService,
                        [service]: {
                            ...unionService[service],
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 18, oneDayAgo),
                            }
                        }
                    });
                } else {
                    setUsedPeriod({
                        start: new Date(),
                        finish: new Date(year, month + 18, oneDayAgo),
                    });
                }

                break;
            case '24_MONTH':
                if (!!service) {
                    setUnionService({
                        ...unionService,
                        [service]: {
                            ...unionService[service],
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 24, oneDayAgo),
                            }
                        }
                    });
                } else {
                    setUsedPeriod({
                        start: new Date(),
                        finish: new Date(year, month + 24, oneDayAgo),
                    });
                }

                break;
            case '30_MONTH':
                if (!!service) {
                    setUnionService({
                        ...unionService,
                        [service]: {
                            ...unionService[service],
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 30, oneDayAgo),
                            }
                        }
                    });
                } else {
                    setUsedPeriod({
                        start: new Date(),
                        finish: new Date(year, month + 30, oneDayAgo),
                    });
                }

                break;
            case '36_MONTH':
                if (!!service) {
                    setUnionService({
                        ...unionService,
                        [service]: {
                            ...unionService[service],
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 36, oneDayAgo),
                            }
                        }
                    });
                } else {
                    setUsedPeriod({
                        start: new Date(),
                        finish: new Date(year, month + 36, oneDayAgo),
                    });
                }

                break;
            case 'USED_PERIOD_RESET':
                if (!!service) {
                    setUnionService({
                        ...unionService,
                        [service]: {
                            ...unionService[service],
                            period: {
                                start: null,
                                finish: null,
                            }
                        }
                    });
                } else {
                    setUsedPeriod({
                        start: null,
                        finish: null,
                    });
                }

                break;
            default:
                throw new Error(`Unhandled type: ${type}`);
        }
    }

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    const handleSearchType = e => setSearchType(e.target.value);
    const handleGoodsType = e => setServiceType(e.target.value);
    const handleSearchText = e => setSearchText(e.target.value);

    const fetchData = async () => {
        const res = await axios.get(`${serverProtocol}${serverURL}/corp_list`);
        setCorpList(res.data);
        setInitialData(res.data);
    }

    const handleSearch = () => {

        let year = searchDate.start && searchDate.start.getFullYear();
        let month = searchDate.start && searchDate.start.getMonth() + 1;
        let day = searchDate.start && searchDate.start.getDate();

        console.info(year + '.' + month + '.' + day);
        console.info(corpList);

        let result = [];
        if (searchText === '') {
            alert('검색할 회사의 정보를 입력해주세요.');
            return;
        }

        if (searchType === '회사명') initialData.find(list => list.bizName === searchText && result.push(list));
        else if (searchType === '사업자 번호') initialData.find(list => list.bizNum === searchText && result.push(list));
        else if (searchType === '사업자명') initialData.find(list => list.ceoName === searchText && result.push(list));
        else initialData.forEach(list => (list.type === searchText) && result.push(list));

        console.info(result);
        console.info(searchText);

        if (result.length > 0) {
            setCorpList(result);
            setSearchText('');
        } else {
            alert('입력한 회사의 정보가 없습니다.');
        }
    }

    const handleRefresh = () => {
        setSearchDate({
            start: null,
            finish: null,
        });
        setSearchType('회사명');
        setSearchText('');
        setCorpList(initialData);
    }

    const handleModalClose = () => setModalVisible(false);
    const handleModalOpen = id => {
        corpList.map(data => {
            if (data.id === id) {
                setUpdateCorpData(data);
                setMemberInfo({
                    bizName: data.bizName,
                    bizNum: data.bizNumber,
                    bizAddress: data.bizAddress,
                    bizDetailAddress: data.bizDetailAddress,
                    ceoName: data.ceoName,
                    ceoPhone: data.ceoPhone,
                    managerName: data.managerName,
                    bizTel: data.bizTel,
                });
            }
        });

        setModalVisible(true);
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.info('updateCorpData : ', updateCorpData);
    }, [updateCorpData]);

    useEffect(() => {
        console.info('memberInfo : ', memberInfo);
    }, [memberInfo]);

    return (
        <MainPresentational
            corpList={corpList}
            searchDate={searchDate}
            usedPeriod={usedPeriod}
            memberInfo={memberInfo}
            onLogout={onLogout}

            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            openAddress={openAddress}
            setOpenAddress={setOpenAddress}
            serviceType={serviceType}
            setServiceType={setServiceType}
            searchType={searchType}
            handleSearchType={handleSearchType}
            searchText={searchText}
            handleSearchText={handleSearchText}

            handleDrawerToggle={handleDrawerToggle}
            handleGoodsType={handleGoodsType}
            handleSetDate={handleSetDate}
            handleDateChange={handleDateChange}
            handleAddressComplete={handleAddressComplete}
            infoInputChange={infoInputChange}

            handleSearch={handleSearch}
            handleRefresh={handleRefresh}

            unionService={unionService}
            handleUnionService={handleUnionService}

            modalVisible={modalVisible}
            handleModalOpen={handleModalOpen}
            handleModalClose={handleModalClose}
            updateCorpData={updateCorpData}
        />
    )
}

export default MainContainer;