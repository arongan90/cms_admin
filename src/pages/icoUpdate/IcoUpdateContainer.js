import React, {useState, useEffect} from 'react';
import IcoUpdatePresentation from "./IcoUpdatePresentation";
import {useHistory} from "react-router-dom";
import axios from "axios";
import * as constants from "../../utils/constants";

const serverProtocol = constants.config.PROTOCOL;
const serverUrl = constants.config.URL;

const IcoUpdateContainer = ({
                                match,
                                }) => {
    const history = useHistory();
    const {icoId} = match.params;

    const [tabMenu, setTabMenu] = useState(0);
    const [updateIcoState, setUpdateIcoState] = useState({
        coinImage: '',
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
    const [chipState, setChipState] = useState({
        approval: [],
        community: [],
        tag: [],
        relatedNews: []
    });


    const handleTabMenu = value => setTabMenu(value);
    const goBack = () => history.goBack();

    // DatePicker 달력 onChange
    const onDateChange = (newValue, name) => setUpdateIcoState({
        ...updateIcoState,
        [name]: newValue
    });
    // ICO 수정 페이지 input 상태 onChange
    const onIcoChange = (e, type) => {
        const { name, value } = e.target;

        let file;
        let reader = new FileReader();
        switch(type) {
            case "COIN_IMAGE":
                file = e.target.files[0];
                reader.onload = () => {
                    setUpdateIcoState({
                        ...updateIcoState,
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
                setUpdateIcoState({
                    ...updateIcoState,
                    [name]: value,
                });
                break;
            case "WHITE_PAPER_LINK":
                setUpdateIcoState({
                    ...updateIcoState,
                    whitePaper: {
                        ...updateIcoState.whitePaper,
                        link: value,
                    }
                });
                break;
            case "WHITE_PAPER_FILE":
                file = e.target.files[0];
                setUpdateIcoState({
                    ...updateIcoState,
                    whitePaper: {
                        ...updateIcoState.whitePaper,
                        file: file,
                    }
                });
                break;
            case "COMMUNITY":
                setUpdateIcoState({
                    ...updateIcoState,
                    community: {
                        ...updateIcoState.community,
                        [name]: value,
                    }
                });
                break;
        }
    }

    // Chip 추가
    const handleAddChips = type => {
        if (type === "community") {
            if (updateIcoState[type].title === "" || updateIcoState[type].title === "") {
                alert('커뮤니티 명칭 및 URL을 입력해주세요.');
                return;
            }
            if (!!chipState[type].find(chip => chip === updateIcoState[type].url)) {
                alert(`이미 ${updateIcoState[type].url} 을/를 추가하셨습니다.`);
                return;
            }
            setChipState({
                ...chipState,
                [type]: [...chipState[type], updateIcoState[type].url]
            });
            setUpdateIcoState({
                ...updateIcoState,
                community: {
                    title: '',
                    url: '',
                }
            });
        } else if (type === "approval" || type === "relatedNews") {
            if (updateIcoState[type] === "관련 뉴스를 선택해주세요.") {
                alert('관련 뉴스를 선택 후 추가버튼을 눌러주세요.');
                return;
            }
            if (!!chipState[type].find(chip => chip === updateIcoState[type])) {
                alert(`이미 ${updateIcoState[type]} 을/를 추가하셨습니다.`);
                return;
            }
            setChipState({
                ...chipState,
                [type]: [...chipState[type], updateIcoState[type]]
            });
        } else {
            if (!!chipState[type].find(chip => chip === updateIcoState[type])) {
                alert(`이미 ${updateIcoState[type]} 을/를 추가하셨습니다.`);
                return;
            }
            setChipState({
                ...chipState,
                [type]: [...chipState[type], updateIcoState[type]]
            });
            setUpdateIcoState({
                ...updateIcoState,
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

    const onDelete = () => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            console.info('삭제');
        }
    }

    const onSave = () => {
        console.info('저장');
    }

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${serverProtocol}${serverUrl}/icoList/${icoId}`);

            console.info(data);

            setUpdateIcoState({
                coinImage: '',
                coinName: data.coinName,
                monetaryUnit: '',
                category: data.category,
                type: data.type,
                initialPrice: data.initialPrice,
                branch: data.branch,
                platform: '',
                state: 'schedule',
                startDate: data.startDate,
                finishDate: data.finishDate,
                hardCap: data.hardCap,
                softCap: data.softCap,
                hardCapMonetaryUnit: '',
                softCapMonetaryUnit: '',
                goal: data.goal,
                sellToken: data.sellToken,
                webSite: data.webSite,
                approval: 'ETH',
                whitePaper: {
                    link: data.whitePaper,
                    file: null,
                },
                community: {
                    title: '',
                    url: '',
                },
                tag: '',
                summary: data.summary,
                relatedNews: '관련 뉴스를 선택해주세요.',
            });

            setChipState({
                approval: data.approval,
                community: data.community.map(list => list.url),
                tag: data.tag,
                relatedNews: data.relatedNews
            });
        } catch(e) {
            throw new Error(e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.info('아씨오인포 : ', chipState.community);
    }, [chipState]);


    return (
        <IcoUpdatePresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            updateIcoState={updateIcoState}
            onIcoChange={onIcoChange}
            onDateChange={onDateChange}
            handleAddChips={handleAddChips}
            handleDeleteChips={handleDeleteChips}
            chipState={chipState}
            onDelete={onDelete}
            onSave={onSave}
            goBack={goBack}
        />
    )
}

export default IcoUpdateContainer;