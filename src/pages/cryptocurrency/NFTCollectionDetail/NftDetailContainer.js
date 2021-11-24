import React, {useEffect, useState} from 'react';
import NftDetailPresentation from "./NftDetailPresentation";
import axios from "axios";
import * as constants from "../../../utils/constants";
import {useHistory} from "react-router-dom";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const NftDetailContainer = ({ match }) => {
    const history = useHistory();
    const { nftId } = match.params;
    const [tabMenu, setTabMenu] = useState(0);
    const [nftUpdate, setNftUpdate] = useState(false);
    const [collectionInfo, setCollectionInfo] = useState({
        collectionName: '',
        assetsCount: '',
        totalAmount: '',
        totalAmountUnit: 'KRW',
        totalTransactionAmount: '',
        totalTransactionAmountUnit: 'KRW',
        linkUrl: '',
    });

    const handleTabMenu = value => setTabMenu(value);
    const handleNftUpdate = () => setNftUpdate(true);
    const goBack = () => history.goBack();
    const onCollectionChange = e => {
        const { name, value } = e.target;
        setCollectionInfo({
            ...collectionInfo,
            [name]: value
        });
    }
    const handleCancel = () => {
        setNftUpdate(false);
    }
    const handleNftSave = () => {
        setNftUpdate(false);
    }
    const handleNftDelete = () => {
        if (window.confirm('정말 삭제하시겠습니까?')) {

            console.info('삭제 진행');
            setNftUpdate(false);
        }
    }

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${serverProtocol}${serverURL}/nftList/${nftId}`);

            setCollectionInfo({
                collectionName: data.collectionName,
                assetsCount: data.assetsCount,
                totalAmount: data.totalAmount,
                totalAmountUnit: data.totalAmountUnit,
                totalTransactionAmount: data.totalTransactionAmount,
                totalTransactionAmountUnit: data.totalTransactionAmountUnit,
                linkUrl: data.linkUrl,
            });
        } catch (e) {
            throw new Error(e);
        }
    }

    useEffect(() => {
        console.info('collectionInfo ::: ', collectionInfo);
    }, [collectionInfo]);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <NftDetailPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            goBack={goBack}
            handleNftUpdate={handleNftUpdate}
            onCollectionChange={onCollectionChange}
            nftUpdate={nftUpdate}
            collectionInfo={collectionInfo}
            handleCancel={handleCancel}
            handleNftSave={handleNftSave}
            handleNftDelete={handleNftDelete}
        />
    )
}

export default NftDetailContainer;