import React, { useState, useCallback, useEffect } from 'react';
import RecentNewsPresentation from "./RecentNewsPresentation";
import * as constants from "../../../utils/constants";
import SendRequest from "../../../utils/SendRequest";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const RecentNewsContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [newsList, setNewsList] = useState([]);
    const [newsData, setNewsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const handleTabMenu = value => setTabMenu(value);
    const handleChangePage = useCallback(page => {
        let indexOfLast = page * 5;
        let indexOfFirst = indexOfLast - 5;

        setCurrentPage(page);
        setNewsList(newsData.slice(indexOfFirst, indexOfLast));
    }, [newsData]);

    const fetchData = useCallback(async () => {
        try {
            const { data } = await SendRequest().get(`${serverProtocol}${serverURL}/recentNews`);
            setNewsData(data);
            setNewsList(data.slice(0, 5));
        } catch (e) {
            throw new Error(e);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.info('newsList : ', newsList);
        console.info('newsData : ', newsData);
    }, [newsList]);

    return (
        <RecentNewsPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            newsList={newsList}
            totalCount={newsData.length}
            currentPage={currentPage}
            handleChangePage={handleChangePage}
        />
    )
}

export default RecentNewsContainer;