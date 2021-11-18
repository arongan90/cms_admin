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

    const handleTabMenu = value => setTabMenu(value);
    const goBack = () => history.push('/coinInfo');


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

                        // goIcoUpdate={goIcoUpdate}

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