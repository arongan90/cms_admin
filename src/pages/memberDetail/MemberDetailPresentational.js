import React, { useEffect } from 'react';
import styled from "styled-components";
import Box from "@mui/material/Box";
import HeaderContent from "../../components/share/HeaderContent";
import colors from "../../styles/colors";
import Button from "../../components/share/Button";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import UseStatusTable from "../../components/feature/Member/UseStatusTable";

const Wrapper = styled.div`
  padding: 20px;
`;
const ButtonGroup = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: center;
  margin: 20px 0 50px;
`;
const InfoTable = styled.table`
  width: 100%;
  border-style: solid;
  border-width: 2px 0 2px 0;
  border-color: ${colors.grayColor};
  text-align: start;
  margin-bottom: 50px;
  background-color: ${colors.whiteColor};
  
  td {
    width: calc(100% - 320px);
    height: 50px;
    padding: 10px;
    color: ${colors.deepDarkGrayColor};
    font-weight: bold;
    border-bottom: 1px solid ${colors.borderColor};
    
    &:nth-child(2n + 1) {
      width: 180px;
      border-right: 1px solid ${colors.borderColor};
    }

    &:nth-child(3) {
      border-left: 1px solid ${colors.borderColor};
    }
  }
`;

const InfoText = styled.span`
  color: ${colors.darkGrayColor};
`;

function TabPanel(props) {
    const {children, value, index, ...other} = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const a11yProps = index => {
    return {
        id: `standard-tab-${index}`,
        'aria-controls': `standard-tabpanel-${index}`,
    };
}

const MemberDetailPresentational = ({
                                        tabMenu,
                                        handleTabMenu,
                                        goBack,
                                        memberInfo,
                                        memberDetailInfo,
                                        goMemberUpdate,

                                        // Table Headers
                                        IcoHeadHeadCells,
                                        CryptocurrencyHeadCells,
                                        PortfolioHeadCells,
                                        IcoAlarmHeadCells,
                                    }) => {

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => setValue(newValue);
    const handleChangeIndex = (index) => setValue(index);

    return (
        <Box sx={{
            bgcolor: '#eaeff1',
            paddingBottom: 15
        }}>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="회원 관리"
                tabList={["회원 정보"]}
            />
            <Wrapper>
                <InfoTable>
                    <tbody>
                    <tr>
                        <td>이름</td>
                        <td>
                            <InfoText>{memberInfo.name}</InfoText>
                        </td>
                        <td>가입방식</td>
                        <td>
                            <InfoText>{memberInfo.register_type}</InfoText>
                        </td>
                    </tr>
                    <tr>
                        <td>이메일 주소</td>
                        <td>
                            <InfoText>{memberInfo.email}</InfoText>
                        </td>
                        <td>보호자</td>
                        <td>
                            <InfoText>{memberInfo.guardian} ( {memberInfo.guardian_phone} )</InfoText>
                        </td>
                    </tr>
                    <tr>
                        <td>가입일</td>
                        <td>{memberInfo.register_date.toLocaleString("ko-KR")}</td>
                        <td>마지막 접속</td>
                        <td>{memberInfo.last_login}</td>
                    </tr>
                    </tbody>
                </InfoTable>

                {/* Tab */}
                <Box sx={{bgcolor: 'background.paper', width: '100%'}}>
                    <AppBar position="static">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="standard"
                            aria-label="standard tabs example"
                        >
                            <Tab label="관심 ICO" {...a11yProps(0)} />
                            <Tab label="암호화폐" {...a11yProps(1)} />
                            <Tab label="포트폴리오" {...a11yProps(2)} />
                            <Tab label="온라인 문의" {...a11yProps(3)} />
                            <Tab label="ICO 알림" {...a11yProps(4)} />

                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <UseStatusTable
                                headCells={IcoHeadHeadCells}
                                interestICO={memberDetailInfo ? memberDetailInfo.interestICO : []}
                            />
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <UseStatusTable
                                headCells={CryptocurrencyHeadCells}
                                cryptocurrency={memberDetailInfo ? memberDetailInfo.cryptocurrency : []}
                            />
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <UseStatusTable
                                headCells={PortfolioHeadCells}
                                portfolios={memberDetailInfo ? memberDetailInfo.portfolios : []}
                            />
                        </TabPanel>
                        <TabPanel value={value} index={3} dir={theme.direction}>
                            온라인 문의
                            <UseStatusTable

                            />
                        </TabPanel>
                        <TabPanel value={value} index={4} dir={theme.direction}>
                            ICO 알림
                            <UseStatusTable
                                headCells={IcoAlarmHeadCells}
                                memberDetailInfo={memberDetailInfo ? memberDetailInfo.IcoAlarmHeadCells : []}
                            />
                        </TabPanel>

                    </SwipeableViews>
                </Box>
            </Wrapper>
            <ButtonGroup>
                <Button
                    title="이전"
                    width={120}
                    height={38}
                    border={`1px solid ${colors.darkBlueColor}`}
                    fontColor={colors.darkBlueColor}
                    bgColor={colors.whiteColor}
                    onClick={goBack}
                />
                <Button
                    title="회원정보 수정"
                    width={120}
                    height={38}
                    margin="0 0 0 15px"
                    fontColor={colors.whiteColor}
                    bgColor={colors.darkBlueColor}
                    onClick={goMemberUpdate}
                />
            </ButtonGroup>
        </Box>

    )
}

export default MemberDetailPresentational;