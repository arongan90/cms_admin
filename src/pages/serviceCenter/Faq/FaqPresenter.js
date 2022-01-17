import React from 'react';
import ContentBox from "../../../components/share/ContentBox";
import styled from "styled-components";
import HeaderContent from "../../../components/share/HeaderContent";
import colors from "../../../styles/colors";
import FaqTableRow from "../../../components/feature/ServiceCenter/FaqTableRow";

const Wrapper = styled.div`
  padding: 40px 20px;
`;

const FaqList = styled.div`
  height: calc(100vh - 300px);
  border: 1px solid ${colors.borderColor};
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
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
            </Wrapper>
        </ContentBox>
    )
}

export default FaqPresenter;