import React, {useState} from 'react';
import IcoInfoUpdatePresentation from "./IcoInfoUpdatePresentation";

const IcoInfoUpdateContainer = () => {
    const [addIcoState, setAddIcoState] = useState({
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

    // DatePicker 달력 onChange
    const onDateChange = (newValue, name) => setAddIcoState({
        ...addIcoState,
        [name]: newValue
    });
    // ICO 추가 페이지 input 상태 onChange
    const onIcoChange = (e, type) => {
        const { name, value } = e.target;

        let file = e.target.files[0] && e.target.files[0];
        let reader = new FileReader();
        switch(type) {
            case "COIN_IMAGE":
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
    return (
        <IcoInfoUpdatePresentation
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

export default IcoInfoUpdateContainer;