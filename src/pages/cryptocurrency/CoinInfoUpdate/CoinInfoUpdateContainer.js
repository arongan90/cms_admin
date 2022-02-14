import React, {useEffect, useState, useCallback} from 'react';
import {useHistory} from "react-router-dom";
import CoinInfoUpdatePresentation from "./CoinInfoUpdatePresentation";
import axios from "axios";
import * as constants from "../../../utils/constants";

const serverProtocol = constants.config.PROTOCOL;
const serverUrl = constants.config.URL;

const CoinInfoUpdateContainer = ({ match }) => {
    const history = useHistory();
    const {coinId} = match.params;

    const [tabMenu, setTabMenu] = useState(0);
    const [chipState, setChipState] = useState({
        category: [],
        explorer: [],
        wallet: [],
        community: [],
        tag: [],
    });

    // 코인 수정
    const [updateCoinState, setUpdateCoinState] = useState({
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
    const handleTabMenu = value => setTabMenu(value);
    const onDelete = async () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            try {
                 console.info("삭제 진행 ");
            } catch(e) {
                throw new Error(e);
            }
        }
    }
    const goBack = useCallback(() => history.push('/coinInfo'), [history]);
    const onSave = useCallback(() => {

    }, []);

    useEffect(() => {
        const unblock = history.block("정말 이동하시겠습니까?");
        return () => unblock();
    }, [history]);

    const onCoinChange = (e, type) => {
        const { name, value } = e.target;

        let file;
        let reader = new FileReader();
        switch(type) {
            case "COIN_IMAGE":
                file = e.target.files[0];
                reader.onload = () => {
                    setUpdateCoinState({
                        ...updateCoinState,
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
                setUpdateCoinState({
                    ...updateCoinState,
                    [name]: value,
                });
                break;
            case "WHITE_PAPER_LINK":
                setUpdateCoinState({
                    ...updateCoinState,
                    whitePaper: {
                        ...updateCoinState.whitePaper,
                        link: value,
                    }
                });
                break;
            case "WHITE_PAPER_FILE":
                file = e.target.files[0];
                setUpdateCoinState({
                    ...updateCoinState,
                    whitePaper: {
                        ...updateCoinState.whitePaper,
                        file: file,
                    }
                });
                break;
            case "COMMUNITY":
                setUpdateCoinState({
                    ...updateCoinState,
                    community: {
                        ...updateCoinState.community,
                        [name]: value,
                    }
                });
                break;
        }
    }

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${serverProtocol}${serverUrl}/coinList/${coinId}`);

            setUpdateCoinState({
                ...updateCoinState,
                coinImage: null,
                coinName: data.coinName,
                monetaryUnit: data.monetaryUnit,
                type: 'general',
                price: data.price,
                priceUnit: 'KRW',
                branch: data.branch,
                platform: data.platform,
                issueVolume: data.issueVolume,
                marketCap: data.marketCap,
                marketCapUnit: 'KRW',
                distribution: data.distribution,
                transactionPrice_24: data.transactionPrice_24.price,
                transactionPriceUnit: 'KRW',
                totalSupply: data.totalSupply,
                fullyDilutedShares: data.fullyDilutedShares,
                fullyDilutedSharesUnit: 'KRW',
                maxSupply: data.maxSupply,
                explorer: '',
                wallet: '',
                webSite: data.webSite,
                sourceCode: data.sourceCode,
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
            });
            setChipState({
                category: data.category,
                explorer: data.explorer,
                wallet: data.wallet,
                community: data.community,
                tag: data.tag,
            });

        } catch(e) {
            throw new Error(e);
        }
    }

    // Chip 추가
    const handleAddChips = type => {
        switch (type) {
            case "category":
                if (updateCoinState[type] === "카테고리 선택") {
                    alert('카테고리를 선택해주세요.');
                    return;
                } else if (!!chipState[type].find(chip => chip === updateCoinState[type])) {
                    alert(`이미 ${updateCoinState[type]} 을/를 추가하셨습니다.`);
                    return;
                }
                setChipState({
                    ...chipState,
                    [type]: [...chipState[type], updateCoinState[type]]
                });
                break;
            case "community":
                if (updateCoinState[type].title === "" || updateCoinState[type].title === "") {
                    alert('커뮤니티 명칭 및 URL을 입력해주세요.');
                    return;
                }
                if (!!chipState[type].find(chip => chip === updateCoinState[type].url)) {
                    alert(`이미 ${updateCoinState[type].url} 을/를 추가하셨습니다.`);
                    return;
                }
                setUpdateCoinState({
                    ...updateCoinState,
                    [type]: [...chipState[type], updateCoinState[type].url]
                });
                setUpdateCoinState({
                    ...updateCoinState,
                    community: {
                        title: '',
                        url: '',
                    }
                });
                break;
            case "explorer":
            case "wallet":
            case "tag":
                if (!!chipState[type].find(chip => chip === updateCoinState[type])) {
                    alert(`이미 ${updateCoinState[type]} 을/를 추가하셨습니다.`);
                    return;
                }
                setChipState({
                    ...chipState,
                    [type]: [...chipState[type], updateCoinState[type]]
                });
                setUpdateCoinState({
                    ...updateCoinState,
                    [type]: '',
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

    // useEffect(() => {
    //     console.info('chipState', chipState);
    // }, [chipState]);
    //
    // useEffect(() => {
    //     console.info('updateCoinState', updateCoinState);
    // }, [updateCoinState]);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <CoinInfoUpdatePresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}

            updateCoinState={updateCoinState}
            onCoinChange={onCoinChange}
            chipState={chipState}
            handleAddChips={handleAddChips}
            handleDeleteChips={handleDeleteChips}
            onDelete={onDelete}
            goBack={goBack}
            onSave={onSave}
        />
    )
}

export default CoinInfoUpdateContainer;