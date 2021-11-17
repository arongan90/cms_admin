import React, { useState, useEffect } from 'react';
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
    { id: '24_transaction', label: '24시간 거래량', width: 100, align: 'center' },
    { id: '24_prediction', label: '24시간 예측', width: 100, align: 'center' },
];

const CoinInfoContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [coinList, setCoinList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // 코인 추가
    const [addCoinState, setAddCoinState] = useState({
        coinImage: '',
        coinName: '',
        monetaryUnit: '',
        category: 'Stablecoins',
        type: 'general',
        price: '',
        branch: 'Platform',
        platform: '',
        issueVolume: '',
        capitalization: '',
        distribution: '',
        transactionPrice_24: '',
        totalSupply: '',
        fullyDilutedShares: '',
        maxSupply: '',
        explorer: '',
        wallet: '',
        webSite: '',
        sourceCode: '',
        whitePaper: {
            link: '',
            file: null,
        },
        ///////////////////
        sellToken: '',
        approval: 'ETH',
        community: {
            title: '',
            url: '',
        },
        tag: '',
        summary: '',
        relatedNews: '관련 뉴스를 선택해주세요.',
    });
    const handleTabMenu = value => setTabMenu(value);

    const handleChangePage = page => {
        let indexOfLast = page * rowsPerPage;
        let indexOfFirst = indexOfLast - rowsPerPage;

        setCurrentPage(page);
        setCoinList(coinList.slice(indexOfFirst, indexOfLast));
    }

    const handleChangeRowsPerPage = e => {
        setRowsPerPage(+e.target.value);
        setCoinList(coinList.slice(0, e.target.value));
    };

    const fetchData = async () => {
        try {
            const response = await axios.get(`${serverProtocol}${serverURL}/coinList`);

            setCoinList(response.data);
        } catch (e) {
            throw new Error(e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <CoinInfoPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            coinInfoColumns={coinInfoColumns}
            coinList={coinList}
            currentPage={currentPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            rowsPerPage={rowsPerPage}
        />
    )
}

export default CoinInfoContainer;