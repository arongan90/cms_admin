import React, {useCallback, useState, useEffect} from 'react';
import FaqPresenter from "./FaqPresenter";
import SendRequest from "../../../utils/SendRequest";
import * as constants from "../../../utils/constants";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const FaqContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [faqList, setFaqList] = useState([]);

    // Header Tab 매뉴
    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    // FAQ 데이터 불러오기
    const fetchFaqList = useCallback(async () => {
        try {
            const { data } = await SendRequest().get(`${serverProtocol}${serverURL}/faq`);
            setFaqList(data);
        } catch(e) {
            throw new Error(e);
        }
    }, []);

    useEffect(() => {
        fetchFaqList();
    }, []);


    return (
        <FaqPresenter
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            faqList={faqList}
        />
    )
}

export default FaqContainer;