import React from 'react';
import styled from "styled-components";
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";
import colors from "../../../styles/colors";
import Table from "@mui/material/Table";
import {TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import QnaTableRow from "../../../components/feature/InquiryReport/QnaTableRow";
import Paging from "../../../components/share/Paging";

const Wrapper = styled.div`
  padding: 20px 20px;
  max-width: 1550px;
  min-height: calc(100vh - 144px);
`;
const SelectBox = styled.div`
  text-align: right;
  padding-right: 20px;
`;
const Select = styled.select`
  width: 200px;
  height: 40px;
  padding: 0 10px;
  cursor: pointer;
  border: 1px solid ${colors.borderColor};
`;
const TableBox = styled.div`
  min-height: calc(100vh - 300px);
  margin: 20px 0;
  border: 1px solid ${colors.borderColor};
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);

  th {
    text-align: center;
    background-color: ${colors.ultraLightGray};
  }
  th:nth-child(2) {
    width: 600px;
    text-align: left;
  }
`;
const PagingBox = styled.div`
  width: 500px;
  margin: 80px auto 20px;
  li {
    background-color: ${colors.whiteColor};
  }
`;

const QnaPresentation = ({
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
                tabList={["온라인 문의"]}
            />
            <Wrapper>
                <SelectBox>
                    <Select>
                        <option value="">전체</option>
                        <option value="">미답변</option>
                        <option value="">답변완료</option>
                    </Select>
                </SelectBox>

                <TableBox>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">번호</TableCell>
                                <TableCell>문의 내용</TableCell>
                                <TableCell>문의자</TableCell>
                                <TableCell>문의일</TableCell>
                                <TableCell>답변일</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/*  data.map  */}
                            <QnaTableRow

                            />
                        </TableBody>
                    </Table>
                </TableBox>
                <PagingBox>
                    <Paging
                        currentPage={currentPage}
                        totalItemsCount={10}
                        onChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                    />
                </PagingBox>
            </Wrapper>
        </ContentBox>
    )
}

export default QnaPresentation;