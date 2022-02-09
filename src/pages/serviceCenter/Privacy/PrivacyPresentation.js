import React from 'react';
import styled from "styled-components";
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";

const Wrapper = styled.div`
  max-width: 1550px;
  padding: 20px 20px 100px;
`;

const PrivacyPresentation = ({
                                 tabMenu,
                                 handleTabMenu,
                             }) => {
    return (

        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="개인정보 취급방침"
                tabList={["개인정보 취급방침"]}
            />
            <Wrapper>
                개인정보 취급방침
            </Wrapper>
        </ContentBox>
    )
}

export default PrivacyPresentation;