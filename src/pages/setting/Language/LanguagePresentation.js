import React from 'react';
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";
import styled from "styled-components";
import colors from "../../../styles/colors";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import Button from "../../../components/share/Button";
import {Modal} from "@material-ui/core";
import UpdateModal from "../../../components/share/UpdateModal";

const Wrapper = styled.div`
  padding: 20px;
  max-width: 1550px;
`;
const LanguageBox = styled.div`
  border-top: 2px solid ${colors.grayColor};
  border-bottom: 1px solid ${colors.grayColor};                        
  background-color: ${colors.whiteColor};
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 100px;
  border-bottom: 1px solid ${colors.borderColor};
`;
const Text = styled.div`
  color: ${({ fontColor }) => fontColor ? fontColor : colors.lightBlack};
  font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : 500};
  font-size: ${({ fontSize }) => fontSize ? fontSize : 18}px;
  cursor: ${({ cursor }) => cursor ? cursor : "initial"};
  margin: ${({ margin }) => margin ? margin : 0};

  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputBox = styled.div`
  width: ${({ width }) => width ? width: 180}px;
  height: 35px;
  padding: 0 10px;
  margin: ${({ margin }) => margin ? margin : 0};
  border: 1px solid ${colors.borderColor};
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
`;
const SelectBox = styled.select`
  width: 180px;
  height: 35px;
  margin: 0 95px 0 20px;
  padding: 0 10px;
  cursor: pointer;
  outline: none;
  border: 1px solid ${colors.borderColor};
`;
const Row = styled.div`
  display: flex;
`;
const Cell = styled.div`
  padding: 20px;
  flex-grow: ${({ flexGrow }) => flexGrow ? flexGrow : 1};
  text-align: center;
`;

const LanguagePresentation = ({
                                  tabMenu,
                                  handleTabMenu,

                                  updateOpen,
                                  handleUpdateOpen,
                                  handleUpdateClose,

                                  onUpdateLanguage,
                                  onDeleteLanguage,
                              }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="??????"
                tabList={["?????? ??????"]}
            />

            <Wrapper>
                <LanguageBox>
                    <Top>
                        <Text>??????</Text>
                        <SelectBox>
                            <option>?????????</option>
                            <option>??????</option>
                            <option>?????????</option>
                        </SelectBox>
                        <Text>?????? ??????</Text>
                        <InputBox margin="0 0 0 20px">
                            <Input />
                        </InputBox>
                        <Button
                            width={35}
                            height={35}
                            border={`1px solid ${colors.activeBlue}`}
                            bgColor={colors.whiteColor}
                            fontColor={colors.activeBlue}
                            margin="0 0 0 10px"
                            title="+"
                        />
                    </Top>

                    <Row>
                        <Cell flexGrow={2}>
                            <Text>?????????</Text>
                        </Cell>
                        <Cell flexGrow={2}>
                            <Text>?????????</Text>
                        </Cell>
                        <Cell>
                            <Text cursor="pointer" fontColor={colors.darkBlueColor} onClick={handleUpdateOpen}>
                                ??????
                                <EditIcon />
                            </Text>
                        </Cell>
                        <Cell>
                            <Text cursor="pointer" fontColor={colors.activeRed} onClick={onDeleteLanguage}>
                                ??????
                                <HighlightOffIcon />
                            </Text>
                        </Cell>
                    </Row>

                </LanguageBox>
            </Wrapper>

            <Modal
                open={updateOpen}
                onClose={handleUpdateClose}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <>
                    <UpdateModal
                        title="??????"
                        onClose={handleUpdateClose}
                        onUpdateLanguage={onUpdateLanguage}
                    />
                </>
            </Modal>
        </ContentBox>
    )
}

export default LanguagePresentation;