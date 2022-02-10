import React, {useCallback, useState, useEffect} from 'react';
import RelatedNewsDetailPresenter from "./RelatedNewsDetailPresenter";
import axios from "axios";
import * as constants from "../../../utils/constants";
import {useHistory} from "react-router-dom";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const RelatedNewsDetailContainer = ({ match }) => {
    const history = useHistory();
    const { newsId } = match.params;
    const [tabMenu, setTabMenu] = useState(0);
    const [update, setUpdate] = useState(false);
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
    const handleUpdate = useCallback(() => setUpdate(true), []);
    const goBack = useCallback(() => history.push('/relatedNews'), [history]);
    const onCancel = useCallback(() => setUpdate(false), []);

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

    const fetchData = useCallback(async () => {
        try {
            const { data } = await axios.get(`${serverProtocol}${serverURL}/newsList/${newsId}`);

            setAddNewsInfo({
                thumbnail: data.title,
                thumbnailImage: data.image,
                content: data.content,
                source: data.source,
                date: data.date,
                url: data.url,
                currency: data.currency
            });
        } catch(e) {
            throw new Error(e);
        }
    }, []);

    // 수정내용 저장
    const onSave = useCallback(() => {
        console.info('!!!', addNewsInfo.thumbnail);

        const { thumbnail } = addNewsInfo;
        if (thumbnail === '') {
            alert("뉴스 정보를 모두 입력해주세요.");
            return;
        }
        try {

        } catch(e) {

        }
    }, [addNewsInfo]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.info('!!!', addNewsInfo.thumbnail);
    }, [addNewsInfo.thumbnail]);

    return (
        <RelatedNewsDetailPresenter
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            update={update}
            handleUpdate={handleUpdate}
            goBack={goBack}
            onCancel={onCancel}
            onSave={onSave}
            addNewsInfo={addNewsInfo}
            onNewsInfoChange={onNewsInfoChange}
            thumbnailUpload={thumbnailUpload}
        />
    )
}

export default RelatedNewsDetailContainer;