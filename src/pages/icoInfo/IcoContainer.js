import React, { useState, useEffect } from 'react';
import IcoPresentation from "./IcoPresentation";
import axios from "axios";
import * as constants from "../../utils/constants";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;
const IcoContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [icoList, setIcoList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    
    const [coinName, setCoinName] = useState('');
    const handleChangePage = page => {
        let indexOfLast = page * rowsPerPage;
        let indexOfFirst = indexOfLast - rowsPerPage;

        setCurrentPage(page);
        setIcoList(icoList.slice(indexOfFirst, indexOfLast));
    }

    const handleChangeRowsPerPage = e => {
        setRowsPerPage(+e.target.value);
        setIcoList(icoList.slice(0, e.target.value));
    };
    
    const handleTabMenu = value => setTabMenu(value);
    const onCoinNameChange = e => setCoinName(e.target.value);

    const icoTableColumns = [
        { id: 'ai_recommend', label: 'AI추천', width: 80, align: 'center',  },
        { id: 'coin', label: '코인', width: 150, align: 'center',  },
        { id: 'price', label: '가격(₩)', width: 100, align: 'center', }, // format: (value) => value.toLocaleString('ko-KR')
        { id: 'type', label: '유형', width: 50, align: 'center', }, // format: (value) => value.toLocaleString('ko-KR'),
        { id: 'start_date', label: '시작일', width: 150, align: 'right', format: (value) => value.toLocaleString('ko-KR') },
        { id: 'finish_date', label: '종료일', width: 150, align: 'right', format: (value) => value.toLocaleDateString('ko-KR', { year: '2-digit', month: 'numeric', day: 'numeric', }).slice(0, -1) },
        { id: 'period', label: '마감까지', width: 80, align: 'right', },
        { id: 'goal', label: '목표(₩)', width: 100, align: 'right', },
    ];

    const fetchData = async () => {
        try {
            const response = await axios.get(`${serverProtocol}${serverURL}/icoList`);
            setIcoList(response.data);
        } catch (e) {
            throw new Error(e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <IcoPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            coinName={coinName}
            onCoinNameChange={onCoinNameChange}
            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            icoTableColumns={icoTableColumns}
            icoList={icoList}
        />
    )
}

export default IcoContainer;