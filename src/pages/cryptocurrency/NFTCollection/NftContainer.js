import React, { useState, useEffect } from 'react';
import NftPresentation from "./NftPresentation";
import axios from "axios";
import * as constants from "../../../utils/constants";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const collectionTableColumns = [
    { id: 'ranking', label: '순위', width: 10, align: 'center' },
    { id: 'collectionName', label: '콜렉션명', width: 200, align: 'center' },
    { id: 'assetsCount', label: '자산 수', width: 50, align: 'center' }, // format: (value) => value.toLocaleString('ko-KR')
    { id: 'totalAmount', label: '콜렉션 총액(₩)', width: 150, align: 'center' }, // format: (value) => value.toLocaleString('ko-KR'),
    { id: 'transactionVolume_7d', label: '7일 거래량', width: 150, align: 'center' },
    { id: 'sell_7d', label: '판매(7일)', width: 50, align: 'right' },
    { id: 'totalTransactionAmount', label: '총 거래금액', width: 150, align: 'center' },
    { id: 'chart_7d', label: '최근 7일 그래프', width: 100, align: 'center' },
];

const NftContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [collectionList, setCollectionList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [addCollectionInfo, setAddCollectionInfo] = useState({
        collectionName: '',
        assetsCount: '',
        totalAmount: '',
        totalAmountUnit: 'KRW',
        totalTransactionAmount: '',
        totalTransactionAmountUnit: 'KRW',
        linkUrl: '',
    });

    const handleTabMenu = value => setTabMenu(value);
    const handleChangePage = (e, newPage) => setCurrentPage(newPage);
    const onCollectionChange = e => {
        const { name, value } = e.target;
        setAddCollectionInfo({
            ...addCollectionInfo,
            [name]: value
        });
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`${serverProtocol}${serverURL}/nftList`);
            setCollectionList(response.data);
        } catch (e) {
            throw new Error(e);
        }
    }

    const handleCancel = () => {
        setTabMenu(0);
        setAddCollectionInfo({
            collectionName: '',
            assetsCount: '',
            totalAmount: '',
            totalAmountUnit: 'KRW',
            totalTransactionAmount: '',
            totalTransactionAmountUnit: 'KRW',
            linkUrl: '',
        });
    }
    const handleAddCollection = () => {
        console.info('콜렉션 추가 정보 ::: ', addCollectionInfo);
    }

    useEffect(() => {
        console.info('addCollectionInfo ::: ', addCollectionInfo);
    }, [addCollectionInfo]);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <NftPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            collectionList={collectionList}
            collectionTableColumns={collectionTableColumns}
            currentPage={currentPage}
            handleChangePage={handleChangePage}
            addCollectionInfo={addCollectionInfo}
            onCollectionChange={onCollectionChange}
            handleCancel={handleCancel}
            handleAddCollection={handleAddCollection}
        />
    )
}

export default NftContainer;