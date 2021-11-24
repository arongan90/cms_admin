import React from 'react';
import styled, {css} from "styled-components";
import colors from "../../../styles/colors";
import Button from "../../../components/share/Button";
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";
import ListTable from "../../../components/share/Table/ListTable";
import NewsInfoTable from "../../../components/feature/Cryptocurrency/NewsInfoTable";

const Wrapper = styled.div`
  padding: 20px;
`;
const ButtonGroup = styled.div`
  margin: 20px 20px 40px;
  text-align: right;
`;
const NewsListBox = styled.div`
  margin: 0 auto;
  padding: 0 0 50px;
  border-radius: 8px;
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;

const RelatedNewsPresentation = ({
                                     tabMenu,
                                     handleTabMenu,
                                     handleAddNews,
                                     newsTableColumns,
                                     newsList
                                 }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="관련 뉴스"
                tabList={["관련 뉴스", "관련 뉴스 등록"]}
            />
            <Wrapper>
                {tabMenu === 0 ?
                    <>
                        <ButtonGroup>
                            <Button
                                title="뉴스 추가"
                                width={150}
                                height={46}
                                fontColor={colors.whiteColor}
                                bgColor={colors.activeBlue}
                                fontSize={18}
                                onClick={handleAddNews}
                            />
                        </ButtonGroup>
                        <NewsListBox>
                            <ListTable
                                tableHeadColumns={newsTableColumns}
                                newsList={newsList}
                            />
                        </NewsListBox>
                    </>
                   :
                    <>
                        <NewsInfoTable

                        />
                        <ButtonGroup>
                            <Button
                                title="취소"
                                width={120}
                                height={50}
                                fontColor={colors.activeBlue}
                                bgColor={colors.whiteColor}
                                border={`1px solid ${colors.activeBlue}`}
                                fontSize={18}
                                onClick={handleAddNews}
                            />
                            <Button
                                title="등록"
                                margin="0 0 0 20px"
                                width={120}
                                height={50}
                                fontColor={colors.whiteColor}
                                bgColor={colors.activeBlue}
                                fontSize={18}
                                onClick={handleAddNews}
                            />
                        </ButtonGroup>
                    </>
                }
            </Wrapper>
        </ContentBox>
    )
}

export default RelatedNewsPresentation;