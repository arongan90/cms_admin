import React, {useEffect, useState} from 'react';
import RelatedNewsPresentation from "./RelatedNewsPresentation";
import * as constants from "../../../utils/constants";
import axios from "axios";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const newsTableColumns = [
    { id: 'id', label: '번호', width: 100, align: 'center' },
    { id: 'content', label: '내용', align: 'left' },
];

const RelatedNewsContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [newsList, setNewsList] = useState([]);

    const handleTabMenu = value => setTabMenu(value);
    const handleAddNews = () => setTabMenu(1);

    const fetchData = async () => {
        try {
            const newsData = await axios.get(`${serverProtocol}${serverURL}/newsList`);
            setNewsList(newsData.data);
        } catch(e) {
            throw new Error(e);
        }
    }

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
        />
    )
}

export default RelatedNewsContainer;