import React from 'react';
import styled from "styled-components";
import HeaderContent from "../../../components/share/HeaderContent";
import ContentBox from "../../../components/share/ContentBox";
import colors from "../../../styles/colors";
import Button from "../../../components/share/Button";

const Wrapper = styled.div`
  padding: 20px;
`;
const ButtonGroup = styled.div`
  margin: 20px 20px 40px;
  text-align: right;
`;
const Content = styled.div`
  width: 100%;
  max-width: 1550px;
  min-height: calc(100vh - 300px);
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
  border: 1px solid ${colors.borderColor};
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  padding: 10px 20px;
  color: ${colors.deepNavyColor};
  border-bottom: 1px solid ${colors.borderColor};
  background-color: ${colors.theadBgColor};
`;

const CryptocurrencyApiPresentation = ({
                                           tabMenu,
                                           handleTabMenu,
                                           onAiUpdate
                                       }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="암호화폐 API"
                tabList={["암호화폐 API 목록"]}
            />
            <Wrapper>
                <ButtonGroup>
                    <Button
                        width={120}
                        height={38}
                        title="수정"
                        fontColor={colors.whiteColor}
                        bgColor={colors.darkBlueColor}
                        fontSize={18}
                        fontWeight={600}
                        onClick={onAiUpdate}
                    />
                </ButtonGroup>
                <Content>
                    <Title>
                        내용
                    </Title>
                </Content>
            </Wrapper>
        </ContentBox>
    )
}

export default CryptocurrencyApiPresentation;