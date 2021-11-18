import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import IcoDetailPresentation from "./IcoDetailPresentation";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import * as constants from "../../utils/constants";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const IcoDetailContainer = ({ match }) => {
    const {icoId} = match.params;
    const history = useHistory();
    const [tabMenu, setTabMenu] = useState(0);
    const [recruitmentAmount, setRecruitmentAmount] = useState({
        date: new Date(),
        amount: '',
    });
    const [icoDetail, setIcoDetail] = useState(null);
    const [icoCurrentPage, setIcoCurrentPage] = useState(1);
    const [icoNotificationData, setIcoNotificationData] = useState([]);
    const [interestMemberPage, setInterestMemberPage] = useState(1);
    const [interestMemberData, setInterestMemberData] = useState([]);
    const [recruitmentAmountChips, setRecruitmentAmountChips] = useState([]);

    // 모집된 금액 DatePicker, Input Setting 함수
    const handleRecruitmentAmount = (value, type) => {
        console.info(value, type);
        setRecruitmentAmount({
            ...recruitmentAmount,
            [type]: type === "amount" ? value.replace(/[^0-9]/g,'') : value,
        });
    }
    // 모집된 금액 추가 버튼 클릭 함수
    const handleAddRecruitmentAmount = () => {
        const { date, amount } = recruitmentAmount;
        if (amount === '') {
            alert('금액을 설정해주세요.');
            return;
        }
        let chips = recruitmentAmountChips.concat(`${date.toLocaleString("ko-KR")} : ${parseInt(amount).toLocaleString("ko-KR")}`);
        setRecruitmentAmountChips(chips);
        setRecruitmentAmount({
            date: new Date(),
            amount: '',
        });
    }

    // ICO 알림 페이징 처리
    const handleIcoNotificationPage = page => {
        console.info('페이지 : ',page);
        let indexOfLast = page * 5;
        let indexOfFirst = indexOfLast - 5;

        setIcoCurrentPage(page);
        setIcoNotificationData(icoDetail.icoNotification.slice(indexOfFirst, indexOfLast));
    }
    // 관심 회원 페이징 처리
    const handleInterestMemberPage = page => {
        let indexOfLast = page * 5;
        let indexOfFirst = indexOfLast - 5;

        setInterestMemberPage(page);
        setInterestMemberData(icoDetail.interestedMember.slice(indexOfFirst, indexOfLast));
    }

    const handleTabMenu = value => setTabMenu(value);
    const goBack = () => history.push(`/ico`);

    const fetchData = async () => {
        try {
            const icoDetail = await axios.get(`${serverProtocol}${serverURL}/icoList/${icoId}`);
            setIcoDetail(icoDetail.data);
            setIcoNotificationData(icoDetail.data.icoNotification.slice(0, 5));
            setInterestMemberData(icoDetail.data.interestedMember.slice(0, 5));
        } catch (e) {
            throw new Error(e);
        }
    }

    const goIcoUpdate = () => history.push(`/icoUpdate/${icoId}`);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.info('recruitmentAmountChips', recruitmentAmountChips);
    }, [recruitmentAmountChips]);

    return (
        <>
            {!!icoDetail ?
                <IcoDetailPresentation
                    tabMenu={tabMenu}
                    handleTabMenu={handleTabMenu}
                    goBack={goBack}
                    goIcoUpdate={goIcoUpdate}
                    icoDetail={icoDetail}

                    // 모집된 금액 DatePicker
                    recruitmentAmount={recruitmentAmount}
                    handleRecruitmentAmount={handleRecruitmentAmount}
                    handleAddRecruitmentAmount={handleAddRecruitmentAmount}
                    recruitmentAmountChips={recruitmentAmountChips}
                    // ICO 알림 페이지
                    icoNotificationData={icoNotificationData}
                    icoCurrentPage={icoCurrentPage}
                    handleIcoNotificationPage={handleIcoNotificationPage}
                    // 관심 회원 페이지
                    interestMemberData={interestMemberData}
                    interestMemberPage={interestMemberPage}
                    handleInterestMemberPage={handleInterestMemberPage}
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

export default IcoDetailContainer;