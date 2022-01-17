import React from 'react';
import ContentBox from "../../../components/share/ContentBox";
import styled from "styled-components";
import HeaderContent from "../../../components/share/HeaderContent";

const Wrapper = styled.div`
  padding: 20px;
`;

const ServicePresentation = ({
                                 tabMenu,
                                 handleTabMenu,
                             }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="NFT 콜렉션"
                tabList={["콜렉션 목록", "콜렉션 추가"]}
            />
        </ContentBox>
    )
}

export default ServicePresentation;