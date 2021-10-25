import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import { makeStyles } from "@material-ui/core/styles";
import colors from '../../styles/Colors';
import styled from 'styled-components';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Tooltip from '@mui/material/Tooltip';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
// import RefreshIcon from '@mui/icons-material/Refresh';

const columns = [
    {id: 'bizName', label: '회사명', minWidth: 170},
    {id: 'bizNumber', label: '사업자 번호', minWidth: 100,  align: 'right',},
    {
        id: 'ceoName',
        label: '사업자명',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'type',
        label: '상품 유형',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'date',
        label: '가입일',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

const useStyles = makeStyles({
    tableRow: {
        cursor: "pointer",
        "&:hover": {
            backgroundColor: `${colors.lightSky} !important`,
        }
    },
});

const Wrapper = styled(Paper)`
  max-width: 1200px;
  margin: 30px auto 100px;
`;

const TableContent = ({ corpList, handleModalOpen }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const classes = useStyles();

    const handleChangePage = (event, newPage) => setPage(newPage);
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    return (
        <Wrapper>
            <Paper>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{minWidth: column.minWidth, background: colors.theadBgColor, fontSize: 18, padding: '10px 16px'}}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {corpList.length > 0 ? corpList
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id} className={classes.tableRow} onClick={() => handleModalOpen(row.id)}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align} style={{fontSize: 16}}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })
                                :
                                <TableRow>
                                    <TableCell colSpan={5} style={{ textAlign: 'center', height: 100, lineHeight: 3, fontSize: 18 }}>일치하는 데이터가 없습니다</TableCell>
                                </TableRow>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={corpList.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

        </Wrapper>
    );
}

export default TableContent;