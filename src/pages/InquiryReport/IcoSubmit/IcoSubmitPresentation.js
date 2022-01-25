import React from 'react';
import styled from "styled-components";
import colors from "../../../styles/colors";
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";
import IcoSubmitTableRow from "../../../components/feature/InquiryReport/IcoSubmitTableRow";
import {TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import Table from "@mui/material/Table";
import Paging from "../../../components/share/Paging";

const Wrapper = styled.div`
  padding: 20px 20px;
  max-width: 1550px;
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
  th:first-child {
    width: 300px;
  }
`;
const PagingBox = styled.div`
  margin: 30px auto 100px;
  li {
    background-color: ${colors.whiteColor};
  }
`;

const IcoSubmitPresentation = ({
                                   tabMenu,
                                   handleTabMenu,
                                   currentPage,
                                   rowsPerPage,
                                   handleChangePage,
                               }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="문의/신고"
                tabList={["ICO 제출"]}
            />
            <Wrapper>
                <TableBox>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>제목</TableCell>
                                <TableCell>가격(₩)</TableCell>
                                <TableCell>시작일</TableCell>
                                <TableCell>종료일</TableCell>
                                <TableCell>제출일</TableCell>
                                <TableCell>처리</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/*  data.map  */}
                            <IcoSubmitTableRow

                            />
                        </TableBody>
                    </Table>
                </TableBox>
            </Wrapper>
            <PagingBox>
                <Paging
                    currentPage={currentPage}
                    totalItemsCount={10}
                    onChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                />
            </PagingBox>
        </ContentBox>
    )
}

export default IcoSubmitPresentation;