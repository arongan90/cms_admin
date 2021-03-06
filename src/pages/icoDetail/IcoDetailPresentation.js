import React from 'react';
import HeaderContent from "../../components/share/HeaderContent";
import Button from "../../components/share/Button";
import colors from "../../styles/colors";
import Box from "@mui/material/Box";
import styled, {css} from "styled-components";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {ko} from "date-fns/locale";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Paging from "../../components/share/Paging";

const Wrapper = styled.div`
  padding: 20px;
  min-height: 100vh;
`;
const ButtonGroup = styled.div`
  text-align: center;
  margin: 50px 20px 100px;
`;
const TableBox = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 8px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);

  & + & {
    margin-top: 50px;
  }
`;
const Table = styled.table`
  width: 100%;
  background-color: ${colors.whiteColor};
`;
const Td = styled.td`
  width: 40%;
  max-width: 200px;
  min-height: 55px;
  white-space: nowrap;
  padding: 12px 16px;
  vertical-align: ${({verticalAlign}) => verticalAlign ? verticalAlign : 'baseline'};
  border-bottom: 1px solid ${colors.borderColor};

  ${({bgColor}) => bgColor && css`
    background-color: ${bgColor} !important;
  `}
  &:first-child,
  &:nth-child(3) {
    font-size: 16px;
    width: 10%;
    border-right: 1px solid ${colors.borderColor};
    background-color: ${colors.ultraLightGray};
  }

  &:nth-child(3) {
    border-left: 1px solid ${colors.borderColor};
  }

  // DatePicker Style
  .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
    height: 35px;
    padding: 0 10px;
  }

  .css-bkqowc-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 0;
  }

  // ToggleButton Style
  .css-fhsron-MuiButtonBase-root-MuiToggleButton-root {
    padding: 5px 11px;
    border-radius: 0;
  }
`;
const Input = styled.input`
  width: ${({width}) => width ? width : 200}px;
  padding: 5px 10px;
  height: 35px;
  border: 1px solid ${colors.borderColor};
  border-radius: 5px;
`;
const TableContentsBox = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;
const ContentsTop = styled.div`
  display: flex;
  align-items: center;
`;
const ContentsBody = styled.div`
  width: ${({ width }) => width}%;
  min-height: 50px;
  padding: ${({ padding }) => padding};
  & + & {
    margin-left: 30px;
  }
`;
const TableText = styled.div`
  font-size: 18px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 5px 5px 0 0;
  
  ${({ border }) => border && css`
    border: ${border}
  `};
  ${({ padding }) => padding && css`
    padding: ${padding}
  `};
  ${({ margin }) => margin && css`
    margin: ${margin}
  `};
`;
const MiniTable = styled.div`
  width: 100%;
  height: 243px;
  margin-bottom: 20px;
  border: 1px solid ${colors.borderColor};
  border-radius: 0 0 5px 5px;
  box-shadow: 0 5px 8px -1px ${colors.shadowColor};
`;
const MiniTableRow = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${colors.borderColor};
`;
const MiniTableCell = styled.div`
  width: ${({ width }) => width}%;
  padding: 10px;
  
  &:first-child {
    text-align: center;
  }
`;
const ListBox = styled.div`
  height: ${({ height }) => height}px;
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
`;

