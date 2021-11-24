import React, { useState, useEffect } from 'react';
import CategoryPresentation from "./CategoryPresentation";
import axios from "axios";
import * as constants from "../../../utils/constants";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const categoryTableColumns = [
    { id: 'ranking', label: '순위', width: 5, align: 'center' },
    { id: 'category', label: '카테고리', width: 150, align: 'center' },
    { id: 'coinCount', label: '코인 수', width: 50, align: 'center' }, // format: (value) => value.toLocaleString('ko-KR')
    { id: 'marketShare', label: '점유율', width: 50, align: 'center' }, // format: (value) => value.toLocaleString('ko-KR'),
    { id: 'topCoin', label: 'Top 코인', width: 100, align: 'center' },
    { id: 'marketCap', label: '시가총액', width: 80, align: 'right' },
    { id: 'transactionPrice_24', label: '24시간 거래량', width: 80, align: 'center' },
];


const CategoryContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [categoryList, setCategoryList] = useState([]);
    const [addCategoryOpen, setAddCategoryOpen] = useState(false);
    const [categoryInputs, setCategoryInputs] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const handleTabMenu = value => setTabMenu(value);
    const handleCategoryModalOpen = () => setAddCategoryOpen(true);
    const handleCategoryModalClose = () => setAddCategoryOpen(false);
    const handleChangePage = (e, newPage) => setCurrentPage(newPage);

    const inputChange = e => setCategoryInputs(e.target.value);
    const onAddCategory = () => {
        console.info('카테고리 추가');

        setCategoryInputs('');
        setAddCategoryOpen(false);
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`${serverProtocol}${serverURL}/coinList`);
            setCategoryList(response.data);
        } catch (e) {
            throw new Error(e);
        }
    }

    // useEffect(() => {
    //     console.info('categoryInputs ::: ', categoryInputs);
    // }, [categoryInputs]);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <CategoryPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            categoryTableColumns={categoryTableColumns}
            categoryList={categoryList}
            addCategoryOpen={addCategoryOpen}
            handleCategoryModalOpen={handleCategoryModalOpen}
            handleCategoryModalClose={handleCategoryModalClose}
            categoryInputs={categoryInputs}
            inputChange={inputChange}
            onAddCategory={onAddCategory}
            currentPage={currentPage}
            handleChangePage={handleChangePage}
        />
    )
}

export default CategoryContainer;