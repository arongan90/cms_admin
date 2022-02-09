import React from 'react';
import styled from "styled-components";
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";

const Wrapper = styled.div`
  max-width: 1550px;
  padding: 20px 20px 100px;
`;

const TermPresentation = ({
                              tabMenu,
                              handleTabMenu,
                          }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="이용약관"
                tabList={["이용약관"]}
            />
            <Wrapper>
                이용약관
            </Wrapper>
        </ContentBox>
    )
}

export default TermPresentation;