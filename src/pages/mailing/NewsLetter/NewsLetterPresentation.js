import React from 'react';
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";
import styled from "styled-components";
import colors from "../../../styles/colors";
import Button from "../../../components/share/Button";
import Table from "@mui/material/Table";
import {TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import Paging from "../../../components/share/Paging";
import WysiwygEditor from "../../../components/share/WysiwygEditor";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {ko} from "date-fns/locale";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import NewsLetterTableRow from "../../../components/feature/Mailing/NewsLetterTableRow";

const Wrapper = styled.div`
  padding: 20px;
  max-width: 1550px;
`;
const ButtonGroup = styled.div`
  margin: ${({ margin }) => margin ? margin : "0 20px 20px"};
  text-align: center;
`;
const TableBox = styled.div`
  min-height: calc(100vh - 350px);
  border: 1px solid ${colors.borderColor};
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);

  th {
    text-align: center;
    background-color: ${colors.ultraLightGray};
  }
  th:nth-child(1) {
    width: 50%;
    text-align: left;
  }
  
  td {
    padding: 20px;
  }
  td:nth-child(1) {
    width: 100px;
    border-right: 1px solid ${colors.theadBgColor};
  }
  tr:nth-child(2) td {
    vertical-align: top;
  }
`;
const PagingBox = styled.div`
  margin: 40px auto 20px;
`;
const InputBox = styled.div`
  width: ${({ width }) => width ? width : '100%'};
  height: 35px;
  padding: 0 10px;
  margin: ${({ margin }) => margin ? margin : 0};
  border: 1px solid ${colors.borderColor};
  border-radius: 4px;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  &::placeholder {
    color: ${colors.placeholderColor};
  }
`;
const TimerBox = styled.div`
  display: flex;
  align-items: center;

  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    margin-right: 40px;
  }
`;
const RadioButton = styled.div`
  width: 45px;
  height: 35px;
  text-align: center;
  font-size: 16px;
  line-height: 2;
  color: ${({active}) => active ? colors.whiteColor : colors.deepNavyColor};
  border: ${({active}) => active ? 'none' : `1px solid ${colors.grayColor}`};
  background-color: ${({active}) => active ? colors.deepNavyColor : colors.whiteColor};
  cursor: pointer;
`;

const NewsLetterPresentation = ({
                                    tabMenu,
                                    handleTabMenu,
                                    editorState,
                                    onEditorStateChange,
                                    mailTimer,
                                    onInputChange,
                                    handleAddMail,
                                    handleCancel,
                                }) => {
    const { title, date, am_pm, hour, minute } = mailTimer;

    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="?????? ??????"
                tabList={["?????? ??????", "?????? ??????"]}
            />
            <Wrapper>
                {tabMenu === 0
                    ?
                    <>
                        <TableBox>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>?????? ??????</TableCell>
                                        <TableCell>?????? ?????????</TableCell>
                                        <TableCell>?????????</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/*  data.map  */}
                                    {[...Array(1)].map((n, index) => (
                                            <NewsLetterTableRow
                                                key={index}
                                            />
                                        )
                                    )}
                                </TableBody>
                            </Table>
                        </TableBox>
                        <PagingBox>
                            <Paging
                                // currentPage={currentPage}
                                // totalItemsCount={collectionList && collectionList.length}
                                // onChange={handleChangePage}
                                // rowsPerPage={10}
                            />
                        </PagingBox>
                    </>
                    :
                    <>
                        <TableBox>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell sx={{ backgroundColor: colors.ultraLightGray }}>
                                            ??????
                                        </TableCell>
                                        <TableCell>
                                            <InputBox>
                                                <Input
                                                    value={title}
                                                    onChange={e => onInputChange(e, "title")}
                                                    placeholder="????????? ??????????????????."
                                                />
                                            </InputBox>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ backgroundColor: colors.ultraLightGray }}>
                                            ??????
                                        </TableCell>
                                        <TableCell>
                                            <WysiwygEditor
                                                height={400}
                                                editorState={editorState}
                                                onEditorStateChange={onEditorStateChange}
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ backgroundColor: colors.ultraLightGray }}>
                                            ?????? ?????? ??????
                                        </TableCell>
                                        <TableCell>
                                            <TimerBox>
                                                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ko}>
                                                    <DatePicker
                                                        label="?????????"
                                                        mask="____.__.__"
                                                        inputFormat="yyyy.MM.dd"
                                                        value={date}
                                                        onChange={e => onInputChange(e, "date")}
                                                        renderInput={(params) => {
                                                            params.inputProps.placeholder = "yyyy.mm.dd";
                                                            return (<TextField {...params} />)}}
                                                    />
                                                </LocalizationProvider>
                                                <RadioButton
                                                    active={am_pm === "AM"}
                                                    onClick={() => onInputChange("AM", "am_pm")}
                                                >
                                                    ??????
                                                </RadioButton>
                                                <RadioButton
                                                    active={am_pm === "PM"}
                                                    onClick={() => onInputChange("PM", "am_pm")}
                                                >
                                                    ??????
                                                </RadioButton>
                                                <InputBox width="40px" margin="0 6px 0 26px">
                                                    <Input
                                                        value={hour}
                                                        maxLength={2}
                                                        onChange={e => onInputChange(e, "hour")}
                                                    />
                                                    </InputBox>
                                                ???
                                                <InputBox width="40px" margin="0 6px 0 20px">
                                                    <Input
                                                        value={minute}
                                                        maxLength={2}
                                                        onChange={e => onInputChange(e, "minute")}
                                                    />
                                                </InputBox>
                                                ???
                                            </TimerBox>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableBox>

                        <ButtonGroup margin="20px 20px 40px">
                            <Button
                                width={120}
                                height={38}
                                title="??????"
                                border={`1px solid ${colors.deepNavyColor}`}
                                bgColor={colors.whiteColor}
                                fontColor={colors.deepNavyColor}
                                fontSize={16}
                                fontWeight={600}
                                onClick={handleCancel}
                            />
                            <Button
                                width={120}
                                height={38}
                                title="??????"
                                margin="0 0 0 15px"
                                bgColor={colors.deepNavyColor}
                                fontColor={colors.whiteColor}
                                fontSize={16}
                                fontWeight={600}
                                onClick={handleAddMail}
                            />
                        </ButtonGroup>
                    </>
                }

            </Wrapper>
        </ContentBox>
    )
}

export default NewsLetterPresentation;