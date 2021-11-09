import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import colors from "../../../styles/colors";

const CollapsibleTable = props => {
    const {portfolio} = props;
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow
                sx={{'& > *': {borderBottom: 'unset'}}}
                onClick={() => setOpen(!open)}
                hover
                tabIndex={-1}
            >
                <TableCell align="center">{portfolio.id}</TableCell>
                <TableCell>{portfolio.title}</TableCell>
                <TableCell align="center">{portfolio.have_coin}</TableCell>
                <TableCell align="center">{portfolio.have_coin}</TableCell>
                <TableCell align="center">{portfolio.have_coin}</TableCell>
                <TableCell align="left" style={{ paddingLeft: 30 }}>{portfolio.have_coin}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{padding: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{margin: 1, border: `1px solid ${colors.borderColor}`}}>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>번호</TableCell>
                                        <TableCell>코인</TableCell>
                                        <TableCell align="right">현재가(₩)</TableCell>
                                        <TableCell align="right">보유</TableCell>
                                        <TableCell align="right">보유자산(₩)</TableCell>
                                        <TableCell align="right">구입금액(₩)</TableCell>
                                        <TableCell align="right">손익(₩)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {portfolio.detail_table.map((list, index) => {
                                        const {id, coin, have_coin, current_amount, assets, purchase_amount} = list;
                                        console.info('아이디 : ', id);
                                            return (
                                                <TableRow key={id}>
                                                    <TableCell component="th" scope="row">{id}</TableCell>
                                                    <TableCell>{coin}</TableCell>
                                                    <TableCell align="right">{current_amount.toLocaleString('ko-KR')}</TableCell>
                                                    <TableCell align="right">{have_coin}</TableCell>
                                                    <TableCell align="right">{assets.toLocaleString('ko-KR')}</TableCell>
                                                    <TableCell align="right">{purchase_amount.toLocaleString('ko-KR')}</TableCell>
                                                    <TableCell align="right">{(assets - purchase_amount).toLocaleString('ko-KR')}</TableCell>
                                                </TableRow>
                                            )
                                    })}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

CollapsibleTable.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};

export default CollapsibleTable;