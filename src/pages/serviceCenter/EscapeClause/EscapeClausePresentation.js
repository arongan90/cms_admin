import React from 'react';
import styled from "styled-components";
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";

const Wrapper = styled.div`
  max-width: 1550px;
  padding: 20px 20px 100px;
`;

const EscapeClausePresentation = ({
                                      tabMenu,
                                      handleTabMenu,
                                  }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="면책 조항"
                tabList={["면책 조항"]}
            />
            <Wrapper>
                면책 조항
            </Wrapper>
        </ContentBox>
    )
}

export default EscapeClausePresentation;