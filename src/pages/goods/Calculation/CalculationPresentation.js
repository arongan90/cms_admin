import React from 'react';
import styled from "styled-components";
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";

const Wrapper = styled.div`
  max-width: 1550px;
  padding: 20px 20px 100px;
`;

const CalculationPresentation = ({
                                     tabMenu,
                                     handleTabMenu,
                                 }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="산정 방법"
                tabList={["산정 방법"]}
            />
            <Wrapper>
                산정 방법
            </Wrapper>
        </ContentBox>
    )
}

export default CalculationPresentation;