const IcoDetailPresentation = ({
                                       tabMenu,
                                       handleTabMenu,
                                       goBack,
                                       goIcoUpdate,
                                       icoDetail,
                                       recruitmentAmount,
                                       handleRecruitmentAmount,
                                       handleAddRecruitmentAmount,
                                       recruitmentAmountChips,
                                       icoNotificationData,
                                       icoCurrentPage,
                                       handleIcoNotificationPage,
                                       interestMemberData,
                                       interestMemberPage,
                                       handleInterestMemberPage,
                                   }) => {

    return (
        <Box sx={{
            bgcolor: '#eaeff1',
            paddingBottom: 15
        }}>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="ICO ??????"
                tabList={["ICO ??????"]}
            />
            <Wrapper>
                <TableBox>
                    <Table>
                        <tbody>
                        <tr>
                            <Td>?????????</Td>
                            <Td>
                                {icoDetail.coinName}
                            </Td>
                            <Td>????????????</Td>
                            <Td>
                                {icoDetail.monetaryUnit}
                            </Td>
                        </tr>
                        <tr>
                            <Td>????????????</Td>
                            <Td>
                                {icoDetail.category}
                            </Td>
                            <Td>??????</Td>
                            <Td>
                                {icoDetail.type}
                            </Td>
                        </tr>
                        <tr>
                            <Td>?????? ????????????</Td>
                            <Td>
                                {icoDetail.initialPrice}
                            </Td>
                            <Td>??????</Td>
                            <Td>
                                {icoDetail.branch}
                            </Td>
                        </tr>
                        <tr>
                            <Td>?????????</Td>
                            <Td>
                                {icoDetail.platform}
                            </Td>
                            <Td>??????</Td>
                            <Td>
                                {icoDetail.state}
                            </Td>
                        </tr>
                        <tr>
                            <Td>?????????</Td>
                            <Td>
                                {icoDetail.start_date}
                            </Td>
                            <Td>?????????</Td>
                            <Td>
                                {icoDetail.finish_date}
                            </Td>
                        </tr>
                        <tr>
                            <Td>?????????(???)</Td>
                            <Td>
                                {icoDetail.hardCap.toLocaleString("ko-KR")}
                            </Td>
                            <Td>????????????(???)</Td>
                            <Td>
                                {icoDetail.softCap.toLocaleString("ko-KR")}
                            </Td>
                        </tr>
                        <tr>
                            <Td>??????(???)</Td>
                            <Td>
                                {icoDetail.goal.toLocaleString("ko-KR")}
                            </Td>
                            <Td>????????? ??????</Td>
                            <Td>
                                {icoDetail.sellToken.toLocaleString("ko-KR")}
                            </Td>
                        </tr>
                        <tr>
                            <Td>????????? ??????(???)</Td>
                            <Td>
                                {icoDetail.recruitmentAmount.toLocaleString("ko-KR")}
                            </Td>
                            <Td>??????</Td>
                            <Td>
                                {icoDetail.approval.map((list, index) => {
                                    return (
                                        <ListBox key={index}> {list} </ListBox>
                                    )
                                })}
                            </Td>
                        </tr>
                        <tr>
                            <Td>????????????</Td>
                            <Td>
                                {icoDetail.webSite}
                            </Td>
                            <Td>????????????</Td>
                            <Td>
                                {icoDetail.community.map((list, index) => <div key={index}>{list.url}</div>)}
                            </Td>
                        </tr>
                        <tr>
                            <Td>??????</Td>
                            <Td>
                                {icoDetail.whitePaper}
                            </Td>
                            <Td>??????</Td>
                            <Td>
                                {icoDetail.tag.map((list, index) => <ListBox key={index}>{list}</ListBox>)}
                            </Td>
                        </tr>
                        <tr>
                            <Td verticalAlign="top">??????</Td>
                            <Td colSpan={3}>
                                {icoDetail.summary}
                            </Td>
                        </tr>
                        <tr>
                            <Td>?????? ??????</Td>
                            <Td colSpan={3}>
                                {icoDetail.relatedNews.map((list, index) => <ListBox key={index}> {list} </ListBox>)}
                            </Td>
                        </tr>
                        </tbody>
                    </Table>
                </TableBox>

                <TableBox>
                    <Table>
                        <tbody>
                        <tr>
                            <Td>????????? ??????</Td>
                            <Td>
                                <Input
                                    type="number"
                                />
                                <Button
                                    margin="0 0 0 10px"
                                    title="??????"
                                    width={60}
                                    height={35}
                                    fontColor={colors.whiteColor}
                                    fontWeight={600}
                                    fontSize={16}
                                    bgColor={colors.activeBlue}
                                />
                            </Td>
                        </tr>
                        <tr>
                            <Td colSpan={2} bgColor={colors.whiteColor}>
                                <TableContentsBox>
                                    <ContentsTop>
                                        <TableText margin="0 20px 0 0">?????? :</TableText>
                                        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ko}>
                                            <DatePicker
                                                label="?????????"
                                                mask="____.__.__"
                                                inputFormat="yyyy.MM.dd"
                                                value={recruitmentAmount.date}
                                                onChange={newValue => handleRecruitmentAmount(newValue, "date")}
                                                renderInput={(params) => {
                                                    params.inputProps.placeholder = "yyyy.mm.dd";
                                                    return (<TextField {...params} />
                                                    )
                                                }}
                                            />
                                        </LocalizationProvider>
                                        <TableText margin="0 20px 0 40px">?????? : </TableText>
                                        <Input
                                            width={250}
                                            value={recruitmentAmount.amount}
                                            onChange={e => handleRecruitmentAmount(e.target.value, "amount")}
                                        />
                                        <Button
                                            margin="0 0 0 10px"
                                            title="+"
                                            width={35}
                                            height={35}
                                            fontColor={colors.activeBlue}
                                            fontWeight={600}
                                            fontSize={16}
                                            bgColor={colors.whiteColor}
                                            border={`1px solid ${colors.activeBlue}`}
                                            onClick={handleAddRecruitmentAmount}
                                        />
                                    </ContentsTop>
                                </TableContentsBox>
                            </Td>
                        </tr>
                        <tr>
                            <Td colSpan={2} bgColor={colors.whiteColor}>
                                <ContentsBody padding="0 20px">
                                    {recruitmentAmountChips && recruitmentAmountChips.map((list, index) => {
                                        return (
                                            <ListBox
                                                height={30}
                                                fontColor={colors.lightBlack}
                                                fontWeight={400}
                                                fontSize={16}
                                                key={index}
                                            >
                                                {list}
                                            </ListBox>
                                        )
                                    })}
                                </ContentsBody>
                            </Td>
                        </tr>
                        <tr>
                            <Td>??????</Td>
                            <Td> </Td>
                        </tr>
                        <tr>
                            <Td colSpan={2} bgColor={colors.whiteColor}>
                                <TableContentsBox>
                                    <ContentsBody width={20}>
                                        <TableText
                                            padding="15px 10px"
                                            bgColor={colors.ultraLightGray}
                                            border={`1px solid ${colors.borderColor}`}
                                        >?????? ??????</TableText>
                                        <MiniTable>
                                            {interestMemberData.map(list => {
                                                return (
                                                    <MiniTableRow key={list.id}>
                                                        <MiniTableCell width={10}>{list.id}</MiniTableCell>
                                                        <MiniTableCell width={90}>{list.name}</MiniTableCell>
                                                    </MiniTableRow>
                                                )
                                            })}
                                        </MiniTable>
                                        <Paging
                                            currentPage={interestMemberPage}
                                            totalItemsCount={icoDetail.interestedMember && icoDetail.interestedMember.length}
                                            onChange={handleInterestMemberPage}
                                            rowsPerPage={5}
                                        />
                                    </ContentsBody>
                                    <ContentsBody width={20}>
                                        <TableText
                                            padding="15px 10px"
                                            bgColor={colors.ultraLightGray}
                                            border={`1px solid ${colors.borderColor}`}
                                        >ICO ??????</TableText>
                                        <MiniTable>
                                            {icoNotificationData.map(list => {
                                                return (
                                                    <MiniTableRow key={list.id}>
                                                        <MiniTableCell>{list.id}</MiniTableCell>
                                                        <MiniTableCell>{list.name}</MiniTableCell>
                                                    </MiniTableRow>
                                                )
                                            })}
                                        </MiniTable>
                                        <Paging
                                            currentPage={icoCurrentPage}
                                            totalItemsCount={icoDetail.icoNotification && icoDetail.icoNotification.length}
                                            onChange={handleIcoNotificationPage}
                                            rowsPerPage={5}
                                        />
                                    </ContentsBody>
                                </TableContentsBox>
                            </Td>
                        </tr>
                        </tbody>
                    </Table>
                </TableBox>
                <ButtonGroup>
                    <Button
                        title="??????"
                        width={120}
                        height={38}
                        border={`1px solid ${colors.darkBlueColor}`}
                        fontColor={colors.darkBlueColor}
                        bgColor={colors.whiteColor}
                        onClick={goBack}
                    />
                    <Button
                        title="ICO ??????"
                        width={120}
                        height={38}
                        margin="0 0 0 20px"
                        fontColor={colors.whiteColor}
                        bgColor={colors.darkBlueColor}
                        onClick={goIcoUpdate}
                    />
                </ButtonGroup>
            </Wrapper>
        </Box>
    )
}

export default IcoDetailPresentation;