import React from 'react';
import styled, {css} from "styled-components";
import Box from '@mui/material/Box';
import HeaderContent from '../../components/share/HeaderContent';
import colors from "../../styles/colors";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IosSwitch from "../../components/share/IosSwitch";
import AddAdmin from "../../components/feature/Admin/AddAdmin";
import {Modal} from "@material-ui/core";
import UpdateAdmin from "../../components/feature/Admin/UpdateAdmin";
import ContentBox from "../../components/share/ContentBox";

const Wrapper = styled.div`
  padding: 20px;
`;
const AdminTableBox = styled.div`
  width: 100%;
  padding: 0 50px;
  margin: 50px auto;

  .css-apqrd9-MuiTableBody-root .MuiTableCell-body {
    padding: 8px 16px !important;
  }
`;

const TableDataCell = styled(TableCell)`
  width: ${({width}) => width}%;
  ${({bgcolor}) => bgcolor && css`
    background: ${({bgcolor}) => bgcolor ? bgcolor : "inherit"};
  `}
`;

const AdminPresentation = ({
                               tabMenu,
                               handleTabMenu,
                               adminData,
                               updateAdminData,
                               updateModalOpen,
                               handleUpdateModalOpen,
                               handleUpdateModalClose,
                               changePwdOpen,
                               handleChangePwdOpen,
                               handleChangePwdClose,
                               handleMemberDelete,
                           }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="관리자 계정 관리"
                tabList={["관리자 목록", "관리자 추가"]}
            />
            <Wrapper>
                {tabMenu === 0 ?
                    <AdminTableBox>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableDataCell width={5} align="center" bgcolor={colors.ultraLightGray}>번호</TableDataCell>
                                        <TableDataCell width={15} align="center"
                                                       bgcolor={colors.ultraLightGray}>이름</TableDataCell>
                                        <TableDataCell width={15} align="center"
                                                       bgcolor={colors.ultraLightGray}>아이디</TableDataCell>
                                        <TableDataCell width={15} align="center"
                                                       bgcolor={colors.ultraLightGray}>관리</TableDataCell>
                                        <TableDataCell width={15} align="center"
                                                       bgcolor={colors.ultraLightGray}>권한</TableDataCell>
                                        <TableDataCell width={15} align="center" bgcolor={colors.ultraLightGray}>로그인
                                            제한</TableDataCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {adminData.map((row) => (
                                        <TableRow
                                            key={row.num}
                                            sx={{
                                                '&:last-child td, &:last-child th': {border: 0},
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    background: colors.theadBgColor
                                                }
                                            }}
                                        >
                                            <TableDataCell component="td" scope="row"
                                                           align="center">{row.num}</TableDataCell>
                                            <TableDataCell
                                                align="center"
                                                onClick={() => handleUpdateModalOpen(row)}
                                            >
                                                {row.name}
                                            </TableDataCell>
                                            <TableDataCell
                                                align="center"
                                                onClick={handleUpdateModalOpen}
                                            >
                                                {row.user_id}
                                            </TableDataCell>
                                            <TableDataCell align="center">
                                                {row.type === "슈퍼관리자" && "슈퍼관리자"}
                                                {row.type === "계정관리자" && "계정관리자"}
                                                {row.type === "일반관리자" && "일반관리자"}
                                            </TableDataCell>
                                            <TableDataCell align="center">{row.role}</TableDataCell>
                                            <TableDataCell align="center">
                                                <IosSwitch
                                                    login={row.login}
                                                />
                                            </TableDataCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AdminTableBox>
                    :
                    <AddAdmin/>
                }
            </Wrapper>

                <Modal
                    open={updateModalOpen}
                    onClose={handleUpdateModalClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <>
                        <UpdateAdmin
                            updateAdminData={updateAdminData}
                            handleUpdateModalClose={handleUpdateModalClose}
                            changePwdOpen={changePwdOpen}
                            handleChangePwdOpen={handleChangePwdOpen}
                            handleChangePwdClose={handleChangePwdClose}
                            handleMemberDelete={handleMemberDelete}
                        />
                    </>
                </Modal>
        </ContentBox>
    )
}

export default AdminPresentation;