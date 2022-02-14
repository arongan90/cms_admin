import React from 'react';
import ContentBox from "../../../components/share/ContentBox";
import styled from "styled-components";
import HeaderContent from "../../../components/share/HeaderContent";
import colors from "../../../styles/colors";
import FaqTableRow from "../../../components/feature/ServiceCenter/FaqTableRow";

const Wrapper = styled.div`
  padding: 20px;
`;
const TableBox = styled.div`
  padding: 20px;
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;
const FaqList = styled.div`
  height: calc(100vh - 300px);
  border: 1px solid ${colors.borderColor};
`;

const FaqPresenter = ({
                          tabMenu,
                          handleTabMenu,
                          faqList,
                      }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="FAQ"
                tabList={["FAQ 목록"]}
            />
            <Wrapper>
                <TableBox>
                    <FaqList>
                        {faqList.map(list => (
                            <FaqTableRow
                                key={list.id}
                                id={list.id}
                                title={list.title}
                                content={list.content}
                            />
                        ))}
                    </FaqList>
                </TableBox>
            </Wrapper>
        </ContentBox>
    )
}

export default FaqPresenter;