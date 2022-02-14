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
  margin: 0 auto 20px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
  background: ${colors.whiteColor};
`;
const CategoryTable = styled.table`
  width: 100%;
  border-style: solid;
  border-width: 2px 0 2px 0;
  border-color: ${colors.grayColor};
  text-align: start;
  
  td {
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
  }
`;
const Text = styled.div`
  font-size: ${({ fontSize }) => fontSize ? fontSize : 16}px;
  font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : 500};
  color: ${({ fontColor }) => fontColor};
  margin: ${({ margin }) => margin ? margin : 0};
`;
const PagingBox = styled.div`
  width: 500px;
  margin: 80px auto 20px;
`;
const ButtonGroup = styled.div`
  text-align: center;
  margin: 50px 0 100px;
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
                <CategoryInfoBox>
                    <CategoryTable>
                        <tbody>
                            <tr>
                                <td>카테고리</td>
                                <td>
                                    {categoryInfo.category}
                                </td>
                                <td>점유율</td>
                                <td>
                                    {categoryInfo.marketShare}
                                </td>
                            </tr>
                            <tr>
                                <td>시가총액</td>
                                <td>
                                    {numberAddComma(categoryInfo.marketCap)}
                                </td>
                                <td>24시간 거래량</td>
                                <td>
                                    {categoryInfo.transactionPrice_24 && numberAddComma(categoryInfo.transactionPrice_24.total_price)}
                                </td>
                            </tr>
                        </tbody>
                    </CategoryTable>
                </CategoryInfoBox>

                <CategoryInfoBox>
                    <Text margin="0 0 20px" fontSize={18} fontWeight={600}>코인</Text>
                    <ListTable
                        tableHeadColumns={categoryColumns}
                        categoryLists={categoryLists}
                    />
                </CategoryInfoBox>

                <ButtonGroup>
                    <Button
                        title="이전"
                        width={120}
                        height={38}
                        border={`1px solid ${colors.darkBlueColor}`}
                        bgColor={colors.whiteColor}
                        fontColor={colors.darkBlueColor}
                        onClick={goBack}
                    />
                    <Button
                        title="카테고리 수정"
                        width={120}
                        height={38}
                        bgColor={colors.darkBlueColor}
                        fontColor={colors.whiteColor}
                        margin="0 0 0 20px"
                        onClick={handleUpdateModalOpen}
                    />
                </ButtonGroup>
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