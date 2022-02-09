import React from 'react';
import styled from "styled-components";
import colors from "../../../styles/colors";
import IconImageUpload from "../../share/IconImageUpload";
import Button from "../../share/Button";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${colors.deepNavyColor};
  margin: 10px 0 30px;
`;
const AddTable = styled.table`
  width: 100%;
  border-top: 2px solid ${colors.deepDarkGrayColor};
  border-bottom: 1px solid ${colors.deepDarkGrayColor};
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);

  td {
    width: calc((100% - 300px) / 2);
    padding: 10px 16px;
    bordeR: 1px solid ${colors.borderColor};
  }

  td:nth-child(2n + 1) {
    width: 150px;
  }
`;
const RowBox = styled.div`
  display: flex;
  align-items: center;
`;
const InputBox = styled.div`
  width: ${({width}) => width ? width : 200}px;
  height: 35px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${colors.borderColor};
  border-radius: 4px;
  padding: 0 10px;
`;
const Input = styled.input`
  width: 90%;
  height: 100%;
  border: none;

  &::placeholder {
    font-size: 12px;
  }
`;
const Select = styled.select`
  width: 200px;
  padding: 5px;
  height: 35px;
  color: ${colors.darkGrayColor};
  border: 1px solid ${colors.borderColor};
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`;
const ButtonGroup = styled.div`
  margin: 30px 0;
  padding-right: 20px;
  text-align: right;
`;

const AddTrade = ({
                      addTradeInput,
                      onInputChange,
                      onCancel,
                      onAddTrade,
                  }) => {
    return (
        <Wrapper>
            <Title>거래소 추가</Title>
            <AddTable>
                <tbody>
                <tr>
                    <td>거래소명</td>
                    <td>
                        <RowBox>
                            <IconImageUpload
                                // onChange={}
                                state={addTradeInput}
                            />
                            <InputBox>
                                <Input
                                    name="name"
                                    value={addTradeInput.name}
                                    onChange={onInputChange}
                                    placeholder="거래소 명을 입력해주세요."
                                />
                            </InputBox>
                        </RowBox>
                    </td>
                    <td>구분</td>
                    <td>
                        <Select
                            name="type"
                            value={addTradeInput.type}
                            onChange={onInputChange}
                        >
                            <option value="spot">스팟</option>
                            <option value="dex">DEX</option>
                            <option value="derivative">파생상품</option>
                        </Select>
                    </td>
                </tr>
                <tr>
                    <td>신뢰점수</td>
                    <td>
                        <InputBox width={120}>
                            <Input
                                name="trustScore"
                                value={addTradeInput.trustScore}
                                onChange={onInputChange}
                            />
                        </InputBox>
                    </td>
                    <td>마켓</td>
                    <td>
                        <InputBox width={120}>
                            <Input
                                name="market"
                                value={addTradeInput.market}
                                onChange={onInputChange}
                            />
                        </InputBox>
                    </td>
                </tr>
                <tr>
                    <td>사이트 URL</td>
                    <td colSpan={3}>
                        <InputBox width={700}>
                            <Input
                                name="siteURL"
                                value={addTradeInput.siteURL}
                                onChange={onInputChange}
                                placeholder="https://..."
                            />
                        </InputBox>
                    </td>
                </tr>
                <tr>
                    <td>수수료 URL</td>
                    <td colSpan={3}>
                        <InputBox width={700}>
                            <Input
                                name="feeURL"
                                value={addTradeInput.feeURL}
                                onChange={onInputChange}
                                placeholder="https://..."
                            />
                        </InputBox>
                    </td>
                </tr>
                <tr>
                    <td>채팅 URL</td>
                    <td colSpan={3}>
                        <InputBox width={700}>
                            <Input
                                name="chatURL"
                                value={addTradeInput.chatURL}
                                onChange={onInputChange}
                                placeholder="https://..."
                            />
                        </InputBox>
                    </td>
                </tr>
                <tr>
                    <td>트위터 URL</td>
                    <td colSpan={3}>
                        <InputBox width={700}>
                            <Input
                                name="twitterURL"
                                value={addTradeInput.twitterURL}
                                onChange={onInputChange}
                                placeholder="https://..."
                            />
                        </InputBox>
                    </td>
                </tr>
                </tbody>
            </AddTable>

            <ButtonGroup>
                <Button
                    title="취소"
                    width={120}
                    height={38}
                    fontSize={16}
                    bgColor={colors.whiteColor}
                    border={`1px solid ${colors.deepNavyColor}`}
                    fontColor={colors.deepNavyColor}
                    onClick={onCancel}
                />
                <Button
                    title="추가"
                    margin="0 0 0 15px"
                    width={120}
                    height={38}
                    fontSize={16}
                    bgColor={colors.deepNavyColor}
                    fontColor={colors.whiteColor}
                    onClick={onAddTrade}
                />
            </ButtonGroup>
        </Wrapper>
    )
}

export default AddTrade;