import React from 'react';
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";
import styled from "styled-components";
import colors from "../../../styles/colors";
import Button from "../../../components/share/Button";
import Table from "@mui/material/Table";
import {TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import TradeTableRow from "../../../components/feature/Trade/TradeTableRow";
import Paging from "../../../components/share/Paging";

const Wrapper = styled.div`
  padding: 20px;
  max-width: 1550px;
`;
const ButtonGroup = styled.div`
  margin: 0 20px 20px;
  text-align: right;
`;
const TableBox = styled.div`
  min-height: calc(100vh - 300px);
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
`;
const PagingBox = styled.div`
  width: 500px;
  margin: 80px auto 20px;
`;

const NewsLetterPresentation = ({
                                    tabMenu,
                                    handleTabMenu,
                                }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="뉴스 레터"
                tabList={["뉴스 레터", "메일 작성"]}
            />
            <Wrapper>
                <ButtonGroup>
                    <Button
                        width={120}
                        height={38}
                        title="메일 작성"
                        bgColor={colors.deepNavyColor}
                        fontColor={colors.whiteColor}
                        fontSize={16}
                        fontWeight={600}
                        onClick={() => handleTabMenu(1)}
                    />
                </ButtonGroup>

                {tabMenu === 0
                    ?
                    <>
                        <TableBox>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>메일 제목</TableCell>
                                        <TableCell>수신 대장사</TableCell>
                                        <TableCell>발송일</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/*  data.map  */}

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
                        메일작성
                    </>
                }

            </Wrapper>
        </ContentBox>
    )
}

export default NewsLetterPresentation;