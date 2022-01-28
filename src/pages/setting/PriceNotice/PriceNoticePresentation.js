import React from 'react';
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";
import styled from "styled-components";
import colors from "../../../styles/colors";
import Button from "../../../components/share/Button";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Wrapper = styled.div`
  padding: 20px;
  max-width: 1550px;
`;
const PriceBox = styled.div`
  min-height: calc(100vh - 300px);
  border-top: 2px solid ${colors.grayColor};
  border-bottom: 1px solid ${colors.grayColor};
  background-color: ${colors.whiteColor};
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 50px;
  border-bottom: 1px solid ${colors.grayColor};
`;
const RadioButton = styled.div`
  width: 35px;
  height: 35px;
  text-align: center;
  font-size: ${({fontSize}) => fontSize ? fontSize : 20}px;
  line-height: ${({lineHeight}) => lineHeight ? lineHeight : 1.5};
  color: ${({active}) => active ? colors.whiteColor : colors.deepNavyColor};
  border: ${({active}) => active ? 'none' : `1px solid ${colors.grayColor}`};
  background-color: ${({active}) => active ? colors.deepNavyColor : colors.whiteColor};
  cursor: pointer;
`;
const InputBox = styled.div`
  width: 100px;
  height: 35px;
  padding: 0 10px;
  margin: 0 10px 0 40px;
  border: 1px solid ${colors.borderColor};
  border-radius: 4px;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
`;
const ListWrapper = styled.div`
  display: flex;
`;
const ListBox = styled.div`
  width: 50%;
  min-height: 600px;
  & + & {
    border-left: 1px solid ${colors.grayColor};
  }
`;
const Row = styled.div`
  padding: 10px 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.borderColor};
`;
const Text = styled.div`
  color: ${({fontColor}) => fontColor ? fontColor : colors.lightBlack};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : 500};
  font-size: ${({fontSize}) => fontSize ? fontSize : 18}px;
  margin: ${({margin}) => margin ? margin : 0};
  cursor: ${({cursor}) => cursor ? cursor : "initial"};
  display: flex;
  align-items: center;
`;

const PriceNoticePresentation = ({
                                     tabMenu,
                                     handleTabMenu,
                                     plusMinus,
                                     handlePlusMinus,
                                     onDeletePrice,
                                 }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="가격 알림"
                tabList={["가격 알림"]}
            />

            <Wrapper>
                <PriceBox>
                    <Top>
                        <RadioButton active={plusMinus === "+"} onClick={() => handlePlusMinus("+")}> + </RadioButton>
                        <RadioButton active={plusMinus === "-"} onClick={() => handlePlusMinus("-")} fontSize={28}
                                     lineHeight={1}> - </RadioButton>

                        <InputBox>
                            <Input

                            />
                        </InputBox>
                        <Text>%</Text>
                        <Button
                            width={35}
                            height={35}
                            title="+"
                            border={`1px solid ${colors.activeBlue}`}
                            fontColor={colors.activeBlue}
                            bgColor={colors.whiteColor}
                            margin="0 0 0 40px"

                        />
                    </Top>

                    <ListWrapper>
                        <ListBox>
                            <Row>
                                <Text fontWeight={600}>10 %</Text>
                                <Text onClick={onDeletePrice} fontColor={colors.activeRed} cursor="pointer" margin="0 0 0 50px">
                                    삭제
                                    <HighlightOffIcon/>
                                </Text>
                            </Row>
                        </ListBox>
                        <ListBox>
                            <Row>
                                <Text fontWeight={600}>- 10 %</Text>
                                <Text onClick={onDeletePrice} fontColor={colors.activeRed} cursor="pointer" margin="0 0 0 50px">
                                    삭제
                                    <HighlightOffIcon/>
                                </Text>
                            </Row>
                        </ListBox>
                    </ListWrapper>


                </PriceBox>
            </Wrapper>
        </ContentBox>
    )
}

export default PriceNoticePresentation;