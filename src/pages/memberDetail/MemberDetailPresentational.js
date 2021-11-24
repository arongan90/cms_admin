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
import Typography from '@mui/material/Typography';
import UseStatusTable from "../../components/feature/Member/UseStatusTable";

const Wrapper = styled.div`
  padding: 20px;
`;
const ButtonGroup = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
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
`;
const Td = styled.td`
  width: calc(100% - 320px);
  height: 50px;
  padding: 10px;
  color: ${colors.deepDarkGrayColor};
  font-weight: bold;
  font-size: 18px;
  border-bottom: 1px solid ${colors.borderColor};

  &:nth-child(2n + 1) {
    width: 180px;
    border-right: 1px solid ${colors.borderColor};
  }

  &:nth-child(3) {
    border-left: 1px solid ${colors.borderColor};
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
                    <Typography>{children}</Typography>
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
                <ButtonGroup>
                    <Button
                        title="이전"
                        width={70}
                        height={46}
                        border={`1px solid ${colors.activeBlue}`}
                        fontColor={colors.activeBlue}
                        bgColor={colors.whiteColor}
                        fontSize={18}
                        onClick={goBack}
                    />
                    <Button
                        title="회원정보 수정"
                        width={150}
                        height={46}
                        fontColor={colors.whiteColor}
                        bgColor={colors.activeBlue}
                        fontSize={18}
                        onClick={goMemberUpdate}
                    />
                </ButtonGroup>
                <InfoTable>
                    <tbody>
                    <tr>
                        <Td>이름</Td>
                        <Td>
                            <InfoText>{memberInfo.name}</InfoText>
                        </Td>
                        <Td>가입방식</Td>
                        <Td>
                            <InfoText>{memberInfo.register_type}</InfoText>
                        </Td>
                    </tr>
                    <tr>
                        <Td>이메일 주소</Td>
                        <Td>
                            <InfoText>{memberInfo.email}</InfoText>
                        </Td>
                        <Td>보호자</Td>
                        <Td>
                            <InfoText>{memberInfo.guardian} ( {memberInfo.guardian_phone} )</InfoText>
                        </Td>
                    </tr>
                    <tr>
                        <Td>가입일</Td>
                        <Td>{memberInfo.register_date.toLocaleString("ko-KR")}</Td>
                        <Td>마지막 접속</Td>
                        <Td>{memberInfo.last_login}</Td>
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
        </Box>

    )
}

export default MemberDetailPresentational;