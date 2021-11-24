import React, { useState, useEffect } from 'react';
import IcoPresentation from "./IcoPresentation";
import axios from "axios";
import * as constants from "../../utils/constants";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const icoTableColumns = [
    { id: 'ai_recommend', label: 'AI추천', width: 80, align: 'center',  },
    { id: 'coinName', label: '코인', width: 150, align: 'center',  },
    { id: 'price', label: '가격(₩)', width: 100, align: 'center', }, // format: (value) => value.toLocaleString('ko-KR')
    { id: 'type', label: '유형', width: 50, align: 'center', }, // format: (value) => value.toLocaleString('ko-KR'),
    { id: 'start_date', label: '시작일', width: 150, align: 'right', format: (value) => value.toLocaleString('ko-KR') },
    { id: 'finish_date', label: '종료일', width: 150, align: 'right', format: (value) => value.toLocaleDateString('ko-KR', { year: '2-digit', month: 'numeric', day: 'numeric', }).slice(0, -1) },
    { id: 'period', label: '마감까지', width: 80, align: 'right', },
    { id: 'goal', label: '목표(₩)', width: 100, align: 'right', },
];

const IcoContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [icoList, setIcoList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchCoinName, setSearchCoinName] = useState('');
    const [chipState, setChipState] = useState({
        approval: [],
        community: [],
        tag: [],
        relatedNews: []
    });

    const handleTabMenu = value => setTabMenu(value);
    const onCoinNameChange = e => setSearchCoinName(e.target.value);

    const handleChangePage = page => {
        let indexOfLast = page * rowsPerPage;
        let indexOfFirst = indexOfLast - rowsPerPage;

        setCurrentPage(page);
        setIcoList(icoList.slice(indexOfFirst, indexOfLast));
    }

    const handleChangeRowsPerPage = e => {
        setRowsPerPage(+e.target.value);
        setIcoList(icoList.slice(0, e.target.value));
    };

    const fetchData = async () => {
        try {
            const response = await axios.get(`${serverProtocol}${serverURL}/icoList`);
            setIcoList(response.data);
        } catch (e) {
            throw new Error(e);
        }
    }

    // ICO 추가
    const [addIcoState, setAddIcoState] = useState({
        coinImage: null,
        coinName: '',
        monetaryUnit: '',
        category: 'Stablecoins',
        type: 'general',
        initialPrice: 0.10,
        branch: 'Platform',
        platform: '',
        state: 'schedule',
        startDate: new Date(),
        finishDate: new Date(),
        hardCap: '',
        softCap: '',
        hardCapMonetaryUnit: '',
        softCapMonetaryUnit: '',
        goal: '',
        sellToken: '',
        webSite: '',
        approval: 'ETH',
        whitePaper: {
            link: '',
            file: null,
        },
        community: {
            title: '',
            url: '',
        },
        tag: '',
        summary: '',
        relatedNews: '관련 뉴스를 선택해주세요.',
    });

    // DatePicker 달력 onChange
    const onDateChange = (newValue, name) => setAddIcoState({
        ...addIcoState,
        [name]: newValue
    });
    // ICO 추가 페이지 input 상태 onChange
    const onIcoChange = (e, type) => {
        const { name, value } = e.target;

        let file;
        let reader = new FileReader();
        switch(type) {
            case "COIN_IMAGE":
                file = e.target.files[0];
                reader.onload = () => {
                    setAddIcoState({
                        ...addIcoState,
                        coinImage: reader.result
                    });
                }
                reader.readAsDataURL(file);
                break;
            case "COIN_NAME":
            case "MONETARY_UNIT":
            case "CATEGORY":
            case "TYPE":
            case "INITIAL_PRICE":
            case "BRANCH":
            case "PLATFORM":
            case "STATE":
            case "HARD_CAP":
            case "SOFT_CAP":
            case "HARD_CAP_MONETARY_UNIT":
            case "SOFT_CAP_MONETARY_UNIT":
            case "GOAL":
            case "SELL_TOKEN":
            case "WEB_SITE":
            case "APPROVAL":
            case "TAG":
            case "SUMMARY":
            case "RELATED_NEWS":
                setAddIcoState({
                    ...addIcoState,
                    [name]: value,
                });
                break;
            case "WHITE_PAPER_LINK":
                setAddIcoState({
                    ...addIcoState,
                    whitePaper: {
                        ...addIcoState.whitePaper,
                        link: value,
                    }
                });
                break;
            case "WHITE_PAPER_FILE":
                file = e.target.files[0];
                setAddIcoState({
                    ...addIcoState,
                    whitePaper: {
                        ...addIcoState.whitePaper,
                        file: file,
                    }
                });
                break;
            case "COMMUNITY":
                setAddIcoState({
                    ...addIcoState,
                   community: {
                        ...addIcoState.community,
                        [name]: value,
                   }
                });
                break;
        }
    }

    // Chip 추가
    const handleAddChips = type => {
        if (type === "community") {
            if (addIcoState[type].title === "" || addIcoState[type].title === "") {
                alert('커뮤니티 명칭 및 URL을 입력해주세요.');
                return;
            }
            if (!!chipState[type].find(chip => chip === addIcoState[type].url)) {
                alert(`이미 ${addIcoState[type].url} 을/를 추가하셨습니다.`);
                return;
            }
            setChipState({
                ...chipState,
                [type]: [...chipState[type], addIcoState[type].url]
            });
            setAddIcoState({
                ...addIcoState,
                community: {
                    title: '',
                    url: '',
                }
            });
        } else if (type === "approval" || type === "relatedNews") {
            if (addIcoState[type] === "관련 뉴스를 선택해주세요.") {
                alert('관련 뉴스를 선택 후 추가버튼을 눌러주세요.');
                return;
            }
            if (!!chipState[type].find(chip => chip === addIcoState[type])) {
                alert(`이미 ${addIcoState[type]} 을/를 추가하셨습니다.`);
                return;
            }
            setChipState({
                ...chipState,
                [type]: [...chipState[type], addIcoState[type]]
            });
        } else {
            if (!!chipState[type].find(chip => chip === addIcoState[type])) {
                alert(`이미 ${addIcoState[type]} 을/를 추가하셨습니다.`);
                return;
            }
            setChipState({
                ...chipState,
                [type]: [...chipState[type], addIcoState[type]]
            });
            setAddIcoState({
                ...addIcoState,
                [type]: '',
            });
        }
    }
    // Chip 제거
    const handleDeleteChips = (item, type) => {
        setChipState({
            ...chipState,
            [type]: chipState[type].filter(chip => chip !== item)
        });
    }
    const onCancel = () => window.location.reload();
    const onSave = () => {
        console.info('저장');
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <IcoPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            searchCoinName={searchCoinName}
            onCoinNameChange={onCoinNameChange}
            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            icoTableColumns={icoTableColumns}
            icoList={icoList}

            // ICO 추가
            addIcoState={addIcoState}
            onIcoChange={onIcoChange}
            onDateChange={onDateChange}
            handleAddChips={handleAddChips}
            handleDeleteChips={handleDeleteChips}
            chipState={chipState}
            onCancel={onCancel}
            onSave={onSave}
        />
    )
}

export default IcoContainer;