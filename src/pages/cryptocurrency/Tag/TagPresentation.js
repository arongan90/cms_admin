import React from 'react';
import styled from "styled-components";
import HeaderContent from "../../../components/share/HeaderContent";
import ListTable from "../../../components/share/Table/ListTable";
import ContentBox from "../../../components/share/ContentBox";
import colors from "../../../styles/colors";

const Wrapper = styled.div`
  padding: 20px;
`;
const TagListBox = styled.div`
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;

const TagPresentation = ({
                             tabMenu,
                             handleTabMenu,
                             tagTableColumns,
                         }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="태그"
                tabList={["태그"]}
            />
            <Wrapper>
                <TagListBox>
                    <ListTable
                        tableHeadColumns={tagTableColumns}
                    />
                </TagListBox>
            </Wrapper>
        </ContentBox>
    )
}

export default TagPresentation;