import React from 'react';
import styled from "styled-components";
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";
import RecentNewsTableRow from "../../../components/feature/ServiceCenter/RecentNewsTableRow";
import colors from "../../../styles/colors";
import Button from "../../../components/share/Button";
import Paging from "../../../components/share/Paging";
import WysiwygEditor from "../../../components/share/WysiwygEditor";

const Wrapper = styled.div`
  padding: 20px;
`;
const ButtonGroup = styled.div`
  margin: 40px 20px 20px;
  text-align: right;
`;
const NewsList = styled.div`
  min-height: calc(100vh - 300px);
  border: 1px solid ${colors.borderColor};
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;
const PagingBox = styled.div`
  width: 500px;
  margin: 80px auto 20px;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  padding: 0 10px;
  color: ${colors.deepNavyColor};
  margin: 10px 0 20px;
`;
const AddNewsTable = styled.table`
  width: 100%;
  border-top: 2px solid ${colors.deepDarkGrayColor};
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
  border-bottom: 1px solid ${colors.deepDarkGrayColor};
  
  td {
    padding: 10px 16px;
    border: 1px solid ${colors.borderColor};
  }
`;
const InputBox = styled.div`
  width: 85%;
  height: 35px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${colors.borderColor};
  border-radius: 5px;
  padding: 0 10px;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
`;


const RecentNewsPresentation = ({
                                    tabMenu,
                                    handleTabMenu,
                                    newsList,
                                    currentPage,
                                    handleChangePage,
                                    totalCount,
                                }) => {

    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="최근 소식"
                tabList={["최근 소식 목록", " 소식 추가"]}
            />
            {tabMenu === 0 ?
                <>
                    <ButtonGroup>
                        <Button
                            width={120}
                            height={38}
                            title="소식 추가"
                            bgColor={colors.deepNavyColor}
                            fontColor={colors.whiteColor}
                            fontSize={16}
                            fontWeight={600}
                            onClick={() => handleTabMenu(1)}
                        />
                    </ButtonGroup>
                    <Wrapper>
                        <NewsList>
                            {newsList.map(list => (
                                <RecentNewsTableRow
                                    key={list.id}
                                    id={list.id}
                                    title={list.title}
                                    content={list.content}
                                    date={list.date}
                                />
                            ))}
                        </NewsList>
                    </Wrapper>
                    <PagingBox>
                        <Paging
                            currentPage={currentPage}
                            totalItemsCount={totalCount}
                            onChange={handleChangePage}
                            rowsPerPage={5}
                        />
                    </PagingBox>
                </>
                :
                <Wrapper>
                    <Title>최근 소식 추가</Title>
                    <AddNewsTable>
                        <tbody>
                        <tr>
                            <td>제목</td>
                            <td>
                                <InputBox>
                                    <Input
                                        placeholder="제목을 입력해주세요."
                                    />
                                </InputBox>
                            </td>
                        </tr>
                        <tr>
                            <td>제목</td>
                            <td>
                                <WysiwygEditor

                                />
                            </td>
                        </tr>
                        </tbody>
                    </AddNewsTable>
                </Wrapper>
            }
        </ContentBox>
    )
}

export default RecentNewsPresentation;