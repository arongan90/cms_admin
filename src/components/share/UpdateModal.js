import React from 'react';
import styled, {css} from "styled-components";
import colors from "../../styles/colors";
import Button from "./Button";
import uploadImage from "../../images/UploadImage.svg";

const Wrapper = styled.div`
  width: 330px;
  height: ${({height}) => height ? height : 270}px;
  padding: 20px;
  border: 1px solid ${colors.grayColor};
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 20px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 15px;
  }
`;
const Text = styled.div`
  width: 80px;
  font-size: 16px;
  font-weight: 600;
  color: ${colors.lightBlack};
`;
const SelectBox = styled.select`
  width: 200px;
  height: 35px;
  padding: 0 10px;
  cursor: pointer;
  outline: none;
  border: 1px solid ${colors.borderColor};
`;
const Input = styled.input`
  width: ${({ width }) => width ? width : 200}px;
  height: 35px;
  padding: 0 10px;
  border: 1px solid ${colors.borderColor};
`;
const ButtonGroup = styled.div`
  margin: 36px 0;
  text-align: center;
`;
const FlagIcon = styled.label`
  width: 35px;
  height: 35px;
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
const AppImage = styled.img`
  width: 20px;
  height: 20px;
`;

const UpdateModal = ({
                         title,
                         height,
                         onClose,
                     }) => {
    return (
        <Wrapper height={height}>
            <Title>{title} ??????</Title>
            <Row>
                <Text>??????</Text>
                <SelectBox>
                    <option>?????????</option>
                    <option>??????</option>
                    <option>?????????</option>
                </SelectBox>
            </Row>

            {title === "??????" && (
                <Row>
                    <Text>??????</Text>
                    <Input/>
                </Row>
            )}

            {title === "??????" && (
                <>
                    <Row>
                        <Text>?????????</Text>
                        <FlagIcon>
                            <FileInput type="file" accept="image/*"/>
                            {/*{addIcoState.coinImage &&
                            <PreviewBox>
                                <AppImage width="100%" height="100%" src={addIcoState.coinImage}/>
                            </PreviewBox>
                            }*/}
                            <AppImage width={20} height={20} src={uploadImage}/>
                            ICON
                        </FlagIcon>
                    </Row>
                    <Row>
                        <Text>ISO</Text>
                        <Input
                            width={100}
                        />
                    </Row>
                    <Row>
                        <Text>????????????</Text>
                        <Input
                            width={60}
                        />
                    </Row>
                </>
            )}


            <ButtonGroup>
                <Button
                    title="??????"
                    width={90}
                    height={38}
                    fontSize={18}
                    bgColor={colors.whiteColor}
                    border={`1px solid ${colors.darkBlueColor}`}
                    fontColor={colors.darkBlueColor}
                    onClick={onClose}
                />
                <Button
                    title="??????"
                    margin="0 0 0 15px"
                    width={90}
                    height={38}
                    fontSize={18}
                    bgColor={colors.darkBlueColor}
                    fontColor={colors.whiteColor}
                />
            </ButtonGroup>
        </Wrapper>
    )
}

export default UpdateModal;