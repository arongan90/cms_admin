import React from 'react';
import styled from "styled-components";
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";
import colors from "../../../styles/colors";
import Table from "@mui/material/Table";
import {TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import Paging from "../../../components/share/Paging";
import ErrorReportTableRow from "../../../components/feature/InquiryReport/ErrorReportTableRow";

const Wrapper = styled.div`
  max-width: 1550px;
  padding: 20px 20px;
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
  margin: 20px 0 0;
  border: 1px solid ${colors.borderColor};
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);

  th {
    text-align: center;
    background-color: ${colors.ultraLightGray};
  }
  th:nth-child(2) {
    width: 400px;
    text-align: left;
  }
  th:last-child,
  td:last-child {
    width: 250px;
    text-align: left !important;
  }
  th:last-child {
    padding-left: 24px !important;
  }
`;
const PagingBox = styled.div`
  margin: 50px auto 100px;
  li {
    background-color: ${colors.whiteColor};
  }
`;

const ErrorReportPresentation = ({
                                     tabMenu,
                                     handleTabMenu,

                                     currentPage,
                                     rowsPerPage,
                                     handleChangePage,

                                     handleDoneError,
                                     date,
                                     checked,
                                 }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="??????/??????"
                tabList={["?????? ??????"]}
            />
            <Wrapper>
                <SelectBox>
                    <Select>
                        <option value="">??????</option>
                        <option value="">?????????</option>
                        <option value="">????????????</option>
                    </Select>
                </SelectBox>

                <TableBox>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">??????</TableCell>
                                <TableCell>?????? / ?????? ??????</TableCell>
                                <TableCell>?????????</TableCell>
                                <TableCell>?????????</TableCell>
                                <TableCell>??????</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* data.map */}
                            <ErrorReportTableRow
                                handleDoneError={handleDoneError}
                                date={date}
                                checked={checked}
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

export default ErrorReportPresentation;