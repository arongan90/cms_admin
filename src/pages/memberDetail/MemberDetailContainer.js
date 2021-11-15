import React, {useEffect, useState} from 'react';
import MemberDetailPresentational from "./MemberDetailPresentational";
import {useHistory} from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import * as constants from "../../utils/constants";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const IcoHeadHeadCells = [
    {
        id: 'ico',
        align: 'left',
        label: '관심 ICO',
    },
    {
        id: 'price',
        align: 'right',
        label: '가격(₩)',
    },
    {
        id: 'stage',
        align: 'right',
        label: '단계',
    },
    {
        id: 'start_date',
        align: 'right',
        label: '시작일',
    },
    {
        id: 'finish_date',
        align: 'right',
        label: '종료일',
    },
    {
        id: 'amount',
        align: 'right',
        label: '모집액(₩)',
    },
    {
        id: 'be_listed',
        align: 'right',
        label: '거래소 상장',
    },
];

const CryptocurrencyHeadCells = [
    {
        id: 'coin',
        align: 'left',
        label: '코인',
        width: 20
    },
    {
        id: 'now_price',
        align: 'right',
        label: '현재가(₩)',
        width: 15
    },
    {
        id: 'interest',
        align: 'center',
        label: '관심',
        width: 10
    },
    {
        id: 'portfolio',
        align: 'center',
        label: '포트폴리오',
        width: 10
    },
    {
        id: 'have',
        align: 'left',
        label: '보유',
        width: 45
    },
];
const PortfolioHeadCells = [
    {
        id: 'portfolio',
        align: 'left',
        label: '포트폴리오',
        width: 38
    },
    {
        id: 'have_coin',
        align: 'center',
        label: '보유',
        width: 15
    },
    {
        id: 'assets',
        align: 'center',
        label: '보유자산(₩)',
        width: 15
    },
    {
        id: 'purchase_amount',
        align: 'center',
        label: '구입금액(₩)',
        width: 15
    },
    {
        id: 'profitAndLoss',
        align: 'left',
        label: '손익(₩)',
        width: 15
    },
];
const IcoAlarmHeadCells = [
    {
        id: 'ico',
        align: 'left',
        label: 'ICO',
    },
    {
        id: 'price',
        align: 'right',
        label: '가격(₩)',
    },
    {
        id: 'stage',
        align: 'right',
        label: '단계',
    },
    {
        id: 'start_date',
        align: 'right',
        label: '시작일',
    },
    {
        id: 'finish_date',
        align: 'right',
        label: '종료일',
    },
    {
        id: 'amount',
        align: 'right',
        label: '모집액(₩)',
    },
    {
        id: 'be_listed',
        align: 'right',
        label: '거래소 상장',
    },
];

const MemberDetailContainer = ({match}) => {
    const {memberId} = match.params;
    const history = useHistory();
    const [tabMenu, setTabMenu] = useState(0);
    const [memberInfo, setMemberInfo] = useState(null);
    const [memberDetailInfo, setMemberDetailInfo] = useState(null);

    const handleTabMenu = value => setTabMenu(value);
    const goBack = () => history.push(`/member`);

    const fetchMember = async () => {
        try {
            const member = await axios.get(`${serverProtocol}${serverURL}/memberData/${memberId}`);
            const detail = await axios.get(`${serverProtocol}${serverURL}/memberDetailInfo`);

            setMemberInfo(member.data);
            setMemberDetailInfo(detail.data);
        } catch (e) {
            throw new Error(e);
        }
    }

    const goMemberUpdate = () => history.push(`/memberUpdate/${memberId}`);

    useEffect(() => {
        fetchMember();
    }, []);

    return (
        <>
            {!!memberInfo ?
                <MemberDetailPresentational
                    tabMenu={tabMenu}
                    handleTabMenu={handleTabMenu}
                    goBack={goBack}
                    memberInfo={memberInfo}
                    memberDetailInfo={memberDetailInfo}
                    goMemberUpdate={goMemberUpdate}
                    // Table Headers
                    IcoHeadHeadCells={IcoHeadHeadCells}
                    CryptocurrencyHeadCells={CryptocurrencyHeadCells}
                    PortfolioHeadCells={PortfolioHeadCells}
                    IcoAlarmHeadCells={IcoAlarmHeadCells}
                />
                :
                <Box sx={{display: 'flex'}} style={{
                    position: 'absolute',
                    width: '100vw',
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

export default MemberDetailContainer;