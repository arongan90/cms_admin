import React from 'react';
import styled, {css} from "styled-components";
import colors from "../../../styles/colors";
import uploadImage from "../../../images/UploadImage.svg";

const NewsForm = styled.div`
  margin: 30px auto 80px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
  background: ${colors.whiteColor};
  text-align: center;
`;
const NewsTable = styled.table`
  width: 100%;
  border-style: solid;
  border-width: 2px 0 2px 0;
  border-color: ${colors.grayColor};
  text-align: start;
`;
const Td = styled.td`
  height: 60px;
  padding: 10px;
  border-bottom: 1px solid ${colors.borderColor};
  
  &:first-child {
    width: 200px;
    border-right: 1px solid ${colors.borderColor};
    background: ${colors.ultraLightGray};
  }
`;
const InputBox = styled.div`
  min-width: 300px;
  width: 70%;
  height: 35px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({border}) => border && css`
    border: 1px solid ${colors.borderColor};
  `}
`;
const Input = styled.input`
  width: 100%;
  border: none;
`;
const Textarea = styled.textarea`
  min-width: 300px;
  width: 70%;
  height: 200px;
  padding: 0 10px;
  resize: none;
  border: none;
  outline: none;
  ${({border}) => border && css`
    border: 1px solid ${colors.borderColor};
  `}
`;
const Select = styled.select`
  width: 100px;
  height: 100%;
  padding: 5px 10px;
  border: none;
  outline: none;
  color: ${colors.darkGrayColor};
  cursor: pointer;
`;
const ImageInputLabel = styled.label`
  width: 35px;
  height: 35px;
  margin-right: 10px;
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
const FileInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  display: none;
`;
const AppImage = styled.img`
  ${({width}) => width && css`
    width: ${width};
  `};
  ${({height}) => height && css`
    height: ${height};
  `};
`;
const RowBox = styled.div`
  display: flex;
  align-items: center;
`;

const NewsInfoTable = () => {
    return (
        <NewsForm>
            <NewsTable>
                <tbody>
                    <tr>
                        <Td>제목</Td>
                        <Td>
                            {/* 수정 누르면 border 생김 */}
                            <RowBox>
                                <ImageInputLabel>
                                    <FileInput type="file" accept="image/*" />
                                    {/*{addIcoState.coinImage &&
                                    <PreviewBox>
                                        <AppImage width="100%" height="100%" src={addIcoState.coinImage}/>
                                    </PreviewBox>
                                    }*/}
                                    <AppImage width="60%" height="60%" src={uploadImage}/>
                                    ICON
                                </ImageInputLabel>
                                <InputBox>
                                    <Input />
                                </InputBox>
                            </RowBox>
                        </Td>
                    </tr>
                    <tr>
                        <Td>요약 내용</Td>
                        <Td>
                            <Textarea />
                        </Td>
                    </tr>
                    <tr>
                        <Td>출처</Td>
                        <Td>
                            <InputBox>
                                <Input />
                            </InputBox>
                        </Td>
                    </tr>
                    <tr>
                        <Td>기사일</Td>
                        <Td>
                            <InputBox>
                                <Input />
                            </InputBox>
                        </Td>
                    </tr>
                    <tr>
                        <Td>링크 URL</Td>
                        <Td>
                            <InputBox>
                                <Input />
                            </InputBox>
                        </Td>
                    </tr>
                    <tr>
                        <Td>연관 암호화폐</Td>
                        <Td>
                            <Select>
                                <option value="BTN">Bitcoin</option>
                                <option value="ETH">Ethereum</option>
                            </Select>
                        </Td>
                    </tr>
                </tbody>
            </NewsTable>
        </NewsForm>
    )
}

export default NewsInfoTable;