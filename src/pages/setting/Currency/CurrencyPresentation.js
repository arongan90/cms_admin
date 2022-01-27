import React from 'react';
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";
import styled from "styled-components";
import colors from "../../../styles/colors";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import krFlag from "../../../images/nationalFlag/kr.svg";
import FormControl from "@mui/material/FormControl";
import uploadImage from "../../../images/UploadImage.svg";
import Button from "../../../components/share/Button";
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Wrapper = styled.div`
  padding: 20px;
  max-width: 1550px;
`;
const CurrencyBox = styled.div`
  border-top: 2px solid ${colors.grayColor};
  border-bottom: 1px solid ${colors.grayColor};
  background-color: ${colors.whiteColor};
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 50px;
  border-bottom: 1px solid ${colors.borderColor};

  // Material Select
  .css-574lq2-MuiFormControl-root {
    margin: 0 0 0 20px;
  }
  .css-ocs8jh-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    height: 35px !important;
    padding: 0 10px;
  }
  .css-h33d2j-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 4px;
  }
  .css-ocs8jh-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select {
    display: flex;
    align-items: center;
  }
`;
const Text = styled.div`
  color: ${({ fontColor }) => fontColor ? fontColor : colors.lightBlack};
  font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : 500};
  font-size: ${({ fontSize }) => fontSize ? fontSize : 18}px;
  cursor: ${({ cursor }) => cursor ? cursor : "initial"};
  margin: ${({ margin }) => margin ? margin : 0};
`;
const InputBox = styled.div`
  width: ${({ width }) => width ? width: 100}px;
  height: 35px;
  padding: 0 10px;
  margin: ${({ margin }) => margin ? margin : 0};
  border: 1px solid ${colors.borderColor};
  border-radius: 4px;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
`;
const Cell = styled.div`
  padding: 20px;
  text-align: center;
  border: 1px solid red;
`;
const FlagIcon = styled.label`
  width: 35px;
  height: 35px;
  margin-left: 10px;
  border-radius: 5px;
  position: relative;
  border: 1px solid ${colors.borderColor};
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding-top: 2px;
  color: ${colors.grayColor};
  cursor: pointer;
`;
const PreviewBox = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 5px;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  top: -1px;
`;
const FileInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  display: none;
`;
const ImageBox = styled.div`
  width: ${({ width }) => width ? width : 24}px;
  height: ${({ height }) => height ? height : 24}px;
  margin: ${({ margin }) => margin ? margin : "0 10px 0 0"}px;
`;
const AppImage = styled.img`
  width: ${({ width }) => width ? width : 24}px;
  height: ${({ height }) => height ? height : 24}px;
`;

const CurrencyPresentation = ({
                                  tabMenu,
                                  handleTabMenu,
                                  currency,
                                  onCurrencyChange,
                              }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="화폐"
                tabList={["화폐 설정"]}
            />
            <Wrapper>
                <CurrencyBox>
                    <Top>
                        <Text>화폐</Text>
                        <FormControl sx={{m: 1, minWidth: 300}}>
                            <Select
                                value={currency}
                                onChange={onCurrencyChange}
                            >
                                <MenuItem value="KRW">
                                    <ImageBox>
                                        <AppImage src={krFlag} />
                                    </ImageBox>
                                    <Text fontSize={16}>South Korea Won</Text>
                                    <Text fontSize={16} margin="0 0 0 20px" fontColor={colors.darkGrayColor}>KRW ₩</Text>
                                </MenuItem>
                                <MenuItem value="ethereum">Ethereum</MenuItem>
                                <MenuItem value="tether">Tether</MenuItem>
                                <MenuItem value="BNB">BNB</MenuItem>
                            </Select>
                        </FormControl>

                        <FlagIcon>
                            <FileInput type="file" accept="image/*" />
                            {/*{addIcoState.coinImage &&
                            <PreviewBox>
                                <AppImage width="100%" height="100%" src={addIcoState.coinImage}/>
                            </PreviewBox>
                            }*/}
                            <AppImage width={20} height={20} src={uploadImage}/>
                            ICON
                        </FlagIcon>


                        <Text margin="0 20px 0 30px">ISO 표기 (3자리)</Text>
                        <InputBox>
                            <Input

                            />
                        </InputBox>

                        <Text margin="0 20px 0 30px">화폐기호</Text>
                        <InputBox
                            width={60}
                        >
                            <Input

                            />
                        </InputBox>

                        <Button
                            width={35}
                            height={35}
                            title="+"
                            border={`1px solid ${colors.activeBlue}`}
                            fontColor={colors.activeBlue}
                            bgColor={colors.whiteColor}
                            margin="0 0 0 10px"

                        />
                    </Top>

                    <Row>
                        <Cell>
                            <Row>
                                <ImageBox>
                                    <AppImage src={krFlag} />
                                </ImageBox>
                                <Text>
                                    South Korea Won
                                </Text>
                            </Row>
                        </Cell>
                        <Cell>
                            <Text>KRW</Text>
                        </Cell>
                        <Cell>
                            <Text>￦</Text>
                        </Cell>
                        <Cell>
                            <Text>
                                수정<EditIcon />
                            </Text>
                        </Cell>
                        <Cell>
                            <Text>
                                삭제
                                <HighlightOffIcon />
                            </Text>
                        </Cell>
                    </Row>
                </CurrencyBox>
            </Wrapper>
        </ContentBox>
    )
}

export default CurrencyPresentation;