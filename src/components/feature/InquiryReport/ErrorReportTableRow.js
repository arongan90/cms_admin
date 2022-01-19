import React from 'react';
import styled from 'styled-components';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import colors from "../../../styles/colors";
import bitcoinImage from "../../../images/coinIcon/bitcoin.png";

const Row = styled(TableRow)`
  cursor: pointer;
`;
const Cell = styled(TableCell)`
  padding: 10px !important;
  text-align: center !important;
  //vertical-align: ${({ vertical }) => vertical ? vertical : 'middle'};
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  
  & + & {
    margin-top: 6px;
  }
`;
const Text = styled.div`
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : 500};
  font-size: ${({fontSize}) => fontSize ? fontSize : 14}px;
  color: ${({fontColor}) => fontColor ? fontColor : colors.deepDarkGrayColor};
  white-space: pre-wrap;
  word-break: keep-all;
  text-align: left;
  ${({margin}) => margin && `
    margin: ${margin};
  `}
`;
const ImageBox = styled.div`
  width: 30px;
  height: 30px;
`;
const AppImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ErrorReportTableRow = ({
                                 id = 1,
                                이름 = "Bitcoin",
                                화폐단위 = "BTC",
                                내용 = "오늘 가격이 반영되지 않고 있는 것 같습니다.",
                                신고자 = "홍길동",
                                신고일 = "2021.02.15 오전 11:50",

                             }) => {
    return (
        <Row>
            <Cell>
                {id}
            </Cell>
            <Cell>
                <Box>
                    <ImageBox>
                        <AppImage src={bitcoinImage} />
                    </ImageBox>
                    <Text margin="0 15px" fontSize={18} fontColor={colors.lightBlack} fontWeight={600}>
                        {이름}
                    </Text>
                    <Text>
                        {화폐단위}
                    </Text>
                </Box>
                <Box>
                    <Text>
                        {내용}
                    </Text>
                </Box>
            </Cell>
            <Cell>
                {신고자}
            </Cell>
            <Cell>
                {신고일}
            </Cell>
            <Cell>

            </Cell>
        </Row>
    )
}

export default ErrorReportTableRow;