import React from 'react';
import styled from "styled-components";
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";
import colors from "../../../styles/colors";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import SubscribeTableRow from "../../../components/feature/Mailing/SubscribeTableRow";
import Paging from "../../../components/share/Paging";

const Wrapper = styled.div`
  padding: 20px;
  max-width: 1550px;
`;
const TableBox = styled.div`
  height: calc(100vh - 300px);
  border: 1px solid ${colors.borderColor};
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
  overflow: scroll;
  
  th {
    background-color: ${colors.ultraLightGray};
  }
`;
const PagingBox = styled.div`
  margin: 20px 0;
  li {
    background-color: ${colors.whiteColor};
  }
`;

const SubscriberPresentation = ({
                                    tabMenu,
                                    handleTabMenu,
                                }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="뉴스레터 구독자"
                tabList={["뉴스레터 구독자"]}
            />
            <Wrapper>
                <TableBox>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox" align="left">번호</TableCell>
                                <TableCell align="center">구독자</TableCell>
                                <TableCell align="center">이메일 주소</TableCell>
                                <TableCell align="center">구독 신청일</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/*  data.map  */}
                            {[...Array(20)].map((n, index) => (
                                    <SubscribeTableRow
                                        key={index}
                                        번호={index + 1}
                                    />
                                )
                            )}
                        </TableBody>
                    </Table>
                </TableBox>
            </Wrapper>
            <PagingBox>
                <Paging
                    // currentPage={currentPage}
                    // totalItemsCount={collectionList && collectionList.length}
                    // onChange={handleChangePage}
                    // rowsPerPage={10}
                />
            </PagingBox>
        </ContentBox>
    )
}

export default SubscriberPresentation;