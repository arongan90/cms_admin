import React, { useState, useEffect, useCallback } from 'react';
import CoinInfoPresentation from "./CoinInfoPresentation";
import axios from "axios";
import * as constants from "../../../utils/constants";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const coinInfoColumns = [
    { id: 'ranking', label: '순위', width: 10, align: 'center'  },
    { id: 'coinName', label: '코인', width: 150, align: 'left'  },
    { id: 'currentPrice', label: '현재가(₩)', width: 80, align: 'right' },
    { id: 'chart', label: '시세 차트', width: 100, align: 'center' },
    { id: 'transactionPrice_24', label: '24시간 거래량', width: 100, align: 'center' },
    { id: 'prediction_24', label: '24시간 예측', width: 100, align: 'center' },
];

const CoinInfoContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [coinList, setCoinList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchCoinName, setSeacrhCoinName] = useState("");
    const [chipState, setChipState] = useState({
        category: [],
        explorer: [],
        wallet: [],
        community: [],
        tag: [],
    });

    // 코인 추가
    const [addCoinState, setAddCoinState] = useState({
        coinImage: null,
        coinName: '',
        monetaryUnit: '',
        category: 'Stablecoins',
        type: 'general',
        price: '',
        priceUnit: 'KRW',
        branch: 'Platform',
        platform: '',
        issueVolume: '',
        marketCap: '',
        marketCapUnit: 'KRW',
        distribution: '',
        transactionPrice_24: '',
        transactionPriceUnit: 'KRW',
        totalSupply: '',
        fullyDilutedShares: '',
        fullyDilutedSharesUnit: 'KRW',
        maxSupply: '',
        explorer: '',
        wallet: '',
        webSite: '',
        sourceCode: '',
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
    });
    const handleTabMenu = value => setTabMenu(value);
    const handleChangePage = page => {
        let indexOfLast = page * rowsPerPage;
        let indexOfFirst = indexOfLast - rowsPerPage;

        setCurrentPage(page);
        setCoinList(coinList.slice(indexOfFirst, indexOfLast));
    }

    // 코인 검색 onChange
    const onCoinNameChange = useCallback(e => setSeacrhCoinName(e.target.value), []);

    const handleChangeRowsPerPage = e => {
        setRowsPerPage(e.target.value);
        setCoinList(coinList.slice(0, e.target.value));
    };

    // 코인 추가 onChange
    const onCoinChange = (e, type) => {
        const { name, value } = e.target;

        let file;
        let reader = new FileReader();
        switch(type) {
            case "COIN_IMAGE":
                file = e.target.files[0];
                reader.onload = () => {
                    setAddCoinState({
                        ...addCoinState,
                        coinImage: reader.result
                    });
                }
                reader.readAsDataURL(file);
                break;
            case "COIN_NAME":
            case "MONETARY_UNIT":
            case "CATEGORY":
            case "TYPE":
            case "PRICE":
            case "PRICE_UNIT":
            case "BRANCH":
            case "PLATFORM":
            case "ISSUE_VOLUME":
            case "MARKET_CAP":
            case "MARKET_CAP_UNIT":
            case "DISTRIBUTION":
            case "TRANSACTION_PRICE_24":
            case "TRANSACTION_PRICE_UNIT":
            case "TOTAL_SUPPLY":
            case "FULLY_DILUTED_SHARES":
            case "FULLY_DILUTED_SHARES_UNIT":
            case "MAX_SUPPLY":
            case "EXPLORER":
            case "WALLET":
            case "WEB_SITE":
            case "SOURCE_CODE":
            case "TAG":
            case "SUMMARY":
                setAddCoinState({
                    ...addCoinState,
                    [name]: value,
                });
                break;
            case "WHITE_PAPER_LINK":
                setAddCoinState({
                    ...addCoinState,
                    whitePaper: {
                        ...addCoinState.whitePaper,
                        link: value,
                    }
                });
                break;
            case "WHITE_PAPER_FILE":
                file = e.target.files[0];
                setAddCoinState({
                    ...addCoinState,
                    whitePaper: {
                        ...addCoinState.whitePaper,
                        file: file,
                    }
                });
                break;
            case "COMMUNITY":
                setAddCoinState({
                    ...addCoinState,
                    community: {
                        ...addCoinState.community,
                        [name]: value,
                    }
                });
                break;
        }
    }

    // Chip 추가
    const handleAddChips = type => {
        switch (type) {
            case 'community':
                if (addCoinState[type].title === "" || addCoinState[type].title === "") {
                    alert('커뮤니티 명칭 및 URL을 입력해주세요.');
                    return;
                } else if (!!chipState[type].find(chip => chip === addCoinState[type].url)) {
                    alert(`이미 ${addCoinState[type].url} 을/를 추가하셨습니다.`);
                    return;
                }
                setChipState({
                    ...chipState,
                    [type]: [...chipState[type], addCoinState[type].url]
                });
                setAddCoinState({
                    ...addCoinState,
                    community: {
                        title: '',
                        url: '',
                    }
                });
                break;
            case 'explorer':
            case 'wallet':
            case 'tag':
                if (!!chipState[type].find(chip => chip === addCoinState[type])) {
                    alert(`이미 ${addCoinState[type]} 을/를 추가하셨습니다.`);
                    return;
                }
                setChipState({
                    ...chipState,
                    [type]: [...chipState[type], addCoinState[type]]
                });
                setAddCoinState({
                    ...addCoinState,
                    [type]: '',
                });
                break;
            case 'category':
                if (!!chipState[type].find(chip => chip === addCoinState[type])) {
                    alert(`이미 ${addCoinState[type]} 을/를 추가하셨습니다.`);
                    return;
                }
                setChipState({
                    ...chipState,
                    [type]: [...chipState[type], addCoinState[type]]
                });
                break;
        }
    }

    // Chip 제거
    const handleDeleteChips = (item, type) => {
        setChipState({
            ...chipState,
            [type]: chipState[type].filter(chip => chip !== item)
        });
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`${serverProtocol}${serverURL}/coinList`);

            setCoinList(response.data);
        } catch (e) {
            throw new Error(e);
        }
    }

    // 취소
    const onCancel = useCallback(() => {
        handleTabMenu(0);
        setAddCoinState({
            coinImage: null,
            coinName: '',
            monetaryUnit: '',
            category: '카테고리 선택',
            type: 'general',
            price: '',
            priceUnit: 'KRW',
            branch: 'Platform',
            platform: '',
            issueVolume: '',
            marketCap: '',
            marketCapUnit: 'KRW',
            distribution: '',
            transactionPrice_24: '',
            transactionPriceUnit: 'KRW',
            totalSupply: '',
            fullyDilutedShares: '',
            fullyDilutedSharesUnit: 'KRW',
            maxSupply: '',
            explorer: '',
            wallet: '',
            webSite: '',
            sourceCode: '',
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
        });
    }, []);

    // 저장
    const onSave = useCallback(() => {}, []);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <CoinInfoPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}

            coinInfoColumns={coinInfoColumns}
            coinList={coinList}
            searchCoinName={searchCoinName}
            onCoinNameChange={onCoinNameChange}

            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}

            addCoinState={addCoinState}
            onCoinChange={onCoinChange}
            chipState={chipState}
            handleAddChips={handleAddChips}
            handleDeleteChips={handleDeleteChips}

            onCancel={onCancel}
            onSave={onSave}
        />
    )
}

export default CoinInfoContainer;