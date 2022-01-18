import React from 'react';
import styled, {css} from "styled-components";
import {useHistory} from "react-router-dom";
import colors from "../../../styles/colors";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const Row = styled(TableRow)`
  cursor: pointer;
`;
const Cell = styled(TableCell)`
  padding: 10px !important;
  text-align: center !important;
  vertical-align: top !important;
`;
const Text = styled.div`
  font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : 500};
  color: ${({ fontColor }) => fontColor ? fontColor : colors.deepDarkGrayColor};
  white-space: pre-wrap;
  text-align: left;
  ${({ margin }) => margin && `
    margin: ${margin};
  `}
`;

const QnaTableRow = ({
                         id = 1,
                         제목 = "카카오 계정이 변경되었어요.",
                         문의내용 = "카카오계정 변경 또는 카카오계정 정지 등으로 인해 기존에 로그인 시 사용하던 카카오계정을 이용하지 못할 경우에는 새로운 카카오계정으로 가입하여 계정 복구를 접수 부탁드립니다.",
                         문의자 = "홍길동",
                         문의일 = "2021.02.15",
                         답변일 = "2021.02.16",
                     }) => {
    const history = useHistory();

    return (
        //  onClick={() => history.push(`/qna/${id}`)}
        <Row>
            <Cell>
                {id}
            </Cell>
            <Cell>
                <Text fontColor={colors.lightBlack} fontWeight={800}>{제목}</Text>
                <Text margin="10px 0 0 0">{문의내용}</Text>
            </Cell>
            <Cell>
                {문의자}
            </Cell>
            <Cell>
                {문의일}
            </Cell>
            <Cell>
                {답변일}
            </Cell>
        </Row>
    )
}

export default QnaTableRow;