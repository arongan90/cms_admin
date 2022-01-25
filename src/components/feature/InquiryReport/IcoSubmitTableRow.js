import React from 'react';
import styled from "styled-components";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import colors from "../../../styles/colors";
import cardenceIcon from "../../../images/icoIcon/cardence.png";
import {useHistory} from "react-router-dom";

const Row = styled(TableRow)`
  cursor: pointer;
`;
const Cell = styled(TableCell)`
  padding: 10px !important;
  text-align: center !important;
  color: ${colors.lightBlack};
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : 500};
  color: ${({fontColor}) => fontColor ? fontColor : colors.lightBlack};
  margin: ${({margin}) => margin ? margin : 0};
`;
const ImageBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 15px;
  overflow: hidden;
`;
const AppImage = styled.img`
  width: 100%;
  height: 100%;
`;

const IcoSubmitTableRow = ({
                               id = 1,
                               제목 = "Cardence.io",
                               단위 = "$CRDN",
                               가격 = 197,
                               시작일 = "2021년 7월 29일",
                               종료일 = "2021년 8월 4일",
                               제출일 = "2021년 4월 12일",
                               처리상태 = true
                           }) => {
    const history = useHistory();

    return (
        <Row onClick={() => history.push(`/icoSubmitDetail/${id}`)}>
            <Cell>
                <Box>
                    <ImageBox>
                        <AppImage src={cardenceIcon}/>
                    </ImageBox>
                    <Text fontWeight={600} margin="0 10px">{제목}</Text>
                    <Text fontColor={colors.grayColor}>
                        {단위}
                    </Text>
                </Box>
            </Cell>
            <Cell>{가격}</Cell>
            <Cell>{시작일}</Cell>
            <Cell>{종료일}</Cell>
            <Cell>{제출일}</Cell>
            <Cell>
                <Text fontWeight={600}>
                    {처리상태 ? "등록" : "미등록"}
                </Text>
            </Cell>
        </Row>
    )
}

export default IcoSubmitTableRow;