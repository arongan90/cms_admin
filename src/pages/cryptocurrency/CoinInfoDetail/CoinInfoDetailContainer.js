import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import * as constants from "../../../utils/constants";
import CoinInfoDetailPresentation from "./CoinInfoDetailPresentation";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const CoinInfoDetailContainer = ({match}) => {
    const history = useHistory();
    const {coinId} = match.params;
    const [tabMenu, setTabMenu] = useState(0);
    const [coinDetail, setCoinDetail] = useState(null);
    const [pastExchange, setPastExchange] = useState({
        date: new Date(),
        amount: '',
    });
    const [pastExchangeChips, setPastExchangeChips] = useState([]);
    const [pastExchangePage, setPastExchangePage] = useState(1);

    const handleTabMenu = value => setTabMenu(value);
    const goBack = () => history.push('/coinInfo');

    const handlePastExchange = (value, type) => {
        setPastExchange({
            ...pastExchange,
            [type]: value,
        });
    }
    const handleAddExchangeChips = () => {
        let newArr = pastExchangeChips.concat(pastExchange)
        setPastExchangeChips(newArr);
        setPastExchange({
            date: new Date(),
            amount: '',
        });
    }
    //
    const handleDeleteExchangeChips = item => {
        if (window.confirm('삭제 하시겠습니까?')) {
            setPastExchangeChips(pastExchangeChips.filter(chip => chip !== item));
        }
    }
    const handlePastExchangePage = value => setPastExchangePage(value);

    const goCoinUpdate = () => {
        history.push(`/coinUpdate/${coinId}`);
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`${serverProtocol}${serverURL}/coinList/${coinId}`);
            setCoinDetail(response.data);
        } catch (e) {
            throw new Error(e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    // useEffect(() => {
    //     console.info('coinDetail :  ', !!coinDetail);
    // }, [coinDetail]);

    return (
        <>
            {!!coinDetail ?
                    <CoinInfoDetailPresentation
                        tabMenu={tabMenu}
                        handleTabMenu={handleTabMenu}
                        coinDetail={coinDetail}
                        goBack={goBack}

                        goCoinUpdate={goCoinUpdate}
                        pastExchange={pastExchange}
                        handlePastExchange={handlePastExchange}
                        pastExchangeChips={pastExchangeChips}
                        handleAddExchangeChips={handleAddExchangeChips}
                        handleDeleteExchangeChips={handleDeleteExchangeChips}
                        pastExchangePage={pastExchangePage}
                        handlePastExchangePage={handlePastExchangePage}

                        // recruitmentAmount={recruitmentAmount}
                        // handleRecruitmentAmount={handleRecruitmentAmount}
                        // handleAddRecruitmentAmount={handleAddRecruitmentAmount}
                        // recruitmentAmountChips={recruitmentAmountChips}
                        // icoNotificationData={icoNotificationData}
                        // icoCurrentPage={icoCurrentPage}
                        // handleIcoNotificationPage={handleIcoNotificationPage}
                        // interestMemberData={interestMemberData}
                        // interestMemberPage={interestMemberPage}
                        // handleInterestMemberPage={handleInterestMemberPage}
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

export default CoinInfoDetailContainer;