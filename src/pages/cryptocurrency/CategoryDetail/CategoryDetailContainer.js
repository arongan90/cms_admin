import React, {useEffect, useState} from 'react';
import CategoryDetailPresentation from "./CategoryDetailPresentation";
import axios from "axios";
import * as constants from "../../../utils/constants";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {useHistory} from "react-router-dom";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const categoryColumns = [
    { id: 'ranking', label: '순위', width: 10, align: 'center'  },
    { id: 'coinName', label: '코인', width: 150, align: 'left'  },
    { id: 'currentPrice', label: '현재가(₩)', width: 80, align: 'right' },
    { id: 'chart', label: '시세 차트', width: 100, align: 'center' },
    { id: 'transactionPrice_24', label: '24시간 거래량', width: 100, align: 'center' },
    { id: 'prediction_24', label: '24시간 예측', width: 100, align: 'center' },
];

const CategoryDetailContainer = ({match}) => {
    const history = useHistory();
    const {categoryId} = match.params;
    const [tabMenu, setTabMenu] = useState(0);
    const [categoryInfo, setCategoryInfo] = useState([]);
    const [categoryLists, setCategoryLists] = useState([]);
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [categoryInputs, setCategoryInputs] = useState('');

    const goBack = () => history.goBack();
    const handleTabMenu = value => setTabMenu(value);
    const handleUpdateModalOpen = () => setUpdateModalOpen(true);
    const handleUpdateModalClose = () => {
        setCategoryInputs('');
        setUpdateModalOpen(false);
    }
    const inputChange = e => setCategoryInputs(e.target.value);

    const onUpdateCategory = () => {
        console.info('업데이트 : ', categoryInputs);
        setCategoryInputs('');
        setUpdateModalOpen(false);
    }

    const fetchData = async () => {
        try {
            // 실제 api 연동 할 시 categoryId 로 category 묶음에 있는 코인정보 호출 하기
            const category = await axios.get(`${serverProtocol}${serverURL}/coinList/${categoryId}`);
            const categoryLists = await axios.get(`${serverProtocol}${serverURL}/coinList`);
            setCategoryInfo(category.data);
            setCategoryLists(categoryLists.data);
            setCategoryInputs(category.data.category);
        } catch (e) {
            throw new Error(e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    // useEffect(() => {
    //     console.info('categoryInfo', categoryInfo)
    // }, [categoryInfo]);

    return (
        <>
            {
                !!categoryInfo ?
                    <CategoryDetailPresentation
                        tabMenu={tabMenu}
                        handleTabMenu={handleTabMenu}

                        goBack={goBack}
                        updateModalOpen={updateModalOpen}
                        handleUpdateModalOpen={handleUpdateModalOpen}
                        handleUpdateModalClose={handleUpdateModalClose}

                        categoryColumns={categoryColumns}
                        categoryInfo={categoryInfo}
                        categoryLists={categoryLists}
                        categoryInputs={categoryInputs}
                        onUpdateCategory={onUpdateCategory}
                        inputChange={inputChange}
                    />
                    :
                    <Box style={{
                        display: 'flex',
                        position: 'absolute',
                        width: '100vh',
                        height: '100vh',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <CircularProgress/>
                    </Box>
            }
        </>
    )
}

export default CategoryDetailContainer;