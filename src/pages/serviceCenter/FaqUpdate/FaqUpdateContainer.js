import React, { useEffect, useState, useCallback } from 'react';
import FaqUpdatePresenter from "./FaqUpdatePresenter";
import * as constants from "../../../utils/constants";
import SendRequest from "../../../utils/SendRequest";
import {useHistory} from "react-router-dom";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const FaqUpdateContainer = ({ match }) => {
    const { faqId } = match.params;
    const history = useHistory();
    const [tabMenu, setTabMenu] = useState(0);
    const [faqData, setFaqData] = useState({
       title: '',
       content: ''
    });

    // Header Tab 매뉴
    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    // Input onChange
    const onFaqInputChange = useCallback(e => {
        const { name, value } = e.target;

        setFaqData({
            ...faqData,
            [name]: value
        });
    }, [faqData]);

    // 수정할 데이터
    const getFaqUpdate = useCallback(async () => {
        try {
            const { data } = await SendRequest().get(`${serverProtocol}${serverURL}/faq/${faqId}`);
            setFaqData({
                title: data.title,
                content: data.content,
            });

        } catch(e) {
            throw new Error(e);
        }
    }, []);

    // 취소
    const onCancel = useCallback(() => {
        history.go(-1);
    }, [history]);

    // 저장
    const onSaveFaq = useCallback(async () => {
        if (faqData.title === "" || faqData.content === "") {
            alert('제목과 내용을 모두 입력해주세요.');
            return;
        }
        try {

        } catch(e) {

        }
    }, [faqData]);

    useEffect(() => {
        getFaqUpdate();
    }, []);

    useEffect(() => {
        console.info('faqData', faqData);
    }, [faqData]);


    return (
        <FaqUpdatePresenter
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            faqData={faqData}
            onFaqInputChange={onFaqInputChange}
            onSaveFaq={onSaveFaq}
            onCancel={onCancel}
        />
    )
}

export default FaqUpdateContainer;