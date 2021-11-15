import React, {useEffect} from 'react';
import styled, {css} from "styled-components";
import colors from "../../styles/colors";
import Box from '@mui/material/Box';
import HeaderContent from '../../components/share/HeaderContent';

const StatsTable = styled.table`
  width: 1000px;
  margin: 20px auto;
  border: 1px solid ${colors.grayColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;
const TableCell = styled.td`
  width: 12%;
  height: 40px;
  line-height: 60px;
  padding: 0 20px;
  box-sizing: border-box;
  color: ${colors.blackColor};
  border: 1px solid ${colors.borderColor};
  background: ${colors.whiteColor};
  text-align: ${({ textAlign }) => textAlign ? textAlign : "center"};
  font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : 500};
`;
const ActiveText = styled.span`
  font-size: ${({ fontSize }) => fontSize ? fontSize : 24}px;
  font-weight: ${({ fontWeight}) => fontWeight ? fontWeight : 500};
  margin-right: 5px;
  color: ${({fontColor}) => fontColor ? fontColor : colors.blackColor};
`;

const MainPresentational = ({
                                tabMenu,
                                handleTabMenu,
                            }) => {
    return (
        <Box sx={{
            bgcolor: '#eaeff1',
            minHeight: '100vh',
            paddingBottom: 15
        }}>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="대시 보드"
                tabList={["통계"]}
            />

            <StatsTable>
                <tbody>
                    <tr>
                        <TableCell>
                            <ActiveText fontWeight={700} fontColor={colors.activeBlue}>1,000</ActiveText> 명
                        </TableCell>
                        <TableCell>
                            <ActiveText fontWeight={700} fontColor={colors.activeBlue}>21</ActiveText>
                        </TableCell>
                        <TableCell>
                            <ActiveText fontWeight={700} fontColor={colors.activeBlue}>212</ActiveText>
                        </TableCell>
                        <TableCell>
                            <ActiveText fontWeight={700} fontColor={colors.activeBlue}>79</ActiveText>
                        </TableCell>
                        <TableCell>
                            <ActiveText fontWeight={700} fontColor={colors.activePink}>5</ActiveText> 건
                        </TableCell>
                        <TableCell>
                            <ActiveText fontWeight={700} fontColor={colors.activePink}>2</ActiveText> 건
                        </TableCell>
                    </tr>
                    <tr>
                        <TableCell>회원</TableCell>
                        <TableCell>ICO</TableCell>
                        <TableCell>암호화폐</TableCell>
                        <TableCell>거래소</TableCell>
                        <TableCell>미 답변 문의</TableCell>
                        <TableCell>미 처리 오류 신고</TableCell>
                    </tr>
                </tbody>
            </StatsTable>

            <StatsTable>
                <tbody>
                <tr>
                    <TableCell colSpan={2} textAlign="left" fontWeight={700}>항목</TableCell>
                    <TableCell fontWeight={700}>오늘</TableCell>
                    <TableCell fontWeight={700}>어제</TableCell>
                    <TableCell fontWeight={700}>이번 주</TableCell>
                    <TableCell fontWeight={700}>지난 주</TableCell>
                    <TableCell fontWeight={700}>이번 달</TableCell>
                </tr>
                <tr>
                    <TableCell rowSpan={2} textAlign="left" fontWeight={700}>회원</TableCell>
                    <TableCell textAlign="left" fontWeight={700}>가입</TableCell>
                    <TableCell textAlign="right">
                        <ActiveText fontSize={16} fontColor={colors.activeBlue}>10</ActiveText>
                    </TableCell>
                    <TableCell textAlign="right">
                        <ActiveText fontSize={16} fontColor={colors.activeBlue}>10</ActiveText>
                    </TableCell>
                    <TableCell textAlign="right">
                        <ActiveText fontSize={16} fontColor={colors.activeBlue}>10</ActiveText>
                    </TableCell>
                    <TableCell textAlign="right">
                        <ActiveText fontSize={16} fontColor={colors.activeBlue}>10</ActiveText>
                    </TableCell>
                    <TableCell textAlign="right">
                        <ActiveText fontSize={16} fontColor={colors.activeBlue}>227</ActiveText>
                    </TableCell>
                </tr>
                <tr>
                    <TableCell textAlign="left" fontWeight={700}>탈퇴</TableCell>
                    <TableCell textAlign="right">1</TableCell>
                    <TableCell textAlign="right">1</TableCell>
                    <TableCell textAlign="right">1</TableCell>
                    <TableCell textAlign="right">1</TableCell>
                    <TableCell textAlign="right">227</TableCell>
                </tr>
                </tbody>
            </StatsTable>



        </Box>
    );
}

export default MainPresentational;