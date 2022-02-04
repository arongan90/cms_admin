import React from 'react';
import styled from "styled-components";
import colors from "../../../styles/colors";
import CloseIcon from '@mui/icons-material/Close';
import {Table, TableBody, TableCell, TableRow} from "@mui/material";

const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  padding: 50px 20px;
  position: relative;
  border: 1px solid ${colors.grayColor};
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;
const CloseButton = styled.div`
  width: 26px;
  height: 26px;
  text-align: right;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
const TableBox = styled.div`
  height: ${({ height }) => height ? height : 36}px;
  border-top: 2px solid ${colors.grayColor};
  border-bottom: 1px solid ${colors.grayColor};
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
  overflow-y: scroll;

  td:nth-child(1) {
    width: 100px;
    border-right: 1px solid ${colors.theadBgColor};
    background-color: ${colors.ultraLightGray};
  }
`;
const MailProgress = styled.div`
  margin: 40px 0 0;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;
const Text = styled.div`
  width: ${({ width }) => width ? width : 'auto'};
  color: ${({fontColor}) => fontColor ? fontColor : colors.lightBlack};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : 500};
  font-size: ${({fontSize}) => fontSize ? fontSize : 16}px;
  margin: ${({margin}) => margin ? margin : 0};
  //padding: ${({padding}) => padding ? padding : 0};
  background-color: ${({bgColor}) => bgColor ? bgColor : colors.whiteColor};
`;
const Progress = styled.progress`
    -webkit-appearance: none;
    transition: 0.8s;

  &::-webkit-progress-bar {
    border-radius: 20px;
    border: 1px solid ${colors.borderColor};
    background-color: ${colors.ultraLightGray};
  }

  &::-webkit-progress-value {
    border-radius: 20px;
    background-color: ${colors.activeBlue};
  }
`;

const SendMailStatus = ({
                            onClose,
                        }) => {
    return (
        <Wrapper>
            <CloseButton onClick={onClose}><CloseIcon/></CloseButton>
            <TableBox>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                메일
                            </TableCell>
                            <TableCell>
                                Alternative of Cryptocurrencies to Bitcoin
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableBox>
            <MailProgress>
                <Text fontWeight={600} fontColor={colors.blackColor}>발송</Text>
                <Text margin="0 20px 0 4px">(2)</Text>
                <Progress max={100} value={30} />
                <Text fontSize={12} margin="0 0 0 20px">4명 중 1명 발송완료 (25%)</Text>
            </MailProgress>

            <TableBox height={380}>
                <Table>
                    <TableBody>
                        {[...Array(20)].map((n, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    홍길동
                                </TableCell>
                                <TableCell>
                                    kildong@gmail.com
                                </TableCell>
                                <TableCell>
                                    2021.05.12 오후 2:30:05 발송완료
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableBox>
        </Wrapper>
    )
}

export default SendMailStatus;