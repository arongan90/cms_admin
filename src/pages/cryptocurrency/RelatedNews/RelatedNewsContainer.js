import React, {useEffect, useState, useCallback} from 'react';
import RelatedNewsPresentation from "./RelatedNewsPresentation";
import axios from "axios";
import * as constants from "../../../utils/constants";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const newsTableColumns = [
    { id: 'id', label: '번호', width: 100, align: 'center' },
    { id: 'content', label: '내용', align: 'left' },
];

const RelatedNewsContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [newsList, setNewsList] = useState([]);
    const [addNewsInfo, setAddNewsInfo] = useState({
        thumbnail: '',
        thumbnailImage: {},
        content: '',
        source: '',
        date: '',
        url: '',
        currency: '',
    });

    const handleTabMenu = useCallback(value => setTabMenu(value), []);
    const handleAddNews = useCallback(() => setTabMenu(1), []);

    const fetchData = useCallback(async () => {
        try {
            const newsData = await axios.get(`${serverProtocol}${serverURL}/newsList`);
            setNewsList(newsData.data);
        } catch(e) {
            throw new Error(e);
        }
    }, []);

    // 썸네일
    const thumbnailUpload = useCallback(e => {
        let reader = new FileReader();
        let file = e.target.files[0];
        console.info(file);
        reader.onload = () => {
            setAddNewsInfo({
                ...addNewsInfo,
                thumbnailImage: reader.result
            });
        }
        reader.readAsDataURL(file);
    }, [addNewsInfo]);

    // 뉴스 추가 onChange
    const onNewsInfoChange = useCallback(e => {
        const { name, value } = e.target;
        setAddNewsInfo({
            ...addNewsInfo,
            [name]: value
        });
    }, [addNewsInfo]);

    // 뉴스 등록 취소
    const onCancel = useCallback(() => {
        setTabMenu(0);
        setAddNewsInfo({
            thumbnail: '',
            thumbnailImage: {},
            content: '',
            source: '',
            date: '',
            url: '',
            currency: '',
        });
    }, []);

    // 뉴스 등록
    const onRegister = useCallback(() => {
        const { thumbnail, content, source, date, url, currency } = addNewsInfo;

        if (thumbnail === '' || content === '' || source === '' || date === '' || url === '' || currency === '') {
            alert('등록하실 뉴스의 정보를 모두 입력해주세요.');
            return;
        }
        try {
            console.info('등록')
        } catch(e) {

        }
    }, []);



    useEffect(() => {
        fetchData();
    }, []);

    return (
        <RelatedNewsPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            handleAddNews={handleAddNews}
            newsTableColumns={newsTableColumns}
            newsList={newsList}

            addNewsInfo={addNewsInfo}
            onNewsInfoChange={onNewsInfoChange}
            thumbnailUpload={thumbnailUpload}

            onCancel={onCancel}
            onRegister={onRegister}
        />
    )
}

export default RelatedNewsContainer;