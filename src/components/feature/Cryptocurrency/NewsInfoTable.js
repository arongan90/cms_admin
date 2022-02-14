import React from 'react';
import styled, {css} from "styled-components";
import colors from "../../../styles/colors";
import uploadImage from "../../../images/UploadImage.svg";

const NewsForm = styled.div`
  margin: 0 0 40px;
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
    border-radius: 4px;
  `}
`;
const Input = styled.input`
  width: 100%;
  border: none;
`;
const Textarea = styled.textarea`
  min-width: 300px;
  width: 100%;
  height: 200px;
  padding: 10px;
  resize: none;
  border: none;
  outline: none;
  border: ${({ update }) => update ? `1px solid ${colors.borderColor}` : `1px solid ${colors.whiteColor}`};
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
  width: 120px;
  height: 80px;
  margin-right: 10px;
  border-radius: 5px;
  position: relative;
  border: 1px solid ${colors.borderColor};
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.grayColor};
  cursor: pointer;
`;
const FileInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  display: none;
`;
const PreviewBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  top: -1px;
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

const NewsInfoTable = ({
                           update = true,
                           addNewsInfo,
                           onNewsInfoChange,
                           thumbnailUpload,
                       }) => {
    const { thumbnailImage, thumbnail, content, source, date, url, currency } = addNewsInfo;

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
                                    <FileInput type="file" accept="image/*" onChange={thumbnailUpload} />
                                    {Object.keys(thumbnailImage).length !== 0 && (
                                        <PreviewBox>
                                            <AppImage width="100%" height="100%" src={thumbnailImage}/>
                                        </PreviewBox>
                                    )}
                                    <AppImage width="50%" height="50%" src={uploadImage}/>
                                    썸네일
                                </ImageInputLabel>
                                <InputBox border={update}>
                                    <Input
                                        name="thumbnail"
                                        value={thumbnail}
                                        onChange={onNewsInfoChange}
                                        readOnly={!update}
                                        placeholder="썸네일의 제목을 입력해주세요."
                                    />
                                </InputBox>
                            </RowBox>
                        </Td>
                    </tr>
                    <tr>
                        <Td>요약 내용</Td>
                        <Td>
                            <Textarea
                                update={update}
                                name="content"
                                value={content}
                                onChange={onNewsInfoChange}
                                readOnly={!update}
                                placeholder="요약 내용을 입력해주세요."
                            />
                        </Td>
                    </tr>
                    <tr>
                        <Td>출처</Td>
                        <Td>
                            <InputBox border={update}>
                                <Input
                                    name="source"
                                    value={source}
                                    onChange={onNewsInfoChange}
                                    readOnly={!update}
                                    placeholder="출처를 입력해주세요."
                                />
                            </InputBox>
                        </Td>
                    </tr>
                    <tr>
                        <Td>기사일</Td>
                        <Td>
                            <InputBox border={update}>
                                <Input
                                    name="date"
                                    value={date}
                                    onChange={onNewsInfoChange}
                                    placeholder="기사일을 입력해주세요."
                                />
                            </InputBox>
                        </Td>
                    </tr>
                    <tr>
                        <Td>링크 URL</Td>
                        <Td>
                            <InputBox border={update}>
                                <Input
                                    name="url"
                                    value={url}
                                    onChange={onNewsInfoChange}
                                    readOnly={!update}
                                    placeholder="링크 URL을 입력해주세요."
                                />
                            </InputBox>
                        </Td>
                    </tr>
                    <tr>
                        <Td>연관 암호화폐</Td>
                        <Td>
                            <Select
                                name="currency"
                                value={currency}
                                onChange={onNewsInfoChange}
                                disabled={!update}
                            >
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