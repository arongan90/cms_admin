import React from 'react';
import styled from "styled-components";
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";
import RecentNewsTableRow from "../../../components/feature/ServiceCenter/RecentNewsTableRow";
import colors from "../../../styles/colors";

const Wrapper = styled.div`
  padding: 50px 20px;
`;
const ButtonGroup = styled.div`
  margin: 20px 20px 40px;
  text-align: right;
`;
const NewsList = styled.div`
  border: 1px solid ${colors.borderColor};
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;
const NewsTable = styled.div`
  border-top: 2px solid ${colors.deepDarkGrayColor};
  border-bottom: 1px solid ${colors.deepDarkGrayColor};
`;

const RecentNewsPresentation = ({
                                    tabMenu,
                                    handleTabMenu,
                                }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="최근 소식"
                tabList={["최근 소식 목록", " 소식 추가"]}
            />
            <ButtonGroup>

            </ButtonGroup>
            <Wrapper>
                <NewsList>
                    <RecentNewsTableRow

                    />
                </NewsList>
            </Wrapper>
        </ContentBox>
    )
}

export default RecentNewsPresentation;