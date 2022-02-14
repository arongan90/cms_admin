import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import {visuallyHidden} from '@mui/utils';
import colors from "../../../styles/colors";
import CollapsibleTable from "./CollapsibleTable";

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
    const {headCells, order, orderBy, onRequestSort} = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox" align="center">번호</TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align}
                        sortDirection={orderBy === headCell.id ? order : false}
                        style={{width: headCell.width + '%'}}
                    >
                        {headCell.id === 'start_date' || headCell.id === 'finish_date'
                            ?
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                            :
                            headCell.label
                        }
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const UseStatusTable = ({
                            headCells,
                            interestICO,
                            portfolios,
                            cryptocurrency
                        }) => {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('start_date');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (e, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (e, newPage) => setPage(newPage);
    const handleChangeRowsPerPage = e => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    };
    // 테이블의 행이 비어있을 때 테이블 height 유지하도록 행의 높이 구하기
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - interestICO.length) : 0;

    React.useEffect(() => {
        console.info('emptyRows', emptyRows);
    }, [emptyRows]);

    return (
        <Box sx={{width: '100%', minHeight: 300}}>
            <Paper sx={{width: '100%', mb: 2, border: `1px solid ${colors.borderColor}`}}>
                {!!interestICO &&
                <>
                    <TableContainer>
                        <Table
                            sx={{minWidth: 750}}
                            aria-labelledby="tableTitle"
                            size={'medium'}
                        >
                            <EnhancedTableHead
                                order={order}
                                orderBy={orderBy}
                                onRequestSort={handleRequestSort}
                                rowCount={interestICO.length}
                                headCells={headCells}
                            />
                            <TableBody>
                                {stableSort(interestICO, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow
                                                hover
                                                onClick={() => console.info('나중에 랑크 걸어주기.')}
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={row.id}
                                            >
                                                <TableCell align="center">{row.num}</TableCell>
                                                <TableCell align="left">{row.ico}</TableCell>
                                                <TableCell align="right">{row.price.toLocaleString('ko-KR')}</TableCell>
                                                <TableCell align="right">{row.stage}</TableCell>
                                                <TableCell align="right">{row.start_date}</TableCell>
                                                <TableCell align="right">{row.finish_date}</TableCell>
                                                <TableCell align="right">{row.amount.toLocaleString('ko-KR')}</TableCell>
                                                <TableCell align="right">{row.be_listed ? 'O' : ''}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow style={{height: (53) * emptyRows}}>
                                        <TableCell colSpan={6}/>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={interestICO.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </>}

                {!!cryptocurrency &&
                <>
                    <TableContainer>
                        <Table
                            sx={{minWidth: 750}}
                            aria-labelledby="tableTitle"
                            size={'medium'}
                        >
                            <EnhancedTableHead
                                order={order}
                                orderBy={orderBy}
                                onRequestSort={handleRequestSort}
                                rowCount={cryptocurrency.length}
                                headCells={headCells}
                            />
                            <TableBody>
                                {stableSort(cryptocurrency, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow
                                                hover
                                                onClick={() => console.info('나중에 랑크 걸어주기.')}
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={row.name}
                                            >
                                                <TableCell>{row.num}</TableCell>
                                                <TableCell>{row.coin}</TableCell>
                                                <TableCell align="right">{row.current_amount}</TableCell>
                                                <TableCell align="center">{row.interest ? 'O' : ''}</TableCell>
                                                <TableCell align="center">{row.portfolio ? 'O' : ''}</TableCell>
                                                <TableCell align="left">{row.do_have}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: 40 * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6}/>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={cryptocurrency.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </>}


                {!!portfolios &&
                <>
                    <TableContainer>
                        <Table
                            sx={{minWidth: 750}}
                            aria-labelledby="tableTitle"
                            size={'medium'}
                        >
                            <EnhancedTableHead
                                order={order}
                                orderBy={orderBy}
                                onRequestSort={handleRequestSort}
                                rowCount={portfolios.length}
                                headCells={headCells}
                            />
                            <TableBody>
                                {portfolios.map((portfolio, index) => (
                                    <CollapsibleTable key={portfolio.id} portfolio={portfolio}/>
                                ))}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: (53) * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6}/>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={portfolios.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </>}
            </Paper>
        </Box>
    );
}

export default UseStatusTable;