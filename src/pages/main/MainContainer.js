import React, {useEffect, useState, useRef} from 'react';
import MainPresentational from "./MainPresentational";
import axios from "axios";
import * as constants from "../../utils/constants";
import {toast} from "react-toastify";
import {isLogout} from "../../modules/auth";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {autoHyphenBizNumber, autoHyphenPhoneNumber} from "../../utils/common";

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
        logoFile: null,
        previewUrl: null,
    });

    const onLogoChange = e => {
        let reader = new FileReader();
        let img = e.target.files[0];

        reader.onload = () => {
            setMemberInfo({
                ...memberInfo,
                logoFile: img,
                previewUrl: reader.result
            });
        }
        reader.readAsDataURL(img);
    }

    const handleUnionService = e => {
        const {name, checked} = e.target;

        setUnionService({
            ...unionService,
            [name]: {
                ...unionService[name],
                isService: checked
            },
        });
    }

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
    const handleTabMenu = value => {
        setTabMenu(value);
        setMemberInfo({
            bizName: '',
            bizNum: '',
            bizAddress: '',
            bizDetailAddress: '',
            ceoName: '',
            ceoPhone: '',
            managerName: '',
            bizTel: '',
            logoFile: null,
            previewUrl: null,
        });
    }
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
                setUnionService({
                    ...unionService,
                    live: {
                        ...unionService.live,
                        period: {
                            ...unionService.live.period,
                            start: value,
                        }
                    },
                    linkBinder: {
                        ...unionService.live,
                        period: {
                            ...unionService.linkBinder.period,
                            start: value
                        }
                    },
                    shopping: {
                        ...unionService.live,
                        period: {
                            ...unionService.shopping.period,
                            start: value,
                        }
                    },
                    gate: {
                        ...unionService.live,
                        period: {
                            ...unionService.gate.period,
                            start: value,
                        }
                    }
                });
                break;
            case 'FINISH_USING':
                setUsedPeriod({
                    ...usedPeriod,
                    finish: value,
                });
                setUnionService({
                    ...unionService,
                    live: {
                        ...unionService.live,
                        period: {
                            ...unionService.live.period,
                            finish: value,
                        }
                    },
                    linkBinder: {
                        ...unionService.live,
                        period: {
                            ...unionService.linkBinder.period,
                            finish: value
                        }
                    },
                    shopping: {
                        ...unionService.live,
                        period: {
                            ...unionService.shopping.period,
                            finish: value,
                        }
                    },
                    gate: {
                        ...unionService.live,
                        period: {
                            ...unionService.gate.period,
                            finish: value,
                        }
                    }
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
                    start: new Date(now.setDate(now.getDate() - 1)),
                    finish: new Date(),
                });
                break;
            case 'WEEK':
                setSearchDate({
                    start: new Date(now.setDate(now.getDate() - 7)),
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
                    start: new Date(now.setMonth(now.getMonth() - 1)),
                    finish: new Date(),
                });
                break;
            case 'THREE_MONTH':
                setSearchDate({
                    start: new Date(now.setMonth(now.getMonth() - 3)),
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
                    setUnionService({
                        live: {
                            ...unionService.live,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 6, oneDayAgo),
                            }
                        },
                        linkBinder: {
                            ...unionService.linkBinder,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 6, oneDayAgo),
                            }
                        },
                        shopping: {
                            ...unionService.shopping,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 6, oneDayAgo),
                            }
                        },
                        gate: {
                            ...unionService.gate,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 6, oneDayAgo),
                            }
                        }
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
                    setUnionService({
                        ...unionService,
                        live: {
                            ...unionService.live,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 12, oneDayAgo),
                            }
                        },
                        linkBinder: {
                            ...unionService.linkBinder,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 12, oneDayAgo),
                            }
                        },
                        shopping: {
                            ...unionService.shopping,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 12, oneDayAgo),
                            }
                        },
                        gate: {
                            ...unionService.gate,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 12, oneDayAgo),
                            }
                        }
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
                    setUnionService({
                        ...unionService,
                        live: {
                            ...unionService.live,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 18, oneDayAgo),
                            }
                        },
                        linkBinder: {
                            ...unionService.linkBinder,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 18, oneDayAgo),
                            }
                        },
                        shopping: {
                            ...unionService.shopping,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 18, oneDayAgo),
                            }
                        },
                        gate: {
                            ...unionService.gate,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 18, oneDayAgo),
                            }
                        }
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
                    setUnionService({
                        ...unionService,
                        live: {
                            ...unionService.live,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 24, oneDayAgo),
                            }
                        },
                        linkBinder: {
                            ...unionService.linkBinder,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 24, oneDayAgo),
                            }
                        },
                        shopping: {
                            ...unionService.shopping,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 24, oneDayAgo),
                            }
                        },
                        gate: {
                            ...unionService.gate,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 24, oneDayAgo),
                            }
                        }
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
                    setUnionService({
                        ...unionService,
                        live: {
                            ...unionService.live,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 30, oneDayAgo),
                            }
                        },
                        linkBinder: {
                            ...unionService.linkBinder,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 30, oneDayAgo),
                            }
                        },
                        shopping: {
                            ...unionService.shopping,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 30, oneDayAgo),
                            }
                        },
                        gate: {
                            ...unionService.gate,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 30, oneDayAgo),
                            }
                        }
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
                    setUnionService({
                        ...unionService,
                        live: {
                            ...unionService.live,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 36, oneDayAgo),
                            }
                        },
                        linkBinder: {
                            ...unionService.linkBinder,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 36, oneDayAgo),
                            }
                        },
                        shopping: {
                            ...unionService.shopping,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 36, oneDayAgo),
                            }
                        },
                        gate: {
                            ...unionService.gate,
                            period: {
                                start: new Date(),
                                finish: new Date(year, month + 36, oneDayAgo),
                            }
                        }
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
                    setUnionService({
                        ...unionService,
                        live: {
                            ...unionService.live,
                            period: {
                                start: null,
                                finish: null,
                            }
                        },
                        linkBinder: {
                            ...unionService.linkBinder,
                            period: {
                                start: null,
                                finish: null,
                            }
                        },
                        shopping: {
                            ...unionService.shopping,
                            period: {
                                start: null,
                                finish: null,
                            }
                        },
                        gate: {
                            ...unionService.gate,
                            period: {
                                start: null,
                                finish: null,
                            }
                        }
                    });
                }

                break;
            default:
                throw new Error(`Unhandled type: ${type}`);
        }
    }

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    const handleSearchType = e => setSearchType(e.target.value);
    const handleGoodsType = e => {
        setServiceType(e.target.value);
        if (!!usedPeriod.start) {
            setUnionService({
                live: {
                    isService: false,
                    period: {
                        start: usedPeriod.start,
                        finish: null,
                    },

                },
                linkBinder: {
                    isService: false,
                    period: {
                        start: usedPeriod.start,
                        finish: null,
                    },
                },
                shopping: {
                    isService: false,
                    period: {
                        start: usedPeriod.start,
                        finish: null,
                    },
                },
                gate: {
                    isService: false,
                    period: {
                        start: usedPeriod.start,
                        finish: null,
                    },
                },
            });
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    const [keyword, setKeyword] = useState();
    const [results, setResults] = useState([]);

    const handleSearchText = e => {
        const {value} = e.target;
        updateField('keyword', value);
        setSearchText(value);
        if (value === '') setCorpList(initialData);
    }

    const updateField = (field, value, update = true) => {
        if (update) onSearch(value);
        if (field === 'keyword') setKeyword(value);
        if (field === 'results') setResults(value);
    }

    const onSearch = text => {
        let results;
        if (searchType === '회사명') results = initialData.filter(data => true === matchName(data.bizName, text));
        else if (searchType === '사업자 번호') results = initialData.filter(data => true === matchName(data.bizNum, text));
        else if (searchType === '사업자명') results = initialData.filter(data => true === matchName(data.ceoName, text));

        // results = results.map(res => ({
        //     ...res,
        //     active: false,
        // }));
        // setResults({results});
        setCorpList(results);
    }

    const matchName = (name, keyword) => {
        name = name.toLowerCase().substring(0, keyword.length);
        if (keyword === '') return false;
        else return name === keyword.toString().toLowerCase();
    }

    const updateText = text => {
        updateField('keyword', text, false);
        updateField('results', []);
    }
    let resultsArr = results['results'];

    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    // let idx = useRef(0);
    // 회사 검색
    const handleSearch = e => {
        let year = searchDate.start && searchDate.start.getFullYear();
        let month = searchDate.start && searchDate.start.getMonth() + 1;
        let day = searchDate.start && searchDate.start.getDate();

        if (e.key === 'Enter') {

            console.info(' ??? ');

            let result = [];

            if (searchType === '회사명') initialData.find(list => list.bizName === searchText && result.push(list));
            else if (searchType === '사업자 번호') initialData.find(list => list.bizNum === searchText && result.push(list));
            else if (searchType === '사업자명') initialData.find(list => list.ceoName === searchText && result.push(list));
            else initialData.forEach(list => (list.type === searchText) && result.push(list));

            if (result.length > 0) {
                setCorpList(result);
                setSearchText('');
            } else if (!searchText) {
                alert('입력한 회사의 정보가 없습니다.');
            }
        }

        // if (e.key === 'ArrowDown') {
        //     setResults({
        //         ...results,
        //         'results': results['results'].map((res, i) => idx.current === i ? { ...res, active: true } : { ...res, active: false }),
        //     });
        //     idx.current += 1;
        //     if (idx.current >= (results['results'] && results['results'].length)) idx.current = 0;
        // }
        //
        // if (e.key === 'ArrowUp') {
        //     setResults({
        //         ...results,
        //         'results': results['results'].map((res, i) => idx.current === i ? { ...res, active: true } : { ...res, active: false }),
        //     });
        //     idx.current -= 1;
        //     if (idx.current < 0) idx.current = results['results'] && results['results'].length - 1;
        // }
        // if (e.key === 'Enter') {
        //     let text;
        //     let result = [];
        //
        //     results['results'].find(data => data.active ? text = data.bizName : text);
        //
        //     if (searchType === '회사명') initialData.find(list => list.bizName === text && result.push(list));
        //     else if (searchType === '사업자 번호') initialData.find(list => list.bizNum === text && result.push(list));
        //     else if (searchType === '사업자명') initialData.find(list => list.ceoName === text && result.push(list));
        //     else initialData.forEach(list => (list.type === searchText) && result.push(list));
        //
        //     if (result.length > 0) {
        //         setCorpList(result);
        //         setSearchText('');
        //     } else if (!searchText || result.length < 1 ) {
        //         alert('입력한 회사의 정보가 없습니다.');
        //     }
        // }
        // if (e.key === 'Escape') setResults([]);
        // if (idx.current >= (results['results'] && results['results'].length)) idx.current = 0;
        // if (idx.current < 0) idx.current = 0;
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
                    logoFile: data.logoFile,
                    previewUrl: data.logoFile,
                });
            }
        });
        setModalVisible(true);
    }

    const fetchData = async () => {
        const res = await axios.get(`${serverProtocol}${serverURL}/corp_list`);
        setCorpList(res.data);
        setInitialData(res.data);
    }

    const onMemberRegister = () => {
        let {bizName, bizNum, bizAddress, bizDetailAddress, ceoName, ceoPhone, managerName, bizTel} = memberInfo;

        if (bizName === '') alert('기업명을 입력해주세요.');
        else if (bizNum === '') alert('사업자 번호를 입력해주세요.');
        else if (bizAddress === '' || bizDetailAddress === '') alert('사업장 주소를 입력해주세요.')
        else if (ceoName === '') alert('대표자 이름을 입력해주세요.');
        else if (ceoPhone === '') alert('대표자 휴대폰 번호를 입력해주세요.');
        else if (managerName === '') alert('담당자 이름을 입력해주세요.');
        else if (bizTel === '') alert('회사 전화번호를 입력해주세요.');
        else if (!usedPeriod.start || !usedPeriod.finish) alert('상품 이용기간을 입력해주세요.');
        else if (serviceType === '') alert('상품의 타입을 선택해주세요.');
        else if (unionService.live.isService && (!unionService.live.period.start || !unionService.live.period.finish)) alert('라이브방송의 이용기간을 입력해주세요.');
        else if (unionService.linkBinder.isService && (!unionService.linkBinder.period.start || !unionService.linkBinder.period.finish)) alert('링크바인더의 이용기간을 입력해주세요.');
        else if (unionService.shopping.isService && (!unionService.shopping.period.start || !unionService.shopping.period.finish)) alert('쇼핑몰의 이용기간을 입력해주세요.');
        else if (unionService.gate.isService && (!unionService.gate.period.start || !unionService.gate.period.finish)) alert('출입인증의 이용기간을 입력해주세요.');
        else {
            let params = {
                bizName: bizName,
                bizNum: bizNum,
                bizAddress: bizAddress + bizDetailAddress,
                ceoName: ceoName,
                ceoPhone: ceoPhone,
                managerName: managerName,
                bizTel: bizTel,
            }

            alert('회원정보가 등록되었습니다.');
            window.location.reload();
            console.info('회원 정보 :', params);

        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    // useEffect(() => {
    //     console.info('idx.current : ', idx.current);
    // }, [idx.current]);

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
            onLogoChange={onLogoChange}

            modalVisible={modalVisible}
            handleModalOpen={handleModalOpen}
            handleModalClose={handleModalClose}
            updateCorpData={updateCorpData}

            onMemberRegister={onMemberRegister}


            // AutoComplete
            keyword={keyword}
            results={results}
            updateField={updateField}
            updateText={updateText}
            resultsArr={resultsArr}
        />
    )
}

export default MainContainer;