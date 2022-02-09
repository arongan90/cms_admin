import React from 'react';
import styled from "styled-components";
import HeaderContent from "../../../components/share/HeaderContent";
import ListTable from "../../../components/share/Table/ListTable";
import ContentBox from "../../../components/share/ContentBox";
import colors from "../../../styles/colors";
import Button from "../../../components/share/Button";
import {Modal} from "@material-ui/core";
import AddCategoryModal from "../../../components/feature/Cryptocurrency/AddCategoryModal";
import Paging from "../../../components/share/Paging";

const Wrapper = styled.div`
  padding: 20px;
`;
const CategoryListBox = styled.div`
  margin: 0 auto;
  padding: 0 0 50px;
  border-radius: 4px;
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;
const ButtonGroup = styled.div`
  margin: 0 20px 40px;
  text-align: right;
`;
const PagingBox = styled.div`
  width: 500px;
  margin: 80px auto 20px;
  li {
    background-color: ${colors.whiteColor};
  }
`;

const CategoryPresentation = ({
                                  tabMenu,
                                  handleTabMenu,
                                  categoryTableColumns,
                                  categoryList,
                                  addCategoryOpen,
                                  handleCategoryModalOpen,
                                  handleCategoryModalClose,
                                  categoryInputs,
                                  inputChange,
                                  onAddCategory,
                                  currentPage,
                                  handleChangePage,
                              }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="카테고리"
                tabList={["카테고리 목록"]}
            />
            <Wrapper>
                <ButtonGroup>
                    <Button
                        width={120}
                        height={38}
                        title="카테고리 추가"
                        bgColor={colors.deepNavyColor}
                        fontColor={colors.whiteColor}
                        fontSize={16}
                        fontWeight={600}
                        onClick={handleCategoryModalOpen}
                    />
                </ButtonGroup>
                <CategoryListBox>
                    <ListTable
                        tableHeadColumns={categoryTableColumns}
                        categoryList={categoryList}
                    />
                    <PagingBox>
                        <Paging
                            currentPage={currentPage}
                            totalItemsCount={categoryList && categoryList.length}
                            onChange={handleChangePage}
                            rowsPerPage={10}
                        />
                    </PagingBox>
                </CategoryListBox>
            </Wrapper>

            <Modal
                open={addCategoryOpen}
                onClose={handleCategoryModalClose}
            >
                <>
                    <AddCategoryModal
                        handleCategoryModalClose={handleCategoryModalClose}
                        categoryInputs={categoryInputs}
                        inputChange={inputChange}
                        onAddCategory={onAddCategory}
                    />
                </>
            </Modal>
        </ContentBox>
    )
}

export default CategoryPresentation;