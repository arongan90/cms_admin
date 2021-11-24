import React from 'react';
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";
import styled, {css} from "styled-components";
import colors from "../../../styles/colors";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {ko} from "date-fns/locale";
import DatePicker from "@mui/lab/DatePicker";
import {Modal, TextField} from "@mui/material";
import Button from "../../../components/share/Button";
import {numberAddComma} from "../../../utils/common";
import ListTable from "../../../components/share/Table/ListTable";
import AddCategoryModal from "../../../components/feature/Cryptocurrency/AddCategoryModal";

const Wrapper = styled.div`
  padding: 20px;
`;
const CategoryInfoBox = styled.div`
  margin: 30px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
  background: ${colors.whiteColor};
  text-align: center;
`;
const CategoryTable = styled.table`
  width: 100%;
  border-style: solid;
  border-width: 2px 0 2px 0;
  border-color: ${colors.grayColor};
  text-align: start;
`;
const Td = styled.td`
  width: 35%;
  height: 60px;
  padding: 0 10px;
  border-bottom: 1px solid ${colors.borderColor};
  color: ${({ fontColor }) => fontColor};
  font-weight: ${({ fontWeight }) => fontWeight};
  &:nth-child(2n - 1) {
    width: 150px !important;
    border-right: 1px solid ${colors.borderColor};
    background: ${colors.ultraLightGray};
  }

  &:nth-child(3) {
    border-left: 1px solid ${colors.borderColor};
  }
`;
const Text = styled.span`
  color: ${({ fontColor }) => fontColor};
`;
const PagingBox = styled.div`
  width: 500px;
  margin: 80px auto 20px;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 20px 0;
`;

const CategoryDetailPresentation = ({
                                        tabMenu,
                                        handleTabMenu,
                                        goBack,
                                        updateModalOpen,
                                        handleUpdateModalOpen,
                                        handleUpdateModalClose,
                                        categoryColumns,
                                        categoryInfo,
                                        categoryLists,
                                        categoryInputs,
                                        onUpdateCategory,
                                        inputChange
                                    }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="카테고리"
                tabList={["카테고리 정보"]}
            />

            <Wrapper>
                <ButtonGroup>
                    <Button
                        title="이전"
                        width={70}
                        height={46}
                        border={`1px solid ${colors.activeBlue}`}
                        fontColor={colors.activeBlue}
                        bgColor={colors.whiteColor}
                        fontSize={18}
                        onClick={goBack}
                    />
                    <Button
                        title="카테고리 수정"
                        width={150}
                        height={46}
                        fontColor={colors.whiteColor}
                        bgColor={colors.activeBlue}
                        fontSize={18}
                        onClick={handleUpdateModalOpen}
                    />
                </ButtonGroup>
                <CategoryInfoBox>
                    <CategoryTable>
                        <tbody>
                            <tr>
                                <Td>카테고리</Td>
                                <Td>
                                    {categoryInfo.category}
                                </Td>
                                <Td>점유율</Td>
                                <Td>
                                    {categoryInfo.marketShare}
                                </Td>
                            </tr>
                            <tr>
                                <Td>시가총액</Td>
                                <Td>
                                    {numberAddComma(categoryInfo.marketCap)}
                                </Td>
                                <Td>24시간 거래량</Td>
                                <Td>
                                    {categoryInfo.transactionPrice_24 && numberAddComma(categoryInfo.transactionPrice_24.total_price)}
                                </Td>
                            </tr>
                        </tbody>
                    </CategoryTable>
                </CategoryInfoBox>

                <CategoryInfoBox>
                    <ListTable
                        tableHeadColumns={categoryColumns}
                        categoryLists={categoryLists}
                    />
                </CategoryInfoBox>
            </Wrapper>

            <Modal
                open={updateModalOpen}
                onClose={handleUpdateModalClose}
            >
                <>
                    <AddCategoryModal
                        type="update"
                        categoryInputs={categoryInputs}
                        handleCategoryModalClose={handleUpdateModalClose}
                        onUpdateCategory={onUpdateCategory}
                        inputChange={inputChange}
                    />
                </>
            </Modal>

        </ContentBox>
    )
}

export default CategoryDetailPresentation;